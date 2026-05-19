import { NextResponse } from "next/server";
import { Pool } from "pg";
import nodemailer from "nodemailer";

type EarlyAccessPayload = {
  email?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = (forwardedFor?.split(",")[0]?.trim() || "unknown").slice(0, 100);
  const now = Date.now();
  const recentHits = (requestLog.get(clientIp) ?? []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS,
  );
  if (recentHits.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(clientIp, recentHits);
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }
  recentHits.push(now);
  requestLog.set(clientIp, recentHits);

  const databaseUrl = process.env.POSTGRES_DATABASE_URL;
  if (!databaseUrl) {
    return NextResponse.json(
      { error: "Missing POSTGRES_DATABASE_URL env var." },
      { status: 500 },
    );
  }

  let email = "";
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    try {
      const body = (await request.json()) as EarlyAccessPayload;
      email = body.email?.trim().toLowerCase() ?? "";
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }
  } else {
    const formData = await request.formData();
    email = String(formData.get("email") ?? "").trim().toLowerCase();
  }

  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  const pool = new Pool({ connectionString: databaseUrl });

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS early_access_requests (
        id BIGSERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    const insertResult = await pool.query(
      `
      INSERT INTO early_access_requests (email)
      VALUES ($1)
      ON CONFLICT (email) DO NOTHING;
      `,
      [email],
    );

    if (insertResult.rowCount === 0) {
      return NextResponse.json(
        { error: "Email already exists. Please use a different email." },
        { status: 409 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Database operation failed.", details: String(error) },
      { status: 500 },
    );
  } finally {
    await pool.end();
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailFrom = process.env.MAIL_FROM;

  if (!smtpHost || !smtpUser || !smtpPass || !mailFrom) {
    return NextResponse.json(
      {
        success: true,
        message:
          "Saved email, but SMTP env vars are missing so thank-you email was not sent.",
      },
      { status: 202 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to: email,
      subject: "Thanks for your interest",
      text: "Thank you for interest. We will get back to you soon.",
      html: "<p>Thank you for interest. We will get back to you soon.</p>",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: "Saved email, but failed to send thank-you email.",
        details: String(error),
      },
      { status: 202 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thank you for your interest. We will get back to you soon.",
  });
}

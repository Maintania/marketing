"use client";

import { ArrowRightIcon } from "@/components/icons/icons";
import { Reveal } from "@/components/motion/reveal";
import { Badge, Panel, SectionShell } from "@/components/ui/panel";
import { FormEvent, useState } from "react";

export function FinalCtaSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setStatus("idle");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Request failed. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Thank you for your interest. We will get back to you soon.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell id="early-access" className="pb-24">
      <Reveal>
        <Panel className="overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-3xl text-center">
              <Badge className="mb-5 border-[#E7473C]/24 bg-[#E7473C]/10 text-red-100">
                issue qualification infrastructure
              </Badge>
              <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
                Stop wasting engineering time on invalid issues.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                Put repository-aware validation, operational memory, and maintainer workflow intelligence in front of every developer support channel.
              </p>
              <form className="mt-6 flex w-full flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
                <label htmlFor="early-access-email" className="sr-only">
                  Work email
                </label>
                <input
                  id="early-access-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Work email"
                  className="h-11 w-full rounded-md border border-zinc-800 bg-zinc-950/70 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-[#E7473C]/50 focus:ring-2 focus:ring-[#E7473C]/20"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#E7473C] px-4 text-sm font-medium text-white transition hover:bg-[#ef5f55] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? "Submitting..." : "Get access"}
                  <ArrowRightIcon className="size-4" />
                </button>
              </form>
              {status !== "idle" ? (
                <p
                  className={`mt-3 text-sm ${
                    status === "success" ? "text-emerald-300" : "text-red-300"
                  }`}
                >
                  {message}
                </p>
              ) : null}
            </div>
          </div>
        </Panel>
      </Reveal>
    </SectionShell>
  );
}

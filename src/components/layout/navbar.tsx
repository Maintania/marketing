import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/icons";
import Image from "next/image";

const links = [
  ["Workflow", "/#workflow"],
  ["Analytics", "/#analytics"],
  ["Pricing", "/pricing"],
  ["Trust", "/#trust"],
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E7473C]/15 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" >
          <Image src="/logo.png" height={100} width={250} alt="logo"/>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-[#E7473C]/6 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
        <ButtonLink href="https://app.comainter.com/login" variant="secondary" className="h-9 px-3">
          Login
          <ArrowRightIcon className="size-4" />
        </ButtonLink>
        <ButtonLink href="https://app.comainter.com/login?freet-rial" variant="secondary" className="h-9 px-3">
          Get Free Trial
          <ArrowRightIcon className="size-4" />
        </ButtonLink>

      </nav>
    </header>
  );
}

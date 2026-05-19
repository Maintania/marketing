import { ArrowRightIcon } from "@/components/icons/icons";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Badge, Panel, SectionShell } from "@/components/ui/panel";

export function FinalCtaSection() {
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
              <form className=" mt-6 flex w-full flex-col gap-3 sm:flex-row" action="https://api.comainter.com/api/v1/request" method="get">
                <label htmlFor="early-access-email" className="sr-only">
                  Work email
                </label>
                <input
                  id="early-access-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Work email"
                  className="h-11 w-full rounded-md border border-zinc-800 bg-zinc-950/70 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-[#E7473C]/50 focus:ring-2 focus:ring-[#E7473C]/20"
                />
                 <ButtonLink href="#early-access" variant="primary" className="h-12 w-50 px-3">
                          Get access
                          <ArrowRightIcon className="size-4" />
                        </ButtonLink>
              </form>
            </div>
          </div>
        </Panel>
      </Reveal>
    </SectionShell>
  );
}

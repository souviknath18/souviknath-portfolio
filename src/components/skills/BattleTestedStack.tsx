"use client";
import { JetBrains_Mono } from "next/font/google";

import {
  Globe,
  Bolt,
  Database,
  Cloud,
  Copy,
  ArrowRight,
} from "lucide-react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

function StackBox({
  icon: Icon,
  title,
  subtitle,
  color,
  iconColor,
}: {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
  iconColor: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3 sm:gap-4">

      {/* BOX */}
      <div
        className={`relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-xl sm:rounded-2xl border ${color} bg-[#1a2236]/40`}
      >
        <Icon className={`h-7 w-7 sm:h-9 sm:w-9 ${iconColor}`} />
      </div>

      {/* TEXT */}
      <div>
        <p className="text-[18px] sm:text-[20px] font-semibold text-[#adc7ff]">
          {title}
        </p>
        <p className={`${jetbrainsMono.className} text-[12px] sm:text-[14px] text-[#7d8496]`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function BattleTestedStack() {
  return (
    <section className="mb-24">

      {/* TITLE */}
      <h2 className="mb-8 sm:mb-10 text-center text-[28px] sm:text-[34px] font-semibold text-[#e8edff]">
        The Battle-Tested Stack
      </h2>

      {/* CENTER WRAPPER (MATCHES YOUR SKILLS WIDTH) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-4">

        {/* TERMINAL */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#131b2e]">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#1a2236]">

            {/* TRAFFIC LIGHTS */}
            <div className="flex gap-1.5 sm:gap-2">
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500/60" />
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500/60" />
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500/60" />
            </div>

            {/* TITLE */}
            <p
              className={`${jetbrainsMono.className} text-[10px] sm:text-[12px] md:text-[14px] font-mono tracking-[0.12em] text-[#7d8496]`}
            >
              ARCHITECTURE_MANIFESTO_V3.CONFIG
            </p>

            {/* COPY */}
            <Copy size={16} className="text-[#7d8496]" />
          </div>

          {/* STACK FLOW */}
          <div className="flex flex-col items-center justify-between gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:gap-10 lg:px-16">

            <StackBox
              icon={Globe}
              title="Next.js"
              subtitle="Interface Layer"
              color="border-cyan-400/40"
              iconColor="text-cyan-300"
            />

            <>
              <ArrowRight className="hidden text-[#6a7186] lg:block" />

              <ArrowRight className="rotate-90 text-[#6a7186] lg:hidden" />
            </>

            <StackBox
              icon={Bolt}
              title="FastAPI"
              subtitle="Logic Engine"
              color="border-blue-400/40"
              iconColor="text-blue-300"
            />

            <>
              <ArrowRight className="hidden text-[#6a7186] lg:block" />

              <ArrowRight className="rotate-90 text-[#6a7186] lg:hidden" />
            </>

            <StackBox
              icon={Database}
              title="PostgreSQL"
              subtitle="Persistence"
              color="border-orange-400/40"
              iconColor="text-orange-300"
            />

            <>
              <ArrowRight className="hidden text-[#6a7186] lg:block" />

              <ArrowRight className="rotate-90 text-[#6a7186] lg:hidden" />
            </>

            <StackBox
              icon={Cloud}
              title="AWS"
              subtitle="Cloud Fabric"
              color="border-cyan-300/40"
              iconColor="text-cyan-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
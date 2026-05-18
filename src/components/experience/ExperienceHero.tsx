"use client";

import { JetBrains_Mono, Montserrat } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function ExperienceHero() {
  return (
    <section className="px-6 md:px-10 lg:px-8 xl:px-12 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24">

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

        {/* TOP BADGE */}
        <div className="mb-6 flex items-center gap-2 sm:gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/[0.03] px-3 sm:px-4 py-[4px] sm:py-[5px]">

          {/* ANIMATED CYAN DOT */}
          <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />

            <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

          </div>

          {/* BADGE TEXT */}
          <span className={`${jetbrainsMono.className} text-[10px] sm:text-[12px] uppercase tracking-[0.14em] sm:tracking-[0.16em] text-cyan-300`}>
            Software Engineering & AI Systems
          </span>

        </div>

        {/* HEADING */}
        <h1
          className={`${montserrat.className} text-[42px] sm:text-[56px] md:text-[78px] font-[700] leading-[0.95] tracking-[-0.05em]`}
        >
          <span className="text-[#dae2fd]">
            Career
          </span>{" "}

          <span className="bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-transparent">
            Odyssey
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="mt-6 sm:mt-7 max-w-2xl text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.9] text-[#8b90a0]"
        >
          A retrospective of building scalable, intelligence-driven
          applications. From modern web platforms to AI-powered
          systems, I focus on engineering secure, performant,
          and production-ready digital experiences.
        </p>

      </div>

    </section>
  );
}
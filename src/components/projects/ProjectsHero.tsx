"use client";

import {
  Inter,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const projectFocusAreas = [
  "Full Stack SaaS",
  "AI-Powered Products",
  "Fintech Systems",
  "Production APIs",
];

export default function ProjectsHero() {
  return (
    <section className="px-6 pb-20 pt-28 md:px-10 md:pb-24 md:pt-32 lg:px-8 lg:pt-36 xl:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Top Badge */}
        <div className="mb-6 flex items-center gap-2.5 rounded-full border border-cyan-300/25 bg-cyan-300/[0.035] px-4 py-1.5">
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </div>

          <span
            className={`${jetbrainsMono.className} text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px] md:text-[12px]`}
          >
            Selected Full Stack & AI Projects
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`${montserrat.className} text-[40px] font-[800] leading-[1.02] tracking-[-0.05em] sm:text-[50px] md:text-[64px] lg:text-[70px]`}
        >
          <span className="text-[#dae2fd]">Projects Built for</span>

          <span className="mt-1 block bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-transparent">
            Real-World Problems
          </span>
        </h1>

        {/* Description */}
        <p
          className={`${inter.className} mt-6 max-w-3xl text-[14px] leading-[1.85] text-[#8f9ab2] sm:text-[15px] md:text-[16px]`}
        >
          A collection of full-stack and AI-powered applications built using
          Next.js, TypeScript, Django REST Framework, FastAPI, PostgreSQL,
          OpenAI, Celery, Redis, vector search, and cloud infrastructure.
        </p>

        <p
          className={`${inter.className} mt-4 max-w-2xl text-[13px] leading-[1.8] text-[#727e95] sm:text-[14px]`}
        >
          These projects demonstrate production API design, asynchronous
          processing, secure authentication, intelligent document workflows,
          semantic search, and scalable SaaS architecture.
        </p>

        {/* Focus Areas */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {projectFocusAreas.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 sm:px-4"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

              <span
                className={`${jetbrainsMono.className} text-[9px] uppercase tracking-[0.1em] text-[#a8b4ca] sm:text-[10px] md:text-[11px]`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Project Summary */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 backdrop-blur-sm">
            <p
              className={`${montserrat.className} text-[20px] font-[700] text-[#adc7ff] sm:text-[22px]`}
            >
              Aura Finance
            </p>

            <p
              className={`${jetbrainsMono.className} mt-1.5 text-[9px] uppercase tracking-[0.1em] text-[#738097] sm:text-[10px]`}
            >
              AI Finance SaaS
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 backdrop-blur-sm">
            <p
              className={`${montserrat.className} text-[20px] font-[700] text-cyan-300 sm:text-[22px]`}
            >
              MvLEND
            </p>

            <p
              className={`${jetbrainsMono.className} mt-1.5 text-[9px] uppercase tracking-[0.1em] text-[#738097] sm:text-[10px]`}
            >
              Fintech Platform
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 backdrop-blur-sm">
            <p
              className={`${montserrat.className} text-[20px] font-[700] text-[#adc7ff] sm:text-[22px]`}
            >
              40+
            </p>

            <p
              className={`${jetbrainsMono.className} mt-1.5 text-[9px] uppercase tracking-[0.1em] text-[#738097] sm:text-[10px]`}
            >
              Production APIs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  JetBrains_Mono,
  Montserrat,
  Inter,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function SkillsHero() {
  return (
    <section className="px-6 pb-20 pt-28 md:px-10 md:pb-24 md:pt-32 lg:px-8 lg:pt-36 xl:px-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Top Badge */}
        <div className="mb-5 rounded-full border border-cyan-300/25 bg-cyan-300/[0.035] px-3 py-1 sm:px-4">
          <span
            className={`${jetbrainsMono.className} text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px] md:text-[12px]`}
          >
            Full Stack • Backend • AI • Cloud
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`${montserrat.className} text-[38px] font-[800] leading-[1.08] tracking-[-0.04em] text-[#dae2fd] sm:text-[46px] md:text-[58px] lg:text-[66px]`}
        >
          Technical Skills
          <span className="mt-1 block bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-transparent">
            Built for Real-World Systems
          </span>
        </h1>

        {/* Description */}
        <p
          className={`${inter.className} mt-6 max-w-3xl text-[14px] leading-[1.8] text-[#8f9ab2] sm:text-[15px] md:text-[16px]`}
        >
          I build scalable full-stack applications, production-ready APIs,
          fintech systems, and AI-powered SaaS products using Next.js,
          TypeScript, Django, FastAPI, PostgreSQL, Celery, Redis, Kafka,
          OpenAI, RAG, vector search, Docker, and cloud technologies.
        </p>

        {/* Supporting Text */}
        <p
          className={`${inter.className} mt-4 max-w-2xl text-[13px] leading-[1.8] text-[#737f97] sm:text-[14px]`}
        >
          My focus is on clean architecture, secure API design, asynchronous
          processing, database performance, reliable deployment, and practical
          AI integration.
        </p>

        {/* Status */}
        <div className="mt-8 flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 sm:mt-10">
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </div>

          <span
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.08em] text-cyan-300 sm:text-[11px] md:text-[12px]`}
          >
            Currently expanding into Agentic AI, AWS, Kubernetes, and advanced
            system design
          </span>
        </div>
      </div>
    </section>
  );
}
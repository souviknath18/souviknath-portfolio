"use client";

import {
  JetBrains_Mono,
  Montserrat,
  Inter,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ExperienceHero() {
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
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px] md:text-[12px]`}
          >
            3+ Years • Fintech • Full Stack • AI
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`${montserrat.className} text-[40px] font-[800] leading-[1.02] tracking-[-0.05em] sm:text-[52px] md:text-[66px] lg:text-[72px]`}
        >
          <span className="text-[#dae2fd]">Professional</span>{" "}
          <span className="bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>

        {/* Description */}
        <p
          className={`${inter.className} mt-6 max-w-3xl text-[14px] leading-[1.85] text-[#8f9ab2] sm:text-[15px] md:text-[16px]`}
        >
          My experience spans enterprise fintech platforms, production-grade
          REST APIs, asynchronous processing, event-driven systems, database
          optimization, cloud deployment, and AI-powered SaaS applications.
        </p>

        <p
          className={`${inter.className} mt-4 max-w-2xl text-[13px] leading-[1.8] text-[#727e95] sm:text-[14px]`}
        >
          I work across Next.js, TypeScript, Django, Django REST Framework,
          FastAPI, PostgreSQL, Celery, Redis, Kafka, Docker, GCP, and modern AI
          technologies including OpenAI, RAG, embeddings, and semantic search.
        </p>

        {/* Highlights */}
        <div className="mt-9 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 backdrop-blur-sm">
            <p
              className={`${montserrat.className} text-[22px] font-[700] text-[#adc7ff]`}
            >
              3+
            </p>

            <p
              className={`${jetbrainsMono.className} mt-1 text-[10px] uppercase tracking-[0.1em] text-[#738097]`}
            >
              Years Experience
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 backdrop-blur-sm">
            <p
              className={`${montserrat.className} text-[22px] font-[700] text-cyan-300`}
            >
              40+
            </p>

            <p
              className={`${jetbrainsMono.className} mt-1 text-[10px] uppercase tracking-[0.1em] text-[#738097]`}
            >
              Production APIs
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 backdrop-blur-sm">
            <p
              className={`${montserrat.className} text-[20px] font-[700] text-[#adc7ff]`}
            >
              Fintech
            </p>

            <p
              className={`${jetbrainsMono.className} mt-1 text-[10px] uppercase tracking-[0.1em] text-[#738097]`}
            >
              Production Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
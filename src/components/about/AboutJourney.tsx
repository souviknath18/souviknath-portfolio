"use client";

import {
  Inter,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AboutJourney() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-8 xl:px-4">
      <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.85fr_1.35fr]">
        {/* LEFT SIDE */}
        <div>
          <p
            className={`${jetbrainsMono.className} mb-4 text-[11px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[12px]`}
          >
            My Journey
          </p>

          <h2
            className={`${montserrat.className} text-[28px] font-[600] leading-[1.15] tracking-[-0.04em] sm:text-[34px] md:text-[38px] lg:text-[42px]`}
          >
            <span className="text-[#adc7ff]">From Full Stack</span>

            <br />

            <span className="text-[#e7ecff]">to AI-Powered Systems</span>
          </h2>

          <p
            className={`${inter.className} mt-5 max-w-sm text-[13px] leading-7 text-[#7f8ba3] sm:text-[14px]`}
          >
            Building on a strong software engineering foundation while
            expanding into practical AI, intelligent workflows, and scalable
            SaaS products.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="rounded-2xl border border-white/10 bg-[#131b2eb3] px-5 py-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)] sm:px-7 sm:py-8 md:px-10 md:py-10">
            <div className="space-y-6">
              <p
                className={`${inter.className} text-[14px] leading-[1.9] text-[#aeb9d4] sm:text-[15px] md:text-[16px]`}
              >
                My journey began with full-stack development, building
                production web applications using React, Next.js, TypeScript,
                Django, Django REST Framework, FastAPI, and PostgreSQL. Working
                on enterprise fintech systems helped me strengthen my skills in
                API design, authentication, asynchronous processing, database
                optimization, and scalable backend architecture.
              </p>

              <p
                className={`${inter.className} text-[14px] leading-[1.9] text-[#aeb9d4] sm:text-[15px] md:text-[16px]`}
              >
                Over time, I expanded into AI-powered product development,
                working with OpenAI APIs, embeddings, semantic search,
                Retrieval-Augmented Generation, and vector databases. That
                journey led me to build Aura Finance, an AI-powered personal
                finance platform that combines intelligent document
                processing, transaction categorization, background jobs, and
                financial insights.
              </p>

              <p
                className={`${inter.className} text-[14px] leading-[1.9] text-[#aeb9d4] sm:text-[15px] md:text-[16px]`}
              >
                Today, I focus on building reliable full-stack and AI systems
                that combine clean architecture, production-grade APIs,
                thoughtful user experience, and practical AI workflows.
              </p>

              {/* Quote */}
              <div className="rounded-r-xl border-l-[3px] border-cyan-300 bg-cyan-300/[0.035] px-4 py-4 sm:px-6 sm:py-5">
                <p
                  className={`${jetbrainsMono.className} text-[12px] leading-[1.8] text-[#cfe0ff] sm:text-[13px] md:text-[14px]`}
                >
                  &quot;I enjoy building intelligent products that combine
                  scalable engineering, clean architecture, and practical AI
                  to solve real-world problems.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
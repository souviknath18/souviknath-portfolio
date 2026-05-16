"use client";

import Link from "next/link";
import { ExternalLink, Code } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-4">

      {/* Header */}
      <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-[32px] font-semibold tracking-tight text-[#dae2fd] sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-xl text-[14px] leading-[1.7] text-[#8b90a0] md:text-base">
            Building real-world AI-powered applications with modern full-stack technologies.
          </p>
        </div>

        <div className="flex justify-start md:block">
          <Link
            href="/projects"
            className="text-sm font-bold text-[#adc7ff] transition hover:text-cyan-300"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 md:gap-10">

        {/* PROJECT 1 - EXPENSIGHT */}
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">

          {/* IMAGE */}
          <div className="relative h-56 overflow-hidden sm:h-64 md:h-72">
            <div className="h-full w-full bg-gradient-to-br from-[#1b2a4a] to-[#0b1326]" />

            <div className="absolute bottom-4 left-4">
              <span className="rounded-md border border-[#adc7ff]/10 bg-[#0b1f33]/90 px-2.5 py-1 text-[12px] font-semibold text-[#adc7ff] backdrop-blur-md sm:px-3 sm:text-sm">
                AI Finance
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-5 p-5 sm:p-6 md:p-8">

            <h3 className="text-[24px] font-semibold leading-[1.25] text-[#dae2fd] sm:text-[28px] md:text-3xl">
              Expensight
            </h3>

            <p className="text-[14px] leading-[1.8] text-[#cdd5f0] sm:text-[15px] md:text-[16px]">
              AI-powered personal finance assistant that automatically categorizes expenses, 
              tracks spending patterns, and delivers intelligent financial insights through natural conversation.
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js", "Django", "RAG", "OpenAI", "PostgreSQL"].map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-full border border-[#1f2a3a] bg-[#0b1b2a] px-2.5 py-1 text-[11px] text-[#adc7ff] sm:px-3 sm:text-[12px]`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap items-center gap-5 pt-3 sm:gap-7">

              <a className="flex items-center gap-2 text-[13px] font-semibold text-[#63f7ff] hover:text-cyan-300 sm:text-sm">
                Live Demo <ExternalLink size={16} />
              </a>

              <a className="flex items-center gap-2 text-[13px] font-semibold text-[#8b90a0] hover:text-[#dae2fd] sm:text-sm">
                GitHub <Code size={16} />
              </a>

            </div>

          </div>
        </div>

        {/* PROJECT 2 - AI CAREER COACH */}
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">

          {/* IMAGE */}
          <div className="relative h-56 overflow-hidden sm:h-64 md:h-72">
            <div className="h-full w-full bg-gradient-to-br from-[#1a3a3a] to-[#0b1326]" />

            <div className="absolute bottom-4 left-4">
              <span className="rounded-md border border-[#adc7ff]/10 bg-[#0b1f33]/90 px-2.5 py-1 text-[12px] font-semibold text-[#adc7ff] backdrop-blur-md sm:px-3 sm:text-sm">
                AI Web App
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-5 p-5 sm:p-6 md:p-8">

            <h3 className="text-[24px] font-semibold leading-[1.25] text-[#dae2fd] sm:text-[28px] md:text-3xl">
              AI Career Coach
            </h3>

            <p className="text-[14px] leading-[1.8] text-[#cdd5f0] sm:text-[15px] md:text-[16px]">
              Intelligent web-based career guidance platform that analyzes resumes, 
              provides job matching, mock interviews, and personalized career advice 
              using RAG and LLM technologies.
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js", "FastAPI", "LangChain", "RAG", "OpenAI"].map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-full border border-[#1f2a3a] bg-[#0b1b2a] px-2.5 py-1 text-[11px] text-[#adc7ff] sm:px-3 sm:text-[12px]`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap items-center gap-5 pt-3 sm:gap-7">

              <a className="flex items-center gap-2 text-[13px] font-semibold text-[#63f7ff] hover:text-cyan-300 sm:text-sm">
                Live Demo <ExternalLink size={16} />
              </a>

              <a className="flex items-center gap-2 text-[13px] font-semibold text-[#8b90a0] hover:text-[#dae2fd] sm:text-sm">
                GitHub <Code size={16} />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
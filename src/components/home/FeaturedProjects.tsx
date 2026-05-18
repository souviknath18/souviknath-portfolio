"use client";

import Link from "next/link";
import { Code } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";
import ProjectImageSlider from "./ProjectImageSlider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const financeImages: {
  src: string;
  alt: string;
}[] = [
  {
    src: "/projects/finance-dashboard.png",
    alt: "AI Finance Assistant dashboard screen",
  },
  {
    src: "/projects/finance-transactions.png",
    alt: "AI Finance Assistant transactions screen",
  },
  {
    src: "/projects/finance-upload.png",
    alt: "AI Finance Assistant upload screen",
  },
];

const careerCoachImages: {
  src: string;
  alt: string;
}[] = [
  // {
  //   src: "/projects/career-coach-dashboard.png",
  //   alt: "AI Career Coach dashboard screen",
  // },
  // {
  //   src: "/projects/career-coach-resume.png",
  //   alt: "AI Career Coach resume analysis screen",
  // },
  // {
  //   src: "/projects/career-coach-chat.png",
  //   alt: "AI Career Coach chat screen",
  // },
];

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

        {/* PROJECT 1 - AI FINANCE ASSISTANT */}
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">

          {/* IMAGE */}
          <ProjectImageSlider
            badge="AI Finance"
            images={financeImages}
          />

          {/* CONTENT */}
          <div className="space-y-5 p-5 sm:p-6 md:p-8">

            <h3 className="text-[24px] font-semibold leading-[1.25] text-[#dae2fd] sm:text-[28px] md:text-3xl">
              AI Finance Insights
            </h3>

            <p className="text-[14px] leading-[1.8] text-[#cdd5f0] sm:text-[15px] md:text-[16px]">
              AI-powered finance platform that processes financial documents, extracts transaction data, categorizes expenses, and delivers intelligent financial insights using LLM workflows.
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

              {/* <a
                href="https://your-live-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-semibold text-[#63f7ff] hover:text-cyan-300 sm:text-sm"
              >
              </a> */}

              <a
                href="https://github.com/souviknath18/ai-finance-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-semibold text-[#8b90a0] hover:text-[#dae2fd] sm:text-sm"
              >
                GitHub <Code size={16} />
              </a>

            </div>

          </div>
        </div>

        {/* PROJECT 2 - AI CAREER COACH */}
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">

          {/* IMAGE */}
          <ProjectImageSlider
            badge="AI Web App"
            images={careerCoachImages}
          />

          {/* CONTENT */}
          <div className="space-y-5 p-5 sm:p-6 md:p-8">

            <h3 className="text-[24px] font-semibold leading-[1.25] text-[#dae2fd] sm:text-[28px] md:text-3xl">
              AI Career Coach
            </h3>

            <p className="text-[14px] leading-[1.8] text-[#cdd5f0] sm:text-[15px] md:text-[16px]">
              AI-powered career guidance platform that analyzes resumes, matches candidates with job descriptions, conducts mock interviews, and delivers personalized career insights using LLM and RAG workflows.
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js", "Django", "LangChain", "RAG", "OpenAI"].map((item) => (
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

              {/* <a
                href="https://your-live-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-semibold text-[#63f7ff] hover:text-cyan-300 sm:text-sm"
              >
              </a> */}

              <a
                href="https://github.com/souviknath18/ai-career-coach"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-semibold text-[#8b90a0] hover:text-[#dae2fd] sm:text-sm"
              >
                GitHub <Code size={16} />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
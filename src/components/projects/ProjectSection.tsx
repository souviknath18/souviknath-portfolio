"use client";

import Link from "next/link";
import Image from "next/image";
import { Rocket, Github, Code2, CheckCircle2, Zap, Shield } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

function TechTag({ text }: { text: string }) {
  return (
    <span
      className={`
        ${jetbrainsMono.className}
        bg-[#1b2438]
        border border-white/5
        text-[#c1c6d7]
        px-3 py-1.5
        rounded
        text-[11px] sm:text-[13px]
        tracking-wide
      `}
    >
      {text}
    </span>
  );
}

function TechTagSmall({ text }: { text: string }) {
  return (
    <span
      className={`
        ${jetbrainsMono.className}
        bg-[#1b2438]
        border border-white/5
        text-[#c1c6d7]
        px-2 py-1
        rounded
        text-[12px]
        tracking-wide
      `}
    >
      {text}
    </span>
  );
}

const imageSrc1 = "";
const imageSrc2 = "";

export default function ProjectSection() {
  return (
    <section className="px-6 py-16 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-4 sm:gap-6">

          {/* ================= LEFT BIG PROJECT ================= */}
          <div className="md:col-span-8 rounded-2xl overflow-hidden border border-white/10 bg-[#131b2e] transition-all duration-300 hover:border-cyan-300/20 hover:-translate-y-1">

            {/* IMAGE TOP HALF */}
            <div className="relative h-[220px] sm:h-[240px] sm:h-[300px] md:h-[360px] bg-[#1a2236] overflow-hidden">
              {imageSrc1 ? (
                <Image
                  src={imageSrc1}
                  alt="Expensight"
                  fill
                  className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#7d8496] font-mono text-[12px] uppercase tracking-widest bg-[#1a2236]">
                  Project Image Coming Soon
                </div>
              )}

              <div className="absolute top-4 left-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] bg-[#4a8eff]/20 border border-[#4a8eff]/30 text-[#adc7ff] px-3 py-1 rounded-full">
                  AI Finance SaaS
                </span>
              </div>
            </div>

            {/* CONTENT BOTTOM HALF */}
            <div className="p-5 sm:p-6 lg:p-8">

              {/* TOP ROW */}
              <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-6">

                {/* LEFT TEXT */}
                <div className="flex-1">
                  <h3 className="text-[24px] sm:text-[26px] lg:text-[28px] font-semibold text-[#e8edff]">
                    Expensight
                  </h3>

                  <p className="mt-3 text-[15px] sm:text-[15px] lg:text-[16px] text-[#cfd6e6] leading-[1.8]">
                    AI-powered personal finance platform utilizing RAG workflows and semantic
                    retrieval to generate contextual spending insights, intelligent budgeting,
                    and conversational financial analysis from uploaded transaction data.
                  </p>
                </div>

                {/* RIGHT ARCH BOX */}
                <div className="w-full md:w-[260px] lg:w-[270px] shrink-0 bg-[#1b2438] border border-cyan-300/20 rounded-md p-4">
                  <p className={`${jetbrainsMono.className} font-semibold text-[11px] text-[#7d8496] uppercase`}>
                    Architecture Why?
                  </p>
                  <p className="mt-2 text-[14px] sm:text-[15px] lg:text-[16px] text-cyan-200 leading-[1.5]">
                    RAG + Vector Retrieval for Context-Aware Financial Insights
                  </p>
                </div>
              </div>

              {/* FEATURES + TECH STACK */}
              <div className="grid md:grid-cols-2 gap-10 mt-8">

                {/* FEATURES */}
                <div>
                  <h4 className={`${jetbrainsMono.className} font-semibold text-sm text-[#7d8496] uppercase mb-4`}>
                    Key Features
                  </h4>

                  <div className="space-y-3 text-[14px] sm:text-[15px] lg:text-[16px] text-[#cfd6e6]">

                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] shrink-0 text-cyan-300 w-4 h-4" />
                      <span>AI Expense Categorization & Insights</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] shrink-0 text-cyan-300 w-4 h-4" />
                      <span>Semantic Search Across Transactions</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] shrink-0 text-cyan-300 w-4 h-4" />
                      <span>Financial Memory & Budget Tracking</span>
                    </div>

                  </div>
                </div>

                {/* TECH STACK */}
                <div>
                  <h4 className={`${jetbrainsMono.className} font-semibold text-sm text-[#7d8496] uppercase mb-4`}>
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    <TechTag text="TypeScript" />
                    <TechTag text="Next.js" />
                    <TechTag text="PostgreSQL" />
                    <TechTag text="OpenAI API" />
                    <TechTag text="LangChain" />
                  </div>
                </div>
              </div>

              {/* ACTION BAR */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 pt-6 border-t border-white/5">

                <a href="#" className="flex items-center gap-2 text-cyan-300 hover:text-[#dae2fd] cursor-pointer">
                  <Rocket size={18} />
                  <span className="font-semibold text-sm">Live Demo</span>
                </a>

                <a href="#" className="flex items-center gap-2 text-[#8b90a0] hover:text-[#dae2fd] cursor-pointer">
                  <Code2 size={18} />
                  <span className="font-semibold text-sm">Frontend Repo</span>
                </a>

                <a href="#" className="flex items-center gap-2 text-[#8b90a0] hover:text-[#dae2fd] cursor-pointer">
                  <Github size={18} />
                  <span className="font-semibold text-sm">GitHub Org</span>
                </a>

              </div>

            </div>
          </div>

          {/* ================= RIGHT SMALL PROJECT ================= */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden border border-white/10 bg-[#131b2e] transition-all duration-300 hover:border-cyan-300/20">

            <div className="h-[220px] sm:h-[240px] bg-[#1a2236] relative overflow-hidden flex items-center justify-center">

              {/* IMAGE */}
              {imageSrc2 ? (
                <Image
                  src={imageSrc2}
                  alt="AI Career Coach"
                  fill
                  className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="text-[#7d8496] font-mono text-[12px] uppercase tracking-widest text-center px-4">
                  Project Image Coming Soon
                </div>
              )}

              <div className="absolute top-4 left-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] bg-orange-300/15 border border-orange-300/30 text-orange-300 px-3 py-1 rounded-full">
                  AI PLATFORM
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-6">

              {/* TITLE */}
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#e8edff]">
                AI Career Coach
              </h3>

              <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.7] text-[#cfd6e6]">
                AI-powered career platform focused on resume analysis, ATS optimization,
                job matching, and personalized interview preparation workflows.
              </p>

              {/* ARCHITECTURE BOX */}
              <div className="mt-4 bg-[#1b2438] border border-white/5 rounded-md p-3">
                <p className={`${jetbrainsMono.className} font-semibold text-[10px] text-[#7d8496] uppercase tracking-widest`}>
                  Architecture
                </p>
                <p className="mt-1 text-[13px] sm:text-[14px] leading-[1.7] text-cyan-200">
                  Resume-Aware RAG Pipeline
                </p>
              </div>

              {/* FEATURES */}
              <div className="mt-4 space-y-3">

                <div className="flex items-start gap-2">
                  <Zap className="mt-[2px] shrink-0 text-cyan-300 w-4 h-4" />
                  <span className="text-[#cfd6e6] text-[11px] sm:text-[13px]">
                    Resume Analysis & ATS Optimization
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <Shield className="mt-[2px] shrink-0 text-cyan-300 w-4 h-4" />
                  <span className="text-[#cfd6e6] text-[11px] sm:text-[13px]">
                    Job Match Scoring & AI Interview Prep
                  </span>
                </div>

              </div>

              {/* TECH STACK */}
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="mt-4">
                  <h4 className={`${jetbrainsMono.className} font-semibold text-[12px] text-[#7d8496] uppercase tracking-widest mb-2`}>
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    <TechTagSmall text="Next.js" />
                    <TechTagSmall text="PostgreSQL" />
                    <TechTagSmall text="OpenAI" />
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="my-5 border-t border-white/5" />

              {/* ACTIONS */}
              <div className="flex flex-col gap-3 text-[11px] sm:text-[13px]">

                <a href="#" className="flex items-center gap-2 font-semibold text-sm text-cyan-300 hover:text-[#dae2fd]">
                  <Rocket className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>

                <a href="#" className="flex items-center gap-2 font-semibold text-sm text-[#8b90a0] hover:text-[#dae2fd]">
                  <Code2 className="w-4 h-4" />
                  <span>Frontend Repo</span>
                </a>

                <a href="#" className="flex items-center gap-2 font-semibold text-sm text-[#8b90a0] hover:text-[#dae2fd]">
                  <Github className="w-4 h-4" />
                  <span>GitHub Org</span>
                </a>

              </div>
            </div>
          </div>

          {/* ================= BOTTOM LEFT SMALL PROJECT ================= */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden border border-white/10 bg-[#131b2e] transition-all duration-300 hover:border-cyan-300/20">

            {/* IMAGE SECTION */}
            <div className="h-[220px] sm:h-[240px] bg-[#1a2236] relative overflow-hidden flex items-center justify-center">

              {/* IMAGE */}
              {imageSrc2 ? (
                <Image
                  src={imageSrc2}
                  alt="Sentinel API"
                  fill
                  className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="text-[#7d8496] font-mono text-[12px] uppercase tracking-widest text-center px-4">
                  Project Image Coming Soon
                </div>
              )}

              {/* BADGE */}
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] bg-cyan-300/15 border border-cyan-300/30 text-cyan-300 px-3 py-1 rounded-full">
                  AI SECURITY SAAS
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-6">

              {/* TITLE */}
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#e8edff]">
                Sentinel API
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.7] text-[#cfd6e6]">
                AI-powered API observability and security platform focused on intelligent
                monitoring, anomaly detection, fraud analysis, and real-time threat insights
                for modern backend infrastructure.
              </p>

              {/* ARCHITECTURE BOX */}
              <div className="mt-4 bg-[#1b2438] border border-white/5 rounded-md p-3">
                <p className={`${jetbrainsMono.className} font-semibold text-[10px] text-[#7d8496] uppercase tracking-widest`}>
                  Architecture
                </p>

                <p className="mt-1 text-[13px] sm:text-[14px] leading-[1.7] text-cyan-200">
                  AI Monitoring + Threat Detection Architecture
                </p>
              </div>

              {/* FEATURES */}
              <div className="mt-4 space-y-3">

                <div className="flex items-start gap-2">
                  <Zap className="text-cyan-300 w-4 h-4" />

                  <span className="text-[#cfd6e6] text-[11px] sm:text-[13px]">
                    Real-time API Monitoring & Alerting
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <Shield className="text-cyan-300 w-4 h-4" />

                  <span className="text-[#cfd6e6] text-[11px] sm:text-[13px]">
                    AI-based Threat & Anomaly Detection
                  </span>
                </div>

              </div>

              {/* TECH STACK */}
              <div className="mt-4 flex flex-wrap gap-2">

                <div className="mt-4">
                  <h4 className={`${jetbrainsMono.className} font-semibold text-[12px] text-[#7d8496] uppercase tracking-widest mb-2`}>
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    <TechTagSmall text="Next.js" />
                    <TechTagSmall text="Django" />
                    <TechTagSmall text="PostgreSQL" />
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="my-5 border-t border-white/5" />

              {/* ACTIONS */}
              <div className="flex flex-col gap-3 text-[11px] sm:text-[13px]">

                <a href="#" className="flex items-center gap-2 font-semibold text-sm text-cyan-300 hover:text-[#dae2fd]">
                  <Rocket className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>

                <a href="#" className="flex items-center gap-2 font-semibold text-sm text-[#8b90a0] hover:text-[#dae2fd]">
                  <Code2 className="w-4 h-4" />
                  <span>Frontend Repo</span>
                </a>

                <a href="#" className="flex items-center gap-2 font-semibold text-sm text-[#8b90a0] hover:text-[#dae2fd]">
                  <Github className="w-4 h-4" />
                  <span>GitHub Org</span>
                </a>

              </div>
            </div>
          </div>

          {/* ================= BOTTOM RIGHT BIG SECTION ================= */}
          <div className="md:col-span-8 rounded-2xl border border-dashed border-white/10 bg-[#131b2e] overflow-hidden">

            <div className="flex flex-col md:flex-row md:items-center gap-8 p-8 md:p-10 h-full min-h-[340px] sm:min-h-[420px]">

              {/* LEFT VISUAL BOX */}
              <div className="w-full md:w-1/2 flex items-center">

                <div className="relative w-full h-[260px] rounded-lg border border-cyan-300/10 bg-[#1b2438] overflow-hidden flex items-center justify-center">

                  {/* PLUS ICON */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-[5px] border-[#6f778b]">
                    <div className="absolute w-[32px] h-[5px] rounded-full bg-[#6f778b]" />
                    <div className="absolute h-[32px] w-[5px] rounded-full bg-[#6f778b]" />
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">

                {/* HEADING */}
                <h3 className="text-[28px] sm:text-[32px] lg:text-[38px] leading-[1.15] font-semibold tracking-[-0.03em] text-[#8e95a7]">
                  Building Next...
                </h3>

                {/* PARAGRAPH */}
                <p className="mt-5 max-w-[540px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] text-[#6f778b]">
                  Currently building AI-native SaaS applications focused on conversational
                  interfaces, retrieval systems, semantic search, vector databases,
                  and scalable full-stack product architecture.
                </p>

                {/* ACTION BUTTON */}
                <Link href="/contact">
                  <button className={`${jetbrainsMono.className} mt-8 w-fit self-start rounded-sm border border-white/10 bg-[#1b2438] px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#b7c6e6] transition-all duration-300 hover:border-cyan-300/30 hover:bg-[#202c46] hover:text-cyan-200`}>
                    View_Contact
                  </button>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
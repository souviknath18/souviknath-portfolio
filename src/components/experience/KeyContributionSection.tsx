"use client";

import {
  ShieldCheck,
  Database,
  BrainCircuit,
} from "lucide-react";

export default function KeyContributionSection() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:px-4 lg:py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-[10%] h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] rounded-full bg-[#4a8eff]/10 blur-[120px]" />
        <div className="absolute right-[8%] bottom-[0%] h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] rounded-full bg-cyan-300/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* TOP HEADER */}
        <div className="mb-12 flex flex-col gap-6 sm:gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">

          {/* LEFT */}
          <div>
            <h2 className="text-[30px] sm:text-[34px] md:text-[46px] font-[700] tracking-[-0.04em] leading-[1.05] text-[#dae2fd]">
              Key Contributions
            </h2>

            <p className="mt-4 max-w-2xl text-[14px] sm:text-[16px] md:text-[17px] leading-[1.8] sm:leading-[1.9] text-[#8b90a0]">
              Core engineering areas shaped through professional full-stack experience,
              secure backend development, database integrations, and AI-powered SaaS
              projects focused on RAG, semantic search, and intelligent workflows.
            </p>
          </div>

          {/* RIGHT LABEL */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Engineering Focus
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[#131b2eb3] p-5 sm:p-6 lg:p-8 shadow-[0_0_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#adc7ff]/40 hover:shadow-[0_0_40px_rgba(173,199,255,0.08)]">

            {/* LEFT BORDER */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#adc7ff]" />

            {/* ICON */}
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#adc7ff]/10 text-[#adc7ff] shadow-[0_0_25px_rgba(173,199,255,0.12)]">
              <ShieldCheck size={24} strokeWidth={2.1} className="sm:h-7 sm:w-7" />
            </div>

            {/* TITLE */}
            <h3 className="mt-5 sm:mt-7 text-[20px] sm:text-[22px] lg:text-[24px] font-[700] tracking-[-0.03em] leading-[1.2] text-[#dae2fd]">
              Secure Backend Systems
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] leading-[1.8] sm:leading-[1.9] text-[#9ba7c2]">
              Built RESTful APIs with Django REST Framework, JWT authentication,
              role-based access control, and secure backend workflows for scalable
              enterprise-grade applications.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[#131b2eb3] p-5 sm:p-6 lg:p-8 shadow-[0_0_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(99,247,255,0.08)]">

            {/* LEFT BORDER */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-cyan-300" />

            {/* ICON */}
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 shadow-[0_0_25px_rgba(99,247,255,0.14)]">
              <Database size={28} strokeWidth={2.1} />
            </div>

            {/* TITLE */}
            <h3 className="mt-5 sm:mt-7 text-[20px] sm:text-[22px] lg:text-[24px] font-[700] tracking-[-0.03em] leading-[1.2] text-[#dae2fd]">
              Full Stack Integration
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] leading-[1.8] sm:leading-[1.9] text-[#9ba7c2]">
              Integrated React and Next.js frontend systems with PostgreSQL and
              MySQL databases, improving data retrieval, API consistency, and
              dashboard performance across business modules.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-[#131b2eb3] p-5 sm:p-6 lg:p-8 shadow-[0_0_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#ffb695]/40 hover:shadow-[0_0_40px_rgba(255,182,149,0.08)]">

            {/* LEFT BORDER */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#ffb695]" />

            {/* ICON */}
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#ffb695]/10 text-[#ffb695] shadow-[0_0_25px_rgba(255,182,149,0.14)]">
              <BrainCircuit size={28} strokeWidth={2.1} />
            </div>

            {/* TITLE */}
            <h3 className="mt-5 sm:mt-7 text-[20px] sm:text-[22px] lg:text-[24px] font-[700] tracking-[-0.03em] leading-[1.2] text-[#dae2fd]">
              AI-Powered Products
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] leading-[1.8] sm:leading-[1.9] text-[#9ba7c2]">
              Building AI SaaS projects with RAG pipelines, semantic retrieval,
              vector databases, LLM workflows, and conversational AI experiences
              for finance, career coaching, and API monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import {
  Code2,
  ExternalLink,
  Github,
} from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

import ProjectImageSlider from "./ProjectImageSlider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

type ProjectImage = {
  src: string;
  alt: string;
};

const financeImages: ProjectImage[] = [
  {
    src: "/projects/finance-landing.png",
    alt: "Aura Finance landing page",
  },
  {
    src: "/projects/finance-dashboard2.png",
    alt: "Aura Finance AI-powered financial dashboard",
  },
  {
    src: "/projects/finance-upload2.png",
    alt: "Aura Finance financial document upload and processing screen",
  },
  {
    src: "/projects/finance-transactions2.png",
    alt: "Aura Finance intelligent transaction management screen",
  },
];

const mvLendImages: ProjectImage[] = [
  // Add project images here only if you are allowed to show company work.
  // Example:
  // {
  //   src: "/projects/mvlend-dashboard.png",
  //   alt: "MvLEND operational lending dashboard",
  // },
];

const auraFinanceTech = [
  "Next.js",
  "TypeScript",
  "Django REST Framework",
  "PostgreSQL",
  "OpenAI API",
  "Celery",
  "Redis",
  "pgvector",
];

const mvLendTech = [
  "Django",
  "DRF",
  "FastAPI",
  "Kafka",
  "CockroachDB",
  "Next.js",
  "TypeScript",
  "GCP",
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-4"
    >
      {/* Header */}
      <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.05]">
              <Code2 size={19} className="text-cyan-300" />
            </div>

            <span
              className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[12px]`}
            >
              Selected Work
            </span>
          </div>

          <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-[#dae2fd] sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-2xl text-[14px] leading-[1.75] text-[#8b90a0] sm:text-[15px]">
            AI-powered products and fintech systems built with scalable
            full-stack architecture, production APIs, asynchronous processing,
            and modern cloud technologies.
          </p>
        </div>

        <Link
          href="/projects"
          className="flex w-fit items-center gap-2 text-[13px] font-semibold text-[#adc7ff] transition-colors duration-300 hover:text-cyan-300 sm:text-sm"
        >
          View All Projects
          <ExternalLink size={15} />
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-7 md:grid-cols-2 md:gap-8">
        {/* Aura Finance */}
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 shadow-[0_0_35px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(99,247,255,0.05)]">
          <ProjectImageSlider
            badge="AI-Powered SaaS"
            images={financeImages}
          />

          <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
            <div>
              <h3 className="text-[23px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#dae2fd] sm:text-[27px]">
                Aura Finance
              </h3>

              <p
                className={`${jetbrainsMono.className} mt-2 text-[11px] uppercase tracking-[0.08em] text-cyan-300/80 sm:text-[12px]`}
              >
                AI-Powered Personal Finance Assistant
              </p>
            </div>

            <p className="mt-5 text-[14px] leading-[1.8] text-[#aeb9d1] sm:text-[15px]">
              A full-stack personal finance platform that transforms financial
              documents into structured transactions, intelligent categories,
              semantic search results, and personalized financial insights.
            </p>

            {/* Key Highlights */}
            <ul className="mt-5 space-y-2.5 text-[13px] leading-[1.7] text-[#919db7] sm:text-[14px]">
              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                AI-powered extraction from PDF, CSV, receipts, invoices, and
                financial images.
              </li>

              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                Hybrid transaction parsing and categorization using rules,
                OpenAI, and asynchronous processing.
              </li>

              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                Semantic search and similarity matching using embeddings,
                pgvector, and RAG techniques.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {auraFinanceTech.map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] leading-none text-[#adc7ff] transition-colors duration-300 group-hover:border-cyan-300/10 sm:text-[11px]`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
              <a
                href="https://ai-finance-assistant-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-4 py-2.5 text-[12px] font-bold text-[#08111f] shadow-[0_0_20px_rgba(99,247,255,0.12)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(99,247,255,0.22)] sm:text-[13px]"
              >
                Live Demo
                <ExternalLink size={15} />
              </a>

              <a
                href="https://github.com/souviknath18/ai-finance-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2.5 text-[12px] font-semibold text-[#c4cde0] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:text-[13px]"
              >
                GitHub
                <Github size={15} />
              </a>
            </div>
          </div>
        </article>

        {/* MvLEND */}
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 shadow-[0_0_35px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(99,247,255,0.05)]">
          <ProjectImageSlider
            badge="Enterprise Fintech"
            images={mvLendImages}
            emptyTitle="Enterprise Fintech Platform"
            emptyDescription="Project visuals are private due to company confidentiality"
          />

          <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
            <div>
              <h3 className="text-[23px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#dae2fd] sm:text-[27px]">
                MvLEND
              </h3>

              <p
                className={`${jetbrainsMono.className} mt-2 text-[11px] uppercase tracking-[0.08em] text-cyan-300/80 sm:text-[12px]`}
              >
                Composable Core Banking & Lending Platform
              </p>
            </div>

            <p className="mt-5 text-[14px] leading-[1.8] text-[#aeb9d1] sm:text-[15px]">
              An enterprise digital lending platform supporting borrower
              onboarding, loan origination, repayment tracking, fund
              disbursement, account management, and operational reporting.
            </p>

            {/* Key Highlights */}
            <ul className="mt-5 space-y-2.5 text-[13px] leading-[1.7] text-[#919db7] sm:text-[14px]">
              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                Built REST APIs across loan origination, repayments, account
                management, and transaction workflows.
              </li>

              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                Implemented Kafka-based event-driven messaging for asynchronous
                and decoupled transaction processing.
              </li>

              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                Developed secure workflows using JWT authentication, RBAC, and
                scalable backend architecture.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {mvLendTech.map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] leading-none text-[#adc7ff] transition-colors duration-300 group-hover:border-cyan-300/10 sm:text-[11px]`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Confidentiality Notice */}
            <div className="mt-auto pt-7">
              <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                <p
                  className={`${jetbrainsMono.className} text-[10px] leading-[1.7] text-[#77839b] sm:text-[11px]`}
                >
                  Company project — source code and live application are not
                  publicly available.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
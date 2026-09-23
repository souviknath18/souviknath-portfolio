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

/* -------------------------------------------------------------------------- */
/*                               Project Images                               */
/* -------------------------------------------------------------------------- */

const voyageImages: ProjectImage[] = [
  {
    src: "/projects/voyage-dashboard.png",
    alt: "VoyageAI travel planning dashboard",
  },
  {
    src: "/projects/voyage-plan-trip.png",
    alt: "VoyageAI AI-powered trip planning interface",
  },
  {
    src: "/projects/voyage-my-trips.png",
    alt: "VoyageAI my trips dashboard",
  },
  {
    src: "/projects/voyage-overview.png",
    alt: "VoyageAI trip overview",
  },
  {
    src: "/projects/voyage-itinerary.png",
    alt: "VoyageAI generated day-by-day travel itinerary",
  },
  {
    src: "/projects/voyage-map.png",
    alt: "VoyageAI interactive trip map",
  },
  {
    src: "/projects/voyage-explore.png",
    alt: "VoyageAI destination and places exploration interface",
  },
];

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

const mvLendImages: ProjectImage[] = [];

/* -------------------------------------------------------------------------- */
/*                                 Tech Stack                                 */
/* -------------------------------------------------------------------------- */

const voyageTech = [
  "Next.js",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "LangGraph",
  "OpenAI",
  "SQLAlchemy",
  "Geoapify",
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

/* -------------------------------------------------------------------------- */
/*                            Featured Projects                               */
/* -------------------------------------------------------------------------- */

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
            full-stack architecture, agentic AI workflows, production APIs,
            asynchronous processing, and modern cloud technologies.
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

      {/* ================================================================ */}
      {/* LARGE FEATURED PROJECT — VOYAGEAI                                */}
      {/* ================================================================ */}

      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 shadow-[0_0_35px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(99,247,255,0.05)]">
        <ProjectImageSlider
          badge="Agentic AI"
          images={voyageImages}
          variant="featured"
        />

        <div className="p-5 sm:p-7 lg:p-8">
          <div>
            <h3 className="text-[25px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#dae2fd] sm:text-[30px]">
              VoyageAI
            </h3>

            <p
              className={`${jetbrainsMono.className} mt-2 text-[11px] uppercase tracking-[0.08em] text-cyan-300/80 sm:text-[12px]`}
            >
              Agentic AI Travel Planner
            </p>
          </div>

          <p className="mt-5 max-w-4xl text-[14px] leading-[1.8] text-[#aeb9d1] sm:text-[15px]">
            A full-stack Agentic AI travel planning platform that transforms
            destinations, dates, budgets, interests, and travel preferences
            into personalized day-by-day itineraries using grounded research,
            validation, and automatic re-planning.
          </p>

          <div className="mt-6 grid gap-7 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div>
              <p
                className={`${jetbrainsMono.className} mb-3 text-[10px] uppercase tracking-[0.12em] text-[#718099]`}
              >
                Key Highlights
              </p>

              <ul className="space-y-2.5 text-[13px] leading-[1.7] text-[#919db7] sm:text-[14px]">
                <li className="flex gap-2.5">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                  <span>
                    Built a stateful Agentic AI workflow using LangGraph for
                    trip research, itinerary generation, validation, and
                    bounded re-planning.
                  </span>
                </li>

                <li className="flex gap-2.5">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                  <span>
                    Integrated external travel tools for grounded destination,
                    places, and weather research instead of relying only on
                    LLM knowledge.
                  </span>
                </li>

                <li className="flex gap-2.5">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                  <span>
                    Persisted trips, itineraries, agent runs, execution steps,
                    and tool calls using FastAPI, SQLAlchemy, and PostgreSQL.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p
                className={`${jetbrainsMono.className} mb-3 text-[10px] uppercase tracking-[0.12em] text-[#718099]`}
              >
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {voyageTech.map((item) => (
                  <span
                    key={item}
                    className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] leading-none text-[#adc7ff] transition-colors duration-300 group-hover:border-cyan-300/10 sm:text-[11px]`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://voyage-ai-zeta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-4 py-2.5 text-[12px] font-bold text-[#08111f] shadow-[0_0_20px_rgba(99,247,255,0.12)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(99,247,255,0.22)] sm:text-[13px]"
                >
                  Live Demo
                  <ExternalLink size={15} />
                </a>

                <a
                  href="https://github.com/souviknath18/voyage-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2.5 text-[12px] font-semibold text-[#c4cde0] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:text-[13px]"
                >
                  GitHub
                  <Github size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ================================================================ */}
      {/* SMALL PROJECT ROW                                                */}
      {/* Aura Finance LEFT — MvLEND RIGHT                                 */}
      {/* ================================================================ */}

      <div className="mt-7 grid grid-cols-1 gap-7 md:mt-8 md:grid-cols-2 md:gap-8">
        {/* ============================================================ */}
        {/* AURA FINANCE                                                */}
        {/* ============================================================ */}

        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 shadow-[0_0_35px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(99,247,255,0.05)]">
          <ProjectImageSlider
            badge="AI-Powered SaaS"
            images={financeImages}
            variant="compact"
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

            <ul className="mt-5 space-y-2.5 text-[13px] leading-[1.7] text-[#919db7] sm:text-[14px]">
              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                <span>
                  AI-powered extraction from PDF, CSV, receipts, invoices, and
                  financial images.
                </span>
              </li>

              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                <span>
                  Hybrid transaction parsing and categorization using rules,
                  OpenAI, and asynchronous processing.
                </span>
              </li>

              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                <span>
                  Semantic search and similarity matching using embeddings,
                  pgvector, and RAG techniques.
                </span>
              </li>
            </ul>

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

        {/* ============================================================ */}
        {/* MVLEND                                                      */}
        {/* ============================================================ */}

        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131d33]/20 shadow-[0_0_35px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(99,247,255,0.05)]">
          <ProjectImageSlider
            badge="Enterprise Fintech"
            images={mvLendImages}
            variant="compact"
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

            <ul className="mt-5 space-y-2.5 text-[13px] leading-[1.7] text-[#919db7] sm:text-[14px]">
              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                <span>
                  Built REST APIs across loan origination, repayments, account
                  management, and transaction workflows.
                </span>
              </li>

              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                <span>
                  Implemented Kafka-based event-driven messaging for
                  asynchronous and decoupled transaction processing.
                </span>
              </li>

              <li className="flex gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                <span>
                  Developed secure workflows using JWT authentication, RBAC,
                  and scalable backend architecture.
                </span>
              </li>
            </ul>

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
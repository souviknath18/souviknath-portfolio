"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Landmark,
  LockKeyhole,
  Rocket,
  ServerCog,
  Workflow,
} from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

import ProjectImageSlider from "../home/ProjectImageSlider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

type TechTagProps = {
  text: string;
  small?: boolean;
};

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
  // Add screenshots only if company policy allows you to display them publicly.
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
  "Cloudflare R2",
  "Docker",
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

const engineeringAreas = [
  {
    icon: ServerCog,
    title: "Production API Engineering",
    description:
      "Designing secure RESTful and asynchronous APIs with Django REST Framework, FastAPI, JWT authentication, RBAC, filtering, pagination, and validation.",
  },
  {
    icon: Workflow,
    title: "Async & Event-Driven Systems",
    description:
      "Building background processing and decoupled workflows using Celery, Redis, Kafka, WebSockets, retries, and task queues.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Fintech Architecture",
    description:
      "Developing lending and transaction systems with protected APIs, role-based workflows, database optimization, and production-ready cloud deployment.",
  },
];

function TechTag({
  text,
  small = false,
}: TechTagProps) {
  return (
    <span
      className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] text-[#b9c5da] transition-all duration-300 hover:border-cyan-300/15 hover:text-[#dce7fb] ${
        small
          ? "px-2.5 py-1.5 text-[10px]"
          : "px-3 py-1.5 text-[10px] sm:text-[11px]"
      }`}
    >
      {text}
    </span>
  );
}

function FeatureItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <CheckCircle2
        size={16}
        strokeWidth={2.2}
        className="mt-1 shrink-0 text-cyan-300"
        aria-hidden="true"
      />

      <span className="text-[13px] leading-[1.75] text-[#aeb9cf] sm:text-[14px]">
        {children}
      </span>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section className="px-6 py-16 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
            >
              Selected Engineering Work
            </p>

            <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.04em] text-[#e8edff] sm:text-[36px] md:text-[40px]">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-3xl text-[14px] leading-[1.8] text-[#8995ad] sm:text-[15px]">
              AI-powered SaaS and enterprise fintech systems built with
              production APIs, asynchronous processing, semantic retrieval,
              secure authentication, and scalable cloud architecture.
            </p>
          </div>

          <a
            href="https://github.com/souviknath18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-[13px] font-semibold text-[#adc7ff] transition-colors duration-300 hover:text-cyan-300"
          >
            View GitHub
            <Github size={16} />
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Aura Finance */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131b2e] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_0_40px_rgba(99,247,255,0.05)] md:col-span-8">
            <ProjectImageSlider
              badge="AI-Powered Finance SaaS"
              images={financeImages}
            />

            <div className="p-5 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <p
                    className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.12em] text-cyan-300 sm:text-[11px]`}
                  >
                    Flagship Personal Project
                  </p>

                  <h3 className="mt-2 text-[25px] font-semibold tracking-[-0.03em] text-[#e8edff] sm:text-[28px]">
                    Aura Finance
                  </h3>

                  <p className="mt-1 text-[13px] font-medium text-[#8290aa] sm:text-[14px]">
                    AI-Powered Personal Finance Assistant
                  </p>

                  <p className="mt-4 text-[14px] leading-[1.8] text-[#aeb9cf] sm:text-[15px]">
                    A full-stack personal finance platform that transforms
                    financial documents into structured transactions,
                    intelligent categories, semantic search results, and
                    personalized financial insights.
                  </p>
                </div>

                <div className="w-full shrink-0 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.035] p-4 lg:w-[270px]">
                  <p
                    className={`${jetbrainsMono.className} text-[10px] font-semibold uppercase tracking-[0.12em] text-[#77849a]`}
                  >
                    Architecture
                  </p>

                  <p className="mt-2 text-[13px] leading-[1.6] text-cyan-200 sm:text-[14px]">
                    Hybrid document parsing, asynchronous AI processing,
                    embeddings, pgvector, and RAG-style retrieval.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {/* Features */}
                <div>
                  <h4
                    className={`${jetbrainsMono.className} mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#77849a]`}
                  >
                    Key Features
                  </h4>

                  <div className="space-y-3">
                    <FeatureItem>
                      Extracts transaction data from PDF, CSV, receipt, invoice,
                      and image-based financial documents.
                    </FeatureItem>

                    <FeatureItem>
                      Combines rule-based parsing, OpenAI extraction, validation,
                      and intelligent categorization.
                    </FeatureItem>

                    <FeatureItem>
                      Supports semantic search and similar-transaction retrieval
                      using embeddings and pgvector.
                    </FeatureItem>

                    <FeatureItem>
                      Uses Celery and Redis for background processing, retries,
                      upload progress, and embedding generation.
                    </FeatureItem>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4
                    className={`${jetbrainsMono.className} mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#77849a]`}
                  >
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {auraFinanceTech.map((technology) => (
                      <TechTag
                        key={technology}
                        text={technology}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-6">
                <a
                  href="https://ai-finance-assistant-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-4 py-2.5 text-[12px] font-bold text-[#08111f] shadow-[0_0_20px_rgba(99,247,255,0.12)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(99,247,255,0.22)] sm:text-[13px]"
                >
                  <Rocket size={15} />
                  Live Demo
                </a>

                <a
                  href="https://github.com/souviknath18/ai-finance-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2.5 text-[12px] font-semibold text-[#c4cde0] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:text-[13px]"
                >
                  <Github size={15} />
                  GitHub Repository
                </a>
              </div>
            </div>
          </article>

          {/* MvLEND */}
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131b2e] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_0_40px_rgba(99,247,255,0.04)] md:col-span-4">
            <ProjectImageSlider
              badge="Enterprise Fintech"
              images={mvLendImages}
              emptyTitle="Private Enterprise Platform"
              emptyDescription="Screenshots and source code are unavailable due to company confidentiality"
            />

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05]">
                  <Landmark
                    size={20}
                    className="text-cyan-300"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p
                    className={`${jetbrainsMono.className} text-[9px] uppercase tracking-[0.1em] text-cyan-300`}
                  >
                    Professional Project
                  </p>

                  <h3 className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#e8edff]">
                    MvLEND
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-[12px] font-medium text-[#7f8ca4]">
                Composable Core Banking & Lending Platform
              </p>

              <p className="mt-4 text-[13px] leading-[1.75] text-[#aeb9cf] sm:text-[14px]">
                Enterprise digital lending platform supporting borrower
                onboarding, loan processing, repayment tracking, fund
                disbursement, account management, and operational reporting.
              </p>

              <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                <p
                  className={`${jetbrainsMono.className} text-[9px] uppercase tracking-[0.12em] text-[#77849a]`}
                >
                  Architecture
                </p>

                <p className="mt-2 text-[13px] leading-[1.65] text-cyan-200">
                  Kafka-based event-driven services with Django, FastAPI,
                  CockroachDB, secure APIs, and cloud deployment.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                <FeatureItem>
                  REST APIs across loan origination, repayment, and account
                  management.
                </FeatureItem>

                <FeatureItem>
                  Kafka messaging for asynchronous and decoupled transaction
                  processing.
                </FeatureItem>

                <FeatureItem>
                  JWT authentication and role-based access control for secure
                  enterprise workflows.
                </FeatureItem>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {mvLendTech.map((technology) => (
                  <TechTag
                    key={technology}
                    text={technology}
                    small
                  />
                ))}
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                  <p
                    className={`${jetbrainsMono.className} text-[9px] leading-[1.7] text-[#707d93] sm:text-[10px]`}
                  >
                    Company project — source code, screenshots, and live
                    application are not publicly available.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Engineering Contributions */}
          <article className="rounded-2xl border border-white/10 bg-[#131b2e] p-5 sm:p-6 md:col-span-5 lg:p-8">
            <p
              className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300`}
            >
              Professional Impact
            </p>

            <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-[#e8edff] sm:text-[27px]">
              Engineering Contributions
            </h3>

            <p className="mt-4 text-[13px] leading-[1.75] text-[#8f9bb2] sm:text-[14px]">
              Core areas where I have contributed across production fintech
              systems and full-stack applications.
            </p>

            <div className="mt-6 space-y-4">
              {engineeringAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-cyan-300/15 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.05]">
                        <Icon
                          size={17}
                          className="text-cyan-300"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h4 className="text-[14px] font-semibold text-[#dfe7f7]">
                          {area.title}
                        </h4>

                        <p className="mt-2 text-[12px] leading-[1.7] text-[#7f8ba2]">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.035] px-4 py-3">
              <p
                className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.1em] text-cyan-300`}
              >
                40+ production-grade RESTful and asynchronous APIs
              </p>
            </div>
          </article>

          {/* Building Next */}
          <article className="relative overflow-hidden rounded-2xl border border-dashed border-white/10 bg-[#131b2e] md:col-span-7">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/[0.05] blur-[100px]" />

            <div className="relative flex h-full min-h-[420px] flex-col gap-8 p-6 md:flex-row md:items-center md:p-8 lg:p-10">
              {/* Visual */}
              <div className="flex w-full items-center md:w-[42%]">
                <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/10 bg-[#1b2438]">
                  <div className="absolute h-40 w-40 rounded-full border border-cyan-300/[0.08]" />
                  <div className="absolute h-28 w-28 rounded-full border border-[#adc7ff]/[0.08]" />

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05]">
                    <Code2
                      size={28}
                      className="text-cyan-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex w-full flex-col justify-center md:w-[58%]">
                <p
                  className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300`}
                >
                  Continuous Development
                </p>

                <h3 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#dce5f8] sm:text-[32px]">
                  Building What Comes Next
                </h3>

                <p className="mt-5 max-w-xl text-[13px] leading-[1.8] text-[#8995ac] sm:text-[14px]">
                  I&apos;m continuing to improve Aura Finance while expanding
                  my skills in advanced system design, AWS, Kubernetes,
                  Agentic AI, AI workflows, and multi-agent systems.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "System Design",
                    "AWS",
                    "Kubernetes",
                    "Agentic AI",
                    "Multi-Agent Systems",
                    "DevOps",
                  ].map((item) => (
                    <TechTag
                      key={item}
                      text={item}
                      small
                    />
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className={`${jetbrainsMono.className} flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#08111f] transition-all duration-300 hover:scale-[1.02] sm:text-[11px]`}
                  >
                    Contact Me
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://github.com/souviknath18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${jetbrainsMono.className} flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2.5 text-[10px] uppercase tracking-[0.08em] text-[#b7c4dc] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white sm:text-[11px]`}
                  >
                    View GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
"use client";

import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  CloudCog,
  Database,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  Inter,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

type Contribution = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  accent: string;
  iconBox: string;
  hoverBorder: string;
};

const contributions: Contribution[] = [
  {
    icon: ShieldCheck,
    title: "Secure Backend Systems",
    description:
      "Built secure backend applications using Django REST Framework and FastAPI with JWT authentication, role-based access control, validation, and user-specific data isolation.",
    highlights: [
      "JWT Authentication",
      "RBAC",
      "API Validation",
      "Protected APIs",
    ],
    accent: "bg-[#adc7ff]",
    iconBox:
      "border-[#adc7ff]/15 bg-[#adc7ff]/[0.06] text-[#adc7ff]",
    hoverBorder: "hover:border-[#adc7ff]/30",
  },
  {
    icon: Network,
    title: "Production API Engineering",
    description:
      "Contributed to 40+ production-grade RESTful and asynchronous APIs supporting authentication, onboarding, lending, repayments, KYC verification, and transaction processing.",
    highlights: [
      "40+ APIs",
      "Django REST Framework",
      "FastAPI",
      "RESTful Services",
    ],
    accent: "bg-cyan-300",
    iconBox:
      "border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300",
    hoverBorder: "hover:border-cyan-300/30",
  },
  {
    icon: Workflow,
    title: "Async & Event-Driven Systems",
    description:
      "Built background processing and real-time workflows using Celery, Redis, WebSockets, and Kafka-based event-driven architecture for scalable and decoupled services.",
    highlights: [
      "Celery",
      "Redis",
      "Kafka",
      "WebSockets",
    ],
    accent: "bg-[#9b8cff]",
    iconBox:
      "border-[#9b8cff]/15 bg-[#9b8cff]/[0.06] text-[#b8adff]",
    hoverBorder: "hover:border-[#9b8cff]/30",
  },
  {
    icon: Database,
    title: "Database Performance",
    description:
      "Optimized PostgreSQL queries, indexing strategies, and schemas for high-volume financial data while working with CockroachDB, MySQL, Redis, and pgvector.",
    highlights: [
      "PostgreSQL",
      "Query Optimization",
      "CockroachDB",
      "pgvector",
    ],
    accent: "bg-[#ffb695]",
    iconBox:
      "border-[#ffb695]/15 bg-[#ffb695]/[0.06] text-[#ffb695]",
    hoverBorder: "hover:border-[#ffb695]/30",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered SaaS Products",
    description:
      "Built Aura Finance using OpenAI APIs, RAG, embeddings, semantic search, vector retrieval, and intelligent document processing for practical financial workflows.",
    highlights: [
      "OpenAI API",
      "RAG",
      "Embeddings",
      "Semantic Search",
    ],
    accent: "bg-[#6ee7f9]",
    iconBox:
      "border-[#6ee7f9]/15 bg-[#6ee7f9]/[0.06] text-[#6ee7f9]",
    hoverBorder: "hover:border-[#6ee7f9]/30",
  },
  {
    icon: CloudCog,
    title: "Cloud & Deployment",
    description:
      "Containerized services with Docker and Docker Compose, supported GitHub Actions CI/CD pipelines, and deployed applications across GCP, Railway, Vercel, and Cloudflare R2.",
    highlights: [
      "Docker",
      "GitHub Actions",
      "GCP",
      "Railway & Vercel",
    ],
    accent: "bg-[#8fb3ff]",
    iconBox:
      "border-[#8fb3ff]/15 bg-[#8fb3ff]/[0.06] text-[#8fb3ff]",
    hoverBorder: "hover:border-[#8fb3ff]/30",
  },
];

function ContributionCard({
  icon: Icon,
  title,
  description,
  highlights,
  accent,
  iconBox,
  hoverBorder,
}: Contribution) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#131b2eb3] p-5 shadow-[0_0_35px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#17233b]/90 hover:shadow-[0_0_35px_rgba(99,247,255,0.05)] sm:p-6 lg:p-7 ${hoverBorder}`}
    >
      <div className={`absolute inset-y-0 left-0 w-[3px] ${accent}`} />

      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${iconBox}`}
      >
        <Icon
          size={23}
          strokeWidth={1.9}
          aria-hidden="true"
        />
      </div>

      <h3
        className={`${montserrat.className} mt-6 text-[19px] font-[700] leading-[1.25] tracking-[-0.03em] text-[#dae2fd] sm:text-[21px]`}
      >
        {title}
      </h3>

      <p
        className={`${inter.className} mt-4 flex-1 text-[13px] leading-[1.8] text-[#919db5] sm:text-[14px]`}
      >
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {highlights.map((highlight) => (
          <span
            key={highlight}
            className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] leading-none text-[#b5c0d5] transition-all duration-300 group-hover:border-cyan-300/10 group-hover:text-[#dce5f8]`}
          >
            {highlight}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function KeyContributionSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-4 lg:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[8%] h-[260px] w-[260px] rounded-full bg-[#4a8eff]/[0.07] blur-[120px] sm:h-[340px] sm:w-[340px]" />
        <div className="absolute bottom-0 right-[8%] h-[250px] w-[250px] rounded-full bg-cyan-300/[0.07] blur-[120px] sm:h-[320px] sm:w-[320px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
            >
              Engineering Impact
            </p>

            <h2
              className={`${montserrat.className} mt-3 text-[30px] font-[700] leading-[1.08] tracking-[-0.04em] text-[#dae2fd] sm:text-[36px] md:text-[42px]`}
            >
              Key Contributions
            </h2>

            <p
              className={`${inter.className} mt-4 max-w-3xl text-[14px] leading-[1.8] text-[#8995ad] sm:text-[15px]`}
            >
              Core areas of impact across enterprise fintech systems,
              production APIs, asynchronous processing, database performance,
              AI-powered SaaS products, and cloud deployment.
            </p>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <div className="h-px w-28 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <span
              className={`${jetbrainsMono.className} text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300`}
            >
              Full Stack • Backend • AI
            </span>
          </div>
        </div>

        {/* Contribution Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contributions.map((contribution) => (
            <ContributionCard
              key={contribution.title}
              {...contribution}
            />
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p
                className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.12em] text-[#78849a] sm:text-[11px]`}
              >
                Professional Focus
              </p>

              <p
                className={`${inter.className} mt-2 max-w-3xl text-[13px] leading-6 text-[#8d99b0] sm:text-[14px]`}
              >
                Building secure, scalable, and maintainable systems that
                combine production-grade backend engineering, responsive
                frontend experiences, cloud infrastructure, and practical AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-lg lg:justify-end">
              {[
                "40+ Production APIs",
                "Enterprise Fintech",
                "Event-Driven Systems",
                "OpenAI & RAG",
                "Docker & CI/CD",
                "GCP Deployment",
              ].map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-md border border-cyan-300/10 bg-cyan-300/[0.035] px-3 py-1.5 text-[10px] text-cyan-300 sm:text-[11px]`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
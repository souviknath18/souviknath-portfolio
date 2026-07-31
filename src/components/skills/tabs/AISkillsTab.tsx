"use client";

import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  FileSearch,
  MessageSquareText,
  Search,
  Workflow,
} from "lucide-react";

import {
  Inter,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

type AISkill = {
  icon: LucideIcon;
  title: string;
  level: string;
  description: string;
  tech: string[];
};

const aiSkills: AISkill[] = [
  {
    icon: Bot,
    title: "OpenAI API Integration",
    level: "Production",
    description:
      "Building AI-powered product features with structured prompts, reliable output handling, fallback workflows, and secure API integration.",
    tech: [
      "OpenAI API",
      "GPT Models",
      "Structured Output",
      "AI Fallbacks",
      "Prompt Design",
    ],
  },
  {
    icon: BrainCircuit,
    title: "LLM Applications",
    level: "Production",
    description:
      "Developing practical LLM-powered features for transaction extraction, categorization, financial assistance, and intelligent application workflows.",
    tech: [
      "LLMs",
      "Generative AI",
      "AI Features",
      "Context Handling",
      "Product AI",
    ],
  },
  {
    icon: Workflow,
    title: "RAG Workflows",
    level: "Implemented",
    description:
      "Building retrieval-augmented workflows that connect user-specific application data with grounded and context-aware AI responses.",
    tech: [
      "RAG",
      "Retrieval",
      "Context Injection",
      "Grounded Responses",
      "User Data",
    ],
  },
  {
    icon: DatabaseZap,
    title: "Embeddings & Vector Search",
    level: "Implemented",
    description:
      "Generating embeddings and using vector similarity search to support semantic transaction retrieval and similar-record discovery.",
    tech: [
      "OpenAI Embeddings",
      "pgvector",
      "Vector Search",
      "Similarity Search",
      "Semantic Retrieval",
    ],
  },
  {
    icon: Search,
    title: "Semantic Search",
    level: "Production",
    description:
      "Enabling natural-language transaction search across financial data using embeddings, similarity matching, filtering, and user-scoped retrieval.",
    tech: [
      "Semantic Search",
      "Natural Language Queries",
      "Similarity Matching",
      "User Isolation",
      "Search APIs",
    ],
  },
  {
    icon: FileSearch,
    title: "Intelligent Document Processing",
    level: "Production",
    description:
      "Combining rule-based parsing, AI extraction, validation, and asynchronous workflows to process PDF, CSV, image, invoice, and receipt data.",
    tech: [
      "Document Parsing",
      "PDF",
      "CSV",
      "Image Processing",
      "AI Extraction",
    ],
  },
  {
    icon: MessageSquareText,
    title: "Prompt Engineering",
    level: "Production",
    description:
      "Designing prompts with clear instructions, structured response formats, validation rules, and safeguards for reliable application behavior.",
    tech: [
      "Prompt Design",
      "Output Schema",
      "Validation",
      "Guardrails",
      "Evaluation",
    ],
  },
  {
    icon: Cpu,
    title: "AI Orchestration",
    level: "Production",
    description:
      "Coordinating traditional parsing, AI fallbacks, categorization, embeddings, background jobs, and financial insight generation.",
    tech: [
      "Hybrid AI",
      "Celery",
      "Redis",
      "AI Pipelines",
      "Background Jobs",
    ],
  },
  {
    icon: Workflow,
    title: "AI-Powered SaaS Workflows",
    level: "Production",
    description:
      "Applying AI to real SaaS workflows including document uploads, transaction processing, semantic retrieval, financial insights, and user assistance.",
    tech: [
      "Aura Finance",
      "Financial AI",
      "SaaS AI",
      "Insights",
      "Automation",
    ],
  },
];

function SkillBadge({
  item,
}: {
  item: string;
}) {
  return (
    <span
      className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] leading-none text-[#b8c4dd] transition-all duration-300 group-hover:border-cyan-300/15 group-hover:text-[#dce7fb] sm:text-[11px]`}
    >
      {item}
    </span>
  );
}

function AISkillCard({
  icon: Icon,
  title,
  level,
  description,
  tech,
}: AISkill) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1a2338]/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#1e2942] hover:shadow-[0_0_30px_rgba(99,247,255,0.05)] sm:p-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/[0.05] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.09]" />

      <Icon
        size={68}
        strokeWidth={1}
        className="pointer-events-none absolute right-3 top-3 text-[#2a3f61]/55"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05]">
          <Icon
            size={22}
            strokeWidth={1.9}
            className="text-cyan-300"
            aria-hidden="true"
          />
        </div>

        <span
          className={`${jetbrainsMono.className} rounded-md border border-cyan-300/15 bg-cyan-300/[0.05] px-2.5 py-1 text-[9px] uppercase tracking-[0.1em] text-cyan-300 sm:text-[10px]`}
        >
          {level}
        </span>
      </div>

      {/* Title */}
      <h4
        className={`${montserrat.className} relative z-10 text-[19px] font-[600] tracking-[-0.03em] text-[#edf2ff] sm:text-[20px]`}
      >
        {title}
      </h4>

      {/* Description */}
      <p
        className={`${inter.className} relative z-10 mt-3 flex-1 text-[13px] leading-[1.8] text-[#8f9ab3] sm:text-[14px]`}
      >
        {description}
      </p>

      {/* Technologies */}
      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <SkillBadge key={item} item={item} />
        ))}
      </div>
    </article>
  );
}

export default function AISkillsTab() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-9 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
          >
            AI Engineering Capabilities
          </p>

          <h3
            className={`${montserrat.className} mt-3 text-[27px] font-[700] tracking-[-0.04em] text-[#edf2ff] sm:text-[32px] lg:text-[36px]`}
          >
            AI & Generative AI
          </h3>

          <p
            className={`${inter.className} mt-3 max-w-3xl text-[14px] leading-[1.8] text-[#8b90a0] sm:text-[15px]`}
          >
            Building production AI features with OpenAI APIs, LLMs, RAG,
            embeddings, semantic search, vector databases, prompt engineering,
            intelligent document processing, and asynchronous AI workflows.
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-2">
          <CheckCircle2
            size={16}
            className="text-cyan-300"
            aria-hidden="true"
          />

          <span
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.1em] text-cyan-300 sm:text-[11px]`}
          >
            Production AI Applications
          </span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {aiSkills.map((skill) => (
          <AISkillCard
            key={skill.title}
            {...skill}
          />
        ))}
      </div>

      {/* Aura Finance Highlight */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-r from-cyan-300/[0.035] via-white/[0.02] to-[#4a8eff]/[0.035] p-5 sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p
              className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.12em] text-cyan-300 sm:text-[11px]`}
            >
              Featured AI Implementation
            </p>

            <h4
              className={`${montserrat.className} mt-2 text-[20px] font-[600] tracking-[-0.03em] text-[#edf2ff] sm:text-[22px]`}
            >
              Aura Finance
            </h4>

            <p
              className={`${inter.className} mt-3 max-w-3xl text-[12px] leading-6 text-[#8793aa] sm:text-[13px]`}
            >
              An AI-powered personal finance platform combining document
              parsing, transaction extraction, intelligent categorization,
              embeddings, semantic search, RAG-based retrieval, background
              processing, and personalized financial insights.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
            {[
              "OpenAI API",
              "RAG",
              "Embeddings",
              "pgvector",
              "Semantic Search",
              "Celery",
              "Redis",
              "Django REST Framework",
            ].map((item) => (
              <SkillBadge key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
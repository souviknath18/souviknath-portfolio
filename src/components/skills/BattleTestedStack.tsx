"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bot,
  Cloud,
  Copy,
  Database,
  Globe,
  ServerCog,
  Workflow,
} from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

type StackBoxProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  details: string[];
  color: string;
  iconColor: string;
};

const architectureStack: StackBoxProps[] = [
  {
    icon: Globe,
    title: "Next.js",
    subtitle: "Frontend Layer",
    details: ["React", "TypeScript", "Tailwind CSS"],
    color: "border-cyan-400/35",
    iconColor: "text-cyan-300",
  },
  {
    icon: ServerCog,
    title: "Django & FastAPI",
    subtitle: "API Layer",
    details: ["DRF", "JWT", "REST APIs"],
    color: "border-blue-400/35",
    iconColor: "text-blue-300",
  },
  {
    icon: Workflow,
    title: "Celery & Redis",
    subtitle: "Async Processing",
    details: ["Background Jobs", "Retries", "Queues"],
    color: "border-violet-400/35",
    iconColor: "text-violet-300",
  },
  {
    icon: Database,
    title: "PostgreSQL",
    subtitle: "Data & Vector Layer",
    details: ["Relational Data", "pgvector", "Search"],
    color: "border-orange-400/35",
    iconColor: "text-orange-300",
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    subtitle: "Deployment Layer",
    details: ["Vercel", "Railway", "Cloudflare R2"],
    color: "border-cyan-300/35",
    iconColor: "text-cyan-200",
  },
];

function StackBox({
  icon: Icon,
  title,
  subtitle,
  details,
  color,
  iconColor,
}: StackBoxProps) {
  return (
    <article className="group flex w-full flex-col items-center text-center lg:max-w-[190px]">
      {/* Icon Box */}
      <div
        className={`relative flex h-20 w-20 items-center justify-center rounded-2xl border bg-[#1a2236]/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#1d2940]/75 group-hover:shadow-[0_0_30px_rgba(99,247,255,0.06)] sm:h-24 sm:w-24 ${color}`}
      >
        <Icon
          className={`h-7 w-7 sm:h-9 sm:w-9 ${iconColor}`}
          strokeWidth={1.8}
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent" />
      </div>

      {/* Text */}
      <div className="mt-4">
        <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#dce5fa] sm:text-[19px]">
          {title}
        </h3>

        <p
          className={`${jetbrainsMono.className} mt-1 text-[10px] uppercase tracking-[0.1em] text-[#778299] sm:text-[11px]`}
        >
          {subtitle}
        </p>
      </div>

      {/* Details */}
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {details.map((detail) => (
          <span
            key={detail}
            className={`${jetbrainsMono.className} rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[9px] leading-none text-[#8995aa]`}
          >
            {detail}
          </span>
        ))}
      </div>
    </article>
  );
}

function FlowArrow() {
  return (
    <>
      <ArrowRight
        size={21}
        className="hidden shrink-0 text-[#59657b] lg:block"
        aria-hidden="true"
      />

      <ArrowRight
        size={21}
        className="shrink-0 rotate-90 text-[#59657b] lg:hidden"
        aria-hidden="true"
      />
    </>
  );
}

export default function BattleTestedStack() {
  return (
    <section className="mb-24">
      {/* Heading */}
      <div className="mx-auto mb-9 max-w-3xl px-6 text-center sm:mb-11">
        <p
          className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
        >
          Production Architecture
        </p>

        <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-[#e8edff] sm:text-[34px] md:text-[38px]">
          The Stack Behind My Applications
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-[#8490a8] sm:text-[14px]">
          A scalable full-stack architecture combining modern frontend
          development, secure APIs, asynchronous processing, relational and
          vector data, and cloud deployment.
        </p>
      </div>

      {/* Main Wrapper */}
      <div className="mx-auto max-w-7xl px-6 lg:px-4">
        {/* Terminal */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#131b2e]/85 shadow-[0_0_45px_rgba(0,0,0,0.16)] backdrop-blur-xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#1a2236] px-4 py-3 sm:px-5">
            {/* Traffic Lights */}
            <div className="flex gap-1.5 sm:gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/70 sm:h-3 sm:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70 sm:h-3 sm:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/70 sm:h-3 sm:w-3" />
            </div>

            {/* Filename */}
            <p
              className={`${jetbrainsMono.className} truncate px-3 text-[9px] uppercase tracking-[0.1em] text-[#7d8496] sm:text-[11px] md:text-[12px]`}
            >
              aura_finance_architecture.config
            </p>

            <Copy
              size={15}
              className="shrink-0 text-[#69758a]"
              aria-hidden="true"
            />
          </div>

          {/* Architecture Flow */}
          <div className="flex flex-col items-center justify-center gap-7 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-start lg:gap-5 lg:px-8 xl:gap-7 xl:px-12">
            {architectureStack.map((item, index) => (
              <div
                key={item.title}
                className="flex w-full flex-col items-center gap-7 lg:w-auto lg:flex-row lg:items-start lg:gap-5 xl:gap-7"
              >
                <StackBox {...item} />

                {index < architectureStack.length - 1 && <FlowArrow />}
              </div>
            ))}
          </div>

          {/* Bottom Architecture Note */}
          <div className="border-t border-white/[0.06] bg-[#101829]/65 px-5 py-4 sm:px-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Bot
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-300"
                  aria-hidden="true"
                />

                <p className="text-[12px] leading-6 text-[#8995aa] sm:text-[13px]">
                  OpenAI APIs, embeddings, RAG, and semantic search integrate
                  across the API, processing, and data layers.
                </p>
              </div>

              <span
                className={`${jetbrainsMono.className} w-fit rounded-md border border-cyan-300/10 bg-cyan-300/[0.035] px-3 py-1.5 text-[9px] uppercase tracking-[0.1em] text-cyan-300 sm:text-[10px]`}
              >
                Secure • Async • AI-Enabled
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  Bot,
  CloudCog,
  Database,
  Landmark,
  LayoutDashboard,
  Monitor,
  Waypoints,
} from "lucide-react";

import {
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const domains = [
  {
    icon: Monitor,
    label: "Full Stack Apps",
    description: "Modern web applications built with Next.js, React, and Django.",
  },
  {
    icon: Waypoints,
    label: "Backend APIs",
    description: "Production-ready REST APIs, authentication, and async services.",
  },
  {
    icon: Bot,
    label: "AI Applications",
    description: "LLM-powered products using RAG, embeddings, and semantic search.",
  },
  {
    icon: Landmark,
    label: "Fintech Systems",
    description: "Lending, transaction processing, onboarding, and secure workflows.",
  },
  {
    icon: Database,
    label: "Data Systems",
    description: "PostgreSQL, CockroachDB, Redis, and vector-based retrieval.",
  },
  {
    icon: CloudCog,
    label: "Cloud & DevOps",
    description: "Docker, CI/CD, GCP, AWS, Railway, and Vercel deployments.",
  },
  {
    icon: LayoutDashboard,
    label: "Dashboards",
    description: "Responsive operational dashboards and data-driven interfaces.",
  },
];

export default function DomainsExpertiseSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-8 xl:px-4">
      {/* Heading */}
      <div className="text-center">
        <p
          className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[12px]`}
        >
          What I Build
        </p>

        <h2
          className={`${montserrat.className} mt-3 text-[30px] font-[600] leading-[1.08] tracking-[-0.04em] sm:text-[38px] md:text-[44px] lg:text-[48px]`}
        >
          <span className="text-[#edf2ff]">Engineering </span>

          <span className="bg-gradient-to-r from-[#8fb3ff] to-cyan-300 bg-clip-text text-transparent">
            Focus Areas
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#8390aa] sm:text-[15px]">
          Areas where I apply full-stack engineering, backend architecture,
          artificial intelligence, data systems, and cloud technologies to
          build reliable products.
        </p>
      </div>

      {/* Domain Cards */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 xl:grid-cols-4">
        {domains.map((domain) => {
          const Icon = domain.icon;

          return (
            <article
              key={domain.label}
              className="group rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 shadow-[0_0_30px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#17233b]/85 hover:shadow-[0_0_35px_rgba(99,247,255,0.06)] sm:p-6"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] transition-all duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.09]">
                <Icon
                  size={23}
                  strokeWidth={1.9}
                  className="text-cyan-300 transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                />
              </div>

              {/* Label */}
              <h3
                className={`${montserrat.className} mt-5 text-[18px] font-[600] tracking-[-0.02em] text-[#e4ebfb] sm:text-[19px]`}
              >
                {domain.label}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] leading-[1.75] text-[#8793ab] sm:text-[14px]">
                {domain.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* Bottom Highlight */}
      <div className="mt-8 flex flex-wrap justify-center gap-2.5">
        {[
          "Next.js",
          "Django",
          "FastAPI",
          "PostgreSQL",
          "OpenAI",
          "RAG",
          "Celery",
          "Redis",
          "Kafka",
          "Docker",
        ].map((item) => (
          <span
            key={item}
            className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] text-[#aab5ce] sm:text-[11px]`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
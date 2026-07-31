"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Braces,
  CheckCircle2,
  Database,
  Gauge,
  KeyRound,
  Network,
  Server,
  ShieldCheck,
  Waypoints,
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

type BackendSkill = {
  icon: LucideIcon;
  title: string;
  level: string;
  description: string;
  tech: string[];
};

const backendSkills: BackendSkill[] = [
  {
    icon: Server,
    title: "Django, DRF & FastAPI",
    level: "Production",
    description:
      "Building scalable backend services, serializers, viewsets, async endpoints, business logic, and maintainable API architectures.",
    tech: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "ViewSets",
      "Serializers",
    ],
  },
  {
    icon: Waypoints,
    title: "RESTful API Engineering",
    level: "Production",
    description:
      "Designing production-grade APIs with clear contracts, validation, filtering, pagination, ordering, structured errors, and consistent responses.",
    tech: [
      "REST APIs",
      "Pagination",
      "Filtering",
      "Ordering",
      "Validation",
    ],
  },
  {
    icon: KeyRound,
    title: "Authentication & Authorization",
    level: "Production",
    description:
      "Implementing secure authentication flows, protected endpoints, token handling, user-specific access, and role-based permissions.",
    tech: [
      "JWT",
      "RBAC",
      "OAuth2",
      "Permissions",
      "Protected APIs",
    ],
  },
  {
    icon: Network,
    title: "Async & Event-Driven Systems",
    level: "Production",
    description:
      "Developing background processing, retry workflows, real-time updates, and decoupled service communication for scalable applications.",
    tech: [
      "Celery",
      "Redis",
      "Kafka",
      "WebSockets",
      "Background Jobs",
    ],
  },
  {
    icon: Database,
    title: "Database Engineering",
    level: "Production",
    description:
      "Designing relational schemas, optimizing queries, managing migrations, indexing high-volume data, and supporting vector-based retrieval.",
    tech: [
      "PostgreSQL",
      "CockroachDB",
      "MySQL",
      "Redis",
      "pgvector",
    ],
  },
  {
    icon: Gauge,
    title: "Performance & Reliability",
    level: "Production",
    description:
      "Improving backend performance through query optimization, caching, reusable services, failure handling, retries, and efficient data processing.",
    tech: [
      "Query Optimization",
      "Caching",
      "Retries",
      "Error Handling",
      "Scalability",
    ],
  },
  {
    icon: ShieldCheck,
    title: "API Security",
    level: "Production",
    description:
      "Applying input validation, access control, secure API communication, user data isolation, and reliable permission checks.",
    tech: [
      "Input Validation",
      "API Security",
      "Data Isolation",
      "Permissions",
      "Secure Workflows",
    ],
  },
  {
    icon: Braces,
    title: "Clean Backend Architecture",
    level: "Production",
    description:
      "Structuring services with modular components, reusable business logic, clean boundaries, and maintainable microservice patterns.",
    tech: [
      "Clean Architecture",
      "SOLID",
      "Microservices",
      "Service Layer",
      "Modular Design",
    ],
  },
  {
    icon: Activity,
    title: "Production Support",
    level: "Production",
    description:
      "Handling debugging, root-cause analysis, production issues, API failures, and cross-team delivery in Agile environments.",
    tech: [
      "Debugging",
      "Root Cause Analysis",
      "Production Support",
      "Logging",
      "Agile/Scrum",
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

function BackendSkillCard({
  icon: Icon,
  title,
  level,
  description,
  tech,
}: BackendSkill) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#1a2338]/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#1e2942] hover:shadow-[0_0_30px_rgba(99,247,255,0.05)] sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-4">
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
        className={`${montserrat.className} text-[19px] font-[600] tracking-[-0.03em] text-[#edf2ff] sm:text-[20px]`}
      >
        {title}
      </h4>

      {/* Description */}
      <p
        className={`${inter.className} mt-3 flex-1 text-[13px] leading-[1.8] text-[#8f9ab3] sm:text-[14px]`}
      >
        {description}
      </p>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <SkillBadge key={item} item={item} />
        ))}
      </div>
    </article>
  );
}

export default function BackendSkillsTab() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-9 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
          >
            Backend Capabilities
          </p>

          <h3
            className={`${montserrat.className} mt-3 text-[27px] font-[700] tracking-[-0.04em] text-[#edf2ff] sm:text-[32px] lg:text-[36px]`}
          >
            Backend Engineering
          </h3>

          <p
            className={`${inter.className} mt-3 max-w-3xl text-[14px] leading-[1.8] text-[#8b90a0] sm:text-[15px]`}
          >
            Building secure, scalable, and production-ready backend systems
            using Django, Django REST Framework, FastAPI, PostgreSQL, Celery,
            Redis, Kafka, WebSockets, and clean service architecture.
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
            40+ Production APIs
          </span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {backendSkills.map((skill) => (
          <BackendSkillCard
            key={skill.title}
            {...skill}
          />
        ))}
      </div>

      {/* Supporting Toolkit */}
      <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p
              className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.12em] text-[#7d899f] sm:text-[11px]`}
            >
              Backend Engineering Toolkit
            </p>

            <p
              className={`${inter.className} mt-2 max-w-2xl text-[12px] leading-6 text-[#8490a7] sm:text-[13px]`}
            >
              Supporting technologies and engineering practices used across
              enterprise fintech systems, asynchronous services, and
              AI-powered SaaS applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Django",
              "DRF",
              "FastAPI",
              "Celery",
              "Redis",
              "Kafka",
              "WebSockets",
              "PostgreSQL",
              "JWT",
              "RBAC",
              "Pytest",
              "Postman",
              "Docker",
            ].map((item) => (
              <SkillBadge key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
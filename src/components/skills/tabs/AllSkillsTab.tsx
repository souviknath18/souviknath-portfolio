"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Box,
  BrainCircuit,
  Check,
  Cloud,
  CloudCog,
  Code2,
  Cpu,
  Database,
  FileCode2,
  KeyRound,
  Layers3,
  Network,
  Palette,
  Server,
  Waypoints,
  Workflow,
} from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

import terminalIcon from "@/assets/icons/terminal.png";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

type SkillCardProps = {
  icon: LucideIcon;
  level: string;
  title: string;
  description: string;
  skills: string[];
};

type AIBoxProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  skills: string[];
};

type BackendGroupProps = {
  title: string;
  description: string;
  skills: string[];
};

type InfraItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const frontendSkills: SkillCardProps[] = [
  {
    icon: Layers3,
    level: "Production",
    title: "Next.js & React",
    description:
      "Building responsive applications, reusable components, dashboards, and modern SaaS interfaces.",
    skills: ["Next.js", "React.js", "React Query", "Zustand"],
  },
  {
    icon: Code2,
    level: "Production",
    title: "TypeScript & JavaScript",
    description:
      "Developing maintainable frontend systems using typed components, reusable utilities, and clean application logic.",
    skills: ["TypeScript", "JavaScript", "Type Safety"],
  },
  {
    icon: Palette,
    level: "Production",
    title: "UI Engineering",
    description:
      "Creating responsive and accessible user interfaces with consistent design systems and reusable components.",
    skills: ["Tailwind CSS", "shadcn/ui", "Responsive UI"],
  },
  {
    icon: FileCode2,
    level: "Core",
    title: "Web Fundamentals",
    description:
      "Applying semantic markup, responsive styling, accessibility, and browser-compatible frontend practices.",
    skills: ["HTML5", "CSS3", "Accessibility"],
  },
];

const aiCapabilities: AIBoxProps[] = [
  {
    icon: Bot,
    title: "OpenAI & LLM Applications",
    description:
      "Building production AI features with structured prompts, controlled outputs, intelligent fallbacks, and secure API integration.",
    badge: "Production Integration",
    skills: ["OpenAI API", "LLMs", "Prompt Engineering"],
  },
  {
    icon: BrainCircuit,
    title: "RAG & Semantic Retrieval",
    description:
      "Implementing embedding pipelines, similarity search, and retrieval workflows for natural-language access to application data.",
    badge: "Implemented",
    skills: ["RAG", "Embeddings", "Semantic Search", "pgvector"],
  },
  {
    icon: Cpu,
    title: "Intelligent Document Processing",
    description:
      "Combining rules, AI extraction, asynchronous jobs, and validation to process financial documents and structured transactions.",
    badge: "Aura Finance",
    skills: ["Document Parsing", "AI Extraction", "AI Workflows"],
  },
];

const backendGroups: BackendGroupProps[] = [
  {
    title: "Python Backend",
    description:
      "Building secure and maintainable backend services for enterprise and AI-powered applications.",
    skills: ["Python", "Django", "Django REST Framework", "FastAPI"],
  },
  {
    title: "API Engineering",
    description:
      "Designing production-grade APIs with clear contracts, authentication, filtering, pagination, and validation.",
    skills: ["RESTful APIs", "JWT", "RBAC", "API Security"],
  },
  {
    title: "Async & Event-Driven Systems",
    description:
      "Supporting background processing, real-time updates, retries, and decoupled service communication.",
    skills: ["Celery", "Redis", "Kafka", "WebSockets"],
  },
];

const databaseSkills = [
  {
    name: "PostgreSQL",
    description: "Schema design, indexing, query optimization, and transactions",
  },
  {
    name: "CockroachDB",
    description: "Distributed SQL schemas for financial applications",
  },
  {
    name: "MySQL",
    description: "Relational data management and application integration",
  },
  {
    name: "Redis",
    description: "Caching, Celery queues, and background task coordination",
  },
  {
    name: "pgvector",
    description: "Embedding storage and vector similarity search",
  },
];

const infrastructureItems: InfraItemProps[] = [
  {
    icon: Box,
    title: "Docker & Compose",
    description: "Containerized application services and local environments",
  },
  {
    icon: Workflow,
    title: "GitHub Actions",
    description: "Automated CI/CD pipelines and build validation",
  },
  {
    icon: CloudCog,
    title: "Google Cloud Platform",
    description: "Primary enterprise cloud deployment environment",
  },
  {
    icon: Cloud,
    title: "AWS",
    description: "Working exposure to EC2 and S3 services",
  },
  {
    icon: Network,
    title: "Railway & Vercel",
    description: "Backend and frontend application deployments",
  },
  {
    icon: Server,
    title: "Cloudflare R2",
    description: "Cloud object storage for uploaded financial documents",
  },
];

function SkillBadge({
  children,
}: {
  children: string;
}) {
  return (
    <span
      className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] leading-none text-[#b3bfd7] transition-all duration-300 group-hover:border-cyan-300/15 group-hover:text-[#dce7fb] sm:text-[11px]`}
    >
      {children}
    </span>
  );
}

function SkillCard({
  icon: Icon,
  level,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article className="group rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/[0.04] sm:p-5">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.05]">
          <Icon
            size={20}
            strokeWidth={1.9}
            className="text-cyan-300"
            aria-hidden="true"
          />
        </div>

        <span
          className={`${jetbrainsMono.className} rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-[#727e95]`}
        >
          {level}
        </span>
      </div>

      <h4 className="text-[16px] font-semibold text-[#e8edff] sm:text-[17px]">
        {title}
      </h4>

      <p className="mt-3 text-[12px] leading-[1.75] text-[#818da5] sm:text-[13px]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill}>{skill}</SkillBadge>
        ))}
      </div>
    </article>
  );
}

function AIBox({
  icon: Icon,
  title,
  description,
  badge,
  skills,
}: AIBoxProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#1a253b] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-[#1d2941] sm:p-6">
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/[0.07] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.11]" />

      <Icon
        size={70}
        strokeWidth={1.1}
        className="pointer-events-none absolute right-3 top-3 text-[#2c426a]/65"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <span
          className={`${jetbrainsMono.className} inline-flex rounded-md border border-cyan-300/15 bg-cyan-300/[0.06] px-2.5 py-1 text-[9px] uppercase tracking-[0.1em] text-cyan-300 sm:text-[10px]`}
        >
          {badge}
        </span>

        <h4 className="mt-5 text-[18px] font-semibold tracking-[-0.02em] text-cyan-100 sm:text-[19px]">
          {title}
        </h4>

        <p className="mt-3 text-[13px] leading-[1.75] text-[#aebbd2] sm:text-[14px]">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>
      </div>
    </article>
  );
}

function BackendGroup({
  title,
  description,
  skills,
}: BackendGroupProps) {
  return (
    <article className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#4d8fff]/25 hover:bg-white/[0.04] sm:p-5">
      <h4 className="text-[15px] font-semibold text-[#edf2ff] sm:text-[16px]">
        {title}
      </h4>

      <p className="mt-2 text-[12px] leading-[1.7] text-[#7f8ba2] sm:text-[13px]">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill}>{skill}</SkillBadge>
        ))}
      </div>
    </article>
  );
}

function InfraItem({
  icon: Icon,
  title,
  description,
}: InfraItemProps) {
  return (
    <article className="group flex min-h-[76px] items-start gap-4 rounded-xl border border-white/[0.06] bg-[#1b2438] px-4 py-4 transition-all duration-300 hover:border-cyan-300/15 hover:bg-[#202b44] sm:px-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.035]">
        <Icon
          size={17}
          className="text-[#8aa4d6]"
          aria-hidden="true"
        />
      </div>

      <div>
        <p
          className={`${jetbrainsMono.className} text-[12px] font-medium text-[#dfe8ff] sm:text-[13px]`}
        >
          {title}
        </p>

        <p className="mt-1.5 text-[11px] leading-5 text-[#78849a] sm:text-[12px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function AllSkillsTab() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
      {/* Frontend */}
      <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-4 backdrop-blur-md sm:rounded-3xl sm:p-6 sm:backdrop-blur-xl lg:col-span-8 lg:p-8">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05]">
            <Code2
              size={22}
              className="text-cyan-300"
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-[#adc7ff] sm:text-[24px] lg:text-[27px]">
              Frontend Engineering
            </h3>

            <p className="mt-1 text-[12px] text-[#727e95] sm:text-[13px]">
              Responsive interfaces and production-ready web applications
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {frontendSkills.map((skill) => (
            <SkillCard
              key={skill.title}
              {...skill}
            />
          ))}
        </div>
      </section>

      {/* Databases */}
      <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-4 backdrop-blur-md sm:rounded-3xl sm:p-6 sm:backdrop-blur-xl lg:col-span-4 lg:p-8">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/15 bg-orange-300/[0.05]">
            <Database
              size={22}
              className="text-orange-300"
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-orange-300 sm:text-[24px]">
              Data Systems
            </h3>

            <p className="mt-1 text-[12px] text-[#727e95]">
              Relational, caching, and vector data
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {databaseSkills.map((database) => (
            <article
              key={database.name}
              className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:border-orange-300/15 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                <Server
                  size={17}
                  className="shrink-0 text-orange-300"
                  aria-hidden="true"
                />

                <span className="text-[14px] font-medium text-[#edf2ff]">
                  {database.name}
                </span>
              </div>

              <p className="mt-2 pl-7 text-[11px] leading-5 text-[#778399] sm:text-[12px]">
                {database.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* AI */}
      <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-4 backdrop-blur-md sm:rounded-3xl sm:p-6 sm:backdrop-blur-xl lg:col-span-12 lg:p-8">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05]">
            <BrainCircuit
              size={23}
              className="text-cyan-300"
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#adc7ff] sm:text-[25px] lg:text-[28px]">
              AI & Generative AI Engineering
            </h3>

            <p className="mt-1 text-[12px] text-[#727e95] sm:text-[13px]">
              Practical AI capabilities implemented in full-stack products
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {aiCapabilities.map((capability) => (
            <AIBox
              key={capability.title}
              {...capability}
            />
          ))}
        </div>
      </section>

      {/* Backend */}
      <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-4 backdrop-blur-md sm:rounded-3xl sm:p-6 sm:backdrop-blur-xl lg:col-span-6 lg:p-8">
        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4d8fff]/15 bg-[#4d8fff]/[0.05]">
            <Image
              src={terminalIcon}
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-[#adc7ff] sm:text-[24px] lg:text-[27px]">
              Backend & Systems
            </h3>

            <p className="mt-1 text-[12px] text-[#727e95]">
              APIs, security, async processing, and event-driven services
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {backendGroups.map((group) => (
            <BackendGroup
              key={group.title}
              {...group}
            />
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.035] px-4 py-3">
          <p
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.1em] text-cyan-300`}
          >
            40+ production-grade RESTful and asynchronous APIs
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-4 backdrop-blur-md sm:rounded-3xl sm:p-6 sm:backdrop-blur-xl lg:col-span-6 lg:p-8">
        <div className="mb-7 flex items-center gap-4">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05]">
            <Cloud
              size={25}
              className="fill-cyan-300 text-cyan-300"
              aria-hidden="true"
            />

            <Check
              size={11}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] stroke-[3] text-[#08111f]"
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-[#adc7ff] sm:text-[24px] lg:text-[27px]">
              Cloud & Infrastructure
            </h3>

            <p className="mt-1 text-[12px] text-[#727e95]">
              Containerization, CI/CD, cloud services, and deployment
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {infrastructureItems.map((item) => (
            <InfraItem
              key={item.title}
              {...item}
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
            <KeyRound
              size={17}
              className="text-[#8aa4d6]"
              aria-hidden="true"
            />

            <span
              className={`${jetbrainsMono.className} text-[11px] text-[#c6d1e8] sm:text-[12px]`}
            >
              JWT Authentication & RBAC
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
            <Waypoints
              size={17}
              className="text-[#8aa4d6]"
              aria-hidden="true"
            />

            <span
              className={`${jetbrainsMono.className} text-[11px] text-[#c6d1e8] sm:text-[12px]`}
            >
              REST API Architecture
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
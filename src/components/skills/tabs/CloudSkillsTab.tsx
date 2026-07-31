"use client";

import type { LucideIcon } from "lucide-react";
import {
  Box,
  CheckCircle2,
  Cloud,
  CloudCog,
  Container,
  GitBranch,
  KeyRound,
  Network,
  ServerCog,
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

type CloudSkill = {
  icon: LucideIcon;
  title: string;
  level: string;
  description: string;
  tech: string[];
};

const cloudSkills: CloudSkill[] = [
  {
    icon: Container,
    title: "Docker & Docker Compose",
    level: "Production",
    description:
      "Containerizing frontend, backend, worker, and supporting services to create consistent local and deployment environments.",
    tech: [
      "Docker",
      "Docker Compose",
      "Dockerfile",
      "Service Containers",
      "App Packaging",
    ],
  },
  {
    icon: Workflow,
    title: "CI/CD with GitHub Actions",
    level: "Production",
    description:
      "Building automated pipelines for dependency installation, code checks, builds, pull requests, and deployment validation.",
    tech: [
      "GitHub Actions",
      "CI/CD",
      "Build Pipelines",
      "Pull Requests",
      "Automation",
    ],
  },
  {
    icon: Cloud,
    title: "Google Cloud Platform",
    level: "Professional",
    description:
      "Supporting application deployment and cloud-based enterprise systems primarily within Google Cloud Platform environments.",
    tech: [
      "GCP",
      "Cloud Deployment",
      "Environment Config",
      "Hosted Services",
      "Production Systems",
    ],
  },
  {
    icon: ServerCog,
    title: "Railway & Vercel",
    level: "Production",
    description:
      "Deploying Django backend services and Next.js frontend applications with environment variables, managed builds, and production configuration.",
    tech: [
      "Railway",
      "Vercel",
      "Backend Deployment",
      "Frontend Deployment",
      "Environment Variables",
    ],
  },
  {
    icon: Box,
    title: "Cloudflare R2",
    level: "Production",
    description:
      "Using cloud object storage for uploaded financial documents, including PDFs, CSV files, images, receipts, and invoices.",
    tech: [
      "Cloudflare R2",
      "Object Storage",
      "File Uploads",
      "Secure Storage",
      "Media Files",
    ],
  },
  {
    icon: CloudCog,
    title: "AWS",
    level: "Working Exposure",
    description:
      "Working knowledge of AWS infrastructure and storage services for application hosting, file storage, and scalable cloud workflows.",
    tech: [
      "AWS",
      "EC2",
      "S3",
      "Cloud Basics",
      "Infrastructure",
    ],
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    level: "Production",
    description:
      "Managing branches, commits, pull requests, code reviews, feature workflows, and collaborative source-control practices.",
    tech: [
      "Git",
      "GitHub",
      "Branching",
      "Pull Requests",
      "Code Review",
    ],
  },
  {
    icon: KeyRound,
    title: "Secrets & Configuration",
    level: "Production",
    description:
      "Managing API keys, database credentials, environment variables, cloud secrets, and environment-specific application settings.",
    tech: [
      "Environment Variables",
      "API Keys",
      "Secrets",
      "Config Management",
      "Secure Deployment",
    ],
  },
  {
    icon: Network,
    title: "Distributed Application Services",
    level: "Production",
    description:
      "Operating applications with API services, Celery workers, Redis queues, object storage, databases, and separated frontend deployments.",
    tech: [
      "Celery Workers",
      "Redis",
      "PostgreSQL",
      "Object Storage",
      "Service Architecture",
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

function CloudSkillCard({
  icon: Icon,
  title,
  level,
  description,
  tech,
}: CloudSkill) {
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

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <SkillBadge key={item} item={item} />
        ))}
      </div>
    </article>
  );
}

export default function CloudSkillsTab() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-9 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
          >
            Infrastructure Capabilities
          </p>

          <h3
            className={`${montserrat.className} mt-3 text-[27px] font-[700] tracking-[-0.04em] text-[#edf2ff] sm:text-[32px] lg:text-[36px]`}
          >
            Cloud & DevOps
          </h3>

          <p
            className={`${inter.className} mt-3 max-w-3xl text-[14px] leading-[1.8] text-[#8b90a0] sm:text-[15px]`}
          >
            Containerizing applications, automating CI/CD pipelines, managing
            secure configuration, and deploying frontend, backend, worker,
            database, and storage services across modern cloud platforms.
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
            Production Deployment Workflows
          </span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cloudSkills.map((skill) => (
          <CloudSkillCard
            key={skill.title}
            {...skill}
          />
        ))}
      </div>

      {/* Deployment Architecture */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p
              className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.12em] text-[#7d899f] sm:text-[11px]`}
            >
              Current Deployment Architecture
            </p>

            <h4
              className={`${montserrat.className} mt-2 text-[20px] font-[600] tracking-[-0.03em] text-[#edf2ff] sm:text-[22px]`}
            >
              Aura Finance Infrastructure
            </h4>

            <p
              className={`${inter.className} mt-3 max-w-3xl text-[12px] leading-6 text-[#8490a7] sm:text-[13px]`}
            >
              The frontend is deployed on Vercel, while Django APIs, Celery
              workers, Redis, and PostgreSQL run through managed backend
              infrastructure. Cloudflare R2 stores uploaded financial
              documents, and GitHub Actions supports automated build and
              deployment workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
            {[
              "Vercel",
              "Railway",
              "PostgreSQL",
              "Celery",
              "Redis",
              "Cloudflare R2",
              "Docker",
              "GitHub Actions",
            ].map((item) => (
              <SkillBadge key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
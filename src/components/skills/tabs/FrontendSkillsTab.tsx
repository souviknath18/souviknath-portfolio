"use client";

import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Code2,
  LayoutDashboard,
  Layers3,
  MonitorSmartphone,
  Palette,
  ShieldCheck,
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

type FrontendSkill = {
  icon: LucideIcon;
  title: string;
  level: string;
  description: string;
  tech: string[];
};

const frontendSkills: FrontendSkill[] = [
  {
    icon: Layers3,
    title: "Next.js & React",
    level: "Production",
    description:
      "Building scalable web applications with reusable components, server and client rendering, routing, and maintainable frontend architecture.",
    tech: [
      "Next.js",
      "React.js",
      "App Router",
      "SSR",
      "Reusable Components",
    ],
  },
  {
    icon: Code2,
    title: "TypeScript & JavaScript",
    level: "Production",
    description:
      "Developing strongly typed frontend systems with reusable interfaces, predictable data flow, and maintainable application logic.",
    tech: [
      "TypeScript",
      "JavaScript",
      "Type Safety",
      "Interfaces",
      "API Types",
    ],
  },
  {
    icon: Palette,
    title: "UI Engineering",
    level: "Production",
    description:
      "Creating consistent and polished user interfaces using reusable design patterns, utility-first styling, and accessible components.",
    tech: [
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Design Systems",
      "Accessibility",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    level: "Production",
    description:
      "Building mobile-first layouts that adapt cleanly across desktop, tablet, and mobile devices while preserving usability.",
    tech: [
      "Mobile First",
      "CSS Grid",
      "Flexbox",
      "Breakpoints",
      "Adaptive Layouts",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboards",
    level: "Production",
    description:
      "Developing data-driven dashboards with transaction tables, filtering, pagination, upload workflows, analytics, and operational states.",
    tech: [
      "Tables",
      "Pagination",
      "Filters",
      "Analytics UI",
      "Real-Time States",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Frontend Architecture",
    level: "Production",
    description:
      "Structuring frontend applications with reusable components, clear state boundaries, secure API integration, and reliable error handling.",
    tech: [
      "React Query",
      "Zustand",
      "JWT Integration",
      "Error Handling",
      "Component Architecture",
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

function FrontendSkillCard({
  icon: Icon,
  title,
  level,
  description,
  tech,
}: FrontendSkill) {
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

      {/* Technology Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <SkillBadge key={item} item={item} />
        ))}
      </div>
    </article>
  );
}

export default function FrontendSkillsTab() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-9 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p
            className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
          >
            Frontend Capabilities
          </p>

          <h3
            className={`${montserrat.className} mt-3 text-[27px] font-[700] tracking-[-0.04em] text-[#edf2ff] sm:text-[32px] lg:text-[36px]`}
          >
            Frontend Engineering
          </h3>

          <p
            className={`${inter.className} mt-3 max-w-3xl text-[14px] leading-[1.8] text-[#8b90a0] sm:text-[15px]`}
          >
            Building responsive, maintainable, and production-ready interfaces
            with Next.js, React, TypeScript, Tailwind CSS, reusable components,
            secure API integration, and modern state management.
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
            Production Frontend Experience
          </span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {frontendSkills.map((skill) => (
          <FrontendSkillCard
            key={skill.title}
            {...skill}
          />
        ))}
      </div>

      {/* Supporting Technologies */}
      <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p
              className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.12em] text-[#7d899f] sm:text-[11px]`}
            >
              Supporting Frontend Toolkit
            </p>

            <p
              className={`${inter.className} mt-2 max-w-2xl text-[12px] leading-6 text-[#8490a7] sm:text-[13px]`}
            >
              Tools and patterns I use to build reliable frontend workflows,
              connect APIs, manage application state, and maintain consistent
              user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "React Query",
              "Zustand",
              "shadcn/ui",
              "Radix UI",
              "Lucide React",
              "JWT Auth",
              "REST API Integration",
              "Form Validation",
            ].map((item) => (
              <SkillBadge key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
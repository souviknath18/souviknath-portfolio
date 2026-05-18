"use client";

import {
  Cloud,
  Box,
  Workflow,
  GitBranch,
  ServerCog,
  KeyRound,
  Waypoints,
  CheckCircle2,
} from "lucide-react";

import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";

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

const cloudSkills = [
  {
    icon: <Box size={24} />,
    title: "Docker",
    level: "PRACTICING",
    description:
      "Containerizing applications and understanding deployment-ready development environments.",
    tech: ["Containers", "Dockerfile", "Local Setup", "App Packaging"],
  },

  {
    icon: <Workflow size={24} />,
    title: "GitHub Actions",
    level: "PRACTICING",
    description:
      "Working with CI/CD workflows to automate checks, builds, and deployment pipelines.",
    tech: ["CI/CD", "Workflows", "Builds", "Automation"],
  },

  {
    icon: <Cloud size={24} />,
    title: "Vercel Deployment",
    level: "PROFICIENT",
    description:
      "Deploying Next.js applications with environment variables, production builds, and preview deployments.",
    tech: ["Vercel", "Next.js Deploy", "Env Vars", "Production"],
  },

  {
    icon: <Waypoints size={24} />,
    title: "AWS Cloud",
    level: "LEARNING",
    description:
      "Learning cloud infrastructure concepts and deployment workflows using AWS services for scalable web applications.",
    tech: ["AWS", "Cloud Basics", "Hosting", "Scalability"],
  },

  {
    icon: <GitBranch size={24} />,
    title: "Git & GitHub",
    level: "ADVANCED",
    description:
      "Managing repositories, branches, commits, pull requests, and collaborative development workflows.",
    tech: ["Git", "GitHub", "Branches", "PRs"],
  },

  {
    icon: <KeyRound size={24} />,
    title: "Environment Security",
    level: "PRACTICING",
    description:
      "Handling environment variables, API keys, secrets, and secure configuration for deployed applications.",
    tech: ["Secrets", "API Keys", "Env Files", "Config"],
  },
];

export default function CloudSkillsTab() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">
      
      {/* HEADER */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h3
            className={`${montserrat.className} text-[28px] font-[700] tracking-[-0.04em] text-[#edf2ff] sm:text-[32px] lg:text-[38px]`}
          >
            Cloud & DevOps
          </h3>

          <p
            className={`${inter.className} mt-3 max-w-3xl text-[15px] leading-[1.8] text-[#8b90a0] sm:text-[16px] lg:text-[17px]`}
          >
            Working with deployment workflows, version control,
            containerization, CI/CD automation, and production-ready
            configuration for modern web applications.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-2">

          <CheckCircle2
            size={16}
            className="text-cyan-300"
          />

          <span
            className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.12em] text-cyan-300`}
          >
            Deployment Workflow
          </span>

        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

        {cloudSkills.map((skill) => (
          <div
            key={skill.title}
            className="group rounded-2xl border border-white/8 bg-[#1a2338]/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#1e2942] sm:p-6"
          >

            {/* TOP */}
            <div className="mb-5 flex items-start justify-between">

              <div className="text-cyan-300">
                {skill.icon}
              </div>

              <span
                className={`${jetbrainsMono.className} rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-cyan-300`}
              >
                {skill.level}
              </span>

            </div>

            {/* TITLE */}
            <h4
              className={`${montserrat.className} mb-4 text-[20px] font-[600] tracking-[-0.03em] text-[#edf2ff]`}
            >
              {skill.title}
            </h4>

            {/* DESCRIPTION */}
            <p
              className={`${inter.className} mb-6 text-[14px] leading-[1.8] text-[#8f9ab3] sm:text-[15px]`}
            >
              {skill.description}
            </p>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2">

              {skill.tech.map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.08em] text-[#b8c4dd]`}
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import terminalIcon from "@/assets/icons/terminal.png";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

import {
  Code2,
  Layers3,
  Palette,
  FileCode2,
  Database,
  Server,
  BrainCircuit,
  Bot,
  Cpu,
  Cloud,
  Check,
  Box,
  Network,
  CloudCog,
  Workflow,
  KeyRound,
  Waypoints,
} from "lucide-react";

function SkillCard({
  icon,
  level,
  title,
  years,
  width,
}: {
  icon: React.ReactNode;
  level: string;
  title: string;
  years: string;
  width: string;
}) {
  return (
    <div className="rounded-xl border border-white/6 bg-white/[0.03] p-4 sm:p-5 transition-all duration-300 hover:border-cyan-300/20">

      <div className="mb-5 flex items-start justify-between">
        <div className="text-cyan-300">
          {icon}
        </div>

        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6e7485]">
          {level}
        </span>
      </div>

      <h4 className="mb-1 text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-[#e8edff]">
        {title}
      </h4>

      <p className="mb-5 text-[13px] sm:text-[14px] lg:text-[15px] text-[#7d8496]">
        {years}
      </p>

      <div className="h-[5px] overflow-hidden rounded-full bg-white/8">
        <div
          className={`h-full rounded-full bg-cyan-300 ${width}`}
        />
      </div>
    </div>
  );
}

function AIBox({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge: string;
}) {
  const Icon =
    title.includes("OpenAI")
      ? Bot
      : title.includes("RAG")
      ? BrainCircuit
      : Cpu;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1d273d] p-5 sm:p-6 transition-all duration-300 hover:bg-[#212c44]">

      {/* BACKGROUND ICON */}
      <div className="pointer-events-none absolute right-3 top-3 z-0 text-[#2c426a]">
        <div className="scale-[0.8] sm:scale-100 origin-top-right">
          <Icon size={76} />
        </div>
      </div>

      {/* glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-300/15" />

      {/* content */}
      <div className="relative z-10">
        <h4 className="mb-4 text-[18px] sm:text-[19px] lg:text-[20px] font-semibold tracking-[-0.02em] text-cyan-100">
          {title}
        </h4>

        <p className="mb-6 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] sm:leading-[1.8] text-[#d3def2]">
          {description}
        </p>

        <div className="inline-flex rounded-sm bg-cyan-300/20 px-3 py-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-300">
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
}

function BackendSkill({
  title,
  years,
  width,
}: {
  title: string;
  years: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-[#edf2ff]">
          {title}
        </span>

        <span className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#8cb8ff]">
          {years}
        </span>
      </div>

      <div className="h-[6px] overflow-hidden rounded-full bg-white/8">
        <div
          className={`h-full rounded-full bg-[#4d8fff] ${width}`}
        />
      </div>
    </div>
  );
}

function InfraItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex min-h-[54px] sm:min-h-[58px] items-center gap-4 rounded-lg bg-[#1b2438] px-5 py-2 transition-all duration-300 hover:bg-[#202b44]">

      <div className="shrink-0 text-[#8aa4d6]">
        {icon}
      </div>

      <span
        className={`${jetbrainsMono.className} text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.25] tracking-[0.02em] text-[#dfe8ff]`}
      >
        {text}
      </span>
    </div>
  );
}

export default function AllSkillsTab() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 lg:grid-cols-12">

      {/* LEFT LARGE BOX */}
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#131b2e]/70 p-4 sm:p-6 lg:p-8 backdrop-blur-md sm:backdrop-blur-xl lg:col-span-8">

        {/* HEADER */}
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <div className="text-cyan-300">
            <Code2 size={26} />
          </div>

          <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold tracking-[-0.03em] text-[#adc7ff]">
            Frontend Architecture
          </h3>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <SkillCard
            icon={<Layers3 size={22} />}
            level="EXPERT"
            title="Next.js & React"
            years="2+ Years"
            width="w-[95%]"
          />

          <SkillCard
            icon={<Code2 size={22} />}
            level="EXPERT"
            title="TypeScript"
            years="2+ Years"
            width="w-[90%]"
          />

          <SkillCard
            icon={<Palette size={22} />}
            level="EXPERT"
            title="Tailwind CSS"
            years="2+ Years"
            width="w-[96%]"
          />

          <SkillCard
            icon={<FileCode2 size={22} />}
            level="ADVANCED"
            title="HTML / CSS"
            years="2+ Years"
            width="w-[85%]"
          />
        </div>
      </div>

      {/* RIGHT SMALL BOX */}
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#131b2e]/70 p-4 sm:p-6 lg:p-8 backdrop-blur-md sm:backdrop-blur-xl lg:col-span-4">

        {/* HEADER */}
        <div className="mb-6 sm:mb-8 flex items-center gap-3">

          <div className="text-orange-300">
            <Database size={24} />
          </div>

          <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold tracking-[-0.03em] text-orange-300">
            Databases
          </h3>
        </div>

        {/* ROWS */}
        <div className="space-y-4">

          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Server size={18} className="text-orange-300" />
              <span className="text-[14px] sm:text-[15px] font-medium text-[#edf2ff]">
                PostgreSQL
              </span>
            </div>
            <span className="font-mono text-[13px] sm:text-[14px] lg:text-[15px] text-[#7d8496]">
              2+ Years
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Server size={18} className="text-orange-300" />
              <span className="text-[14px] sm:text-[15px] font-medium text-[#edf2ff]">
                MySQL
              </span>
            </div>
            <span className="font-mono text-[13px] sm:text-[14px] lg:text-[15px] text-[#7d8496]">
              2+ Years
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Server size={18} className="text-orange-300" />
              <span className="text-[14px] sm:text-[15px] font-medium text-[#edf2ff]">
                CockroachDB
              </span>
            </div>
            <span className="font-mono text-[13px] sm:text-[14px] lg:text-[15px] text-[#7d8496]">
              2+ Years
            </span>
          </div>

        </div>
      </div>

      {/* AI & LLM ENGINEERING */}
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#131b2e]/70 p-4 sm:p-6 lg:p-8 backdrop-blur-md sm:backdrop-blur-xl lg:col-span-12">

        {/* HEADER */}
        <div className="mb-6 sm:mb-8 flex items-center gap-3">

          <div className="text-cyan-300">
            <BrainCircuit size={28} />
          </div>

          <h3 className="text-[24px] sm:text-[26px] lg:text-[30px] font-semibold tracking-[-0.03em] text-[#adc7ff]">
            Intelligence & LLM Engineering
          </h3>
        </div>

        {/* AI GRID */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

          <AIBox
            title="OpenAI APIs"
            description="Building production AI features with prompt engineering, structured outputs, and intelligent workflows."
            badge="PROD-READY"
          />

          <AIBox
            title="RAG & LangChain"
            description="Designing Retrieval-Augmented Generation systems with vector databases for contextual AI applications."
            badge="CORE STRENGTH"
          />

          <AIBox
            title="AI Agents & Automation"
            description="Developing intelligent agents and automation flows for real-world use cases like finance and career tools."
            badge="BUILDING"
          />
        </div>
      </div>

      {/* BACKEND + INFRASTRUCTURE */}
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#131b2e]/70 p-4 sm:p-6 lg:p-8 backdrop-blur-md sm:backdrop-blur-xl lg:col-span-6">

        {/* HEADER */}
        <div className="mb-8 flex items-center gap-4">

          <Image
            src={terminalIcon}
            alt="terminal"
            className="h-7 w-7 object-contain"
          />

          <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold tracking-[-0.03em] text-[#adc7ff]">
            Backend & Systems
          </h3>
        </div>

        {/* SKILLS */}
        <div className="space-y-6">

          <BackendSkill
            title="Python / Django / DRF"
            years="2+ Years"
            width="w-[92%]"
          />

          <BackendSkill
            title="FastAPI"
            years="1+ Year"
            width="w-[75%]"
          />

          <BackendSkill
            title="RESTful APIs + Security"
            years="2+ Years"
            width="w-[88%]"
          />

          <BackendSkill
            title="JWT & RBAC"
            years="2+ Years"
            width="w-[85%]"
          />
        </div>
      </div>

      {/* INFRASTRUCTURE */}
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#131b2e]/70 p-4 sm:p-6 lg:p-8 backdrop-blur-md sm:backdrop-blur-xl lg:col-span-6">

        <div className="mb-8 flex items-center gap-4">
          <div className="relative">
            <Cloud size={34} className="fill-cyan-300 text-cyan-300" />
            <Check size={14} className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-[55%] text-[#08111f] stroke-[3]" />
          </div>
          <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold tracking-[-0.03em] text-[#adc7ff]">
            Infrastructure
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <InfraItem icon={<Box size={18} />} text="Docker" />
          <InfraItem icon={<Workflow size={18} />} text="GitHub Actions (CI/CD)" />
          <InfraItem icon={<CloudCog size={18} />} text="Vercel Deployment" />
          <InfraItem icon={<Cloud size={18} />} text="AWS (Learning)" />
          <InfraItem icon={<KeyRound size={18} />} text="JWT + RBAC" />
          <InfraItem icon={<Waypoints size={18} />} text="REST API Design" />
        </div>
      </div>
    </div>
  );
}
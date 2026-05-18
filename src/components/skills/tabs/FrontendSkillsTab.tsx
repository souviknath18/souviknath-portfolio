"use client";

import {
  Layers3,
  Code2,
  Palette,
  Smartphone,
  Monitor,
  Wand2,
  CheckCircle2,
} from "lucide-react";

import {
  Montserrat,
  Inter,
  JetBrains_Mono,
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

const frontendSkills = [
  {
    icon: <Layers3 size={24} />,
    title: "Next.js & React",
    level: "ADVANCED",
    description:
      "Building scalable, production-ready frontend applications with reusable architecture and optimized rendering.",
    tech: ["Next.js", "React", "SSR", "Routing"],
  },

  {
    icon: <Code2 size={24} />,
    title: "TypeScript",
    level: "ADVANCED",
    description:
      "Writing strongly typed and maintainable frontend code for scalable engineering workflows.",
    tech: ["Type Safety", "Interfaces", "Reusable Types", "Scalable Code"],
  },

  {
    icon: <Palette size={24} />,
    title: "UI Engineering",
    level: "ADVANCED",
    description:
      "Crafting modern user interfaces with responsive layouts, animations, and polished visual systems.",
    tech: ["Tailwind CSS", "Responsive UI", "Dark UI", "Glassmorphism"],
  },

  {
    icon: <Smartphone size={24} />,
    title: "Responsive Design",
    level: "ADVANCED",
    description:
      "Creating mobile-first experiences optimized for desktop, tablet, and mobile screens.",
    tech: ["Mobile First", "Flexbox", "Grid", "Adaptive Layouts"],
  },

  {
    icon: <Monitor size={24} />,
    title: "Dashboard Systems",
    level: "ADVANCED",
    description:
      "Designing SaaS-style dashboards with clean UX, analytics visualization, and interactive workflows.",
    tech: ["Tables", "Charts", "Analytics UI", "Admin Panels"],
  },

  {
    icon: <Wand2 size={24} />,
    title: "Frontend UX",
    level: "PROFICIENT",
    description:
      "Improving usability and interface consistency with attention to spacing, hierarchy, and interaction flow.",
    tech: ["UX Patterns", "Accessibility", "Visual Hierarchy", "Interaction"],
  },
];

export default function FrontendSkillsTab() {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#131b2e]/70 p-5 sm:p-6 lg:p-8 backdrop-blur-xl">

      {/* HEADER */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h3
            className={`${montserrat.className} text-[28px] sm:text-[32px] lg:text-[38px] font-[700] tracking-[-0.04em] text-[#edf2ff]`}
          >
            Frontend Engineering
          </h3>

          <p
            className={`${inter.className} mt-3 max-w-3xl text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] text-[#8b90a0]`}
          >
            Building scalable frontend architectures, responsive user
            interfaces, and modern SaaS experiences with performance,
            usability, and clean design systems in mind.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-2">
          <CheckCircle2 size={16} className="text-cyan-300" />

          <span
            className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.12em] text-cyan-300`}
          >
            Production Frontend Systems
          </span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

        {frontendSkills.map((skill) => (
          <div
            key={skill.title}
            className="group rounded-2xl border border-white/8 bg-[#1a2338]/70 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#1e2942]"
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
              className={`${inter.className} mb-6 text-[14px] sm:text-[15px] leading-[1.8] text-[#8f9ab3]`}
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
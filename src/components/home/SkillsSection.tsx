"use client";

import Image from "next/image";

import terminalIcon from "@/assets/icons/terminal.png";

import frontendIcon from "@/assets/icons/js.png";
import backendIcon from "@/assets/icons/server.png";
import aiIcon from "@/assets/icons/ai.png";
import cloudIcon from "@/assets/icons/cloud.png";
import databaseIcon from "@/assets/icons/database.png";

import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const skills = [
  {
    title: "Frontend",
    icon: frontendIcon,
    iconBoxClass:
      "border border-[#adc7ff]/15 bg-[#adc7ff]/6",
    items: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    icon: backendIcon,
    iconBoxClass:
      "border border-[#63f7ff]/20 bg-[#63f7ff]/10",
    items: [
      "Django",
      "Django REST Framework",
      "RESTful API",
      "Python / FastAPI",
    ],
  },

  {
    title: "AI / ML",
    icon: aiIcon,
    iconBoxClass:
      "border border-[#4a8eff]/20 bg-[#4a8eff]/10",
    items: [
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "Pinecone / Vector DB",
    ],
  },

  {
    title: "Cloud",
    icon: cloudIcon,
    iconBoxClass:
      "border border-[#ffb695]/20 bg-[#ffb695]/10",
    items: [
      "AWS (S3, EC2, Lambda)",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions)",
    ],
  },

  {
    title: "Database",
    icon: databaseIcon,
    iconBoxClass:
      "border border-[#8b90a0]/20 bg-[#8b90a0]/10",
    items: ["PostgreSQL", "MySQL", "CockroachDB", "Redis"],
  },
];

function SkillCard({
  title,
  icon,
  iconBoxClass,
  items,
}: {
  title: string;
  icon: any;
  iconBoxClass: string;
  items: string[];
}) {
  return (
    <div className="group rounded-[20px] border border-white/10 bg-[#131b2eb3] p-7 shadow-[0_0_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#17233b]/90 hover:shadow-[0_0_35px_rgba(99,247,255,0.06)]">
      
      {/* Icon */}
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${iconBoxClass}`}
      >
        <Image
          src={icon}
          alt={title}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h3 className="mb-5 text-[22px] font-[700] tracking-[-0.02em] text-[#dae2fd]">
        {title}
      </h3>

      {/* Skills */}
      <div
        className={`${jetbrainsMono.className} space-y-3 text-[14px] tracking-[0.02em] text-[#9ba7c2]`}
      >
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-4">
      
      {/* Heading */}
      <div className="mb-12 flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-transparent">
          <Image
            src={terminalIcon}
            alt="Terminal Icon"
            width={28}
            height={28}
            className="object-contain opacity-90"
          />
        </div>

        <h2 className="text-[32px] font-semibold tracking-tight text-[#dae2fd] sm:text-4xl">
          Technical Arsenal
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            iconBoxClass={skill.iconBoxClass}
            items={skill.items}
          />
        ))}
      </div>
    </section>
  );
}
"use client";

import Image, { StaticImageData } from "next/image";
import { JetBrains_Mono } from "next/font/google";

import terminalIcon from "@/assets/icons/terminal.png";
import frontendIcon from "@/assets/icons/js.png";
import backendIcon from "@/assets/icons/server.png";
import aiIcon from "@/assets/icons/ai.png";
import cloudIcon from "@/assets/icons/cloud.png";
import databaseIcon from "@/assets/icons/database.png";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

type Skill = {
  title: string;
  icon: StaticImageData;
  iconBoxClass: string;
  items: string[];
};

const skills: Skill[] = [
  {
    title: "Frontend",
    icon: frontendIcon,
    iconBoxClass: "border border-[#adc7ff]/15 bg-[#adc7ff]/6",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    icon: backendIcon,
    iconBoxClass: "border border-[#63f7ff]/20 bg-[#63f7ff]/10",
    items: [
      "Python",
      "Django & DRF",
      "FastAPI",
      "RESTful APIs",
      "Celery & Redis",
      "Kafka & WebSockets",
    ],
  },
  {
    title: "AI & GenAI",
    icon: aiIcon,
    iconBoxClass: "border border-[#4a8eff]/20 bg-[#4a8eff]/10",
    items: [
      "OpenAI API",
      "LLM Applications",
      "RAG Workflows",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "Vector Search",
    ],
  },
  {
    title: "Database",
    icon: databaseIcon,
    iconBoxClass: "border border-[#8b90a0]/20 bg-[#8b90a0]/10",
    items: [
      "PostgreSQL",
      "CockroachDB",
      "MySQL",
      "MongoDB",
      "Redis",
      "pgvector",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: cloudIcon,
    iconBoxClass: "border border-[#ffb695]/20 bg-[#ffb695]/10",
    items: [
      "Docker & Compose",
      "GitHub Actions",
      "CI/CD Pipelines",
      "GCP & AWS",
      "Railway & Vercel",
      "Cloudflare R2",
    ],
  },
];

function SkillCard({
  title,
  icon,
  iconBoxClass,
  items,
}: Skill) {
  return (
    <article className="group rounded-[20px] border border-white/10 bg-[#131b2eb3] p-6 shadow-[0_0_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#17233b]/90 hover:shadow-[0_0_35px_rgba(99,247,255,0.06)] sm:p-7">
      {/* Icon */}
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${iconBoxClass}`}
      >
        <Image
          src={icon}
          alt={`${title} icon`}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h3 className="mb-5 text-[20px] font-bold tracking-[-0.02em] text-[#dae2fd]">
        {title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className={`${jetbrainsMono.className} rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-[11px] leading-none tracking-[0.01em] text-[#aab5ce] transition-all duration-300 group-hover:border-cyan-300/10 group-hover:bg-cyan-300/[0.025] group-hover:text-[#c8d3eb] sm:text-[12px]`}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-6 lg:py-24 xl:px-4"
    >
      {/* Heading */}
      <div className="mb-12">
        <div className="flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center">
            <Image
              src={terminalIcon}
              alt=""
              width={28}
              height={28}
              aria-hidden="true"
              className="object-contain opacity-90"
            />
          </div>

          <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-[#dae2fd] sm:text-4xl">
            Tech Stack
          </h2>
        </div>

        <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#8793ad] sm:text-[15px]">
          Technologies I use to build scalable full-stack applications,
          production APIs, AI-powered products, and cloud-deployed systems.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
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

      <p
        className={`${jetbrainsMono.className} mt-9 text-center text-[12px] tracking-[0.04em] text-[#77839b]`}
      >
        Building scalable systems with modern full-stack and AI technologies.
      </p>
    </section>
  );
}
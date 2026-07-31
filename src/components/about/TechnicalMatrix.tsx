"use client";

import {
  BrainCircuit,
  CloudCog,
  Database,
  Monitor,
  TerminalSquare,
  Waypoints,
} from "lucide-react";

import {
  Inter,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const frontendSkills = [
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "shadcn/ui",
];

const backendSkills = [
  "Python",
  "Django",
  "Django REST Framework",
  "FastAPI",
  "Celery",
  "Redis",
  "Kafka",
  "WebSockets",
];

const aiSkills = [
  "OpenAI API",
  "LLM Applications",
  "RAG",
  "Embeddings",
  "Semantic Search",
  "Vector Search",
  "Prompt Engineering",
];

const dataSkills = [
  "PostgreSQL",
  "CockroachDB",
  "MySQL",
  "MongoDB",
  "Redis",
  "pgvector",
];

const cloudSkills = [
  "Docker",
  "Docker Compose",
  "GitHub Actions",
  "CI/CD",
  "GCP",
  "AWS",
  "Railway",
  "Vercel",
  "Cloudflare R2",
];

const apiCapabilities = [
  ["01", "RESTful API Design"],
  ["02", "JWT Authentication"],
  ["03", "Role-Based Access Control"],
  ["04", "Async Processing"],
  ["05", "API Performance Optimization"],
];

function SkillBadge({
  item,
  variant = "blue",
}: {
  item: string;
  variant?: "blue" | "cyan" | "gray" | "orange";
}) {
  const variants = {
    blue:
      "border-[#4a8eff]/25 bg-[#4a8eff]/10 text-[#9ec0ff]",
    cyan:
      "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
    gray:
      "border-[#7b879d]/25 bg-[#7b879d]/10 text-[#b6c0d4]",
    orange:
      "border-[#ffb695]/25 bg-[#ffb695]/10 text-[#ffc4aa]",
  };

  return (
    <span
      className={`${jetbrainsMono.className} rounded-md border px-2.5 py-1.5 text-[9px] tracking-[0.03em] sm:px-3 sm:text-[10px] ${variants[variant]}`}
    >
      {item}
    </span>
  );
}

export default function TechnicalMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-8 xl:px-4">
      {/* Heading */}
      <div className="mb-14 text-center">
        <p
          className={`${jetbrainsMono.className} mb-3 text-[11px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[12px]`}
        >
          Core Engineering Capabilities
        </p>

        <h2
          className={`${montserrat.className} text-[30px] font-[700] tracking-[-0.04em] sm:text-[36px] md:text-[42px] lg:text-[46px]`}
        >
          <span className="text-[#e7ecff]">Technical</span>{" "}
          <span className="bg-gradient-to-r from-[#7dd3fc] to-cyan-300 bg-clip-text text-transparent">
            Matrix
          </span>
        </h2>

        <p
          className={`${inter.className} mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#8390aa] sm:text-[15px]`}
        >
          A practical full-stack toolkit covering frontend development,
          scalable backend systems, AI integration, databases, asynchronous
          workflows, security, and cloud deployment.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid gap-5 sm:gap-6 md:grid-cols-3 md:gap-7">
        {/* Frontend */}
        <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4a8eff]/45 hover:shadow-[0_0_35px_rgba(74,142,255,0.1)] sm:p-6 md:p-8">
          <Monitor
            className="mb-6 text-[#8fb3ff]"
            size={30}
            strokeWidth={1.8}
          />

          <h3
            className={`${montserrat.className} mb-4 text-[20px] font-[600] text-[#edf2ff] sm:text-[22px] md:text-[23px]`}
          >
            Frontend Engineering
          </h3>

          <p
            className={`${inter.className} mb-7 text-[14px] leading-[1.8] text-[#9ca8c4] sm:text-[15px]`}
          >
            Building responsive, maintainable, and user-focused interfaces
            with modern React architecture, reusable components, and
            production-ready TypeScript.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {frontendSkills.map((item) => (
              <SkillBadge
                key={item}
                item={item}
                variant="blue"
              />
            ))}
          </div>
        </article>

        {/* Backend */}
        <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_0_35px_rgba(34,211,238,0.1)] sm:p-6 md:p-8">
          <TerminalSquare
            className="mb-6 text-cyan-300"
            size={30}
            strokeWidth={1.8}
          />

          <h3
            className={`${montserrat.className} mb-4 text-[20px] font-[600] text-[#edf2ff] sm:text-[22px] md:text-[23px]`}
          >
            Backend Architecture
          </h3>

          <p
            className={`${inter.className} mb-7 text-[14px] leading-[1.8] text-[#9ca8c4] sm:text-[15px]`}
          >
            Developing secure and scalable services with Python, Django,
            FastAPI, asynchronous processing, event-driven workflows, and
            clean architecture.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {backendSkills.map((item) => (
              <SkillBadge
                key={item}
                item={item}
                variant="cyan"
              />
            ))}
          </div>
        </article>

        {/* AI */}
        <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#131b2eb3] to-[#1d2947] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7b879d]/45 hover:shadow-[0_0_40px_rgba(148,163,184,0.08)] sm:p-6 md:p-8">
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#4a8eff]/20 blur-[70px]" />

          <div className="relative z-10">
            <BrainCircuit
              className="mb-6 text-[#a8b5cc]"
              size={30}
              strokeWidth={1.8}
            />

            <h3
              className={`${montserrat.className} mb-4 text-[20px] font-[600] text-[#edf2ff] sm:text-[22px] md:text-[23px]`}
            >
              AI & GenAI
            </h3>

            <p
              className={`${inter.className} mb-7 text-[14px] leading-[1.8] text-[#9ca8c4] sm:text-[15px]`}
            >
              Building practical AI features with OpenAI APIs, RAG,
              embeddings, semantic retrieval, vector search, prompt
              engineering, and intelligent document workflows.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {aiSkills.map((item) => (
                <SkillBadge
                  key={item}
                  item={item}
                  variant="gray"
                />
              ))}
            </div>
          </div>
        </article>

        {/* API Design */}
        <article className="rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#4a8eff]/45 hover:shadow-[0_0_35px_rgba(74,142,255,0.08)] sm:p-6 md:col-span-2 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Waypoints
                className="mb-6 text-[#8fb3ff]"
                size={30}
                strokeWidth={1.8}
              />

              <h3
                className={`${montserrat.className} mb-4 text-[20px] font-[600] text-[#edf2ff] sm:text-[22px] md:text-[23px]`}
              >
                API, Security & Async Systems
              </h3>

              <p
                className={`${inter.className} text-[14px] leading-[1.8] text-[#9ca8c4] sm:text-[15px]`}
              >
                Designing production-ready APIs with authentication,
                authorization, clear contracts, error handling, background
                processing, caching, and performance optimization.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {apiCapabilities.map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 rounded-xl border border-[#4a8eff]/10 bg-[#1a2438] px-4 py-3 transition-all duration-300 hover:border-[#4a8eff]/25 hover:bg-[#1d2a42] sm:px-5 sm:py-4"
                >
                  <span
                    className={`${jetbrainsMono.className} text-[14px] font-bold text-[#8fb3ff] sm:text-[15px]`}
                  >
                    {number}
                  </span>

                  <span
                    className={`${inter.className} text-[14px] text-[#dbe5ff] sm:text-[15px]`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Data Systems */}
        <article className="group rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7b879d]/45 hover:shadow-[0_0_35px_rgba(148,163,184,0.07)] sm:p-6 md:p-8">
          <Database
            className="mb-6 text-[#9ca7bb]"
            size={30}
            strokeWidth={1.8}
          />

          <h3
            className={`${montserrat.className} mb-4 text-[20px] font-[600] text-[#edf2ff] sm:text-[22px] md:text-[23px]`}
          >
            Data Systems
          </h3>

          <p
            className={`${inter.className} mb-6 text-[14px] leading-[1.8] text-[#9ca8c4] sm:text-[15px]`}
          >
            Designing schemas, optimizing queries, managing relational data,
            and supporting vector-based retrieval for transactional and
            AI-powered applications.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {dataSkills.map((item) => (
              <SkillBadge
                key={item}
                item={item}
                variant="gray"
              />
            ))}
          </div>
        </article>

        {/* DevOps & Cloud */}
        <article className="group rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb695]/35 hover:shadow-[0_0_35px_rgba(255,182,149,0.06)] sm:p-6 md:col-span-3 md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <CloudCog
                className="mb-6 text-[#ffb695]"
                size={30}
                strokeWidth={1.8}
              />

              <h3
                className={`${montserrat.className} mb-4 text-[20px] font-[600] text-[#edf2ff] sm:text-[22px] md:text-[23px]`}
              >
                DevOps & Cloud
              </h3>

              <p
                className={`${inter.className} text-[14px] leading-[1.8] text-[#9ca8c4] sm:text-[15px]`}
              >
                Containerizing services, automating CI/CD workflows, and
                deploying full-stack applications across cloud and managed
                hosting platforms.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {cloudSkills.map((item) => (
                <SkillBadge
                  key={item}
                  item={item}
                  variant="orange"
                />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
"use client";

import {
  Gauge,
  Layers3,
  LockKeyhole,
  Shield,
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
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const architecturePrinciples = [
  {
    title: "Security",
    description:
      "JWT authentication, role-based access control, protected APIs, validation, and user-specific data isolation.",
    icon: LockKeyhole,
    iconClass: "text-[#8fb3ff]",
    borderClass: "hover:border-[#8fb3ff]/35",
  },
  {
    title: "Performance",
    description:
      "Optimized database queries, indexing, caching, pagination, and asynchronous processing for responsive applications.",
    icon: Gauge,
    iconClass: "text-cyan-300",
    borderClass: "hover:border-cyan-300/35",
  },
  {
    title: "Reliability",
    description:
      "Background jobs, retry workflows, error handling, observability, and clear service boundaries for dependable systems.",
    icon: ShieldCheck,
    iconClass: "text-[#9fc8ff]",
    borderClass: "hover:border-[#9fc8ff]/35",
  },
  {
    title: "Scalability",
    description:
      "Clean architecture, modular services, event-driven workflows, cloud storage, and containerized deployment.",
    icon: Layers3,
    iconClass: "text-[#ffb695]",
    borderClass: "hover:border-[#ffb695]/35",
  },
];

const securityTags = [
  "JWT Authentication",
  "RBAC",
  "API Validation",
  "User Data Isolation",
  "Database Optimization",
  "Celery & Redis",
  "Kafka",
  "Docker",
  "CI/CD",
  "Cloud Deployment",
];

export default function SecurityArchitectureSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-8 xl:px-4">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] shadow-[0_0_45px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20">
        {/* Background glows */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/[0.06] blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#4a8eff]/[0.06] blur-[110px]" />

        <div className="relative z-10 grid gap-10 p-6 sm:p-10 md:p-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:p-16">
          {/* LEFT SIDE */}
          <div>
            <p
              className={`${jetbrainsMono.className} mb-4 text-[11px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[12px]`}
            >
              Engineering Principles
            </p>

            <h2
              className={`${montserrat.className} text-[32px] font-[600] leading-[1.08] tracking-[-0.04em] text-[#edf2ff] sm:text-[40px] md:text-[48px]`}
            >
              Secure by Design,
            </h2>

            <h2
              className={`${montserrat.className} mt-1 bg-gradient-to-r from-[#8fb3ff] to-cyan-300 bg-clip-text text-[32px] font-[600] leading-[1.08] tracking-[-0.04em] text-transparent sm:text-[40px] md:text-[48px]`}
            >
              Built to Scale.
            </h2>

            <p
              className={`${inter.className} mt-6 max-w-3xl text-[14px] leading-[1.85] text-[#aeb9d1] sm:text-[15px] md:text-[16px]`}
            >
              I design applications with security, reliability, performance,
              and maintainability in mind from the beginning. My approach
              combines secure authentication, clear API contracts, optimized
              data access, asynchronous processing, and modular architecture
              to build systems that can grow safely.
            </p>

            {/* Principle cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {architecturePrinciples.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className={`group rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] ${principle.borderClass}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035]">
                        <Icon
                          size={20}
                          strokeWidth={1.9}
                          className={principle.iconClass}
                        />
                      </div>

                      <div>
                        <h3
                          className={`${inter.className} text-[15px] font-bold text-[#e2e8f7] sm:text-[16px]`}
                        >
                          {principle.title}
                        </h3>

                        <p
                          className={`${inter.className} mt-2 text-[12px] leading-[1.75] text-[#8793ab] sm:text-[13px]`}
                        >
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Technology tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {securityTags.map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-[#aab5ce] transition-all duration-300 hover:border-cyan-300/20 hover:text-[#dbe6fb] sm:text-[11px]`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden min-h-[420px] items-center justify-center lg:flex">
            {/* Shield glow */}
            <div className="absolute h-64 w-64 rounded-full bg-cyan-300/[0.05] blur-[90px]" />

            {/* Main shield */}
            <div className="relative flex h-[280px] w-[240px] items-center justify-center rounded-[32px] border border-white/[0.08] bg-white/[0.025] shadow-[0_0_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <Shield
                size={170}
                strokeWidth={1.1}
                className="text-[#30405f]/80"
                aria-hidden="true"
              />

              <div className="absolute flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] shadow-[0_0_30px_rgba(99,247,255,0.08)]">
                <ShieldCheck
                  size={38}
                  strokeWidth={1.8}
                  className="text-cyan-300"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute bottom-10 right-0 rounded-xl border border-white/[0.08] bg-[#0f182a]/90 px-4 py-3 shadow-[0_0_25px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <p
                className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.12em] text-[#7f8ba3]`}
              >
                Architecture Focus
              </p>

              <p
                className={`${inter.className} mt-1.5 text-[13px] font-semibold text-[#dbe5f8]`}
              >
                Secure • Reliable • Scalable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
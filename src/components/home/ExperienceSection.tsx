"use client";

import {
  Award,
  Check,
  Code2,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

/* SSR + client safe */
const STAR_POINTS = Array.from({ length: 24 })
  .map((_, index) => {
    const angle = (index * 2 * Math.PI) / 24;
    const isOuterPoint = index % 2 === 0;
    const radius = isOuterPoint ? 50 : 38;

    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);

    return `${x.toFixed(2)},${y.toFixed(2)}`;
  })
  .join(" ");

const contributions = [
  <>
    Designed and developed scalable full-stack applications using{" "}
    <strong className="font-semibold text-[#dce5fb]">
      Django REST Framework, FastAPI, Next.js,
    </strong>{" "}
    and{" "}
    <strong className="font-semibold text-[#dce5fb]">TypeScript</strong>{" "}
    for enterprise fintech platforms.
  </>,
  <>
    Contributed to{" "}
    <strong className="font-semibold text-[#dce5fb]">
      40+ production-grade RESTful and asynchronous APIs
    </strong>{" "}
    supporting authentication, onboarding, lending, repayments, KYC
    verification, and transaction processing.
  </>,
  <>
    Optimized PostgreSQL queries, indexing strategies, and database schemas
    to improve API performance and response times.
  </>,
  <>
    Built asynchronous processing pipelines using{" "}
    <strong className="font-semibold text-[#dce5fb]">Celery, Redis,</strong>{" "}
    and{" "}
    <strong className="font-semibold text-[#dce5fb]">WebSockets</strong>{" "}
    for real-time updates and background task execution.
  </>,
  <>
    Implemented{" "}
    <strong className="font-semibold text-[#dce5fb]">
      Kafka-based event-driven architecture
    </strong>{" "}
    to support scalable and decoupled backend services.
  </>,
  <>
    Applied clean architecture and microservices principles to improve code
    maintainability and service scalability.
  </>,
  <>
    Developed secure authentication systems using{" "}
    <strong className="font-semibold text-[#dce5fb]">JWT</strong> and{" "}
    <strong className="font-semibold text-[#dce5fb]">
      Role-Based Access Control (RBAC)
    </strong>
    .
  </>,
  <>
    Containerized applications using{" "}
    <strong className="font-semibold text-[#dce5fb]">
      Docker and Docker Compose
    </strong>
    , supporting{" "}
    <strong className="font-semibold text-[#dce5fb]">
      CI/CD pipelines with GitHub Actions
    </strong>{" "}
    and deployments on{" "}
    <strong className="font-semibold text-[#dce5fb]">
      Google Cloud Platform (GCP)
    </strong>
    .
  </>,
  <>
    Integrated third-party APIs to automate workflows and enhance platform
    capabilities.
  </>,
  <>
    Collaborated with cross-functional teams following Agile/Scrum
    methodologies to deliver production-ready software.
  </>,
];

const credentials = [
  {
    title: "Python Full Stack Engineer",
    subtitle: "Django, FastAPI, Next.js",
    icon: Code2,
  },
  {
    title: "40+ Production APIs",
    subtitle: "RESTful & asynchronous systems",
    icon: Award,
  },
  {
    title: "Fintech Engineering",
    subtitle: "Core banking & lending systems",
    icon: Landmark,
  },
  {
    title: "B.Tech in ECE",
    subtitle: "Assam University · 2021",
    icon: GraduationCap,
  },
];

function VerifiedBadge() {
  return (
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center text-[#08111f]">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <polygon fill="#67e8f9" points={STAR_POINTS} />
      </svg>

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)]"
        aria-hidden="true"
      >
        <polygon
          fill="rgba(103,232,249,0.25)"
          points={STAR_POINTS}
        />
      </svg>

      <Check
        size={18}
        strokeWidth={3}
        className="relative z-10"
        aria-hidden="true"
      />
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 lg:grid-cols-5 lg:gap-16 lg:px-6 xl:px-4"
    >
      {/* LEFT SIDE */}
      <div className="lg:col-span-3">
        <div className="mb-10">
          <p
            className={`${jetbrainsMono.className} mb-3 text-[11px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[12px]`}
          >
            Work Experience
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#dae2fd] sm:text-4xl">
            Professional Journey
          </h2>

          <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#8793ad] sm:text-[15px]">
            Building secure, scalable, and production-ready fintech
            applications across frontend, backend, asynchronous processing,
            and cloud deployment.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-8 sm:pl-10">
          {/* Active dot */}
          <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] sm:-left-[9px] sm:h-4 sm:w-4" />

          {/* Timeline */}
          <div className="absolute bottom-0 left-[-1px] top-5 w-[2px] bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent sm:left-[-2px] sm:top-6" />

          <article className="rounded-2xl border border-white/[0.08] bg-[#111a2d]/35 p-5 shadow-[0_0_35px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#dae2fd] sm:text-[25px]">
                  Software Engineer, Python Full Stack
                </h3>

                <p className="mt-2 text-[14px] font-medium text-[#adc7ff] sm:text-[15px]">
                  Gowdanar Technosoft Pvt Ltd
                </p>

                <p className="mt-1 text-[13px] text-[#7f8ba3]">
                  Bangalore, India
                </p>
              </div>

              <span
                className={`${jetbrainsMono.className} w-fit whitespace-nowrap rounded-md border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-cyan-300 sm:text-[12px]`}
              >
                Dec 2023 – Present
              </span>
            </div>

            <div className="mt-7 border-t border-white/[0.07] pt-6">
              <h4 className="text-[15px] font-semibold text-[#d6def2]">
                Key Contributions
              </h4>

              <ul className="mt-5 space-y-4">
                {contributions.map((contribution, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[13px] leading-[1.8] text-[#aeb9d1] sm:text-[14px]"
                  >
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />

                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <aside className="lg:col-span-2">
        <div className="mb-10">
          <p
            className={`${jetbrainsMono.className} mb-3 text-[11px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[12px]`}
          >
            Profile Summary
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#dae2fd] sm:text-4xl">
            Credentials
          </h2>
        </div>

        <div className="space-y-4">
          {credentials.map((credential) => {
            const Icon = credential.icon;

            return (
              <div
                key={credential.title}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1b2a]/40 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-[#102238]/55 sm:p-5"
              >
                <VerifiedBadge />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Icon
                      size={15}
                      className="shrink-0 text-cyan-300/80"
                      aria-hidden="true"
                    />

                    <p className="truncate text-[14px] font-bold text-[#dae2fd] sm:text-[15px]">
                      {credential.title}
                    </p>
                  </div>

                  <p className="mt-1.5 text-[12px] font-medium leading-5 text-[#8b96ab] sm:text-[13px]">
                    {credential.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Focus Areas */}
        <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#10192b]/35 p-5 backdrop-blur-xl">
          <p
            className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.12em] text-[#7f8ba3]`}
          >
            Engineering Focus
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Full Stack",
              "REST APIs",
              "Fintech",
              "Microservices",
              "Event-Driven Systems",
              "AI Applications",
              "Cloud Deployment",
            ].map((item) => (
              <span
                key={item}
                className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] text-[#aab5ce] sm:text-[11px]`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
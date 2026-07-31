"use client";

import {
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import {
  Inter,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const experiences = [
  {
    role: "Software Engineer, Python Full Stack",
    company: "Gowdanar Technosoft Pvt Ltd",
    location: "Bangalore, India",
    year: "Aug 2023 – Present",
    glow: "bg-cyan-300",
    points: [
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
        <strong className="font-semibold text-[#dce5fb]">
          Celery, Redis,
        </strong>{" "}
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
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-4">
      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
        <p
          className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.14em] text-cyan-300 sm:text-[11px]`}
        >
          Career Timeline
        </p>

        <h2
          className={`${montserrat.className} mt-3 text-[28px] font-[700] tracking-[-0.04em] text-[#dae2fd] sm:text-[34px] md:text-[38px]`}
        >
          Professional Experience
        </h2>

        <p
          className={`${inter.className} mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#8490a8] sm:text-[15px]`}
        >
          Building enterprise fintech applications, production APIs,
          asynchronous services, secure workflows, and scalable cloud-based
          systems.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-cyan-300/60 via-cyan-300/30 to-transparent sm:left-[8px]" />

        {experiences.map((item) => (
          <div
            key={`${item.company}-${item.year}`}
            className="relative pl-8 sm:pl-10"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-0 top-9 z-20 h-3.5 w-3.5 rounded-full ${item.glow} shadow-[0_0_20px_rgba(34,211,238,0.7)] sm:top-10 sm:h-4 sm:w-4`}
            />

            {/* Experience Card */}
            <article className="group rounded-[22px] border border-white/10 bg-[#131b2eb3] p-5 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#17233b]/90 hover:shadow-[0_0_35px_rgba(99,247,255,0.07)] sm:rounded-[24px] sm:p-7 lg:p-8">
              {/* Header */}
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.04] text-cyan-300">
                    <BriefcaseBusiness
                      size={21}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3
                      className={`${montserrat.className} text-[20px] font-[700] tracking-[-0.03em] text-[#dae2fd] sm:text-[22px] lg:text-[24px]`}
                    >
                      {item.role}
                    </h3>

                    <p
                      className={`${inter.className} mt-1.5 text-[14px] font-medium text-cyan-300 sm:text-[15px]`}
                    >
                      {item.company}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-[#77839a]">
                      <MapPin
                        size={14}
                        className="shrink-0"
                        aria-hidden="true"
                      />

                      <span
                        className={`${inter.className} text-[12px] sm:text-[13px]`}
                      >
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`${jetbrainsMono.className} w-fit rounded-full border border-cyan-300/15 bg-cyan-300/[0.045] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan-300 sm:px-4 sm:py-2 sm:text-[11px]`}
                >
                  {item.year}
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/[0.07]" />

              {/* Key Contributions */}
              <div>
                <h4
                  className={`${montserrat.className} text-[15px] font-[600] text-[#dce5f8] sm:text-[16px]`}
                >
                  Key Contributions
                </h4>

                <div className="mt-5 space-y-4">
                  {item.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-3.5"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={2.2}
                        className="mt-[4px] shrink-0 text-cyan-300"
                        aria-hidden="true"
                      />

                      <p
                        className={`${inter.className} text-[13px] leading-[1.8] text-[#9ba7c2] sm:text-[14px]`}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Summary */}
              <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                <p
                  className={`${jetbrainsMono.className} text-[10px] uppercase tracking-[0.12em] text-[#77839a]`}
                >
                  Core Technologies
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Django",
                    "DRF",
                    "FastAPI",
                    "Next.js",
                    "TypeScript",
                    "PostgreSQL",
                    "Celery",
                    "Redis",
                    "Kafka",
                    "Docker",
                    "GitHub Actions",
                    "GCP",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className={`${jetbrainsMono.className} rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] leading-none text-[#aeb9d0] sm:text-[11px]`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import {
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

import {
  Montserrat,
  Inter,
  JetBrains_Mono,
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
    role: "Software Engineer",
    company: "Enterprise Technology Solutions",
    year: "2023 – Present",
    side: "left",
    glow: "bg-cyan-300",
    points: [
      "Built scalable React and Next.js applications with reusable enterprise-grade UI systems.",
      "Developed secure Django REST APIs with JWT authentication and role-based access control.",
      "Integrated AI-powered workflows and automation pipelines into internal business systems.",
    ],
  },

  {
    role: "Full Stack Developer",
    company: "Cloud Native Systems",
    year: "2022 – 2023",
    side: "right",
    glow: "bg-[#adc7ff]",
    points: [
      "Optimized backend performance and reduced API response latency across distributed services.",
      "Worked on PostgreSQL schema optimization, caching layers, and scalable deployment flows.",
      "Collaborated with frontend teams to build analytics dashboards and data visualization systems.",
    ],
  },

  {
    role: "Frontend Developer",
    company: "Digital Product Studio",
    year: "2021 – 2022",
    side: "left",
    glow: "bg-[#5f6b85]",
    points: [
      "Designed responsive UI interfaces using React, TailwindCSS, and component-driven architecture.",
      "Implemented accessible and animation-rich user experiences for modern web platforms.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-4">

      {/* TIMELINE */}
      <div className="relative">

        {/* CENTER LINE */}
        <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-[#adc7ff]/60 via-cyan-300/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

        {/* ITEMS */}
        <div className="space-y-14 sm:space-y-16 lg:space-y-20">

          {experiences.map((item, index) => (
            <div
              key={index}
              className={`relative flex w-full ${
                item.side === "right"
                  ? "md:justify-end"
                  : "md:justify-start"
              }`}
            >

              {/* DOT */}
              <div
                className={`absolute left-0 top-8 sm:top-10 z-20 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full ${item.glow} shadow-[0_0_20px_rgba(34,211,238,0.7)] md:left-1/2 md:-translate-x-1/2`}
              />

              {/* CARD */}
              <div className="w-full pl-8 sm:pl-10 md:w-[46%] md:pl-0">

                <div className="group rounded-[22px] sm:rounded-[24px] border border-white/10 bg-[#131b2eb3] p-5 sm:p-7 lg:p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#17233b]/90 hover:shadow-[0_0_35px_rgba(99,247,255,0.08)]">

                  {/* TOP */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.04] text-cyan-300">
                          <BriefcaseBusiness
                            size={20}
                            strokeWidth={2.2}
                          />
                        </div>

                        <div>

                          <h3
                            className={`${montserrat.className} text-[20px] sm:text-[22px] lg:text-[24px] font-[700] tracking-[-0.03em] text-[#dae2fd]`}
                          >
                            {item.role}
                          </h3>

                          <p
                            className={`${inter.className} mt-1 text-[13px] sm:text-[14px] lg:text-[15px] font-medium text-cyan-300`}
                          >
                            {item.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* YEAR */}
                    <div
                      className={`${jetbrainsMono.className} w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#7f8ba3]`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* POINTS */}
                  <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">

                    {item.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-start gap-4"
                      >

                        <CheckCircle2
                          size={18}
                          strokeWidth={2.3}
                          className="mt-[2px] shrink-0 text-cyan-300"
                        />

                        <p
                          className={`${inter.className} text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.85] text-[#9ba7c2]`}
                        >
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  Monitor,
  TerminalSquare,
  BrainCircuit,
  Database,
  Waypoints,
} from "lucide-react";

import {
  JetBrains_Mono,
  Montserrat,
  Inter,
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

export default function TechnicalMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-8 xl:px-4 py-20 md:py-24">

      {/* HEADING */}
      <div className="mb-14 text-center">

        <h2 className={`${montserrat.className} text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-[700] tracking-[-0.04em]`}>
          <span className="text-[#e7ecff]">
            Technical
          </span>{" "}

          <span className="bg-gradient-to-r from-[#7dd3fc] to-cyan-300 bg-clip-text text-transparent">
            Matrix
          </span>
        </h2>

      </div>

      {/* MAIN GRID */}
      <div className="grid gap-5 sm:gap-6 md:gap-7 md:grid-cols-3">

        {/* FRONTEND */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#4a8eff]/50 hover:shadow-[0_0_35px_rgba(74,142,255,0.12)]">

          <Monitor className="mb-6 text-[#8fb3ff]" size={32} strokeWidth={1.8} />

          <h3 className={`${montserrat.className} mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-[500] text-[#edf2ff]`}>
            Frontend Excellence
          </h3>

          <p className={`${inter.className} mb-7 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#9ca8c4]`}>
            Building fast, responsive, and beautiful user interfaces using modern React ecosystem with focus on performance and great user experience.
          </p>

          <div className="flex flex-wrap gap-3">

            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
            ].map((item) => (
              <span
                key={item}
                className={`${jetbrainsMono.className} rounded-full border border-[#4a8eff]/25 bg-[#4a8eff]/10 px-2.5 sm:px-3 py-1.5 text-[9px] sm:text-[10px] tracking-[0.03em] text-[#9ec0ff]`}
              >
                {item}
              </span>
            ))}

          </div>
        </div>

        {/* BACKEND */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]">

          <TerminalSquare className="mb-6 text-cyan-300" size={32} strokeWidth={1.8} />

          <h3 className={`${montserrat.className} mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-[500] text-[#edf2ff]`}>
            Backend Architecture
          </h3>

          <p className={`${inter.className} mb-7 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#9ca8c4]`}>
            Developing robust and scalable server-side applications with Python. Strong focus on clean architecture, security, and performance.
          </p>

          <div className="flex flex-wrap gap-3">

            {[
              "Django",
              "FastAPI",
              "RESTful APIs",
              "PostgreSQL",
            ].map((item) => (
              <span
                key={item}
                className={`${jetbrainsMono.className} rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 sm:px-3 py-1.5 text-[9px] sm:text-[10px] tracking-[0.03em] text-cyan-300`}
              >
                {item}
              </span>
            ))}

          </div>
        </div>

        {/* AI */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#131b2eb3] to-[#1d2947] p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#7b879d]/50 hover:shadow-[0_0_40px_rgba(148,163,184,0.10)]">

          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#4a8eff]/20 blur-[70px]" />

          <BrainCircuit className="relative z-10 mb-6 text-[#9aa4b8]" size={32} strokeWidth={1.8} />

          <div className="relative z-10">

            <h3 className={`${montserrat.className} mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-[500] text-[#edf2ff]`}>
              AI & Intelligence
            </h3>

            <p className={`${inter.className} mb-7 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#9ca8c4]`}>
              Building intelligent applications using Large Language Models, Retrieval-Augmented Generation, and AI agents.
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "OpenAI",
                "LangChain",
                "RAG",
                "Vector DB",
              ].map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-full border border-[#7b879d]/25 bg-[#7b879d]/10 px-2.5 sm:px-3 py-1.5 text-[9px] sm:text-[10px] tracking-[0.03em] text-[#b6c0d4]`}
                >
                  {item}
                </span>
              ))}

            </div>
          </div>
        </div>

        {/* API DESIGN */}
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#4a8eff]/50 hover:shadow-[0_0_35px_rgba(74,142,255,0.10)]">

          <div className="grid gap-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-8 md:grid-cols-2">

            {/* LEFT */}
            <div>

              <Waypoints className="mb-6 text-[#8fb3ff]" size={32} strokeWidth={1.8} />

              <h3 className={`${montserrat.className} mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-[500] text-[#edf2ff]`}>
                API & Security
              </h3>

              <p className={`${inter.className} text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#9ca8c4]`}>
                Designing secure, well-documented, and high-performance REST APIs with proper authentication and authorization systems.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-center gap-3">

              {[
                ["01", "JWT Authentication"],
                ["02", "Role Based Access"],
                ["03", "API Optimization"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 rounded-xl border border-[#4a8eff]/10 bg-[#1a2438] px-4 sm:px-5 py-3 sm:py-4"
                >

                  <span className={`${jetbrainsMono.className} font-bold text-[14px] sm:text-[15px] md:text-[16px] text-[#8fb3ff]`}>
                    {number}
                  </span>

                  <span className={`${inter.className} text-[14px] sm:text-[15px] md:text-[16px] text-[#dbe5ff]`}>
                    {label}
                  </span>

                </div>
              ))}

            </div>

          </div>
        </div>

        {/* DATA SYSTEMS */}
        <div className="rounded-2xl border border-white/10 bg-[#131b2eb3] p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-5 sm:p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#7b879d]/50 hover:shadow-[0_0_35px_rgba(148,163,184,0.08)]">

          <Database className="mb-6 text-[#8d96ab]" size={32} strokeWidth={1.8} />

          <h3 className={`${montserrat.className} mb-4 text-[20px] sm:text-[22px] md:text-[24px] font-[500] text-[#edf2ff]`}>
            Data Systems
          </h3>

          <p className={`${inter.className} mb-6 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#9ca8c4]`}>
            Working with relational databases to ensure data integrity, performance, and scalability.
          </p>

          <p className={`${jetbrainsMono.className} font-semibold text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.03em] text-[#7f889d]`}>
            PostgreSQL • MySQL • CockroachDB
          </p>

        </div>

      </div>
    </section>
  );
}
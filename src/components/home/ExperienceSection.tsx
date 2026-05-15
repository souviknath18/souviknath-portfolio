"use client";

import { Check } from "lucide-react";

/* SSR + Client safe (no hydration mismatch) */
const STAR_POINTS = Array.from({ length: 24 })
  .map((_, i) => {
    const angle = (i * 2 * Math.PI) / 24;
    const isOuter = i % 2 === 0;
    const r = isOuter ? 50 : 38;

    const x = 50 + r * Math.cos(angle);
    const y = 50 + r * Math.sin(angle);

    return `${x.toFixed(2)},${y.toFixed(2)}`;
  })
  .join(" ");

export default function ExperienceSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:px-10 lg:grid-cols-5 lg:px-6 xl:px-4">
      
      {/* LEFT SIDE */}
      <div className="lg:col-span-3">
        
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[#dae2fd] sm:text-4xl">
          Professional Journey
        </h2>

        <div className="space-y-12 md:space-y-14">

          {/* EXPERIENCE 1 */}
          <div className="relative pl-8 sm:pl-10">

            <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] sm:-left-[9px] sm:h-4 sm:w-4" />

            <div className="absolute left-[-1px] top-5 bottom-0 w-[2px] bg-cyan-400/40 sm:left-[-2px] sm:top-6" />

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              
              <h3 className="text-[24px] font-semibold text-[#dae2fd] sm:text-2xl">
                Full Stack Engineer
              </h3>

              <span className="text-[14px] font-semibold tracking-[0.06em] text-cyan-300 sm:text-[16px]">
                2024 - PRESENT
              </span>
            </div>

            <p className="mt-2 text-[15px] font-medium text-[#adc7ff] sm:text-[16px]">
              Gowdanar Technologies Pvt. Ltd.
            </p>

            <ul className="mt-5 ml-5 list-disc space-y-3 text-[15px] leading-[1.8] text-[#b7c3de] sm:text-[16px]">
              
              <li>
                Built and optimized RESTful APIs using Django REST Framework,
                improving backend workflow efficiency and reducing average API
                response time by ~25% across compliance modules.
              </li>

              <li>
                Implemented JWT authentication and RBAC systems for three user
                roles, handling 75,000+ authentication requests daily with zero
                downtime.
              </li>

              <li>
                Integrated React/Next.js frontend systems with PostgreSQL and
                MySQL databases, improving data retrieval performance by ~30%.
              </li>
            </ul>
          </div>

          {/* EXPERIENCE 2 */}
          <div className="relative pl-8 sm:pl-10">

            <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-[#2a3449] sm:-left-[9px] sm:h-4 sm:w-4" />

            <div className="absolute left-[-1px] top-5 bottom-0 w-[2px] bg-[#2a3449]/60 sm:left-[-2px] sm:top-6" />

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              
              <h3 className="text-[24px] font-semibold text-[#dae2fd] sm:text-2xl">
                Software Engineer Intern
              </h3>

              <span className="text-[14px] font-semibold tracking-[0.06em] text-[#8b90a0] sm:text-[16px]">
                2022 - 2024
              </span>
            </div>

            <p className="mt-2 text-[15px] text-[#adc7ff] sm:text-[16px]">
              Gowdanar Technologies Pvt. Ltd.
            </p>

            <ul className="mt-5 ml-5 list-disc space-y-3 text-[15px] leading-[1.8] text-[#b7c3de] sm:text-[16px]">
              
              <li>
                Developed and enhanced reusable React components for enterprise
                dashboards, improving UI consistency and reducing development
                time for new features by ~20%.
              </li>

              <li>
                Integrated and debugged RESTful APIs with Django REST Framework,
                ensuring stable data flow between frontend and backend systems
                across multiple modules.
              </li>

              <li>
                Optimized frontend performance by reducing unnecessary
                re-renders and improving API handling, resulting in smoother
                user interactions and faster page responsiveness.
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-2">

        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[#dae2fd] sm:text-4xl">
          Credentials
        </h2>

        <div className="space-y-4">

          {/* CARD 1 */}
          <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1b2a]/40 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 sm:p-5">
            
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center text-[#08111f]">

              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
              >
                <polygon fill="#67e8f9" points={STAR_POINTS} />
              </svg>

              <svg
                viewBox="0 0 100 100"
                className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)]"
              >
                <polygon
                  fill="rgba(103, 232, 249, 0.25)"
                  points={STAR_POINTS}
                />
              </svg>

              <Check
                size={18}
                strokeWidth={3}
                className="relative z-10"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[15px] font-bold text-[#dae2fd] sm:text-[16px]">
                Full Stack Engineer
              </p>

              <p className="text-sm font-semibold text-[#8b90a0]">
                GTPL
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1b2a]/40 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 sm:p-5">
            
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center text-[#08111f]">

              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
              >
                <polygon fill="#67e8f9" points={STAR_POINTS} />
              </svg>

              <svg
                viewBox="0 0 100 100"
                className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)]"
              >
                <polygon
                  fill="rgba(103, 232, 249, 0.25)"
                  points={STAR_POINTS}
                />
              </svg>

              <Check
                size={18}
                strokeWidth={3}
                className="relative z-10"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[15px] font-bold text-[#dae2fd] sm:text-[16px]">
                AI Developer
              </p>

              <p className="text-sm font-semibold text-[#8b90a0]">
                GTPL
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1b2a]/40 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 sm:p-5">
            
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center text-[#08111f]">

              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
              >
                <polygon fill="#67e8f9" points={STAR_POINTS} />
              </svg>

              <svg
                viewBox="0 0 100 100"
                className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)]"
              >
                <polygon
                  fill="rgba(103, 232, 249, 0.25)"
                  points={STAR_POINTS}
                />
              </svg>

              <Check
                size={18}
                strokeWidth={3}
                className="relative z-10"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[15px] font-bold text-[#dae2fd] sm:text-[16px]">
                Software Engineer Intern
              </p>

              <p className="text-sm font-semibold text-[#8b90a0]">
                GTPL
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
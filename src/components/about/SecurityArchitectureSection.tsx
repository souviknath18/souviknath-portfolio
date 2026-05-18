"use client";

import { ShieldCheck, Gauge, Shield } from "lucide-react";

import {
  Montserrat,
  Inter,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function SecurityArchitectureSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-8 xl:px-4 py-20 md:py-24">

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20">

        {/* CONTENT */}
        <div className="relative z-10 grid gap-10 sm:gap-12 lg:gap-16 p-6 sm:p-10 md:p-12 lg:p-16 lg:grid-cols-[1.4fr_0.6fr]">

          {/* LEFT SIDE */}
          <div>

            <h2 className={`${montserrat.className} text-[40px] leading-[1.1] tracking-[-0.04em] text-[#edf2ff] md:text-[52px]`}>
              Security-First,
            </h2>

            <h2 className={`${montserrat.className} mt-1 bg-gradient-to-r from-[#8fb3ff] to-cyan-300 bg-clip-text text-[40px] leading-[1.1] tracking-[-0.04em] text-transparent md:text-[52px]`}>
              Scalable-Always.
            </h2>

            {/* DESCRIPTION */}
            <p
              className={`${inter.className} mt-6 sm:mt-8 max-w-3xl text-[15px] sm:text-[16px] md:text-[17px] leading-[1.9] text-[#b7c3de]`}
            >
              I approach every project with security, scalability,
              and maintainability in mind from the beginning.
              From authentication and authorization to clean API
              design and database structure, I focus on building
              systems that are reliable, secure, and ready to grow.
            </p>

            <div className="mt-10 sm:mt-12 lg:mt-14 grid gap-8 md:grid-cols-2">

              {/* INTEGRITY */}
              <div className="space-y-4">

                <div className="flex items-start gap-4">

                  <ShieldCheck className="-mt-[6px] text-[#8fb3ff]" size={40} strokeWidth={2} />

                  <div>

                    <h4 className={`${inter.className} text-[16px] sm:text-[17px] md:text-[18px] font-[700] text-[#8fb3ff]`}>
                      Integrity
                    </h4>

                    <p className={`${inter.className} mt-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#8b96b3]`}>
                      Consistent data handling, clear validation,
                      and reliable state management across
                      frontend and backend workflows.
                    </p>

                  </div>
                </div>
              </div>

              {/* PERFORMANCE */}
              <div className="space-y-4">

                <div className="flex items-start gap-4">

                  <Gauge className="-mt-[6px] text-cyan-300" size={40} strokeWidth={2} />

                  <div>

                    <h4 className={`${inter.className} text-[16px] sm:text-[17px] md:text-[18px] font-[700] text-cyan-300`}>
                      Performance
                    </h4>

                    <p className={`${inter.className} mt-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#8b96b3]`}>
                      Optimizing API responses, frontend rendering,
                      and database queries to deliver faster and
                      smoother user experiences.
                    </p>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE ICON */}
          <div className="relative hidden lg:block">
            <div className="absolute right-0 top-0">
              <Shield
                className="text-[#2f3d5d]/70"
                size={220}
                strokeWidth={1.2}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import {
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const stats = [
  {
    number: "2+",
    label: "Years of Experience",
    color: "text-[#adc7ff]",
  },
  {
    number: "2",
    label: "AI Products Built",
    color: "text-cyan-300",
  },
  {
    number: "8+",
    label: "Projects Completed",
    color: "text-[#adc7ff]",
  },
  {
    number: "10+",
    label: "Technologies Mastered",
    color: "text-cyan-300",
  },
];

export default function AboutStats() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-8 xl:px-4 py-20 md:py-24">

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#131b2eb3] px-6 sm:px-8 py-8 sm:py-10 text-center shadow-[0_0_35px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >

            {/* NUMBER */}
            <p
              className={`${montserrat.className} ${stat.color} text-[40px] sm:text-[46px] md:text-[52px] font-[600] leading-none tracking-[-0.05em] transition-transform duration-300 group-hover:scale-[1.06]`}
            >
              {stat.number}
            </p>

            {/* LABEL */}
            <p
              className={`${jetbrainsMono.className} mt-3 sm:mt-4 font-bold text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#66728d]`}
            >
              {stat.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
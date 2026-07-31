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
    number: "3+",
    label: "Years Experience",
    color: "text-[#adc7ff]",
  },
  {
    number: "40+",
    label: "Production REST APIs",
    color: "text-cyan-300",
  },
  {
    number: "Enterprise",
    label: "Fintech Systems",
    color: "text-[#adc7ff]",
  },
  {
    number: "AI + SaaS",
    label: "Products Built",
    color: "text-cyan-300",
  },
];

export default function AboutStats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-8 xl:px-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-2xl border border-white/10 bg-[#131b2eb3] px-6 py-8 text-center shadow-[0_0_35px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)] sm:px-8 sm:py-10"
          >
            {/* Number */}
            <p
              className={`${montserrat.className} ${stat.color} text-[34px] font-semibold leading-none tracking-[-0.04em] transition-transform duration-300 group-hover:scale-[1.05] sm:text-[40px] md:text-[44px]`}
            >
              {stat.number}
            </p>

            {/* Label */}
            <p
              className={`${jetbrainsMono.className} mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6f7b91] sm:text-[12px]`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
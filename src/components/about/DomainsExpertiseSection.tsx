"use client";

import {
  Monitor,
  LayoutDashboard,
  Bot,
  Zap,
  Waypoints,
} from "lucide-react";

import {
  Montserrat,
  JetBrains_Mono,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

const domains = [
  {
    icon: Monitor,
    label: "Web Apps",
  },
  {
    icon: LayoutDashboard,
    label: "Dashboards",
  },
  {
    icon: Bot,
    label: "Automation",
  },
  {
    icon: Zap,
    label: "AI Tools",
  },
  {
    icon: Waypoints,
    label: "API Dev",
  },
];

export default function DomainsExpertiseSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-8 xl:px-4 py-20 md:py-24">

      {/* HEADING */}
      <div className="text-center">

        <h2 className={`${montserrat.className} text-[30px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.05] tracking-[-0.04em]`}>
          <span className="text-[#edf2ff]">
            Domains of{" "}
          </span>

          <span className="text-[#6f7d99]">
            Expertise
          </span>
        </h2>

      </div>

      {/* DOMAIN BOXES */}
      <div className="mt-12 sm:mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">

        {domains.map((domain, index) => {
          const Icon = domain.icon;

          return (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 sm:gap-4 md:gap-5"
            >

              {/* ICON BOX */}
              <div className="flex h-[82px] w-[82px] sm:h-[96px] sm:w-[96px] md:h-[110px] md:w-[110px] items-center justify-center rounded-[24px] border border-white/10 bg-[#131b2eb3] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#7dd3fc] hover:shadow-[0_0_40px_rgba(125,211,252,0.18)]">

                <Icon
                  size={34}
                  strokeWidth={2.4}
                  className="text-[#edf2ff] transition-all duration-300 group-hover:text-[#0b1220]"
                />

              </div>

              {/* LABEL */}
              <p className={`${jetbrainsMono.className} text-center text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#6f7d99] transition-colors duration-300 group-hover:text-[#edf2ff]`}>
                {domain.label}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}
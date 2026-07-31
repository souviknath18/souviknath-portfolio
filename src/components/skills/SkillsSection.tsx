"use client";

import { useState } from "react";
import {
  Inter,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

import AllSkillsTab from "./tabs/AllSkillsTab";
import FrontendSkillsTab from "./tabs/FrontendSkillsTab";
import BackendSkillsTab from "./tabs/BackendSkillsTab";
import AISkillsTab from "./tabs/AISkillsTab";
import CloudSkillsTab from "./tabs/CloudSkillsTab";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const tabs = [
  "All",
  "Frontend",
  "Backend",
  "AI & Generative AI",
  "Cloud & DevOps",
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-4">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2
          className={`${montserrat.className} text-[28px] font-semibold tracking-[-0.03em] text-[#e4ebfb] sm:text-[34px]`}
        >
          Explore My Skills
        </h2>

        <p
          className={`${inter.className} mx-auto mt-3 max-w-2xl text-[14px] leading-7 text-[#8591a9] sm:text-[15px]`}
        >
          From frontend development and backend architecture to AI,
          cloud infrastructure, and DevOps, here's the technology stack
          I use to build scalable production applications.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${jetbrainsMono.className}
              rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em]
              transition-all duration-300 sm:px-6 sm:text-[12px]
              ${
                activeTab === tab
                  ? "border-cyan-300/40 bg-cyan-300/[0.06] text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                  : "border-white/10 bg-white/[0.02] text-[#7f8ba3] hover:border-cyan-300/20 hover:bg-white/[0.04] hover:text-[#dbe6fb]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "All" && <AllSkillsTab />}

      {activeTab === "Frontend" && <FrontendSkillsTab />}

      {activeTab === "Backend" && <BackendSkillsTab />}

      {activeTab === "AI & Generative AI" && <AISkillsTab />}

      {activeTab === "Cloud & DevOps" && <CloudSkillsTab />}
    </section>
  );
}
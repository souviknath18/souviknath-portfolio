"use client";

import { useState } from "react";

import AllSkillsTab from "./tabs/AllSkillsTab";
import FrontendSkillsTab from "./tabs/FrontendSkillsTab";
import BackendSkillsTab from "./tabs/BackendSkillsTab";
import AISkillsTab from "./tabs/AISkillsTab"
import CloudSkillsTab from "./tabs/CloudSkillsTab";

const tabs = [
  "All",
  "Frontend",
  "Backend",
  "AI & ML",
  "Cloud & DevOps",
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-4">

      {/* TABS */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:mb-12 lg:mb-14">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 font-mono text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-300 ${
              activeTab === tab
                ? "border-cyan-300/50 bg-cyan-300/[0.05] text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.22)]"
                : "border-white/10 bg-white/[0.02] text-[#8b90a0] hover:border-cyan-300/25 hover:text-cyan-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {activeTab === "All" && <AllSkillsTab />}
      {activeTab === "Frontend" && <FrontendSkillsTab />}
      {activeTab === "Backend" && <BackendSkillsTab />}
      {activeTab === "AI & ML" && <AISkillsTab />}
      {activeTab === "Cloud & DevOps" && <CloudSkillsTab />}
    </section>
  );
}
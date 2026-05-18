"use client";

import {
  Server,
  Database,
  ShieldCheck,
  KeyRound,
  Waypoints,
  Gauge,
  CheckCircle2,
} from "lucide-react";

import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

const backendSkills = [
  {
    icon: <Server size={24} />,
    title: "Django & DRF",
    level: "ADVANCED",
    description:
      "Building scalable backend systems, REST APIs, serializers, views, authentication flows, and production-style API structures.",
    tech: ["Django", "DRF", "Serializers", "Views"],
  },
  {
    icon: <Waypoints size={24} />,
    title: "RESTful API Design",
    level: "ADVANCED",
    description:
      "Designing clean API endpoints with proper request handling, response structures, filtering, pagination, and error handling.",
    tech: ["REST APIs", "Pagination", "Filtering", "Validation"],
  },
  {
    icon: <KeyRound size={24} />,
    title: "Authentication",
    level: "ADVANCED",
    description:
      "Implementing secure login systems using JWT authentication, protected routes, token handling, and user-based access control.",
    tech: ["JWT", "Auth Flow", "Protected APIs", "Sessions"],
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "API Security",
    level: "PROFICIENT",
    description:
      "Applying secure backend practices including validation, permission checks, role-based access, and safe API communication.",
    tech: ["RBAC", "Permissions", "Validation", "Security"],
  },
  {
    icon: <Database size={24} />,
    title: "Database Design",
    level: "ADVANCED",
    description:
      "Working with relational databases, model relationships, migrations, query optimization, and structured data storage.",
    tech: ["PostgreSQL", "MySQL", "Models", "Migrations"],
  },
  {
    icon: <Gauge size={24} />,
    title: "Backend Performance",
    level: "PROFICIENT",
    description:
      "Improving backend workflows through optimized queries, cleaner API logic, reusable services, and efficient data processing.",
    tech: ["Optimization", "Queries", "Services", "Scalability"],
  },
];

export default function BackendSkillsTab() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3
            className={`${montserrat.className} text-[28px] font-[700] tracking-[-0.04em] text-[#edf2ff] sm:text-[32px] lg:text-[38px]`}
          >
            Backend Engineering
          </h3>

          <p
            className={`${inter.className} mt-3 max-w-3xl text-[15px] leading-[1.8] text-[#8b90a0] sm:text-[16px] lg:text-[17px]`}
          >
            Building secure, scalable backend systems with Django, REST APIs,
            authentication, database design, and clean server-side architecture.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-2">
          <CheckCircle2 size={16} className="text-cyan-300" />

          <span
            className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.12em] text-cyan-300`}
          >
            Secure API Systems
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {backendSkills.map((skill) => (
          <div
            key={skill.title}
            className="group rounded-2xl border border-white/8 bg-[#1a2338]/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#1e2942] sm:p-6"
          >
            <div className="mb-5 flex items-start justify-between">
              <div className="text-cyan-300">{skill.icon}</div>

              <span
                className={`${jetbrainsMono.className} rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-cyan-300`}
              >
                {skill.level}
              </span>
            </div>

            <h4
              className={`${montserrat.className} mb-4 text-[20px] font-[600] tracking-[-0.03em] text-[#edf2ff]`}
            >
              {skill.title}
            </h4>

            <p
              className={`${inter.className} mb-6 text-[14px] leading-[1.8] text-[#8f9ab3] sm:text-[15px]`}
            >
              {skill.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {skill.tech.map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.08em] text-[#b8c4dd]`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
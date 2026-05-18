"use client";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import {
  Link2,
  User,
  AtSign,
  Award,
  BrainCircuit,
  Terminal,
} from "lucide-react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

function SkillBadge({
  text,
  variant,
}: {
  text: string;
  variant: "blue" | "cyan" | "orange";
}) {
  const styles = {
    blue: "border border-[#adc7ff]/10 bg-[#adc7ff]/10 text-[#adc7ff]",
    cyan: "border border-cyan-300/10 bg-cyan-300/10 text-cyan-300",
    orange: "border border-orange-300/10 bg-orange-300/10 text-orange-300",
  };

  return (
    <span
      className={`${jetbrainsMono.className} rounded-md px-2.5 sm:px-3 py-[6px] sm:py-[7px] text-[10px] sm:text-[12px] font-medium tracking-[0.04em] ${styles[variant]}`}
    >
      {text}
    </span>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-[1px] w-8 bg-cyan-300" />
      <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold tracking-tight text-[#dae2fd]">
        {title}
      </h3>
    </div>
  );
}

export default function ResumeSection() {
  return (
    <section className="px-4 sm:px-6 pb-16 sm:pb-24 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#111827]/50 p-5 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-14 lg:p-20">

        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-[-0.04em] text-[#adc7ff]">
            Souvik Nath
          </h2>

          <p
            className={`${jetbrainsMono.className} mt-3 text-[11px] sm:text-[13px] md:text-[15px] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-cyan-300`}
          >
            Software Engineer | Full Stack Development | AI Applications
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-4 border-t border-white/5 pt-6 text-[#b7c3de]">

            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/souviknath18"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-all duration-300 hover:text-cyan-300"
              >
                <Link2
                  size={18}
                  className="text-[#b7c3de] transition-colors duration-300 group-hover:text-cyan-300"
                />

                <span className="break-all cursor-pointer text-[13px] sm:text-[15px] text-[#b7c3de] transition-colors duration-300 group-hover:text-cyan-300">
                  github.com/souviknath18
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="https://linkedin.com/in/souvik-nath-0111a721a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-all duration-300 hover:text-cyan-300"
              >
                <User
                  size={18}
                  className="text-[#b7c3de] transition-colors duration-300 group-hover:text-cyan-300"
                />

                <span className="break-all cursor-pointer text-[13px] sm:text-[15px] text-[#b7c3de] transition-colors duration-300 group-hover:text-cyan-300">
                  linkedin.com/in/souvik-nath-0111a721a/
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:souviknath18@gmail.com"
                className="group flex items-center gap-2 transition-all duration-300 hover:text-cyan-300"
              >
                <AtSign
                  size={18}
                  className="text-[#b7c3de] transition-colors duration-300 group-hover:text-cyan-300"
                />

                <span className="break-all cursor-pointer text-[13px] sm:text-[15px] text-[#b7c3de] transition-colors duration-300 group-hover:text-cyan-300">
                  souviknath18@gmail.com
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* SUMMARY */}
        <div className="mb-16">
          <SectionHeading title="Summary" />

          <p className="max-w-5xl text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] sm:leading-[1.9] text-[#b7c3de]">
            Full Stack Engineer with hands-on experience developing scalable
            web applications using Next.js, React.js, JavaScript,
            TypeScript, Django, and Django REST Framework. Strong expertise
            in backend development, RESTful APIs, JWT Authentication,
            role-based access control, API security, and relational
            databases MySQL, PostgreSQL. Skilled in Git, GitHub, Postman,
            system design fundamentals, and clean architecture.
          </p>
        </div>

        {/* TECHNICAL CORE */}
        <div className="mb-20">
          <SectionHeading title="Technical Core" />

          <div className="grid gap-8 md:grid-cols-2">

            {/* TOP LEFT */}
            <div>
              <p
                className={`${jetbrainsMono.className} mb-4 font-semibold text-[12px] uppercase tracking-[0.18em] text-[#8b90a0]`}
              >
                Engineering & UI
              </p>

              <div className="flex flex-wrap gap-3">
                <SkillBadge text="Next.js" variant="blue" />
                <SkillBadge text="React" variant="blue" />
                <SkillBadge text="TypeScript" variant="blue" />
                <SkillBadge text="Tailwind CSS" variant="blue" />
                <SkillBadge text="HTML / CSS" variant="blue" />
              </div>
            </div>

            {/* TOP RIGHT */}
            <div>
              <p
                className={`${jetbrainsMono.className} mb-4 font-semibold text-[12px] uppercase tracking-[0.18em] text-[#8b90a0]`}
              >
                AI & Machine Learning
              </p>

              <div className="flex flex-wrap gap-3">
                <SkillBadge text="OpenAI API" variant="orange" />
                <SkillBadge text="LangChain (Learning)" variant="orange" />
                <SkillBadge text="RAG (Learning)" variant="orange" />
                <SkillBadge text="Vector DBs (Learning)" variant="orange" />
                <SkillBadge text="LLM Workflows" variant="orange" />
              </div>
            </div>

            {/* BOTTOM LEFT */}
            <div>
              <p
                className={`${jetbrainsMono.className} mb-4 font-semibold text-[12px] uppercase tracking-[0.18em] text-[#8b90a0]`}
              >
                Backend & Infra
              </p>

              <div className="flex flex-wrap gap-3">
                <SkillBadge text="Python" variant="cyan" />
                <SkillBadge text="Django" variant="cyan" />
                <SkillBadge text="Django REST Framework" variant="cyan" />
                <SkillBadge text="RESTful APIs" variant="cyan" />
                <SkillBadge text="JWT Authentication" variant="cyan" />
                <SkillBadge text="API Security" variant="cyan" />
                <SkillBadge text="PostgreSQL" variant="cyan" />
                <SkillBadge text="MySQL" variant="cyan" />
              </div>
            </div>

            {/* BOTTOM RIGHT */}
            <div>
              <p
                className={`${jetbrainsMono.className} mb-4 font-semibold text-[12px] uppercase tracking-[0.18em] text-[#8b90a0]`}
              >
                Tools & Ops
              </p>

              <div className="flex flex-wrap gap-3">
                <SkillBadge text="Docker" variant="blue" />
                <SkillBadge text="Git" variant="blue" />
                <SkillBadge text="GitHub" variant="blue" />
                <SkillBadge text="CI / CD" variant="blue" />
                <SkillBadge text="Vercel" variant="blue" />
              </div>
            </div>

          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-20">
          <SectionHeading title="Experience" />

          <div className="space-y-12 sm:space-y-16">

            {/* EXPERIENCE 1 */}
            <div className="relative pl-7 sm:pl-10">

              <div className="absolute -left-[7px] sm:-left-[9px] top-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />

              <div className="absolute left-[-2px] top-6 bottom-0 w-[2px] bg-cyan-400/40" />

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#dae2fd]">
                  Software Engineer
                </h3>

                <span
                  className={`${jetbrainsMono.className} rounded-md bg-cyan-300/10 px-4 py-2 text-[12px] uppercase tracking-[0.12em] text-cyan-300`}
                >
                  2024 - Present
                </span>
              </div>

              <p className="mt-3 text-[15px] sm:text-[16px] md:text-[18px] font-medium text-[#adc7ff]">
                Gowdanar Technologies Pvt. Ltd.
              </p>

              <ul className="mt-6 ml-5 list-disc space-y-4 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] sm:leading-[1.9] text-[#b7c3de]">
                <li>
                  Developed and maintained scalable frontend modules using Next.js and React.js,
                  improving dashboard responsiveness and reducing page load times by ~30%.
                </li>

                <li>
                  Built and optimized RESTful APIs using Django REST Framework, improving backend
                  workflow efficiency and reducing average API response time by ~25% across
                  compliance modules.
                </li>

                <li>
                  Implemented JWT authentication and RBAC systems for three user roles,
                  fortifying application security and access management, and processing
                  75,000+ authentication requests daily with zero downtime.
                </li>

                <li>
                  Integrated React/Next.js frontend systems with PostgreSQL and MySQL databases,
                  improving data retrieval performance and increasing API response consistency
                  by ~30%.
                </li>

                <li>
                  Collaborated with cross-functional teams in agile sprint cycles, helping
                  deliver production-ready features ~20% faster while reducing recurring bug
                  issues.
                </li>
              </ul>
            </div>

            {/* EXPERIENCE 2 */}
            <div className="relative pl-7 sm:pl-10">

              <div className="absolute -left-[7px] sm:-left-[9px] top-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#2a3449]" />

              <div className="absolute left-[-2px] top-6 bottom-0 w-[2px] bg-[#2a3449]/60" />

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#dae2fd]">
                  Software Engineer Intern
                </h3>

                <span
                  className={`${jetbrainsMono.className} rounded-md bg-white/5 px-4 py-2 text-[12px] uppercase tracking-[0.12em] text-[#8b90a0]`}
                >
                  2022 - 2024
                </span>
              </div>

              <p className="mt-3 text-[15px] sm:text-[16px] md:text-[18px] font-medium text-[#adc7ff]">
                Gowdanar Technologies Pvt. Ltd.
              </p>

              <ul className="mt-6 ml-5 list-disc space-y-4 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] sm:leading-[1.9] text-[#b7c3de]">
                <li>
                  Developed and enhanced reusable React components for
                  enterprise dashboards, improving UI consistency and
                  reducing development time for new features by ~20%.
                </li>

                <li>
                  Integrated and debugged RESTful APIs with Django REST
                  Framework, ensuring stable data flow between frontend
                  and backend systems across multiple modules.
                </li>

                <li>
                  Optimized frontend performance by reducing unnecessary
                  re-renders and improving API handling, resulting in
                  smoother user interactions and faster page
                  responsiveness.
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* EDUCATION + CERTIFICATIONS */}
        <div className="grid gap-10 sm:gap-16 md:grid-cols-2">

          {/* EDUCATION */}
          <div>
            <SectionHeading title="Education" />

            <div>
              <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-semibold text-[#adc7ff]">
                B. Tech in Electronics & Communication Engineering
              </h4>

              <p className="mt-2 text-[16px] italic text-[#dae2fd]">
                Assam University, Silchar
              </p>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          {/* <div>
            <SectionHeading title="Certifications" />

            <div className="space-y-4">

              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <Award className="text-cyan-300" size={22} />

                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#b7c3de]">
                  AWS Solutions Architect Professional
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <BrainCircuit className="text-cyan-300" size={22} />

                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#b7c3de]">
                  Google TensorFlow Developer Certification
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <Terminal className="text-cyan-300" size={22} />

                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#b7c3de]">
                  DeepLearning.AI - AI Engineering Specialization
                </p>
              </div>

            </div>
          </div> */}

        </div>

      </div>
    </section>
  );
}
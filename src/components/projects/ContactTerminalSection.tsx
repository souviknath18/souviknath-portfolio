"use client";

import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export default function ContactTerminalSection() {
  return (
    <section className="px-6 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Terminal Container */}
        <div className="overflow-hidden rounded-2xl border border-cyan-300/10 bg-[#131b2e]/90 shadow-[0_0_40px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_0_40px_rgba(99,247,255,0.05)]">
          {/* Terminal Header */}
          <div className="flex items-center border-b border-white/[0.06] bg-[#1b2438]/80 px-4 py-3.5 sm:px-5">
            {/* Mac Dots */}
            <div className="mr-4 flex items-center gap-2 sm:mr-5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] sm:h-3 sm:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] sm:h-3 sm:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f] sm:h-3 sm:w-3" />
            </div>

            {/* Terminal Path */}
            <div
              className={`${jetbrainsMono.className} truncate text-[10px] tracking-[0.08em] text-[#8b90a0] sm:text-[11px] md:text-[12px]`}
            >
              souvik@portfolio: ~/open_to_opportunities
            </div>
          </div>

          {/* Terminal Body */}
          <div className="relative overflow-hidden px-5 py-7 sm:px-7 sm:py-8 md:px-10 md:py-10">
            {/* Background Glows */}
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-300/[0.05] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-[#4a8eff]/[0.05] blur-3xl" />

            <div className={`${jetbrainsMono.className} relative z-10`}>
              {/* Command */}
              <div className="flex flex-wrap items-start gap-x-3 gap-y-2 text-[11px] sm:text-[13px] md:text-[14px]">
                <span className="shrink-0 text-cyan-300">
                  recruiter@web:~$
                </span>

                <span className="break-words text-[#aab4cf]">
                  ./connect.sh --role &quot;Full Stack / Backend / AI
                  Engineer&quot;
                  <span className="ml-1 inline-block h-[15px] w-[2px] animate-[pulse_1s_steps(1)_infinite] bg-cyan-300 align-middle" />
                </span>
              </div>

              {/* Terminal Output */}
              <div className="mt-6 space-y-1 text-[11px] leading-7 sm:text-[13px] md:text-[14px]">
                <div className="text-[#c1c6d7]">
                  [SYSTEM] Loading engineering profile...
                </div>

                <div className="text-cyan-300">
                  [SUCCESS] Profile verified and available.
                </div>

                <div className="text-[#c1c6d7]">
                  [INFO] 3+ years of experience across enterprise fintech,
                  full-stack development, production APIs, and AI-powered SaaS
                  products.
                </div>

                <div className="text-[#c1c6d7]">
                  [STACK] Next.js, TypeScript, Django, FastAPI, PostgreSQL,
                  Celery, Redis, Kafka, OpenAI, RAG, Docker, and cloud
                  deployment.
                </div>

                <div className="text-[#c1c6d7]">
                  [STATUS] Open to full-stack, backend, and AI application
                  opportunities.
                </div>

                <div className="text-[#c1c6d7]">
                  [ACTION] Choose a channel below to start a conversation.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:souviknath18@gmail.com"
                  className={`${jetbrainsMono.className} flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#08111f] shadow-[0_0_20px_rgba(173,199,255,0.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(99,247,255,0.28)] sm:px-5 sm:py-3 sm:text-[11px]`}
                >
                  <Mail size={15} />
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/stackwithsouvik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${jetbrainsMono.className} flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#b7c4dc] transition-all duration-300 hover:border-[#0A66C2]/45 hover:bg-[#0A66C2]/10 hover:text-[#72b8ff] sm:px-5 sm:py-3 sm:text-[11px]`}
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/souviknath18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${jetbrainsMono.className} flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#b7c4dc] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white sm:px-5 sm:py-3 sm:text-[11px]`}
                >
                  <Github size={15} />
                  GitHub
                </a>
              </div>

              {/* Contact Details */}
              <div className="mt-7 flex flex-col gap-1.5 border-t border-white/[0.06] pt-5 text-[10px] leading-6 text-[#748097] sm:flex-row sm:items-center sm:gap-3 sm:text-[11px]">
                <span>souviknath18@gmail.com</span>

                <span className="hidden text-white/20 sm:inline">•</span>

                <span>Bangalore, India</span>

                <span className="hidden text-white/20 sm:inline">•</span>

                <span>Immediate Joiner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
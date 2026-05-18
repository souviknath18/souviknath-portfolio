"use client";
import Link from "next/link";
import { Download, Mail } from "lucide-react";

export default function ResumeHero() {
  return (
    <section className="px-6 md:px-10 lg:px-8 xl:px-12 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

        {/* TOP BADGE */}
        <div className="mb-6 flex items-center gap-2 sm:gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/[0.03] px-3 sm:px-4 py-[4px]">

          {/* PULSE DOT */}
          <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
            <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </div>

          <span className="font-mono text-[10px] sm:text-[12px] md:text-[13px] font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] text-cyan-300">
            Professional Snapshot
          </span>
        </div>

        {/* HEADING */}
        <h1 className="text-[38px] sm:text-[52px] md:text-[76px] font-bold tracking-[-0.05em] leading-[1.02]">
          <span className="text-[#dae2fd]">Professional</span>{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-[#adc7ff] bg-clip-text text-transparent">
            Resume
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 sm:mt-7 max-w-3xl text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] sm:leading-[1.9] text-[#8b90a0]">
          A concise overview of my software engineering experience, full-stack
          development skills, backend API work, and growing focus on AI-powered
          applications.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row">

          {/* DOWNLOAD BUTTON */}
          <a
            href="/resume/SouvikNath_Resume.pdf"
            download
            className="flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-[#4a8eff] to-cyan-300 px-6 sm:px-8 py-3 sm:py-4 text-[12px] sm:text-sm font-bold uppercase tracking-[0.08em] text-[#08111f] shadow-[0_0_30px_rgba(99,247,255,0.18)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(99,247,255,0.28)]"
          >
            <Download className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.4} />
            Download PDF
          </a>

          {/* CONTACT BUTTON */}
          <Link href="/contact">
            <button className="flex cursor-pointer items-center gap-2 sm:gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-6 sm:px-8 py-3 sm:py-4 text-[12px] sm:text-sm font-bold uppercase tracking-[0.08em] text-[#dae2fd] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.04] hover:text-cyan-300">
              <Mail className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.2} />
              Contact Me
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}
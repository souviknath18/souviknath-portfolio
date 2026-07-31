"use client";

import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-6 xl:px-4"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1d2f4d] via-[#121d33] to-[#0b1326] px-5 py-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.18)] sm:px-8 sm:py-14 md:px-12 md:py-20 lg:px-16">
        {/* Top Right Glow */}
        <div className="absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* Bottom Left Glow */}
        <div className="absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-[#4a8eff]/10 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10">
          {/* Availability */}
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-300 sm:text-[12px]">
              Open to Full Stack & AI Opportunities
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#dae2fd] sm:text-4xl md:text-5xl">
            Let&apos;s Build Something Meaningful
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-center text-[14px] leading-[1.8] text-[#9aa6c4] sm:text-[15px] md:text-[16px]">
            I&apos;m open to full-stack, backend, and AI application
            opportunities where I can contribute to scalable products,
            production APIs, intelligent workflows, and modern cloud-based
            systems.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Email */}
            <a
              href="mailto:souviknath18@gmail.com"
              aria-label="Send an email to Souvik Nath"
              className="group flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-6 py-3 text-[13px] font-bold text-[#08111f] shadow-[0_0_25px_rgba(173,199,255,0.22)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(99,247,255,0.28)] sm:px-7 sm:py-3.5 sm:text-[14px]"
            >
              <Mail
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/stackwithsouvik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's LinkedIn profile"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-black/25 px-5 py-3 text-[13px] font-semibold text-[#dae2fd] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:text-[#72b8ff] sm:py-3.5 sm:text-[14px]"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/souviknath18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's GitHub profile"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-black/25 px-5 py-3 text-[13px] font-semibold text-[#dae2fd] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06] hover:text-white sm:py-3.5 sm:text-[14px]"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          {/* Contact Details */}
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-[12px] text-[#7f8ba3] sm:flex-row sm:gap-3 sm:text-[13px]">
            <a
              href="mailto:souviknath18@gmail.com"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              souviknath18@gmail.com
            </a>

            <span className="hidden text-white/20 sm:inline">•</span>

            <span>Bangalore, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import Link from "next/link";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-6 xl:px-4 py-20">
      
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1d2f4d] via-[#121d33] to-[#0b1326] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-14 md:py-20 text-center">

        {/* TOP RIGHT GLOW */}
        <div className="absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* BOTTOM LEFT GLOW */}
        <div className="absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-[#4a8eff]/10 blur-[120px]" />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#dae2fd]">
            Let&apos;s Build the Future Together
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-[#9aa6c4]">
            Currently open to senior-level opportunities and
            high-impact AI consulting projects. Let&apos;s discuss
            how we can engineer your next breakthrough.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:gap-5 md:flex-row">

            {/* EMAIL BUTTON */}
            <Link href="/contact">
              <button className="group flex items-center gap-3 rounded-xl bg-[#adc7ff] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-[#08111f] transition hover:scale-105 hover:shadow-[0_0_25px_rgba(173,199,255,0.35)]">
                
                <Mail
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-[1px]"
                />

                <span className="text-[16px] font-bold">
                  Email Me
                </span>
              </button>
            </Link>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/souvik-nath-0111a721a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-[#dae2fd] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <Linkedin size={20} />
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/souviknath18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-[#dae2fd] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <Github size={20} />
              </a>

              {/* TWITTER */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-[#dae2fd] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <Twitter size={20} />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
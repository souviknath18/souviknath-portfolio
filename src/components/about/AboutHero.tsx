"use client";

import {
  JetBrains_Mono,
  Montserrat,
  Inter,
} from "next/font/google";

import {
  Download,
  Code2,
  Share2,
  Image as ImageIcon,
} from "lucide-react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-8 xl:px-4 pt-28 md:pt-32 lg:pt-36 pb-20">
      <div className="grid items-center gap-14 md:gap-20 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          {/* AVAILABILITY */}
          <div className="flex items-center gap-3">

            {/* PULSE DOT */}
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.95)]" />
            </div>

            <span
              className={`${jetbrainsMono.className} text-[13px] font-semibold uppercase tracking-[0.14em] text-cyan-300`}
            >
              Available for Opportunities
            </span>
          </div>

          {/* NAME */}
          <h1
            className={`${montserrat.className} mt-7 text-[44px] sm:text-[52px] md:text-[68px] lg:text-[82px] font-[800] leading-[0.95] tracking-[-0.05em]`}
          >
            <span className="text-[#dae2fd]">
              Souvik
            </span>{" "}

            <span className="bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-transparent">
              Nath
            </span>
          </h1>

          {/* ROLE */}
          <h2
            className={`${inter.className} mt-5 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-[-0.02em] text-[#8b90a0]`}
          >
            Full Stack Engineer & AI Builder
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`${inter.className} mt-7 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.75] text-[#b7c3de]`}
          >
            Building scalable web applications and intelligent AI systems. 
            Currently developing <span className="text-white">Expensight</span> — an AI-powered personal finance assistant, 
            and <span className="text-white">AI Career Coach</span> — a smart career guidance platform using RAG and LLMs.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap items-center gap-5">

            {/* DOWNLOAD BUTTON */}
            <button
              className={`${inter.className} inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#4a8eff] to-cyan-300 px-6 sm:px-7 md:px-8 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-[0.1em] text-[#08111f] shadow-[0_0_30px_rgba(99,247,255,0.18)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(99,247,255,0.3)]`}
            >
              Download Resume

              <Download
                size={18}
                strokeWidth={2.5}
              />
            </button>

            {/* ICON BUTTONS */}
            <div className="flex items-center gap-4">

              {/* CODE */}
              <a
                href="https://github.com/souviknath18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#131b2eb3] text-[#8b90a0] shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <Code2 size={22} />
              </a>

              {/* SHARE */}
              <a
                href="https://linkedin.com/in/souvik-nath-0111a721a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#131b2eb3] text-[#8b90a0] shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <Share2 size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center lg:justify-end lg:pl-8">

          <div className="relative h-[300px] w-[280px] sm:h-[340px] sm:w-[320px] md:h-[400px] md:w-[360px] lg:h-[430px] lg:w-[390px]">

            {/* OUTER GLOW */}
            <div className="absolute inset-0 rounded-[28px] bg-[#4a8eff]/24 blur-[90px]" />

            {/* MAIN IMAGE BOX */}
            <div className="relative h-full w-full overflow-hidden rounded-[15px] border border-white/10 bg-[#131b2eb3] p-4 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">

              {/* PLACEHOLDER */}
              <div className="flex h-full w-full items-center justify-center rounded-[10px] border border-dashed border-[#2f394d] bg-[#111827]">

                <div className="flex flex-col items-center">
                  <ImageIcon
                    size={58}
                    className="text-[#3d475d]"
                  />

                  <p
                    className={`${jetbrainsMono.className} mt-5 text-[12px] uppercase tracking-[0.14em] text-[#4d576d]`}
                  >
                    Profile Image
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING EXPERIENCE CARD */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 rounded-2xl border border-white/10 bg-[#10182abf] px-5 py-4 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">

              <p
                className={`${montserrat.className} text-[32px] font-[700] leading-none text-[#adc7ff]`}
              >
                2+
              </p>

              <p
                className={`${jetbrainsMono.className} mt-2 font-bold text-[10px] uppercase tracking-[0.14em] text-[#6c7892]`}
              >
                YEARS EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
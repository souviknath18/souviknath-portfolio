"use client";

import { JetBrains_Mono, Montserrat } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060e20] mt-16 sm:mt-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:py-10 lg:flex-row lg:px-4">

        {/* LEFT */}
        <div
          className={`${montserrat.className} text-[18px] sm:text-[20px] font-black tracking-tight text-[#dae2fd]`}
        >
          StackWithSouvik
        </div>

        {/* CENTER */}
        <div
          className={`${jetbrainsMono.className} flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[13px] sm:text-[14px]`}
        >
          <a
            href="https://github.com/souviknath18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b90a0] transition-colors duration-300 hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/souvik-nath-0111a721a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b90a0] transition-colors duration-300 hover:text-cyan-300"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b90a0] transition-colors duration-300 hover:text-cyan-300"
          >
            Twitter
          </a>

          <a
            href="mailto:souviknath18@gmail.com"
            className="text-[#8b90a0] transition-colors duration-300 hover:text-cyan-300"
          >
            Email
          </a>
        </div>

        {/* RIGHT */}
        <div
          className={`${jetbrainsMono.className} text-center text-[12px] sm:text-[13px] text-[#8b90a0] lg:text-right`}
        >
          © 2026 stackwithsouvik.com | Built with Precision
        </div>
      </div>
    </footer>
  );
}
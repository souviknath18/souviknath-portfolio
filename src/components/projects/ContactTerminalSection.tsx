"use client";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export default function ContactTerminalSection() {
  return (
    <section className="px-6 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* TERMINAL CONTAINER */}
        <div className="overflow-hidden rounded-2xl border border-cyan-300/10 bg-[#131b2e]/90 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20">

          {/* TERMINAL HEADER */}
          <div className="flex items-center border-b border-white/5 bg-[#1b2438]/80 px-5 py-4">

            {/* MAC DOTS */}
            <div className="mr-5 flex items-center gap-2">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f]" />
            </div>

            {/* TERMINAL PATH */}
            <div
              className={`${jetbrainsMono.className} truncate text-[10px] sm:text-[12px] tracking-[0.08em] text-[#8b90a0]`}
            >
              stackwithsouvik@portfolio: ~/contact_request
            </div>
          </div>

          {/* TERMINAL BODY */}
          <div className="relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8">

            {/* BACKGROUND GLOW */}
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-300/5 blur-3xl" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#4a8eff]/5 blur-3xl" />

            <div
              className={`${jetbrainsMono.className} relative z-10`}
            >

              {/* COMMAND */}
              <div className="flex flex-wrap items-start gap-x-3 gap-y-2 text-[12px] sm:text-[14px] md:text-[15px]">

                <span className="text-cyan-300">
                  visitor@web:~$
                </span>

                <span className="break-words text-[#aab4cf]">
                  ./contact_engineer.sh --subject "Collaborate on AI Product"
                  <span className="ml-1 inline-block h-[16px] w-[2px] animate-[pulse_1s_steps(1)_infinite] bg-cyan-300 align-middle" />
                </span>
              </div>

              {/* TERMINAL OUTPUT */}
              <div className="mt-6 space-y-0.5 sm:space-y-1 text-[12px] sm:text-[14px] leading-7 md:text-[15px]">

                <div className="text-[#c1c6d7]">
                  [SYSTEM] Initializing handshake protocol...
                </div>

                <div className="text-cyan-300">
                  [SUCCESS] Connection established.
                </div>

                <div className="text-[#c1c6d7]">
                  [INFO] Looking for a developer who works with React,
                  Python, and AI-powered systems?
                </div>

                <div className="text-[#c1c6d7]">
                  [ACTION] Click the button below to initiate high-bandwidth
                  communication.
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-10">
                <Link href="/contact">
                  <button className={`${jetbrainsMono.className} rounded-lg bg-[#adc7ff] px-5 py-2.5 sm:px-7 sm:py-3 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] text-[#08111f] shadow-[0_0_20px_rgba(173,199,255,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#c4d7ff] hover:shadow-[0_0_30px_rgba(173,199,255,0.35)]`}>
                    Execute: Contact_Me
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
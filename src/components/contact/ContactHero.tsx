"use client";

import {
  JetBrains_Mono,
  Montserrat,
  Inter,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-42 pb-24 lg:px-4">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] shadow-[0_0_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">

        {/* Glow */}
        <div className="absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-[#4a8eff]/10 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[100px]" />

        {/* Terminal Header */}
        <div className="relative z-10 flex items-center border-b border-white/5 bg-[#1a2235]/60 px-5 py-3 backdrop-blur-xl sm:px-6">

          {/* Macbook Dots */}
          <div className="mr-5 flex items-center gap-2.5">
            <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border border-[#ff7b72] bg-[#4a1f24]" />
            <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border border-[#ffd76a] bg-[#4a3f18]" />
            <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border border-cyan-300 bg-[#12363d]" />
          </div>

          {/* Filename */}
          <div className={`${jetbrainsMono.className} truncate text-[11px] sm:text-[12px] tracking-[0.06em] text-[#7f8ba3]`}>
            bash — contact.sh
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-5 py-12 sm:px-8 md:px-14 md:py-20">

          {/* Heading */}
          <h1 className={`${montserrat.className} max-w-4xl text-[42px] font-[800] leading-[0.98] tracking-[-0.05em] text-[#adc7ff] sm:text-[56px] md:text-7xl`}>
            Initiate{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-[#adc7ff] bg-clip-text text-transparent">
              Connection_
            </span>
          </h1>

          {/* Paragraph */}
          <p className={`${inter.className} mt-7 max-w-2xl text-[16px] leading-[1.9] text-[#9ba7c2] sm:text-[17px]`}>
            Synthesizing engineering excellence with futuristic design.
            Reach out to discuss architectural strategies or innovative
            collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
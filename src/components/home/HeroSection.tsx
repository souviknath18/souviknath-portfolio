"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-7xl items-start px-6 pt-28 pb-20 md:px-10 lg:px-6 lg:pt-28 xl:px-4">
      <div className="grid w-full gap-16 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          {/* Availability */}
          <div className="mb-4 flex items-center gap-3">
            <div className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
            </div>

            <span
              className={`${jetbrainsMono.className} text-[13px] uppercase tracking-[0.12em] text-cyan-300`}
            >
              Open to Opportunities
            </span>
          </div>

          {/* Name + Role */}
          <h1
            className={`${montserrat.className} mb-5 text-[44px] font-[700] leading-[0.98] tracking-[-0.05em] text-[#dae2fd] sm:text-[58px] md:text-7xl`}
          >
            Souvik Nath
            <span className="block bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-transparent">
              Software Engineer & AI Builder
            </span>
          </h1>

          {/* Description */}
          <p className={`${inter.className} max-w-xl text-[16px] leading-[1.9] text-[#97a3bd] sm:text-[17px]`}>
            Crafting high-performance full-stack applications and intelligent AI solutions using Next.js, Django, and LLMs. Passionate about turning complex problems into intuitive, AI-enhanced experiences.
          </p>

          {/* Buttons */}
          <div
            className={`${inter.className} mt-10 flex flex-wrap items-center gap-4 sm:gap-5`}
          >
            <Link href="/projects">
              <button className="rounded-xl bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-6 sm:px-7 py-3 sm:py-3.5 text-[13px] sm:text-[15px] font-bold text-[#08111f] shadow-[0_0_25px_rgba(173,199,255,0.22)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(99,247,255,0.28)]">
                View Projects
              </button>
            </Link>

            <a
              href="/resume/SouvikNath_Resume.pdf"
              download
              className="rounded-xl border border-cyan-300/30 bg-cyan-300/[0.02] px-6 sm:px-7 py-3 sm:py-3.5 text-[13px] sm:text-[15px] font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/[0.05]"
            >
              View Resume
            </a>

            <Link
              href="/contact"
              className="flex cursor-pointer items-center gap-2 text-[14px] sm:text-[16px] font-bold text-[#dae2fd] transition hover:text-[#adc7ff]"
            >
              Contact Me
              <ArrowRight size={18} className="sm:size-5" />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden items-center justify-center lg:flex">
          {/* Blur Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-cyan-300/8 blur-[120px]" />

          {/* Terminal */}
          <div className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0f172ab3] shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20">
            
            {/* Header */}
            <div className="flex items-center border-b border-white/5 bg-[#11182760] px-5 py-3.5 backdrop-blur-xl">
              {/* Mac Dots */}
              <div className="mr-5 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* Filename */}
              <div
                className={`${jetbrainsMono.className} text-[12px] tracking-[0.06em] text-[#7f8ba3]`}
              >
                souvik_nath_core.py
              </div>
            </div>

            {/* Code Area */}
            <div className={`${jetbrainsMono.className} overflow-x-auto p-6 text-[14px] leading-[1.95] text-[#adc7ff]`}>
              <div>
                <span className="text-[#63f7ff]">class</span>{" "}
                <span className="text-white">SouvikNath</span>(Developer):
              </div>

              <div className="pl-4">
                <span className="text-[#63f7ff]">def</span>{" "}
                <span className="text-white">__init__</span>(self):
              </div>

              <div className="pl-8">
                self.name = <span className="text-[#ffb695]">"Souvik Nath"</span>
              </div>
              <div className="pl-8">
                self.role = <span className="text-[#ffb695]">"Software Engineer & AI Builder"</span>
              </div>
              <div className="pl-8">
                self.currently_building = [
                <span className="text-[#ffb695]">"AI Finance Insights Platform"</span>,{" "}
                <span className="text-[#ffb695]">"AI Career Coach"</span>
                ]
              </div>

              <div className="pl-4 mt-4">
                <span className="text-[#63f7ff]">self</span>.learning = [
              </div>

              <div className="pl-8">
                <span className="text-[#ffb695]">"RAG Pipelines"</span>,
              </div>

              <div className="pl-8">
                <span className="text-[#ffb695]">"Vector Databases"</span>,
              </div>

              <div className="pl-8">
                <span className="text-[#ffb695]">"LLM Applications"</span>
              </div>

              <div className="pl-4">]</div>

              <div className="pl-8 mt-3 text-[#63f7ff]">
                # Building scalable AI-native systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
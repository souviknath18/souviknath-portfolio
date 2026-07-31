"use client";

import { Github, Linkedin, Download, } from "lucide-react";
import {
  Inter,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const highlights = [
  {
    value: "3+",
    label: "Years of Experience",
  },
  {
    value: "30+",
    label: "Production REST APIs",
  },
  {
    value: "Fintech",
    label: "Production Systems",
  },
];

export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-7xl items-start px-6 pb-20 pt-28 md:px-10 lg:px-6 lg:pt-28 xl:px-4">
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
              className={`${jetbrainsMono.className} text-[12px] uppercase tracking-[0.12em] text-cyan-300 sm:text-[13px]`}
            >
              Open to Full Stack & AI Opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className={`${montserrat.className} text-[46px] font-[800] leading-[0.95] tracking-[-0.05em] text-[#dae2fd] sm:text-[60px] md:text-[74px]`}
          >
            Souvik Nath
          </h1>

          {/* Subtitle */}
          <h2
            className={`${montserrat.className} mt-4 bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-[25px] font-bold leading-tight tracking-[-0.035em] text-transparent sm:text-[31px] md:text-[36px]`}
          >
            Full Stack Engineer & AI Developer
          </h2>

          {/* Description */}
          <p
            className={`${inter.className} mt-5 max-w-xl text-[14px] leading-[1.85] text-[#97a3bd] sm:text-[15px]`}
          >
            I build scalable full-stack applications and AI-powered SaaS
            products using Next.js, TypeScript, Django, FastAPI, PostgreSQL,
            and OpenAI. My work focuses on production-ready APIs, intelligent
            document processing, RAG, semantic search, and reliable background
            processing systems.
          </p>

          {/* Buttons */}
          <div
            className={`${inter.className} mt-9 flex flex-wrap items-center gap-3 sm:flex-nowrap sm:gap-4`}
          >
            <a
              href="/resume/SouvikNath_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-6 py-3 text-[13px] font-bold text-[#08111f] shadow-[0_0_25px_rgba(173,199,255,0.22)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(99,247,255,0.28)] sm:px-7 sm:py-3.5 sm:text-[14px]"
            >
              Download Resume
              <Download size={18} strokeWidth={2.4} />
            </a>

            <a
              href="https://www.linkedin.com/in/stackwithsouvik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's LinkedIn profile"
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-[13px] font-semibold text-[#dae2fd] transition-all duration-300 hover:border-[#0A66C2]/70 hover:bg-[#0A66C2]/10 hover:text-[#72b8ff] sm:py-3.5 sm:text-[14px]"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/souviknath18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's GitHub profile"
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-[13px] font-semibold text-[#dae2fd] transition-all duration-300 hover:border-white/35 hover:bg-white/[0.06] hover:text-white sm:py-3.5 sm:text-[14px]"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          {/* Career Highlights */}
          <div
            className={`${inter.className} mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3`}
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.035]"
              >
                <div className="text-[18px] font-bold text-[#dae2fd]">
                  {item.value}
                </div>

                <div className="mt-1 text-[11px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-[#7f8ba3]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden items-center justify-center lg:flex">
          {/* Blur Glow */}
          <div className="absolute h-64 w-64 rounded-full bg-cyan-300/8 blur-[100px]" />

          {/* Terminal */}
          <div className="group relative w-full max-w-[460px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f172ab3] shadow-[0_0_35px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20">
            {/* Header */}
            <div className="flex items-center border-b border-white/5 bg-[#11182760] px-4 py-3 backdrop-blur-xl">
              {/* Mac Dots */}
              <div className="mr-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Filename */}
              <div
                className={`${jetbrainsMono.className} text-[11px] tracking-[0.06em] text-[#7f8ba3]`}
              >
                souvik_nath.py
              </div>
            </div>

            {/* Code Area */}
            <div
              className={`${jetbrainsMono.className} overflow-x-auto p-5 text-[13px] leading-[1.8] text-[#adc7ff]`}
            >
              <div>
                <span className="text-[#63f7ff]">class</span>{" "}
                <span className="text-white">SouvikNath</span>
                (FullStackEngineer):
              </div>

              <div className="pl-4">
                <span className="text-[#63f7ff]">def</span>{" "}
                <span className="text-white">__init__</span>(self):
              </div>

              <div className="pl-8">
                self.name ={" "}
                <span className="text-[#ffb695]">
                  &quot;Souvik Nath&quot;
                </span>
              </div>

              <div className="pl-8">
                self.role ={" "}
                <span className="text-[#ffb695]">
                  &quot;Full Stack Engineer&quot;
                </span>
              </div>

              <div className="pl-8">
                self.experience ={" "}
                <span className="text-[#ffb695]">
                  &quot;3+ years&quot;
                </span>
              </div>

              <div className="mt-3 pl-8">
                self.core_stack = [
              </div>

              <div className="pl-12">
                <span className="text-[#ffb695]">
                  &quot;Next.js & TypeScript&quot;
                </span>
                ,
              </div>

              <div className="pl-12">
                <span className="text-[#ffb695]">
                  &quot;Django, DRF & FastAPI&quot;
                </span>
                ,
              </div>

              <div className="pl-12">
                <span className="text-[#ffb695]">
                  &quot;PostgreSQL, Celery & Redis&quot;
                </span>
              </div>

              <div className="pl-8">]</div>

              <div className="mt-3 pl-8">
                self.currently_building ={" "}
                <span className="text-[#ffb695]">
                  &quot;Aura Finance&quot;
                </span>
              </div>

              <div className="mt-3 pl-8">
                self.ai_focus = [
              </div>

              <div className="pl-12">
                <span className="text-[#ffb695]">
                  &quot;LLM Applications&quot;
                </span>
                ,
              </div>

              <div className="pl-12">
                <span className="text-[#ffb695]">
                  &quot;RAG & Semantic Search&quot;
                </span>
                ,
              </div>

              <div className="pl-12">
                <span className="text-[#ffb695]">
                  &quot;Embeddings & Vector Search&quot;
                </span>
              </div>

              <div className="pl-8">]</div>

              <div className="mt-3 pl-8 text-[#63f7ff]">
                # Building scalable AI-powered software
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
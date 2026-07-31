"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  Github,
  Image as ImageIcon,
  Linkedin,
} from "lucide-react";
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

export default function AboutHero() {
  const PROFILE_IMAGE = "/images/Profile2.png";
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-28 md:px-10 md:pt-32 lg:px-8 lg:pt-36 xl:px-4">
      <div className="grid items-center gap-14 md:gap-20 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          {/* Availability */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </div>

            <span
              className={`${jetbrainsMono.className} text-[12px] uppercase tracking-[0.12em] text-cyan-300 sm:text-[13px]`}
            >
              Open to Full Stack & AI Opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className={`${montserrat.className} mt-7 text-[44px] font-[800] leading-[0.95] tracking-[-0.05em] sm:text-[52px] md:text-[66px] lg:text-[74px]`}
          >
            <span className="text-[#dae2fd]">Souvik</span>{" "}
            <span className="bg-gradient-to-r from-[#adc7ff] to-cyan-300 bg-clip-text text-transparent">
              Nath
            </span>
          </h1>

          {/* Role */}
          <h2
            className={`${inter.className} mt-5 text-[22px] font-semibold tracking-[-0.02em] text-[#9ba7c2] sm:text-[25px] md:text-[28px] lg:text-[31px]`}
          >
            Full Stack Engineer & AI Developer
          </h2>

          {/* Description */}
          <p
            className={`${inter.className} mt-6 max-w-2xl text-[14px] leading-[1.8] text-[#aeb9d1] sm:text-[15px] md:text-[16px]`}
          >
            I&apos;m a Python Full Stack Engineer with 3+ years of experience
            building scalable fintech applications, production APIs, and
            AI-powered SaaS products. My work includes Django, FastAPI,
            Next.js, TypeScript, PostgreSQL, Celery, Redis, Kafka, OpenAI,
            RAG, semantic search, and vector databases.
          </p>

          <p
            className={`${inter.className} mt-4 max-w-2xl text-[14px] leading-[1.8] text-[#8f9ab2] sm:text-[15px]`}
          >
            I enjoy designing clean architectures, developing secure backend
            systems, and turning complex workflows into reliable products that
            deliver real business value.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/resume/SouvikNath_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${inter.className} inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-6 py-3 text-[13px] font-bold text-[#08111f] shadow-[0_0_25px_rgba(99,247,255,0.18)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(99,247,255,0.28)] sm:px-7 sm:py-3.5 sm:text-[14px]`}
            >
              Download Resume
              <Download size={18} strokeWidth={2.4} />
            </a>

            <a
              href="https://github.com/souviknath18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's GitHub profile"
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#131b2eb3] px-5 py-3 text-[13px] font-semibold text-[#c4cde0] shadow-[0_0_24px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.05] hover:text-white sm:py-3.5 sm:text-[14px]"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/stackwithsouvik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Souvik Nath's LinkedIn profile"
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#131b2eb3] px-5 py-3 text-[13px] font-semibold text-[#c4cde0] shadow-[0_0_24px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#72b8ff] sm:py-3.5 sm:text-[14px]"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center lg:justify-end lg:pl-8">
          <div className="relative h-[300px] w-[280px] sm:h-[340px] sm:w-[320px] md:h-[390px] md:w-[350px] lg:h-[410px] lg:w-[370px]">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-[28px] bg-[#4a8eff]/20 blur-[85px]" />

            {/* Main image box */}
            <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#131b2eb3] p-3 shadow-[0_0_45px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              {imageLoaded ? (
                <Image
                  src={PROFILE_IMAGE}
                  alt="Souvik Nath"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 370px"
                  className="rounded-[13px] object-cover object-top"
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-[13px] border border-dashed border-[#2f394d] bg-[#111827]">
                  <div className="flex flex-col items-center">
                    <ImageIcon size={52} className="text-[#3d475d]" />

                    <p
                      className={`${jetbrainsMono.className} mt-4 text-[11px] uppercase tracking-[0.14em] text-[#4d576d]`}
                    >
                      Profile Image
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating experience card */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-[#10182ad9] px-5 py-4 shadow-[0_0_35px_rgba(0,0,0,0.32)] backdrop-blur-xl md:-bottom-5 md:-left-5">
              <p
                className={`${montserrat.className} text-[28px] font-[700] leading-none text-[#adc7ff] sm:text-[30px]`}
              >
                3+
              </p>

              <p
                className={`${jetbrainsMono.className} mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6c7892]`}
              >
                Years Experience
              </p>
            </div>

            {/* Floating API card */}
            <div className="absolute -right-4 top-7 rounded-xl border border-white/10 bg-[#10182ad9] px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.28)] backdrop-blur-xl md:-right-5">
              <p
                className={`${montserrat.className} text-[20px] font-[700] leading-none text-cyan-300`}
              >
                40+
              </p>

              <p
                className={`${jetbrainsMono.className} mt-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6c7892]`}
              >
                Production APIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
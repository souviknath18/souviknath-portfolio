"use client";
import Link from "next/link";
import {
  JetBrains_Mono,
  Inter,
} from "next/font/google";

import {
  Send,
  Code2,
  Share2,
  AtSign,
  Mail,
  Download,
  Rocket,
} from "lucide-react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-12">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#131b2eb3] p-6 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 md:p-10">
            
            <form className="space-y-8">

              {/* FIRST ROW */}
              <div className="grid gap-8 md:grid-cols-2">

                {/* FULL NAME */}
                <div className="space-y-3">
                  <label
                    className={`${jetbrainsMono.className} text-[13px] font-semibold uppercase tracking-[0.14em] text-cyan-300`}
                  >
                    FULL NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={`${inter.className} w-full border-0 border-b-[2px] border-[#3a4255] bg-transparent px-0 py-3 text-[15px] text-[#dae2fd] placeholder:text-[15px] placeholder:text-[#5e6880] transition-all duration-300 focus:border-cyan-300 focus:outline-none focus:ring-0`}
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-3">
                  <label
                    className={`${jetbrainsMono.className} text-[13px] font-semibold uppercase tracking-[0.14em] text-cyan-300`}
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`${inter.className} w-full border-0 border-b-[2px] border-[#3a4255] bg-transparent px-0 py-3 text-[15px] text-[#dae2fd] placeholder:text-[15px] placeholder:text-[#5e6880] transition-all duration-300 focus:border-cyan-300 focus:outline-none focus:ring-0`}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="space-y-3">
                <label
                  className={`${jetbrainsMono.className} text-[13px] font-semibold uppercase tracking-[0.14em] text-cyan-300`}
                >
                  SUBJECT
                </label>

                <input
                  type="text"
                  placeholder="Project discussion / collaboration"
                  className={`${inter.className} w-full border-0 border-b-[2px] border-[#3a4255] bg-transparent px-0 py-3 text-[15px] text-[#dae2fd] placeholder:text-[15px] placeholder:text-[#5e6880] transition-all duration-300 focus:border-cyan-300 focus:outline-none focus:ring-0`}
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-3">
                <label
                  className={`${jetbrainsMono.className} text-[13px] font-semibold uppercase tracking-[0.14em] text-cyan-300`}
                >
                  MESSAGE
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your requirements..."
                  className={`${inter.className} min-h-[180px] w-full resize-y border-0 border-b-[2px] border-[#3a4255] bg-transparent px-0 py-3 text-[15px] leading-[1.8] text-[#dae2fd] placeholder:text-[15px] placeholder:text-[#5e6880] transition-all duration-300 focus:border-cyan-300 focus:outline-none focus:ring-0`}
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className={`${inter.className} inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#adc7ff] to-cyan-300 px-8 py-4 text-[15px] font-bold tracking-[0.03em] text-[#08111f] shadow-[0_0_25px_rgba(99,247,255,0.2)] transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(99,247,255,0.30)]`}
              >
                <Send size={18} />
                TRANSMIT MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside className="space-y-6 lg:col-span-4">

          {/* STATUS BOX */}
          <div className="rounded-md border border-white/10 border-l-[3px] border-l-cyan-300 bg-[#131b2eb3] p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            
            <div className="flex items-start gap-4">

              {/* ANIMATED DOT */}
              <div className="relative mt-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
              </div>

              <div>
                <h3
                  className={`${jetbrainsMono.className} text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan-300`}
                >
                  CURRENT STATUS
                </h3>

                <p
                  className={`${inter.className} mt-2 text-[15px] leading-[1.7] text-[#d3def2]`}
                >
                  Currently available for complex engineering
                  challenges
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL HUB */}
          <div className="rounded-md border border-white/10 bg-[#131b2eb3] p-7 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            
            <h3
              className={`${jetbrainsMono.className} border-b border-white/5 pb-4 font-semibold text-[13px] uppercase tracking-[0.14em] text-[#8b90a0]`}
            >
              Social Hub
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">

              {/* GITHUB */}
              <a
                href="https://github.com/souviknath18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-[#1a2235] px-4 py-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-[#202b42]"
              >
                <Code2 size={18} className="text-cyan-300" />

                <span
                  className={`${jetbrainsMono.className} text-[13px] text-[#d3def2]`}
                >
                  GitHub
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/souvik-nath-0111a721a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-[#1a2235] px-4 py-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-[#202b42]"
              >
                <Share2 size={18} className="text-cyan-300" />

                <span
                  className={`${jetbrainsMono.className} text-[13px] text-[#d3def2]`}
                >
                  LinkedIn
                </span>
              </a>

              {/* TWITTER */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-[#1a2235] px-4 py-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-[#202b42]"
              >
                <AtSign size={18} className="text-cyan-300" />

                <span
                  className={`${jetbrainsMono.className} text-[13px] text-[#d3def2]`}
                >
                  Twitter
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:souviknath18@gmail.com"
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-[#1a2235] px-4 py-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-[#202b42]"
              >
                <Mail size={18} className="text-cyan-300" />

                <span
                  className={`${jetbrainsMono.className} text-[13px] text-[#d3def2]`}
                >
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* DOWNLOAD BUTTON */}
          <button
            className={`${inter.className} flex w-full items-center justify-center gap-3 rounded-md bg-[#232c41] px-6 py-4 text-[15px] font-bold text-[#dae2fd] transition-all duration-300 hover:-translate-y-[2px] hover:-translate-y-[2px] hover:bg-[#2d3850] hover:shadow-[0_0_30px_rgba(173,199,255,0.12)] hover:shadow-[0_0_30px_rgba(173,199,255,0.12)]`}
          >
            <Download size={18} className="text-[#adc7ff]" />
            Download Resume
          </button>

          {/* VIEW PROJECTS BUTTON */}
          <Link href="/projects">
            <button
              className={`${inter.className} flex w-full items-center justify-center gap-3 rounded-md border border-[#3c4558] px-6 py-4 text-[15px] font-bold text-[#dae2fd] transition-all duration-300 hover:-translate-y-[2px] hover:border-cyan-300/60 hover:bg-cyan-300/[0.03] hover:text-cyan-300`}
            >
              <Rocket size={18} className="text-[#8b90a0]" />
              View Projects
            </button>
          </Link>
        </aside>
      </div>
    </section>
  );
}
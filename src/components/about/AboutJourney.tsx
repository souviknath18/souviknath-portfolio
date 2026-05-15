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
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AboutJourney() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-8 xl:px-4 py-20 md:py-24">

      <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.85fr_1.35fr]">

        {/* LEFT SIDE */}
        <div>

          <h2
            className={`${montserrat.className} text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-[600] leading-[1.15] tracking-[-0.04em]`}
          >
            <span className="text-[#adc7ff]">
              The Evolution of
            </span>

            <br />

            <span className="text-[#e7ecff]">
              an Architect
            </span>
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* MAIN BOX */}
          <div className="border border-white/10 bg-[#131b2eb3] rounded-xl px-5 sm:px-7 md:px-10 py-6 sm:py-8 md:py-10 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.14)] md:px-10 md:py-10">

            <div className="space-y-7">

              {/* PARAGRAPH 1 */}
              <p
                className={`${inter.className} text-[15px] sm:text-[16px] md:text-[17px] leading-[1.9] text-[#aeb9d4]`}
              >
                My journey began in the rigid world of traditional
                full-stack engineering, where I mastered the art of
                building robust, monolithic applications. However,
                as the digital landscape shifted toward microservices
                and intelligent automation, so did my focus.
              </p>

              {/* PARAGRAPH 2 */}
              <p
                className={`${inter.className} text-[15px] sm:text-[16px] md:text-[17px] leading-[1.9] text-[#aeb9d4]`}
              >
                Transitioning into AI-integrated systems wasn&apos;t
                just about adding features; it was about reimagining
                how software interacts with human intent. Today,
                I bridge the gap between high-scale Node/Go backends
                and cutting-edge LLM infrastructures, ensuring that
                intelligence is never at the expense of performance.
              </p>

              {/* QUOTE BOX */}
              <div className="border-l-[3px] border-[#4a8eff] bg-[#4a8eff]/5 px-4 sm:px-6 py-4 sm:py-5">

                <p
                  className={`${jetbrainsMono.className} text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] text-[#cfe0ff]`}
                >
                  "I build systems that don&apos;t just process data—they understand it, scale with it, and secure it."
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
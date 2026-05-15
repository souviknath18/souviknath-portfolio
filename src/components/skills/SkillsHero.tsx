"use client";

export default function SkillsHero() {
  return (
    <section className="px-6 md:px-10 lg:px-8 xl:px-12 py-20 md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* TOP BADGE */}
        <div className="mb-5 rounded-full border border-cyan-300/30 bg-cyan-300/[0.03] px-3 sm:px-4 py-[4px]">
          <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] text-cyan-300">
            SYSTEM CAPABILITIES
          </span>
        </div>

        {/* HEADING */}
        <h1 className="text-[38px] sm:text-[46px] md:text-[60px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[1.08] md:leading-[1.05] text-[#adc7ff]">
          Technical Arsenal
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 sm:mt-6 max-w-3xl text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.75] sm:leading-[1.8] text-[#8b90a0]">
          Architecting robust digital ecosystems through continuous
          learning and specialized expertise in high-concurrency systems,
          AI-driven automation, and cloud-native infrastructure.
        </p>

        {/* STATUS */}
        <div className="mt-8 sm:mt-10 flex items-start gap-3 px-2 text-left">

          {/* PULSE DOT */}
          <div className="relative mt-[4px] flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
          </div>

          {/* STATUS TEXT */}
          <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.06em] sm:tracking-[0.08em] text-cyan-300">
            Status: Available for complex engineering challenges
          </span>
        </div>

      </div>
    </section>
  );
}
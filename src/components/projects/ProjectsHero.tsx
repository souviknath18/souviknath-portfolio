"use client";

export default function ProjectsHero() {
  return (
    <section className="px-6 py-20 sm:pt-28 md:pt-32 lg:pt-36 pb-24 lg:px-12">

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* TOP BADGE */}
        <div className="mb-6 flex items-center gap-2 sm:gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/[0.03] px-3 sm:px-4 py-[4px]">

          {/* PULSE DOT */}
          <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
            <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </div>

          <span className="font-mono text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-cyan-300">
            Featured Work
          </span>

        </div>

        {/* HEADING */}
        <h1 className="text-[38px] sm:text-[48px] md:text-[72px] font-bold tracking-[-0.04em] text-[#dae2fd] md:leading-[1.05]">
          Selected Projects
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-3xl text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.8] text-[#8b90a0]">
          Building production-grade full-stack applications and intelligent AI systems. 
          Currently focused on creating practical AI-powered tools like <span className="text-white">Expensight</span> 
          (AI Finance Assistant) and <span className="text-white">AI Career Coach</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-3">

          {/* ITEM 1 */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="font-mono text-[10px] sm:text-[12px] uppercase tracking-[0.1em] text-cyan-300">
              Full Stack Development
            </span>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="font-mono text-[10px] sm:text-[12px] uppercase tracking-[0.1em] text-cyan-300">
              AI & RAG Systems
            </span>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="font-mono text-[10px] sm:text-[12px] uppercase tracking-[0.1em] text-cyan-300">
              Scalable Applications
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
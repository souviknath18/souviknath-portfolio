"use client";

import {
  BrainCircuit,
  Bot,
  Cpu,
  DatabaseZap,
  MessageSquareText,
  Workflow,
  CheckCircle2,
} from "lucide-react";

import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

const aiSkills = [
  {
    icon: <Bot size={24} />,
    title: "OpenAI API",
    level: "BUILDING",
    description:
      "Building AI-powered features using prompts, structured responses, and practical LLM workflows.",
    tech: ["OpenAI", "Prompts", "Chat APIs", "Structured Output"],
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "LLM Applications",
    level: "LEARNING",
    description:
      "Exploring how LLMs can improve real product workflows like finance insights and career guidance.",
    tech: ["LLMs", "AI Features", "Product AI", "Automation"],
  },
  {
    icon: <Workflow size={24} />,
    title: "RAG Workflows",
    level: "LEARNING",
    description:
      "Learning retrieval-based AI workflows to connect user data, documents, and contextual answers.",
    tech: ["RAG", "Retrieval", "Context", "Documents"],
  },
  {
    icon: <DatabaseZap size={24} />,
    title: "Vector Databases",
    level: "LEARNING",
    description:
      "Understanding embeddings and vector search for semantic retrieval and AI-powered search systems.",
    tech: ["Embeddings", "Vector DB", "Semantic Search", "Similarity"],
  },
  {
    icon: <MessageSquareText size={24} />,
    title: "Prompt Engineering",
    level: "PRACTICING",
    description:
      "Designing prompts that produce clearer, structured, and more useful AI responses for users.",
    tech: ["Prompt Design", "Instructions", "Output Format", "Evaluation"],
  },
  {
    icon: <Cpu size={24} />,
    title: "AI Product Workflows",
    level: "BUILDING",
    description:
      "Applying AI to practical SaaS use cases such as document processing, insights, and user assistance.",
    tech: ["Finance AI", "Career AI", "Insights", "SaaS AI"],
  },
];

export default function AISkillsTab() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#131b2e]/70 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3
            className={`${montserrat.className} text-[28px] font-[700] tracking-[-0.04em] text-[#edf2ff] sm:text-[32px] lg:text-[38px]`}
          >
            AI & LLM Engineering
          </h3>

          <p
            className={`${inter.className} mt-3 max-w-3xl text-[15px] leading-[1.8] text-[#8b90a0] sm:text-[16px] lg:text-[17px]`}
          >
            Exploring and building AI-powered product workflows using OpenAI,
            LLMs, RAG concepts, embeddings, and intelligent document-based
            experiences.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-2">
          <CheckCircle2 size={16} className="text-cyan-300" />

          <span
            className={`${jetbrainsMono.className} text-[11px] uppercase tracking-[0.12em] text-cyan-300`}
          >
            AI-Native Product Focus
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {aiSkills.map((skill) => (
          <div
            key={skill.title}
            className="group rounded-2xl border border-white/8 bg-[#1a2338]/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#1e2942] sm:p-6"
          >
            <div className="mb-5 flex items-start justify-between">
              <div className="text-cyan-300">{skill.icon}</div>

              <span
                className={`${jetbrainsMono.className} rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-cyan-300`}
              >
                {skill.level}
              </span>
            </div>

            <h4
              className={`${montserrat.className} mb-4 text-[20px] font-[600] tracking-[-0.03em] text-[#edf2ff]`}
            >
              {skill.title}
            </h4>

            <p
              className={`${inter.className} mb-6 text-[14px] leading-[1.8] text-[#8f9ab3] sm:text-[15px]`}
            >
              {skill.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {skill.tech.map((item) => (
                <span
                  key={item}
                  className={`${jetbrainsMono.className} rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.08em] text-[#b8c4dd]`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "社群平台用戶數據分析平台 SOCIAL INSIGHT",
    description:
      "結合爬蟲技術、AI 模型與自動化流程的社群使用者分析系統。透過 FastAPI 呼叫後台爬蟲（Playwright）取得 X（Twitter）公開資料，並透過 n8n 與本地 Ollama 亦或是 OpenRouter LLM Models 進行使用者特徵分析，最終將結果回傳前端即時展示。",
    tags: ["Python", "FastAPI", "n8n", "Ollama", "Playwright"],
    stats: ["X(Twitter)", "多模型支持"],
    video: "/assets/social_insight_demo.mp4",
    logo: "/assets/logo2.png",
  },
];

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            專案實例
          </h2>
          <p className="text-zinc-500">實際解決問題的技術方案</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <article
                key={project.title}
                className="rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-colors overflow-hidden"
              >
                <div className="p-8 flex flex-col md:flex-row gap-8 items-start">
                  {/* Logo */}
                  <div className="w-20 h-20 shrink-0 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-white leading-snug">
                        {project.title}
                      </h3>
                      <a
                        href="#"
                        className="text-zinc-500 hover:text-blue-400 transition-colors shrink-0"
                        aria-label="查看專案"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      {project.stats.map((s) => (
                        <span key={s}>· {s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expand toggle */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-center gap-2 py-3 border-t border-zinc-800 text-sm text-zinc-500 hover:text-blue-400 hover:bg-zinc-800/50 transition-all"
                >
                  <span>{isOpen ? "收起影片" : "展開 Demo 影片"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Video expand */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0">
                    <video
                      controls
                      className="w-full max-h-96 rounded-lg border border-zinc-800 bg-zinc-950"
                    >
                      <source src={project.video} type="video/mp4" />
                      您的瀏覽器不支援影片播放
                    </video>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

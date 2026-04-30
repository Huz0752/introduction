"use client";

import { useEffect, useRef, useState } from "react";

const languages = [
  { name: "Python", level: 95, desc: "數據處理、爬蟲、機器學習" },
  { name: "C++", level: 85, desc: "高性能計算、系統開發" },
  { name: "Golang", level: 70, desc: "AI 模型開發、遊戲算法" },
  { name: "SQL", level: 80, desc: "數據庫操作與優化" },
];

const frameworks = [
  "Scrapy / BeautifulSoup",
  "Selenium / Playwright",
  "Pandas / NumPy",
  "PyTorch / TensorFlow",
  "FastAPI / Flask",
  "Stable Diffusion",
  "PostgreSQL",
  "Docker / Kubernetes",
  "n8n / Apache Airflow",
  "Git / CI/CD",
];

const aiTools = [
  "OpenAI API",
  "LangChain / LlamaIndex",
  "Qdrant (Vector DB)",
  "RAG 系統",
  "提示工程",
  "模型微調",
];

const langStats = [
  { name: "Python", pct: 60, color: "#3b82f6" },
  { name: "C++", pct: 18, color: "#f59e0b" },
  { name: "Go", pct: 7, color: "#10b981" },
  { name: "TypeScript", pct: 12, color: "#8b5cf6" },
  { name: "其他", pct: 3, color: "#52525b" },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative" ref={ref}>
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            技術棧
          </h2>
          <p className="text-zinc-500">構建解決方案的工具與技術</p>
        </div>

        <div className="space-y-6">
          {/* Languages */}
          <div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-8">
              程式語言
            </h3>
            <div className="space-y-6">
              {languages.map(({ name, level, desc }) => (
                <div key={name} className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
                  <span className="font-semibold text-white">{name}</span>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out"
                      style={{ width: animated ? `${level}%` : "0%" }}
                    />
                  </div>
                  <span className="text-xs text-zinc-500 text-right whitespace-nowrap hidden sm:block">
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Frameworks */}
            <div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">
                框架與工具
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-default"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* AI/LLM */}
            <div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">
                AI / LLM 相關
              </h3>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-sm text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub Language Distribution */}
          <div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest">
                GitHub 語言分布
              </h3>
              <a
                href="https://github.com/Huz0752"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                github.com/Huz0752 →
              </a>
            </div>
            <div className="flex h-2.5 rounded-full overflow-hidden mb-4">
              {langStats.map(({ name, pct, color }) => (
                <div
                  key={name}
                  style={{ flex: pct, background: color }}
                  title={`${name} ${pct}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {langStats.map(({ name, pct, color }) => (
                <span key={name} className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                  {name} {pct}%
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

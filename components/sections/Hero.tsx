"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ZoomIn, ZoomOut, RotateCcw, Download } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const tags = ["Python", "C++", "網路爬蟲", "LLM 應用", "n8n 自動化", "數據挖掘"];

function goTab(id: string) {
  window.dispatchEvent(new CustomEvent("navClick", { detail: id }));
  document.getElementById("tabs")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale((s) => Math.min(s + 0.15, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.15, 0.5));
  const reset = () => setScale(1);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center py-20 relative">
        {/* Text */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
              LLM & Automation Engineer
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              伍竣義
            </h1>
            <p className="text-2xl text-zinc-400 font-light">
              數據挖掘 · 爬蟲 · 自動化
            </p>
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
            將數據轉化為洞察，構建智能自動化系統。專精於
            <span className="text-blue-400"> Python</span>、
            <span className="text-blue-400">C++</span>、
            <span className="text-blue-400">LLM</span> 技術與
            <span className="text-blue-400"> n8n</span>，
            提供高效的數據採集、處理與應用解決方案。
          </p>

          <div className="flex items-center gap-3">
            <p className="text-zinc-500 text-sm">
              🎓 國立台灣科技大學 資訊工程學系
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => goTab("portfolio")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/25"
            >
              查看專案實例
            </button>
            <button
              onClick={() => goTab("contact")}
              className="px-6 py-3 border border-zinc-700 hover:border-blue-500 text-zinc-300 hover:text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              技術諮詢
            </button>
            <a
              href="/assets/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-blue-500/40 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={15} />
              下載履歷
            </a>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://github.com/Huz0752"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="mailto:ja19991205@gmail.com"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div
              className={`w-64 h-64 rounded-full overflow-hidden border-2 border-zinc-700 ring-4 ring-blue-500/10 shadow-2xl shadow-blue-900/20 ${scale > 1 ? "cursor-zoom-out" : "cursor-zoom-in"}`}
              title="使用下方按鈕縮放頭像"
            >
              <Image
                src="/assets/bio-M8ICmca8.jpg"
                alt="伍竣義"
                width={256}
                height={256}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ transform: `scale(${scale})` }}
                priority
              />
            </div>
            {/* Status badge */}
            <div className="group absolute bottom-3 right-3">
              <div className="w-8 h-8 rounded-full bg-yellow-600 border-4 border-zinc-950 flex items-center justify-center shadow-lg cursor-default">
                <span className="w-3 h-3 rounded-full bg-yellow-300 animate-pulse" />
              </div>
              <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-zinc-800 border border-zinc-700 text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                  ● Pending Offer
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-600">
            {scale === 1 ? "可縮放查看頭像細節" : `${Math.round(scale * 100)}%`}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-2 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="縮小"
            >
              <ZoomOut size={16} />
            </button>
            <button
              onClick={reset}
              className="p-2 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white transition-all"
              aria-label="還原"
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={zoomIn}
              disabled={scale >= 2.5}
              className="p-2 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="放大"
            >
              <ZoomIn size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

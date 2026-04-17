"use client";

import { useState } from "react";
import { Mail, Code2, Send } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ projectType: "", name: "", email: "", message: "" });

  const placeholders: Record<string, string> = {
    crawler: "請提供目標網站 URL、需要抓取的數據類型、更新頻率等詳細信息。",
    automation: "請描述當前工作流程、希望自動化的環節、使用的工具/平台等。",
    llm: "請說明應用場景、需要的功能、現有數據/知識庫情況等。",
    analysis: "請描述數據來源、分析目標、期望的輸出格式等。",
    other: "請詳細描述您的需求或遇到的技術問題。",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("目前因 GitHub Pages 限制，聯繫功能尚未實現。");
    setForm({ projectType: "", name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            技術合作與諮詢
          </h2>
          <p className="text-zinc-500">歡迎討論數據挖掘、自動化或 AI 相關項目</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-6">
            <a
              href="mailto:ja19991205@gmail.com"
              className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <Mail size={18} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-0.5">電子郵件</p>
                <p className="text-sm text-zinc-400">ja19991205@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/Huz0752"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <GithubIcon size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-0.5">GitHub</p>
                <p className="text-sm text-zinc-400">github.com/Huz0752</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Code2 size={18} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-0.5">技術專長</p>
                <p className="text-sm text-zinc-400">
                  AI 數據挖掘 · 自動化流程 · LLM 應用
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-xl bg-zinc-900 border border-zinc-800 space-y-5"
          >
            <h3 className="text-lg font-semibold text-white">項目諮詢</h3>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-400">項目類型</label>
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none"
              >
                <option value="">選擇項目類型</option>
                <option value="crawler">網路爬蟲開發</option>
                <option value="automation">自動化流程設計</option>
                <option value="llm">LLM/AI 應用開發</option>
                <option value="analysis">數據分析與挖掘</option>
                <option value="other">其他技術諮詢</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-400">姓名 / 公司</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-400">聯繫郵箱</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-400">項目描述或需求</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={
                  form.projectType
                    ? placeholders[form.projectType]
                    : "請簡要描述您的項目需求..."
                }
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/25"
            >
              <Send size={16} />
              發送諮詢
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

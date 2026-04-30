"use client";

import { useState } from "react";
import { ExternalLink, Layers, Cpu, Sparkles, Play } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

type Tab = "overview" | "architecture" | "features" | "demo";

interface ArchLayer {
  name: string;
  tech: string;
  desc: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Project {
  title: string;
  subtitle: string;
  status: string;
  year: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  highlights: { label: string; value: string }[];
  architecture: {
    layers: ArchLayer[];
    keyDecisions: string[];
  };
  features: Feature[];
  video?: string;
  logo: string;
  github: string | null;
  demo: string | null;
}

const projects: Project[] = [
  {
    title: "社群平台用戶數據分析平台",
    subtitle: "SOCIAL INSIGHT",
    status: "已完成",
    year: "2025",
    description:
      "結合爬蟲技術、AI 模型與自動化流程的社群使用者分析系統。透過 FastAPI 呼叫後台爬蟲（Playwright）取得 X（Twitter）公開資料，並透過 n8n 與本地 Ollama 亦或是 OpenRouter LLM Models 進行使用者特徵分析，最終將結果回傳前端即時展示。",
    problem:
      "社群媒體上的用戶行為分析通常需要大量人工操作，缺乏自動化工具，且無法快速切換不同 AI 模型進行比對分析。",
    solution:
      "設計一套從資料擷取到 AI 分析的全自動化流水線，支援本地與雲端 LLM 彈性切換，讓非技術用戶也能一鍵獲得深度用戶洞察。",
    tags: ["Python", "FastAPI", "n8n", "Ollama", "Playwright", "OpenRouter"],
    highlights: [
      { label: "資料來源", value: "X (Twitter)" },
      { label: "AI 模型", value: "多 LLM 支持" },
      { label: "自動化引擎", value: "n8n Workflow" },
      { label: "爬蟲技術", value: "Playwright" },
    ],
    architecture: {
      layers: [
        {
          name: "前端展示層",
          tech: "React + WebSocket",
          desc: "即時呈現分析結果，無需手動刷新頁面",
        },
        {
          name: "API Gateway",
          tech: "FastAPI（非同步）",
          desc: "統一 API 入口，協調爬蟲與 AI 分析服務，高並發不阻塞",
        },
        {
          name: "爬蟲引擎",
          tech: "Playwright",
          desc: "模擬真實瀏覽器行為，穩定擷取 X 平台公開用戶資料",
        },
        {
          name: "AI 分析流水線",
          tech: "n8n + Ollama / OpenRouter",
          desc: "可視化工作流編排，本地與雲端 LLM 一鍵切換",
        },
      ],
      keyDecisions: [
        "選用 n8n 作為 AI 工作流編排工具，讓分析邏輯可以圖形化調整，降低迭代成本",
        "同時支援本地 Ollama 與雲端 OpenRouter，本地模式保護資料隱私，雲端模式提升分析品質",
        "FastAPI 非同步架構確保多用戶同時觸發爬蟲任務時系統穩定不崩潰",
      ],
    },
    features: [
      {
        icon: "🔍",
        title: "智能爬蟲擷取",
        desc: "Playwright 模擬真實瀏覽器行為，有效應對反爬蟲機制，穩定取得 X 平台公開用戶貼文與互動資料。",
      },
      {
        icon: "🤖",
        title: "多 LLM 模型分析",
        desc: "支援 Ollama 本地部署模型（llama3、gemma 等）與 OpenRouter 雲端模型，可依需求靈活切換，比對不同模型分析結果。",
      },
      {
        icon: "⚡",
        title: "即時結果回傳",
        desc: "分析完成後透過 WebSocket 即時推送至前端，用戶無需輪詢等待，體驗流暢。",
      },
      {
        icon: "🔄",
        title: "全自動化流程",
        desc: "n8n 工作流一鍵觸發完整分析流程——從爬蟲、資料清洗到 LLM 推論——零手動介入。",
      },
    ],
    video: "/assets/social_insight_demo.mp4",
    logo: "/assets/logo2.png",
    github: null,
    demo: null,
  },
  {
    title: "登山社會員管理系統",
    subtitle: "HIKING CRM",
    status: "已完成",
    year: "2026",
    description:
      "為台南仁愛登山協會打造的全端會員管理平台，整合 Google OAuth 登入、活動報名、候補佇列、分級後台等完整功能，取代傳統 Google 表單作業流程，讓幹部從重複行政中解放。",
    problem:
      "登山社活動報名依賴 Google 表單，資料分散難以管理，無法自動處理候補順序、付款確認、投保名單匯出等繁瑣行政作業。",
    solution:
      "以 Next.js + Supabase 建構完整 CRM，實作 Google 一鍵登入、正取/候補自動佇列、四級權限管理，大幅降低幹部日常作業成本。",
    tags: ["Next.js", "TypeScript", "Supabase", "NextAuth", "PostgreSQL", "SendGrid"],
    highlights: [
      { label: "認證方式", value: "Google OAuth" },
      { label: "資料庫", value: "Supabase PostgreSQL" },
      { label: "權限層級", value: "4 級角色" },
      { label: "報名系統", value: "正取 / 候補自動" },
    ],
    architecture: {
      layers: [
        {
          name: "前端介面",
          tech: "Next.js 16 App Router",
          desc: "公開首頁（公告/活動/報名）、會員中心、管理後台，共用元件架構",
        },
        {
          name: "認證層",
          tech: "NextAuth + Google OAuth",
          desc: "Google 一鍵登入，首次登入自動建立會員記錄，全局 SessionProvider 管理狀態",
        },
        {
          name: "API 層",
          tech: "Next.js Route Handlers",
          desc: "所有資料操作走 API Route，使用 service role key 繞過 RLS，確保安全存取",
        },
        {
          name: "資料庫",
          tech: "Supabase PostgreSQL",
          desc: "members / events / registrations / announcements 四大資料表，ON DELETE CASCADE 維持一致性",
        },
      ],
      keyDecisions: [
        "API Route 統一走 service role key，前端不直接接觸敏感資料，安全性與 RLS 彈性並存",
        "報名邏輯在伺服器端計算正取/候補，避免前端競態條件造成名額超賣",
        "Google OAuth 整合 NextAuth，降低登入門檻，首次登入自動建立並同步會員資料",
      ],
    },
    features: [
      {
        icon: "🔐",
        title: "Google 一鍵登入",
        desc: "整合 NextAuth Google OAuth，首次登入自動建立會員檔案，無需手動註冊，舊會員自動更新活躍時間。",
      },
      {
        icon: "📋",
        title: "智能報名佇列",
        desc: "報名時自動判斷正取/候補，跨個人與團體報名合併計算名額，支援取消報名後自動遞補。",
      },
      {
        icon: "👑",
        title: "四級權限管理",
        desc: "一般會員、幹部、管理員、超級管理員分級授權，管理後台支援活動 CRUD、報名審核、付款確認。",
      },
      {
        icon: "📤",
        title: "行政自動化",
        desc: "QR Code 簽到碼一鍵產生、投保名單 CSV 匯出、SendGrid 郵件通知，大幅減少幹部重複作業。",
      },
    ],
    logo: "",
    github: null,
    demo: "https://hiking-crm.vercel.app/",
  },
];

const BASE_TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "overview", label: "專案概覽", icon: Sparkles },
  { id: "architecture", label: "技術架構", icon: Layers },
  { id: "features", label: "主要功能", icon: Cpu },
];

function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const tabs = project.video
    ? [...BASE_TABS, { id: "demo" as Tab, label: "Demo 影片", icon: Play }]
    : BASE_TABS;

  return (
    <article className="rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-colors overflow-hidden">
      {/* Card Header */}
      <div className="p-8 flex flex-col sm:flex-row gap-6 items-start border-b border-zinc-800">
        <div className="w-16 h-16 shrink-0 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
          {project.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.logo}
              alt={project.title}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <span className="text-xl font-bold text-zinc-400">
              {project.subtitle.charAt(0)}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-1">
                {project.subtitle}
              </p>
              <h3 className="text-lg font-bold text-white leading-snug">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-blue-400 hover:bg-zinc-800 transition-all"
                  aria-label="外部連結"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              <span className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                {project.status}
              </span>
              <span className="text-xs text-zinc-600">{project.year}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium bg-zinc-800 text-zinc-400 rounded border border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Nav */}
      <div className="flex border-b border-zinc-800 overflow-x-auto scrollbar-none">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
              activeTab === id
                ? "border-blue-500 text-blue-400 bg-blue-500/5"
                : "border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl bg-zinc-800/60 border border-zinc-700/60 p-4 text-center"
                >
                  <p className="text-white font-semibold text-sm mb-1">{h.value}</p>
                  <p className="text-zinc-500 text-xs">{h.label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-zinc-800/40 border border-zinc-700/50 p-5 space-y-2">
                <p className="text-xs font-semibold tracking-widest text-red-400/80 uppercase">
                  問題
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div className="rounded-xl bg-zinc-800/40 border border-zinc-700/50 p-5 space-y-2">
                <p className="text-xs font-semibold tracking-widest text-green-400/80 uppercase">
                  解決方案
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                系統分層架構
              </p>
              {project.architecture.layers.map((layer, i) => (
                <div key={layer.name} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                      <span className="text-blue-400 text-xs font-bold">{i + 1}</span>
                    </div>
                    {i < project.architecture.layers.length - 1 && (
                      <div className="w-px h-6 bg-zinc-700 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-white text-sm font-semibold">{layer.name}</span>
                      <span className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400 rounded border border-zinc-700">
                        {layer.tech}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-zinc-800/40 border border-zinc-700/50 p-5 space-y-3">
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                關鍵設計決策
              </p>
              <ul className="space-y-2.5">
                {project.architecture.keyDecisions.map((d, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-400">
                    <span className="text-blue-400 shrink-0 mt-0.5">→</span>
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid sm:grid-cols-2 gap-5">
            {project.features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl bg-zinc-800/50 border border-zinc-700/60 p-5 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{f.icon}</span>
                  <h4 className="text-white font-semibold text-sm">{f.title}</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "demo" && project.video && (
          <div className="space-y-4">
            <p className="text-zinc-500 text-sm">實際操作展示影片，包含完整分析流程演示。</p>
            <video
              controls
              className="w-full max-h-[480px] rounded-xl border border-zinc-800 bg-zinc-950"
            >
              <source src={project.video} type="video/mp4" />
              您的瀏覽器不支援影片播放
            </video>
          </div>
        )}

      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">專案實例</h2>
          <p className="text-zinc-500">實際解決問題的技術方案</p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Network, Brain, Cog, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ExpertiseItem {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const expertise: ExpertiseItem[] = [
  {
    icon: Network,
    title: "智能網路爬蟲",
    items: [
      "反爬蟲策略繞過與模擬",
      "分散式與異步爬蟲架構",
      "JavaScript 渲染頁面抓取",
      "API 逆向工程與數據採集",
      "數據質量驗證與清洗",
    ],
  },
  {
    icon: Brain,
    title: "LLM 應用開發",
    items: [
      "GPT 系列模型應用開發",
      "RAG（檢索增強生成）系統",
      "智能客服與對話系統",
      "文檔解析與智能問答",
      "提示工程與模型微調",
    ],
  },
  {
    icon: Cog,
    title: "自動化流程",
    items: [
      "n8n 工作流設計與部署",
      "跨平台數據管道構建",
      "定時任務與監控告警",
      "API 集成與第三方服務對接",
      "企業級自動化解決方案",
    ],
  },
  {
    icon: BarChart3,
    title: "數據分析與挖掘",
    items: [
      "結構化與非結構化數據處理",
      "模式識別與趨勢分析",
      "機器學習模型應用",
      "可視化報表與儀表板",
      "商業洞察提取",
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Core Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            核心專業領域
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            專注於數據價值鏈的關鍵環節
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div className="mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

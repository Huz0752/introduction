import { Briefcase, Calendar } from "lucide-react";

interface Job {
  company: string;
  role: string;
  period: string;
  duration: string;
  collab?: string;
  tags: string[];
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "鈊象電子股份有限公司",
    role: "產學合作小組成員",
    period: "2022/01 – 2023/06",
    duration: "1 年 6 個月",
    collab: "國立臺灣科技大學 × 鈊象電子 產學合作案",
    tags: ["Golang", "AI", "Stable Diffusion", "CFR"],
    bullets: [
      "使用 Golang 建構德州撲克 AI 機器人，實作 CFR（反事實後悔最小化）演算法進行策略訓練與數據分析",
      "建立 Stable Diffusion 操作技術文件，作為 AI 圖像生成規範，與美術部門協作對接工作流程",
    ],
  },
  {
    company: "國立雲林科技大學",
    role: "宿舍網路管理員",
    period: "2020/09 – 2021/06",
    duration: "10 個月",
    tags: ["Node.js", "Vue3", "網路管理", "CTF"],
    bullets: [
      "負責全棟宿舍網路疑難排解，處理學生連線問題與硬體設備維護",
      "使用 Vue3 維護宿網前端管理介面，具備前端開發與資安應用實務經驗",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Work Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">工作經歷</h2>
          <p className="text-zinc-500">產學合作與技術實務</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.company} className="md:pl-16 relative">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-blue-600 border-2 border-zinc-950 hidden md:block" />

                <div className="p-6 md:p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-blue-400 shrink-0" />
                        <span className="text-xs text-blue-400 font-medium">{job.role}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                      {job.collab && (
                        <p className="text-xs text-zinc-500 mt-0.5">{job.collab}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <Calendar size={11} />
                        {job.period}
                      </span>
                      <span className="text-xs text-zinc-600">{job.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

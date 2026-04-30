const cards = [
  {
    icon: "🤖",
    title: "LLM 應用落地",
    desc: "RAG、Agent、知識庫整合，從 0 到生產環境",
    tags: ["LangChain", "OpenAI", "Qdrant"],
  },
  {
    icon: "⚙️",
    title: "流程自動化",
    desc: "n8n + Python，把重複人工流程變成自動管道",
    tags: ["n8n", "Python", "FastAPI"],
  },
  {
    icon: "🕷️",
    title: "數據採集系統",
    desc: "大規模爬蟲，反爬對抗，結構化輸出至資料庫",
    tags: ["Scrapy", "Selenium", "Pandas"],
  },
];

export default function ValueProp() {
  return (
    <section className="py-16 border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 space-y-2">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase">
            Why Hire Me
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            我能為你解決的問題
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(({ icon, title, desc, tags }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-colors text-center space-y-4"
            >
              <div className="text-4xl">{icon}</div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </div>
              <div className="flex gap-2 justify-center flex-wrap">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

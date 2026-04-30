const articles = [
  {
    title: "RAG 系統設計：從 Naive Retrieval 到 Advanced Pipeline",
    platform: "Medium",
    date: "2025-03",
    url: "#",
    tags: ["LLM", "RAG"],
  },
  {
    title: "n8n + GPT：讓客服回覆自動化的實戰筆記",
    platform: "HackMD",
    date: "2024-11",
    url: "#",
    tags: ["自動化", "n8n"],
  },
];

export default function Articles() {
  return (
    <section id="articles" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Writing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            技術文章
          </h2>
          <p className="text-zinc-500">分享 LLM、自動化與數據工程的實戰心得</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {articles.map(({ title, platform, date, url, tags }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex gap-2 mb-2 flex-wrap">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-white leading-snug mb-1 line-clamp-2">
                  {title}
                </p>
                <p className="text-xs text-zinc-500">
                  {date} · {platform}
                </p>
              </div>
              <span className="text-blue-400 text-lg shrink-0 group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>
          ))}

          <div className="p-5 rounded-xl border border-dashed border-zinc-700 text-center text-sm text-zinc-600">
            更多文章即將發布...
          </div>
        </div>
      </div>
    </section>
  );
}

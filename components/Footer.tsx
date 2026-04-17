import { Mail } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <p className="text-2xl font-bold text-white">伍竣義</p>
        <p className="text-sm text-zinc-500 italic text-center">
          將數據轉化為價值，用自動化釋放生產力
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Huz0752"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all"
          >
            <Mail size={15} />
            聯繫
          </a>
        </div>
        <div className="flex flex-col items-center gap-1 text-xs text-zinc-600">
          <p>© {year} 伍竣義. 保留所有權利。</p>
          <p>本網站使用 Next.js + Tailwind CSS 構建</p>
        </div>
      </div>
    </footer>
  );
}

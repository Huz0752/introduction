"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors"
        >
          伍竣義
        </a>
        <a
          href="mailto:ja19991205@gmail.com"
          className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/25"
        >
          立即聯繫
        </a>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "專業領域", href: "#expertise" },
  { label: "專案", href: "#portfolio" },
  { label: "技術", href: "#tech" },
  { label: "工作經歷", href: "#work" },
  { label: "證照", href: "#certifications" },
  { label: "經歷", href: "#experiences" },
  { label: "聯繫", href: "#contact" },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string, close?: () => void) {
  e.preventDefault();
  const id = href.slice(1);
  window.dispatchEvent(new CustomEvent("navClick", { detail: id }));
  document.getElementById("tabs")?.scrollIntoView({ behavior: "smooth" });
  close?.();
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "expertise", "portfolio", "tech", "work", "certifications", "experiences", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("scroll", close, { once: true, passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors shrink-0"
        >
          伍竣義
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:ja19991205@gmail.com"
            className="hidden md:inline-flex px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/25"
          >
            立即聯繫
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
            aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 space-y-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href, () => setMobileOpen(false))}
                className={`block px-3 py-2 text-sm rounded-md transition-all ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="mailto:ja19991205@gmail.com"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 px-4 py-2 text-sm text-center bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
          >
            立即聯繫
          </a>
        </div>
      </div>
    </nav>
  );
}

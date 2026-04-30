"use client";

import { useState, useEffect } from "react";
import { Layers, FolderOpen, Code2, Clock, Mail, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Expertise from "@/components/sections/Expertise";
import Portfolio from "@/components/sections/Portfolio";
import TechStack from "@/components/sections/TechStack";
import ExperienceTab from "@/components/sections/ExperienceTab";
import Contact from "@/components/sections/Contact";
import Articles from "@/components/sections/Articles";

type TabKey = "expertise" | "portfolio" | "tech" | "experience" | "articles" | "contact";

interface Tab {
  key: TabKey;
  label: string;
  icon: LucideIcon;
}

const tabs: Tab[] = [
  { key: "expertise", label: "專業領域", icon: Layers },
  { key: "portfolio", label: "專案實例", icon: FolderOpen },
  { key: "tech", label: "技術棧", icon: Code2 },
  { key: "experience", label: "工作與經歷", icon: Clock },
  // { key: "articles", label: "文章", icon: BookOpen },
  { key: "contact", label: "聯繫", icon: Mail },
];

const HASH_TO_TAB: Record<string, TabKey> = {
  expertise: "expertise",
  portfolio: "portfolio",
  tech: "tech",
  work: "experience",
  certifications: "experience",
  experiences: "experience",
  articles: "articles",
  contact: "contact",
};

const HASH_TO_SUBTAB: Record<string, string> = {
  work: "work",
  certifications: "certs",
  experiences: "others",
};

export default function TabsSection() {
  const [active, setActive] = useState<TabKey>("expertise");
  const [opacity, setOpacity] = useState(1);
  const [pendingSubTab, setPendingSubTab] = useState<string | null>(null);

  const switchTab = (key: TabKey) => {
    if (key === active) return;
    setOpacity(0);
    setTimeout(() => {
      setActive(key);
      setOpacity(1);
    }, 200);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const tabKey = HASH_TO_TAB[id];
      if (!tabKey) return;
      setPendingSubTab(HASH_TO_SUBTAB[id] ?? null);
      if (tabKey === active) return;
      setOpacity(0);
      setTimeout(() => {
        setActive(tabKey);
        setOpacity(1);
      }, 200);
    };
    window.addEventListener("navClick", handler);
    return () => window.removeEventListener("navClick", handler);
  }, [active]);

  return (
    <div id="tabs" className="border-t border-zinc-800 min-h-screen">
      {/* Sticky tab bar */}
      <div className="sticky top-16 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mb-px">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => switchTab(key)}
                className={`
                  flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap
                  border-b-2 transition-all duration-200 shrink-0
                  ${active === key
                    ? "text-white border-blue-500"
                    : "text-zinc-500 border-transparent hover:text-zinc-300 hover:border-zinc-700"
                  }
                `}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content with fade transition */}
      <div style={{ opacity, transition: "opacity 0.2s ease" }}>
        {active === "expertise" && <Expertise />}
        {active === "portfolio" && <Portfolio />}
        {active === "tech" && <TechStack />}
        {active === "experience" && <ExperienceTab targetSubTab={pendingSubTab} />}
        {/* {active === "articles" && <Articles />} */}
        {active === "contact" && <Contact />}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Layers, FolderOpen, Code2, Clock, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Expertise from "@/components/sections/Expertise";
import Portfolio from "@/components/sections/Portfolio";
import TechStack from "@/components/sections/TechStack";
import ExperienceTab from "@/components/sections/ExperienceTab";
import Contact from "@/components/sections/Contact";

type TabKey = "expertise" | "portfolio" | "tech" | "experience" | "contact";

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
  { key: "contact", label: "聯繫", icon: Mail },
];

function TabContent({ active }: { active: TabKey }) {
  switch (active) {
    case "expertise":   return <Expertise />;
    case "portfolio":   return <Portfolio />;
    case "tech":        return <TechStack />;
    case "experience":  return <ExperienceTab />;
    case "contact":     return <Contact />;
  }
}

export default function TabsSection() {
  const [active, setActive] = useState<TabKey>("expertise");
  const [opacity, setOpacity] = useState(1);

  const switchTab = (key: TabKey) => {
    if (key === active) return;
    setOpacity(0);
    setTimeout(() => {
      setActive(key);
      setOpacity(1);
    }, 200);
  };

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
        <TabContent active={active} />
      </div>
    </div>
  );
}

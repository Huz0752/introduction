"use client";

import { useState, useEffect } from "react";
import { Briefcase, Award, Trophy } from "lucide-react";
import WorkExperience from "@/components/sections/WorkExperience";
import Certifications from "@/components/sections/Certifications";
import Experiences from "@/components/sections/Experiences";

type SubTab = "work" | "certs" | "others";

const subTabs: { key: SubTab; label: string; icon: React.ElementType }[] = [
  { key: "work", label: "工作經歷", icon: Briefcase },
  { key: "certs", label: "證照", icon: Award },
  { key: "others", label: "其他經歷", icon: Trophy },
];

interface Props {
  targetSubTab?: string | null;
}

export default function ExperienceTab({ targetSubTab }: Props) {
  const [active, setActive] = useState<SubTab>("work");

  useEffect(() => {
    if (targetSubTab === "work" || targetSubTab === "certs" || targetSubTab === "others") {
      setActive(targetSubTab);
    }
  }, [targetSubTab]);
  const [opacity, setOpacity] = useState(1);

  const switchTab = (key: SubTab) => {
    if (key === active) return;
    setOpacity(0);
    setTimeout(() => {
      setActive(key);
      setOpacity(1);
    }, 180);
  };

  return (
    <div>
      {/* Sub-tab pill bar */}
      <div className="flex gap-2 max-w-6xl mx-auto px-6 pt-10 pb-2">
        {subTabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => switchTab(key)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              active === key
                ? "bg-blue-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
            }`}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
      </div>

      {/* Sub-tab content */}
      <div style={{ opacity, transition: "opacity 0.18s ease" }}>
        {active === "work" && <WorkExperience />}
        {active === "certs" && <Certifications />}
        {active === "others" && <Experiences />}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Trophy, Users, Calendar, MapPin } from "lucide-react";
import Modal from "@/components/ui/Modal";

interface Experience {
  img: string;
  alt: string;
  title: string;
  type: string;
  org: string;
  desc: string;
  date: string;
  location: string;
  icon: "trophy" | "users";
}

const experiences: Experience[] = [
  {
    img: "/assets/YTP-BaVLU7M_.jpg",
    alt: "YTP比賽",
    title: "YTP2019 少年圖靈比賽",
    type: "比賽經歷",
    org: "複賽　最終排名 22",
    desc: "在競程中通過初選後，最後的 88 隊要拚出最後的勝負。",
    date: "2019 年",
    location: "台北",
    icon: "trophy",
  },
  {
    img: "/assets/test-FwaSVZl9.jpg",
    alt: "小論文",
    title: "2018 高雄市小論文自然組",
    type: "比賽經歷",
    org: "第 1 名",
    desc: "實作 IOT 溫溼度感測後，投了小論文比賽，取得了第 1 名。",
    date: "2018 年",
    location: "高雄",
    icon: "trophy",
  },
  {
    img: "/assets/TOI-BG5jmCC8.png",
    alt: "TOI",
    title: "臺灣資訊奧林匹亞",
    type: "比賽經歷",
    org: "初選",
    desc: "通過當年的海選，也是該屆唯一的初選高職生，學習到了人外有人天外有天的世界。",
    date: "2018 年",
    location: "台北",
    icon: "trophy",
  },
  {
    img: "/assets/M-0d09wA7k.jpg",
    alt: "雲科網管",
    title: "國立雲林科技大學宿網管",
    type: "學習經歷",
    org: "CTF 的啟蒙",
    desc: "處理各種學生宿舍內的網路疑難雜症，使用 Vue 維護前端網頁，以及資安網路相關應用。",
    date: "2020 年",
    location: "雲林",
    icon: "users",
  },
  {
    img: "/assets/chiba_eiwa01-CZKnsmiD.jpg",
    alt: "日本交流",
    title: "高雄市小論文日本高校學術交流",
    type: "學術交流",
    org: "日本千葉英和高校",
    desc: "受高雄市政府邀約，與日本學生交流並上台口頭報告，訓練英文報告能力，也是開始學習日文動力之一。",
    date: "2019 年",
    location: "日本",
    icon: "users",
  },
];

export default function Experiences() {
  const [selected, setSelected] = useState<Experience | null>(null);

  return (
    <>
      <section id="experiences" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">Experiences</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">其他經歷</h2>
          <p className="text-zinc-500">競賽、學術與社群參與</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all hover:-translate-y-1 cursor-pointer flex flex-col"
              onClick={() => setSelected(exp)}
            >
              <div className="relative h-40 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.img}
                  alt={exp.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  {exp.icon === "trophy" ? (
                    <Trophy size={14} className="text-white" />
                  ) : (
                    <Users size={14} className="text-white" />
                  )}
                </div>
                <span className="absolute bottom-3 left-3 px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full">
                  {exp.type}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-medium text-white text-sm leading-snug mb-1">
                  {exp.title}
                </h4>
                <p className="text-xs text-blue-400 mb-2">{exp.org}</p>
                <p className="text-xs text-zinc-500 flex-1 line-clamp-2">{exp.desc}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-zinc-600">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {exp.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
      >
        {selected && (
          <div className="space-y-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selected.img}
              alt={selected.alt}
              className="w-full h-56 object-cover rounded-xl"
            />
            <div className="space-y-2">
              <span className="px-2.5 py-1 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                {selected.type}
              </span>
              <p className="text-base font-medium text-white">{selected.org}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{selected.desc}</p>
              <div className="flex items-center gap-4 text-sm text-zinc-500 pt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {selected.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {selected.location}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

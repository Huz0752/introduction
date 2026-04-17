"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import Modal from "@/components/ui/Modal";

interface Cert {
  img: string;
  alt: string;
  title: string;
  issuer: string;
  date: string;
}

const certs: Cert[] = [
  {
    img: "/assets/CPE-CTOiNCLW.jpg",
    alt: "CPE",
    title: "CPE 大學生能力程式檢定",
    issuer: "CPE5 題　排名 21",
    date: "2020 年 12 月",
  },
  {
    img: "/assets/MTA-Bvd531at.png",
    alt: "MTA",
    title: "MTA 認證",
    issuer: "Microsoft Technology Associate",
    date: "2018 年 12 月",
  },
  {
    img: "/assets/C2-5oxL8sB6.png",
    alt: "丙軟",
    title: "丙級電腦軟體應用",
    issuer: "丙級電腦軟體應用",
    date: "2017 年 12 月",
  },
  {
    img: "/assets/C1-BTuMRODF.png",
    alt: "丙設",
    title: "丙級電腦軟體設計",
    issuer: "丙級軟體設計",
    date: "2019 年 10 月",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <>
      <section id="certifications" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">專業證照</h2>
          <p className="text-zinc-500">技術能力的正式認證</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all hover:-translate-y-1"
            >
              <div
                className="relative h-44 bg-zinc-800 cursor-pointer overflow-hidden"
                onClick={() => setSelected(cert)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.img}
                  alt={cert.alt}
                  className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={28} className="text-white" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-white text-sm leading-snug mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-zinc-500 mb-0.5">{cert.issuer}</p>
                <p className="text-xs text-zinc-600">{cert.date}</p>
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
          <div className="space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selected.img}
              alt={selected.alt}
              className="w-full max-h-[60vh] object-contain rounded-lg bg-zinc-800 p-4"
            />
            <div className="space-y-1">
              <p className="text-sm text-zinc-400">{selected.issuer}</p>
              <p className="text-sm text-zinc-500">{selected.date}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

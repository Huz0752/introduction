import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "伍竣義 — AI 數據工程師",
  description:
    "專注於 AI 數據挖掘、網路爬蟲、LLM 應用與自動化流程的開發者。使用 Python 與 C++ 構建智能數據解決方案。",
  keywords: ["AI數據挖掘", "網路爬蟲", "Python", "LLM應用", "n8n自動化"],
  icons: { icon: "/assets/bird-D4n8ZKEo.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body
        className={`${geist.variable} ${notoSansTC.variable} font-sans antialiased bg-zinc-950 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}

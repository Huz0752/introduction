# CLAUDE.md

本檔案提供 Claude Code (claude.ai/code) 在此專案中工作時的指引。

## 專案概覽

伍竣義的個人作品集網站，部署於 **Vercel**。使用 Next.js App Router + TypeScript + Tailwind CSS v4 構建，深色極簡風格（黑底 + 藍色 accent）。

## 技術棧

| 技術 | 版本 | 備註 |
|------|------|------|
| Next.js | 16.2.4 | App Router，靜態輸出 |
| React | 19 | |
| TypeScript | 5 | strict mode |
| Tailwind CSS | v4 | **無 tailwind.config.ts**，純 CSS 設定 |
| lucide-react | 最新 | 圖示庫（無 GitHub brand icon，見下方說明） |

## 開發方式

```bash
npm run dev    # 啟動開發伺服器 http://localhost:3000
npm run build  # 生產建置（驗證 TypeScript + 靜態頁面生成）
```

## 架構

### 目錄結構

```
app/
  layout.tsx      — 根 layout：Geist + Noto Sans TC 字型、metadata、深色背景
  page.tsx        — 組合所有 section 元件
  globals.css     — Tailwind v4 import + CSS 自訂屬性（顏色 token）+ 自訂 scrollbar
components/
  Navbar.tsx      — 固定頂部導覽列，帶 Dropdown 群組（技術 & 經歷）
  Footer.tsx      — 頁尾
  ui/
    Modal.tsx     — 通用 Modal（證照 / 經歷圖片預覽）
  sections/
    Hero.tsx          — 全高 Hero，頭像可縮放
    Expertise.tsx     — 4 欄核心專業領域卡片
    Portfolio.tsx     — 可展開影片的專案卡片
    TechStack.tsx     — 語言進度條 + 框架/AI 工具標籤
    WorkExperience.tsx — 時間軸工作經歷（産學合作、宿網管）
    Certifications.tsx — 4 欄證照卡片，點擊開 Modal
    Experiences.tsx   — 3 欄比賽/學術經歷卡片，點擊開 Modal
    Contact.tsx       — 聯繫資訊 + 項目諮詢表單
public/
  assets/         — 靜態資源（圖片含 hash 後綴、影片、favicon）
```

### Section 順序與錨點

```
#home → #expertise → #portfolio → #tech → #work → #certifications → #experiences → #contact
```

## 關鍵模式

### Tailwind CSS v4
無 `tailwind.config.ts`，主題色定義在 `app/globals.css`：
```css
:root {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --accent: #3b82f6;
  --card: #18181b;
  --border: #27272a;
  --muted: #a1a1aa;
}
```

### lucide-react 沒有 GitHub brand icon
`Hero.tsx`、`Contact.tsx`、`Footer.tsx` 各自內嵌 `GithubIcon` inline SVG 元件。**不要**嘗試從 lucide-react import `Github`，它不存在。

### "use client" 指令
需要 React state/effect 的元件頂部加 `"use client"`：
- Hero（頭像縮放 scale state）
- Navbar（scroll state、mobile menu state）
- TechStack（IntersectionObserver 動畫）
- Certifications / Experiences / Contact（Modal state / form state）

### 圖片路徑
`public/assets/` 下的靜態資源皆含 hash 後綴（例如 `bio-M8ICmca8.jpg`），對應 `<Image src="/assets/bio-M8ICmca8.jpg" />`。重新命名前須同步更新元件中的 `src`。

### 卡片設計規範
- 背景：`bg-zinc-900`
- 邊框：`border border-zinc-800`
- Hover 邊框：`hover:border-blue-500/40`（全站統一 `/40`，不用 `/50`）
- 圓角：`rounded-xl`

### 聯繫表單
目前 submit 只顯示 alert，尚未接後端。若要實作，使用 Formspree 或 Resend API（需新增 Route Handler）。

### Modal
`components/ui/Modal.tsx` 為共用元件，接受 `open`、`onClose`、`title`、`children` props。ESC 鍵關閉，背景鎖定 overflow。

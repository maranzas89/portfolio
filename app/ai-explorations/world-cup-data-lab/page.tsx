"use client";

import React, { useEffect, useMemo, useState } from "react";

// =====================================================
// i18n (EN + 简体中文)
// =====================================================
const I18N = {
  en: {
    title: "World Cup Data Lab",
    subtitle: "Lightweight pre-tournament comparison. Model outputs are informational only.",
    language: "Language",
    dark: "Dark",
    light: "Light",
    includeContenders: "Include contenders (non-final)",
    group: "Group",
    all: "All",
    teamA: "Team A",
    teamB: "Team B",
    swap: "Swap",
    searchPlaceholder: "Search team, group, confed…",
    close: "Close",
    tipSearch: 'Tip: search "Group A" / "UEFA" / "Playoff".',
    winDrawLoss: "Win / Draw / Loss",
    modelNote: "Model view (not advice)",
    headToHead: "Head-to-head",
    noH2H: "No recent head-to-head data loaded.",
    rating: "Rating",
    form: "Form",
    gfga: "GF / GA",
    cleanSheets: "Clean Sheets",
    groupLabel: (g: string) => (g === "TBD" ? "Group TBD" : `Group ${g}`),
    status: {
      qualified: "Qualified",
      playoff: "Playoff",
      contending: "Contending",
      tbd: "TBD",
    },
    resultsNone: "No results.",
  },
  zh: {
    title: "世界杯数据实验室",
    subtitle: "赛前轻量级对比工具。模型结果仅供参考。",
    language: "语言",
    dark: "深色",
    light: "浅色",
    includeContenders: "包含候选队伍",
    group: "分组",
    all: "全部",
    teamA: "队伍 A",
    teamB: "队伍 B",
    swap: "交换",
    searchPlaceholder: "搜索 队名 / 分组 / 洲际…",
    close: "关闭",
    tipSearch: '提示：可搜索 "A组 / UEFA / Playoff"。',
    winDrawLoss: "胜 / 平 / 负 概率",
    modelNote: "模型视图（非投注建议）",
    headToHead: "历史交锋",
    noH2H: "暂无历史交锋数据。",
    rating: "评分",
    form: "近况",
    gfga: "进球 / 失球",
    cleanSheets: "零封",
    groupLabel: (g: string) => (g === "TBD" ? "分组待定" : `${g}组`),
    status: {
      qualified: "已出线",
      playoff: "附加赛",
      contending: "候选",
      tbd: "待定",
    },
    resultsNone: "没有匹配结果。",
  },
} as const;

type Lang = keyof typeof I18N;

// =====================================================
// Types
// =====================================================
type WC26Status = "qualified" | "playoff" | "contending" | "tbd";

type Confed = "AFC" | "CAF" | "CONCACAF" | "CONMEBOL" | "OFC" | "UEFA" | "TBD";

type GroupCode =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "TBD";

type Team = {
  id: string;
  name: string;
  code: string;
  confed: Confed;
  wc26Status: WC26Status;
  group: GroupCode;
  rating: number;
  form: { w: number; d: number; l: number };
  gf: number;
  ga: number;
  cs: number;
  styleTags: string[];
};

// =====================================================
// Data
// =====================================================
const TEAMS: Team[] = [
  // Group A
  { id: "mex", name: "Mexico", code: "MX", confed: "CONCACAF", wc26Status: "qualified", group: "A", rating: 1710, form: { w: 5, d: 3, l: 2 }, gf: 15, ga: 10, cs: 3, styleTags: ["Compact"] },
  { id: "kor", name: "Korea Republic", code: "KR", confed: "AFC", wc26Status: "qualified", group: "A", rating: 1700, form: { w: 5, d: 2, l: 3 }, gf: 14, ga: 11, cs: 3, styleTags: ["Press"] },
  { id: "rsa", name: "South Africa", code: "ZA", confed: "CAF", wc26Status: "qualified", group: "A", rating: 1625, form: { w: 4, d: 3, l: 3 }, gf: 12, ga: 11, cs: 3, styleTags: ["Physical"] },
  { id: "uefa-d", name: "UEFA Winner D", code: "🏳️", confed: "UEFA", wc26Status: "playoff", group: "A", rating: 1680, form: { w: 0, d: 0, l: 0 }, gf: 0, ga: 0, cs: 0, styleTags: ["Playoff"] },

  // Group B
  { id: "can", name: "Canada", code: "CA", confed: "CONCACAF", wc26Status: "qualified", group: "B", rating: 1688, form: { w: 5, d: 2, l: 3 }, gf: 16, ga: 12, cs: 2, styleTags: ["Wide"] },
  { id: "sui", name: "Switzerland", code: "CH", confed: "UEFA", wc26Status: "qualified", group: "B", rating: 1740, form: { w: 5, d: 3, l: 2 }, gf: 13, ga: 8, cs: 5, styleTags: ["Structured"] },
  { id: "qat", name: "Qatar", code: "QA", confed: "AFC", wc26Status: "qualified", group: "B", rating: 1605, form: { w: 4, d: 3, l: 3 }, gf: 11, ga: 12, cs: 2, styleTags: ["Technical"] },
  { id: "uefa-a", name: "UEFA Winner A", code: "🏳️", confed: "UEFA", wc26Status: "playoff", group: "B", rating: 1680, form: { w: 0, d: 0, l: 0 }, gf: 0, ga: 0, cs: 0, styleTags: ["Playoff"] },

  // Group C
  { id: "bra", name: "Brazil", code: "BR", confed: "CONMEBOL", wc26Status: "qualified", group: "C", rating: 1980, form: { w: 7, d: 2, l: 1 }, gf: 21, ga: 7, cs: 5, styleTags: ["Creative"] },
  { id: "mar", name: "Morocco", code: "MA", confed: "CAF", wc26Status: "qualified", group: "C", rating: 1750, form: { w: 6, d: 2, l: 2 }, gf: 16, ga: 8, cs: 5, styleTags: ["Transition"] },
  { id: "sco", name: "Scotland", code: "GB", confed: "UEFA", wc26Status: "qualified", group: "C", rating: 1695, form: { w: 4, d: 3, l: 3 }, gf: 12, ga: 12, cs: 3, styleTags: ["Direct"] },
  { id: "hai", name: "Haiti", code: "HT", confed: "CONCACAF", wc26Status: "qualified", group: "C", rating: 1520, form: { w: 3, d: 3, l: 4 }, gf: 10, ga: 14, cs: 2, styleTags: ["Counter"] },

  // Group D
  { id: "usa", name: "United States", code: "US", confed: "CONCACAF", wc26Status: "qualified", group: "D", rating: 1735, form: { w: 6, d: 2, l: 2 }, gf: 18, ga: 9, cs: 4, styleTags: ["High Press"] },
  { id: "aus", name: "Australia", code: "AU", confed: "AFC", wc26Status: "qualified", group: "D", rating: 1660, form: { w: 5, d: 2, l: 3 }, gf: 14, ga: 11, cs: 3, styleTags: ["Physical"] },
  { id: "par", name: "Paraguay", code: "PY", confed: "CONMEBOL", wc26Status: "qualified", group: "D", rating: 1675, form: { w: 4, d: 4, l: 2 }, gf: 11, ga: 9, cs: 4, styleTags: ["Set Pieces"] },
  { id: "uefa-c", name: "UEFA Winner C", code: "🏳️", confed: "UEFA", wc26Status: "playoff", group: "D", rating: 1680, form: { w: 0, d: 0, l: 0 }, gf: 0, ga: 0, cs: 0, styleTags: ["Playoff"] },

  // Group E
  { id: "ger", name: "Germany", code: "DE", confed: "UEFA", wc26Status: "qualified", group: "E", rating: 1890, form: { w: 6, d: 2, l: 2 }, gf: 19, ga: 10, cs: 4, styleTags: ["Control"] },
  { id: "ecu", name: "Ecuador", code: "EC", confed: "CONMEBOL", wc26Status: "qualified", group: "E", rating: 1720, form: { w: 5, d: 3, l: 2 }, gf: 14, ga: 9, cs: 4, styleTags: ["Athletic"] },
  { id: "civ", name: "Côte d'Ivoire", code: "CI", confed: "CAF", wc26Status: "qualified", group: "E", rating: 1685, form: { w: 5, d: 2, l: 3 }, gf: 15, ga: 12, cs: 3, styleTags: ["Wing Play"] },
  { id: "cuw", name: "Curaçao", code: "CW", confed: "CONCACAF", wc26Status: "qualified", group: "E", rating: 1495, form: { w: 3, d: 3, l: 4 }, gf: 9, ga: 13, cs: 2, styleTags: ["Compact"] },

  // Group F
  { id: "ned", name: "Netherlands", code: "NL", confed: "UEFA", wc26Status: "qualified", group: "F", rating: 1905, form: { w: 6, d: 2, l: 2 }, gf: 18, ga: 9, cs: 4, styleTags: ["Wide"] },
  { id: "jpn", name: "Japan", code: "JP", confed: "AFC", wc26Status: "qualified", group: "F", rating: 1780, form: { w: 6, d: 1, l: 3 }, gf: 17, ga: 11, cs: 3, styleTags: ["Quick"] },
  { id: "tun", name: "Tunisia", code: "TN", confed: "CAF", wc26Status: "qualified", group: "F", rating: 1620, form: { w: 4, d: 4, l: 2 }, gf: 10, ga: 8, cs: 5, styleTags: ["Low Block"] },
  { id: "uefa-b", name: "UEFA Winner B", code: "🏳️", confed: "UEFA", wc26Status: "playoff", group: "F", rating: 1680, form: { w: 0, d: 0, l: 0 }, gf: 0, ga: 0, cs: 0, styleTags: ["Playoff"] },

  // Group G
  { id: "bel", name: "Belgium", code: "BE", confed: "UEFA", wc26Status: "qualified", group: "G", rating: 1865, form: { w: 6, d: 2, l: 2 }, gf: 17, ga: 10, cs: 3, styleTags: ["Vertical"] },
  { id: "irn", name: "Iran", code: "IR", confed: "AFC", wc26Status: "qualified", group: "G", rating: 1715, form: { w: 5, d: 3, l: 2 }, gf: 14, ga: 8, cs: 5, styleTags: ["Counter"] },
  { id: "egy", name: "Egypt", code: "EG", confed: "CAF", wc26Status: "qualified", group: "G", rating: 1670, form: { w: 5, d: 3, l: 2 }, gf: 13, ga: 7, cs: 5, styleTags: ["Set Pieces"] },
  { id: "nzl", name: "New Zealand", code: "NZ", confed: "OFC", wc26Status: "qualified", group: "G", rating: 1540, form: { w: 4, d: 2, l: 4 }, gf: 12, ga: 13, cs: 3, styleTags: ["Direct"] },

  // Group H
  { id: "esp", name: "Spain", code: "ES", confed: "UEFA", wc26Status: "qualified", group: "H", rating: 1915, form: { w: 6, d: 3, l: 1 }, gf: 20, ga: 7, cs: 6, styleTags: ["Possession"] },
  { id: "uru", name: "Uruguay", code: "UY", confed: "CONMEBOL", wc26Status: "qualified", group: "H", rating: 1810, form: { w: 6, d: 2, l: 2 }, gf: 16, ga: 9, cs: 4, styleTags: ["Aggressive"] },
  { id: "ksa", name: "Saudi Arabia", code: "SA", confed: "AFC", wc26Status: "qualified", group: "H", rating: 1630, form: { w: 4, d: 3, l: 3 }, gf: 11, ga: 10, cs: 3, styleTags: ["Compact"] },
  { id: "cpv", name: "Cape Verde", code: "CV", confed: "CAF", wc26Status: "qualified", group: "H", rating: 1545, form: { w: 4, d: 2, l: 4 }, gf: 12, ga: 13, cs: 3, styleTags: ["Physical"] },

  // Group I
  { id: "fra", name: "France", code: "FR", confed: "UEFA", wc26Status: "qualified", group: "I", rating: 1942, form: { w: 6, d: 2, l: 2 }, gf: 19, ga: 10, cs: 4, styleTags: ["Pressure"] },
  { id: "sen", name: "Senegal", code: "SN", confed: "CAF", wc26Status: "qualified", group: "I", rating: 1755, form: { w: 5, d: 3, l: 2 }, gf: 15, ga: 9, cs: 4, styleTags: ["Athletic"] },
  { id: "nor", name: "Norway", code: "NO", confed: "UEFA", wc26Status: "qualified", group: "I", rating: 1760, form: { w: 5, d: 2, l: 3 }, gf: 16, ga: 12, cs: 3, styleTags: ["Crossing"] },
  { id: "int-2", name: "Intercontinental Playoff Winner 2", code: "🏳️", confed: "TBD", wc26Status: "playoff", group: "I", rating: 1650, form: { w: 0, d: 0, l: 0 }, gf: 0, ga: 0, cs: 0, styleTags: ["Playoff"] },

  // Group J
  { id: "arg", name: "Argentina", code: "AR", confed: "CONMEBOL", wc26Status: "qualified", group: "J", rating: 1960, form: { w: 7, d: 2, l: 1 }, gf: 20, ga: 6, cs: 6, styleTags: ["Clinical"] },
  { id: "aut", name: "Austria", code: "AT", confed: "UEFA", wc26Status: "qualified", group: "J", rating: 1765, form: { w: 5, d: 2, l: 3 }, gf: 15, ga: 11, cs: 3, styleTags: ["Structured"] },
  { id: "alg", name: "Algeria", code: "DZ", confed: "CAF", wc26Status: "qualified", group: "J", rating: 1675, form: { w: 5, d: 2, l: 3 }, gf: 14, ga: 10, cs: 3, styleTags: ["Counter"] },
  { id: "jor", name: "Jordan", code: "JO", confed: "AFC", wc26Status: "qualified", group: "J", rating: 1565, form: { w: 4, d: 2, l: 4 }, gf: 12, ga: 13, cs: 3, styleTags: ["Compact"] },

  // Group K
  { id: "por", name: "Portugal", code: "PT", confed: "UEFA", wc26Status: "qualified", group: "K", rating: 1895, form: { w: 6, d: 2, l: 2 }, gf: 18, ga: 9, cs: 4, styleTags: ["Vertical"] },
  { id: "col", name: "Colombia", code: "CO", confed: "CONMEBOL", wc26Status: "qualified", group: "K", rating: 1800, form: { w: 5, d: 3, l: 2 }, gf: 16, ga: 10, cs: 4, styleTags: ["Press"] },
  { id: "uzb", name: "Uzbekistan", code: "UZ", confed: "AFC", wc26Status: "qualified", group: "K", rating: 1600, form: { w: 4, d: 3, l: 3 }, gf: 11, ga: 10, cs: 3, styleTags: ["Compact"] },
  { id: "int-1", name: "Intercontinental Playoff Winner 1", code: "🏳️", confed: "TBD", wc26Status: "playoff", group: "K", rating: 1650, form: { w: 0, d: 0, l: 0 }, gf: 0, ga: 0, cs: 0, styleTags: ["Playoff"] },

  // Group L
  { id: "eng", name: "England", code: "GB", confed: "UEFA", wc26Status: "qualified", group: "L", rating: 1900, form: { w: 6, d: 2, l: 2 }, gf: 18, ga: 8, cs: 5, styleTags: ["Press"] },
  { id: "cro", name: "Croatia", code: "HR", confed: "UEFA", wc26Status: "qualified", group: "L", rating: 1785, form: { w: 5, d: 3, l: 2 }, gf: 14, ga: 9, cs: 4, styleTags: ["Control"] },
  { id: "pan", name: "Panama", code: "PA", confed: "CONCACAF", wc26Status: "qualified", group: "L", rating: 1580, form: { w: 4, d: 3, l: 3 }, gf: 12, ga: 12, cs: 3, styleTags: ["Direct"] },
  { id: "gha", name: "Ghana", code: "GH", confed: "CAF", wc26Status: "qualified", group: "L", rating: 1665, form: { w: 5, d: 2, l: 3 }, gf: 14, ga: 11, cs: 3, styleTags: ["Transition"] },
];

// =====================================================
// Helpers
// =====================================================
function clamp(x: number, min: number, max: number) {
  return Math.max(min, Math.min(max, x));
}

function winDrawLossFromRatings(ratingA: number, ratingB: number, drawBase = 0.28) {
  const diff = ratingA - ratingB;
  const pA_noDraw = 1 / (1 + Math.pow(10, -diff / 400));
  const pDraw = clamp(drawBase, 0.18, 0.34);
  const remain = 1 - pDraw;
  const pA = pA_noDraw * remain;
  const pB = (1 - pA_noDraw) * remain;
  const sum = pA + pDraw + pB;
  return { pA: pA / sum, pDraw: pDraw / sum, pB: pB / sum };
}

function flagEmoji(code: string) {
  if (code.length !== 2) return code;
  const A = 0x1f1e6;
  const chars = code.toUpperCase().split("");
  return String.fromCodePoint(
    A + (chars[0].charCodeAt(0) - 65),
    A + (chars[1].charCodeAt(0) - 65)
  );
}

function StatusPill({ status, lang }: { status: WC26Status; lang: Lang }) {
  const cls =
    status === "qualified"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
      : status === "playoff"
        ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
        : status === "contending"
          ? "bg-sky-500/15 text-sky-300 border-sky-500/30"
          : "bg-neutral-500/10 text-neutral-300 border-neutral-500/20";

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${cls}`}>
      {I18N[lang].status[status]}
    </span>
  );
}

function Metric({ label, value, dark }: { label: string; value: string; dark: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm ${
        dark ? "border-neutral-800 bg-neutral-950/40" : "border-neutral-200 bg-white"
      }`}
    >
      <div className={`text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{label}</div>
      <div className={`mt-1 text-base font-semibold ${dark ? "text-neutral-100" : "text-neutral-900"}`}>{value}</div>
    </div>
  );
}

function ProbRow({ label, value, dark }: { label: string; value: number; dark: boolean }) {
  const pct = Math.round(value * 1000) / 10;
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className={dark ? "text-neutral-200" : "text-neutral-700"}>{label}</span>
        <span className={dark ? "text-neutral-100" : "text-neutral-900"}>{pct}%</span>
      </div>
      <div className={`mt-2 h-2 w-full rounded-full ${dark ? "bg-neutral-800" : "bg-neutral-100"}`}>
        <div
          className={`h-2 rounded-full ${dark ? "bg-neutral-200" : "bg-neutral-900"}`}
          style={{ width: `${clamp(pct, 0, 100)}%` }}
        />
      </div>
    </div>
  );
}

function TeamCard({ team, dark, lang }: { team: Team; dark: boolean; lang: Lang }) {
  const t = I18N[lang];
  return (
    <div
      className={`rounded-3xl border p-6 shadow-sm ${
        dark ? "border-neutral-800 bg-neutral-950/40" : "border-neutral-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className={`text-lg font-semibold ${dark ? "text-neutral-100" : "text-neutral-900"}`}>
            <span className="mr-2">{flagEmoji(team.code)}</span>
            {team.name}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <StatusPill status={team.wc26Status} lang={lang} />
            <span className={`text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>
              {team.confed} · {t.groupLabel(team.group)}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{t.rating}</div>
          <div className={`text-2xl font-semibold ${dark ? "text-neutral-100" : "text-neutral-900"}`}>{team.rating}</div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Metric label={`${t.form} (W-D-L)`} value={`${team.form.w}-${team.form.d}-${team.form.l}`} dark={dark} />
        <Metric label={t.gfga} value={`${team.gf} / ${team.ga}`} dark={dark} />
        <Metric label={t.cleanSheets} value={`${team.cs}`} dark={dark} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {team.styleTags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-3 py-1 text-xs ${
              dark
                ? "border-neutral-800 bg-neutral-950/60 text-neutral-200"
                : "border-neutral-200 bg-neutral-50 text-neutral-700"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// =====================================================
// Stripe-style searchable picker
// =====================================================
function TeamPicker({
  label,
  value,
  onChange,
  teams,
  dark,
  lang,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  teams: Team[];
  dark: boolean;
  lang: Lang;
}) {
  const t = I18N[lang];
  const selected = teams.find((x) => x.id === value);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? teams.filter((x) => {
          const hay = `${x.name} ${x.confed} ${x.group} ${t.groupLabel(x.group)} ${I18N[lang].status[x.wc26Status]}`.toLowerCase();
          return hay.includes(q);
        })
      : teams;

    const order: Record<WC26Status, number> = {
      qualified: 0,
      playoff: 1,
      tbd: 2,
      contending: 3,
    };

    return [...list].sort((a, b) => {
      const s = order[a.wc26Status] - order[b.wc26Status];
      if (s !== 0) return s;
      const ga = a.group === "TBD" ? "Z" : a.group;
      const gb = b.group === "TBD" ? "Z" : b.group;
      const g = ga.localeCompare(gb);
      if (g !== 0) return g;
      return a.name.localeCompare(b.name);
    });
  }, [teams, query, lang, t]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">
      <div className={`mb-2 text-sm font-medium ${dark ? "text-neutral-200" : "text-neutral-700"}`}>{label}</div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex h-11 w-full items-center justify-between rounded-2xl border px-3 text-left text-sm shadow-sm transition ${
          dark
            ? "border-neutral-800 bg-neutral-950/40 text-neutral-100 hover:bg-neutral-900/50"
            : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50"
        }`}
      >
        <span className="flex items-center gap-2 truncate">
          <span className="text-base">{selected ? flagEmoji(selected.code) : "🏳️"}</span>
          <span className="truncate">{selected ? selected.name : "Select"}</span>
          {selected && (
            <span className={`ml-2 hidden items-center gap-2 text-xs ${dark ? "text-neutral-400" : "text-neutral-500"} sm:flex`}>
              <span>·</span>
              <span>{t.groupLabel(selected.group)}</span>
              <span>·</span>
              <span>{I18N[lang].status[selected.wc26Status]}</span>
            </span>
          )}
        </span>
        <span className={dark ? "text-neutral-400" : "text-neutral-500"}>▾</span>
      </button>

      {open && (
        <div
          className={`absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border shadow-lg ${
            dark ? "border-neutral-800 bg-neutral-950" : "border-neutral-200 bg-white"
          }`}
          role="dialog"
          aria-label={`${label} picker`}
        >
          <div className={`border-b p-2 ${dark ? "border-neutral-800" : "border-neutral-100"}`}>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className={`h-10 w-full rounded-xl border px-3 text-sm outline-none focus:ring-2 ${
                dark
                  ? "border-neutral-800 bg-neutral-950 text-neutral-100 placeholder:text-neutral-500 focus:ring-neutral-800"
                  : "border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:ring-neutral-200"
              }`}
            />
          </div>

          <div className="max-h-80 overflow-auto p-1">
            {filtered.length === 0 ? (
              <div className={`p-3 text-sm ${dark ? "text-neutral-300" : "text-neutral-600"}`}>{t.resultsNone}</div>
            ) : (
              filtered.map((x) => {
                const active = x.id === value;
                return (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => {
                      onChange(x.id);
                      close();
                    }}
                    className={`flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left transition ${
                      dark ? "hover:bg-neutral-900/60" : "hover:bg-neutral-50"
                    } ${active ? (dark ? "bg-neutral-900/60" : "bg-neutral-100") : ""}`}
                  >
                    <div className="mt-0.5 text-base">{flagEmoji(x.code)}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`truncate text-sm font-medium ${dark ? "text-neutral-100" : "text-neutral-900"}`}>
                          {x.name}
                        </div>
                        <div className={`shrink-0 text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>
                          {t.groupLabel(x.group)}
                        </div>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <StatusPill status={x.wc26Status} lang={lang} />
                        <span className={`text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{x.confed}</span>
                        <span className={`text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>· {t.rating} {x.rating}</span>
                        <span className={`text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>· {t.form} {x.form.w}-{x.form.d}-{x.form.l}</span>
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          <div className={`flex items-center justify-between border-t p-2 ${dark ? "border-neutral-800" : "border-neutral-100"}`}>
            <button
              type="button"
              onClick={close}
              className={`rounded-xl px-3 py-2 text-xs transition ${
                dark ? "text-neutral-300 hover:bg-neutral-900/60" : "text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {t.close}
            </button>
            <div className={`text-xs ${dark ? "text-neutral-500" : "text-neutral-500"}`}>{t.tipSearch}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// =====================================================
// App
// =====================================================
export default function WorldCupDataLabPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<Lang>("en");
  const t = I18N[lang];
  const dark = theme === "dark";

  const [includeContenders, setIncludeContenders] = useState(false);
  const [groupFilter, setGroupFilter] = useState<GroupCode | "ALL">("ALL");

  const basePool = useMemo(
    () => TEAMS.filter((x) => ["qualified", "playoff", "tbd"].includes(x.wc26Status)),
    []
  );

  const pool = useMemo(() => {
    const source = includeContenders ? TEAMS : basePool;
    if (groupFilter === "ALL") return source;
    return source.filter((x) => x.group === groupFilter);
  }, [includeContenders, basePool, groupFilter]);

  const [teamAId, setTeamAId] = useState(pool[0]?.id ?? "");
  const [teamBId, setTeamBId] = useState(pool[1]?.id ?? "");

  useEffect(() => {
    if (!pool.some((x) => x.id === teamAId) && pool[0]) setTeamAId(pool[0].id);
    if (!pool.some((x) => x.id === teamBId) && pool[1]) setTeamBId(pool[1].id);
  }, [pool, teamAId, teamBId]);

  const A = pool.find((x) => x.id === teamAId) ?? pool[0];
  const B = pool.find((x) => x.id === teamBId) ?? pool[1];

  const probs = useMemo(() => {
    if (!A || !B) return null;
    return winDrawLossFromRatings(A.rating, B.rating, 0.28);
  }, [A, B]);

  const swap = () => {
    setTeamAId(teamBId);
    setTeamBId(teamAId);
  };

  useEffect(() => {
    const eq = winDrawLossFromRatings(1700, 1700, 0.28);
    console.assert(Math.abs(eq.pA + eq.pDraw + eq.pB - 1) < 1e-9, "Probabilities should sum to 1");
    const stronger = winDrawLossFromRatings(1900, 1600, 0.28);
    console.assert(stronger.pA > stronger.pB, "Higher-rated team should have higher win probability");
  }, []);

  return (
    <div className={dark ? "min-h-screen bg-neutral-950 text-neutral-100" : "min-h-screen bg-neutral-50 text-neutral-900"}>
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
            <p className={`mt-2 text-sm ${dark ? "text-neutral-400" : "text-neutral-600"}`}>{t.subtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className={`flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm shadow-sm ${dark ? "border-neutral-800 bg-neutral-950/40" : "border-neutral-200 bg-white"}`}>
              <span className={`text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{t.language}</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                className={`bg-transparent text-sm outline-none ${dark ? "text-neutral-100" : "text-neutral-900"}`}
              >
                <option value="en">English</option>
                <option value="zh">简体中文</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setTheme(dark ? "light" : "dark")}
              className={`rounded-2xl border px-3 py-2 text-sm shadow-sm transition ${
                dark
                  ? "border-neutral-800 bg-neutral-950/40 text-neutral-100 hover:bg-neutral-900/60"
                  : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50"
              }`}
            >
              {dark ? t.light : t.dark}
            </button>
          </div>
        </div>

        {/* Controls row */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <label className={`flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm shadow-sm ${dark ? "border-neutral-800 bg-neutral-950/40 text-neutral-200" : "border-neutral-200 bg-white text-neutral-700"}`}>
            <input
              type="checkbox"
              checked={includeContenders}
              onChange={(e) => setIncludeContenders(e.target.checked)}
            />
            {t.includeContenders}
          </label>

          <div className={`flex flex-wrap items-center gap-2 rounded-2xl border px-3 py-2 shadow-sm ${dark ? "border-neutral-800 bg-neutral-950/40" : "border-neutral-200 bg-white"}`}>
            <span className={`text-xs ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{t.group}</span>
            <div className="flex flex-wrap gap-1">
              {([
                "ALL",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
              ] as const).map((g) => {
                const active = groupFilter === (g as GroupCode | "ALL");
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGroupFilter(g as GroupCode | "ALL")}
                    className={`rounded-xl border px-2.5 py-1 text-xs transition ${
                      active
                        ? dark
                          ? "border-neutral-200 bg-neutral-200 text-neutral-950"
                          : "border-neutral-900 bg-neutral-900 text-white"
                        : dark
                          ? "border-neutral-800 bg-neutral-950/20 text-neutral-200 hover:bg-neutral-900/50"
                          : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    {g === "ALL" ? t.all : (lang === "zh" ? `${g}组` : g)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={`text-xs ${dark ? "text-neutral-500" : "text-neutral-500"}`}>
            {lang === "zh" ? "默认：已出线 + 附加赛占位" : "Default: Qualified + Playoff placeholders"}
          </div>
        </div>

        {/* Pickers */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
          <TeamPicker label={t.teamA} value={teamAId} onChange={setTeamAId} teams={pool} dark={dark} lang={lang} />

          <button
            onClick={swap}
            className={`h-11 self-end rounded-2xl border px-4 text-sm shadow-sm transition ${
              dark
                ? "border-neutral-800 bg-neutral-950/40 text-neutral-100 hover:bg-neutral-900/60"
                : "border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50"
            }`}
          >
            ⇄ {t.swap}
          </button>

          <TeamPicker label={t.teamB} value={teamBId} onChange={setTeamBId} teams={pool} dark={dark} lang={lang} />
        </section>

        {/* Results */}
        {A && B && probs && (
          <section className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <TeamCard team={A} dark={dark} lang={lang} />
              <TeamCard team={B} dark={dark} lang={lang} />
            </div>

            <div
              className={`rounded-3xl border p-6 shadow-sm ${
                dark ? "border-neutral-800 bg-neutral-950/40" : "border-neutral-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className={`text-base font-semibold ${dark ? "text-neutral-100" : "text-neutral-900"}`}>{t.winDrawLoss}</h2>
                <span className={`text-xs ${dark ? "text-neutral-500" : "text-neutral-500"}`}>{t.modelNote}</span>
              </div>
              <div className="mt-4 space-y-3">
                <ProbRow label={`${A.name} ${lang === "zh" ? "胜" : "win"}`} value={probs.pA} dark={dark} />
                <ProbRow label={lang === "zh" ? "平" : "Draw"} value={probs.pDraw} dark={dark} />
                <ProbRow label={`${B.name} ${lang === "zh" ? "胜" : "win"}`} value={probs.pB} dark={dark} />
              </div>
            </div>

            <div
              className={`rounded-3xl border p-6 shadow-sm ${
                dark ? "border-neutral-800 bg-neutral-950/40" : "border-neutral-200 bg-white"
              }`}
            >
              <h2 className={`text-base font-semibold ${dark ? "text-neutral-100" : "text-neutral-900"}`}>{t.headToHead}</h2>
              <p className={`mt-2 text-sm ${dark ? "text-neutral-400" : "text-neutral-600"}`}>{t.noH2H}</p>
            </div>
          </section>
        )}

        <footer className={`mt-10 text-xs ${dark ? "text-neutral-600" : "text-neutral-500"}`}>
          © {new Date().getFullYear()} World Cup Data Lab · {t.modelNote}
        </footer>
      </div>
    </div>
  );
}

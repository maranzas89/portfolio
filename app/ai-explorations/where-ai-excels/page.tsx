"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  CircleDashed,
  Code2,
  Film,
  Image as ImageIcon,
  Layers3,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const brandMap: Record<string, { logo: string; fallback: string; glow: string; border: string; text: string; bar: string }> = {
  OpenAI: {
    logo: "https://cdn.simpleicons.org/openai/ffffff",
    fallback: "O",
    glow: "from-emerald-400/30 via-emerald-300/10 to-transparent",
    border: "border-emerald-300/20",
    text: "text-emerald-100",
    bar: "#78e6c4",
  },
  Google: {
    logo: "https://cdn.simpleicons.org/google/ffffff",
    fallback: "G",
    glow: "from-sky-400/30 via-cyan-300/10 to-transparent",
    border: "border-sky-300/20",
    text: "text-sky-100",
    bar: "#7dd3fc",
  },
  Anthropic: {
    logo: "https://cdn.simpleicons.org/anthropic/ffffff",
    fallback: "A",
    glow: "from-amber-300/30 via-orange-300/10 to-transparent",
    border: "border-amber-300/20",
    text: "text-amber-100",
    bar: "#fbbf24",
  },
  Moonshot: {
    logo: "",
    fallback: "K",
    glow: "from-violet-400/30 via-fuchsia-300/10 to-transparent",
    border: "border-violet-300/20",
    text: "text-violet-100",
    bar: "#a78bfa",
  },
  "Z.ai": {
    logo: "",
    fallback: "Z",
    glow: "from-pink-400/30 via-rose-300/10 to-transparent",
    border: "border-pink-300/20",
    text: "text-pink-100",
    bar: "#f472b6",
  },
  Qwen: {
    logo: "https://cdn.simpleicons.org/alibabacloud/ffffff",
    fallback: "Q",
    glow: "from-indigo-400/30 via-blue-300/10 to-transparent",
    border: "border-indigo-300/20",
    text: "text-indigo-100",
    bar: "#818cf8",
  },
};

const featuredProducts = [
  {
    id: "gpt54pro",
    product: "GPT-5.4 Pro",
    vendor: "OpenAI",
    role: "My most stable engine for research, synthesis, and decision framing.",
    statA: "58.7%",
    labelA: "HLE with tools",
    statB: "89.3%",
    labelB: "BrowseComp",
    confidence: { Stability: 97, Trust: 96, Speed: 93 },
    tags: ["Research", "Strategy", "Synthesis"],
    why: [
      "Best current fit for deep research and structured synthesis.",
      "Strongest public web research score in this set.",
      "Ideal when I need clear reasoning, narrative framing, and decision ready output.",
    ],
    caution:
      "Not my first choice for ultra long multimodal context or for the most coding specialized terminal workflows.",
    verdict:
      "If I need a reliable first draft for serious knowledge work, this is my default starting point.",
  },
  {
    id: "gemini31pro",
    product: "Gemini 3.1 Pro",
    vendor: "Google",
    role: "Best balance of multimodal reasoning, long context, and engineering strength.",
    statA: "77.1%",
    labelA: "ARC-AGI-2",
    statB: "1M",
    labelB: "Context window",
    confidence: { Stability: 92, Trust: 93, Speed: 94 },
    tags: ["Multimodal", "Long Context", "Code"],
    why: [
      "Strongest all round option when text, images, video, code, and huge context have to work together.",
      "Excellent engineering benchmarks without sacrificing multimodal breadth.",
      "A very strong choice for repo scale, document heavy, or mixed media problem solving.",
    ],
    caution:
      "In high stakes outputs, I still like a second pass sanity check rather than treating any single model as ground truth.",
    verdict:
      "This is the cleanest one model can do many things well story in the current market.",
  },
  {
    id: "claude46",
    product: "Claude 4.6 Family",
    vendor: "Anthropic",
    role: "Strongest editorial polish and one of the best coding collaborators.",
    statA: "80.8%",
    labelA: "SWE Verified",
    statB: "1M beta",
    labelB: "Long context",
    confidence: { Stability: 94, Trust: 95, Speed: 90 },
    tags: ["Writing", "Code Collaboration", "Knowledge Work"],
    why: [
      "Often feels strongest in long form editing, tone control, and polished articulation.",
      "Very competitive on real software engineering benchmarks.",
      "Great for dense documents, PRDs, memos, and repo level reasoning with strong narrative control.",
    ],
    caution:
      "Not the public benchmark leader on every lane, but it remains one of the most dependable day to day collaborators.",
    verdict:
      "If the output has to feel thoughtful, clear, and polished, Claude remains one of my highest trust tools.",
  },
  {
    id: "gptimage",
    product: "GPT-image-1.5",
    vendor: "OpenAI",
    role: "My strongest visual drafting option when text rendering and clean asset generation matter.",
    statA: "Rank 2",
    labelA: "Image Arena",
    statB: "1248",
    labelB: "Arena score",
    confidence: { Stability: 92, Trust: 90, Speed: 94 },
    tags: ["Image", "Brand Assets", "Concept Drafting"],
    why: [
      "Very strong public preference score in image generation.",
      "Excellent when I need visual concepts that stay legible and presentation ready.",
      "Useful for faster iteration on directions before refining them in design tools.",
    ],
    caution:
      "For final brand critical work, I still prefer a deliberate human design pass after generation.",
    verdict:
      "This is one of the fastest ways to move from idea to usable visual territory without losing clarity.",
  },
  {
    id: "veo31",
    product: "Veo 3.1",
    vendor: "Google",
    role: "Current public preference leader for AI video generation.",
    statA: "Rank 1",
    labelA: "Video Arena",
    statB: "1381",
    labelB: "Arena score",
    confidence: { Stability: 88, Trust: 89, Speed: 91 },
    tags: ["Video", "Motion Concepts", "Storytelling"],
    why: [
      "Current video generation leader in public Arena preference.",
      "Useful for testing motion language, cinematic direction, and narrative atmosphere.",
      "A strong exploration tool when static brand or UI narratives need to become motion concepts.",
    ],
    caution:
      "Video still benefits heavily from editorial restraint and clear art direction to feel intentional rather than noisy.",
    verdict:
      "For fast motion ideation, this is the current frontier reference point.",
  },
  {
    id: "openlane",
    product: "GLM-5, Kimi K2.5, and Qwen3.5",
    vendor: "Qwen",
    role: "The open and China lane I watch for cost, deployment flexibility, and agentic experimentation.",
    statA: "77.8%",
    labelA: "GLM-5 SWE",
    statB: "256K",
    labelB: "Kimi context",
    confidence: { Stability: 84, Trust: 85, Speed: 92 },
    tags: ["Open Weight", "Cost", "Deployment Flexibility"],
    why: [
      "This lane matters for teams who care about cost structure, self hosting, or ecosystem flexibility.",
      "GLM-5 and Kimi K2.5 are already posting strong benchmark numbers in reasoning and SWE tasks.",
      "Qwen3.5 is especially interesting as a native multimodal agent direction, not just a chat model.",
    ],
    caution:
      "I treat this as an active exploration track rather than my single highest trust production default.",
    verdict:
      "When deployment constraints or cost sensitivity matter, this is the lane I would evaluate first.",
  },
];

const metricDeck: Record<string, { title: string; suffix: string; note: string; rows: { name: string; vendor: string; value: number }[] }> = {
  hleTools: {
    title: "Broad reasoning with tools",
    suffix: "%",
    note: "High signal snapshot for tool augmented reasoning across difficult academic tasks.",
    rows: [
      { name: "GPT-5.4 Pro", vendor: "OpenAI", value: 58.7 },
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 53.1 },
      { name: "Kimi K2.5", vendor: "Moonshot", value: 51.8 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 51.4 },
      { name: "GLM-5", vendor: "Z.ai", value: 50.4 },
    ],
  },
  browseComp: {
    title: "Web research and browsing",
    suffix: "%",
    note: "Useful as a proxy for persistent web search and hard to find information gathering.",
    rows: [
      { name: "GPT-5.4 Pro", vendor: "OpenAI", value: 89.3 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 85.9 },
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 84.0 },
    ],
  },
  arcAgi2: {
    title: "Novel abstract reasoning",
    suffix: "%",
    note: "Helpful for understanding how well a model generalizes to unfamiliar reasoning problems.",
    rows: [
      { name: "GPT-5.4 Pro", vendor: "OpenAI", value: 83.3 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 77.1 },
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 68.8 },
    ],
  },
  swe: {
    title: "Real software engineering",
    suffix: "%",
    note: "A better coding signal than toy code generation because it measures solving real repo issues.",
    rows: [
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 80.8 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 80.6 },
      { name: "Claude Sonnet 4.6", vendor: "Anthropic", value: 79.6 },
      { name: "GLM-5", vendor: "Z.ai", value: 77.8 },
      { name: "Kimi K2.5", vendor: "Moonshot", value: 76.8 },
    ],
  },
  terminal: {
    title: "Terminal and system tasks",
    suffix: "%",
    note: "A useful public snapshot for agentic terminal work and system task execution.",
    rows: [
      { name: "GPT-5.3 Codex", vendor: "OpenAI", value: 77.3 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 68.5 },
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 65.4 },
      { name: "Claude Sonnet 4.6", vendor: "Anthropic", value: 59.1 },
    ],
  },
  imageArena: {
    title: "Image generation preference",
    suffix: "",
    note: "Public preference ranking. This uses a different scale than benchmark percentages, but it is still a useful taste signal.",
    rows: [
      { name: "Gemini 3.1 Flash Image", vendor: "Google", value: 1268 },
      { name: "GPT-image-1.5 HF", vendor: "OpenAI", value: 1248 },
      { name: "Gemini 3 Pro Image", vendor: "Google", value: 1236 },
    ],
  },
  videoArena: {
    title: "Video generation preference",
    suffix: "",
    note: "Arena preference suggests Google currently leads public perception in video generation.",
    rows: [
      { name: "Veo 3.1 audio 1080p", vendor: "Google", value: 1381 },
      { name: "Veo 3.1 fast audio", vendor: "Google", value: 1378 },
      { name: "Sora 2 Pro", vendor: "OpenAI", value: 1367 },
    ],
  },
};

const metricGroups = [
  { title: "Reasoning", keys: ["hleTools", "browseComp", "arcAgi2"] },
  { title: "Engineering", keys: ["swe", "terminal"] },
  { title: "Creative", keys: ["imageArena", "videoArena"] },
];

const workflowCards = [
  {
    icon: ShieldCheck,
    title: "Most trusted for serious research",
    stack: "GPT-5.4 Pro to Claude 4.6 check to final human judgment",
    body:
      "When accuracy, structure, and synthesis matter most, I prefer OpenAI first, then use Claude as an editorial pressure test.",
  },
  {
    icon: Layers3,
    title: "Best for multimodal and huge context work",
    stack: "Gemini 3.1 Pro to targeted verification to distilled brief",
    body:
      "This is my strongest option when a workflow spans large docs, screenshots, media, repo context, and cross format reasoning.",
  },
  {
    icon: ImageIcon,
    title: "Best visual ideation stack",
    stack: "GPT-image-1.5 or Gemini Image to Figma or Adobe refinement",
    body:
      "I use AI image systems to expand creative territory quickly, then push the final output through deliberate human design craft.",
  },
  {
    icon: Code2,
    title: "Best open and cost sensitive lane",
    stack: "GLM-5, Kimi K2.5, and Qwen3.5",
    body:
      "This lane is strategically important for self hosting, API economics, and agentic experimentation beyond closed model defaults.",
  },
];

const openLaneCards = [
  {
    product: "GLM-5",
    vendor: "Z.ai",
    statA: "50.4%",
    labelA: "HLE with tools",
    statB: "77.8%",
    labelB: "SWE Verified",
    note: "Strong open contender for reasoning, coding, and agentic work.",
  },
  {
    product: "Kimi K2.5",
    vendor: "Moonshot",
    statA: "51.8%",
    labelA: "HLE with tools",
    statB: "256K",
    labelB: "Context and tools",
    note: "A compelling long context and tool calling model to watch closely.",
  },
  {
    product: "Qwen3.5",
    vendor: "Qwen",
    statA: "Native",
    labelA: "Multimodal agent",
    statB: "Open",
    labelB: "Deployment lane",
    note: "Important because it pushes toward native multimodal agents, not only chat UX.",
  },
];

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

function getChartDomain(rows: { value: number }[]) {
  const values = rows.map((row) => row.value);
  const max = Math.max(...values);
  const min = Math.min(...values);

  if (max <= 100) {
    return [0, 100];
  }

  return [Math.max(1100, Math.floor(min / 10) * 10 - 10), Math.ceil(max / 10) * 10 + 10];
}

function getChartRows(rows: { name: string; vendor: string; value: number }[]) {
  return [...rows]
    .sort((a, b) => b.value - a.value)
    .map((row) => ({
      ...row,
      fill: brandMap[row.vendor]?.bar || "#cbd5e1",
    }));
}

function runSanityChecks() {
  const checks = [
    getChartDomain([{ value: 58.7 }, { value: 83.3 }])[1] === 100,
    getChartDomain([{ value: 1268 }, { value: 1381 }])[0] >= 1100,
    getChartRows([
      { name: "B", vendor: "OpenAI", value: 1 },
      { name: "A", vendor: "Google", value: 2 },
    ])[0].name === "A",
  ];

  return checks.every(Boolean);
}

function BrandMark({ vendor, className = "h-11 w-11" }: { vendor: string; className?: string }) {
  const brand = brandMap[vendor] || {
    logo: "",
    fallback: vendor?.[0] || "A",
    glow: "from-white/15 via-white/5 to-transparent",
    border: "border-white/15",
    text: "text-white",
  };

  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border bg-white/[0.04] backdrop-blur-xl",
        brand.border,
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", brand.glow)} />
      {brand.logo && !imgError ? (
        <img
          src={brand.logo}
          alt={vendor}
          className="relative z-10 h-5 w-5 opacity-95"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={cn("relative z-10 text-sm font-semibold", brand.text)}>{brand.fallback}</span>
      )}
    </div>
  );
}

function MetricPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs transition-all duration-300",
        active
          ? "border-white/25 bg-white/12 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          : "border-white/10 bg-white/[0.04] text-white/65 hover:border-white/20 hover:text-white/85",
      )}
    >
      {children}
    </button>
  );
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-white/70">
        <span>{label}</span>
        <span className="font-medium text-white/90">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300"
        />
      </div>
    </div>
  );
}

function ChartTooltip({ active, payload, label, suffix }: { active?: boolean; payload?: { value: number }[]; label?: string; suffix: string }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a0d16]/95 px-3 py-2 text-xs text-white shadow-2xl backdrop-blur-xl">
      <div className="mb-1 font-medium text-white">{label}</div>
      <div className="text-white/70">
        Score: <span className="text-white">{payload[0].value}{suffix}</span>
      </div>
    </div>
  );
}

export default function WhereAiExcelsPage() {
  const [selectedProductId, setSelectedProductId] = useState("gpt54pro");
  const [selectedMetric, setSelectedMetric] = useState("hleTools");

  const selectedProduct =
    featuredProducts.find((item) => item.id === selectedProductId) || featuredProducts[0];

  const currentMetric = metricDeck[selectedMetric] || metricDeck.hleTools;
  const chartDomain = useMemo(() => getChartDomain(currentMetric.rows), [currentMetric]);
  const chartRows = useMemo(() => getChartRows(currentMetric.rows), [currentMetric]);
  const sanityPassed = useMemo(() => runSanityChecks(), []);

  return (
    <div className="min-h-screen bg-[#050814]">
      <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 md:px-16 lg:px-24">
        <section className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#050814] text-white shadow-[0_30px_120px_rgba(4,8,20,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.12),transparent_26%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.08]" />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
            animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl"
            animate={{ x: [0, -40, 10, 0], y: [0, 25, -15, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 p-6 md:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:gap-8">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/65">
                  <Sparkles className="h-3.5 w-3.5" />
                  Mapping Today's AI Landscape · 2026
                </div>

                <div className="max-w-4xl space-y-4">
                  <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.9rem] lg:leading-[1.03]">
                    Where AI Excels Across <span className="text-white/65">Research, Design, Code, and Multimodal Work</span>
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-white/72 md:text-[15px]">
                    An exploration of where current AI systems are strongest, based on real use across product design workflows. This work focuses on the areas where AI feels genuinely useful—not just novel—by examining how different tools support strategy, concept generation, execution, and broader creative exploration.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    {
                      label: "Research leader",
                      value: "GPT-5.4 Pro",
                      sub: "58.7% HLE with tools · 89.3% BrowseComp",
                      icon: ShieldCheck,
                    },
                    {
                      label: "Most versatile",
                      value: "Gemini 3.1 Pro",
                      sub: "1M context · 80.6% SWE Verified",
                      icon: Layers3,
                    },
                    {
                      label: "Best editorial collaborator",
                      value: "Claude 4.6",
                      sub: "80.8% SWE Verified · 1M beta context",
                      icon: Bot,
                    },
                    {
                      label: "Visual frontier",
                      value: "Google leads Arena",
                      sub: "Rank 1 in image and video preference",
                      icon: Film,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                      >
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                          <Icon className="h-4 w-4 text-white/80" />
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">{item.label}</div>
                        <div className="mt-2 text-base font-medium text-white">{item.value}</div>
                        <div className="mt-1 text-xs leading-6 text-white/58">{item.sub}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white/90">
                  <CircleDashed className="h-4 w-4" />
                  Evaluation Lens
                </div>
                <div className="space-y-4 text-sm leading-7 text-white/72">
                  <p>
                    I evaluate AI tools through two layers: <span className="text-white">public performance data</span>{" "}
                    and <span className="text-white">workflow reliability</span>.
                  </p>
                  <div className="grid gap-3">
                    {[
                      "Benchmarks tell me who leads a lane: reasoning, web search, coding, long context, image, or video.",
                      "Workflow confidence tells me what I would actually trust in a real product, design, or research environment.",
                      "My strongest conclusion: there is no single winner. The best stack is compositional.",
                    ].map((text) => (
                      <div key={text} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <p className="text-sm leading-6 text-white/70">{text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-cyan-300/12 bg-cyan-400/[0.05] p-3 text-xs leading-6 text-cyan-50/80">
                    Public benchmark cut used here: official model cards, system cards, and Arena preference leaderboards available as of March 10, 2026. Trust, stability, and workflow recommendations are my editorial synthesis.
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-xs leading-6 text-white/60">
                    Sanity checks: {sanityPassed ? "passed" : "review needed"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-cyan-300" />
                  <h3 className="text-lg font-medium text-white">Products I would confidently speak to in an interview</h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {featuredProducts.map((item) => {
                    const isActive = item.id === selectedProductId;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setSelectedProductId(item.id)}
                        className={cn(
                          "group rounded-[24px] border p-4 text-left transition-all duration-300",
                          isActive
                            ? "border-white/20 bg-white/[0.08] shadow-[0_20px_60px_rgba(8,15,30,0.35)]"
                            : "border-white/8 bg-white/[0.03] hover:border-white/16 hover:bg-white/[0.055]",
                        )}
                      >
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <BrandMark vendor={item.vendor} />
                          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                            {item.vendor}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-white">{item.product}</div>
                        <div className="mt-2 text-xs leading-6 text-white/58">{item.role}</div>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-2.5">
                            <div className="text-base font-semibold text-white">{item.statA}</div>
                            <div className="text-[11px] uppercase tracking-[0.14em] text-white/42">{item.labelA}</div>
                          </div>
                          <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-2.5">
                            <div className="text-base font-semibold text-white">{item.statB}</div>
                            <div className="text-[11px] uppercase tracking-[0.14em] text-white/42">{item.labelB}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl md:p-6"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-xl">
                    <div className="mb-3 flex items-center gap-3">
                      <BrandMark vendor={selectedProduct.vendor} className="h-12 w-12" />
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-white/42">Selected signal</div>
                        <div className="text-2xl font-semibold text-white">{selectedProduct.product}</div>
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-white/72">{selectedProduct.verdict}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProduct.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/68"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid min-w-[190px] gap-2 rounded-3xl border border-white/8 bg-white/[0.03] p-3 text-sm">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-white/45">Quick read</div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2">
                      <span className="text-white/60">Metric A</span>
                      <span className="font-medium text-white">{selectedProduct.statA}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2">
                      <span className="text-white/60">Metric B</span>
                      <span className="font-medium text-white">{selectedProduct.statB}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2">
                      <span className="text-white/60">Primary lane</span>
                      <span className="font-medium text-white">{selectedProduct.tags[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-sm font-medium text-white">Portfolio editorial signal</div>
                    {Object.entries(selectedProduct.confidence).map(([label, value]) => (
                      <MetricBar key={label} label={label} value={value} />
                    ))}
                  </div>

                  <div className="space-y-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                    <div>
                      <div className="text-sm font-medium text-white">Why it stays in my stack</div>
                      <div className="mt-3 space-y-3">
                        {selectedProduct.why.map((point) => (
                          <div key={point} className="flex gap-3">
                            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                            <p className="text-sm leading-6 text-white/72">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-amber-300/12 bg-amber-300/[0.05] p-3 text-sm leading-6 text-amber-50/80">
                      <span className="font-medium text-amber-50">Watchout:</span>{" "}
                      {selectedProduct.caution}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-6 lg:p-7">
              <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                    <BarChart3 className="h-4 w-4 text-violet-300" />
                    Benchmark Lab
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Where each model actually wins</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-white/70">
                    Instead of pretending there is one universal winner, I compare models lane by lane. That is the more useful mindset for real workflows.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-white/55">
                  Selected lens: <span className="text-white/90">{currentMetric.title}</span>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[24px] border border-white/8 bg-[#070b17]/80 p-4 md:p-5">
                  <div className="mb-4 space-y-3">
                    {metricGroups.map((group) => (
                      <div key={group.title} className="flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-[11px] uppercase tracking-[0.18em] text-white/38">{group.title}</span>
                        {group.keys.map((key) => (
                          <MetricPill key={key} active={selectedMetric === key} onClick={() => setSelectedMetric(key)}>
                            {metricDeck[key].title}
                          </MetricPill>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="h-[360px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartRows} margin={{ top: 10, right: 8, left: 0, bottom: 18 }} barCategoryGap={18}>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis
                          dataKey="name"
                          stroke="rgba(255,255,255,0.45)"
                          tickLine={false}
                          axisLine={false}
                          angle={-10}
                          height={64}
                          textAnchor="end"
                          interval={0}
                          fontSize={12}
                        />
                        <YAxis
                          stroke="rgba(255,255,255,0.45)"
                          tickLine={false}
                          axisLine={false}
                          domain={chartDomain}
                          fontSize={12}
                        />
                        <Tooltip
                          content={<ChartTooltip suffix={currentMetric.suffix} />}
                          cursor={{ fill: "rgba(255,255,255,0.03)" }}
                        />
                        <Bar dataKey="value" radius={[12, 12, 4, 4]}>
                          {chartRows.map((entry) => (
                            <Cell key={entry.name} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4 md:p-5">
                    <div className="text-sm font-medium text-white">Interpretation</div>
                    <p className="mt-3 text-sm leading-7 text-white/72">{currentMetric.note}</p>
                    <div className="mt-4 rounded-2xl border border-cyan-300/12 bg-cyan-400/[0.04] p-3 text-sm leading-6 text-cyan-50/78">
                      <span className="font-medium text-cyan-50">My read:</span>{" "}
                      the right tool depends on the lane. Benchmark leadership is already splitting into research, reasoning, engineering, and creative generation.
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4 md:p-5">
                    <div className="mb-3 text-sm font-medium text-white">Current ranking</div>
                    <div className="space-y-3">
                      {chartRows.map((row, index) => (
                        <div
                          key={row.name}
                          className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-medium text-white/70">
                              {index + 1}
                            </div>
                            <div>
                              <div className="text-sm text-white">{row.name}</div>
                              <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">{row.vendor}</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-white">
                            {row.value}
                            {currentMetric.suffix}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-6 lg:p-7">
                <div className="mb-5 flex items-center gap-2 text-sm font-medium text-white">
                  <Zap className="h-4 w-4 text-amber-300" />
                  Workflow Lens
                </div>
                <h3 className="text-2xl font-semibold text-white">How I would actually use this stack</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {workflowCards.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                          <Icon className="h-4 w-4 text-white/80" />
                        </div>
                        <div className="text-base font-medium text-white">{item.title}</div>
                        <div className="mt-2 text-sm font-medium text-cyan-100/90">{item.stack}</div>
                        <p className="mt-3 text-sm leading-7 text-white/68">{item.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-6 lg:p-7">
                <div className="mb-5 flex items-center gap-2 text-sm font-medium text-white">
                  <Bot className="h-4 w-4 text-sky-300" />
                  Open and China Lane
                </div>
                <h3 className="text-2xl font-semibold text-white">Why this ecosystem matters</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  For interviews, this section signals that I am not only tracking the closed model leaders. I am also paying attention to deployment flexibility, pricing pressure, and the rise of native multimodal agents.
                </p>
                <div className="mt-5 space-y-3">
                  {openLaneCards.map((item) => (
                    <div key={item.product} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                      <div className="mb-3 flex items-center gap-3">
                        <BrandMark vendor={item.vendor} className="h-10 w-10" />
                        <div>
                          <div className="text-sm font-medium text-white">{item.product}</div>
                          <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">{item.vendor}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-2.5">
                          <div className="text-sm font-medium text-white">{item.statA}</div>
                          <div className="text-[10px] uppercase tracking-[0.16em] text-white/40">{item.labelA}</div>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-2.5">
                          <div className="text-sm font-medium text-white">{item.statB}</div>
                          <div className="text-[10px] uppercase tracking-[0.16em] text-white/40">{item.labelB}</div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/66">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-6 lg:p-7">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                    <Film className="h-4 w-4 text-violet-300" />
                    Closing Read
                  </div>
                  <h3 className="text-2xl font-semibold text-white">My current thesis</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/55">
                  AI stack thinking over single tool thinking
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "For trust",
                    body: "I trust GPT-5.4 Pro most for serious research and synthesis, Claude 4.6 most for polished articulation, and Gemini 3.1 Pro most for multimodal and long context work.",
                  },
                  {
                    title: "For efficiency",
                    body: "The fastest workflow is usually compositional: one model expands the territory, another checks the structure, and human design judgment shapes the final result.",
                  },
                  {
                    title: "For differentiation",
                    body: "Showing this landscape in a portfolio demonstrates not just AI usage, but product judgment: knowing which tools to trust, why, and under what constraints.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-base font-medium text-white">{item.title}</div>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  CircleDashed,
  Compass,
  Database,
  Eye,
  Layers3,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
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

const brandMap: Record<
  string,
  {
    logo: string;
    fallback: string;
    tint: string;
    border: string;
    text: string;
    bar: string;
  }
> = {
  OpenAI: {
    logo: "https://cdn.simpleicons.org/openai/0f172a",
    fallback: "O",
    tint: "from-emerald-100 via-emerald-50 to-white",
    border: "border-emerald-200",
    text: "text-emerald-700",
    bar: "#10b981",
  },
  Google: {
    logo: "https://cdn.simpleicons.org/google/0f172a",
    fallback: "G",
    tint: "from-sky-100 via-sky-50 to-white",
    border: "border-sky-200",
    text: "text-sky-700",
    bar: "#38bdf8",
  },
  Anthropic: {
    logo: "https://cdn.simpleicons.org/anthropic/0f172a",
    fallback: "A",
    tint: "from-amber-100 via-amber-50 to-white",
    border: "border-amber-200",
    text: "text-amber-700",
    bar: "#f59e0b",
  },
  Maze: {
    logo: "",
    fallback: "M",
    tint: "from-violet-100 via-violet-50 to-white",
    border: "border-violet-200",
    text: "text-violet-700",
    bar: "#8b5cf6",
  },
  UserTesting: {
    logo: "",
    fallback: "UT",
    tint: "from-blue-100 via-blue-50 to-white",
    border: "border-blue-200",
    text: "text-blue-700",
    bar: "#2563eb",
  },
  Dovetail: {
    logo: "",
    fallback: "D",
    tint: "from-fuchsia-100 via-fuchsia-50 to-white",
    border: "border-fuchsia-200",
    text: "text-fuchsia-700",
    bar: "#d946ef",
  },
  Hotjar: {
    logo: "https://cdn.simpleicons.org/hotjar/0f172a",
    fallback: "H",
    tint: "from-orange-100 via-orange-50 to-white",
    border: "border-orange-200",
    text: "text-orange-700",
    bar: "#f97316",
  },
};

const featuredSignals = [
  {
    id: "gpt54pro",
    product: "GPT-5.4 Pro",
    vendor: "OpenAI",
    role: "My most stable engine for research, synthesis, and decision framing.",
    statA: "58.7%",
    labelA: "HLE with tools",
    statB: "89.3%",
    labelB: "BrowseComp",
    confidence: { Trust: 96, Stability: 97, Speed: 93 },
    tags: ["Research", "Strategy", "Synthesis"],
    why: [
      "Best fit when I need structured synthesis rather than raw generation.",
      "Excellent for turning scattered findings into decision-ready narratives.",
      "My default first pass for high-stakes product research and framing.",
    ],
    caution: "I still pair it with a second-pass check when accuracy matters.",
    verdict:
      "If I need dependable research output with strong narrative structure, this is where I start.",
  },
  {
    id: "gemini31pro",
    product: "Gemini 3.1 Pro",
    vendor: "Google",
    role: "Best balance of multimodal reasoning, huge context, and engineering breadth.",
    statA: "77.1%",
    labelA: "ARC-AGI-2",
    statB: "1M",
    labelB: "Context window",
    confidence: { Trust: 93, Stability: 92, Speed: 94 },
    tags: ["Multimodal", "Long Context", "Code"],
    why: [
      "Strong when text, screenshots, documents, and code all need to be reasoned through together.",
      "The most versatile one-model option in this landscape.",
      "Especially useful for repo-scale or document-heavy problem spaces.",
    ],
    caution: "I treat it as a powerful generalist, then verify critical conclusions.",
    verdict:
      "This is the cleanest all-rounder when the workflow spans multiple media types.",
  },
  {
    id: "claude46",
    product: "Claude 4.6",
    vendor: "Anthropic",
    role: "Strongest editorial polish and one of the best collaboration tools for dense thinking.",
    statA: "80.8%",
    labelA: "SWE Verified",
    statB: "1M beta",
    labelB: "Context",
    confidence: { Trust: 95, Stability: 94, Speed: 90 },
    tags: ["Writing", "Refinement", "Knowledge Work"],
    why: [
      "Often gives the most polished articulation and strongest tone control.",
      "Very useful when translating complexity into persuasive product stories.",
      "A strong editorial partner for memos, PRDs, and executive-ready synthesis.",
    ],
    caution: "I use it less as a benchmark chaser and more as a clarity amplifier.",
    verdict:
      "If the output needs to feel thoughtful, composed, and presentation-ready, Claude stays in the stack.",
  },
  {
    id: "maze",
    product: "Maze",
    vendor: "Maze",
    role: "My top pick for evidence-backed UX research and design validation.",
    statA: "Top pick",
    labelA: "Validation platform",
    statB: "End-to-end",
    labelB: "Prototype to live",
    confidence: { Trust: 94, Stability: 92, Speed: 91 },
    tags: ["Validation", "Usability", "Evidence"],
    why: [
      "The strongest product-design fit when I need measurable usability proof plus qualitative explanation.",
      "Lets me test prototypes, IA, surveys, interviews, and live-site paths in one ecosystem.",
      "The easiest way to show that a design direction is measurably better, not just visually cleaner.",
    ],
    caution:
      "I still complement it with deeper synthesis tools when I need cross-study research memory.",
    verdict:
      "If I had to choose one AI-enabled platform for design validation, I would choose Maze.",
  },
];

const foundationMetricDeck: Record<
  string,
  {
    title: string;
    suffix: string;
    note: string;
    rows: { name: string; vendor: string; value: number }[];
  }
> = {
  hleTools: {
    title: "Broad reasoning with tools",
    suffix: "%",
    note: "A high-signal snapshot for tool-augmented reasoning across difficult tasks.",
    rows: [
      { name: "GPT-5.4 Pro", vendor: "OpenAI", value: 58.7 },
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 53.1 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 51.4 },
    ],
  },
  browseComp: {
    title: "Web research and browsing",
    suffix: "%",
    note: "Useful as a proxy for persistent web search and hard-to-find information gathering.",
    rows: [
      { name: "GPT-5.4 Pro", vendor: "OpenAI", value: 89.3 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 85.9 },
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 84.0 },
    ],
  },
  arcAgi2: {
    title: "Novel abstract reasoning",
    suffix: "%",
    note: "Helpful for showing generalization to unfamiliar reasoning problems.",
    rows: [
      { name: "GPT-5.4 Pro", vendor: "OpenAI", value: 83.3 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 77.1 },
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 68.8 },
    ],
  },
  swe: {
    title: "Real software engineering",
    suffix: "%",
    note: "A better coding signal than toy generation because it measures solving real repo issues.",
    rows: [
      { name: "Claude Opus 4.6", vendor: "Anthropic", value: 80.8 },
      { name: "Gemini 3.1 Pro", vendor: "Google", value: 80.6 },
      { name: "Claude Sonnet 4.6", vendor: "Anthropic", value: 79.6 },
    ],
  },
};

const validationTools = [
  {
    id: "maze",
    name: "Maze",
    vendor: "Maze",
    fit: "Best overall pick for UX research and design validation.",
    scoreValidation: 97,
    scoreQuantQual: 96,
    scoreEvidence: 90,
    scorePrototype: 99,
    scoreLive: 84,
    badge: "Recommended",
    why:
      "The closest thing to an end-to-end design validation platform for product teams.",
    strengths: [
      "Strongest fit when I need measurable usability proof and qualitative explanation together.",
      "Excellent for pre-build prototype validation and information architecture checks.",
      "The most portfolio-friendly option when I need to prove that the design improved outcomes.",
    ],
    proof: ["Completion rate", "Misclick rate", "Average duration", "Mission paths", "Variant testing"],
    workflow:
      "Use Maze when the question is: did this design help people complete the task faster, cleaner, and with less confusion?",
  },
  {
    id: "usertesting",
    name: "UserTesting",
    vendor: "UserTesting",
    fit: "Best for video evidence, behavioral signal, and stakeholder-ready clips.",
    scoreValidation: 90,
    scoreQuantQual: 88,
    scoreEvidence: 95,
    scorePrototype: 80,
    scoreLive: 86,
    badge: "Human signal",
    why:
      "Strongest when I need stakeholders to see and hear real user friction, not just read a score.",
    strengths: [
      "Very strong for combining video, audio, text, and behavioral data into fast AI summaries.",
      "Excellent when persuasion matters and I need evidence that feels emotionally real.",
      "A great fit for showing where people struggle and how that maps to design decisions.",
    ],
    proof: ["AI insight summary", "Behavioral transcripts", "Friction detection", "Survey themes"],
    workflow:
      "Use UserTesting when the question is: what are people actually struggling with, and can I show that convincingly?",
  },
  {
    id: "dovetail",
    name: "Dovetail",
    vendor: "Dovetail",
    fit: "Best for qualitative synthesis and evidence-backed research memory.",
    scoreValidation: 82,
    scoreQuantQual: 86,
    scoreEvidence: 98,
    scorePrototype: 62,
    scoreLive: 70,
    badge: "Research memory",
    why:
      "Best when the challenge is synthesis, traceability, and turning many studies into reusable knowledge.",
    strengths: [
      "Excellent for evidence-backed AI search across interviews, notes, and artifacts.",
      "Strongest trust signal is that answers point back to source evidence.",
      "Especially valuable when research needs to stay durable across projects and teams.",
    ],
    proof: ["Deep-linked citations", "AI search", "Magic summaries", "Evidence-backed answers"],
    workflow:
      "Use Dovetail when the question is: what does our body of evidence say, and how do we keep it reusable?",
  },
  {
    id: "hotjar",
    name: "Hotjar",
    vendor: "Hotjar",
    fit: "Best lightweight layer for live-site behavior and post-launch friction.",
    scoreValidation: 79,
    scoreQuantQual: 78,
    scoreEvidence: 80,
    scorePrototype: 48,
    scoreLive: 97,
    badge: "Live behavior",
    why:
      "Strongest as an always-on behavioral layer after launch rather than as a prototype-first platform.",
    strengths: [
      "Fast route to session replay, heatmaps, funnels, and AI-generated summaries.",
      "Useful for spotting drop-offs and confusion in real production journeys.",
      "A practical complement when I need post-launch validation, not just pre-launch testing.",
    ],
    proof: ["Heatmaps", "Session replay", "Funnels", "AI summaries"],
    workflow:
      "Use Hotjar when the question is: where are people dropping off in the live experience, and what should I inspect next?",
  },
];

const validationMetricDeck: Record<string, string> = {
  scoreValidation: "Design validation fit",
  scoreQuantQual: "Quant plus qual balance",
  scoreEvidence: "Evidence traceability",
  scorePrototype: "Prototype support",
  scoreLive: "Live behavior signal",
};

const categoryCards = [
  {
    title: "AI critique and synthesis engines",
    subtitle: "Best fit: GPT, Gemini, Claude",
    points: [
      "Heuristic critique",
      "Hypothesis generation",
      "Survey and interview script drafting",
      "Flow analysis and content evaluation",
      "Research synthesis and framing",
    ],
    outcome:
      "These tools help me think faster and more broadly, but they do not prove real user behavior on their own.",
    icon: Bot,
  },
  {
    title: "Evidence-backed validation platforms",
    subtitle: "Best fit: Maze, UserTesting, Dovetail, Hotjar",
    points: [
      "Task completion and drop-off evidence",
      "Behavioral friction patterns",
      "AI summaries on real user data",
      "Interview and survey analysis",
      "Research traceability and reuse",
    ],
    outcome:
      "These tools help me transform user behavior and research data into defensible evidence.",
    icon: ShieldCheck,
  },
];

function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

function getSortedRows(
  rows: { name: string; vendor: string; value: number }[]
): { name: string; vendor: string; value: number; fill: string }[] {
  return [...rows]
    .sort((a, b) => b.value - a.value)
    .map((row) => ({ ...row, fill: brandMap[row.vendor].bar }));
}

type ValidationMetricKey =
  | "scoreValidation"
  | "scoreQuantQual"
  | "scoreEvidence"
  | "scorePrototype"
  | "scoreLive";

function getValidationRows(
  metricKey: ValidationMetricKey
): { name: string; vendor: string; value: number; fill: string }[] {
  return [...validationTools]
    .map((tool) => ({
      name: tool.name,
      vendor: tool.vendor,
      value: tool[metricKey],
    }))
    .sort((a, b) => b.value - a.value)
    .map((row) => ({ ...row, fill: brandMap[row.vendor].bar }));
}

function runSanityChecks(): boolean {
  const rankingOk = getValidationRows("scoreValidation")[0]?.name === "Maze";
  const liveOk = getValidationRows("scoreLive")[0]?.name === "Hotjar";
  const sortingOk =
    getSortedRows([
      { name: "B", vendor: "OpenAI", value: 1 },
      { name: "A", vendor: "Google", value: 2 },
    ])[0]?.name === "A";
  const categoryOk = categoryCards.length === 2;
  const featuredOk = featuredSignals.length === 4;
  return rankingOk && liveOk && sortingOk && categoryOk && featuredOk;
}

function BrandMark({
  vendor,
  className = "h-11 w-11",
}: {
  vendor: string;
  className?: string;
}) {
  const brand = brandMap[vendor];
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border bg-white",
        brand.border,
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", brand.tint)} />
      {brand.logo && !imgError ? (
        <img
          src={brand.logo}
          alt={vendor}
          className="relative z-10 h-5 w-5"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={cn("relative z-10 text-xs font-semibold", brand.text)}>
          {brand.fallback}
        </span>
      )}
    </div>
  );
}

function ChipButton(props: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const { active, onClick, children } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs transition-all duration-300",
        active
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900",
      )}
    >
      {children}
    </button>
  );
}

function MetricBar(props: { label: string; value: number }) {
  const { label, value } = props;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{label}</span>
        <span className="font-medium text-slate-900">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500"
        />
      </div>
    </div>
  );
}

function ChartTooltip(props: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
  suffix?: string;
}) {
  const { active, payload, label, suffix = "" } = props || {};
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs shadow-xl">
      <div className="mb-1 font-medium text-slate-900">{label}</div>
      <div className="text-slate-600">
        Score:{" "}
        <span className="text-slate-900">
          {payload[0].value}
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default function AiMarketLandscapeWhiteModule() {
  const [selectedProductId, setSelectedProductId] = useState("gpt54pro");
  const [selectedFoundationMetric, setSelectedFoundationMetric] = useState("hleTools");
  const [selectedValidationToolId, setSelectedValidationToolId] = useState("maze");
  const [selectedValidationMetric, setSelectedValidationMetric] =
    useState<ValidationMetricKey>("scoreValidation");

  const selectedProduct =
    featuredSignals.find((item) => item.id === selectedProductId) || featuredSignals[0];

  const currentFoundationMetric =
    foundationMetricDeck[selectedFoundationMetric] || foundationMetricDeck.hleTools;

  const foundationChartRows = useMemo(() => {
    return getSortedRows(currentFoundationMetric.rows);
  }, [currentFoundationMetric]);

  const selectedValidationTool =
    validationTools.find((tool) => tool.id === selectedValidationToolId) || validationTools[0];

  const validationChartRows = useMemo(() => {
    return getValidationRows(selectedValidationMetric);
  }, [selectedValidationMetric]);

  const sanityPassed = useMemo(() => runSanityChecks(), []);

  return (
    <section className="w-full py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1600px] px-8 md:px-16 lg:px-24">
        <div className="space-y-10">
          <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            <div className="relative z-10 p-6 md:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:gap-8">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-500 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Market Snapshot
                  </div>

                  <div className="max-w-4xl space-y-4">
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.85rem] lg:leading-[1.03]">
                      AI Landscape
                      <br />
                      <span className="text-slate-500">
                        What I Trust for Real Product Work
                      </span>
                    </h2>
                    <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-[15px]">
                      A selective market read that combines foundation-model research with a
                      product-design lens. Instead of a generic AI tools list, this view shows which
                      systems feel most stable, which platform I would trust for design validation,
                      and how I separate fast AI critique from evidence-backed user validation.
                    </p>
                  </div>

                  <div className="grid gap-3 grid-cols-2">
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
                        sub: "1M context · multimodal breadth",
                        icon: Layers3,
                      },
                      {
                        label: "Best editorial collaborator",
                        value: "Claude 4.6",
                        sub: "Polished articulation · dense thinking",
                        icon: Bot,
                      },
                      {
                        label: "Best validation pick",
                        value: "Maze",
                        sub: "Prototype, IA, survey, interview, live testing",
                        icon: MousePointerClick,
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-3xl border border-slate-200 bg-white p-4"
                        >
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100">
                            <Icon className="h-4 w-4 text-slate-800" />
                          </div>
                          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                            {item.label}
                          </div>
                          <div className="mt-2 text-base font-medium text-slate-900">
                            {item.value}
                          </div>
                          <div className="mt-1 text-xs leading-6 text-slate-500">{item.sub}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-900">
                    <CircleDashed className="h-4 w-4" />
                    Evaluation lens
                  </div>
                  <div className="space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      I evaluate AI tools through two layers:{" "}
                      <span className="text-slate-900">public performance signals</span> and{" "}
                      <span className="text-slate-900">workflow reliability</span>.
                    </p>
                    <div className="grid gap-3">
                      {[
                        "Benchmarks tell me who leads a lane: reasoning, web search, coding, or long-context work.",
                        "Workflow reliability tells me what I would actually trust in a real design or research environment.",
                        "For design validation, the strongest tool is not a foundation model. It is a platform that makes evidence usable.",
                      ].map((text) => (
                        <div
                          key={text}
                          className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
                          <p className="text-sm leading-6 text-slate-600">{text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs leading-6 text-slate-500">
                      Public benchmark figures are grounded in official model and platform materials.
                      Trust, stability, and editorial-fit scores are my synthesis for portfolio
                      storytelling.
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs leading-6 text-slate-500">
                      Sanity checks: {sanityPassed ? "passed" : "review needed"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-2">
            {categoryCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
                      <Icon className="h-5 w-5 text-slate-800" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                      <div className="text-sm text-slate-500">{item.subtitle}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-600"
                      >
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    <span className="font-medium text-slate-900">Bottom line:</span> {item.outcome}
                  </div>
                </div>
              );
            })}
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Star className="h-4 w-4 text-slate-800 shrink-0" />
              <h3 className="text-lg font-medium text-slate-900">
                Signals I would confidently speak to in an interview
              </h3>
            </div>

            <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
              {featuredSignals.map((item) => {
                const isActive = item.id === selectedProductId;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setSelectedProductId(item.id)}
                    className={cn(
                      "rounded-[22px] p-4 text-left transition-all duration-300",
                      isActive
                        ? "ring-1 ring-slate-200 ring-inset bg-white"
                        : "bg-slate-50 hover:bg-slate-100",
                    )}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <BrandMark vendor={item.vendor} className="h-10 w-10 shrink-0" />
                      <div
                        className={cn(
                          "flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.14em] shrink-0",
                          brandMap[item.vendor].border,
                          brandMap[item.vendor].text,
                        )}
                      >
                        {item.vendor}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-900">{item.product}</div>
                    <div className="mt-2 text-xs leading-6 text-slate-500 line-clamp-2">
                      {item.role}
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className={cn("rounded-xl p-2", isActive ? "bg-slate-100" : "bg-white")}>
                        <div className="text-sm font-semibold text-slate-900">{item.statA}</div>
                        <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
                          {item.labelA}
                        </div>
                      </div>
                      <div className={cn("rounded-xl p-2", isActive ? "bg-slate-100" : "bg-white")}>
                        <div className="text-sm font-semibold text-slate-900">{item.statB}</div>
                        <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
                          {item.labelB}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="rounded-[28px] border border-slate-200 bg-white p-5 md:p-6"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1 max-w-3xl">
                  <div className="mb-3 flex items-center gap-3">
                    <BrandMark vendor={selectedProduct.vendor} className="h-12 w-12" />
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                        Selected signal
                      </div>
                      <div className="text-2xl font-semibold text-slate-900">
                        {selectedProduct.product}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-600 md:whitespace-nowrap">{selectedProduct.verdict}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProduct.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm min-w-0 shrink-0 md:ml-auto">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 text-right">
                    Quick read
                  </div>
                  <div className="flex gap-6 justify-end">
                    <div className="flex items-center gap-3 text-slate-600">
                      <span className="text-slate-500">Metric A</span>
                      <span className="font-medium text-slate-900">{selectedProduct.statA}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <span className="text-slate-500">Metric B</span>
                      <span className="font-medium text-slate-900">{selectedProduct.statB}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <span className="text-slate-500">Primary lane</span>
                      <span className="font-medium text-slate-900">{selectedProduct.tags[0]}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[24px] bg-slate-50 p-4">
                  <div className="text-sm font-medium text-slate-900 mb-3">
                    Portfolio editorial signal
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProduct.confidence).map(([label, value]) => (
                      <MetricBar key={label} label={label} value={value} />
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] bg-slate-50 p-4">
                  <div className="text-sm font-medium text-slate-900">
                    Why it stays in my stack
                  </div>
                  <div className="space-y-2">
                    {selectedProduct.why.map((point) => (
                      <div key={point} className="flex gap-3">
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
                        <p className="text-sm leading-6 text-slate-600">{point}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900">
                    <span className="font-medium">Watchout:</span> {selectedProduct.caution}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-white p-5 md:p-6 lg:p-7">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-900">
                  <BarChart3 className="h-4 w-4" />
                  Foundation model benchmark lab
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Where each model actually wins
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                  Instead of pretending there is one universal winner, I compare models lane by lane.
                  That is the more useful mindset for real workflows.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500">
                Selected lens:{" "}
                <span className="text-slate-900">{currentFoundationMetric.title}</span>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[24px] border border-slate-200 bg-white p-4 md:p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                  {Object.entries(foundationMetricDeck).map(([key, item]) => (
                    <ChipButton
                      key={key}
                      active={selectedFoundationMetric === key}
                      onClick={() => setSelectedFoundationMetric(key)}
                    >
                      {item.title}
                    </ChipButton>
                  ))}
                </div>

                <div className="h-[340px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={foundationChartRows}
                      margin={{ top: 10, right: 8, left: 0, bottom: 18 }}
                      barCategoryGap={18}
                    >
                      <CartesianGrid stroke="#e5e7eb" vertical={false} />
                      <XAxis
                        dataKey="name"
                        stroke="#64748b"
                        tickLine={false}
                        axisLine={false}
                        angle={-8}
                        height={64}
                        textAnchor="end"
                        interval={0}
                        fontSize={12}
                      />
                      <YAxis
                        stroke="#64748b"
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 100]}
                        fontSize={12}
                      />
                      <Tooltip
                        content={<ChartTooltip suffix={currentFoundationMetric.suffix} />}
                        cursor={{ fill: "rgba(15,23,42,0.04)" }}
                      />
                      <Bar dataKey="value" radius={[12, 12, 4, 4]}>
                        {foundationChartRows.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] bg-slate-50 p-4 md:p-5">
                  <div className="text-sm font-medium text-slate-900">Interpretation</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {currentFoundationMetric.note}
                  </p>
                  <div className="mt-4 rounded-2xl bg-slate-100 p-3 text-sm leading-6 text-slate-600">
                    <span className="font-medium text-slate-900">My read:</span> benchmark leadership
                    is already splitting into research, reasoning, and engineering lanes. The right
                    tool depends on the job.
                  </div>
                </div>

                <div className="rounded-[24px] bg-slate-50 p-4 md:p-5">
                  <div className="mb-3 text-sm font-medium text-slate-900">Current ranking</div>
                  <div className="space-y-3">
                    {foundationChartRows.map((row, index) => (
                      <div
                        key={row.name}
                        className="flex items-center justify-between rounded-2xl bg-white px-3 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-xs font-medium text-slate-700">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-sm text-slate-900">{row.name}</div>
                            <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                              {row.vendor}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-slate-900">
                          {row.value}
                          {currentFoundationMetric.suffix}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-white p-5 md:p-6 lg:p-7">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-900">
                  <Compass className="h-4 w-4" />
                  Design validation intelligence
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Which AI-enabled platform I would trust for UX research and validation
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 md:whitespace-nowrap">
                  This is the product-design-relevant layer: not which model is smartest, but which
                  platform helps me turn real user behavior into defensible evidence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[24px] border border-slate-200 bg-white p-4 md:p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                  {Object.entries(validationMetricDeck).map(([key, label]) => (
                    <ChipButton
                      key={key}
                      active={selectedValidationMetric === key}
                      onClick={() => setSelectedValidationMetric(key as ValidationMetricKey)}
                    >
                      {label}
                    </ChipButton>
                  ))}
                </div>

                <div className="h-[170px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={validationChartRows}
                      margin={{ top: 10, right: 8, left: 0, bottom: 18 }}
                      barCategoryGap={18}
                    >
                      <CartesianGrid stroke="#e5e7eb" vertical={false} />
                      <XAxis
                        dataKey="name"
                        stroke="#64748b"
                        tickLine={false}
                        axisLine={false}
                        angle={-8}
                        height={64}
                        textAnchor="end"
                        interval={0}
                        fontSize={12}
                      />
                      <YAxis
                        stroke="#64748b"
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 100]}
                        fontSize={12}
                      />
                      <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(15,23,42,0.04)" }} />
                      <Bar dataKey="value" radius={[12, 12, 4, 4]}>
                        {validationChartRows.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                {validationTools.map((tool) => {
                  const active = selectedValidationToolId === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => setSelectedValidationToolId(tool.id)}
                    className={cn(
                      "rounded-[22px] p-4 text-left transition-all duration-300",
                      active
                        ? "ring-1 ring-slate-200 ring-inset bg-white"
                        : "bg-slate-50 hover:bg-slate-100",
                    )}
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <BrandMark vendor={tool.vendor} className="h-10 w-10" />
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                          {tool.badge}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-slate-900">{tool.name}</div>
                      <div className="mt-2 text-xs leading-6 text-slate-500">{tool.fit}</div>
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={selectedValidationTool.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 md:p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <BrandMark vendor={selectedValidationTool.vendor} className="h-12 w-12" />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Focused review
                    </div>
                    <div className="text-2xl font-semibold text-slate-900">
                      {selectedValidationTool.name}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-600">
                  {selectedValidationTool.why}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-900">
                      <Search className="h-4 w-4" />
                      Why I would use it
                    </div>
                    <div className="space-y-3">
                      {selectedValidationTool.strengths.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-900">
                      <Database className="h-4 w-4" />
                      Proof signals
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedValidationTool.proof.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600">
                  <div className="mb-2 flex items-center gap-2 font-medium text-slate-900">
                    <Eye className="h-4 w-4" />
                    Workflow note
                  </div>
                  {selectedValidationTool.workflow}
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useCallback, useEffect } from "react";
import WorkNav from "@/components/WorkNav";
import SectionNav from "@/components/SectionNav";
import { ScrollReveal } from "@/components/ScrollReveal";
import PageFooter from "@/components/PageFooter";
import HeroGlow from "@/components/HeroGlow";
import { PRISM_SECTIONS } from "@/lib/section-nav-config";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  Layers,
  Target,
  Clock,
  User,
  Monitor,
  ChevronRight,
  CheckCircle,
  Copy,
  ArrowLeft,
  Activity,
  Server,
  Lock,
  Zap,
  FileText,
  RotateCcw,
  UserX,
  Wifi,
  ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Screen = "dashboard" | "detail" | "response";
type IncidentStatus = "Open" | "Investigating" | "Contained";

interface Incident {
  id: number;
  title: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  status: IncidentStatus;
  mitre: string[];
  user: string;
  devices: number;
  time: string;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const MITRE_COLORS: Record<string, string> = {
  "Initial Access": "bg-red-500/20 text-red-400 border-red-500/30",
  "Credential Access": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Lateral Movement": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Collection: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Persistence: "bg-emerald-50 text-emerald-400 border-emerald-500/30",
  Execution: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

const SEVERITY_COLORS: Record<string, string> = {
  Critical: "bg-red-500/20 text-red-400 border-red-500/40",
  High: "bg-orange-500/20 text-orange-400 border-orange-500/40",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  Low: "bg-blue-50 text-blue-600 border-blue-500/40",
};

const STATUS_COLORS: Record<string, string> = {
  Open: "bg-red-500/10 text-red-400",
  Investigating: "bg-amber-500/10 text-amber-400",
  Contained: "bg-emerald-500/10 text-emerald-400",
};

const INITIAL_INCIDENTS: Incident[] = [
  {
    id: 1042,
    title: "Suspected Phishing → Credential Theft → Lateral Movement",
    severity: "Critical",
    status: "Open",
    mitre: ["Initial Access", "Credential Access", "Lateral Movement"],
    user: "j.chen@acme.com",
    devices: 3,
    time: "2 hours ago",
  },
  {
    id: 1041,
    title: "Unusual outbound traffic from staging-db-01",
    severity: "High",
    status: "Investigating",
    mitre: ["Execution", "Collection"],
    user: "svc-deploy@acme.com",
    devices: 1,
    time: "5 hours ago",
  },
  {
    id: 1040,
    title: "Failed login brute force — admin portal",
    severity: "Medium",
    status: "Open",
    mitre: ["Credential Access"],
    user: "admin@acme.com",
    devices: 1,
    time: "8 hours ago",
  },
  {
    id: 1039,
    title: "Suspicious PowerShell execution on endpoint-14",
    severity: "High",
    status: "Investigating",
    mitre: ["Execution", "Persistence"],
    user: "m.rodriguez@acme.com",
    devices: 1,
    time: "12 hours ago",
  },
  {
    id: 1038,
    title: "Anomalous DNS queries to unknown C2 domain",
    severity: "Medium",
    status: "Contained",
    mitre: ["Initial Access"],
    user: "k.patel@acme.com",
    devices: 2,
    time: "1 day ago",
  },
  {
    id: 1037,
    title: "Unauthorized access attempt to HR file share",
    severity: "Low",
    status: "Contained",
    mitre: ["Lateral Movement"],
    user: "t.wilson@acme.com",
    devices: 1,
    time: "2 days ago",
  },
];

const ATTACK_TIMELINE = [
  { time: "10:23 AM", title: "Phishing email received", tactic: "Initial Access", technique: "T1566", icon: FileText },
  { time: "10:25 AM", title: "User clicked malicious link", tactic: "Initial Access", technique: "T1566.002", icon: ArrowUpRight },
  { time: "10:26 AM", title: "Credential harvested via fake login page", tactic: "Credential Access", technique: "T1556", icon: Lock },
  { time: "10:41 AM", title: "Attacker authenticated with stolen creds", tactic: "Credential Access", technique: "T1078", icon: UserX },
  { time: "10:58 AM", title: "Lateral movement to finance-server-02", tactic: "Lateral Movement", technique: "T1021.001", icon: Wifi },
  { time: "11:15 AM", title: "Attempted data staging on finance-server-02", tactic: "Collection", technique: "T1074", icon: Server },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function MitreTag({ tactic }: { tactic: string }) {
  const color = MITRE_COLORS[tactic] || "bg-slate-500/20 text-slate-400 border-slate-500/30";
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider border ${color}`}>
      {tactic}
    </span>
  );
}

function SeverityBadge({ severity }: { severity: string }) {
  const color = SEVERITY_COLORS[severity] || "";
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider border ${color}`}>
      {severity}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const color = STATUS_COLORS[status] || "";
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Open" ? "bg-red-400" : status === "Investigating" ? "bg-amber-400" : "bg-emerald-400"}`} />
      {status}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 1 — Dashboard                                               */
/* ------------------------------------------------------------------ */

function DashboardScreen({ incidents, onSelectIncident }: { incidents: Incident[]; onSelectIncident: (id: number) => void }) {
  const criticalCount = incidents.filter((i) => i.severity === "Critical").length;
  const openCount = incidents.filter((i) => i.status === "Open").length;

  return (
    <div className="space-y-6">
      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Incidents", value: incidents.length, icon: Activity },
          { label: "Critical", value: criticalCount, icon: AlertTriangle, accent: "text-red-400" },
          { label: "Open", value: openCount, icon: Target },
          { label: "Avg Response", value: "34m", icon: Clock },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-4 md:p-5">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className={`w-4 h-4 ${stat.accent || "text-slate-400"}`} />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{stat.label}</span>
            </div>
            <p className={`text-2xl md:text-3xl font-bold ${stat.accent || "text-slate-900"}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Incident list */}
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Recent Incidents</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {incidents.map((incident) => (
            <button
              key={incident.id}
              onClick={() => onSelectIncident(incident.id)}
              className="w-full text-left px-5 py-4 hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-mono text-slate-500">#{incident.id}</span>
                    <SeverityBadge severity={incident.severity} />
                    <StatusBadge status={incident.status} />
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {incident.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {incident.mitre.map((t) => <MitreTag key={t} tactic={t} />)}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{incident.user}</span>
                    <span className="flex items-center gap-1"><Monitor className="w-3 h-3" />{incident.devices} device{incident.devices > 1 ? "s" : ""}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{incident.time}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 2 — Incident Detail                                         */
/* ------------------------------------------------------------------ */

function DetailScreen({ incident, onBack, onAction }: { incident: Incident; onBack: () => void; onAction: () => void }) {
  return (
    <div className="space-y-6">
      {/* Back + header */}
      <div>
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-600 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-xs font-mono text-slate-500">#{incident.id}</span>
          <SeverityBadge severity={incident.severity} />
          <StatusBadge status={incident.status} />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{incident.title}</h2>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{incident.user}</span>
          <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4" />{incident.devices} affected devices</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />First alert {incident.time}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attack Timeline */}
        <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Attack Timeline</h3>
          </div>
          <div className="p-5 space-y-0">
            {ATTACK_TIMELINE.map((step, i) => {
              const Icon = step.icon;
              const color = MITRE_COLORS[step.tactic] || "";
              const dotColor = step.tactic === "Initial Access" ? "bg-red-400" : step.tactic === "Credential Access" ? "bg-amber-400" : step.tactic === "Lateral Movement" ? "bg-purple-400" : "bg-cyan-400";
              return (
                <div key={i} className="flex gap-4 group">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${dotColor} ring-4 ring-white shrink-0 mt-1`} />
                    {i < ATTACK_TIMELINE.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1" />}
                  </div>
                  {/* Content */}
                  <div className="pb-6 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-mono text-slate-500">{step.time}</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${color}`}>
                        {step.technique}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                      <p className="text-sm text-slate-900 font-medium">{step.title}</p>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{step.tactic}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Affected Assets */}
          <div className="bg-white rounded-xl">
            <div className="px-5 py-4 border-b border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Affected Assets</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                <User className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-900 font-medium">j.chen@acme.com</p>
                  <p className="text-xs text-slate-500">User account</p>
                </div>
              </div>
              {["workstation-j-chen", "finance-server-02", "mail-gw-01"].map((device) => (
                <div key={device} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                  <Server className="w-4 h-4 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-900 font-medium">{device}</p>
                    <p className="text-xs text-slate-500">Device</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Risk Summary */}
          <div className="bg-white border border-blue-200 rounded-xl">
            <div className="px-5 py-4 border-b border-blue-200 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">AI Risk Summary</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                This incident shows a coordinated attack chain. The attacker used a targeted phishing email to harvest credentials, then moved laterally to a finance server. Immediate credential reset and device isolation recommended.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="bg-white rounded-xl">
        <div className="px-5 py-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Recommended Actions</h3>
        </div>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: "Reset Password", icon: RotateCcw, desc: "Reset credentials for j.chen@acme.com" },
            { label: "Revoke Sessions", icon: UserX, desc: "Terminate all active sessions" },
            { label: "Isolate Device", icon: Wifi, desc: "Isolate finance-server-02 from network" },
            { label: "Escalate to Tier 2", icon: ArrowUpRight, desc: "Escalate for forensic review" },
          ].map((action) => (
            <button
              key={action.label}
              onClick={onAction}
              className="flex flex-col items-start gap-2 p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 hover:bg-blue-50/50 transition-all group text-left"
            >
              <action.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              <p className="text-sm font-semibold text-slate-900">{action.label}</p>
              <p className="text-xs text-slate-500">{action.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 3 — Response Confirmation                                   */
/* ------------------------------------------------------------------ */

function ResponseScreen({ onBack }: { onBack: () => void }) {
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const summaryText = `Incident #1042 — Contained. Phishing-initiated attack chain targeting j.chen@acme.com. Attacker gained credentials via spoofed login, performed lateral movement to finance-server-02. Response: credentials reset, sessions revoked, device isolated. No evidence of data exfiltration. Escalated for forensic review.`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [summaryText]);

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-600 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      {/* Status header */}
      <div className="bg-white border border-emerald-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Incident #1042 — Contained</h2>
            <p className="text-sm text-emerald-400 font-medium">All recommended actions completed</p>
          </div>
        </div>
      </div>

      {/* Actions checklist */}
      <div className="bg-white rounded-xl">
        <div className="px-5 py-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Actions Taken</h3>
        </div>
        <div className="p-5 space-y-4">
          {[
            { text: "Password reset for j.chen@acme.com", time: "11:32 AM" },
            { text: "Active sessions revoked", time: "11:32 AM" },
            { text: "finance-server-02 isolated from network", time: "11:33 AM" },
            { text: "Escalated for forensic review — assigned to Tier 2", time: "11:34 AM" },
          ].map((action, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-slate-900">{action.text}</p>
                <p className="text-xs text-slate-500 mt-0.5">Completed at {action.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Summary */}
      <div className="bg-white rounded-xl">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Incident Summary</h3>
          {!summaryVisible && (
            <button
              onClick={() => setSummaryVisible(true)}
              className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold hover:bg-blue-100 transition-colors"
            >
              Generate Summary
            </button>
          )}
        </div>
        {summaryVisible && (
          <div className="p-5">
            <div className="bg-slate-50 rounded-lg p-4 relative">
              <p className="text-sm text-slate-600 leading-relaxed pr-10">{summaryText}</p>
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-500" />}
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">AI-generated summary — review before sharing.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

const PARENT_NAV_ITEMS = [
  { id: "ai-latest-work", label: "Latest Work", href: "/ai-explorations#ai-latest-work" },
  { id: "ai-design-workflow", label: "Design Workflow", href: "/ai-explorations#ai-design-workflow" },
  { id: "ai-capability-benchmark", label: "Research & Benchmarks", href: "/ai-explorations#ai-capability-benchmark" },
  { id: "ai-product-experiments", label: "Showcase", href: "/ai-explorations#ai-product-experiments" },
];

function PrismSubnav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:flex transition-all duration-300 ${
        scrolled ? "bg-gray-100/90 backdrop-blur-xl backdrop-saturate-150" : "bg-gray-100"
      }`}
    >
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 md:px-16 lg:px-24 py-3 md:py-4 flex justify-between items-center">
        <nav aria-label="Breadcrumb" className="text-sm flex items-center gap-2">
          <Link href="/ai-explorations" className="text-muted hover:text-blue-600 transition-colors font-semibold">
            AI Explorations
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-text font-semibold">PRISM</span>
        </nav>
        <div className="flex items-center justify-end gap-0">
          {PARENT_NAV_ITEMS.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && <span className="h-4 w-px bg-gray-300 mx-4 shrink-0" aria-hidden />}
              <Link
                href={item.href}
                className="text-sm font-semibold uppercase tracking-widest transition-colors duration-200 text-muted hover:text-blue-600"
              >
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PrismPage() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [incidents, setIncidents] = useState<Incident[]>(INITIAL_INCIDENTS);

  const heroIncident = incidents.find((i) => i.id === 1042)!;

  const handleSelectIncident = useCallback((id: number) => {
    if (id === 1042) setScreen("detail");
  }, []);

  const handleAction = useCallback(() => {
    setIncidents((prev) =>
      prev.map((i) => (i.id === 1042 ? { ...i, status: "Contained" as IncidentStatus } : i))
    );
    setScreen("response");
  }, []);

  const handleBackToDashboard = useCallback(() => {
    setScreen("dashboard");
  }, []);

  return (
    <div className="relative max-md:bg-black bg-bg text-text min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <WorkNav embed />
        <PrismSubnav />
      </header>
      <SectionNav sections={PRISM_SECTIONS} />

      <div className="pt-[96px] md:pt-[128px]">
        {/* ========== HERO ========== */}
        <header className="relative bg-[#080c1a] text-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200">
          <HeroGlow />
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10">
            <ScrollReveal direction="up" delay={0}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400 font-accent mb-4">
                Product Design Concept
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                PRISM
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-lg md:text-xl text-white/60 font-light italic mb-8 max-w-2xl">
                Decomposing threats. Composing clarity.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-3xl mb-10">
                A unified threat investigation platform designed around the MITRE ATT&CK framework — from detection to response.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-5xl">
                {[
                  { icon: Shield, label: "Role", value: "Staff-Level Concept" },
                  { icon: Layers, label: "Framework", value: "MITRE ATT&CK" },
                  { icon: Target, label: "Focus", value: "SOC Workflow" },
                  { icon: Activity, label: "Severity Levels", value: "5-Tier System" },
                ].map((m) => (
                  <div key={m.label} className="hero-card group p-3 sm:p-5 rounded-xl">
                    <m.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-2 sm:mb-3" />
                    <h3 className="font-semibold text-base sm:text-lg text-white mb-1">{m.value}</h3>
                    <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide font-medium">{m.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* ========== CASE STUDY ========== */}
        <main className="bg-white">
          <div className="max-w-[1600px] mx-auto py-20 md:py-28 px-4 sm:px-6 md:px-16 lg:px-24 space-y-28">

            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 font-accent">01. Overview</h2>
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-6">
                  Why another security tool?
                </h3>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-5xl">
                  SOC analysts deal with thousands of alerts daily. Most are noise. The real threats — coordinated attack chains spanning phishing, credential theft, and lateral movement — get buried. PRISM reimagines threat investigation as a continuous, connected workflow. Instead of jumping between siloed tools, analysts see the full attack narrative mapped to MITRE ATT&CK, and respond from a single surface.
                </p>
              </ScrollReveal>
            </section>

            {/* Problem */}
            <section id="problem" className="scroll-mt-32">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-blue-600" />
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 font-accent">02. Problem</h2>
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-8">
                  Three systemic failures in SOC workflows
                </h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Activity, title: "Alert Fatigue", desc: "Analysts drown in isolated alerts with no context. Signal-to-noise ratio makes it nearly impossible to identify coordinated attacks." },
                  { icon: Layers, title: "Tool Fragmentation", desc: "Detection, investigation, and response live in separate products. Context is lost at every handoff." },
                  { icon: Target, title: "No Attack Narrative", desc: "Individual signals don't connect into a coherent story. Analysts must manually reconstruct attack chains across disconnected data." },
                ].map((problem, i) => (
                  <ScrollReveal key={problem.title} direction="up" delay={i * 100}>
                    <div className="bg-[#fafbfc] rounded-xl p-6 h-full">
                      <problem.icon className="w-6 h-6 text-red-400 mb-4" />
                      <h4 className="text-base font-semibold text-slate-900 mb-2">{problem.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{problem.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Approach */}
            <section id="approach" className="scroll-mt-32">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-4 w-4 text-blue-600" />
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 font-accent">03. Approach</h2>
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-8">
                  Design principles
                </h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "End-to-end workflow", desc: "Map the full analyst journey: detect → investigate → respond. One surface, zero tool-switching." },
                  { title: "MITRE ATT&CK as structure", desc: "Not just labels — the organizing principle for how information is layered, connected, and color-coded." },
                  { title: "Progressive disclosure", desc: "Surface the right depth at the right moment. Dashboard → timeline → actions → summary." },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} direction="up" delay={i * 100}>
                    <div className="bg-[#fafbfc] rounded-xl p-6 h-full">
                      <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
                        <span className="text-sm font-bold text-blue-600">{i + 1}</span>
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Interactive Prototype */}
            <section id="prototype" className="scroll-mt-32">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="h-4 w-4 text-blue-600" />
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 font-accent">04. Initial Prototype Experiments</h2>
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-3">
                  Core Prototype Based on MITRE ATT&CK Framework
                </h3>
                <p className="text-base text-slate-500 mb-8 max-w-5xl">
                  A full SOC investigation workflow — from dashboard triage through automated response to case closure. Start with any incident.
                </p>
              </ScrollReveal>

              {/* Prototype container */}
              <div className="bg-[#fafbfc] rounded-2xl overflow-hidden shadow-sm">
                {/* Prototype top bar */}
                <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-bold text-slate-900 tracking-wide">PRISM</span>
                    <span className="text-xs text-slate-400 ml-2 hidden sm:inline">Security Operations Center</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 hidden sm:inline">
                      {screen === "dashboard" ? "Dashboard" : screen === "detail" ? "Incident Detail" : "Response"}
                    </span>
                    <div className="flex gap-1">
                      {(["dashboard", "detail", "response"] as Screen[]).map((s, i) => (
                        <div key={s} className={`w-2 h-2 rounded-full transition-colors ${screen === s ? "bg-blue-500" : "bg-slate-200"}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Prototype content */}
                <div className="p-4 md:p-6 min-h-[600px]">
                  {screen === "dashboard" && (
                    <DashboardScreen incidents={incidents} onSelectIncident={handleSelectIncident} />
                  )}
                  {screen === "detail" && (
                    <DetailScreen incident={heroIncident} onBack={handleBackToDashboard} onAction={handleAction} />
                  )}
                  {screen === "response" && (
                    <ResponseScreen onBack={handleBackToDashboard} />
                  )}
                </div>
              </div>
            </section>

            {/* Reflection */}
            <section id="reflection" className="scroll-mt-32">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-4 w-4 text-blue-600" />
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 font-accent">05. Reflection</h2>
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-6">
                  Designing for high-stakes environments
                </h3>
                <div className="max-w-5xl space-y-4">
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Security tools fail when they optimize for data density over decision clarity. The core insight behind PRISM is that SOC analysts don&apos;t need more information — they need better structure. MITRE ATT&CK provides that structure, but only if the interface treats it as architecture, not decoration.
                  </p>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    This concept draws directly from my experience building EagleEye at DiDi — a real security platform serving 500+ million users. The patterns are the same: reduce cognitive load, connect fragmented signals, and compress time-to-action. The difference is scope. PRISM explores what a unified SOC surface could look like if designed from first principles.
                  </p>
                </div>
              </ScrollReveal>
            </section>

          </div>
        </main>
      </div>

      <PageFooter />
    </div>
  );
}

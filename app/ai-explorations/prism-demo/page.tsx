"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Shield, LayoutDashboard, AlertTriangle, Target, Clock, User, Monitor,
  ChevronRight, CheckCircle, Copy, ArrowLeft, Activity, Server, Lock,
  Zap, FileText, RotateCcw, UserX, Wifi, ArrowUpRight, Search, Bell,
  Settings, Grid3X3, Box, Mail, Globe, MapPin, Loader2, ChevronDown,
  ExternalLink, Send, XCircle, Crosshair, Eye,
} from "lucide-react";

/* ================================================================== */
/*  TYPES                                                              */
/* ================================================================== */

type Screen = 1 | 2 | 3 | 4 | 5 | 6 | "incidents" | "attack-coverage" | "assets" | "settings";
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

/* ================================================================== */
/*  DATA                                                               */
/* ================================================================== */

const MITRE_COLORS: Record<string, string> = {
  "Initial Access": "bg-red-500/20 text-red-400 border-red-500/30",
  "Credential Access": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Lateral Movement": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Collection: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Persistence: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Execution: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Exfiltration: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  "Defense Evasion": "bg-slate-500/20 text-slate-400 border-slate-500/30",
  Impact: "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

const SEVERITY_COLORS: Record<string, string> = {
  Critical: "bg-red-500/20 text-red-400 border-red-500/40",
  High: "bg-orange-500/20 text-orange-400 border-orange-500/40",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  Low: "bg-blue-500/20 text-blue-400 border-blue-500/40",
};

const STATUS_COLORS: Record<string, string> = {
  Open: "text-red-400",
  Investigating: "text-amber-400",
  Contained: "text-emerald-400",
};

const STATUS_DOT: Record<string, string> = {
  Open: "bg-red-400",
  Investigating: "bg-amber-400",
  Contained: "bg-emerald-400",
};

const INCIDENTS: Incident[] = [
  { id: 1042, title: "Suspected Phishing \u2192 Credential Theft \u2192 Lateral Movement", severity: "Critical", status: "Open", mitre: ["Initial Access", "Credential Access", "Lateral Movement"], user: "j.chen@acme.com", devices: 3, time: "2 hours ago" },
  { id: 1041, title: "Unusual outbound traffic from staging-db-01", severity: "High", status: "Investigating", mitre: ["Execution", "Collection"], user: "svc-deploy@acme.com", devices: 1, time: "5 hours ago" },
  { id: 1040, title: "Failed login brute force \u2014 admin portal", severity: "Critical", status: "Open", mitre: ["Credential Access"], user: "admin@acme.com", devices: 1, time: "8 hours ago" },
  { id: 1039, title: "Suspicious PowerShell execution on endpoint-14", severity: "High", status: "Investigating", mitre: ["Execution", "Persistence"], user: "m.rodriguez@acme.com", devices: 1, time: "12 hours ago" },
  { id: 1038, title: "Anomalous DNS queries to unknown C2 domain", severity: "Medium", status: "Contained", mitre: ["Initial Access"], user: "k.patel@acme.com", devices: 2, time: "1 day ago" },
  { id: 1037, title: "Unauthorized access attempt to HR file share", severity: "Low", status: "Contained", mitre: ["Lateral Movement"], user: "t.wilson@acme.com", devices: 1, time: "2 days ago" },
];

const TIMELINE = [
  { time: "10:23 AM", title: "Phishing email received", tactic: "Initial Access", technique: "T1566.001", techniqueName: "Spearphishing Attachment", detail: "Email from 'hr-benefits@acme-corp.co' with attachment 'Benefits_Update.pdf.exe' delivered to j.chen@acme.com", confidence: "High", source: "Email Gateway", icon: Mail },
  { time: "10:25 AM", title: "User executed malicious attachment", tactic: "Execution", technique: "T1204.002", techniqueName: "Malicious File", detail: "j.chen opened attachment. Spawned powershell.exe with encoded command", confidence: "High", source: "EDR (CrowdStrike)", icon: FileText },
  { time: "10:26 AM", title: "Credential harvesting page loaded", tactic: "Credential Access", technique: "T1556", techniqueName: "Modify Authentication Process", detail: "Browser redirected to fake SSO login page at login-acme.attacker.com. User entered credentials", confidence: "Medium", source: "Proxy Logs", icon: Lock },
  { time: "10:41 AM", title: "Attacker authenticated with stolen creds", tactic: "Credential Access", technique: "T1078", techniqueName: "Valid Accounts", detail: "Successful login from IP 185.220.101.42 (Tor exit node) using j.chen credentials. Location: Romania", confidence: "High", source: "Azure AD", icon: UserX },
  { time: "10:58 AM", title: "Lateral movement to finance server", tactic: "Lateral Movement", technique: "T1021.001", techniqueName: "Remote Desktop Protocol", detail: "RDP session established from j.chen account to finance-server-02. Unusual: j.chen has never accessed this server", confidence: "High", source: "Windows Event Logs", icon: Wifi },
  { time: "11:15 AM", title: "Data staging detected", tactic: "Collection", technique: "T1074.001", techniqueName: "Local Data Staging", detail: "Multiple .xlsx files copied to C:\\Users\\Public\\temp\\ on finance-server-02. Files include Q4-revenue.xlsx, payroll-2024.xlsx", confidence: "High", source: "EDR (CrowdStrike)", icon: Server },
];

const RESPONSE_ACTIONS = [
  { label: "Reset Credentials", desc: "Reset password and revoke all tokens for j.chen@acme.com", completedText: "Credentials reset for j.chen@acme.com", time: "11:35:02 AM", icon: RotateCcw },
  { label: "Revoke Sessions", desc: "Terminate all active sessions across Azure AD, VPN, Email", completedText: "All sessions revoked \u2014 Azure AD, VPN, Email", time: "11:35:04 AM", icon: UserX },
  { label: "Isolate Device", desc: "Network-isolate finance-server-02 via EDR", completedText: "finance-server-02 isolated from network", time: "11:35:08 AM", icon: Wifi },
  { label: "Block Indicators", desc: "Block IP 185.220.101.42 and domain login-acme.attacker.com at firewall", completedText: "IP 185.220.101.42 + login-acme.attacker.com blocked", time: "11:35:11 AM", icon: Globe },
  { label: "Quarantine Email", desc: "Clawback phishing email from 12 mailboxes", completedText: "Phishing email removed from 12 mailboxes (12/12)", time: "11:35:18 AM", icon: Mail },
];

const ATTACK_TACTICS = ["Reconnaissance", "Resource Development", "Initial Access", "Execution", "Persistence", "Privilege Escalation", "Defense Evasion", "Credential Access", "Discovery", "Lateral Movement", "Collection", "Command and Control", "Exfiltration", "Impact"];

const ACTIVE_TECHNIQUES: Record<string, string[]> = {
  "Initial Access": ["T1566.001"],
  Execution: ["T1204.002"],
  "Credential Access": ["T1556", "T1078"],
  "Lateral Movement": ["T1021.001"],
  Collection: ["T1074.001"],
};

const PREDICTED_NEXT = [
  { tactic: "Exfiltration", technique: "T1041", name: "Exfiltration Over C2 Channel", desc: "Common follow-up after data staging. Monitor outbound traffic from finance-server-02." },
  { tactic: "Defense Evasion", technique: "T1070.004", name: "File Deletion", desc: "Attackers often clean up staging directories after exfil." },
  { tactic: "Impact", technique: "T1486", name: "Data Encrypted for Impact", desc: "Ransomware deployment possible if this is a ransomware group." },
];

const SUMMARY_TEXT = `Incident #1042 \u2014 Contained
Timeline: 10:23 AM - 11:42 AM (1h 19m)

Attack Summary: Targeted phishing email delivered to j.chen@acme.com (Finance Dept). Attacker harvested credentials via spoofed SSO page, authenticated from Tor exit node (185.220.101.42), established RDP to finance-server-02, and staged sensitive financial files for potential exfiltration.

MITRE ATT&CK Techniques: T1566.001, T1204.002, T1556, T1078, T1021.001, T1074.001

Response Actions Taken:
\u2022 Credentials reset for j.chen \u2014 11:35 AM
\u2022 All sessions revoked \u2014 11:35 AM
\u2022 finance-server-02 isolated \u2014 11:36 AM
\u2022 Attacker IP and domain blocked \u2014 11:37 AM
\u2022 Phishing email clawed back from 12 mailboxes \u2014 11:38 AM

No evidence of data exfiltration. Recommended: forensic review of finance-server-02, security awareness training for j.chen, review email gateway rules for .exe attachments.

Analyst: Wen Liu \u00b7 Closed: 11:42 AM`;

/* ================================================================== */
/*  SHARED UI                                                          */
/* ================================================================== */

function MitreTag({ tactic }: { tactic: string }) {
  const c = MITRE_COLORS[tactic] || "bg-slate-500/20 text-slate-400 border-slate-500/30";
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-none text-[11px] font-extrabold uppercase tracking-wider border ${c}`}>{tactic}</span>;
}

function SeverityBadge({ severity }: { severity: string }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-none text-[11px] font-extrabold uppercase tracking-wider border ${SEVERITY_COLORS[severity] || ""}`}>{severity}</span>;
}

function StatusDot({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${STATUS_COLORS[status] || ""}`}>
      <span className={`w-1.5 h-1.5 rounded-none ${STATUS_DOT[status] || ""}`} />
      {status}
    </span>
  );
}

/* ================================================================== */
/*  SCREEN 1 — Dashboard                                               */
/* ================================================================== */

function Screen1({ incidents, onSelect }: { incidents: Incident[]; onSelect: (id: number) => void }) {
  const critical = incidents.filter((i) => i.severity === "Critical").length;
  const open = incidents.filter((i) => i.status === "Open").length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { label: "Total Incidents", value: "24", icon: Activity, accent: "" },
          { label: "Critical", value: String(critical), icon: AlertTriangle, accent: "text-red-400" },
          { label: "Open", value: String(open), icon: Target, accent: "" },
          { label: "Avg Response", value: "34m", icon: Clock, accent: "" },
          { label: "ATT&CK Coverage", value: "73%", icon: Grid3X3, accent: "text-blue-400" },
        ].map((s) => (
          <div key={s.label} className="bg-[#141b2d] border border-white/[0.06] rounded-none p-4">
            <div className="flex items-center gap-1.5 mb-1.5">
              <s.icon className={`w-3.5 h-3.5 ${s.accent || "text-slate-300"}`} />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">{s.label}</span>
            </div>
            <p className={`text-2xl font-bold ${s.accent || "text-white"}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Needs Attention */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-2">Needs Attention</h3>
          {incidents.slice(0, 4).map((inc) => {
            const isOpen = inc.status !== "Contained";
            return (
              <button
                key={inc.id}
                onClick={isOpen ? () => onSelect(inc.id) : undefined}
                className={`w-full text-left p-5 rounded-none border transition-all group cursor-pointer ${isOpen ? "bg-[#141b2d] border-white/[0.06] hover:border-blue-500/50" : "bg-[#141b2d] border-white/[0.04] opacity-70"}`}
              >
                <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                  <span className="text-xs font-mono font-bold text-slate-300">#{inc.id}</span>
                  <SeverityBadge severity={inc.severity} />
                  <StatusDot status={inc.status} />
                  {isOpen && <span className="ml-auto text-xs text-blue-400 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Investigate &rarr;</span>}
                </div>
                <h4 className={`text-base font-extrabold mb-3 transition-colors ${isOpen ? "text-white group-hover:text-blue-400" : "text-white/60"}`}>{inc.title}</h4>
                <div className="flex flex-wrap gap-1.5 mb-3">{inc.mitre.map((t) => <MitreTag key={t} tactic={t} />)}</div>
                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{inc.user}</span>
                  <span className="flex items-center gap-1.5"><Monitor className="w-3.5 h-3.5" />{inc.devices}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{inc.time}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right sidebar */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-2">Overview</h3>
          {/* ATT&CK heatmap mini */}
          <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-3">ATT&CK Activity This Week</h3>
            <div className="grid grid-cols-7 gap-1">
              {ATTACK_TACTICS.map((t) => {
                const active = ["Initial Access", "Execution", "Credential Access"].includes(t);
                const medium = ["Lateral Movement", "Collection", "Persistence"].includes(t);
                return (
                  <div key={t} className="group relative">
                    <div className={`aspect-square rounded-none ${active ? "bg-red-500/40" : medium ? "bg-amber-500/20" : "bg-white/[0.04]"}`} />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-800 text-[9px] text-white rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">{t}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-3 mt-3 text-[10px] text-slate-300">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-none bg-red-500/40" />High</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-none bg-amber-500/20" />Medium</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-none bg-white/[0.04]" />Low</span>
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-3">Recent Activity</h3>
            <div className="space-y-3">
              {(incidents.some((i) => i.status === "Contained" && INCIDENTS.find((o) => o.id === i.id)?.status !== "Contained")
                ? [
                    { text: "Incident #1042 contained by Wen Liu", time: "2 min ago", dot: "bg-emerald-400" },
                    { text: "New detection rule deployed", time: "1h ago", dot: "bg-blue-400" },
                    { text: "Incident #1038 contained by m.wong", time: "3h ago", dot: "bg-emerald-400" },
                  ]
                : [
                    { text: "New detection rule deployed", time: "1h ago", dot: "bg-blue-400" },
                    { text: "Incident #1038 contained by m.wong", time: "3h ago", dot: "bg-emerald-400" },
                    { text: "3 new assets enrolled", time: "5h ago", dot: "bg-slate-400" },
                  ]
              ).map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-none mt-2 shrink-0 ${a.dot}`} />
                  <div>
                    <p className="text-sm font-bold text-slate-200">{a.text}</p>
                    <p className="text-xs font-bold text-slate-400">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  SCREEN 2 — Incident Detail (Timeline)                              */
/* ================================================================== */

function Screen2({ incident, onBack, onAttackMap, onResponse, assigned, onAssign }: { incident: Incident; onBack: () => void; onAttackMap: () => void; onResponse: () => void; assigned: boolean; onAssign: () => void }) {
  const [activeTab, setActiveTab] = useState<"timeline" | "attack" | "response">("timeline");

  const handleTab = (tab: "timeline" | "attack" | "response") => {
    if (tab === "attack") { onAttackMap(); return; }
    if (tab === "response") { onResponse(); return; }
    setActiveTab(tab);
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      <button onClick={onBack} className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Back to Dashboard</button>

      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm font-mono font-bold text-slate-300">#{incident.id}</span>
          <SeverityBadge severity={incident.severity} />
          <StatusDot status={incident.status} />
        </div>
        <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2">{incident.title}</h2>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
          <span>Assigned to: {assigned ? <span className="text-blue-400">Wen Liu</span> : <button onClick={onAssign} className="text-blue-400 hover:underline">Assign to me</button>}</span>
          <span>Created: 2h ago</span>
          <span>Last activity: 23m ago</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-white/[0.06]">
        {(["timeline", "attack", "response"] as const).map((tab) => (
          <button key={tab} onClick={() => handleTab(tab)} className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px ${activeTab === tab ? "text-blue-400 border-blue-400" : "text-slate-300 border-transparent hover:text-white"}`}>
            {tab === "timeline" ? "Timeline" : tab === "attack" ? "ATT&CK Map" : "Response"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-5">
            {TIMELINE.map((step, i) => {
              const Icon = step.icon;
              const tacticColor = step.tactic === "Initial Access" ? "bg-red-400" : step.tactic === "Execution" ? "bg-orange-400" : step.tactic === "Credential Access" ? "bg-amber-400" : step.tactic === "Lateral Movement" ? "bg-purple-400" : "bg-cyan-400";
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-none ${tacticColor} ring-4 ring-[#141b2d] shrink-0 mt-1.5`} />
                    {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-white/[0.06] my-1" />}
                  </div>
                  <div className="pb-5 min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[11px] font-mono text-slate-300">{step.time}</span>
                      <MitreTag tactic={step.tactic} />
                      <span className="text-[10px] font-mono text-slate-400">{step.technique}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                      <p className="text-sm font-bold text-white">{step.title}</p>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-1">{step.detail}</p>
                    <div className="flex gap-3 text-[10px] text-slate-400">
                      <span>Confidence: <span className={step.confidence === "High" ? "text-emerald-400" : "text-amber-400"}>{step.confidence}</span></span>
                      <span>Source: {step.source}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-4">
          <div className="bg-[#141b2d] border border-blue-500/20 rounded-none p-4">
            <div className="flex items-center gap-1.5 mb-2"><Zap className="w-3.5 h-3.5 text-blue-400" /><span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400">AI Summary</span></div>
            <p className="text-xs text-slate-300 leading-relaxed">This is a coordinated attack chain. An attacker sent a targeted phishing email to j.chen in the finance department. After harvesting credentials through a fake SSO page, the attacker logged in from a Tor exit node and moved laterally to finance-server-02, where they began staging sensitive financial documents. No exfiltration detected yet, but the attack is still active. Immediate credential reset and device isolation strongly recommended.</p>
          </div>
          <div className="bg-[#141b2d] border border-red-500/20 rounded-none p-4">
            <div className="flex items-center justify-between mb-1"><span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-300">Risk Score</span></div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-red-400">94</span><span className="text-xs text-slate-300 pb-1">/100</span>
            </div>
            <div className="w-full h-1.5 bg-white/[0.06] rounded-none mt-2 overflow-hidden"><div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-none" style={{ width: "94%" }} /></div>
          </div>
          <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-300 mb-2 block">Affected Assets</span>
            {[
              { name: "j.chen@acme.com", type: "User \u00b7 Finance Dept", icon: User },
              { name: "DESKTOP-JC2847", type: "Workstation \u00b7 Windows 11", icon: Monitor },
              { name: "finance-server-02", type: "Server \u00b7 Windows Server 2022", icon: Server },
            ].map((a) => (
              <div key={a.name} className="flex items-center gap-2.5 py-2 border-b border-white/[0.04] last:border-0">
                <a.icon className="w-3.5 h-3.5 text-slate-300" />
                <div><p className="text-xs text-white font-bold">{a.name}</p><p className="text-[10px] text-slate-400">{a.type}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  SCREEN 3 — ATT&CK Map                                             */
/* ================================================================== */

function Screen3({ incident, onBack, onResponse }: { incident: Incident; onBack: () => void; onResponse: () => void }) {
  return (
    <div className="space-y-5 animate-fadeIn">
      <button onClick={onBack} className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Back to Incident</button>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white mb-1">ATT&CK Map &mdash; Incident #{incident.id}</h2>
          <p className="text-xs text-slate-300">Techniques involved in this attack chain highlighted below</p>
        </div>
        <button onClick={onResponse} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold rounded-none transition-colors uppercase tracking-wider">Take Action</button>
      </div>

      {/* Matrix */}
      <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-5 overflow-x-auto">
        <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${ATTACK_TACTICS.length}, minmax(80px, 1fr))` }}>
          {ATTACK_TACTICS.map((t) => (
            <div key={t} className="text-center px-1 pb-2 border-b border-white/[0.06]">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-300 leading-tight block">{t}</span>
            </div>
          ))}
          {ATTACK_TACTICS.map((t) => {
            const techs = ACTIVE_TECHNIQUES[t];
            return (
              <div key={t + "-cell"} className="p-1 min-h-[60px]">
                {techs ? techs.map((tech) => (
                  <div key={tech} className="bg-blue-500/20 border border-blue-500/40 rounded-none px-1.5 py-1 mb-1 text-center">
                    <span className="text-[9px] font-bold text-blue-400 block">{tech}</span>
                  </div>
                )) : (
                  <div className="bg-white/[0.02] rounded-none h-8" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Predicted next */}
      <div className="bg-[#141b2d] border border-amber-500/20 rounded-none p-5">
        <div className="flex items-center gap-1.5 mb-3"><Eye className="w-3.5 h-3.5 text-amber-400" /><span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">Predicted Next Steps</span></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PREDICTED_NEXT.map((p) => (
            <div key={p.technique} className="bg-white/[0.02] border border-white/[0.04] rounded-none p-3">
              <div className="flex items-center gap-1.5 mb-1"><MitreTag tactic={p.tactic} /><span className="text-[10px] font-mono text-slate-400">{p.technique}</span></div>
              <p className="text-xs text-white font-bold mb-1">{p.name}</p>
              <p className="text-[11px] text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  SCREEN 4 — Response Actions                                        */
/* ================================================================== */

function Screen4({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const [executing, setExecuting] = useState(false);
  const [completedIdx, setCompletedIdx] = useState(-1);
  const [allDone, setAllDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleExecute = useCallback(() => {
    setExecuting(true);
    setCompletedIdx(-1);
    let idx = 0;
    const tick = () => {
      setCompletedIdx(idx);
      idx++;
      if (idx < RESPONSE_ACTIONS.length) {
        timerRef.current = setTimeout(tick, 1200);
      } else {
        timerRef.current = setTimeout(() => setAllDone(true), 800);
      }
    };
    timerRef.current = setTimeout(tick, 800);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const progress = executing ? Math.min(((completedIdx + 1) / RESPONSE_ACTIONS.length) * 100, 100) : 0;

  return (
    <div className="space-y-5 animate-fadeIn">
      <button onClick={onBack} className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Back to Incident</button>
      <h2 className="text-xl font-extrabold text-white">Respond to Incident #1042</h2>

      {executing && (
        <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400">{allDone ? "Response playbook complete" : "Executing response playbook..."}</span>
            <span className="text-xs font-mono text-slate-300">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-white/[0.06] rounded-none overflow-hidden">
            <div className={`h-full rounded-none transition-all duration-500 ${allDone ? "bg-emerald-500" : "bg-blue-500"}`} style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {allDone && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-none p-4 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-sm text-emerald-300 font-bold">All response actions completed successfully &mdash; 5/5 executed in 16 seconds</p>
        </div>
      )}

      <div className="bg-[#141b2d] border border-white/[0.06] rounded-none divide-y divide-white/[0.04]">
        {RESPONSE_ACTIONS.map((action, i) => {
          const Icon = action.icon;
          const done = i <= completedIdx;
          const running = executing && i === completedIdx + 1 && !allDone;
          return (
            <div key={i} className="flex items-start gap-3 p-4">
              <div className="mt-0.5 shrink-0">
                {done ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : running ? <Loader2 className="w-5 h-5 text-blue-400 animate-spin" /> : <div className="w-5 h-5 rounded-none border-2 border-white/[0.1]" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-slate-300" />
                  <p className={`text-sm font-bold ${done ? "text-white" : "text-slate-300"}`}>{done ? action.completedText : action.label}</p>
                </div>
                {!done && !running && <p className="text-xs text-slate-400 mt-0.5">{action.desc}</p>}
                {done && <p className="text-[10px] text-slate-400 mt-0.5">{action.time}</p>}
              </div>
            </div>
          );
        })}
      </div>

      {!executing && (
        <button onClick={handleExecute} className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-none transition-colors uppercase tracking-wider">Execute All Actions</button>
      )}
      {allDone && (
        <button onClick={onComplete} className="w-full py-3.5 bg-[#141b2d] border border-white/[0.08] hover:border-blue-500/40 text-white text-sm font-bold rounded-none transition-colors">Continue to Summary &rarr;</button>
      )}
    </div>
  );
}

/* ================================================================== */
/*  SCREEN 5 — Summary & Close                                        */
/* ================================================================== */

function Screen5({ incident, onClose }: { incident: Incident; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(SUMMARY_TEXT).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  }, []);

  return (
    <div className="space-y-5 animate-fadeIn">
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-none p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-none bg-emerald-500/20 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-emerald-400" /></div>
          <div><h2 className="text-base font-extrabold text-white">Incident #{incident.id} &mdash; Contained</h2><p className="text-sm text-emerald-400 font-bold">All response actions completed &middot; Ready to close</p></div>
        </div>
      </div>

      <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-5">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">Incident Summary</h3>
        <pre className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">{SUMMARY_TEXT}</pre>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button onClick={handleCopy} className="flex items-center justify-center gap-2 py-3 bg-[#141b2d] border border-white/[0.06] hover:border-blue-500/40 rounded-none text-xs font-bold text-slate-300 transition-colors">
          {copied ? <><CheckCircle className="w-3.5 h-3.5 text-emerald-400" />Copied!</> : <><Copy className="w-3.5 h-3.5" />Copy Summary</>}
        </button>
        <button className="flex items-center justify-center gap-2 py-3 bg-[#141b2d] border border-white/[0.06] hover:border-blue-500/40 rounded-none text-xs font-bold text-slate-300 transition-colors"><Send className="w-3.5 h-3.5" />Send to Slack</button>
        <button className="flex items-center justify-center gap-2 py-3 bg-[#141b2d] border border-white/[0.06] hover:border-blue-500/40 rounded-none text-xs font-bold text-slate-300 transition-colors"><ArrowUpRight className="w-3.5 h-3.5" />Escalate</button>
        <button onClick={() => setShowModal(true)} className="flex items-center justify-center gap-2 py-3 bg-blue-500 hover:bg-blue-600 rounded-none text-xs font-bold text-white transition-colors"><XCircle className="w-3.5 h-3.5" />Close Incident</button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="bg-[#1a2236] border border-white/[0.1] rounded-none p-6 max-w-sm w-full mx-4 text-center" onClick={(e) => e.stopPropagation()}>
            <XCircle className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <h3 className="text-base font-extrabold text-white mb-2">Close Incident #1042?</h3>
            <p className="text-xs text-slate-400 mb-5">This will mark the incident as resolved and notify all stakeholders.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] rounded-none text-xs font-bold text-slate-300 transition-colors">Cancel</button>
              <button onClick={() => { setShowModal(false); onClose(); }} className="flex-1 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-none text-xs font-bold text-white transition-colors">Close Incident</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  SIDEBAR & TOP BAR                                                  */
/* ================================================================== */

function Sidebar({ screen, onNav }: { screen: Screen; onNav: (s: Screen) => void }) {
  const items: { icon: typeof LayoutDashboard; label: string; target: Screen; active: boolean }[] = [
    { icon: LayoutDashboard, label: "Dashboard", target: 1, active: screen === 1 || screen === 6 },
    { icon: AlertTriangle, label: "Incidents", target: "incidents", active: screen === "incidents" || (typeof screen === "number" && screen >= 2 && screen <= 5) },
    { icon: Grid3X3, label: "ATT&CK Coverage", target: "attack-coverage", active: screen === "attack-coverage" },
    { icon: Box, label: "Assets", target: "assets", active: screen === "assets" },
    { icon: Settings, label: "Settings", target: "settings", active: screen === "settings" },
  ];
  return (
    <aside className="hidden md:flex flex-col w-[220px] bg-[#0d1221] border-r border-white/[0.06] shrink-0">
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-white/[0.06]">
        <Shield className="w-5 h-5 text-blue-400" />
        <span className="text-base font-extrabold text-white tracking-wide">PRISM</span>
      </div>
      <nav className="flex-1 py-3">
        {items.map((it) => (
          <button key={it.label} onClick={() => onNav(it.target)} className={`w-full flex items-center gap-2.5 px-5 py-3 mx-2 rounded-none text-sm font-bold transition-colors cursor-pointer ${it.active ? "bg-blue-500/10 text-blue-400" : "text-slate-400 hover:text-white hover:bg-white/[0.03]"}`} style={{ maxWidth: "calc(100% - 16px)" }}>
            <it.icon className="w-4.5 h-4.5" />
            {it.label}
          </button>
        ))}
      </nav>
      <div className="px-5 py-4 border-t border-white/[0.06]">
        <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Portfolio Demo</p>
        <p className="text-[11px] text-slate-400">wensproject.com</p>
      </div>
    </aside>
  );
}

function TopBar({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-[#0d1221] border-b border-white/[0.06]">
      <div className="flex items-center gap-2 md:hidden">
        <Shield className="w-4 h-4 text-blue-400" />
        <span className="text-sm font-extrabold text-white">PRISM</span>
      </div>
      <div className="hidden md:flex items-center gap-2 bg-white/[0.04] rounded-none px-3 py-2 w-72">
        <Search className="w-4 h-4 text-slate-300" />
        <span className="text-sm text-slate-400 font-bold">Search incidents, assets, IOCs...</span>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={onReset} className="px-3 py-1.5 rounded-none bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" title="Reset demo to initial state">
          <RotateCcw className="w-3.5 h-3.5" />Reset
        </button>
        <div className="cursor-pointer">
          <Bell className="w-4.5 h-4.5 text-slate-300" />
        </div>
        <div className="w-8 h-8 rounded-none bg-blue-500/20 flex items-center justify-center text-xs font-extrabold text-blue-400">WL</div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  EXTRA PAGES — Incidents, ATT&CK Coverage, Assets, Settings         */
/* ================================================================== */

function IncidentsPage({ incidents, onSelect }: { incidents: Incident[]; onSelect: (id: number) => void }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-white">All Incidents</h2>
        <span className="text-base font-bold text-slate-300">{incidents.length} total</span>
      </div>
      <div className="bg-[#141b2d] border border-white/[0.06] rounded-none overflow-hidden">
        <div className="grid grid-cols-[70px_1fr_110px_110px_130px] gap-3 px-6 py-4 border-b border-white/[0.06] text-sm font-extrabold uppercase tracking-widest text-slate-400">
          <span>ID</span><span>Title</span><span>Severity</span><span>Status</span><span>Time</span>
        </div>
        {incidents.map((inc) => {
          const isOpen = inc.status !== "Contained";
          return (
          <button key={inc.id} onClick={isOpen ? () => onSelect(inc.id) : undefined} className={`w-full grid grid-cols-[70px_1fr_110px_110px_130px] gap-3 px-6 py-5 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors text-left items-center cursor-pointer ${!isOpen ? "opacity-60" : ""}`}>
            <span className="text-sm font-mono font-bold text-slate-300">#{inc.id}</span>
            <span className="text-base font-bold text-white truncate">{inc.title}</span>
            <SeverityBadge severity={inc.severity} />
            <StatusDot status={inc.status} />
            <span className="text-sm font-bold text-slate-400">{inc.time}</span>
          </button>
          );
        })}
      </div>
    </div>
  );
}

function AttackCoveragePage() {
  const coverageData = [
    { tactic: "Initial Access", coverage: 82, detections: 14 },
    { tactic: "Execution", coverage: 71, detections: 23 },
    { tactic: "Persistence", coverage: 45, detections: 8 },
    { tactic: "Privilege Escalation", coverage: 38, detections: 5 },
    { tactic: "Defense Evasion", coverage: 29, detections: 3 },
    { tactic: "Credential Access", coverage: 76, detections: 19 },
    { tactic: "Discovery", coverage: 52, detections: 11 },
    { tactic: "Lateral Movement", coverage: 68, detections: 16 },
    { tactic: "Collection", coverage: 55, detections: 9 },
    { tactic: "Command and Control", coverage: 43, detections: 7 },
    { tactic: "Exfiltration", coverage: 31, detections: 4 },
    { tactic: "Impact", coverage: 22, detections: 2 },
  ];
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-2">ATT&CK Coverage</h2>
          <p className="text-base font-bold text-slate-300">Detection coverage mapped to MITRE ATT&CK framework</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-extrabold text-blue-400">73%</p>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Overall Coverage</p>
        </div>
      </div>
      <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-6 space-y-5">
        {coverageData.map((item) => (
          <div key={item.tactic} className="flex items-center gap-5">
            <span className="text-base font-bold text-slate-200 w-52 shrink-0">{item.tactic}</span>
            <div className="flex-1 h-3.5 bg-white/[0.04] rounded-none overflow-hidden">
              <div className={`h-full rounded-none ${item.coverage > 70 ? "bg-emerald-500" : item.coverage > 50 ? "bg-blue-500" : item.coverage > 35 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${item.coverage}%` }} />
            </div>
            <span className="text-sm font-extrabold text-white w-12 text-right">{item.coverage}%</span>
            <span className="text-xs font-bold text-slate-400 w-20 text-right">{item.detections} rules</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Detection Rules", value: "121", accent: "" },
          { label: "Techniques Covered", value: "87 / 201", accent: "" },
          { label: "Gaps Identified", value: "18", accent: "text-amber-400" },
        ].map((s) => (
          <div key={s.label} className="bg-[#141b2d] border border-white/[0.06] rounded-none p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">{s.label}</p>
            <p className={`text-2xl font-extrabold ${s.accent || "text-white"}`}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssetsPage() {
  const assets = [
    { name: "DESKTOP-JC2847", type: "Workstation", os: "Windows 11", user: "j.chen", status: "Isolated", risk: "Critical" },
    { name: "finance-server-02", type: "Server", os: "Windows Server 2022", user: "svc-finance", status: "Isolated", risk: "Critical" },
    { name: "mail-gw-01", type: "Server", os: "Linux", user: "system", status: "Active", risk: "Medium" },
    { name: "DESKTOP-MR1492", type: "Workstation", os: "Windows 11", user: "m.rodriguez", status: "Active", risk: "High" },
    { name: "staging-db-01", type: "Server", os: "Linux", user: "svc-deploy", status: "Monitoring", risk: "High" },
    { name: "vpn-gw-east", type: "Network", os: "Palo Alto", user: "system", status: "Active", risk: "Low" },
    { name: "DESKTOP-KP3351", type: "Workstation", os: "macOS 14", user: "k.patel", status: "Active", risk: "Low" },
    { name: "dc-primary-01", type: "Server", os: "Windows Server 2022", user: "system", status: "Active", risk: "Medium" },
  ];
  const riskColors: Record<string, string> = { Critical: "text-red-400", High: "text-orange-400", Medium: "text-amber-400", Low: "text-blue-400" };
  const statusColors: Record<string, string> = { Active: "text-emerald-400", Isolated: "text-red-400", Monitoring: "text-amber-400" };

  return (
    <div className="space-y-5 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white mb-1">Assets</h2>
          <p className="text-sm font-bold text-slate-300">Managed endpoints, servers, and network devices</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#141b2d] border border-white/[0.06] rounded-none px-4 py-2 text-center">
            <p className="text-lg font-extrabold text-white">847</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Total Assets</p>
          </div>
          <div className="bg-[#141b2d] border border-red-500/20 rounded-none px-4 py-2 text-center">
            <p className="text-lg font-extrabold text-red-400">2</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Isolated</p>
          </div>
        </div>
      </div>
      <div className="bg-[#141b2d] border border-white/[0.06] rounded-none overflow-hidden">
        <div className="grid grid-cols-[1fr_100px_120px_100px_80px_80px] gap-2 px-5 py-3 border-b border-white/[0.06] text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
          <span>Name</span><span>Type</span><span>OS</span><span>User</span><span>Status</span><span>Risk</span>
        </div>
        {assets.map((a) => (
          <div key={a.name} className="grid grid-cols-[1fr_100px_120px_100px_80px_80px] gap-2 px-5 py-3 border-b border-white/[0.03] items-center">
            <span className="text-sm font-bold text-white flex items-center gap-2"><Server className="w-3.5 h-3.5 text-slate-300" />{a.name}</span>
            <span className="text-xs font-bold text-slate-400">{a.type}</span>
            <span className="text-xs font-bold text-slate-300">{a.os}</span>
            <span className="text-xs font-bold text-slate-300">{a.user}</span>
            <span className={`text-xs font-bold ${statusColors[a.status] || ""}`}>{a.status}</span>
            <span className={`text-xs font-bold ${riskColors[a.risk] || ""}`}>{a.risk}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-extrabold text-white">Settings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-5 space-y-4">
          <h3 className="text-base font-extrabold text-white">General</h3>
          {[
            { label: "Organization", value: "Acme Corp" },
            { label: "Timezone", value: "America / Los Angeles (PST)" },
            { label: "Date Format", value: "MM/DD/YYYY" },
            { label: "Session Timeout", value: "30 minutes" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
              <span className="text-sm font-bold text-slate-400">{s.label}</span>
              <span className="text-sm font-bold text-white">{s.value}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-5 space-y-4">
          <h3 className="text-base font-extrabold text-white">Notifications</h3>
          {[
            { label: "Critical Alerts", enabled: true },
            { label: "New Incident Assignment", enabled: true },
            { label: "Response Playbook Complete", enabled: true },
            { label: "Weekly Digest", enabled: false },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
              <span className="text-sm font-bold text-slate-400">{s.label}</span>
              <div className={`w-10 h-5 rounded-none relative cursor-pointer ${s.enabled ? "bg-blue-500" : "bg-white/[0.1]"}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-none bg-white transition-transform ${s.enabled ? "left-[22px]" : "left-0.5"}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-5 space-y-4">
          <h3 className="text-base font-extrabold text-white">Integrations</h3>
          {[
            { name: "CrowdStrike Falcon", status: "Connected", color: "text-emerald-400" },
            { name: "Microsoft Sentinel", status: "Connected", color: "text-emerald-400" },
            { name: "Slack", status: "Connected", color: "text-emerald-400" },
            { name: "Palo Alto Cortex", status: "Disconnected", color: "text-red-400" },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
              <span className="text-sm font-bold text-slate-300">{s.name}</span>
              <span className={`text-xs font-bold ${s.color}`}>{s.status}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#141b2d] border border-white/[0.06] rounded-none p-5 space-y-4">
          <h3 className="text-base font-extrabold text-white">User Profile</h3>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-none bg-blue-500/20 flex items-center justify-center text-lg font-extrabold text-blue-400">WL</div>
            <div>
              <p className="text-base font-extrabold text-white">Wen Liu</p>
              <p className="text-sm font-bold text-slate-300">Tier 1 SOC Analyst</p>
              <p className="text-xs font-bold text-slate-400">wen.liu@acme.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN PAGE                                                          */
/* ================================================================== */

export default function PrismDemoPage() {
  const [screen, setScreen] = useState<Screen>(1);
  const [incidents, setIncidents] = useState<Incident[]>(INCIDENTS);
  const [assigned, setAssigned] = useState(false);
  const [activeIncidentId, setActiveIncidentId] = useState<number>(1042);

  const handleSelectIncident = useCallback((id: number) => {
    setActiveIncidentId(id);
    setScreen(2);
  }, []);
  const goScreen3 = useCallback(() => setScreen(3), []);
  const goScreen4 = useCallback(() => setScreen(4), []);
  const goScreen5 = useCallback(() => setScreen(5), []);
  const goScreen6 = useCallback(() => {
    setIncidents((prev) => prev.map((i) => (i.id === activeIncidentId ? { ...i, status: "Contained" as IncidentStatus } : i)));
    setScreen(6);
  }, [activeIncidentId]);
  const goScreen1 = useCallback(() => setScreen(1), []);
  const handleReset = useCallback(() => {
    setScreen(1);
    setIncidents(INCIDENTS);
    setAssigned(false);
    setActiveIncidentId(1042);
  }, []);
  const handleNav = useCallback((s: Screen) => setScreen(s), []);

  const activeIncident = incidents.find((i) => i.id === activeIncidentId) || incidents[0];

  return (
    <div className="h-screen flex flex-col bg-[#0a0f1a] text-white overflow-hidden">
      <style>{`
        .animate-fadeIn { animation: fadeIn .3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <TopBar onReset={handleReset} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar screen={screen} onNav={handleNav} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {screen === 1 && <Screen1 incidents={incidents} onSelect={handleSelectIncident} />}
          {screen === 2 && <Screen2 incident={activeIncident} onBack={goScreen1} onAttackMap={goScreen3} onResponse={goScreen4} assigned={assigned} onAssign={() => setAssigned(true)} />}
          {screen === 3 && <Screen3 incident={activeIncident} onBack={() => setScreen(2)} onResponse={goScreen4} />}
          {screen === 4 && <Screen4 onBack={() => setScreen(2)} onComplete={goScreen5} />}
          {screen === 5 && <Screen5 incident={activeIncident} onClose={goScreen6} />}
          {screen === 6 && <Screen1 incidents={incidents} onSelect={handleSelectIncident} />}
          {screen === "incidents" && <IncidentsPage incidents={incidents} onSelect={handleSelectIncident} />}
          {screen === "attack-coverage" && <AttackCoveragePage />}
          {screen === "assets" && <AssetsPage />}
          {screen === "settings" && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}

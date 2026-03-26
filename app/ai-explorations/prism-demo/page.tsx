"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Shield, LayoutDashboard, AlertTriangle, Target, Clock, User, Monitor,
  ChevronRight, CheckCircle, Copy, ArrowLeft, Activity, Server, Lock,
  Zap, FileText, RotateCcw, UserX, Wifi, ArrowUpRight, Search, Bell,
  Settings, Grid3X3, Box, Mail, Globe, MapPin, Loader2, ChevronDown,
  ExternalLink, Send, XCircle, Crosshair, Eye, X,
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
  "Initial Access": "",
  "Credential Access": "",
  "Lateral Movement": "",
  Collection: "",
  Persistence: "",
  Execution: "",
  Exfiltration: "",
  "Defense Evasion": "",
  Impact: "",
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

const INCIDENT_SUMMARIES: Record<number, string> = {
  1042: SUMMARY_TEXT,
  1038: `Incident #1038 \u2014 Contained
Timeline: 8:12 AM - 9:45 AM (1h 33m)

Attack Summary: Anomalous DNS queries detected from k.patel's workstation (DESKTOP-KP3351) resolving suspicious domain c2-relay.darknet.xyz. Traffic pattern consistent with beaconing behavior at 30-second intervals. Investigation revealed a browser extension (PDF Helper Pro) was compromised in a supply chain attack, injecting DNS-based C2 communication.

MITRE ATT&CK Techniques: T1071.004 (DNS), T1195.002 (Supply Chain)

Response Actions Taken:
\u2022 Malicious browser extension removed from DESKTOP-KP3351 \u2014 9:15 AM
\u2022 DNS sinkhole rule added for c2-relay.darknet.xyz \u2014 9:18 AM
\u2022 Full endpoint scan completed, no persistence found \u2014 9:30 AM
\u2022 Browser extension blocklist updated org-wide \u2014 9:40 AM

No lateral movement or data exfiltration detected. Recommended: audit all browser extensions across endpoints, notify vendor of compromised extension.

Analyst: M. Wong \u00b7 Closed: 9:45 AM`,
  1037: `Incident #1037 \u2014 Contained
Timeline: 2:30 PM - 3:15 PM (45m)

Attack Summary: Unauthorized access attempt detected on HR file share. User t.wilson@acme.com attempted to access restricted directories outside their permission scope. Investigation revealed t.wilson's account was used from an unusual IP after hours. User confirmed they were not logged in \u2014 credential compromise suspected via session token theft from an unsecured shared workstation.

MITRE ATT&CK Techniques: T1021.002 (SMB/Windows Admin Shares)

Response Actions Taken:
\u2022 t.wilson password reset and MFA re-enrolled \u2014 2:50 PM
\u2022 Shared workstation DESK-LOBBY-03 isolated for forensics \u2014 2:55 PM
\u2022 HR file share access logs exported for review \u2014 3:00 PM
\u2022 No files were successfully accessed or modified \u2014 confirmed via audit log

No data breach. Recommended: disable auto-login on shared workstations, enforce session timeout policy.

Analyst: S. Park \u00b7 Closed: 3:15 PM`,
};

/* ================================================================== */
/*  SHARED UI                                                          */
/* ================================================================== */

function MitreTag({ tactic }: { tactic: string }) {
  return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mitre-tag">{tactic}</span>;
}

function SeverityBadge({ severity }: { severity: string }) {
  return <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${SEVERITY_COLORS[severity] || ""}`}>{severity}</span>;
}

function StatusDot({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-normal ${STATUS_COLORS[status] || ""}`}>
      <span className={`w-2 h-2 rounded-full ${STATUS_DOT[status] || ""}`} />
      {status}
    </span>
  );
}

/* ================================================================== */
/*  DATA VISUALIZATION — SVG Charts                                    */
/* ================================================================== */

// 24-hour alert volume data (hour, critical, high, medium, low)
const ALERT_VOLUME_BASE = [
  { hour: "00:00", critical: 0, high: 1, medium: 2, low: 3 },
  { hour: "02:00", critical: 0, high: 0, medium: 1, low: 2 },
  { hour: "04:00", critical: 0, high: 0, medium: 1, low: 1 },
  { hour: "06:00", critical: 0, high: 1, medium: 2, low: 2 },
  { hour: "08:00", critical: 1, high: 2, medium: 3, low: 4 },
  { hour: "09:00", critical: 1, high: 3, medium: 4, low: 3 },
  { hour: "10:00", critical: 2, high: 4, medium: 5, low: 3 },
  { hour: "11:00", critical: 3, high: 5, medium: 4, low: 2 },
  { hour: "12:00", critical: 2, high: 4, medium: 3, low: 3 },
  { hour: "13:00", critical: 2, high: 3, medium: 4, low: 2 },
  { hour: "14:00", critical: 1, high: 2, medium: 3, low: 3 },
  { hour: "16:00", critical: 1, high: 2, medium: 2, low: 2 },
  { hour: "18:00", critical: 0, high: 1, medium: 2, low: 3 },
  { hour: "20:00", critical: 0, high: 1, medium: 1, low: 2 },
  { hour: "22:00", critical: 0, high: 0, medium: 1, low: 2 },
  { hour: "Now", critical: 1, high: 2, medium: 2, low: 1 },
];

// 7-day risk score data
const RISK_SCORE_BASE = [
  { day: "Mon", score: 42 },
  { day: "Tue", score: 38 },
  { day: "Wed", score: 55 },
  { day: "Thu", score: 61 },
  { day: "Fri", score: 72 },
  { day: "Sat", score: 48 },
  { day: "Today", score: 78 },
];

function AlertVolumeChart({ incidents, isDark }: { incidents: Incident[]; isDark: boolean }) {
  const containedCount = incidents.filter((i) => i.status === "Contained" && INCIDENTS.find((o) => o.id === i.id)?.status !== "Contained").length;
  const scale = containedCount > 0 ? Math.max(0.2, 1 - containedCount * 0.3) : 1;
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const data = ALERT_VOLUME_BASE.map((d) => ({
    ...d,
    critical: Math.round(d.critical * scale),
    high: Math.round(d.high * scale),
  }));

  const W = 520, H = 55, PX = 16, PY = 4;
  const plotW = W - PX * 2, plotH = H - PY - 10;
  const maxVal = Math.max(...data.map((d) => d.critical + d.high + d.medium + d.low), 1);
  const stepX = plotW / (data.length - 1);

  const makePath = (getValue: (d: typeof data[0]) => number) => {
    const pts = data.map((d, i) => ({ x: PX + i * stepX, y: PY + plotH - (getValue(d) / maxVal) * plotH }));
    return pts.map((p, i) => {
      if (i === 0) return `M${p.x},${p.y}`;
      const prev = pts[i - 1];
      const cpx = (prev.x + p.x) / 2;
      return `C${cpx},${prev.y} ${cpx},${p.y} ${p.x},${p.y}`;
    }).join(" ");
  };

  const makeArea = (getValue: (d: typeof data[0]) => number) => {
    const line = makePath(getValue);
    const lastPt = data.length - 1;
    return `${line} L${PX + lastPt * stepX},${PY + plotH} L${PX},${PY + plotH} Z`;
  };

  const totalLine = (d: typeof data[0]) => d.critical + d.high + d.medium + d.low;
  const critHighLine = (d: typeof data[0]) => d.critical + d.high;
  const critLine = (d: typeof data[0]) => d.critical;

  const gridLines = [0, 0.5, 1].map((pct) => PY + plotH * (1 - pct));
  const textColor = isDark ? "fill-slate-500" : "fill-slate-400";
  const gridColor = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)";

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * W;
    const idx = Math.round((svgX - PX) / stepX);
    setHoverIdx(Math.max(0, Math.min(data.length - 1, idx)));
  }, [data.length, stepX]);

  const hd = hoverIdx !== null ? data[hoverIdx] : null;
  const hx = hoverIdx !== null ? PX + hoverIdx * stepX : 0;

  return (
    <div className="card-surface rounded-none p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300">Alert Volume — 24h</h3>
        <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500" />Critical</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500" />High</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400/60" />Med+Low</span>
        </div>
      </div>
      <div className="relative">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="xMidYMid meet" onMouseMove={handleMouseMove} onMouseLeave={() => setHoverIdx(null)}>
          <defs>
            <linearGradient id="grad-total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isDark ? "rgba(96,165,250,0.15)" : "rgba(96,165,250,0.12)"} />
              <stop offset="100%" stopColor="rgba(96,165,250,0)" />
            </linearGradient>
            <linearGradient id="grad-crithigh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isDark ? "rgba(249,115,22,0.25)" : "rgba(249,115,22,0.18)"} />
              <stop offset="100%" stopColor="rgba(249,115,22,0)" />
            </linearGradient>
            <linearGradient id="grad-crit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isDark ? "rgba(239,68,68,0.35)" : "rgba(239,68,68,0.25)"} />
              <stop offset="100%" stopColor="rgba(239,68,68,0)" />
            </linearGradient>
          </defs>
          {/* Grid */}
          {gridLines.map((y, i) => (
            <line key={i} x1={PX} y1={y} x2={W - PX} y2={y} stroke={gridColor} strokeWidth="0.2" />
          ))}
          {/* X labels */}
          {data.filter((_, i) => i % 3 === 0 || i === data.length - 1).map((d, idx) => {
            const i = data.indexOf(d);
            return <text key={idx} x={PX + i * stepX} y={H - 2} textAnchor="middle" className={`text-[3.5px] font-bold ${textColor}`}>{d.hour}</text>;
          })}
          {/* Area fills */}
          <path d={makeArea(totalLine)} fill="url(#grad-total)" />
          <path d={makeArea(critHighLine)} fill="url(#grad-crithigh)" />
          <path d={makeArea(critLine)} fill="url(#grad-crit)" />
          {/* Lines */}
          <path d={makePath(totalLine)} fill="none" stroke={isDark ? "rgba(96,165,250,0.4)" : "rgba(96,165,250,0.5)"} strokeWidth="0.2" />
          <path d={makePath(critHighLine)} fill="none" stroke={isDark ? "rgba(249,115,22,0.6)" : "rgba(249,115,22,0.7)"} strokeWidth="0.2" />
          <path d={makePath(critLine)} fill="none" stroke={isDark ? "rgba(239,68,68,0.8)" : "rgba(239,68,68,0.9)"} strokeWidth="0.25" />
          {/* Hover crosshair */}
          {hoverIdx !== null && (
            <>
              <line x1={hx} y1={PY} x2={hx} y2={PY + plotH} stroke={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"} strokeWidth="0.5" strokeDasharray="2 1.5" />
              {[
                { fn: totalLine, color: "rgb(96,165,250)" },
                { fn: critHighLine, color: "rgb(249,115,22)" },
                { fn: critLine, color: "rgb(239,68,68)" },
              ].map(({ fn, color }, idx) => {
                const cy = PY + plotH - (fn(data[hoverIdx]) / maxVal) * plotH;
                return <circle key={idx} cx={hx} cy={cy} r="1.5" fill={color} />;
              })}
            </>
          )}
        </svg>
        {/* Tooltip */}
        {hoverIdx !== null && hd && (
          <div
            className={`absolute z-50 pointer-events-none px-3 py-2.5 rounded-lg shadow-xl text-xs ${isDark ? "bg-[#1a2236] border border-white/10" : "bg-white border border-slate-200 shadow-lg"}`}
            style={{ left: `${(hx / W) * 100}%`, top: 0, transform: "translateX(-50%) translateY(-110%)" }}
          >
            <p className={`font-bold mb-1.5 ${isDark ? "text-white" : "text-slate-900"}`}>{hd.hour}</p>
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />Critical</span><span className="font-bold tabular-nums">{hd.critical}</span></div>
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />High</span><span className="font-bold tabular-nums">{hd.high}</span></div>
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" />Medium</span><span className="font-bold tabular-nums">{hd.medium}</span></div>
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />Low</span><span className="font-bold tabular-nums">{hd.low}</span></div>
            </div>
            <div className={`mt-1.5 pt-1.5 text-[10px] font-semibold tabular-nums ${isDark ? "border-t border-white/10 text-slate-400" : "border-t border-slate-200 text-slate-500"}`}>
              Total: {hd.critical + hd.high + hd.medium + hd.low}
            </div>
          </div>
        )}
      </div>
      {containedCount > 0 && (
        <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
          <CheckCircle className="w-3.5 h-3.5" />
          Alert volume dropping — {containedCount} incident{containedCount > 1 ? "s" : ""} contained
        </div>
      )}
    </div>
  );
}

function RiskTrendChart({ incidents, isDark }: { incidents: Incident[]; isDark: boolean }) {
  const containedCount = incidents.filter((i) => i.status === "Contained" && INCIDENTS.find((o) => o.id === i.id)?.status !== "Contained").length;
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const data = RISK_SCORE_BASE.map((d, i) => ({
    ...d,
    score: i === RISK_SCORE_BASE.length - 1 && containedCount > 0
      ? Math.max(15, d.score - containedCount * 22)
      : d.score,
  }));

  const currentScore = data[data.length - 1].score;
  const prevScore = RISK_SCORE_BASE[RISK_SCORE_BASE.length - 1].score;
  const delta = currentScore - prevScore;

  const W = 280, H = 130, PX = 16, PY = 14;
  const plotW = W - PX * 2, plotH = H - PY * 2;
  const maxVal = 100;
  const stepX = plotW / (data.length - 1);

  const pts = data.map((d, i) => ({
    x: PX + i * stepX,
    y: PY + plotH - (d.score / maxVal) * plotH,
  }));

  const linePath = pts.map((p, i) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const prev = pts[i - 1];
    const cpx = (prev.x + p.x) / 2;
    return `C${cpx},${prev.y} ${cpx},${p.y} ${p.x},${p.y}`;
  }).join(" ");

  const areaPath = `${linePath} L${pts[pts.length - 1].x},${PY + plotH} L${pts[0].x},${PY + plotH} Z`;

  const riskColor = currentScore >= 70 ? "rgb(239,68,68)" : currentScore >= 50 ? "rgb(245,158,11)" : "rgb(34,197,94)";
  const riskLabel = currentScore >= 70 ? "High" : currentScore >= 50 ? "Elevated" : "Low";
  const textColor = isDark ? "fill-slate-500" : "fill-slate-400";
  const gridColor = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)";

  const riskLevel = (s: number) => s >= 70 ? "High" : s >= 50 ? "Elevated" : s >= 30 ? "Moderate" : "Low";

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * W;
    const idx = Math.round((svgX - PX) / stepX);
    setHoverIdx(Math.max(0, Math.min(data.length - 1, idx)));
  }, [data.length, stepX]);

  const hoveredPt = hoverIdx !== null ? pts[hoverIdx] : null;
  const hoveredData = hoverIdx !== null ? data[hoverIdx] : null;

  return (
    <div className="card-surface rounded-none p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300">Risk Score — 7 Days</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold" style={{ color: riskColor }}>{currentScore}</span>
          <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded" style={{ background: `${riskColor}20`, color: riskColor }}>{riskLabel}</span>
        </div>
      </div>
      <div className="relative">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="xMidYMid meet" onMouseMove={handleMouseMove} onMouseLeave={() => setHoverIdx(null)}>
          <defs>
            <linearGradient id="grad-risk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={`${riskColor}`} stopOpacity={isDark ? "0.2" : "0.15"} />
              <stop offset="100%" stopColor={riskColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid */}
          {[0, 50, 100].map((val) => {
            const y = PY + plotH - (val / maxVal) * plotH;
            return <line key={val} x1={PX} y1={y} x2={W - PX} y2={y} stroke={gridColor} strokeWidth="0.2" />;
          })}
          {/* Threshold line */}
          <line x1={PX} y1={PY + plotH - (70 / maxVal) * plotH} x2={W - PX} y2={PY + plotH - (70 / maxVal) * plotH} stroke="rgba(239,68,68,0.3)" strokeWidth="0.8" strokeDasharray="4 3" />
          {/* X labels */}
          {data.map((d, i) => (
            <text key={i} x={PX + i * stepX} y={H - 2} textAnchor="middle" className={`text-[5.5px] font-bold ${textColor}`}>{d.day}</text>
          ))}
          {/* Area + Line */}
          <path d={areaPath} fill="url(#grad-risk)" />
          <path d={linePath} fill="none" stroke={riskColor} strokeWidth="0.25" strokeLinecap="round" />
          {/* Data points */}
          {pts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={2} fill={riskColor} opacity={hoverIdx === i ? 1 : i === pts.length - 1 ? 1 : 0.5} />
          ))}
          {/* Hover crosshair */}
          {hoveredPt && (
            <>
              <line x1={hoveredPt.x} y1={PY} x2={hoveredPt.x} y2={PY + plotH} stroke={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"} strokeWidth="0.5" strokeDasharray="2 1.5" />
              <circle cx={hoveredPt.x} cy={hoveredPt.y} r="3" fill={riskColor} opacity="0.25" />
            </>
          )}
          {/* Pulse on last point (only when not hovering) */}
          {hoverIdx === null && (
            <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r="3.5" fill={riskColor} opacity="0.3">
              <animate attributeName="r" values="3.5;8;3.5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
        {/* Tooltip */}
        {hoveredPt && hoveredData && (
          <div
            className={`absolute z-50 pointer-events-none px-3 py-2 rounded-lg shadow-xl text-xs ${isDark ? "bg-[#1a2236] border border-white/10" : "bg-white border border-slate-200 shadow-lg"}`}
            style={{ left: `${(hoveredPt.x / W) * 100}%`, top: 0, transform: "translateX(-50%) translateY(-110%)" }}
          >
            <p className={`font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{hoveredData.day}</p>
            <div className="flex items-center justify-between gap-3">
              <span className={isDark ? "text-slate-400" : "text-slate-500"}>Score</span>
              <span className="font-bold tabular-nums" style={{ color: riskColor }}>{hoveredData.score}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className={isDark ? "text-slate-400" : "text-slate-500"}>Level</span>
              <span className="font-bold" style={{ color: hoveredData.score >= 70 ? "rgb(239,68,68)" : hoveredData.score >= 50 ? "rgb(245,158,11)" : "rgb(34,197,94)" }}>{riskLevel(hoveredData.score)}</span>
            </div>
          </div>
        )}
      </div>
      {delta < 0 && (
        <div className="mt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
          <CheckCircle className="w-3.5 h-3.5" />
          Risk score dropped {Math.abs(delta)} pts after containment
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  SCREEN 1 — Dashboard                                               */
/* ================================================================== */

function Screen1({ incidents, onSelect, isDark }: { incidents: Incident[]; onSelect: (id: number) => void; isDark: boolean }) {
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
          <div key={s.label} className="card-surface  rounded-none p-4">
            <div className="flex items-center gap-2 mb-2">
              <s.icon className={`w-5 h-5 ${s.accent || "text-slate-300"}`} />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">{s.label}</span>
            </div>
            <p className={`text-3xl font-bold ${s.accent || "text-white"}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <AlertVolumeChart incidents={incidents} isDark={isDark} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Needs Attention */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-2">Needs Attention</h3>
          {incidents.filter((inc) => inc.status !== "Contained").slice(0, 4).map((inc) => {
            const isOpen = true;
            return (
              <button
                key={inc.id}
                onClick={isOpen ? () => onSelect(inc.id) : undefined}
                className={`w-full text-left rounded-none transition-colors group cursor-pointer ${isOpen ? "card-surface" : "card-surface opacity-70"}`} style={{ padding: 30 }}
              >
                <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                  <span className="text-xs font-mono font-normal text-slate-300">#{inc.id}</span>
                  <SeverityBadge severity={inc.severity} />
                  <StatusDot status={inc.status} />
                  {isOpen && <span className="ml-auto text-xs text-blue-400 font-normal uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Investigate &rarr;</span>}
                </div>
                <h4 className={`text-base font-semibold mb-3 transition-colors ${isOpen ? "group-hover:text-blue-500" : "opacity-60"}`}>{inc.title}</h4>
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
        <div className="space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-2">Overview</h3>
          <RiskTrendChart incidents={incidents} isDark={isDark} />
          {/* ATT&CK heatmap mini */}
          <div className="card-surface  rounded-none p-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-3">ATT&CK Activity This Week</h3>
            <div className="grid grid-cols-7 gap-1">
              {ATTACK_TACTICS.map((t) => {
                const active = ["Initial Access", "Execution", "Credential Access"].includes(t);
                const medium = ["Lateral Movement", "Collection", "Persistence"].includes(t);
                return (
                  <div key={t} className="group relative">
                    <div className={`aspect-square rounded-none heatmap-cell ${active ? "heatmap-high" : medium ? "heatmap-med" : "heatmap-low"}`} />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 heatmap-tooltip text-sm font-normal rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">{t}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm font-normal text-slate-200">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-none heatmap-high" />High</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-none heatmap-med" />Medium</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-none heatmap-low" />Low</span>
            </div>
          </div>

          {/* Recent activity */}
          <div className="card-surface  rounded-none p-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-3">Recent Activity</h3>
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
                    <p className="text-sm font-normal text-slate-200">{a.text}</p>
                    <p className="text-xs font-normal text-slate-400">{a.time}</p>
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

function Screen2Content() {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card-surface rounded-none p-6">
            {TIMELINE.map((step, i) => {
              const Icon = step.icon;
              // Red gradient: light to deep based on timeline position
              const dotColors = ["bg-red-300", "bg-red-400", "bg-red-500", "bg-red-500", "bg-red-600", "bg-red-700"];
              const tacticColor = dotColors[i] || "bg-red-500";
              return (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className={`w-3.5 h-3.5 rounded-full ${tacticColor} shrink-0 mt-2`} />
                    {i < TIMELINE.length - 1 && <div className="w-0.5 flex-1 timeline-line my-1" />}
                  </div>
                  <div className="pb-7 min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-sm font-mono font-semibold text-slate-400">{step.time}</span>
                      <MitreTag tactic={step.tactic} />
                      <span className="text-sm font-mono font-normal text-slate-400">{step.technique}</span>
                    </div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <Icon className="w-5 h-5 text-slate-400 shrink-0" />
                      <p className="text-base font-semibold">{step.title}</p>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-2">{step.detail}</p>
                    <div className="flex gap-4 text-sm text-slate-400 font-normal">
                      <span>Confidence: <span className={step.confidence === "High" ? "text-emerald-500" : "text-amber-500"}>{step.confidence}</span></span>
                      <span>Source: {step.source}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-5">
          <div className="card-surface rounded-none p-5">
            <div className="flex items-center gap-2 mb-3"><Zap className="w-4 h-4 text-blue-500" /><span className="text-sm font-semibold uppercase tracking-widest text-blue-500">AI Summary</span></div>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">This is a coordinated attack chain. An attacker sent a targeted phishing email to j.chen in the finance department. After harvesting credentials through a fake SSO page, the attacker logged in from a Tor exit node and moved laterally to finance-server-02, where they began staging sensitive financial documents. No exfiltration detected yet, but the attack is still active. Immediate credential reset and device isolation strongly recommended.</p>
          </div>
          <div className="card-surface rounded-none p-5">
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-400 block mb-2">Risk Score</span>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-semibold text-red-400">94</span><span className="text-base font-normal text-slate-400 pb-1">/100</span>
            </div>
            <div className="w-full h-2 bg-white/[0.06] rounded-full mt-3 overflow-hidden"><div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full" style={{ width: "94%" }} /></div>
          </div>
          <div className="card-surface rounded-none p-5">
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3 block">Affected Assets</span>
            {[
              { name: "j.chen@acme.com", type: "User \u00b7 Finance Dept", icon: User },
              { name: "DESKTOP-JC2847", type: "Workstation \u00b7 Windows 11", icon: Monitor },
              { name: "finance-server-02", type: "Server \u00b7 Windows Server 2022", icon: Server },
            ].map((a) => (
              <div key={a.name} className="py-5 border-b border-white/[0.04] last:border-0">
                <p className="text-base font-semibold">{a.name}</p><p className="text-sm font-normal text-slate-400 mt-1">{a.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

/* ================================================================== */
/*  SCREEN 3 — ATT&CK Map (content only)                              */
/* ================================================================== */

function Screen3Content({ incident }: { incident: Incident }) {
  const phases = ATTACK_TACTICS.map((t, i) => {
    const techs = ACTIVE_TECHNIQUES[t];
    const isActive = !!techs;
    const isPredicted = PREDICTED_NEXT.some((p) => p.tactic === t);
    return { name: t, index: i, techs, isActive, isPredicted };
  });
  const activePhases = phases.filter((p) => p.isActive);
  const predictedPhases = phases.filter((p) => p.isPredicted && !p.isActive);

  return (
    <div className="space-y-8">
      {/* === ATTACK CHAIN — horizontal connected flow === */}
      <div className="card-surface rounded-none p-8">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-2">MITRE ATT&CK Kill Chain</h3>
        <p className="text-sm text-slate-400 mb-8">Full 14-tactic attack lifecycle. Highlighted tactics were observed in this incident.</p>

        {/* Full 14-node chain — single grid, ball + label per column */}
        <div className="pb-4">
          <div className="grid" style={{ gridTemplateColumns: `repeat(${phases.length}, 1fr)`, gap: 0 }}>
            {/* Row 1: Balls with connecting arrows via border trick */}
            {phases.map((phase, i) => (
              <div key={phase.name} className="flex items-center justify-center relative" style={{ height: 52 }}>
                {/* Left half connector line */}
                {i > 0 && <div className="absolute left-0 top-1/2 w-[calc(50%-26px)] h-px bg-slate-400/30" />}
                {/* Right half connector line */}
                {i < phases.length - 1 && (
                  <div className="absolute right-0 top-1/2 w-[calc(50%-26px)] h-px bg-slate-400/30" />
                )}
                {/* Ball with tooltip */}
                <div className="relative z-10 group/ball">
                  <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${phase.isActive ? "bg-blue-500 force-white cursor-pointer" : phase.isPredicted ? "bg-amber-500/15 text-amber-500 border-2 border-dashed border-amber-500/30 cursor-pointer" : "bg-white/[0.04] text-slate-400"}`}>
                    {phase.index + 1}
                  </div>
                  {phase.techs && phase.techs.length > 0 && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 hidden group-hover/ball:block z-50">
                      <div className="tech-tooltip rounded-lg shadow-xl px-4 py-3 whitespace-nowrap select-text cursor-text">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">Techniques</p>
                        {phase.techs.map((tech) => (
                          <p key={tech} className="text-sm font-normal py-0.5">{tech}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Row 2: Labels — perfectly aligned under each ball */}
            {phases.map((phase) => (
              <div key={phase.name + "-l"} className="flex flex-col items-center text-center pt-4 px-1">
                <p className={`text-sm font-semibold leading-tight ${phase.isActive ? "text-blue-500" : phase.isPredicted ? "text-amber-500" : "text-slate-400"}`}>{phase.name}</p>
                {phase.isPredicted && !phase.isActive && <span className="text-sm font-normal text-amber-500/60 mt-0.5">predicted</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-4 pt-5 border-t border-white/[0.04]">
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500" /><span className="text-sm font-normal">Detected</span></div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-amber-500/30 border-2 border-dashed border-amber-500/30" /><span className="text-sm font-normal">Predicted</span></div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-white/[0.04]" /><span className="text-sm font-normal text-slate-400">Not observed</span></div>
        </div>
      </div>

      {/* === Full ATT&CK Coverage Grid === */}
      <div className="card-surface rounded-none p-8">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Full ATT&CK Coverage Map</h3>
        <div className="grid grid-cols-7 gap-3">
          {phases.map((phase) => (
            <div key={phase.name + "-grid"} className={`relative p-4 text-center transition-all ${phase.isActive ? "attack-chain-active" : phase.isPredicted ? "attack-chain-predicted" : ""}`}>
              <div className={`w-full h-1.5 rounded-full mb-3 ${phase.isActive ? "bg-blue-500" : phase.isPredicted ? "bg-amber-500/40" : "bg-white/[0.06]"}`} />
              <p className={`text-sm font-semibold uppercase tracking-wider leading-tight ${phase.isActive ? "text-blue-500" : phase.isPredicted ? "text-amber-500" : "text-slate-400"}`}>
                {phase.name}
              </p>
              {phase.techs && (
                <p className="text-sm font-semibold text-blue-500/60 mt-1">{phase.techs.length} technique{phase.techs.length > 1 ? "s" : ""}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* === Predicted Next Steps === */}
      <div className="card-surface rounded-none p-8">
        <div className="flex items-center gap-2.5 mb-6">
          <Eye className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">Predicted Next Steps</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PREDICTED_NEXT.map((p) => (
            <div key={p.technique} className="bg-white/[0.02] rounded-none p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <MitreTag tactic={p.tactic} />
                <span className="text-sm font-mono font-normal text-slate-400">{p.technique}</span>
              </div>
              <p className="text-lg font-semibold mb-2">{p.name}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
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
    <div className="space-y-5">

      {executing && (
        <div className="card-surface  rounded-none p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-base font-bold">{allDone ? "Response playbook complete" : "Executing response playbook..."}</span>
            <span className="text-base font-bold font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-white/[0.06] rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${allDone ? "bg-emerald-500" : "bg-blue-500"}`} style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {allDone && (
        <div className="bg-emerald-500/10  rounded-none p-4 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-sm text-emerald-300 font-normal">All response actions completed successfully &mdash; 5/5 executed in 16 seconds</p>
        </div>
      )}

      <div className="card-surface  rounded-none response-divider">
        {RESPONSE_ACTIONS.map((action, i) => {
          const Icon = action.icon;
          const done = i <= completedIdx;
          const running = executing && i === completedIdx + 1 && !allDone;
          return (
            <div key={i} className="flex items-center gap-4 p-5">
              {(done || running) && (
                <div className="shrink-0">
                  {done ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5" />
                  <p className={`text-base font-bold`}>{done ? action.completedText : action.label}</p>
                </div>
                {!done && !running && <p className="text-sm text-slate-400 mt-1">{action.desc}</p>}
                {done && <p className="text-xs text-slate-400 mt-1">{action.time}</p>}
              </div>
            </div>
          );
        })}
      </div>

      {!executing && (
        <button onClick={handleExecute} className="w-full py-4 bg-blue-500 hover:bg-blue-600 force-white text-sm font-bold rounded-full transition-colors uppercase tracking-wide cursor-pointer text-center">Execute All Actions</button>
      )}
      {allDone && (
        <button onClick={onComplete} className="w-full py-4 card-surface summary-action-btn border border-white/[0.08] rounded-full text-sm font-bold transition-colors cursor-pointer flex items-center justify-center">Continue to Summary &rarr;</button>
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
      <div className="bg-emerald-500/10  rounded-none p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-none bg-emerald-500/20 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-emerald-400" /></div>
          <div><h2 className="text-base font-semibold text-white">Incident #{incident.id} &mdash; Contained</h2><p className="text-sm text-emerald-400 font-normal">All response actions completed &middot; Ready to close</p></div>
        </div>
      </div>

      <div className="card-surface  rounded-none p-6">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Incident Summary</h3>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans">{SUMMARY_TEXT}</pre>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button onClick={handleCopy} className="flex items-center justify-center gap-2 py-3.5 card-surface summary-action-btn rounded-full text-sm font-bold transition-colors cursor-pointer">
          {copied ? <><CheckCircle className="w-4 h-4 text-emerald-400" />Copied!</> : <><Copy className="w-4 h-4" />Copy Summary</>}
        </button>
        <button className="flex items-center justify-center gap-2 py-3.5 card-surface summary-action-btn rounded-full text-sm font-bold transition-colors cursor-pointer"><Send className="w-4 h-4" />Send to Slack</button>
        <button className="flex items-center justify-center gap-2 py-3.5 card-surface summary-action-btn rounded-full text-sm font-bold transition-colors cursor-pointer"><ArrowUpRight className="w-4 h-4" />Escalate</button>
        <button onClick={() => setShowModal(true)} className="flex items-center justify-center gap-2 py-3.5 bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-bold force-white transition-colors cursor-pointer"><XCircle className="w-4 h-4" />Close Incident</button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md" onClick={() => setShowModal(false)}>
          <div className="close-modal-surface rounded-2xl px-10 py-10 max-w-md w-full mx-4 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Close Incident #1042?</h3>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">This will mark the incident as resolved and notify all stakeholders.</p>
            <div className="flex gap-4">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3.5 rounded-full text-sm font-semibold transition-colors cursor-pointer cancel-btn">Cancel</button>
              <button onClick={() => { setShowModal(false); onClose(); }} className="flex-1 py-3.5 bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-semibold force-white transition-colors cursor-pointer">Close Incident</button>
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

function Sidebar({ screen, onNav, isDark }: { screen: Screen; onNav: (s: Screen) => void; isDark: boolean }) {
  const items: { icon: typeof LayoutDashboard; label: string; target: Screen; active: boolean }[] = [
    { icon: LayoutDashboard, label: "Dashboard", target: 1, active: screen === 1 || screen === 6 },
    { icon: AlertTriangle, label: "Incidents", target: "incidents", active: screen === "incidents" || (typeof screen === "number" && screen >= 2 && screen <= 5) },
    { icon: Grid3X3, label: "ATT&CK Coverage", target: "attack-coverage", active: screen === "attack-coverage" },
    { icon: Box, label: "Assets", target: "assets", active: screen === "assets" },
    { icon: Settings, label: "Settings", target: "settings", active: screen === "settings" },
  ];
  return (
    <aside className="hidden md:flex flex-col w-[220px] sidebar-surface shrink-0">
      <div className={`flex items-center gap-2.5 px-5 py-4 ${isDark ? "border-b border-white/[0.06]" : "border-b border-slate-200"}`}>
        <Shield className="w-5 h-5 text-blue-500" />
        <span className={`text-base font-semibold tracking-wide ${isDark ? "text-white" : "text-slate-900"}`}>PRISM</span>
      </div>
      <nav className="flex-1 py-3">
        {items.map((it) => (
          <button key={it.label} onClick={() => onNav(it.target)} className={`w-full flex items-center gap-3 px-5 py-3.5 my-2 mx-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${it.active ? (isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600") : (isDark ? "text-slate-400 hover:text-white hover:bg-white/[0.03]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100")}`} style={{ maxWidth: "calc(100% - 16px)" }}>
            <it.icon className="w-4.5 h-4.5" />
            {it.label}
          </button>
        ))}
      </nav>
      <div className={`px-5 py-4 ${isDark ? "border-t border-white/[0.06]" : "border-t border-slate-200"}`}>
        <p className={`text-[11px] uppercase tracking-wider font-normal ${isDark ? "text-slate-400" : "text-slate-400"}`}>Portfolio Demo</p>
        <p className={`text-[11px] ${isDark ? "text-slate-400" : "text-slate-400"}`}>wensproject.com</p>
      </div>
    </aside>
  );
}

const SEARCH_ITEMS = [
  { label: "Incident #1042 — Suspected Phishing", category: "Incidents", screen: 2 as Screen },
  { label: "Incident #1041 — Unusual outbound traffic", category: "Incidents", screen: "incidents" as Screen },
  { label: "Incident #1040 — Failed login brute force", category: "Incidents", screen: "incidents" as Screen },
  { label: "j.chen@acme.com", category: "Users", screen: 2 as Screen },
  { label: "m.rodriguez@acme.com", category: "Users", screen: "assets" as Screen },
  { label: "DESKTOP-JC2847", category: "Assets", screen: "assets" as Screen },
  { label: "finance-server-02", category: "Assets", screen: "assets" as Screen },
  { label: "185.220.101.42 (Tor exit node)", category: "IOCs", screen: 2 as Screen },
  { label: "login-acme.attacker.com", category: "IOCs", screen: 2 as Screen },
  { label: "ATT&CK Coverage Map", category: "Pages", screen: "attack-coverage" as Screen },
  { label: "T1566.001 — Spearphishing Attachment", category: "Techniques", screen: 3 as Screen },
  { label: "T1078 — Valid Accounts", category: "Techniques", screen: 3 as Screen },
];

function TopBar({ onReset, isDark, onToggleTheme, onNav }: { onReset: () => void; isDark: boolean; onToggleTheme: () => void; onNav: (s: Screen) => void }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? SEARCH_ITEMS.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : SEARCH_ITEMS.slice(0, 6);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (screen: Screen) => {
    onNav(screen);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <div className="flex items-center justify-between px-5 py-3 topbar-surface">
      <div className="flex items-center gap-2 md:hidden">
        <Shield className="w-4 h-4 text-blue-500" />
        <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>PRISM</span>
      </div>
      {/* Search */}
      <div ref={containerRef} className="hidden md:block relative">
        <div
          onClick={() => setSearchOpen(true)}
          className={`flex items-center gap-2 rounded-full px-4 py-2 w-[520px] cursor-pointer transition-all ${searchOpen ? "ring-2 ring-blue-500" : isDark ? "bg-white/[0.04] hover:ring-2 hover:ring-blue-500/50" : "bg-slate-100 hover:ring-2 hover:ring-blue-500/50"}`}
        >
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          {searchOpen ? (
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search incidents, assets, IOCs..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          ) : (
            <span className={`text-sm font-normal ${isDark ? "text-slate-400" : "text-slate-500"}`}>Search incidents, assets, IOCs...</span>
          )}
          {searchOpen && query && (
            <button onClick={(e) => { e.stopPropagation(); setQuery(""); }} className="cursor-pointer">
              <X className="w-4 h-4 text-slate-400 hover:text-slate-200" />
            </button>
          )}
        </div>
        {/* Dropdown */}
        {searchOpen && (
          <div className={`absolute top-full left-0 mt-2 w-[520px] rounded-lg shadow-xl z-50 border py-3 ${isDark ? "bg-[#141b2d] border-white/[0.08]" : "bg-white border-slate-200"}`}>
            <div className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}>
              {query ? `Results for "${query}"` : "Recent & Suggested"}
            </div>
            {filtered.length === 0 ? (
              <div className={`px-4 py-6 text-center text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>No results found</div>
            ) : (
              filtered.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleSelect(item.screen)}
                  className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors cursor-pointer ${isDark ? "hover:bg-white/[0.04]" : "hover:bg-slate-50"}`}
                >
                  <span className={`text-sm ${isDark ? "text-slate-200" : "text-slate-700"}`}>{item.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isDark ? "bg-white/[0.06] text-slate-400" : "bg-slate-100 text-slate-500"}`}>{item.category}</span>
                </button>
              ))
            )}
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button onClick={onReset} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${isDark ? "bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"}`} title="Reset demo">
          <RotateCcw className="w-4 h-4" />Reset
        </button>
        <button onClick={onToggleTheme} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${isDark ? "bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"}`} title="Toggle theme">
          {isDark ? "Light" : "Dark"}
        </button>
        <div className="cursor-pointer">
          <Bell className={`w-5 h-5 ${isDark ? "text-slate-300" : "text-slate-500"}`} />
        </div>
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"}`}>WL</div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  EXTRA PAGES — Incidents, ATT&CK Coverage, Assets, Settings         */
/* ================================================================== */

function IncidentsPage({ incidents, onSelect }: { incidents: Incident[]; onSelect: (id: number) => void }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const active = incidents.filter((i) => i.status !== "Contained");
  const contained = incidents.filter((i) => i.status === "Contained");

  const cols = "grid-cols-[80px_1.5fr_0.8fr_0.8fr_0.8fr_140px]";

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Active Incidents */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Active Incidents</h2>
        </div>
        <div className="card-surface rounded-none overflow-hidden !border-0">
          <div className={`grid ${cols} gap-3 px-6 py-4 border-b border-white/[0.06] text-sm font-semibold uppercase tracking-widest text-slate-400`}>
            <span>ID</span><span>Title</span><span>Severity</span><span>Status</span><span>Time</span><span>Action</span>
          </div>
          {active.map((inc) => (
            <button key={inc.id} onClick={() => onSelect(inc.id)} className={`w-full grid ${cols} gap-3 px-6 py-5 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors text-left items-center cursor-pointer`}>
              <span className="text-sm font-mono font-normal text-slate-300">#{inc.id}</span>
              <span className="text-base font-normal truncate">{inc.title}</span>
              <div><SeverityBadge severity={inc.severity} /></div>
              <div><StatusDot status={inc.status} /></div>
              <span className="text-sm font-normal text-slate-400">{inc.time}</span>
              <span className="text-sm font-semibold text-blue-500">Investigate</span>
            </button>
          ))}
        </div>
      </div>

      {/* Contained Incidents */}
      {contained.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Contained</h2>
          </div>
          <div className="card-surface rounded-none overflow-hidden !border-0">
            <div className={`grid ${cols} gap-3 px-6 py-4 border-b border-white/[0.06] text-sm font-semibold uppercase tracking-widest text-slate-400`}>
              <span>ID</span><span>Title</span><span>Severity</span><span>Status</span><span>Time</span><span>Action</span>
            </div>
            {contained.map((inc) => (
              <div key={inc.id}>
                <button onClick={() => setExpandedId(expandedId === inc.id ? null : inc.id)} className={`w-full grid ${cols} gap-3 px-6 py-5 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors text-left items-center cursor-pointer`}>
                  <span className="text-sm font-mono font-normal text-slate-300">#{inc.id}</span>
                  <span className="text-base font-normal truncate">{inc.title}</span>
                  <div><SeverityBadge severity={inc.severity} /></div>
                  <div><StatusDot status={inc.status} /></div>
                  <span className="text-sm font-normal text-slate-400">{inc.time}</span>
                  <span className="text-sm font-semibold text-blue-500">{expandedId === inc.id ? "Close" : "View Summary"}</span>
                </button>
                {expandedId === inc.id && (
                  <div className="px-6 py-6 border-b border-white/[0.03] bg-white/[0.01]">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <h3 className="text-base font-bold">Incident #{inc.id} &mdash; Contained</h3>
                    </div>
                    <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans text-slate-400">{INCIDENT_SUMMARIES[inc.id] || `Incident #${inc.id} \u2014 Contained\n\nNo detailed summary available for this incident.`}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
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
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">ATT&CK Coverage</h2>
          <p className="text-base font-normal text-slate-300">Detection coverage mapped to MITRE ATT&CK framework</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-semibold text-blue-400">73%</p>
          <p className="text-sm font-normal text-slate-400 uppercase tracking-wider">Overall Coverage</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {[
          { label: "Total Detection Rules", value: "121", accent: "" },
          { label: "Techniques Covered", value: "87 / 201", accent: "" },
          { label: "Gaps Identified", value: "18", accent: "text-amber-400" },
        ].map((s) => (
          <div key={s.label} className="card-surface  rounded-none p-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1">{s.label}</p>
            <p className={`text-2xl font-semibold ${s.accent || "text-white"}`}>{s.value}</p>
          </div>
        ))}
      </div>
      <div className="card-surface  rounded-none p-6 space-y-8">
        {coverageData.map((item) => (
          <div key={item.tactic} className="flex items-center gap-5">
            <span className="text-base font-normal text-slate-200 w-52 shrink-0">{item.tactic}</span>
            <div className="flex-1 h-3.5 bg-white/[0.04] rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${item.coverage > 70 ? "bg-emerald-500" : item.coverage > 50 ? "bg-blue-500" : item.coverage > 35 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${item.coverage}%` }} />
            </div>
            <span className="text-sm font-semibold text-white w-12 text-right">{item.coverage}%</span>
            <span className="text-sm font-normal text-slate-400 w-20 text-right">{item.detections} rules</span>
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
          <h2 className="text-xl font-semibold text-white mb-1">Assets</h2>
          <p className="text-sm font-normal text-slate-300">Managed endpoints, servers, and network devices</p>
        </div>
      </div>
      <div className="card-surface  rounded-none overflow-hidden !border-0">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.8fr] gap-4 px-6 py-4 border-b border-white/[0.06] text-xs font-semibold uppercase tracking-widest text-slate-400">
          <span>Name</span><span>Type</span><span>OS</span><span>User</span><span>Status</span><span>Risk</span>
        </div>
        {assets.map((a) => (
          <div key={a.name} className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.8fr] gap-4 px-6 py-5 border-b border-white/[0.03] items-center">
            <span className="text-base font-normal text-white flex items-center gap-2.5"><Server className="w-4 h-4 text-slate-300" />{a.name}</span>
            <span className="text-sm font-normal text-slate-400">{a.type}</span>
            <span className="text-sm font-normal text-slate-300">{a.os}</span>
            <span className="text-sm font-normal text-slate-300">{a.user}</span>
            <span className={`text-sm font-normal ${statusColors[a.status] || ""}`}>{a.status}</span>
            <span className={`text-sm font-normal ${riskColors[a.risk] || ""}`}>{a.risk}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-semibold text-white">Settings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-surface  rounded-none p-5 space-y-4">
          <h3 className="text-base font-semibold text-white">General</h3>
          {[
            { label: "Organization", value: "Acme Corp" },
            { label: "Timezone", value: "America / Los Angeles (PST)" },
            { label: "Date Format", value: "MM/DD/YYYY" },
            { label: "Session Timeout", value: "30 minutes" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
              <span className="text-sm font-normal text-slate-400">{s.label}</span>
              <span className="text-sm font-normal text-white">{s.value}</span>
            </div>
          ))}
        </div>
        <div className="card-surface  rounded-none p-5 space-y-4">
          <h3 className="text-base font-semibold text-white">Notifications</h3>
          {[
            { label: "Critical Alerts", enabled: true },
            { label: "New Incident Assignment", enabled: true },
            { label: "Response Playbook Complete", enabled: true },
            { label: "Weekly Digest", enabled: false },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
              <span className="text-sm font-normal text-slate-400">{s.label}</span>
              <div className={`w-10 h-5 rounded-full relative cursor-pointer ${s.enabled ? "bg-blue-500" : "bg-white/[0.1]"}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${s.enabled ? "left-[22px]" : "left-0.5"}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="card-surface  rounded-none p-5 space-y-4">
          <h3 className="text-base font-semibold text-white">Integrations</h3>
          {[
            { name: "CrowdStrike Falcon", status: "Connected", color: "text-emerald-400" },
            { name: "Microsoft Sentinel", status: "Connected", color: "text-emerald-400" },
            { name: "Slack", status: "Connected", color: "text-emerald-400" },
            { name: "Palo Alto Cortex", status: "Disconnected", color: "text-red-400" },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
              <span className="text-sm font-normal text-slate-300">{s.name}</span>
              <span className={`text-xs font-normal ${s.color}`}>{s.status}</span>
            </div>
          ))}
        </div>
        <div className="card-surface  rounded-none p-5 space-y-4">
          <h3 className="text-base font-semibold text-white">User Profile</h3>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-none bg-blue-500/20 flex items-center justify-center text-lg font-semibold text-blue-400">WL</div>
            <div>
              <p className="text-base font-semibold text-white">Wen Liu</p>
              <p className="text-sm font-normal text-slate-300">Tier 1 SOC Analyst</p>
              <p className="text-xs font-normal text-slate-400">wen.liu@acme.com</p>
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

  // Light mode: 7am-6pm, Dark mode: 6pm-7am
  const [isDark, setIsDark] = useState(() => {
    const h = new Date().getHours();
    return h < 7 || h >= 18;
  });

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

  // Theme tokens
  const t = isDark
    ? { bg: "bg-[#0a0f1a]", sidebar: "bg-[#0d1221]", card: "card-surface", topbar: "bg-[#0d1221]", text: "text-white", textSec: "text-slate-300", textMuted: "text-slate-400", border: "border-white/[0.06]", hoverBg: "hover:bg-white/[0.03]", inputBg: "bg-white/[0.04]", cardHover: "hover:bg-white/[0.02]", activeNav: "bg-blue-500/10 text-blue-400", mode: "dark" as const }
    : { bg: "bg-white", sidebar: "bg-white", card: "bg-white", topbar: "bg-white", text: "text-slate-900", textSec: "text-slate-600", textMuted: "text-slate-500", border: "border-slate-200", hoverBg: "hover:bg-slate-50", inputBg: "bg-slate-100", cardHover: "hover:bg-slate-50", activeNav: "bg-blue-50 text-blue-600", mode: "light" as const };

  return (
    <div className={`h-screen flex flex-col ${t.bg} ${t.text} overflow-hidden`} data-theme={t.mode}>
      <style>{`
        :root { --ring-bg: #141b2d; }
        .animate-fadeIn { animation: fadeIn .3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

        [data-theme="dark"] { --ring-bg: #141b2d; }
        [data-theme="dark"] .card-surface { background: #141b2d; }
        [data-theme="dark"] .sidebar-surface { background: #0d1221; border-right: 1px solid rgba(255,255,255,0.06); }
        [data-theme="dark"] .topbar-surface { background: #0d1221; border-bottom: 1px solid rgba(255,255,255,0.06); }

        [data-theme="light"] { --ring-bg: #ffffff; }
        [data-theme="light"] .card-surface { background: #ffffff; color: #0f172a; border: 1px solid #e2e8f0; }
        [data-theme="light"] .sidebar-surface { background: #ffffff; border-right: 1px solid #e2e8f0; }
        [data-theme="light"] .topbar-surface { background: #ffffff; border-bottom: 1px solid #e2e8f0; }

        /* Light mode: override all white text to dark */
        [data-theme="light"] .text-white { color: #0f172a; }
        /* Force white text on blue buttons in both modes */
        .force-white { color: #ffffff !important; }
        [data-theme="light"] .text-slate-200 { color: #334155; }
        [data-theme="light"] .text-slate-300 { color: #475569; }
        [data-theme="light"] .text-slate-400 { color: #64748b; }
        [data-theme="light"] .hover\\:text-white:hover { color: #0f172a; }

        /* Light mode: fix backgrounds */
        [data-theme="light"] .bg-white\\/\\[0\\.04\\] { background: #f1f5f9; }
        [data-theme="light"] .bg-white\\/\\[0\\.02\\] { background: #f8fafc; }
        [data-theme="light"] .bg-white\\/\\[0\\.03\\] { background: #f1f5f9; }
        [data-theme="light"] .hover\\:bg-white\\/\\[0\\.02\\]:hover { background: #f1f5f9; }
        [data-theme="light"] .hover\\:bg-white\\/\\[0\\.03\\]:hover { background: #e2e8f0; }
        [data-theme="light"] .hover\\:bg-white\\/\\[0\\.04\\]:hover { background: #e2e8f0; }
        [data-theme="light"] .bg-blue-500\\/10 { background: #eff6ff; }

        /* Light mode: borders */
        [data-theme="light"] .border-white\\/\\[0\\.06\\] { border-color: #e2e8f0; }
        [data-theme="light"] .border-white\\/\\[0\\.04\\] { border-color: #f1f5f9; }
        [data-theme="light"] .border-white\\/\\[0\\.03\\] { border-color: #f1f5f9; }
        [data-theme="light"] .border-b.border-white\\/\\[0\\.06\\] { border-color: #e2e8f0; }
        [data-theme="light"] .divide-white\\/\\[0\\.04\\] > * + * { border-color: #f1f5f9; }

        /* Attack chain cards */
        [data-theme="dark"] .attack-chain-active { background: rgba(59,130,246,0.06); }
        [data-theme="dark"] .attack-chain-predicted { background: rgba(245,158,11,0.04); }
        [data-theme="dark"] .attack-chain-inactive { background: transparent; }
        [data-theme="light"] .attack-chain-active { background: rgba(59,130,246,0.06); }
        [data-theme="light"] .attack-chain-predicted { background: rgba(245,158,11,0.05); }
        [data-theme="light"] .attack-chain-inactive { background: transparent; }
        [data-theme="light"] .border-l-white\\/\\[0\\.06\\] { border-left-color: #e2e8f0; }
        [data-theme="light"] .bg-white\\/\\[0\\.06\\] { background: #e2e8f0; }

        /* Timeline line */
        [data-theme="dark"] .timeline-line { background: rgba(255,255,255,0.1); }
        [data-theme="light"] .timeline-line { background: #e2e8f0; }

        [data-theme="dark"] .response-divider > * + * { border-top: 1px solid rgba(255,255,255,0.06); }
        [data-theme="light"] .response-divider > * + * { border-top: 1px solid #e2e8f0; }

        [data-theme="dark"] .tech-tooltip { background: #1e293b; color: #e2e8f0; border: 1px solid rgba(255,255,255,0.1); }
        [data-theme="light"] .tech-tooltip { background: #ffffff; color: #0f172a; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

        [data-theme="dark"] .summary-action-btn:hover { background: rgba(255,255,255,0.08) !important; }
        [data-theme="light"] .summary-action-btn:hover { background: #e2e8f0 !important; }

        [data-theme="dark"] .close-modal-surface { background: #1a2236; border: 1px solid rgba(255,255,255,0.08); color: #f1f5f9; }
        [data-theme="light"] .close-modal-surface { background: #ffffff; border: 1px solid #e2e8f0; color: #0f172a; }
        [data-theme="dark"] .cancel-btn { background: rgba(255,255,255,0.06); color: #94a3b8; }
        [data-theme="dark"] .cancel-btn:hover { background: rgba(255,255,255,0.12); color: #e2e8f0; }
        [data-theme="light"] .cancel-btn { background: #f1f5f9; color: #475569; }
        [data-theme="light"] .cancel-btn:hover { background: #e2e8f0; color: #0f172a; }

        /* MITRE tags - uniform tab style */
        [data-theme="dark"] .mitre-tag { background: rgba(255,255,255,0.06); color: #cbd5e1; }
        [data-theme="light"] .mitre-tag { background: #f1f5f9; color: #475569; }

        /* Heatmap tooltip */
        [data-theme="dark"] .heatmap-tooltip { background: #1e293b; color: #f1f5f9; }
        [data-theme="light"] .heatmap-tooltip { background: #ffffff; color: #0f172a; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }

        /* Heatmap cells */
        [data-theme="dark"] .heatmap-high { background: rgba(239,68,68,0.4); }
        [data-theme="dark"] .heatmap-med { background: rgba(245,158,11,0.2); }
        [data-theme="dark"] .heatmap-low { background: rgba(255,255,255,0.04); }
        [data-theme="light"] .heatmap-high { background: #fecaca; }
        [data-theme="light"] .heatmap-med { background: #fef3c7; }
        [data-theme="light"] .heatmap-low { background: #f1f5f9; }
      `}</style>
      <TopBar onReset={handleReset} isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} onNav={handleNav} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar screen={screen} onNav={handleNav} isDark={isDark} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {screen === 1 && <Screen1 incidents={incidents} onSelect={handleSelectIncident} isDark={isDark} />}
          {(screen === 2 || screen === 3 || screen === 4) && (
            <div className="space-y-6 animate-fadeIn">
              <button onClick={goScreen1} className={`flex items-center gap-2 text-base font-bold hover:text-blue-500 transition-colors cursor-pointer ${isDark ? "text-slate-400" : "text-slate-500"}`}><ArrowLeft className="w-4 h-4" />Back to Dashboard</button>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-base font-mono font-semibold text-slate-400">#{activeIncident.id}</span>
                  <SeverityBadge severity={activeIncident.severity} />
                  <StatusDot status={activeIncident.status} />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">{activeIncident.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-sm font-normal text-slate-400">
                  <span>Assigned to: {assigned ? <span className="text-blue-500 font-semibold">Wen Liu</span> : <button onClick={() => setAssigned(true)} className="text-blue-500 hover:underline cursor-pointer font-semibold">Assign to me</button>}</span>
                  <span>Created: 2h ago</span>
                  <span>Last activity: 23m ago</span>
                </div>
              </div>
              <div className="flex gap-2">
                {([{key: 2, label: "Timeline"}, {key: 3, label: "ATT&CK Map"}, {key: 4, label: "Response"}] as const).map((tab) => (
                  <button key={tab.key} onClick={() => setScreen(tab.key as Screen)} className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors rounded-full cursor-pointer ${screen === tab.key ? "bg-blue-500 force-white" : isDark ? "bg-[#141b2d] text-slate-400 hover:bg-white/[0.08] hover:text-white" : "bg-white text-slate-400 hover:!bg-slate-200 hover:text-slate-700"}`}>
                    {tab.label}
                  </button>
                ))}
              </div>
              {screen === 2 && <Screen2Content />}
              {screen === 3 && <Screen3Content incident={activeIncident} />}
              {screen === 4 && <Screen4 onBack={() => setScreen(2)} onComplete={goScreen5} />}
            </div>
          )}
          {screen === 5 && <Screen5 incident={activeIncident} onClose={goScreen6} />}
          {screen === 6 && <Screen1 incidents={incidents} onSelect={handleSelectIncident} isDark={isDark} />}
          {screen === "incidents" && <IncidentsPage incidents={incidents} onSelect={handleSelectIncident} />}
          {screen === "attack-coverage" && <AttackCoveragePage />}
          {screen === "assets" && <AssetsPage />}
          {screen === "settings" && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}

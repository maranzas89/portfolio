"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Shield, LayoutDashboard, AlertTriangle, Target, Clock, User, Monitor,
  ChevronRight, CheckCircle, Copy, ArrowLeft, Activity, Server, Lock,
  Zap, FileText, RotateCcw, UserX, Wifi, ArrowUpRight, Search, Bell,
  Settings, Grid3X3, Box, Mail, Globe, MapPin, Loader2, ChevronDown,
  ExternalLink, Send, XCircle, Crosshair, Eye, X, Menu,
} from "lucide-react";

/* ================================================================== */
/*  TYPES                                                              */
/* ================================================================== */

type Screen = 1 | 2 | 3 | 4 | 5 | 6 | "incidents" | "attack-coverage" | "assets" | "settings";
type IncidentStatus = "Open" | "Investigating" | "Contained";

interface Incident {
  id: number;
  title: string;
  severity: "Critical" | "Major" | "Minor" | "Warning" | "Info";
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
  Major: "bg-orange-500/20 text-orange-400 border-orange-500/40",
  Minor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  Warning: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  Info: "bg-slate-500/20 text-slate-400 border-slate-500/40",
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
  { id: 1041, title: "Unusual outbound traffic from staging-db-01", severity: "Major", status: "Investigating", mitre: ["Execution", "Collection"], user: "svc-deploy@acme.com", devices: 1, time: "5 hours ago" },
  { id: 1040, title: "Failed login brute force \u2014 admin portal", severity: "Critical", status: "Open", mitre: ["Credential Access"], user: "admin@acme.com", devices: 1, time: "8 hours ago" },
  { id: 1039, title: "Suspicious PowerShell execution on endpoint-14", severity: "Major", status: "Investigating", mitre: ["Execution", "Persistence"], user: "m.rodriguez@acme.com", devices: 1, time: "12 hours ago" },
  { id: 1035, title: "Expired TLS certificate on internal API gateway", severity: "Minor", status: "Open", mitre: ["Defense Evasion"], user: "svc-gateway@acme.com", devices: 1, time: "3 hours ago" },
  { id: 1034, title: "Privilege escalation attempt via sudo misconfiguration", severity: "Major", status: "Open", mitre: ["Privilege Escalation"], user: "d.kumar@acme.com", devices: 1, time: "6 hours ago" },
  { id: 1033, title: "Suspicious file download from shadow IT SaaS app", severity: "Minor", status: "Investigating", mitre: ["Initial Access", "Execution"], user: "l.garcia@acme.com", devices: 1, time: "7 hours ago" },
  { id: 1032, title: "Unpatched CVE-2024-8901 detected on 3 endpoints", severity: "Warning", status: "Open", mitre: ["Persistence"], user: "svc-patch@acme.com", devices: 3, time: "10 hours ago" },
  { id: 1031, title: "Failed MFA enrollment for new contractor accounts", severity: "Warning", status: "Open", mitre: ["Credential Access"], user: "hr-onboard@acme.com", devices: 2, time: "14 hours ago" },
  { id: 1030, title: "Outbound connection to Tor relay node from dev subnet", severity: "Minor", status: "Investigating", mitre: ["Command and Control"], user: "r.singh@acme.com", devices: 1, time: "16 hours ago" },
  { id: 1029, title: "Scheduled security audit report generated", severity: "Info", status: "Open", mitre: ["Discovery"], user: "svc-audit@acme.com", devices: 8, time: "18 hours ago" },
  { id: 1028, title: "New firewall rule deployed \u2014 pending validation", severity: "Info", status: "Open", mitre: ["Defense Evasion"], user: "n.ops@acme.com", devices: 1, time: "20 hours ago" },
  { id: 1038, title: "Anomalous DNS queries to unknown C2 domain", severity: "Minor", status: "Contained", mitre: ["Initial Access"], user: "k.patel@acme.com", devices: 2, time: "1 day ago" },
  { id: 1037, title: "Unauthorized access attempt to HR file share", severity: "Warning", status: "Contained", mitre: ["Lateral Movement"], user: "t.wilson@acme.com", devices: 1, time: "2 days ago" },
  { id: 1036, title: "Routine vulnerability scan completed", severity: "Info", status: "Contained", mitre: ["Discovery"], user: "svc-scanner@acme.com", devices: 4, time: "3 days ago" },
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

/* Per-incident detail data for timeline, sidebar, ATT&CK, response */
interface IncidentDetail {
  timeline: typeof TIMELINE;
  aiSummary: string;
  riskScore: number;
  assets: { name: string; type: string; icon: typeof User }[];
  techniques: Record<string, string[]>;
  predicted: typeof PREDICTED_NEXT;
  responseActions: typeof RESPONSE_ACTIONS;
}

const INCIDENT_DETAILS: Record<number, IncidentDetail> = {
  1042: {
    timeline: TIMELINE,
    aiSummary: "This is a coordinated attack chain. An attacker sent a targeted phishing email to j.chen in the finance department. After harvesting credentials through a fake SSO page, the attacker logged in from a Tor exit node and moved laterally to finance-server-02, where they began staging sensitive financial documents. No exfiltration detected yet, but the attack is still active. Immediate credential reset and device isolation strongly recommended.",
    riskScore: 94,
    assets: [
      { name: "j.chen@acme.com", type: "User \u00b7 Finance Dept", icon: User },
      { name: "DESKTOP-JC2847", type: "Workstation \u00b7 Windows 11", icon: Monitor },
      { name: "finance-server-02", type: "Server \u00b7 Windows Server 2022", icon: Server },
    ],
    techniques: ACTIVE_TECHNIQUES,
    predicted: PREDICTED_NEXT,
    responseActions: RESPONSE_ACTIONS,
  },
  1041: {
    timeline: [
      { time: "1:15 PM", title: "Outbound traffic spike detected", tactic: "Collection", technique: "T1074.001", techniqueName: "Local Data Staging", detail: "staging-db-01 outbound traffic spiked 800% above baseline to external IP 203.0.113.55 on port 443", confidence: "High", source: "Network Monitor", icon: Activity },
      { time: "1:22 PM", title: "CI/CD credential accessed from unusual IP", tactic: "Credential Access", technique: "T1078", techniqueName: "Valid Accounts", detail: "svc-deploy service account authenticated from IP outside normal CIDR range", confidence: "High", source: "Azure AD", icon: Lock },
      { time: "1:35 PM", title: "Database export job triggered", tactic: "Execution", technique: "T1059.004", techniqueName: "Unix Shell", detail: "Unauthorized pg_dump command executed on staging database via compromised CI job", confidence: "High", source: "EDR (CrowdStrike)", icon: Server },
      { time: "1:50 PM", title: "Encrypted data exfil via HTTPS POST", tactic: "Exfiltration", technique: "T1041", techniqueName: "Exfiltration Over C2 Channel", detail: "45MB encrypted payload sent to 203.0.113.55 via HTTPS POST requests", confidence: "Medium", source: "DLP", icon: Globe },
    ],
    aiSummary: "A compromised CI/CD pipeline credential was used to exfiltrate staging database exports. The attacker exploited svc-deploy\u2019s service account to trigger unauthorized database dumps and exfil data via encrypted HTTPS. Staging data only \u2014 no production exposure. Immediate credential rotation and pipeline lockdown recommended.",
    riskScore: 78,
    assets: [
      { name: "svc-deploy@acme.com", type: "Service Account \u00b7 CI/CD", icon: User },
      { name: "staging-db-01", type: "Server \u00b7 Linux", icon: Server },
    ],
    techniques: { "Credential Access": ["T1078"], Execution: ["T1059.004"], Collection: ["T1074.001"], Exfiltration: ["T1041"] },
    predicted: [
      { tactic: "Persistence", technique: "T1098", name: "Account Manipulation", desc: "Attacker may create backdoor accounts in CI/CD system." },
      { tactic: "Impact", technique: "T1485", name: "Data Destruction", desc: "Possible database wipe to cover tracks after exfiltration." },
    ],
    responseActions: [
      { label: "Rotate Credentials", desc: "Rotate svc-deploy and all CI/CD pipeline tokens", completedText: "svc-deploy credentials rotated, all API tokens revoked", time: "1:42 PM", icon: RotateCcw },
      { label: "Isolate Server", desc: "Network-isolate staging-db-01 via EDR", completedText: "staging-db-01 isolated from network", time: "1:45 PM", icon: Wifi },
      { label: "Block IP", desc: "Block outbound to 203.0.113.55 at firewall", completedText: "203.0.113.55 blocked at firewall", time: "1:50 PM", icon: Globe },
      { label: "Audit Pipeline", desc: "Audit CI/CD pipeline for compromised jobs", completedText: "Compromised CI job identified and removed", time: "2:20 PM", icon: FileText },
    ],
  },
  1040: {
    timeline: [
      { time: "4:30 AM", title: "Brute force attack initiated", tactic: "Credential Access", technique: "T1110.004", techniqueName: "Credential Stuffing", detail: "2,847 login attempts from distributed IP range 185.220.0.0/16 targeting admin@acme.com", confidence: "High", source: "WAF Logs", icon: Lock },
      { time: "4:38 AM", title: "Rate limit threshold exceeded", tactic: "Credential Access", technique: "T1110.001", techniqueName: "Password Guessing", detail: "Login rate exceeded 50 attempts/min, triggering automated alert", confidence: "High", source: "SIEM", icon: AlertTriangle },
      { time: "4:45 AM", title: "Credential database match detected", tactic: "Credential Access", technique: "T1110.004", techniqueName: "Credential Stuffing", detail: "Attack payload matches patterns from leaked credential database (2024 ComboList)", confidence: "Medium", source: "Threat Intel", icon: FileText },
    ],
    aiSummary: "Automated credential stuffing attack against the admin portal using a leaked password database. 2,847 attempts from a distributed Tor IP range over 30 minutes. MFA blocked all attempts \u2014 no successful authentication. Low sophistication but high volume. WAF rate limiting and IP blocking recommended.",
    riskScore: 62,
    assets: [
      { name: "admin@acme.com", type: "User \u00b7 IT Admin", icon: User },
      { name: "admin.acme.com", type: "Web Portal \u00b7 Admin", icon: Globe },
    ],
    techniques: { "Credential Access": ["T1110.004", "T1110.001"] },
    predicted: [
      { tactic: "Initial Access", technique: "T1078", name: "Valid Accounts", desc: "If any credentials matched, attacker will attempt login from clean IP." },
      { tactic: "Persistence", technique: "T1136", name: "Create Account", desc: "Post-compromise, attackers often create backdoor admin accounts." },
    ],
    responseActions: [
      { label: "Block IP Range", desc: "Block source IP range 185.220.0.0/16 at WAF", completedText: "IP range 185.220.0.0/16 blocked at WAF", time: "4:45 AM", icon: Globe },
      { label: "Lock Account", desc: "Temporarily lock admin@acme.com as precaution", completedText: "admin@acme.com temporarily locked", time: "4:46 AM", icon: Lock },
      { label: "Tighten Rate Limit", desc: "Reduce to 5 attempts/min on admin portal", completedText: "Rate limit tightened to 5 attempts/min", time: "4:50 AM", icon: Activity },
    ],
  },
  1039: {
    timeline: [
      { time: "9:00 AM", title: "Suspicious PowerShell detected", tactic: "Execution", technique: "T1059.001", techniqueName: "PowerShell", detail: "Encoded PowerShell command detected on DESKTOP-MR1492, spawned from winword.exe", confidence: "High", source: "EDR (CrowdStrike)", icon: FileText },
      { time: "9:05 AM", title: "Secondary payload download", tactic: "Execution", technique: "T1204.002", techniqueName: "Malicious File", detail: "PowerShell downloading payload from pastebin-like service paste.ee/r/abc123", confidence: "High", source: "Proxy Logs", icon: Globe },
      { time: "9:12 AM", title: "Registry persistence installed", tactic: "Persistence", technique: "T1547.001", techniqueName: "Registry Run Keys", detail: "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run key modified to launch payload on startup", confidence: "High", source: "EDR (CrowdStrike)", icon: Server },
    ],
    aiSummary: "Macro-enabled document opened from personal email triggered encoded PowerShell execution. The script downloaded a secondary payload and installed registry persistence. No lateral movement detected. The endpoint should be isolated and cleaned. Personal email access on corporate devices should be blocked.",
    riskScore: 71,
    assets: [
      { name: "m.rodriguez@acme.com", type: "User \u00b7 Engineering", icon: User },
      { name: "DESKTOP-MR1492", type: "Workstation \u00b7 Windows 11", icon: Monitor },
    ],
    techniques: { Execution: ["T1059.001", "T1204.002"], Persistence: ["T1547.001"] },
    predicted: [
      { tactic: "Credential Access", technique: "T1003", name: "OS Credential Dumping", desc: "Payload may attempt to dump LSASS for credential harvesting." },
      { tactic: "Lateral Movement", technique: "T1021.001", name: "Remote Desktop", desc: "With harvested creds, lateral movement to other workstations likely." },
    ],
    responseActions: [
      { label: "Kill Process", desc: "Terminate malicious process and quarantine payload", completedText: "Malicious process terminated and quarantined", time: "9:15 AM", icon: XCircle },
      { label: "Isolate Endpoint", desc: "Network-isolate DESKTOP-MR1492", completedText: "DESKTOP-MR1492 isolated from network", time: "9:18 AM", icon: Wifi },
      { label: "Remove Persistence", desc: "Remove malicious registry run key", completedText: "Registry persistence key removed", time: "9:25 AM", icon: RotateCcw },
      { label: "Block Personal Email", desc: "Block personal email access on corporate devices org-wide", completedText: "Personal email access blocked org-wide", time: "10:15 AM", icon: Mail },
    ],
  },
  1035: {
    timeline: [
      { time: "6:00 AM", title: "TLS certificate expiry alert", tactic: "Defense Evasion", technique: "T1557.002", techniqueName: "ARP Cache Poisoning", detail: "Automated monitoring flagged expired TLS certificate on api-gw-internal.acme.local", confidence: "High", source: "Cert Monitor", icon: AlertTriangle },
      { time: "6:05 AM", title: "502 errors detected on internal APIs", tactic: "Defense Evasion", technique: "T1562", techniqueName: "Impair Defenses", detail: "Intermittent 502 errors reported by 4 dependent microservices due to TLS handshake failures", confidence: "High", source: "APM", icon: Activity },
    ],
    aiSummary: "Expired TLS certificate on internal API gateway caused intermittent service disruptions. No external exposure \u2014 the gateway is behind VPN. This is an operational issue, not an active attack, but expired certificates can create MITM vulnerabilities. Certificate auto-renewal should be configured.",
    riskScore: 35,
    assets: [
      { name: "api-gw-internal.acme.local", type: "API Gateway \u00b7 Internal", icon: Server },
    ],
    techniques: { "Defense Evasion": ["T1557.002"] },
    predicted: [],
    responseActions: [
      { label: "Renew Certificate", desc: "Emergency certificate renewal via internal CA", completedText: "New certificate issued and deployed", time: "6:20 AM", icon: Lock },
      { label: "Verify Services", desc: "Verify health of 12 dependent microservices", completedText: "All 12 microservices healthy", time: "6:28 AM", icon: Activity },
    ],
  },
  1034: {
    timeline: [
      { time: "2:00 PM", title: "Sudo escalation detected", tactic: "Privilege Escalation", technique: "T1548.003", techniqueName: "Sudo Caching", detail: "d.kumar executed passwordless sudo to install packages on dev-server-03 via misconfigured sudoers", confidence: "High", source: "Auditd", icon: Lock },
      { time: "2:10 PM", title: "Unauthorized packages installed", tactic: "Execution", technique: "T1059.004", techniqueName: "Unix Shell", detail: "3 debugging packages installed with root privileges: strace, gdb, ltrace", confidence: "Medium", source: "Package Manager", icon: FileText },
    ],
    aiSummary: "Developer exploited a misconfigured sudoers entry to install debugging tools with root access. No malicious intent \u2014 but the misconfiguration could be exploited by a real attacker. Sudoers must be audited org-wide.",
    riskScore: 55,
    assets: [
      { name: "d.kumar@acme.com", type: "User \u00b7 DevOps", icon: User },
      { name: "dev-server-03", type: "Server \u00b7 Linux", icon: Server },
    ],
    techniques: { "Privilege Escalation": ["T1548.003"], Execution: ["T1059.004"] },
    predicted: [{ tactic: "Persistence", technique: "T1136", name: "Create Account", desc: "Root access could be used to create backdoor accounts." }],
    responseActions: [
      { label: "Fix Sudoers", desc: "Correct misconfigured sudoers entry on dev-server-03", completedText: "Sudoers misconfiguration corrected", time: "2:25 PM", icon: Lock },
      { label: "Remove Packages", desc: "Remove unauthorized packages and restore system", completedText: "Unauthorized packages removed", time: "2:40 PM", icon: RotateCcw },
      { label: "Audit Sudoers", desc: "Initiate org-wide sudoers audit across 45 servers", completedText: "Sudoers audit initiated across 45 servers", time: "3:00 PM", icon: FileText },
    ],
  },
  1033: {
    timeline: [
      { time: "10:30 AM", title: "Suspicious file download detected", tactic: "Initial Access", technique: "T1189", techniqueName: "Drive-by Compromise", detail: "l.garcia downloaded 45MB archive from filecloud-free.io containing executable files", confidence: "High", source: "DLP", icon: Globe },
      { time: "10:38 AM", title: "File type mismatch flagged", tactic: "Execution", technique: "T1204.002", techniqueName: "Malicious File", detail: "Archive contained .exe files disguised as design templates (.psd.exe)", confidence: "High", source: "Endpoint Protection", icon: FileText },
    ],
    aiSummary: "User downloaded files from unauthorized SaaS app containing adware bundled with design templates. No persistence or lateral movement. Shadow IT policy enforcement needed.",
    riskScore: 42,
    assets: [
      { name: "l.garcia@acme.com", type: "User \u00b7 Design", icon: User },
      { name: "DESKTOP-LG2201", type: "Workstation \u00b7 macOS 14", icon: Monitor },
    ],
    techniques: { "Initial Access": ["T1189"], Execution: ["T1204.002"] },
    predicted: [],
    responseActions: [
      { label: "Quarantine Files", desc: "Quarantine downloaded archive and executables", completedText: "Files quarantined by endpoint protection", time: "10:45 AM", icon: XCircle },
      { label: "Block URL", desc: "Add filecloud-free.io to URL blocklist", completedText: "filecloud-free.io blocked org-wide", time: "10:50 AM", icon: Globe },
    ],
  },
  1032: {
    timeline: [
      { time: "8:00 AM", title: "CVE-2024-8901 detected", tactic: "Persistence", technique: "T1068", techniqueName: "Exploitation for Privilege Escalation", detail: "Vulnerability scanner identified unpatched CVE-2024-8901 (CVSS 6.5) on 3 endpoints", confidence: "High", source: "Nessus", icon: AlertTriangle },
    ],
    aiSummary: "Routine vulnerability scan found unpatched OpenSSH vulnerability on 3 endpoints. No active exploitation detected. Patch deployment recommended within 48 hours.",
    riskScore: 38,
    assets: [
      { name: "DESKTOP-MR1492", type: "Workstation \u00b7 Windows 11", icon: Monitor },
      { name: "mail-gw-01", type: "Server \u00b7 Linux", icon: Server },
      { name: "dc-primary-01", type: "Server \u00b7 Windows Server 2022", icon: Server },
    ],
    techniques: { Persistence: ["T1068"] },
    predicted: [],
    responseActions: [
      { label: "Deploy Patch", desc: "Deploy emergency patch to all 3 affected endpoints", completedText: "Patch deployed to all 3 endpoints via SCCM", time: "8:25 AM", icon: Activity },
      { label: "Verify Patch", desc: "Post-patch verification scan", completedText: "All systems verified clean", time: "8:35 AM", icon: FileText },
    ],
  },
  1031: {
    timeline: [
      { time: "9:00 AM", title: "MFA enrollment failure detected", tactic: "Credential Access", technique: "T1078.004", techniqueName: "Cloud Accounts", detail: "2 new contractor accounts failed MFA enrollment, created with email-only auth", confidence: "Medium", source: "Identity Provider", icon: Lock },
    ],
    aiSummary: "HR onboarding script used a deprecated API endpoint that skipped MFA enforcement. 2 contractor accounts were created without MFA. No unauthorized access occurred, but the accounts were vulnerable until suspended.",
    riskScore: 28,
    assets: [
      { name: "c.extern-01", type: "Contractor Account", icon: User },
      { name: "c.extern-02", type: "Contractor Account", icon: User },
    ],
    techniques: { "Credential Access": ["T1078.004"] },
    predicted: [],
    responseActions: [
      { label: "Suspend Accounts", desc: "Suspend contractor accounts pending MFA", completedText: "Both accounts suspended", time: "9:20 AM", icon: UserX },
      { label: "Fix Script", desc: "Update HR onboarding script to enforce MFA", completedText: "Onboarding script updated", time: "9:35 AM", icon: FileText },
    ],
  },
  1030: {
    timeline: [
      { time: "3:00 PM", title: "Tor relay connection detected", tactic: "Command and Control", technique: "T1090.003", techniqueName: "Multi-hop Proxy", detail: "Outbound connection from dev subnet to known Tor relay node 198.51.100.42", confidence: "High", source: "Network Monitor", icon: Globe },
      { time: "3:15 PM", title: "User interview conducted", tactic: "Discovery", technique: "T1046", techniqueName: "Network Service Discovery", detail: "r.singh confirmed legitimate use \u2014 testing .onion threat intel feed for research project", confidence: "High", source: "Security Team", icon: User },
    ],
    aiSummary: "Tor connection from dev subnet was legitimate security research by r.singh. No malicious activity. However, Tor traffic on corporate networks should go through a dedicated research environment with controlled egress.",
    riskScore: 22,
    assets: [
      { name: "r.singh@acme.com", type: "User \u00b7 Security Research", icon: User },
      { name: "DESKTOP-RS0441", type: "Workstation \u00b7 Linux", icon: Monitor },
    ],
    techniques: { "Command and Control": ["T1090.003"] },
    predicted: [],
    responseActions: [
      { label: "Block Tor on Dev", desc: "Block Tor traffic on dev subnet at firewall", completedText: "Tor traffic blocked on dev subnet", time: "3:40 PM", icon: Globe },
      { label: "Provision Research VM", desc: "Create isolated research VM with controlled egress", completedText: "Research VM provisioned", time: "4:10 PM", icon: Server },
    ],
  },
  1029: {
    timeline: [
      { time: "12:00 AM", title: "Weekly audit scan initiated", tactic: "Discovery", technique: "T1046", techniqueName: "Network Service Discovery", detail: "Automated security audit covering 8 production endpoints, 3 network devices, 2 cloud instances", confidence: "High", source: "Nessus", icon: Activity },
    ],
    aiSummary: "Routine weekly security audit completed. Overall posture score: 87/100. 0 critical, 2 medium (addressed in #1032), 4 low/informational findings. No action required beyond routine follow-up.",
    riskScore: 12,
    assets: [
      { name: "Production Fleet", type: "8 Endpoints", icon: Server },
      { name: "Network Devices", type: "3 Devices", icon: Wifi },
    ],
    techniques: { Discovery: ["T1046"] },
    predicted: [],
    responseActions: [
      { label: "Archive Report", desc: "Archive audit report in compliance repository", completedText: "Report archived in compliance repository", time: "12:12 AM", icon: FileText },
    ],
  },
  1028: {
    timeline: [
      { time: "10:00 AM", title: "New firewall rule deployed", tactic: "Defense Evasion", technique: "T1562.004", techniqueName: "Disable System Firewall", detail: "n.ops deployed new rule allowing inbound on port 8443 for internal dashboard. Change request CR-2024-1847", confidence: "Low", source: "Change Management", icon: Activity },
    ],
    aiSummary: "Routine firewall rule change for new internal dashboard service. Rule correctly scoped to internal VLAN only. No security risk identified after validation.",
    riskScore: 8,
    assets: [
      { name: "fw-primary-01", type: "Firewall \u00b7 Palo Alto", icon: Server },
    ],
    techniques: { "Defense Evasion": ["T1562.004"] },
    predicted: [],
    responseActions: [
      { label: "Validate Rule", desc: "Review rule against security policy and run port scan", completedText: "Rule validated \u2014 internal VLAN only", time: "10:35 AM", icon: FileText },
    ],
  },
};

// Helper to get detail for any incident, with fallback
function getIncidentDetail(id: number): IncidentDetail {
  return INCIDENT_DETAILS[id] || {
    timeline: [{ time: "N/A", title: "No timeline data", tactic: "Discovery", technique: "N/A", techniqueName: "N/A", detail: "No detail available for this incident.", confidence: "Low", source: "Unknown", icon: Activity }],
    aiSummary: "No AI summary available for this incident.",
    riskScore: 20,
    assets: [],
    techniques: {},
    predicted: [],
    responseActions: [{ label: "Investigate", desc: "Manual investigation required", completedText: "Investigation completed", time: "N/A", icon: FileText }],
  };
}

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
  1041: `Incident #1041 \u2014 Contained
Timeline: 1:15 PM - 3:02 PM (1h 47m)

Attack Summary: Unusual outbound traffic detected from staging-db-01 to external IP 203.0.113.55 on port 443. Traffic volume spiked 800% above baseline during off-hours. Investigation traced the activity to a compromised CI/CD pipeline credential (svc-deploy) that was used to exfiltrate staging database exports via encrypted HTTPS POST requests.

MITRE ATT&CK Techniques: T1204.002 (Malicious File), T1074.001 (Local Data Staging)

Response Actions Taken:
\u2022 svc-deploy credentials rotated and all API tokens revoked \u2014 1:42 PM
\u2022 staging-db-01 network isolated via EDR \u2014 1:45 PM
\u2022 Outbound traffic to 203.0.113.55 blocked at firewall \u2014 1:50 PM
\u2022 CI/CD pipeline audit initiated, compromised job identified \u2014 2:20 PM
\u2022 Staging database restored from clean backup \u2014 2:45 PM

Staging data only \u2014 no production data exposed. Recommended: rotate all CI/CD secrets, enforce least-privilege for service accounts, enable pipeline signing.

Analyst: Wen Liu \u00b7 Closed: 3:02 PM`,
  1040: `Incident #1040 \u2014 Contained
Timeline: 4:30 AM - 5:15 AM (45m)

Attack Summary: Automated brute force attack detected against admin portal (admin.acme.com). 2,847 login attempts from distributed IP range (185.220.0.0/16) targeting admin@acme.com over 30-minute window. Attack used credential stuffing with leaked password database. No successful authentication achieved due to MFA enforcement.

MITRE ATT&CK Techniques: T1110.004 (Credential Stuffing)

Response Actions Taken:
\u2022 Source IP range 185.220.0.0/16 blocked at WAF \u2014 4:45 AM
\u2022 admin@acme.com account temporarily locked as precaution \u2014 4:46 AM
\u2022 Rate limiting rule tightened to 5 attempts/min on admin portal \u2014 4:50 AM
\u2022 Account unlocked after password reset and MFA re-verification \u2014 5:10 AM

No unauthorized access. Recommended: implement CAPTCHA on admin login, monitor for credential reuse across employee accounts.

Analyst: R. Tanaka \u00b7 Closed: 5:15 AM`,
  1039: `Incident #1039 \u2014 Contained
Timeline: 9:00 AM - 10:30 AM (1h 30m)

Attack Summary: Suspicious PowerShell execution detected on endpoint-14 (DESKTOP-MR1492) belonging to m.rodriguez@acme.com. Process tree analysis revealed encoded PowerShell downloading a secondary payload from pastebin-like service. Triggered by macro-enabled document received via personal email accessed on corporate device.

MITRE ATT&CK Techniques: T1059.001 (PowerShell), T1547.001 (Registry Run Keys)

Response Actions Taken:
\u2022 Malicious process terminated and quarantined by EDR \u2014 9:15 AM
\u2022 DESKTOP-MR1492 isolated from network \u2014 9:18 AM
\u2022 Registry persistence key removed \u2014 9:25 AM
\u2022 Full endpoint scan completed, secondary payload neutralized \u2014 9:50 AM
\u2022 Personal email access blocked on corporate devices org-wide \u2014 10:15 AM

No lateral movement detected. Recommended: enforce application whitelisting on endpoints, security awareness training for m.rodriguez.

Analyst: J. Kim \u00b7 Closed: 10:30 AM`,
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
  1036: `Incident #1036 \u2014 Contained
Timeline: 11:00 PM - 11:25 PM (25m)

Attack Summary: Routine vulnerability scan completed across 4 production endpoints. Nessus scan identified 2 medium-severity CVEs (CVE-2024-3456, CVE-2024-7891) on mail-gw-01 and dc-primary-01 related to outdated OpenSSL libraries. No active exploitation detected. Vulnerabilities are patching-priority, not actively targeted.

MITRE ATT&CK Techniques: T1046 (Network Service Discovery)

Response Actions Taken:
\u2022 Vulnerability report generated and triaged \u2014 11:10 PM
\u2022 Patching tickets created for mail-gw-01 and dc-primary-01 \u2014 11:15 PM
\u2022 Compensating controls verified (WAF rules active) \u2014 11:20 PM
\u2022 Next scan scheduled for 72h follow-up \u2014 11:22 PM

Informational only. Recommended: prioritize OpenSSL patch in next maintenance window.

Analyst: Automated \u00b7 Closed: 11:25 PM`,
  1035: `Incident #1035 \u2014 Contained
Timeline: 6:00 AM - 6:35 AM (35m)

Attack Summary: Expired TLS certificate detected on internal API gateway (api-gw-internal.acme.local). Certificate expired 2 days prior, causing intermittent 502 errors for internal microservices. No external exposure \u2014 gateway is behind VPN. Automated monitoring flagged the certificate expiry.

MITRE ATT&CK Techniques: T1557.002 (ARP Cache Poisoning \u2014 related risk with expired certs)

Response Actions Taken:
\u2022 Emergency certificate renewal initiated via internal CA \u2014 6:10 AM
\u2022 New certificate deployed to api-gw-internal \u2014 6:20 AM
\u2022 Service health verified across 12 dependent microservices \u2014 6:28 AM
\u2022 Certificate auto-renewal job configured to prevent recurrence \u2014 6:32 AM

No security breach. Recommended: audit all internal certificates for upcoming expirations.

Analyst: Automated \u00b7 Closed: 6:35 AM`,
  1034: `Incident #1034 \u2014 Contained
Timeline: 2:00 PM - 3:15 PM (1h 15m)

Attack Summary: Privilege escalation attempt detected on dev-server-03. User d.kumar@acme.com exploited a misconfigured sudoers entry allowing password-less root access to /usr/local/bin/*. User ran unauthorized package installations with root privileges. No malicious intent confirmed \u2014 developer was attempting to install debugging tools.

MITRE ATT&CK Techniques: T1548.003 (Sudo and Sudo Caching)

Response Actions Taken:
\u2022 Sudoers misconfiguration corrected on dev-server-03 \u2014 2:25 PM
\u2022 Unauthorized packages removed and system restored \u2014 2:40 PM
\u2022 d.kumar notified and counseled on proper change request procedures \u2014 2:55 PM
\u2022 Org-wide sudoers audit initiated across 45 servers \u2014 3:00 PM

No malicious activity. Recommended: implement centralized sudo management, require change tickets for package installation.

Analyst: A. Chen \u00b7 Closed: 3:15 PM`,
  1033: `Incident #1033 \u2014 Contained
Timeline: 10:30 AM - 11:45 AM (1h 15m)

Attack Summary: Suspicious file download detected from unauthorized SaaS application (filecloud-free.io). User l.garcia@acme.com downloaded a 45MB archive containing executable files disguised as design templates. DLP policy triggered on file type mismatch. Analysis revealed the files were adware bundled with legitimate design assets.

MITRE ATT&CK Techniques: T1189 (Drive-by Compromise), T1204.002 (Malicious File)

Response Actions Taken:
\u2022 Downloaded files quarantined by endpoint protection \u2014 10:45 AM
\u2022 filecloud-free.io added to URL blocklist \u2014 10:50 AM
\u2022 Endpoint scan completed on l.garcia workstation \u2014 no persistence found \u2014 11:15 AM
\u2022 Shadow IT SaaS audit initiated \u2014 identified 8 unauthorized apps \u2014 11:30 AM

No data exfiltration. Recommended: enforce CASB policies, block unapproved SaaS file-sharing services.

Analyst: M. Wong \u00b7 Closed: 11:45 AM`,
  1032: `Incident #1032 \u2014 Contained
Timeline: 8:00 AM - 8:40 AM (40m)

Attack Summary: Vulnerability scanner identified unpatched CVE-2024-8901 (CVSS 6.5) on 3 endpoints: DESKTOP-MR1492, mail-gw-01, and dc-primary-01. The vulnerability affects OpenSSH and could allow authenticated local privilege escalation. No active exploitation detected in the wild for this CVE at this time.

MITRE ATT&CK Techniques: T1068 (Exploitation for Privilege Escalation)

Response Actions Taken:
\u2022 Emergency patch package prepared and tested in staging \u2014 8:15 AM
\u2022 Patch deployed to all 3 affected endpoints via SCCM \u2014 8:25 AM
\u2022 Post-patch verification completed \u2014 all systems clean \u2014 8:35 AM
\u2022 CVE added to automated scan watchlist \u2014 8:38 AM

No exploitation detected. Recommended: reduce patch SLA for CVSS 6.0+ vulnerabilities from 72h to 48h.

Analyst: R. Tanaka \u00b7 Closed: 8:40 AM`,
  1031: `Incident #1031 \u2014 Contained
Timeline: 9:00 AM - 10:00 AM (1h)

Attack Summary: 2 new contractor accounts (c.extern-01, c.extern-02) failed MFA enrollment after provisioning by HR. Accounts were created with email-only authentication, bypassing mandatory MFA policy. Root cause: HR onboarding script used deprecated API endpoint that skipped MFA enforcement step.

MITRE ATT&CK Techniques: T1078.004 (Cloud Accounts)

Response Actions Taken:
\u2022 Both contractor accounts suspended pending MFA enrollment \u2014 9:20 AM
\u2022 HR onboarding script updated to use current API with MFA enforcement \u2014 9:35 AM
\u2022 Contractors re-enrolled with hardware security keys \u2014 9:50 AM
\u2022 Audit of all accounts created in past 30 days for MFA compliance \u2014 9:55 AM

No unauthorized access. Recommended: add automated MFA compliance check to account provisioning pipeline.

Analyst: S. Park \u00b7 Closed: 10:00 AM`,
  1030: `Incident #1030 \u2014 Contained
Timeline: 3:00 PM - 4:20 PM (1h 20m)

Attack Summary: Network monitoring detected outbound connection from dev subnet (10.20.30.0/24) to known Tor relay node (198.51.100.42). Source: r.singh workstation (DESKTOP-RS0441). Investigation revealed r.singh was running Tor Browser for testing a .onion-based threat intelligence feed. No malicious activity confirmed.

MITRE ATT&CK Techniques: T1090.003 (Multi-hop Proxy)

Response Actions Taken:
\u2022 r.singh interviewed \u2014 confirmed legitimate research purpose \u2014 3:30 PM
\u2022 Tor traffic blocked on dev subnet at firewall \u2014 3:40 PM
\u2022 Exception request process documented for security research \u2014 3:55 PM
\u2022 Dedicated research VM provisioned with controlled egress for future testing \u2014 4:10 PM

No data exfiltration. Recommended: create isolated network segment for security research activities.

Analyst: J. Kim \u00b7 Closed: 4:20 PM`,
  1029: `Incident #1029 \u2014 Contained
Timeline: 12:00 AM - 12:15 AM (15m)

Attack Summary: Scheduled weekly security audit report generated automatically. Scan covered 8 production endpoints, 3 network devices, and 2 cloud instances. Report summary: 0 critical findings, 2 medium findings (addressed in #1032), 4 low/informational findings. Overall security posture score: 87/100.

MITRE ATT&CK Techniques: T1046 (Network Service Discovery)

Response Actions Taken:
\u2022 Audit report generated and distributed to security team \u2014 12:05 AM
\u2022 Medium findings cross-referenced with existing tickets \u2014 12:08 AM
\u2022 Low findings logged for next maintenance cycle \u2014 12:10 AM
\u2022 Report archived in compliance repository \u2014 12:12 AM

Informational only. No action required beyond routine follow-up.

Analyst: Automated \u00b7 Closed: 12:15 AM`,
  1028: `Incident #1028 \u2014 Contained
Timeline: 10:00 AM - 10:45 AM (45m)

Attack Summary: New firewall rule deployed by n.ops@acme.com to allow inbound traffic on port 8443 for new internal dashboard service. Rule required validation to ensure it doesn\u2019t conflict with existing security policies or expose internal services externally. Change request CR-2024-1847 referenced.

MITRE ATT&CK Techniques: T1562.004 (Disable or Modify System Firewall)

Response Actions Taken:
\u2022 Firewall rule reviewed against security policy matrix \u2014 10:15 AM
\u2022 Port scan conducted to verify no unintended exposure \u2014 10:25 AM
\u2022 Rule validated and approved \u2014 traffic restricted to internal VLAN only \u2014 10:35 AM
\u2022 Change request CR-2024-1847 marked complete \u2014 10:40 AM

No security risk. Rule correctly scoped to internal traffic only.

Analyst: A. Chen \u00b7 Closed: 10:45 AM`,
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

// 24-hour alert volume data (hour, critical, major, minor, warning, info)
const ALERT_VOLUME_BASE = [
  { hour: "00:00", critical: 0, major: 1, minor: 1, warning: 2, info: 3 },
  { hour: "02:00", critical: 0, major: 0, minor: 1, warning: 1, info: 2 },
  { hour: "04:00", critical: 0, major: 0, minor: 0, warning: 1, info: 1 },
  { hour: "06:00", critical: 0, major: 1, minor: 1, warning: 2, info: 2 },
  { hour: "08:00", critical: 1, major: 2, minor: 2, warning: 3, info: 4 },
  { hour: "09:00", critical: 1, major: 3, minor: 3, warning: 4, info: 3 },
  { hour: "10:00", critical: 2, major: 4, minor: 3, warning: 5, info: 3 },
  { hour: "11:00", critical: 3, major: 5, minor: 3, warning: 4, info: 2 },
  { hour: "12:00", critical: 2, major: 4, minor: 2, warning: 3, info: 3 },
  { hour: "13:00", critical: 2, major: 3, minor: 3, warning: 4, info: 2 },
  { hour: "14:00", critical: 1, major: 2, minor: 2, warning: 3, info: 3 },
  { hour: "16:00", critical: 1, major: 2, minor: 1, warning: 2, info: 2 },
  { hour: "18:00", critical: 0, major: 1, minor: 1, warning: 2, info: 3 },
  { hour: "20:00", critical: 0, major: 1, minor: 1, warning: 1, info: 2 },
  { hour: "22:00", critical: 0, major: 0, minor: 0, warning: 1, info: 2 },
  { hour: "Now", critical: 1, major: 2, minor: 1, warning: 2, info: 1 },
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
    major: Math.round(d.major * scale),
  }));

  const W = 520, H = 55, PX = 16, PY = 4;
  const plotW = W - PX * 2, plotH = H - PY - 10;
  const maxVal = Math.max(...data.map((d) => d.critical + d.major + d.minor + d.warning + d.info), 1);
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

  const totalLine = (d: typeof data[0]) => d.critical + d.major + d.minor + d.warning + d.info;
  const critMajorLine = (d: typeof data[0]) => d.critical + d.major;
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
      <div className="mb-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300">Alert Volume — 24h</h3>
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
          <path d={makeArea(critMajorLine)} fill="url(#grad-crithigh)" />
          <path d={makeArea(critLine)} fill="url(#grad-crit)" />
          {/* Lines */}
          <path d={makePath(totalLine)} fill="none" stroke={isDark ? "rgba(96,165,250,0.4)" : "rgba(96,165,250,0.5)"} strokeWidth="0.2" />
          <path d={makePath(critMajorLine)} fill="none" stroke={isDark ? "rgba(249,115,22,0.6)" : "rgba(249,115,22,0.7)"} strokeWidth="0.2" />
          <path d={makePath(critLine)} fill="none" stroke={isDark ? "rgba(239,68,68,0.8)" : "rgba(239,68,68,0.9)"} strokeWidth="0.25" />
          {/* Hover crosshair */}
          {hoverIdx !== null && (
            <>
              <line x1={hx} y1={PY} x2={hx} y2={PY + plotH} stroke={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"} strokeWidth="0.5" strokeDasharray="2 1.5" />
              {[
                { fn: totalLine, color: "rgb(96,165,250)" },
                { fn: critMajorLine, color: "rgb(249,115,22)" },
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
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Major</span><span className="font-bold tabular-nums">{hd.major}</span></div>
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />Minor</span><span className="font-bold tabular-nums">{hd.minor}</span></div>
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" />Warning</span><span className="font-bold tabular-nums">{hd.warning}</span></div>
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Info</span><span className="font-bold tabular-nums">{hd.info}</span></div>
            </div>
            <div className={`mt-1.5 pt-1.5 text-[10px] font-semibold tabular-nums ${isDark ? "border-t border-white/10 text-slate-400" : "border-t border-slate-200 text-slate-500"}`}>
              Total: {hd.critical + hd.major + hd.minor + hd.warning + hd.info}
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
          { label: "Total Incidents", value: String(incidents.length), icon: Activity, accent: "" },
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
        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">Needs Attention</h3>
          {incidents.filter((inc) => inc.status !== "Contained").length === 0 ? (
            <div className="card-surface rounded-none flex flex-col items-center justify-center py-20 px-8">
              <CheckCircle className="w-10 h-10 text-emerald-500 mb-4" />
              <h4 className="text-lg font-bold text-emerald-600 mb-2">All Clear</h4>
              <p className="text-sm text-slate-400 text-center">No incidents require attention. All threats have been contained.</p>
            </div>
          ) : (
          <div className="overflow-y-auto space-y-6 pr-2" style={{ maxHeight: 920 }}>
            {incidents.filter((inc) => inc.status !== "Contained").map((inc) => {
              const isOpen = true;
              return (
                <button
                  key={inc.id}
                  onClick={isOpen ? () => onSelect(inc.id) : undefined}
                  className={`w-full text-left rounded-none transition-colors group cursor-pointer relative ${isOpen ? "card-surface" : "card-surface opacity-70"}`} style={{ padding: 30 }}
                >
                  {isOpen && <span className="absolute right-8 top-1/2 -translate-y-1/2 text-xs text-blue-400 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Investigate &rarr;</span>}
                  <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                    <span className="text-xs font-mono font-normal text-slate-300">#{inc.id}</span>
                    <SeverityBadge severity={inc.severity} />
                    <StatusDot status={inc.status} />
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
            })
          }</div>
          )}
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">Overview</h3>
          <RiskTrendChart incidents={incidents} isDark={isDark} />
          {/* ATT&CK heatmap mini */}
          <div className="card-surface  rounded-none p-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-3">ATT&CK Activity This Week</h3>
            <div className="grid grid-cols-7 gap-1">
              {ATTACK_TACTICS.map((t) => {
                const critical = ["Initial Access", "Credential Access"].includes(t);
                const major = ["Execution"].includes(t);
                const minor = ["Lateral Movement", "Collection"].includes(t);
                const warning = ["Persistence", "Defense Evasion"].includes(t);
                return (
                  <div key={t} className="group relative">
                    <div className={`aspect-square rounded-none heatmap-cell ${critical ? "heatmap-critical" : major ? "heatmap-major" : minor ? "heatmap-minor" : warning ? "heatmap-warning" : "heatmap-info"}`} />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 heatmap-tooltip text-sm font-normal rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">{t}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-3 mt-4 text-sm font-normal text-slate-200 flex-wrap">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-none heatmap-critical" />Critical</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-none heatmap-major" />Major</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-none heatmap-minor" />Minor</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-none heatmap-warning" />Warning</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-none heatmap-info" />Info</span>
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

function Screen2Content({ incidentId }: { incidentId: number }) {
  const detail = getIncidentDetail(incidentId);
  const riskColor = detail.riskScore >= 70 ? "text-red-400" : detail.riskScore >= 50 ? "text-amber-400" : detail.riskScore >= 30 ? "text-yellow-400" : "text-emerald-400";
  const barColor = detail.riskScore >= 70 ? "from-red-500 to-red-400" : detail.riskScore >= 50 ? "from-amber-500 to-amber-400" : detail.riskScore >= 30 ? "from-yellow-500 to-yellow-400" : "from-emerald-500 to-emerald-400";

  return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card-surface rounded-none p-6">
            {detail.timeline.map((step, i) => {
              const Icon = step.icon;
              const dotColors = ["bg-red-300", "bg-red-400", "bg-red-500", "bg-red-500", "bg-red-600", "bg-red-700"];
              const tacticColor = dotColors[i] || "bg-red-500";
              return (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className={`w-3.5 h-3.5 rounded-full ${tacticColor} shrink-0 mt-2`} />
                    {i < detail.timeline.length - 1 && <div className="w-0.5 flex-1 timeline-line my-1" />}
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
                      <span>Confidence: <span className={step.confidence === "High" ? "text-emerald-500" : step.confidence === "Medium" ? "text-amber-500" : "text-slate-400"}>{step.confidence}</span></span>
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
            <p className="text-sm text-slate-400 leading-relaxed font-normal">{detail.aiSummary}</p>
          </div>
          <div className="card-surface rounded-none p-5">
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-400 block mb-2">Risk Score</span>
            <div className="flex items-end gap-2">
              <span className={`text-4xl font-semibold ${riskColor}`}>{detail.riskScore}</span><span className="text-base font-normal text-slate-400 pb-1">/100</span>
            </div>
            <div className="w-full h-2 bg-white/[0.06] rounded-full mt-3 overflow-hidden"><div className={`h-full bg-gradient-to-r ${barColor} rounded-full`} style={{ width: `${detail.riskScore}%` }} /></div>
          </div>
          {detail.assets.length > 0 && (
            <div className="card-surface rounded-none p-5">
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3 block">Affected Assets</span>
              {detail.assets.map((a) => (
                <div key={a.name} className="py-5 border-b border-white/[0.04] last:border-0">
                  <p className="text-base font-semibold">{a.name}</p><p className="text-sm font-normal text-slate-400 mt-1">{a.type}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  );
}

/* ================================================================== */
/*  SCREEN 3 — ATT&CK Map (content only)                              */
/* ================================================================== */

function Screen3Content({ incident }: { incident: Incident }) {
  const detail = getIncidentDetail(incident.id);
  const phases = ATTACK_TACTICS.map((t, i) => {
    const techs = detail.techniques[t];
    const isActive = !!techs;
    const isPredicted = detail.predicted.some((p) => p.tactic === t);
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
          {detail.predicted.length === 0 ? (
            <div className="col-span-3 text-sm text-slate-400 py-4">No predicted next steps for this incident type.</div>
          ) : detail.predicted.map((p) => (
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

function Screen4({ onBack, onComplete, incidentId }: { onBack: () => void; onComplete: () => void; incidentId: number }) {
  const detail = getIncidentDetail(incidentId);
  const actions = detail.responseActions;
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
      if (idx < actions.length) {
        timerRef.current = setTimeout(tick, 1200);
      } else {
        timerRef.current = setTimeout(() => setAllDone(true), 800);
      }
    };
    timerRef.current = setTimeout(tick, 800);
  }, [actions.length]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const progress = executing ? Math.min(((completedIdx + 1) / actions.length) * 100, 100) : 0;

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
          <p className="text-xs text-emerald-600 font-bold">All response actions completed successfully &mdash; {actions.length}/{actions.length} executed in {actions.length * 3 + 1} seconds</p>
        </div>
      )}

      <div className="card-surface  rounded-none response-divider">
        {actions.map((action, i) => {
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
          <div><h2 className="text-base font-semibold text-white">Incident #{incident.id} &mdash; Contained</h2><p className="text-sm text-emerald-600 font-bold">All response actions completed &middot; Ready to close</p></div>
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


function TopBar({ onReset, isDark, onToggleTheme, onNav, screen }: { onReset: () => void; isDark: boolean; onToggleTheme: () => void; onNav: (s: Screen) => void; screen: Screen }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
    <>
    <div className="flex items-center justify-between px-5 py-3 topbar-surface">
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={() => setMobileNavOpen(true)} className="cursor-pointer" aria-label="Open navigation">
          <Menu className={`w-5 h-5 ${isDark ? "text-slate-300" : "text-slate-600"}`} />
        </button>
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
    {/* Mobile nav overlay — mirrors desktop Sidebar */}
    {mobileNavOpen && (
      <div className={`md:hidden fixed inset-0 z-[999] ${isDark ? "bg-[#0d1221]" : "bg-white"}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b ${isDark ? 'border-white/[0.06]' : 'border-slate-200'}">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-blue-500" />
            <span className={`text-base font-semibold tracking-wide ${isDark ? "text-white" : "text-slate-900"}`}>PRISM</span>
          </div>
          <button onClick={() => setMobileNavOpen(false)} className="cursor-pointer" aria-label="Close menu">
            <X className={`w-6 h-6 ${isDark ? "text-slate-300" : "text-slate-600"}`} />
          </button>
        </div>
        <nav className="flex flex-col py-4 px-3 gap-1">
          {([
            { icon: LayoutDashboard, label: "Dashboard", target: 1 as Screen, active: screen === 1 || screen === 6 },
            { icon: AlertTriangle, label: "Incidents", target: "incidents" as Screen, active: screen === "incidents" || (typeof screen === "number" && screen >= 2 && screen <= 5) },
            { icon: Grid3X3, label: "ATT&CK Coverage", target: "attack-coverage" as Screen, active: screen === "attack-coverage" },
            { icon: Box, label: "Assets", target: "assets" as Screen, active: screen === "assets" },
            { icon: Settings, label: "Settings", target: "settings" as Screen, active: screen === "settings" },
          ]).map((it) => (
            <button
              key={it.label}
              onClick={() => { onNav(it.target); setMobileNavOpen(false); }}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${it.active ? (isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600") : (isDark ? "text-slate-400 hover:text-white hover:bg-white/[0.03]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50")}`}
            >
              <it.icon className="w-5 h-5" />
              {it.label}
            </button>
          ))}
        </nav>
        <div className={`mx-5 my-4 pt-4 border-t ${isDark ? "border-white/[0.06]" : "border-slate-200"}`}>
          <Link href="/ai-explorations" className="flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors" onClick={() => setMobileNavOpen(false)}>
            <ArrowLeft className="w-4 h-4" /> Back to AI Explorations
          </Link>
        </div>
      </div>
    )}
    </>
  );
}

/* ================================================================== */
/*  EXTRA PAGES — Incidents, ATT&CK Coverage, Assets, Settings         */
/* ================================================================== */

function IncidentsPage({ incidents, onSelect }: { incidents: Incident[]; onSelect: (id: number) => void }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activePage, setActivePage] = useState(1);
  const [containedPage, setContainedPage] = useState(1);
  const PER_PAGE = 5;

  const active = incidents.filter((i) => i.status !== "Contained");
  const contained = incidents.filter((i) => i.status === "Contained");

  const activePages = Math.ceil(active.length / PER_PAGE);
  const containedPages = Math.ceil(contained.length / PER_PAGE);
  const pagedActive = active.slice((activePage - 1) * PER_PAGE, activePage * PER_PAGE);
  const pagedContained = contained.slice((containedPage - 1) * PER_PAGE, containedPage * PER_PAGE);

  const cols = "grid-cols-[80px_1.5fr_0.8fr_0.8fr_0.8fr_140px]";

  const Pagination = ({ current, total, onChange }: { current: number; total: number; onChange: (p: number) => void }) => {
    if (total <= 1) return null;
    return (
      <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.06]">
        <span className="text-xs text-slate-400 font-semibold">Page {current} of {total}</span>
        <div className="flex items-center gap-2">
          <button disabled={current === 1} onClick={() => onChange(current - 1)} className="px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed card-surface summary-action-btn">Previous</button>
          {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => onChange(p)} className={`w-8 h-8 rounded-full text-xs font-bold transition-colors cursor-pointer ${p === current ? "bg-blue-500 force-white" : "card-surface summary-action-btn"}`}>{p}</button>
          ))}
          <button disabled={current === total} onClick={() => onChange(current + 1)} className="px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed card-surface summary-action-btn">Next</button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Active Incidents */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Active Incidents</h2>
          <span className="text-sm text-slate-400 font-semibold">{active.length} incident{active.length !== 1 ? "s" : ""}</span>
        </div>
        <div className="card-surface rounded-none overflow-hidden !border-0">
          <div className={`grid ${cols} gap-3 px-6 py-4 border-b border-white/[0.06] text-sm font-semibold uppercase tracking-widest text-slate-400`}>
            <span>ID</span><span>Title</span><span>Severity</span><span>Status</span><span>Time</span><span>Action</span>
          </div>
          {pagedActive.map((inc) => (
            <button key={inc.id} onClick={() => onSelect(inc.id)} className={`w-full grid ${cols} gap-3 px-6 py-5 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors text-left items-center cursor-pointer`}>
              <span className="text-sm font-mono font-normal text-slate-300">#{inc.id}</span>
              <span className="text-base font-normal truncate">{inc.title}</span>
              <div><SeverityBadge severity={inc.severity} /></div>
              <div><StatusDot status={inc.status} /></div>
              <span className="text-sm font-normal text-slate-400">{inc.time}</span>
              <span className="text-sm font-semibold text-blue-500">Investigate</span>
            </button>
          ))}
          <Pagination current={activePage} total={activePages} onChange={setActivePage} />
        </div>
      </div>

      {/* Contained Incidents */}
      {contained.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Contained</h2>
            <span className="text-sm text-slate-400 font-semibold">{contained.length} incident{contained.length !== 1 ? "s" : ""}</span>
          </div>
          <div className="card-surface rounded-none overflow-hidden !border-0">
            <div className={`grid ${cols} gap-3 px-6 py-4 border-b border-white/[0.06] text-sm font-semibold uppercase tracking-widest text-slate-400`}>
              <span>ID</span><span>Title</span><span>Severity</span><span>Status</span><span>Time</span><span>Action</span>
            </div>
            {pagedContained.map((inc) => (
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
                    <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans text-slate-400 mb-5">{INCIDENT_SUMMARIES[inc.id]}</pre>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 card-surface summary-action-btn rounded-full text-xs font-bold transition-colors cursor-pointer"><Copy className="w-3.5 h-3.5" />Copy Summary</button>
                      <button className="flex items-center gap-2 px-4 py-2 card-surface summary-action-btn rounded-full text-xs font-bold transition-colors cursor-pointer"><Send className="w-3.5 h-3.5" />Send to Slack</button>
                      <button className="flex items-center gap-2 px-4 py-2 card-surface summary-action-btn rounded-full text-xs font-bold transition-colors cursor-pointer"><ArrowUpRight className="w-3.5 h-3.5" />Escalate</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Pagination current={containedPage} total={containedPages} onChange={setContainedPage} />
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
    { name: "mail-gw-01", type: "Server", os: "Linux", user: "system", status: "Active", risk: "Minor" },
    { name: "DESKTOP-MR1492", type: "Workstation", os: "Windows 11", user: "m.rodriguez", status: "Active", risk: "Major" },
    { name: "staging-db-01", type: "Server", os: "Linux", user: "svc-deploy", status: "Monitoring", risk: "Major" },
    { name: "vpn-gw-east", type: "Network", os: "Palo Alto", user: "system", status: "Active", risk: "Warning" },
    { name: "DESKTOP-KP3351", type: "Workstation", os: "macOS 14", user: "k.patel", status: "Active", risk: "Info" },
    { name: "dc-primary-01", type: "Server", os: "Windows Server 2022", user: "system", status: "Active", risk: "Minor" },
  ];
  const riskColors: Record<string, string> = { Critical: "text-red-400", Major: "text-orange-400", Minor: "text-yellow-400", Warning: "text-blue-400", Info: "text-slate-400" };
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
            { label: "Critical & Major Alerts", enabled: true },
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
  const [toast, setToast] = useState<string | null>(null);

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
    setToast(`Incident #${activeIncidentId} contained successfully`);
    setTimeout(() => setToast(null), 4000);
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
        .overflow-y-auto::-webkit-scrollbar { width: 4px; }
        .overflow-y-auto::-webkit-scrollbar-track { background: transparent; }
        [data-theme="dark"] .overflow-y-auto::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
        [data-theme="dark"] .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
        [data-theme="light"] .overflow-y-auto::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 4px; }
        [data-theme="light"] .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }

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
        [data-theme="dark"] .heatmap-critical { background: rgba(239,68,68,0.4); }
        [data-theme="dark"] .heatmap-major { background: rgba(249,115,22,0.3); }
        [data-theme="dark"] .heatmap-minor { background: rgba(234,179,8,0.2); }
        [data-theme="dark"] .heatmap-warning { background: rgba(96,165,250,0.15); }
        [data-theme="dark"] .heatmap-info { background: rgba(255,255,255,0.04); }
        [data-theme="light"] .heatmap-critical { background: #fecaca; }
        [data-theme="light"] .heatmap-major { background: #fed7aa; }
        [data-theme="light"] .heatmap-minor { background: #fef3c7; }
        [data-theme="light"] .heatmap-warning { background: #dbeafe; }
        [data-theme="light"] .heatmap-info { background: #f1f5f9; }
      `}</style>
      <TopBar onReset={handleReset} isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} onNav={handleNav} screen={screen} />
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
              {screen === 2 && <Screen2Content incidentId={activeIncidentId} />}
              {screen === 3 && <Screen3Content incident={activeIncident} />}
              {screen === 4 && <Screen4 onBack={() => setScreen(2)} onComplete={goScreen5} incidentId={activeIncidentId} />}
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
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-[100] animate-fadeIn">
          <div className={`flex items-center gap-3 px-5 py-4 rounded-lg shadow-2xl ${isDark ? "bg-[#1a2236] border border-emerald-500/30" : "bg-white border border-emerald-500/30 shadow-lg"}`}>
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="text-sm font-bold text-emerald-500">{toast}</span>
            <button onClick={() => setToast(null)} className="ml-2 cursor-pointer"><X className="w-4 h-4 text-slate-400 hover:text-slate-200" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import OrientationModal from "./OrientationModal";

export type StepStatus = "not-started" | "in-progress" | "done" | "blocked";

export type OrientationStep = {
  id: string;
  title: string;
  description: string;
  required: boolean;
  estMinutes: number;
  dueDate?: string;
  status: StepStatus;
  tips?: string[];
  criteria?: string;
};

function formatDate(dateISO: string) {
  const d = new Date(dateISO + "T00:00:00");
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function daysUntil(dateISO: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(dateISO + "T00:00:00");
  const diff = d.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function statusUI(status: StepStatus) {
  switch (status) {
    case "done":
      return { icon: "✓", label: "Done", pill: "bg-white text-[var(--cal-text)] border-[var(--cal-border)]" };
    case "in-progress":
      return {
        icon: "↻",
        label: "In progress",
        pill: "bg-[var(--cal-orange-soft)] text-[var(--cal-text)] border-[var(--cal-border)]",
      };
    case "blocked":
      return { icon: "!", label: "Needs action", pill: "bg-white text-[var(--cal-text)] border-[var(--cal-border)]" };
    default:
      return { icon: "○", label: "Not started", pill: "bg-white text-[var(--cal-muted)] border-[var(--cal-border)]" };
  }
}

function stepActionLabel(step: OrientationStep, underReviewStepIds: string[] = []) {
  if (step.status === "done") return "View";
  if (step.id === "advisor") return "Schedule";
  if (step.id === "expectations") return underReviewStepIds.includes("expectations") ? "Under review" : "Upload";
  if (step.id === "aid") return underReviewStepIds.includes("aid") ? "Under review" : "Upload";
  if (step.id === "register") return "Register";
  return "Continue";
}

function pickNextStep(steps: OrientationStep[]) {
  const required = steps.filter((s) => s.required);
  const advisorLike = required.find((s) => s.id === "advisor" && s.status !== "done");
  if (advisorLike) return advisorLike;
  const inProgress = required.find((s) => s.status === "in-progress");
  if (inProgress) return inProgress;
  const notStarted = required.filter((s) => s.status === "not-started");
  const dueSorted = notStarted
    .filter((s) => !!s.dueDate)
    .sort((a, b) => (a.dueDate! < b.dueDate! ? -1 : 1));
  return dueSorted[0] ?? notStarted[0] ?? steps.find((s) => s.status !== "done") ?? steps[0];
}

export const ORIENTATION_STORAGE_KEY = "so:orientation:demo:v1";

const DEFAULT_STEPS: OrientationStep[] = [
  {
    id: "profile",
    title: "Verify Student Profile",
    description: "Confirm your contact info and preferred name.",
    required: true,
    estMinutes: 3,
    status: "done",
    tips: ["Make sure your phone number is current for important updates."],
    criteria: "Your profile details are saved and confirmed.",
  },
  {
    id: "advisor",
    title: "Schedule Advisor Meeting",
    description: "Book a time with your advisor to review your program plan and course options.",
    required: true,
    estMinutes: 5,
    dueDate: "2026-08-15",
    status: "in-progress",
    tips: ["Choose a time that works for you. Slots refresh daily."],
    criteria: "A meeting is scheduled or an advisor confirms an alternative plan.",
  },
  {
    id: "expectations",
    title: "Academic Expectations (Micro-module)",
    description: "Learn weekly time expectations, pacing, and where to get help.",
    required: true,
    estMinutes: 8,
    dueDate: "2026-08-12",
    status: "not-started",
    tips: ["You can pause and return anytime."],
    criteria: "You finish the short module and confirm you understand the basics.",
  },
  {
    id: "aid",
    title: "Financial Aid Confirmation",
    description: "Review your aid status and confirm next steps if anything is missing.",
    required: true,
    estMinutes: 5,
    dueDate: "2026-08-10",
    status: "not-started",
    tips: ["If you see missing documents, submit them before the deadline."],
    criteria: "Aid status is confirmed or required documents are submitted.",
  },
  {
    id: "register",
    title: "Register for Classes",
    description: "Choose your classes and finalize your schedule.",
    required: true,
    estMinutes: 12,
    dueDate: "2026-08-18",
    status: "not-started",
    tips: ["If you're unsure, schedule your advisor meeting first."],
    criteria: "Your first-term schedule is confirmed in the portal.",
  },
  {
    id: "resources",
    title: "Explore Support Resources (Optional)",
    description: "Quick links to tutoring, tech help, and accessibility services.",
    required: false,
    estMinutes: 6,
    status: "not-started",
    tips: ["You can revisit resources any time during your term."],
    criteria: "Optional: You browse resources and save anything helpful.",
  },
];

const CALENDLY_URL = "https://calendly.com/";

export default function OrientationStudentView() {
  useEffect(() => {
    const styleId = "calbright-orientation-theme";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      :root{
        --cal-bg: #FFF8EB;
        --cal-surface: #FFFFFF;
        --cal-surface-2: #F7F0E4;
        --cal-border: #E9DDC8;
        --cal-navy: #001e5a;
        --cal-text: #243041;
        --cal-muted: #667085;
        --cal-orange: #d34508;
        --cal-orange-hover: #b53a06;
        --cal-orange-soft: #FFE3D5;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const orientation = {
    cohortName: "Fall 2026",
    title: "Orientation",
    overallDueDate: "2026-08-18",
    estTotalMinutes: 45,
  };

  const [steps, setSteps] = useState<OrientationStep[]>(DEFAULT_STEPS);
  const [underReviewStepIds, setUnderReviewStepIds] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, { name: string; dataUrl: string }>>({});

  const hasHydratedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(ORIENTATION_STORAGE_KEY);
      if (!raw) {
        hasHydratedRef.current = true;
        return;
      }
      const parsed = JSON.parse(raw) as {
        steps?: OrientationStep[];
        underReviewStepIds?: string[];
        uploadedFiles?: Record<string, { name: string; dataUrl: string }>;
      };
      if (Array.isArray(parsed.steps) && parsed.steps.length) setSteps(parsed.steps);
      if (Array.isArray(parsed.underReviewStepIds)) setUnderReviewStepIds(parsed.underReviewStepIds);
      if (parsed.uploadedFiles && typeof parsed.uploadedFiles === "object") setUploadedFiles(parsed.uploadedFiles);
    } catch {
      /* ignore */
    } finally {
      hasHydratedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !hasHydratedRef.current) return;
    try {
      window.localStorage.setItem(
        ORIENTATION_STORAGE_KEY,
        JSON.stringify({ updatedAt: Date.now(), steps, underReviewStepIds, uploadedFiles })
      );
    } catch {
      /* ignore */
    }
  }, [steps, underReviewStepIds, uploadedFiles]);

  const requiredSteps = useMemo(() => steps.filter((s) => s.required), [steps]);
  const optionalSteps = useMemo(() => steps.filter((s) => !s.required), [steps]);
  const completedRequired = useMemo(() => requiredSteps.filter((s) => s.status === "done").length, [requiredSteps]);
  const completionPct = useMemo(() => {
    const total = requiredSteps.length || 1;
    return Math.round((completedRequired / total) * 100);
  }, [requiredSteps.length, completedRequired]);
  const dueInDays = useMemo(() => daysUntil(orientation.overallDueDate), [orientation.overallDueDate]);
  const deadlineLabel = useMemo(() => {
    if (dueInDays >= 0) return `${dueInDays} days remaining`;
    return `Past due by ${Math.abs(dueInDays)} days`;
  }, [dueInDays]);
  const nextStep = useMemo(() => pickNextStep(steps), [steps]);

  const [openStepId, setOpenStepId] = useState<string | null>(null);
  const openStep = useMemo(() => steps.find((s) => s.id === openStepId) ?? null, [steps, openStepId]);
  const openModal = (id: string) => setOpenStepId(id);
  const closeModal = () => setOpenStepId(null);

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadStepId, setUploadStepId] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const openUploadModal = (stepId: string) => {
    setUploadStepId(stepId);
    setSelectedFile(null);
    setUploadModalOpen(true);
  };
  const closeUploadModal = () => {
    setUploadModalOpen(false);
    setUploadStepId(null);
    setSelectedFile(null);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ext = file.name.split(".").pop()?.toLowerCase();
      if (ext === "pdf" || ext === "docx") setSelectedFile(file);
    }
    e.target.value = "";
  };
  const handleUploadSubmit = () => {
    if (!uploadStepId || !selectedFile) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setUploadedFiles((prev) => ({ ...prev, [uploadStepId]: { name: selectedFile.name, dataUrl } }));
      setUnderReviewStepIds((prev) => (prev.includes(uploadStepId) ? prev : [...prev, uploadStepId]));
      closeUploadModal();
    };
    reader.readAsDataURL(selectedFile);
  };

  const startOrContinue = (id: string) => {
    setSteps((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === "not-started" ? "in-progress" : s.status } : s
      )
    );
  };

  const progressLabel = `${completedRequired} of ${requiredSteps.length} required steps complete`;

  return (
    <div className="min-h-screen bg-[var(--cal-bg)] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-2">
          <div className="text-sm text-[var(--cal-muted)]">Student Portal / Orientation</div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-[var(--cal-navy)]">
                {orientation.cohortName} {orientation.title}
              </h1>
              <p className="mt-2 max-w-2xl text-[var(--cal-muted)]">
                A simple checklist to help you get ready. Click a step to see details and what to do next.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--cal-border)] bg-[var(--cal-surface)] px-4 py-3 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--cal-muted)]">Progress</div>
              <div className="mt-1 text-sm font-semibold text-[var(--cal-text)]">{progressLabel}</div>
              <div className="mt-2 h-2 w-56 rounded bg-[var(--cal-surface-2)]">
                <div className="h-2 rounded bg-[var(--cal-orange)]" style={{ width: `${completionPct}%` }} />
              </div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3" aria-label="Orientation summary">
          <div className="rounded-2xl border border-[var(--cal-border)] bg-[var(--cal-surface)] p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--cal-muted)]">Deadline</div>
            <div className="mt-1 text-lg font-semibold text-[var(--cal-navy)]">
              {formatDate(orientation.overallDueDate)}
            </div>
            <div className="mt-2 text-sm text-[var(--cal-muted)]">{deadlineLabel}</div>
          </div>
          <div className="rounded-2xl border border-[var(--cal-border)] bg-[var(--cal-surface)] p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--cal-muted)]">
              Estimated time
            </div>
            <div className="mt-1 text-lg font-semibold text-[var(--cal-navy)]">
              {orientation.estTotalMinutes} minutes
            </div>
            <div className="mt-2 text-sm text-[var(--cal-muted)]">
              Complete it in small steps—come back anytime.
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--cal-border)] bg-[var(--cal-surface)] p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--cal-muted)]">Start here</div>
            <div className="mt-1 text-lg font-semibold text-[var(--cal-navy)]">Follow your Next Step</div>
            <div className="mt-2 text-sm text-[var(--cal-muted)]">
              We&apos;ll guide you through the required checklist.
            </div>
          </div>
        </section>

        <section
          className="rounded-2xl border border-[var(--cal-border)] bg-[var(--cal-surface)] p-6 shadow-sm"
          aria-label="Next step"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--cal-muted)]">Next step</div>
            <h2 className="mt-1 text-xl font-semibold text-[var(--cal-navy)]">{nextStep.title}</h2>
            <p className="mt-2 max-w-3xl text-sm text-[var(--cal-muted)]">{nextStep.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[var(--cal-muted)]">
              <span className="rounded-full border border-[var(--cal-border)] bg-[var(--cal-surface-2)] px-3 py-1">
                {nextStep.estMinutes} mins
              </span>
              <span className="rounded-full border border-[var(--cal-border)] bg-[var(--cal-surface-2)] px-3 py-1">
                {nextStep.required ? "Required" : "Optional"}
              </span>
              {nextStep.dueDate ? (
                <span className="rounded-full border border-[var(--cal-border)] bg-[var(--cal-surface-2)] px-3 py-1">
                  Due {formatDate(nextStep.dueDate)}
                </span>
              ) : null}
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusUI(nextStep.status).pill}`}>
                {statusUI(nextStep.status).label}
              </span>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-[var(--cal-border)] bg-[var(--cal-surface-2)] p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--cal-border)] bg-white">
                  <span className="text-[var(--cal-navy)]" aria-hidden>
                    📅
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--cal-navy)]">Schedule Advisor Meeting</div>
                  <div className="mt-1 text-sm text-[var(--cal-muted)]">
                    Pick a time that works for you. We&apos;ll help you confirm your program plan and next steps.
                  </div>
                </div>
              </div>
              <button
                onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}
                className="cursor-pointer rounded-lg bg-[var(--cal-orange)] px-5 py-2 text-sm font-semibold text-white
                transition hover:bg-[var(--cal-orange-hover)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cal-orange)] focus-visible:ring-offset-2"
              >
                Schedule
              </button>
            </div>
          </div>
        </section>

        <section
          className="rounded-2xl border border-[var(--cal-border)] bg-[var(--cal-surface)] p-6 shadow-sm"
          aria-label="To-Do List"
        >
          <div>
            <h2 className="text-xl font-semibold text-[var(--cal-navy)]">To-Do List</h2>
            <p className="mt-1 text-sm text-[var(--cal-muted)]">
              Click the button on the right side to view the details.
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {requiredSteps.map((s) => {
              const ui = statusUI(s.status);
              const overdue = s.dueDate ? daysUntil(s.dueDate) < 0 : false;
              const isDone = s.status === "done";
              return (
                <div
                  key={s.id}
                  className={`flex flex-wrap items-start justify-between gap-3 rounded-xl border p-4 ${
                    isDone ? "border-[#E8E8E8] bg-[#F5F5F5]" : "border-[#DDDDDD] bg-white"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm ${
                          isDone
                            ? "bg-[#E8E8E8] text-[var(--cal-muted)]"
                            : "bg-[var(--cal-surface-2)] text-[var(--cal-text)]"
                        }`}
                      >
                        {ui.icon}
                      </span>
                      <h3
                        className={`text-base font-semibold ${isDone ? "text-[var(--cal-muted)]" : "text-[var(--cal-text)]"}`}
                      >
                        {s.title}
                      </h3>
                      <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${ui.pill}`}>
                        {ui.label}
                      </span>
                      {s.dueDate ? (
                        <span className={`text-xs ${overdue ? "text-[#8A1F1F]" : "text-[var(--cal-muted)]"}`}>
                          {overdue ? "Overdue" : "Due"} {formatDate(s.dueDate)}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm text-[var(--cal-muted)]">{s.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (s.id === "advisor") window.open(CALENDLY_URL, "_blank");
                      else if (
                        (s.id === "expectations" || s.id === "aid") &&
                        s.status !== "done" &&
                        !underReviewStepIds.includes(s.id)
                      )
                        openUploadModal(s.id);
                      else openModal(s.id);
                    }}
                    disabled={
                      ["expectations", "aid"].includes(s.id) &&
                      s.status !== "done" &&
                      underReviewStepIds.includes(s.id)
                    }
                    className={`shrink-0 rounded-lg px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cal-orange)] focus-visible:ring-offset-2 ${
                      isDone
                        ? "cursor-pointer border border-[#DDDDDD] bg-[#EBEBEB] text-[var(--cal-muted)] hover:bg-[#DDDDDD] hover:text-[var(--cal-text)]"
                        : ["expectations", "aid"].includes(s.id) &&
                            s.status !== "done" &&
                            underReviewStepIds.includes(s.id)
                          ? "cursor-not-allowed border border-[#DDDDDD] bg-[#EBEBEB] text-[var(--cal-muted)]"
                          : "cursor-pointer border border-[#DDDDDD] bg-white text-[var(--cal-text)] hover:bg-[#d34508] hover:text-white"
                    }`}
                  >
                    {stepActionLabel(s, underReviewStepIds)}
                  </button>
                </div>
              );
            })}
          </div>
          <details className="mt-6 rounded-xl border border-[#DDDDDD] bg-[var(--cal-surface-2)] p-4">
            <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--cal-navy)]">
              Optional steps (recommended)
              <span className="ml-2 text-[var(--cal-muted)] font-normal">— click to expand</span>
            </summary>
            <div className="mt-4 space-y-3">
              {optionalSteps.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-[#DDDDDD] bg-white p-4"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--cal-surface-2)] text-[var(--cal-text)] text-sm">
                        {statusUI(s.status).icon}
                      </span>
                      <h3 className="text-base font-semibold text-[var(--cal-text)]">{s.title}</h3>
                      <span className="rounded-full border border-[#DDDDDD] bg-white px-2 py-0.5 text-xs text-[var(--cal-muted)]">
                        Optional
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--cal-muted)]">{s.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal(s.id)}
                    className="shrink-0 cursor-pointer rounded-lg border border-[#DDDDDD] bg-white px-3 py-2 text-sm font-semibold text-[var(--cal-text)] transition hover:bg-[#d34508] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cal-orange)] focus-visible:ring-offset-2"
                  >
                    {stepActionLabel(s, underReviewStepIds)}
                  </button>
                </div>
              ))}
            </div>
          </details>
        </section>

        <footer className="pb-6 text-center text-xs text-[var(--cal-muted)]">
          Concept preview · Sample data may be shown for demonstration purposes.
          {(underReviewStepIds.includes("expectations") || underReviewStepIds.includes("aid")) ? (
            <span className="mt-2 block">
              <button
                type="button"
                onClick={() => {
                  setUnderReviewStepIds((prev) => prev.filter((id) => id !== "expectations" && id !== "aid"));
                  setUploadedFiles((prev) => {
                    const next = { ...prev };
                    delete next.expectations;
                    delete next.aid;
                    return next;
                  });
                }}
                className="cursor-pointer text-[var(--cal-orange)] underline hover:no-underline"
              >
                Reset uploads (for testing)
              </button>
            </span>
          ) : null}
        </footer>
      </div>

      <OrientationModal
        open={uploadModalOpen}
        title={
          uploadStepId === "expectations"
            ? "Academic Expectations (Micro-module) — Upload"
            : uploadStepId === "aid"
              ? "Financial Aid Confirmation — Upload"
              : "Upload document"
        }
        onClose={closeUploadModal}
      >
        <div className="space-y-4">
          <p className="text-sm text-[var(--cal-muted)]">
            Upload a PDF or DOCX file. Accepted formats: .pdf, .docx
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="sr-only"
            aria-label="Select PDF or DOCX file"
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer rounded-lg border border-[var(--cal-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--cal-text)] transition hover:bg-[var(--cal-surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cal-orange)] focus-visible:ring-offset-2"
            >
              Choose file
            </button>
            {selectedFile ? (
              <>
                <span
                  className="max-w-[12rem] truncate text-sm text-[var(--cal-text)]"
                  title={selectedFile.name}
                >
                  {selectedFile.name}
                </span>
                <button
                  type="button"
                  onClick={handleUploadSubmit}
                  className="cursor-pointer rounded-lg bg-[var(--cal-orange)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cal-orange)] focus-visible:ring-offset-2"
                >
                  Upload
                </button>
              </>
            ) : null}
          </div>
        </div>
      </OrientationModal>

      <OrientationModal
        open={!!openStep}
        title={openStep?.title ?? "Step"}
        subtitle={
          openStep ? `${openStep.required ? "Required" : "Optional"} · ${openStep.estMinutes} mins` : undefined
        }
        onClose={closeModal}
      >
        {openStep ? (
          <div className="space-y-5">
            {(openStep.id === "expectations" || openStep.id === "profile" || openStep.id === "aid") &&
            openStep.status === "done" ? (
              <div className="rounded-xl border border-[var(--cal-border)] bg-[var(--cal-orange-soft)] p-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg" aria-hidden>
                    ✓
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[var(--cal-navy)]">Review complete</div>
                    <p className="mt-1 text-sm text-[var(--cal-text)]">
                      Your submission has been reviewed and approved. No further action needed.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-[var(--cal-muted)]">
                {openStep.dueDate ? (
                  <>
                    Due <span className="font-semibold text-[var(--cal-text)]">{formatDate(openStep.dueDate)}</span>
                  </>
                ) : (
                  <>No deadline</>
                )}
              </div>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusUI(openStep.status).pill}`}>
                {statusUI(openStep.status).label}
              </span>
            </div>
            <div className="rounded-xl border border-[var(--cal-border)] bg-[var(--cal-surface-2)] p-4">
              <div className="text-sm font-semibold text-[var(--cal-navy)]">What you&apos;ll do</div>
              <p className="mt-2 text-sm text-[var(--cal-text)]">{openStep.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--cal-border)] bg-white p-4">
                <div className="text-sm font-semibold text-[var(--cal-navy)]">Tips</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-[var(--cal-text)]">
                  {(openStep.tips?.length ? openStep.tips : ["You can complete this step anytime and return later."]).map(
                    (t, idx) => (
                      <li key={idx}>{t}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="rounded-xl border border-[var(--cal-border)] bg-white p-4">
                <div className="text-sm font-semibold text-[var(--cal-navy)]">Completion</div>
                <p className="mt-2 text-sm text-[var(--cal-text)]">
                  {openStep.criteria ?? "This step is complete when the system confirms your action."}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </OrientationModal>
    </div>
  );
}

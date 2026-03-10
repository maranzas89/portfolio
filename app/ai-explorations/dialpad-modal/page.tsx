"use client";

import { useState } from "react";

export default function DialpadModalPage() {
  const [openModal, setOpenModal] = useState<null | "voicemail" | "recording">(null);

  const closeModal = () => setOpenModal(null);

  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <div className="min-h-screen bg-[#f5f6f8] flex items-center justify-center p-6">
        <div className="w-full max-w-[640px] bg-white shadow-sm border border-line rounded-2xl overflow-hidden">
          <div className="px-8 pt-8 pb-6">
            <h1 className="text-[20px] font-semibold text-center text-text">Dialpad</h1>

            <div className="mt-6 border-t border-line pt-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#f3d7a6] flex items-center justify-center text-2xl shrink-0">
                  👩🏻
                </div>
                <div>
                  <div className="text-[18px] font-semibold text-blue-900">Mariah Villalobos</div>
                  <div className="text-[15px] text-muted">(428)-298-1900</div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <button className="w-full h-10 rounded-lg border border-line bg-white text-[15px] font-semibold text-orange-600 hover:bg-muted/30 transition">
                  Call Student
                </button>
                <button className="w-full h-10 rounded-lg border border-line bg-white text-[15px] font-semibold text-orange-600 hover:bg-muted/30 transition">
                  Open Keypad
                </button>
              </div>
            </div>

            <div className="mt-7 border-t border-line pt-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[18px] font-semibold text-blue-900">Outbound</h2>
                <button className="text-[14px] text-muted hover:text-text transition">↩ Go Back</button>
              </div>

              <div className="border-t border-line">
                {[
                  ["Staff", "Juan Ruiz"],
                  ["Internal Number", ""],
                  ["External Number", "(428)-298-1900"],
                  ["Call States", "No Answer"],
                  ["Call Duration", "10s"],
                  ["Call Time", "01/05/26 10:12 AM"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[180px_1fr] items-center border-b border-line py-3 text-[14px]"
                  >
                    <div className="text-muted">{label}</div>
                    <div className="text-text font-medium">{value}</div>
                  </div>
                ))}

                <div className="grid grid-cols-[180px_1fr] items-center border-b border-line py-3 text-[14px]">
                  <div className="text-muted">Voicemail</div>
                  <div>
                    <button
                      onClick={() => setOpenModal("voicemail")}
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-[14px] font-medium text-orange-600 bg-white hover:bg-muted/30 transition"
                    >
                      Open Voicemail
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-[180px_1fr] items-center border-b border-line py-3 text-[14px]">
                  <div className="text-muted">Recording</div>
                  <div>
                    <button
                      onClick={() => setOpenModal("recording")}
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-[14px] font-medium text-blue-900 bg-white hover:bg-muted/30 transition"
                    >
                      <span aria-hidden="true">🎧</span>
                      View Recording
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-[18px] font-semibold text-blue-900 mb-3">AI Generate Summary</h3>
              <div className="border border-line bg-muted/20 p-4 rounded-xl min-h-[114px] flex flex-col justify-between gap-4">
                <p className="text-[14px] leading-6 text-muted max-w-[360px]">
                  Staff called student but there was no answer. Voicemail left requesting follow-up.
                </p>
                <div className="flex justify-end">
                  <button className="rounded-lg border border-line bg-white px-4 py-2 text-[14px] font-semibold text-orange-600 hover:bg-muted/30 transition">
                    View Transcript
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="min-w-[96px] h-10 rounded-lg bg-orange-600 text-white text-[15px] font-semibold hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {openModal === "voicemail" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
          onClick={closeModal}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
          role="button"
          tabIndex={0}
        >
          <div
            className="w-full max-w-[620px] rounded-2xl bg-white shadow-2xl border border-line overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-line">
              <div>
                <h3 className="text-[18px] font-semibold text-text">Voicemail</h3>
                <p className="text-[13px] text-muted mt-1">
                  Leave-behind details and transcript for follow-up.
                </p>
              </div>
              <button
                onClick={closeModal}
                type="button"
                className="text-muted text-xl leading-none hover:text-text"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="px-6 py-5 space-y-5">
              <div className="rounded-xl border border-line bg-muted/10 p-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[14px] font-semibold text-blue-900">Voicemail left for student</div>
                  <div className="text-[13px] text-muted mt-1">
                    Left by Juan Ruiz · Jan 05, 2026 at 10:13 AM
                  </div>
                </div>
                <span className="inline-flex rounded-full bg-orange-50 px-2.5 py-1 text-[12px] font-medium text-orange-600">
                  Outbound
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-line p-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-muted">Reason</div>
                  <div className="mt-2 text-[14px] font-medium text-text">No answer after 2 rings</div>
                </div>
                <div className="rounded-xl border border-line p-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-muted">Follow-up status</div>
                  <div className="mt-2 text-[14px] font-medium text-text">Awaiting callback</div>
                </div>
              </div>

              <div className="rounded-xl border border-line p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[14px] font-semibold text-blue-900">Transcript</div>
                  <button type="button" className="text-[13px] font-medium text-orange-600 hover:underline">
                    Copy transcript
                  </button>
                </div>
                <p className="text-[14px] leading-6 text-muted">
                  Hi Mariah, this is Juan from Calbright. I wanted to follow up regarding your enrollment steps and next deadlines. Please give us a call back when you have a moment, and we&apos;ll help you get everything squared away. Thank you.
                </p>
              </div>

              <div className="rounded-xl border border-line p-4">
                <div className="text-[14px] font-semibold text-blue-900 mb-3">Suggested next actions</div>
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="rounded-lg border border-line bg-white px-3 py-2 text-[13px] font-medium text-text hover:bg-muted/30">
                    Send follow-up email
                  </button>
                  <button type="button" className="rounded-lg border border-line bg-white px-3 py-2 text-[13px] font-medium text-text hover:bg-muted/30">
                    Schedule callback
                  </button>
                  <button type="button" className="rounded-lg border border-line bg-white px-3 py-2 text-[13px] font-medium text-text hover:bg-muted/30">
                    Add note to CRM
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-line bg-muted/5">
              <button
                onClick={closeModal}
                type="button"
                className="h-10 rounded-lg border border-line px-4 text-[14px] font-medium text-text hover:bg-muted/30"
              >
                Close
              </button>
              <button
                type="button"
                className="h-10 rounded-lg bg-orange-600 px-4 text-[14px] font-semibold text-white hover:opacity-90"
              >
                Mark as reviewed
              </button>
            </div>
          </div>
        </div>
      )}

      {openModal === "recording" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
          onClick={closeModal}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
          role="button"
          tabIndex={0}
        >
          <div
            className="w-full max-w-[620px] rounded-2xl bg-white shadow-2xl border border-line overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-line">
              <div>
                <h3 className="text-[18px] font-semibold text-text">Call Recording</h3>
                <p className="text-[13px] text-muted mt-1">
                  Inbound main-line call recording and call context.
                </p>
              </div>
              <button
                onClick={closeModal}
                type="button"
                className="text-muted text-xl leading-none hover:text-text"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="px-6 py-5 space-y-5">
              <div className="rounded-xl border border-line bg-muted/10 p-4">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-[14px] font-semibold text-blue-900">Inbound call to main number</div>
                    <div className="text-[13px] text-muted mt-1">
                      Student: Unknown caller · Jan 05, 2026 at 11:02 AM
                    </div>
                  </div>
                  <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[12px] font-medium text-blue-900">
                    Recorded
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-line p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[14px] font-semibold text-blue-900">Playback</div>
                  <div className="text-[13px] text-muted">02:34 total</div>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm">
                    ▶
                  </button>
                  <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-[38%] bg-orange-600 rounded-full" />
                  </div>
                  <div className="text-[12px] text-muted">00:58</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-line p-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-muted">Source</div>
                  <div className="mt-2 text-[14px] font-medium text-text">Main line</div>
                </div>
                <div className="rounded-xl border border-line p-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-muted">Disposition</div>
                  <div className="mt-2 text-[14px] font-medium text-text">Transferred to staff</div>
                </div>
                <div className="rounded-xl border border-line p-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-muted">Summary</div>
                  <div className="mt-2 text-[14px] font-medium text-text">Aid question</div>
                </div>
              </div>

              <div className="rounded-xl border border-line p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[14px] font-semibold text-blue-900">AI summary</div>
                  <button type="button" className="text-[13px] font-medium text-orange-600 hover:underline">
                    View transcript
                  </button>
                </div>
                <p className="text-[14px] leading-6 text-muted">
                  Caller asked about financial aid paperwork and next enrollment steps. The call was transferred to a staff member for follow-up and reference.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-line bg-muted/5">
              <button
                onClick={closeModal}
                type="button"
                className="h-10 rounded-lg border border-line px-4 text-[14px] font-medium text-text hover:bg-muted/30"
              >
                Close
              </button>
              <button
                type="button"
                className="h-10 rounded-lg bg-orange-600 px-4 text-[14px] font-semibold text-white hover:opacity-90"
              >
                Save note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

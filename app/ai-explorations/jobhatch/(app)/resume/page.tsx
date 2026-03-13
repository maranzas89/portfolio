"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import { PROFILE, EDUCATION, WORK_EXPERIENCE, SKILLS } from "../../profile-data";
import { useTokensContext } from "../tokens-context";
import {
  ChevronDown,
  Copy,
  X,
  CircleCheckBig,
} from "lucide-react";

export default function ResumePage() {
  const router = useRouter();
  const [showOptimizeModal, setShowOptimizeModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { tokens, spendTokens } = useTokensContext();
  const [showToast, setShowToast] = useState(false);
  const [coverLetterGenerated, setCoverLetterGenerated] = useState(false);
  const [showInsufficientTokens, setShowInsufficientTokens] = useState(false);
  const [showAIBuilderModal, setShowAIBuilderModal] = useState(false);
  const [aiBuilderInput, setAiBuilderInput] = useState("");
  const [aiBuilderSource, setAiBuilderSource] = useState<"paste" | "uploaded">("paste");

  function handleDownloadPDF() {
    const pdf = new jsPDF("p", "mm", "a4");
    const w = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const maxW = w - margin * 2;
    let y = 20;

    // Name
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text(PROFILE.name, w / 2, y, { align: "center" });
    y += 7;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(136, 136, 136);
    pdf.text(`${PROFILE.email} | ${PROFILE.phone} | ${PROFILE.location}`, w / 2, y, { align: "center" });
    y += 10;

    function sectionHeader(title: string) {
      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin, y, w - margin, y);
      y += 5;
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10);
      pdf.setTextColor(51, 51, 51);
      pdf.text(title.toUpperCase(), margin, y);
      y += 6;
    }

    function bodyText(text: string) {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(85, 85, 85);
      const lines = pdf.splitTextToSize(text, maxW);
      pdf.text(lines, margin, y);
      y += lines.length * 4.5;
    }

    function jobHeader(title: string, dates: string) {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.setTextColor(51, 51, 51);
      pdf.text(title, margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(153, 153, 153);
      pdf.text(dates, w - margin, y, { align: "right" });
      y += 5;
    }

    function bulletPoint(text: string) {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(85, 85, 85);
      const lines = pdf.splitTextToSize(text, maxW - 6);
      pdf.text("\u2022", margin + 2, y);
      pdf.text(lines, margin + 6, y);
      y += lines.length * 4.5;
    }

    // Summary
    sectionHeader("Summary");
    bodyText(PROFILE.summary);
    y += 4;

    // Experience
    sectionHeader("Experience");
    WORK_EXPERIENCE.forEach((job, i) => {
      if (i > 0) y += 3;
      jobHeader(`${job.title} — ${job.company}`, job.period);
      job.bullets.forEach((b) => bulletPoint(b));
    });
    y += 4;

    // Education
    sectionHeader("Education");
    EDUCATION.forEach((edu) => {
      jobHeader(edu.school, edu.period);
      bodyText(edu.degree);
    });
    y += 4;

    // Skills
    sectionHeader("Skills");
    bodyText(SKILLS.join(", "));

    pdf.save("Mia_Yue_Resume.pdf");
  }

  // Suppress unused variable warnings
  void router;
  void tokens;

  return (
    <>
      {/* Success Toast */}
      {showToast && (
        <div className="absolute top-[76px] right-6 z-50 animate-[slideInRight_0.4s_ease-out]">
          <div className="flex items-center gap-3 bg-white rounded-lg shadow-lg border-l-4 border-[#e2752c] px-5 py-4">
            <CircleCheckBig className="w-6 h-6 text-[#2ebb5e] shrink-0" />
            <p className="text-sm font-semibold text-[#333]">
              We have Successfully Optimize your Resume!
            </p>
          </div>
        </div>
      )}

      {/* Content area with cream bg */}
      <div className="flex-1 min-h-0 bg-[#fdf8e8] overflow-y-auto scrollbar-hide p-[52px]" style={{ scrollbarWidth: 'none' }}>
        <div className="bg-white rounded-2xl mx-auto w-full px-8 md:px-14 py-10">
          {/* Title */}
          <h1 className="font-black text-[#333] text-[40px] tracking-[3px] mb-1">
            RESUME
          </h1>
          <p className="text-base font-semibold text-[#999] mb-6">
            Upload and manage your resume to improve job matching
          </p>

          {/* Upload CTA card */}
          <div className="bg-[#fdf8e8] rounded-xl p-8 flex items-center justify-between mb-10">
            <div>
              <p className="text-2xl font-bold text-[#333] mb-2">
                Optimize My Resume
              </p>
              <p className="text-base font-bold text-[#999] leading-relaxed mb-2">
                Click Optimize Resume button below to optimize and autocomplete your profile and improve job matching accuracy.
              </p>
              <p className="text-sm text-[#999] mb-5">
                Supported formats: .pdf, .doc, .docx, .rtf, .txt
              </p>
              <button
                onClick={() => setShowOptimizeModal(true)}
                className="bg-[#e2752c] text-white font-bold text-base px-10 py-3.5 rounded-full hover:brightness-110 transition inline-block cursor-pointer"
              >
                Optimize Resume
              </button>
            </div>
            <img
              src="/images/jobhatch/resume-mascot.png"
              alt="Resume mascot"
              className="w-[120px] h-auto ml-8 shrink-0"
            />
          </div>

          {/* AI Resume Builder Banner */}
          <div className="flex items-center gap-6 mb-8 bg-gradient-to-r from-[#2f327d] to-[#4a4db0] rounded-xl px-8 py-5">
            <img
              src="/images/jobhatch/hero-mascot.png"
              alt="AI mascot"
              className="w-[72px] h-auto shrink-0"
            />
            <div className="flex-1">
              <p className="text-base font-bold text-white mb-1">
                AI Resume Builder
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                Let our AI help you craft a professional resume tailored to your target roles.
              </p>
            </div>
            <button
              onClick={() => setShowAIBuilderModal(true)}
              className="bg-[#e2752c] text-white font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-110 transition shrink-0 cursor-pointer"
            >
              Try Now
            </button>
          </div>

          {/* Generate + Copy row */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xl font-black text-[#333]">
              Recent Updated Resume Preview
            </p>
            <div className="flex items-center gap-3">
              <button className="border border-[#e2752c] text-[#e2752c] font-bold text-sm px-8 py-2.5 rounded-full hover:bg-[#e2752c] hover:text-white transition cursor-pointer">
                Upload a New Resume
              </button>
              <button
                onClick={handleDownloadPDF}
                className="border border-[#e2752c] text-[#e2752c] font-bold text-sm px-8 py-2.5 rounded-full hover:bg-[#e2752c] hover:text-white transition cursor-pointer"
              >
                Download as PDF
              </button>
            </div>
          </div>

          {/* Resume text area */}
          <div className="border border-gray-200 rounded-xl p-8 min-h-[300px]">
            <div className="space-y-6 text-sm text-[#555] leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-[#333] mb-1">{PROFILE.name}</h3>
                <p className="text-[#888]">{PROFILE.email} | {PROFILE.phone} | {PROFILE.location}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#333] uppercase tracking-wide text-sm mb-2 border-b border-gray-200 pb-1">
                  Summary
                </h4>
                <p>{PROFILE.summary}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#333] uppercase tracking-wide text-sm mb-2 border-b border-gray-200 pb-1">
                  Experience
                </h4>
                <div className="space-y-4">
                  {WORK_EXPERIENCE.map((job, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-[#333]">{job.title} — {job.company}</p>
                        <p className="text-xs text-[#999]">{job.period}</p>
                      </div>
                      <ul className="mt-1 space-y-1 list-disc list-inside text-[#555]">
                        {job.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#333] uppercase tracking-wide text-sm mb-2 border-b border-gray-200 pb-1">
                  Education
                </h4>
                {EDUCATION.map((edu, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[#333]">{edu.school}</p>
                      <p className="text-xs text-[#999]">{edu.period}</p>
                    </div>
                    <p>{edu.degree}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-bold text-[#333] uppercase tracking-wide text-sm mb-2 border-b border-gray-200 pb-1">
                  Skills
                </h4>
                <p>{SKILLS.join(", ")}</p>
              </div>
            </div>
          </div>

          {/* My Cover Letter */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xl font-black text-[#333]">
                My Cover Letter
              </p>
              <button
                onClick={() => setCoverLetterGenerated(true)}
                className="border border-[#e2752c] text-[#e2752c] font-bold text-sm px-8 py-2.5 rounded-full hover:bg-[#e2752c] hover:text-white transition cursor-pointer"
              >
                Generate My Cover Letter
              </button>
            </div>

            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-bold text-[#999]">
                Generated Cover Letter
              </p>
              <button className="text-[#999] hover:text-[#333] transition" title="Copy to clipboard">
                <Copy className="w-4 h-4" />
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 min-h-[200px]">
              {coverLetterGenerated ? (
                <div className="text-sm text-[#555] leading-relaxed space-y-4">
                  <p>Dear [Hiring Manager&apos;s Name],</p>
                  <p>
                    I am excited to apply for the Product Designer position at [Company Name]. With a strong background in user-centered design and a passion for creating intuitive, impactful products, I am eager to contribute to your team and help deliver exceptional user experiences.
                  </p>
                  <p>
                    In my previous role at DiDi, I led the end-to-end design of [product or feature], collaborating closely with product managers and engineers to solve complex user problems. I simplified complicated inspector pages and optimized the user experience on filtering results, designed admin pages to capture network-wide device state and configuration, and created SmartEvents pages that pinpoint deviations from the intent and remediation steps. My work resulted in [measurable impact, e.g., a 20% increase in user engagement or a 30% reduction in task completion time].
                  </p>
                  <p>
                    I am particularly drawn to [Company Name] because of [specific reason related to the company&apos;s mission, products, or culture]. I believe my skills in UI/UX Design, Interaction Design, User Research, and tools like Figma and Adobe XD align well with your team&apos;s needs.
                  </p>
                  <p>
                    I hold a Master of Arts in Multimedia Option from Stanford University, which provided me with a solid foundation in [relevant skills or knowledge]. I am confident that my combination of education and hands-on experience makes me a strong fit for this role.
                  </p>
                  <p>
                    I would love the opportunity to discuss how my background and skills can contribute to the success of [Company Name]. Thank you for considering my application, and I look forward to hearing from you.
                  </p>
                  <p>
                    Warm regards,<br />
                    Mia Yue<br />
                    miayue123@gmail.com | 415-223-3528<br />
                    San Francisco, CA
                  </p>
                </div>
              ) : (
                <p className="text-sm text-[#bbb] leading-relaxed">
                  Once generated, your personalized cover letter will display here. You can review, edit, and choose to copy and paste it wherever you need.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Optimize Resume Modal */}
      {showOptimizeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowOptimizeModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-[640px] max-h-[90vh] overflow-y-auto mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowOptimizeModal(false)}
              className="absolute top-6 right-6 text-[#999] hover:text-[#333] transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="px-10 py-10 flex flex-col items-center">
              <img
                src="/images/jobhatch/hero-mascot.png"
                alt="Mascot"
                className="w-[120px] h-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-[#333] mb-2">
                Optimize My Resume
              </h2>
              <p className="text-sm text-[#999] mb-8 text-center">
                Easily optimize your resume to highlight what makes you great and get noticed by recruiters
              </p>

              <div className="w-full max-w-[420px] space-y-5">
                {/* Target Position */}
                <div>
                  <p className="text-sm font-bold text-[#333] mb-2">What is your target position?</p>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#555] appearance-none bg-white pr-10">
                      <option>Any</option>
                      <option>Product Designer</option>
                      <option>UX Designer</option>
                      <option>UI Designer</option>
                      <option>Product Manager</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
                  </div>
                </div>

                {/* Or divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 border-t border-gray-200" />
                  <span className="text-sm text-[#999]">Or</span>
                  <div className="flex-1 border-t border-gray-200" />
                </div>

                {/* Target Company */}
                <div>
                  <p className="text-sm font-bold text-[#333] mb-2">What is your target company?</p>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#555] appearance-none bg-white pr-10">
                      <option>Any</option>
                      <option>Google</option>
                      <option>Apple</option>
                      <option>Meta</option>
                      <option>Amazon</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
                  </div>
                </div>

                {/* Or divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 border-t border-gray-200" />
                  <span className="text-sm text-[#999]">Or</span>
                  <div className="flex-1 border-t border-gray-200" />
                </div>

                {/* Job Description */}
                <div>
                  <p className="text-sm font-bold text-[#333] mb-2">Enter Job Description (optional)</p>
                  <textarea
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#555] min-h-[140px] resize-none placeholder:text-[#bbb]"
                    placeholder="Tell us anything about you that can support for optimizing your resume"
                  />
                </div>

                {/* Pick recent resume */}
                <div>
                  <p className="text-sm font-bold text-[#e2752c] underline mb-2">Pick a recent uploaded resume</p>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#555] appearance-none bg-white pr-10">
                      <option>07/10/2025 - Mia_Yue_Resume.pdf</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => { setShowOptimizeModal(false); setShowConfirmModal(true); }}
                    className="bg-[#e2752c] text-white font-bold text-base px-10 py-3.5 rounded-full hover:brightness-110 transition cursor-pointer"
                  >
                    Optimize Resume with 30 tokens
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Token Spend Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={() => setShowConfirmModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-[520px] mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowConfirmModal(false)}
              className="absolute top-5 right-5 text-[#999] hover:text-[#333] transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="px-10 py-10 flex flex-col items-center">
              <img
                src="/images/jobhatch/resume-mascot.png"
                alt="Mascot"
                className="w-[100px] h-auto mb-6"
              />
              <h2 className="text-xl font-bold text-[#333] text-center leading-relaxed mb-6">
                Are you sure you want to spend 30 token<br />to optimize Resume?
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="border border-[#e2752c] text-[#e2752c] font-bold text-sm px-10 py-3 rounded-full hover:bg-[#e2752c] hover:text-white transition cursor-pointer"
                >
                  No
                </button>
                <button
                  onClick={() => {
                    if (tokens < 30) {
                      setShowConfirmModal(false);
                      setShowInsufficientTokens(true);
                      return;
                    }
                    spendTokens(30);
                    setShowConfirmModal(false);
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                  }}
                  className="bg-[#e2752c] text-white font-bold text-sm px-10 py-3 rounded-full hover:brightness-110 transition cursor-pointer"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Resume Builder Modal */}
      {showAIBuilderModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={() => setShowAIBuilderModal(false)}>
          <div
            className="bg-white rounded-2xl w-full max-w-[640px] mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAIBuilderModal(false)}
              className="absolute top-5 right-5 text-[#999] hover:text-[#333] transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="px-10 pt-10 pb-8">
              <div className="flex items-center gap-4 mb-2">
                <img src="/images/jobhatch/hero-mascot.png" alt="AI mascot" className="w-[56px] h-auto" />
                <div>
                  <h2 className="text-xl font-bold text-[#333]">AI Resume Builder</h2>
                  <p className="text-sm text-[#888] mt-1">Paste your experience or use your uploaded resume, and let AI craft a polished, role-targeted resume for you.</p>
                </div>
              </div>

              {/* Source Toggle */}
              <div className="flex gap-3 mt-6 mb-5">
                <button
                  onClick={() => setAiBuilderSource("paste")}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition cursor-pointer ${aiBuilderSource === "paste" ? "bg-[#e2752c] text-white" : "bg-[#f9fafb] text-[#555] border border-gray-200 hover:bg-gray-100"}`}
                >
                  Paste Content
                </button>
                <button
                  onClick={() => setAiBuilderSource("uploaded")}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition cursor-pointer ${aiBuilderSource === "uploaded" ? "bg-[#e2752c] text-white" : "bg-[#f9fafb] text-[#555] border border-gray-200 hover:bg-gray-100"}`}
                >
                  Use Uploaded Resume
                </button>
              </div>

              {aiBuilderSource === "paste" ? (
                <textarea
                  value={aiBuilderInput}
                  onChange={(e) => setAiBuilderInput(e.target.value)}
                  placeholder="Paste your work experience, skills, education, or any relevant content here..."
                  className="w-full h-[200px] border border-gray-200 rounded-xl p-4 text-sm text-[#333] placeholder:text-[#bbb] resize-none focus:outline-none focus:border-[#e2752c] transition"
                />
              ) : (
                <div className="w-full h-[200px] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#ecfdf5] flex items-center justify-center mb-3">
                    <CircleCheckBig className="w-6 h-6 text-[#16a34a]" />
                  </div>
                  <p className="text-sm font-semibold text-[#333]">Your uploaded resume is ready</p>
                  <p className="text-xs text-[#888] mt-1">Mia_Yue_Resume.pdf</p>
                </div>
              )}

              <button className="w-full mt-6 bg-[#e2752c] text-white font-bold text-base py-3.5 rounded-full hover:brightness-110 transition cursor-pointer">
                Generate Resume with AI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Insufficient Tokens Modal */}
      {showInsufficientTokens && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50" onClick={() => setShowInsufficientTokens(false)}>
          <div className="bg-white rounded-2xl w-full max-w-[480px] mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowInsufficientTokens(false)}
              className="absolute top-5 right-5 text-[#999] hover:text-[#333] transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="px-10 py-10 flex flex-col items-center text-center">
              <img src="/images/jobhatch/tips-mascot.png" alt="Mascot" className="w-[100px] h-auto mb-6" />
              <h2 className="text-xl font-bold text-[#333] mb-3">Not enough tokens</h2>
              <p className="text-sm text-[#888] mb-6">
                You need 30 tokens to optimize your resume but you only have <span className="font-bold text-[#e2752c]">{tokens} tokens</span>. Complete daily missions or recharge to earn more tokens.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowInsufficientTokens(false)}
                  className="border border-gray-300 text-[#555] font-bold text-sm px-8 py-3 rounded-full hover:bg-gray-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <Link
                  href="/ai-explorations/jobhatch/dashboard"
                  className="bg-[#e2752c] text-white font-bold text-sm px-8 py-3 rounded-full hover:brightness-110 transition"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

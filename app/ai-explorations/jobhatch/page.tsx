"use client";

import React, { useState } from "react";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollRevealStagger } from "@/components/ScrollReveal";
import { Mail, CheckCircle, Users, Briefcase, Target, Sparkles } from "lucide-react";
import LoginModal from "@/components/jobhatch/LoginModal";

const STEPS = [
  {
    title: "Design Personal Career Plan",
    highlight: "Personal",
    highlightColor: "text-[#f48c06]",
    description:
      "Build a tailored career roadmap based on your skills, goals, and target roles — powered by AI insights that help you focus on what matters.",
    image: "/images/jobhatch/step-career-plan.png",
    imagePosition: "left" as const,
  },
  {
    title: "Set Up Daily Goals",
    highlight: "Daily Goals",
    highlightColor: "text-[#f48c06]",
    description:
      "Break your job search into manageable daily actions — from resume updates to outreach — so progress feels consistent and achievable.",
    image: "/images/jobhatch/step-daily-goals.png",
    imagePosition: "right" as const,
  },
  {
    title: "Apply with AI & Track Jobs",
    highlight: "AI & Track",
    highlightColor: "text-[#ff9d20]",
    description:
      "Let AI match you to relevant roles, streamline applications, and keep everything organized in one place so nothing slips through the cracks.",
    image: "/images/jobhatch/step-apply-track.png",
    imagePosition: "left" as const,
    textOffset: "md:pl-[100px]",
  },
  {
    title: "Enhance Skills",
    highlight: "Skills",
    highlightColor: "text-[#f48c06]",
    description:
      "Identify skill gaps for your target roles and access curated resources to level up — turning weaknesses into strengths.",
    image: "/images/jobhatch/step-enhance-skills.png",
    imagePosition: "right" as const,
  },
  {
    title: "Find a Buddy & Mentor",
    highlight: "Buddy & Mentor",
    highlightColor: "text-[#f48c06]",
    description:
      "Connect with accountability partners and experienced mentors who can guide your search, review your materials, and keep you motivated.",
    image: "/images/jobhatch/step-buddy-mentor.png",
    imagePosition: "left" as const,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "One that automatically keeps track of everywhere that I am applying and just automatically does everything for me.",
    name: "Millon Zahino",
    role: "Behavioral Science",
  },
  {
    quote:
      "A dream job-seeking product would prioritize accurate, efficient, and supportive features that make the isolating process feel less overwhelming.",
    name: "Millon Zahino",
    role: "Behavioral Science",
  },
  {
    quote:
      "Great idea, job market now is terrible and there are tons of people who would invest in themselves for something like this!",
    name: "Millon Zahino",
    role: "Behavioral Science",
  },
];

const FEATURES = [
  {
    icon: Mail,
    title: "No more ghosting",
    description: "Talk directly with Hiring Manager",
    color: "bg-[#f88c3d]",
  },
  {
    icon: CheckCircle,
    title: "One click to apply",
    description: "No more filling out applications.",
    color: "bg-[#2ebb5e]",
  },
  {
    icon: Users,
    title: "Mock Interview",
    description: "Today at 12:00 PM",
    color: "bg-[#d8587e]",
    cta: "Join Now",
  },
];

export default function JobHatchPage() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="relative bg-white text-text min-h-screen overflow-x-hidden">
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      {/* Hero Section */}
      <section
        className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #e8f4fd 0%, #d4ecfb 40%, #fef3e2 100%)",
        }}
      >
        {/* Logo */}
        <div className="absolute top-6 md:top-8 left-6 md:left-20 flex items-end gap-3 z-10">
          <div className="bg-[#fcd038] border-2 border-[#2f327d] rounded-lg w-12 h-12 md:w-14 md:h-14 overflow-hidden flex items-center justify-center">
            <img
              src="/images/jobhatch/logo.png"
              alt="JobHatch"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <span className="hidden sm:inline font-black text-[#2f327d] text-2xl md:text-3xl tracking-[5px]">
            JOBHATCH
          </span>
        </div>

        {/* Login / Sign Up */}
        <div className="flex items-center gap-2 sm:gap-3 absolute top-6 md:top-8 right-6 md:right-20 z-10">
          <button onClick={() => setLoginOpen(true)} className="px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold text-[#333] bg-white shadow-[0px_20px_24px_0px_rgba(0,0,0,0.03)] cursor-pointer hover:bg-[#e2752c] hover:text-white transition">
            Login
          </button>
          <a href="/ai-explorations/jobhatch/signup" className="px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold text-white bg-[#e2752c] cursor-pointer hover:brightness-110 transition">
            Sign Up
          </a>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative z-10">
          <div className="flex flex-col items-center text-center mt-16 md:mt-8">
            {/* Feature Cards floating */}
            <div className="hidden lg:block absolute left-[-60px] xl:left-[-80px] top-[280px] z-20 text-left">
              <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-5 shadow-lg max-w-[340px]">
                <div className="flex items-start gap-3">
                  <div className="bg-[#f88c3d] rounded-lg p-2.5 shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#595959] text-base">
                      No more ghosting
                    </p>
                    <p className="font-semibold text-[#545567] text-sm mt-0.5">
                      Talk directly with Hiring Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute right-[-60px] xl:right-[-80px] top-[280px] z-20 text-left">
              <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-5 shadow-lg max-w-[340px]">
                <div className="flex items-start gap-3">
                  <div className="bg-[#2ebb5e] rounded-lg p-2.5 shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#595959] text-base">
                      One click to apply
                    </p>
                    <p className="font-semibold text-[#545567] text-sm mt-0.5">
                      No more filling out applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero text */}
            <h1 className="text-4xl md:text-6xl font-black text-[#2f327d] leading-tight max-w-[700px]">
              <span className="text-[#e2752c]">Find your</span> first{" "}
              <span className="text-[#e2752c]">job within</span> one week
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[#464646] max-w-[700px]">
              Enter your email to connect with{" "}
              <span className="font-bold">500+</span> startups and launch your
              <span className="font-bold"> first </span>job.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-white border-2 border-[#22a9ff] rounded-full px-8 py-4 w-[320px] md:w-[400px]">
                <span className="text-[rgba(34,169,255,0.5)] font-semibold text-lg">
                  Enter Your Email
                </span>
              </div>
              <a
                href="/ai-explorations/jobhatch/joblist-preview"
                className="bg-[#e2752c] text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0px_6px_0px_0px_#ba6900] hover:brightness-110 transition-all"
              >
                Get started
              </a>
            </div>

            {/* Mascot */}
            <div className="mt-8 md:mt-4">
              <img
                src="/images/jobhatch/hero-mascot.png"
                alt="JobHatch Mascot"
                className="w-[280px] md:w-[400px] h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        {/* Timeline background line */}
        <div className="hidden md:block absolute left-1/2 top-[200px] -translate-x-1/2 w-[1440px] h-[calc(100%-300px)] pointer-events-none opacity-60">
          <img
            src="/images/bg.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-16">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#323232]">
              How <span className="text-[#2f327d]">JobHatch</span> Works
            </h2>
            <p className="mt-4 text-lg md:text-xl text-[#696984]">
              A quick, fun look at what makes us tick — no long reads, we
              promise
            </p>
          </ScrollReveal>

          <div className="space-y-24 md:space-y-32">
            {STEPS.map((step, i) => {
              const titleParts = step.title.split(step.highlight);
              return (
                <ScrollReveal key={i} direction="up" delay={i * 50}>
                  <div
                    className={`flex flex-col ${
                      step.imagePosition === "left"
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    } items-center gap-12 md:gap-20`}
                  >
                    <div className="w-full md:w-1/2 flex justify-center">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-[300px] md:w-[400px] h-auto object-contain"
                      />
                    </div>
                    <div className={`w-full md:w-1/2 ${"textOffset" in step && step.textOffset ? step.textOffset : ""}`}>
                      <h3 className="text-3xl md:text-[42px] font-black leading-tight">
                        <span className="text-[#22a9ff]">{titleParts[0]}</span>
                        <span className={step.highlightColor}>
                          {step.highlight}
                        </span>
                        {titleParts[1] && (
                          <span className="text-[#22a9ff]">
                            {titleParts[1]}
                          </span>
                        )}
                      </h3>
                      <p className="mt-6 text-lg md:text-xl text-[#696984] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trophy / Gamification Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #fff8e8 0%, #fef3d4 50%, #fde8c0 100%)",
        }}
      >
        <div className="max-w-[600px] mx-auto px-6 flex flex-col items-center">
          <ScrollReveal direction="up">
            <img
              src="/images/jobhatch/trophy.png"
              alt="Achievement Trophy"
              className="w-[300px] md:w-[420px] h-auto mx-auto"
            />
          </ScrollReveal>
        </div>

        {/* Decorative stars */}
        <div className="absolute top-[10%] left-[10%] text-4xl opacity-70">⭐</div>
        <div className="absolute top-[15%] left-[30%] text-2xl opacity-50">⭐</div>
        <div className="absolute top-[8%] right-[25%] text-3xl opacity-60">⭐</div>
        <div className="absolute top-[20%] right-[12%] text-4xl opacity-65">⭐</div>
        <div className="absolute top-[35%] left-[8%] text-3xl opacity-55">⭐</div>
        <div className="absolute top-[30%] right-[8%] text-2xl opacity-50">⭐</div>
        <div className="absolute top-[50%] left-[5%] text-2xl opacity-40">⭐</div>
        <div className="absolute top-[45%] right-[5%] text-3xl opacity-45">⭐</div>
        <div className="absolute bottom-[30%] left-[12%] text-3xl opacity-55">⭐</div>
        <div className="absolute bottom-[25%] right-[15%] text-4xl opacity-60">⭐</div>
        <div className="absolute bottom-[15%] left-[22%] text-2xl opacity-45">⭐</div>
        <div className="absolute bottom-[10%] right-[28%] text-2xl opacity-50">⭐</div>
        <div className="absolute top-[12%] left-[50%] text-xl opacity-35">⭐</div>
        <div className="absolute bottom-[8%] left-[6%] text-xl opacity-35">⭐</div>
        <div className="absolute bottom-[12%] right-[8%] text-xl opacity-40">⭐</div>
        <div className="absolute top-[60%] left-[15%] text-xl opacity-30">⭐</div>
        <div className="absolute top-[55%] right-[18%] text-xl opacity-35">⭐</div>
        <div className="absolute bottom-[35%] right-[30%] text-lg opacity-30">⭐</div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-[#100f3d] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <ScrollReveal direction="up" className="text-center mb-16">
            <img
              src="/images/jobhatch/quote-icon.png"
              alt=""
              className="w-32 md:w-40 h-auto mx-auto mb-6"
            />
            <h2 className="text-4xl md:text-5xl font-extrabold">
              What They Said
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/80">
              Real feedback from users who want a better job search experience.
            </p>
          </ScrollReveal>

          <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 text-[#696984]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#f48c06] text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                  <div>
                    <p className="font-black text-[#363539] text-sm">
                      {t.name}
                    </p>
                    <p className="text-[#9192a6] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 bg-[#f4f8fc]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="bg-[#fcd038] rounded-xl w-20 h-20 overflow-hidden flex items-center justify-center mb-4">
              <img
                src="/images/jobhatch/logo.png"
                alt="JobHatch"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="font-black text-[#2f327d] text-3xl tracking-[5px] mb-12">
              JOBHATCH
            </span>

            <div className="flex flex-col md:flex-row gap-20 md:gap-32 mb-16 text-left">
              <div>
                <h4 className="font-bold text-[#2f327d] text-2xl mb-4">
                  Quick Link
                </h4>
                <ul className="space-y-2 text-[#2f327d]">
                  {["Home", "About", "Features", "Pricing", "Blog"].map(
                    (link) => (
                      <li key={link}>{link}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#2f327d] text-2xl mb-4">
                  Resources
                </h4>
                <ul className="space-y-2 text-[#2f327d]">
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>

            <div className="w-full max-w-[560px]">
              <h3 className="font-extrabold text-[#2f327d] text-2xl md:text-3xl mb-6">
                Learn More or Contribute?
              </h3>
              <div className="bg-white rounded-full flex items-center p-2 pl-6 shadow-sm">
                <span className="text-[#686868] text-base flex-1 text-left">
                  Enter your Email
                </span>
                <button className="bg-[#e2752c] text-white font-bold px-6 py-3 rounded-full hover:brightness-110 transition">
                  Contact Us
                </button>
              </div>
            </div>

            <p className="mt-12 text-[#2f327d] text-sm tracking-wide">
              &copy; 2025 JobHatch
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

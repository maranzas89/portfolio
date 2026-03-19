"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, Target, Lightbulb, Layers, RefreshCw, Activity } from "lucide-react";

const steps = [
  {
    id: "discover",
    title: "Discover & Empathize",
    subtitle: "01. DISCOVER",
    icon: Compass,
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/50",
    desc: "Understand users, workflows, and constraints through research, interviews, and data analysis. Build a strong foundation of empathy by combining behavioral insights with contextual observation.",
    keywords: ["User Research", "Competitor Analysis", "Data Synthesis", "Empathy Map"],
  },
  {
    id: "define",
    title: "Define & Focus",
    subtitle: "02. DEFINE",
    icon: Target,
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/50",
    desc: "Extract core problems from research findings and stakeholder input. Define clear user journeys and create actionable personas to anchor design goals precisely.",
    keywords: ["Persona Development", "Experience Map", "Core Pain Points", "Journey Mapping"],
  },
  {
    id: "ideate",
    title: "Ideate & Validate",
    subtitle: "03. IDEATE",
    icon: Lightbulb,
    color: "from-indigo-500 to-purple-500",
    shadow: "shadow-indigo-500/50",
    desc: "Expand divergent thinking to explore a wide range of possible solutions. Rapidly visualize concepts and validate information architecture through wireframing and early stakeholder review.",
    keywords: ["Divergent Thinking", "Info Architecture", "Rapid Concepting", "Interaction Flow"],
  },
  {
    id: "design",
    title: "Design & Prototype",
    subtitle: "04. DESIGN",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/50",
    desc: "Build high-fidelity prototypes with precise interactions and scalable design systems. Use modern tooling to accelerate component design and ensure consistency across complex interfaces.",
    keywords: ["Design Systems", "Component Library", "Micro-interactions", "Hi-Fi Prototyping"],
  },
  {
    id: "test",
    title: "Test & Iterate",
    subtitle: "05. TEST & ITERATE",
    icon: RefreshCw,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/50",
    desc: "Evolve the product through continuous optimization. Leverage behavioral analytics, usability testing, and cross-functional feedback to drive data-informed iterations.",
    keywords: ["Usability Testing", "Behavioral Analytics", "Data Tracking", "Experience Audit"],
  },
];

export default function PlaybookMethodology() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentStep = steps[activeStep];
  const ActiveIcon = currentStep.icon;

  return (
    <section
      id="approach"
      className="relative overflow-hidden py-12 md:py-20 font-sans selection:bg-cyan-500/30 border-t border-white/10"
      style={{
        background:
          "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.22), transparent 26%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
      }}
    >
      {/* Tech Grid - keep grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[100px] animate-pulse mix-blend-screen pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] animate-pulse mix-blend-screen pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-[1600px] w-full mx-auto px-8 md:px-16 lg:px-24 relative z-10 flex flex-col items-start">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 md:mb-12 w-full">
          <div className="text-left flex-1 min-w-0">
            <div className="font-accent inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs mb-6 backdrop-blur-md">
              <Activity size={14} className="animate-pulse" />
              <span>Product Design Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Ambiguity</span> to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Product Clarity</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Design is a rigorous process to solve complex problems.
              <br />
              <span className="md:whitespace-nowrap">My methodology turns complexity into clear product direction through research, systems thinking, and iterative validation.</span>
            </p>
          </div>
          <Link
            href="/ai-explorations#ai-design-workflow"
            className="inline-flex items-center justify-center gap-2 shrink-0 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/60 whitespace-nowrap md:-translate-y-[16px]"
          >
            View Full Methodology
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Methodology Interactive Visualizer */}
        <div
          className="w-full flex flex-col gap-10 md:gap-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Top: Tech Nodes - same width as card below, pl/pr match card padding */}
          <div className="relative flex justify-between items-center w-full pl-6 md:pl-10 pr-6 md:pr-10">
            {/* Connecting Line - left-0 right-0 spans full padding box so line extends past last node */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -z-10 -translate-y-1/2">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Nodes */}
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveStep(index);
                  }}
                  className="relative group cursor-pointer flex flex-col items-center"
                >
                  <div
                    className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 relative
                    ${isActive ? `bg-gradient-to-br ${step.color} shadow-lg ${step.shadow} scale-110` : "bg-gray-900 border border-white/10 hover:border-white/30 text-gray-500 hover:text-gray-300"}
                    ${isPast && !isActive ? "bg-gray-800 text-gray-400 border-white/20" : ""}
                  `}
                  >
                    <Icon size={isActive ? 24 : 20} className={`transition-all duration-300 ${isActive ? "text-white" : ""}`} />
                    {isActive && <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white" />}
                  </div>
                  <div
                    className={`hidden md:block font-accent absolute -bottom-8 whitespace-nowrap text-xs md:text-sm font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500"}`}
                  >
                    {step.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom: Dynamic Content Display Card */}
          <div className="relative w-full rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 md:p-10 min-h-[380px] md:min-h-[320px] flex flex-col md:flex-row gap-8 items-center overflow-hidden mt-8 md:mt-12">
            <div
              className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${currentStep.color} opacity-10 blur-[80px] transition-colors duration-700`}
            />

            {/* Left/Top Content */}
            <div className="flex-1 relative z-10 w-full flex flex-col justify-center">
              <div className="space-y-2 mb-4 md:mb-6">
                <p className="font-accent text-xs tracking-widest text-cyan-400 uppercase">{currentStep.subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{currentStep.title}</h3>
              </div>

              <div className="min-h-[100px] md:min-h-[80px] flex items-start w-full max-w-3xl">
                <p className="text-gray-400 text-lg leading-relaxed line-clamp-2">{currentStep.desc}</p>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2 md:grid-cols-none md:flex md:flex-nowrap md:overflow-x-auto md:gap-3 md:pt-4 min-h-[60px] items-start w-full pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {currentStep.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="font-accent shrink-0 whitespace-nowrap px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentStep.color}`} />
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Right/Bottom Visual Graphic */}
            <div className="w-full md:w-1/3 flex justify-center items-center relative z-10">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />

                <div
                  className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${currentStep.color} ${currentStep.shadow} flex items-center justify-center shadow-2xl`}
                >
                  <ActiveIcon size={40} className="text-white" />
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="w-full h-[2px] bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-[bounce_2s_ease-in-out_infinite]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Compass, Target, Lightbulb, Layers, RefreshCw, Activity } from "lucide-react";

const steps = [
  {
    id: "discover",
    title: "Discover & Empathize",
    subtitle: "01. DISCOVER",
    icon: Compass,
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/50",
    desc: "Leverage AI-driven analytics to process vast user data and uncover hidden patterns. Build a strong foundation of empathy by combining human insights with AI-assisted sentiment analysis.",
    keywords: ["AI Sentiment Analysis", "Competitor Analysis", "Data Mining", "Empathy Map"],
  },
  {
    id: "define",
    title: "Define & Focus",
    subtitle: "02. DEFINE",
    icon: Target,
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/50",
    desc: "Extract core problems from massive datasets using AI summarization tools. Define clear user journeys and generate dynamic, AI-backed personas to anchor design goals precisely.",
    keywords: ["AI Persona Generation", "Experience Map", "Core Pain Points", "Predictive Journeys"],
  },
  {
    id: "ideate",
    title: "Ideate & Validate",
    subtitle: "03. IDEATE",
    icon: Lightbulb,
    color: "from-indigo-500 to-purple-500",
    shadow: "shadow-indigo-500/50",
    desc: "Expand divergent thinking with Generative AI to explore infinite possible solutions. Rapidly visualize concepts and validate information architecture through AI-assisted wireframing.",
    keywords: ["GenAI Brainstorming", "Info Architecture", "Rapid Concepting", "Interaction Flow"],
  },
  {
    id: "design",
    title: "Design & Prototype",
    subtitle: "04. DESIGN",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/50",
    desc: "Inject aesthetics and precise interactions into high-fidelity prototypes. Utilize AI UI generators and smart design systems to scale components and ensure pixel-perfect consistency at speed.",
    keywords: ["AI-Powered UI", "Design System", "Micro-interactions", "Hi-Fi Prototyping"],
  },
  {
    id: "test",
    title: "Test & Iterate",
    subtitle: "05. TEST & ITERATE",
    icon: RefreshCw,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/50",
    desc: "Evolve the product through continuous optimization. Implement AI-generated heatmaps and automated feedback analysis to accelerate usability testing and drive data-informed iterations.",
    keywords: ["AI Usability Testing", "Automated Feedback", "Data Tracking", "Experience Audit"],
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
      className="relative overflow-hidden py-20 md:py-32 font-sans selection:bg-cyan-500/30 border-t border-white/10"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Background Effects (Tech Grid & Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[100px] animate-pulse mix-blend-screen pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] animate-pulse mix-blend-screen pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl w-full mx-auto px-4 md:px-8 lg:px-24 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
            <Activity size={14} className="animate-pulse" />
            <span>AI DESIGN METHODOLOGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Chaos</span> to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Order</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Design is a rigorous process to solve complex problems. Below is my core methodology, supercharged by AI tools
            to accelerate research, enhance creativity, and drive data-informed decisions.
          </p>
        </div>

        {/* Methodology Interactive Visualizer */}
        <div
          className="w-full flex flex-col gap-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Top: Tech Nodes */}
          <div className="relative flex justify-between items-center w-full max-w-4xl mx-auto px-4 sm:px-10">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -z-10 -translate-y-1/2">
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
                    className={`absolute -bottom-8 whitespace-nowrap text-xs md:text-sm font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500"}`}
                  >
                    {step.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom: Dynamic Content Display Card */}
          <div className="mt-8 relative w-full rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 md:p-12 min-h-[600px] md:min-h-[420px] flex flex-col md:flex-row gap-8 items-center overflow-hidden">
            <div
              className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${currentStep.color} opacity-10 blur-[80px] transition-colors duration-700`}
            />

            {/* Left/Top Content */}
            <div className="flex-1 relative z-10 w-full flex flex-col justify-center">
              <div className="space-y-2 mb-4 md:mb-6">
                <p className="font-mono text-xs tracking-widest text-cyan-400 uppercase">{currentStep.subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{currentStep.title}</h3>
              </div>

              <div className="min-h-[140px] md:min-h-[100px] flex items-start">
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">{currentStep.desc}</p>
              </div>

              <div className="flex flex-nowrap overflow-x-auto gap-3 pt-2 md:pt-4 min-h-[60px] items-start w-full pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {currentStep.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
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

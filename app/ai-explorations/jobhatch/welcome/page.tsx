"use client";

import React from "react";
import Link from "next/link";

export default function JobHatchWelcomePage() {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Top Nav */}
      <header className="relative px-6 md:px-20 py-6 md:py-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/ai-explorations/jobhatch"
          className="flex items-end gap-3"
        >
          <div className="bg-[#fcd038] border border-[#2f327d] rounded-lg shadow-[-4px_4px_0px_0px_#2f327d] w-12 h-12 md:w-14 md:h-14 overflow-hidden flex items-center justify-center">
            <img
              src="/images/jobhatch/logo-chick.png"
              alt="JobHatch"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <span className="font-black text-[#2f327d] text-xl md:text-2xl tracking-[4px]">
            JOBHATCH
          </span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
          {["Home", "About", "Download"].map((label, i) => (
            <Link
              key={label}
              href={i === 0 ? "/ai-explorations/jobhatch" : "#"}
              className="px-8 py-3 rounded-full text-lg tracking-wide font-medium text-[#6c6c6c] hover:bg-[#e2752c] hover:text-white transition cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* User Avatar */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
          <span className="text-[#333] font-medium">Mia Yue</span>
          <span className="text-[#999] text-xs">›</span>
        </div>
      </header>

      {/* Congratulations Section */}
      <section className="flex flex-col items-center text-center px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Chick mascot */}
        <div className="mb-4">
          <img
            src="/images/jobhatch/logo-chick.png"
            alt="JobHatch Chick"
            className="w-[160px] md:w-[200px] h-auto"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2f327d] mb-4">
          Congratulations!
        </h1>
        <p className="text-lg md:text-xl text-[#696984] max-w-[600px] mb-8 leading-relaxed">
          Thank you for joining us! Now you can enjoy your career journey at{" "}
          <span className="font-bold text-[#2f327d]">JOBHATCH!</span>
        </p>

        <Link
          href="/ai-explorations/jobhatch/onboarding"
          className="bg-[#e2752c] text-white font-bold text-lg px-12 py-4 rounded-full hover:brightness-110 transition inline-block"
        >
          Continue
        </Link>
      </section>

      {/* Mascot Banner */}
      <section
        className="relative w-full py-16 md:py-24 flex justify-center"
        style={{
          background:
            "linear-gradient(180deg, #e0f2fd 0%, #b8e6fb 50%, #a8dff8 100%)",
        }}
      >
        <img
          src="/images/jobhatch/hero-mascot.png"
          alt="JobHatch Mascots"
          className="w-[260px] md:w-[340px] h-auto"
        />
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-28 bg-[#e8f4fd]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="bg-[#fcd038] rounded-xl w-16 h-16 overflow-hidden flex items-center justify-center mb-3 shadow-[inset_-3px_-3px_3px_rgba(0,0,0,0.2),inset_3px_3px_3px_rgba(0,0,0,0.2)]">
              <img
                src="/images/jobhatch/logo-chick.png"
                alt="JobHatch"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="font-black text-[#2f327d] text-xl tracking-[4px] mb-10">
              JOBHATCH
            </span>

            <div className="flex flex-col md:flex-row gap-16 md:gap-28 mb-14 text-left">
              <div>
                <h4 className="font-bold text-[#2f327d] text-xl mb-4">
                  Quick Link
                </h4>
                <ul className="space-y-3 text-[#2f327d] text-sm">
                  {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map(
                    (link, i) => (
                      <li key={i}>{link}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#2f327d] text-xl mb-4">
                  Resources
                </h4>
                <ul className="space-y-3 text-[#2f327d] text-sm">
                  <li>Privacy Policy</li>
                  <li>Teams or<br />Conditions of Use</li>
                  <li>Cookie Advertising<br />Policy</li>
                </ul>
              </div>
              {/* Social Icons */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/jobhatch/social-1.png"
                  alt=""
                  className="w-14 h-14 object-contain"
                />
                <img
                  src="/images/jobhatch/social-2.png"
                  alt=""
                  className="w-14 h-14 object-contain"
                />
                <img
                  src="/images/jobhatch/social-3.png"
                  alt=""
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>

            <div className="w-full max-w-[500px]">
              <h3 className="font-extrabold text-[#2f327d] text-xl md:text-2xl mb-5">
                Learn More or Contribute?
              </h3>
              <div className="bg-white rounded-full flex items-center p-2 pl-6 shadow-sm">
                <span className="text-[#686868] text-sm flex-1 text-left">
                  Enter your Email
                </span>
                <button className="bg-[#e2752c] text-white font-bold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Footer Stars */}
            <div className="mt-6">
              <img
                src="/images/jobhatch/footer-stars.png"
                alt=""
                className="w-16 h-auto mx-auto"
              />
            </div>

            <p className="mt-6 text-[#2f327d] text-sm tracking-wide">
              &copy; 2025 JobHatch
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

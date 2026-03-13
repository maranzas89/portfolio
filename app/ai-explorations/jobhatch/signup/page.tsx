"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import LoginModal from "@/components/jobhatch/LoginModal";

export default function JobHatchSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [updatesChecked, setUpdatesChecked] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex items-center justify-center p-4">
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <div className="w-full max-w-[960px] min-h-[620px] bg-white rounded-2xl shadow-xl overflow-hidden flex">
        {/* Left — Form */}
        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-12">
          <h1 className="text-2xl md:text-3xl tracking-wide text-[#333]">
            Welcome to <span className="font-bold">Jobhatch</span>
          </h1>

          <div className="mt-10 space-y-5">
            {/* Email */}
            <div>
              <input
                type="email"
                defaultValue="Miayue123@gmail.com"
                readOnly
                className="w-full border-b border-[#d9d9d9] pb-3 text-base text-[#333] placeholder:text-[#aaa] outline-none focus:border-[#e2752c] transition-colors"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="password123"
                readOnly
                className="w-full border-b border-[#d9d9d9] pb-3 pr-10 text-base text-[#333] placeholder:text-[#aaa] outline-none focus:border-[#e2752c] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 text-[#bbb] hover:text-[#888] transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2.5 mt-6 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={updatesChecked}
              onChange={() => setUpdatesChecked(!updatesChecked)}
              className="w-4.5 h-4.5 accent-[#e2752c] rounded"
            />
            <span className="text-sm text-[#555] tracking-wide">
              I want updates about new job offers.
            </span>
          </label>

          {/* Sign Up Button */}
          <Link
            href="/ai-explorations/jobhatch/welcome"
            className="mt-6 w-full bg-[#e2752c] text-white text-base font-bold uppercase tracking-widest py-4 rounded-lg text-center hover:brightness-110 transition block"
          >
            Sign Up
          </Link>

          {/* Google */}
          <button className="mt-4 w-full border border-[#d9d9d9] rounded-lg py-3.5 flex items-center justify-center gap-3 text-base font-medium text-[#555] hover:bg-gray-50 transition">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.0 24.0 0 0 0 0 21.56l7.98-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            Sign up with Google
          </button>

          {/* Terms */}
          <p className="mt-6 text-xs text-[#999] text-center leading-relaxed tracking-wide">
            You agree to the Jobright Terms of Service and
            <br />
            Privacy Policy when you use this service.
          </p>

          {/* Login link */}
          <p className="mt-8 text-sm text-[#555] tracking-wide">
            Have an account?{" "}
            <button
              onClick={() => setLoginOpen(true)}
              className="font-bold text-[#333] hover:underline"
            >
              Log in now
            </button>
          </p>
        </div>

        {/* Right — Promo Panel */}
        <div className="hidden md:flex w-[420px] bg-[#b8e6fb] flex-col items-center justify-between px-10 py-10 rounded-l-3xl">
          {/* Logo */}
          <div className="flex items-center gap-2.5 self-end">
            <div className="bg-[#fcd038] border-2 border-[#2f327d] rounded-lg w-10 h-10 overflow-hidden flex items-center justify-center">
              <img
                src="/images/jobhatch/logo.png"
                alt="JobHatch"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-black text-[#2f327d] text-xl tracking-[4px]">
              JOBHATCH
            </span>
          </div>

          {/* Headline */}
          <div className="text-center -mt-4">
            <h2 className="text-3xl md:text-[34px] leading-snug tracking-wide">
              <span className="font-bold text-[#2f327d]">
                Move Quickly and
                <br />
                Confidently
              </span>{" "}
              <span className="font-normal text-[#333]">
                toward
                <br />
                your upcoming role
              </span>
            </h2>
          </div>

          {/* Mascot */}
          <div className="mt-2">
            <img
              src="/images/jobhatch/hero-mascot.png"
              alt="JobHatch Mascot"
              className="w-[220px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

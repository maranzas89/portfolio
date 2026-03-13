"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, X } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[480px] mx-4 px-10 pt-8 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#999] hover:text-[#333] transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mascot */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/jobhatch/hero-mascot.png"
            alt="JobHatch Mascot"
            className="w-[160px] h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl text-center tracking-wide text-[#333] mb-8">
          Welcome to <span className="font-bold">Jobhatch</span>
        </h2>

        {/* Form */}
        <div className="space-y-5">
          <input
            type="email"
            defaultValue="Miayue123@gmail.com"
            readOnly
            className="w-full border border-[#e0e0e0] rounded-lg px-4 py-3.5 text-base text-[#333] placeholder:text-[#aaa] outline-none focus:border-[#e2752c] transition-colors"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue="password123"
              readOnly
              className="w-full border border-[#e0e0e0] rounded-lg px-4 py-3.5 pr-12 text-base text-[#333] placeholder:text-[#aaa] outline-none focus:border-[#e2752c] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bbb] hover:text-[#888] transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <Link
          href="/ai-explorations/jobhatch/upload-resume"
          className="mt-6 w-full bg-[#e2752c] text-white text-base font-bold uppercase tracking-widest py-4 rounded-lg text-center hover:brightness-110 transition block"
        >
          Sign In
        </Link>

        {/* Google */}
        <button className="mt-4 w-full border border-[#e0e0e0] rounded-lg py-3.5 flex items-center justify-center gap-3 text-base font-medium text-[#555] hover:bg-gray-50 transition">
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

        {/* Forgot Password */}
        <button className="mt-4 w-full border border-[#e0e0e0] rounded-lg py-3.5 text-base font-medium text-[#555] hover:bg-gray-50 transition">
          Forgot Password?
        </button>

        {/* Sign up link */}
        <p className="mt-6 text-center text-sm text-[#555] tracking-wide">
          Don&apos;t have an account?{" "}
          <Link
            href="/ai-explorations/jobhatch/signup"
            className="font-bold text-[#333] hover:underline"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}

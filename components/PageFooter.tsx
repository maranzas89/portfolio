"use client";

import { ResumeLink } from "@/components/ResumeLink";

export default function PageFooter() {
  return (
    <footer className="bg-black text-white py-32 md:py-40">
      <div className="border-b border-white/20 pb-20 mb-20">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
            <div>
              <p className="font-accent text-sm font-semibold uppercase tracking-widest text-white/60 mb-8">
                Open to new opportunities
              </p>
              <a
                href="mailto:williamliu_1989@hotmail.com"
                className="text-6xl md:text-8xl lg:text-[8rem] font-medium tracking-tighter leading-none text-white hover:text-blue-400 transition-colors"
              >
                Let&apos;s Connect
              </a>
            </div>
            <div className="font-accent flex gap-10 text-sm font-semibold uppercase tracking-widest text-white/60">
              <a href="https://www.linkedin.com/in/wen-liu-157aaa82/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/maranzas89" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <ResumeLink className="hover:text-blue-400 transition-colors">
                resume
              </ResumeLink>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="font-accent flex justify-between items-center text-sm font-semibold uppercase tracking-widest text-white/60">
          <p>© 2026 Wen Liu</p>
          <p className="font-accent">Shaped with AI, craft, and product thinking</p>
        </div>
      </div>
    </footer>
  );
}

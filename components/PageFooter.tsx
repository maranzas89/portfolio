export default function PageFooter() {
  return (
    <footer className="bg-black text-white py-32 md:py-40">
      <div className="border-b border-white/20 pb-20 mb-20">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-8">
                Open to new opportunities
              </p>
              <a
                href="mailto:williamliu_1989@hotmail.com"
                className="text-6xl md:text-8xl lg:text-[8rem] font-medium tracking-tighter leading-none text-white hover:opacity-70 transition-opacity"
              >
                Let&apos;s Connect
              </a>
            </div>
            <div className="flex gap-10 text-sm font-semibold uppercase tracking-widest text-white/60">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="/WenLiu_Resume.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-center text-sm font-semibold uppercase tracking-widest text-white/60">
          <p>© 2026 Wen Liu</p>
          <p>Designed with Logic</p>
        </div>
      </div>
    </footer>
  );
}

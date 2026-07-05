import { Cpu, ChevronUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/[0.02] bg-[#030303] text-zinc-500 text-xs relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Label */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-zinc-400">
          <Cpu className="w-4 h-4 text-blue-500 animate-pulse" />
          <span>SANDESH MAKHIJA © 2026</span>
        </div>

        {/* Diagnostic Metadata Line */}
        <div className="hidden lg:block font-mono text-[9px] text-zinc-600 tracking-wider">
          SZABIST_CO_V3_SERVICE // ALL PROTOCOLS ENFORCED
        </div>

        {/* Scroll back up & socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sandesh-mak"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandesh-makhija-920685284/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:makhijasandesh2@gmail.com"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-zinc-900 hover:bg-blue-500 text-zinc-400 hover:text-zinc-950 rounded-lg border border-white/[0.04] transition-colors hover-trigger"
            data-cursor-text="UP"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

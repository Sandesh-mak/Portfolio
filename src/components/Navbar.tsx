import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail, Cpu } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "STATS", href: "#github-stats" },
];

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#030303]/75 backdrop-blur-xl border-b border-white/[0.04]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-4 font-display text-base font-semibold tracking-[0.35em] text-white hover:text-blue-400 hover-trigger transition-colors"
            data-cursor-text="TOP"
          >
            <Cpu className="w-5 h-5 text-blue-500 animate-pulse" />
            <span>S_MAKHIJA</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative text-[11px] font-medium tracking-[0.15em] text-zinc-400 hover:text-white transition-colors py-1 group hover-trigger"
              >
                {link.label}
                {/* Micro hover line slider */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call-to-Actions & Socials */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-zinc-800 pr-6">
              <a
                href="https://github.com/Sandesh-mak"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white hover-trigger transition-colors"
                data-cursor-text="GITHUB"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandesh-makhija-920685284/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white hover-trigger transition-colors"
                data-cursor-text="LINKEDIN"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:makhijasandesh2@gmail.com"
                className="text-zinc-400 hover:text-white hover-trigger transition-colors"
                data-cursor-text="EMAIL"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onContactClick}
              className="px-5 py-2.5 bg-zinc-900 hover:bg-white text-zinc-100 hover:text-zinc-950 text-xs font-semibold tracking-wider rounded-lg border border-white/[0.08] transition-all duration-300 hover-trigger shadow-lg shadow-black/40"
              data-cursor-text="HELLO"
            >
              CONTACT ME
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={onContactClick}
              className="px-3.5 py-1.5 bg-zinc-900 text-zinc-100 text-[10px] font-bold tracking-wider rounded border border-white/[0.05]"
            >
              CONTACT
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-zinc-900/40 border border-white/[0.05]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-between px-8 py-24"
          >
            {/* Nav menu links */}
            <div className="flex flex-col gap-8 mt-12">
              <span className="text-[10px] tracking-[0.25em] font-mono text-blue-500">
                NAVIGATION MENU
              </span>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-2xl font-display font-light tracking-wide text-zinc-300 hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom metadata & socials */}
            <div className="flex flex-col gap-6 border-t border-zinc-900 pt-8">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/Sandesh-mak"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900/60 rounded-full text-zinc-400 hover:text-white border border-white/[0.05]"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sandesh-makhija-920685284/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900/60 rounded-full text-zinc-400 hover:text-white border border-white/[0.05]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:makhijasandesh2@gmail.com"
                  className="p-3 bg-zinc-900/60 rounded-full text-zinc-400 hover:text-white border border-white/[0.05]"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="text-[10px] tracking-widest font-mono text-zinc-500">
                makhijasandesh2@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

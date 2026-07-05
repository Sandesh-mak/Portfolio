import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import BentoAbout from "./components/BentoAbout";
import SkillsGrid from "./components/SkillsGrid";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Timeline from "./components/Timeline";
import GithubStats from "./components/GithubStats";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Sparkles, ArrowDown, Activity, Clock } from "lucide-react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState("");

  // Update clock live for a premium telemetry effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as e.g., 11:04:35 AM GMT+5
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = () => {
    const contactSec = document.querySelector("#contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Global Preloading Sequence */}
      <Loader onComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen bg-[#030303] text-zinc-100 selection:bg-blue-500 selection:text-white overflow-x-hidden"
          >
            {/* Aurora Background Effects from Sleek Theme */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none select-none z-0"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none select-none z-0"></div>
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none select-none z-0"></div>

            {/* Noise Overlay from Sleek Theme */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

            {/* 2. Interactive Custom Fluid Cursor */}
            <CustomCursor />

            {/* 3. Luxury Sticky Header Navigation */}
            <Navbar onContactClick={handleScrollToContact} />

            {/* 4. MAIN HERO SECTION (WebGL Backdrop) */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden z-10">
              {/* Core 3D WebGL Canvas */}
              <Hero3D />



              <div className="absolute top-24 md:top-32 right-6 md:right-12 flex items-center gap-2 font-mono text-[9px] text-zinc-500 tracking-[0.15em] z-20 pointer-events-none select-none">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>LOCAL_T: <span className="text-white font-bold">{currentTime}</span></span>
              </div>

              {/* Central Text Content */}
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
                <div className="lg:col-span-8 flex flex-col items-start">
                  
                  {/* Glowing Status badge */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full mb-6"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                    <span className="text-[10px] font-mono tracking-[0.15em] text-zinc-400 uppercase">
                      BUILDING_THE_FUTURE_OF_AI
                    </span>
                  </motion.div>

                  {/* Main Display Typography */}
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] uppercase"
                  >
                    SANDESH <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 font-normal">
                      MAKHIJA
                    </span>
                  </motion.h1>

                  {/* Subtle Subheadings */}
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed mt-6 font-light"
                  >
                    I build premium digital experiences deploying high-performance cloud architectures, machine learning predictors, and state-of-the-art interactive frontends.
                  </motion.p>

                  {/* High-Contrast Interactive CTA Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.65, duration: 0.8 }}
                    className="flex flex-wrap gap-4 mt-10"
                  >
                    <button
                      onClick={handleScrollToContact}
                      className="px-6 py-3.5 bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold tracking-widest rounded-xl transition-all duration-300 hover-trigger shadow-lg shadow-blue-500/10"
                      data-cursor-text="HELLO"
                    >
                      INITIATE COOPERATION
                    </button>
                    <a
                      href="#projects"
                      className="px-6 py-3.5 bg-zinc-900/60 hover:bg-white/5 border border-white/[0.08] text-zinc-300 hover:text-white text-xs font-bold tracking-widest rounded-xl transition-all duration-300 hover-trigger"
                      data-cursor-text="RELEASES"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      EXPLORE WORK
                    </a>
                  </motion.div>
                </div>

                {/* Corner floating specs - Grid Metrics details on right */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="hidden lg:flex col-span-4 flex-col gap-8 pl-12 border-l border-white/[0.04] py-8 pointer-events-none select-none font-mono text-[10px]"
                >
                  <div>
                    <span className="block text-zinc-600 uppercase mb-1">DEGREE_MAJOR</span>
                    <span className="text-sm text-white font-bold">BS COMPUTER SCIENCE</span>
                  </div>
                  <div>
                    <span className="block text-zinc-600 uppercase mb-1">CORE_STACK</span>
                    <span className="text-xs text-blue-400 font-medium">PYTHON // REACT // ML</span>
                  </div>
                  <div>
                    <span className="block text-zinc-600 uppercase mb-1">HACKATHON</span>
                    <span className="text-xs text-cyan-400 font-medium">1st PLACE CHAMPION</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Scrolling Anchor indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[9px] text-zinc-600 tracking-widest"
              >
                <span>SCROLL TO ASCEND</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-3.5 h-3.5 text-zinc-500" />
                </motion.div>
              </motion.div>
            </section>

            {/* 5. BENTO ABOUT BIOGRAPHY SECTION */}
            <BentoAbout />

            {/* 6. SKILLS MATRIX SECTION */}
            <SkillsGrid />

            {/* 7. PROJECTS CASE STUDIES SECTION */}
            <ProjectsShowcase />

            {/* 8. EXPERIENCES TIMELINE */}
            <Timeline />

            {/* 9. GITHUB DELEMETRY HEATMAP */}
            <GithubStats />

            {/* 10. GLASSMORPHISM CONTACT INTAKE FORM */}
            <ContactForm />

            {/* 11. FOOTER CREDITS */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

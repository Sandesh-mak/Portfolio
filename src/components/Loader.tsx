import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

const loadingTexts = [
  "INITIALIZING VECTOR CORE...",
  "DETERMINING SYSTEM PARAMETERS...",
  "COMPILE SHADERS & GLOW MAPS...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "OPTIMIZING GRAPHIC SHADOWS...",
  "SANDESH MAKHIJA - VERIFIED",
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Increment progress dynamically
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600); // Wait for fadeout animation
          }, 400);
          return 100;
        }
        // Random increment for organic loading feel
        const inc = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + inc, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Cycle text indexes based on progress
    const segment = 100 / loadingTexts.length;
    const nextIndex = Math.min(
      Math.floor(progress / segment),
      loadingTexts.length - 1
    );
    if (nextIndex !== textIndex) {
      setTextIndex(nextIndex);
    }
  }, [progress, textIndex]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#030303] px-6 py-12 md:py-20 select-none"
        >
          {/* Top aesthetic detail */}
          <div className="w-full max-w-7xl flex justify-between items-center text-[10px] tracking-[0.25em] font-mono text-zinc-500">
            <span>MAKHIJA_PORTFOLIO_SYSTEM_v3.2</span>
            <span>SYSTEM: ESTABLISHED</span>
          </div>

          {/* Central loading container */}
          <div className="flex flex-col items-center">
            {/* Pulsing ring outline */}
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t border-b border-r border-zinc-800 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-t border-l border-blue-500/30 rounded-full"
              />
              <span className="font-mono text-xs text-blue-400 glow-text-blue">
                {progress}%
              </span>
            </div>

            {/* Display title */}
            <h1 className="font-display text-2xl md:text-3xl font-light tracking-[0.2em] text-white text-center mb-2 uppercase">
              SANDESH MAKHIJA
            </h1>
            <p className="font-mono text-[10px] tracking-[0.15em] text-zinc-400 h-4 uppercase">
              {loadingTexts[textIndex]}
            </p>
          </div>

          {/* Bottom loading bar */}
          <div className="w-full max-w-md flex flex-col items-center gap-4">
            <div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-zinc-800 via-blue-500 to-cyan-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="w-full flex justify-between font-mono text-[9px] text-zinc-500 tracking-wider">
              <span>CORE_TEMP: 32°C</span>
              <span>RENDER ENGINE: WEBGL_2.0</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

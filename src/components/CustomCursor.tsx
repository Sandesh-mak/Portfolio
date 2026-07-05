import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer circle
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile/touch screens
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hover-trigger") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON";

      if (isClickable) {
        setHovered(true);
        const viewText = (target.closest("[data-cursor-text]") as HTMLElement)?.getAttribute(
          "data-cursor-text"
        );
        if (viewText) {
          setCursorText(viewText);
        }
      } else {
        setHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 z-[99999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: clicked ? 0.6 : hovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/40 z-[99998] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[8px] font-mono font-bold tracking-wider text-cyan-300"
        style={{
          x: trailX,
          y: trailY,
          width: hovered ? 72 : 36,
          height: hovered ? 72 : 36,
          backgroundColor: hovered ? "rgba(6, 182, 212, 0.05)" : "rgba(0,0,0,0)",
          borderColor: hovered ? "rgba(6, 182, 212, 0.8)" : "rgba(6, 182, 212, 0.2)",
          boxShadow: hovered ? "0 0 15px rgba(6, 182, 212, 0.25)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 24,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="whitespace-nowrap uppercase tracking-[0.15em] glow-text-cyan"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

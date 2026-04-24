import { useEffect, useRef } from "react";

/**
 * Makes all lucide icons react fluidly to page scrolling.
 * - Tilts & shifts icons based on scroll direction and velocity
 * - Smoothly returns to rest when scrolling stops
 */
const ScrollFluidIcons = () => {
  const rafRef = useRef<number | null>(null);
  const lastY = useRef(0);
  const velocity = useRef(0);
  const target = useRef(0);
  const current = useRef(0);
  const idleTimer = useRef<number | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY;
    const root = document.documentElement;

    const tick = () => {
      // Ease current toward target
      current.current += (target.current - current.current) * 0.12;
      // Decay target toward 0 so motion settles
      target.current *= 0.9;

      const v = current.current; // -1 .. 1 ish (clamped below)
      const clamped = Math.max(-1, Math.min(1, v));

      root.style.setProperty("--scroll-velocity", clamped.toFixed(3));
      root.style.setProperty("--scroll-tilt", `${(clamped * 18).toFixed(2)}deg`);
      root.style.setProperty("--scroll-shift", `${(clamped * 6).toFixed(2)}px`);
      root.style.setProperty(
        "--scroll-scale",
        (1 + Math.abs(clamped) * 0.12).toFixed(3)
      );

      if (Math.abs(current.current) > 0.001 || Math.abs(target.current) > 0.001) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
        root.style.setProperty("--scroll-velocity", "0");
        root.style.setProperty("--scroll-tilt", "0deg");
        root.style.setProperty("--scroll-shift", "0px");
        root.style.setProperty("--scroll-scale", "1");
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;

      // Normalize delta to a manageable range
      velocity.current = delta / 40;
      target.current = Math.max(-1.5, Math.min(1.5, velocity.current));

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick);
      }

      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        target.current = 0;
      }, 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, []);

  return null;
};

export default ScrollFluidIcons;

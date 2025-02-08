"use client";
/**
 * useScroll.ts
 * ------------
 * A custom hook to track the current scroll position of the window.
 *
 * Implementation Details:
 * - Listens to the 'scroll' event on the window.
 * - Uses requestAnimationFrame to throttle updates for optimal performance.
 *
 * Returns:
 *   { scrollX: number, scrollY: number }
 */

import { useEffect, useState } from "react";

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

export default function useScroll(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      // Throttle scroll updates using requestAnimationFrame
      animationFrameId = window.requestAnimationFrame(() => {
        setScrollPosition({
          scrollX: window.scrollX,
          scrollY: window.scrollY,
        });
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize state with current scroll values
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return scrollPosition;
}

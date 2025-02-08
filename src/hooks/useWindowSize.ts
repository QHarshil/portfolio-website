"use client";
/**
 * useWindowSize.ts
 * ----------------
 * A custom hook that returns the current window dimensions (width and height).
 *
 * It listens to the window's 'resize' event and updates the dimensions accordingly.
 *
 * Returns:
 *   { width: number, height: number }
 */

import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    // Call handler immediately to initialize the state
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

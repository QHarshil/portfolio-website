/**
 * useMediaQuery.ts
 * ----------------
 * A custom hook to evaluate and track a CSS media query.
 *
 * This hook uses the window.matchMedia API to determine if the query matches and
 * updates the result in real time.
 *
 * @param query - The media query string (e.g., "(min-width: 768px)").
 * @returns boolean - True if the media query matches, false otherwise.
 *
 */

import { useState, useEffect } from "react";

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // For browsers that support addEventListener on MediaQueryList
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", listener);
    } else {
      mediaQueryList.addListener(listener);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}

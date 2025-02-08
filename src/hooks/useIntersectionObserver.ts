"use client";
/**
 * useIntersectionObserver.ts
 * ----------------------------
 * A custom hook that utilizes the Intersection Observer API to track the visibility
 * of a DOM element relative to the viewport.
 *
 * This hook is useful for lazy-loading, triggering animations, or implementing infinite scroll.
 *
 * @param ref - A React ref object for the element to observe.
 * @param options - Optional IntersectionObserver options (e.g., root, rootMargin, threshold).
 * @returns The latest IntersectionObserverEntry or null if not observed.
 *
 */

import { useState, useEffect } from "react";

export default function useIntersectionObserver<T extends Element>(
  ref: React.RefObject<T>,
  options: IntersectionObserverInit = {}
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [ref, options]);

  return entry;
}

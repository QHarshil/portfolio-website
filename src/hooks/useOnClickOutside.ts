"use client";
/**
 * useOnClickOutside.ts
 * ---------------------
 * A custom hook that triggers a callback when a click occurs outside the specified element.
 *
 * This hook is ideal for managing modals, dropdowns, or any component that should close when
 * the user clicks outside of it.
 *
 * @param ref - A React ref object attached to the element to monitor.
 * @param handler - The callback function to execute when a click is detected outside the element.
 *
 */

import { useEffect } from "react";

export default function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking inside the element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

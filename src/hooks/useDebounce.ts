"use client";
/**
 * useDebounce.ts
 * --------------
 * A custom hook that debounces a value, updating it only after a delay.
 *
 * Usage:
 *   const debouncedValue = useDebounce(value, delay);
 *
 * @param value - The input value to debounce.
 * @param delay - The debounce delay in milliseconds.
 *
 * Returns:
 *   The debounced value.
 */

import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

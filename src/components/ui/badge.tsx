"use client";

import React from "react";
import classNames from "classnames";

export type BadgeVariant = "primary" | "secondary" | "default";

export interface BadgeProps {
  variant?: BadgeVariant;
  /** If provided, this number will be used to select an alternating color from a preset array */
  index?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Badge Component
 * ----------------
 * A reusable badge component that displays a small piece of information,
 * such as a technology label. If an `index` prop is provided, it cycles through
 * a set of four color schemes for tech stack badges. Otherwise, it uses the
 * variant specified by the `variant` prop or falls back to "default".
 *
 * Example usage:
 * <Badge index={0}>React</Badge>
 * <Badge variant="primary">Custom</Badge>
 */
export function Badge({ variant = "default", index, className, children }: BadgeProps) {
  const baseClasses = "inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full";

  // Default variant-based classes (if index is not provided)
  const defaultVariantClasses: Record<BadgeVariant, string> = {
    primary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
    secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]",
    default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
  };

  // Preset alternating tech color classes (you can adjust these as needed)
  const techColorClasses = [
    "bg-pink-100 text-pink-900",
    "bg-yellow-100 text-yellow-900",
    "bg-teal-100 text-teal-900",
    "bg-orange-100 text-orange-900",
  ];

  // If an index is provided, use the corresponding tech color; otherwise, use the default variant.
  const variantClass =
    typeof index === "number" ? techColorClasses[index % techColorClasses.length] : defaultVariantClasses[variant];

  return (
    <span className={classNames(baseClasses, variantClass, className)}>
      {children}
    </span>
  );
}

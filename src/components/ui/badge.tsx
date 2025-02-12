"use client";

import React from "react";
import classNames from "classnames";

export type BadgeVariant = "primary" | "secondary" | "default";

export interface BadgeProps {
  /**
   * The variant to use if no index is provided.
   */
  variant?: BadgeVariant;
  /**
   * An optional index used to alternate the badge's color.
   */
  index?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Badge Component
 * ----------------
 * A reusable badge component for displaying technology labels (or other small pieces
 * of information). When an `index` prop is provided, the badge cycles through an array
 * of four distinct color schemes. Otherwise, it falls back to the variant specified by the
 * `variant` prop ("primary", "secondary", or "default").
 *
 * Example usage:
 * <Badge index={0}>React</Badge>
 * <Badge variant="primary">Custom</Badge>
 */
export function Badge({ variant = "default", index, className, children }: BadgeProps) {
  const baseClasses = "inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full";

  // Default classes based on the variant prop.
  const defaultVariantClasses: Record<BadgeVariant, string> = {
    primary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
    secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]",
    default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
  };

  // Preset alternating color classes (cycling every 4 badges).
  // These colors have been chosen for a refined, modern look.
  const techColorClasses = [
    "bg-pink-100 text-pink-900",    // Soft pink
    "bg-yellow-100 text-yellow-900",// Warm yellow
    "bg-green-100 text-green-900",  // Gentle green
    "bg-blue-100 text-blue-900",    // Cool blue
  ];

  // Use the alternating tech colors if an index is provided; otherwise, use the default variant.
  const variantClass =
    typeof index === "number"
      ? techColorClasses[index % techColorClasses.length]
      : defaultVariantClasses[variant];

  return <span className={classNames(baseClasses, variantClass, className)}>{children}</span>;
}

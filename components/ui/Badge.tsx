import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type BadgeVariant = "default" | "active" | "sold" | "archived" | "in-progress";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  default: "border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400",
  active: "border-orange-500 dark:border-orange-500 text-orange-700 dark:text-orange-500",
  sold: "border-yellow-500 dark:border-yellow-800 text-yellow-700 dark:text-yellow-400",
  archived: "border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-500",
  "in-progress": "border-blue-400 dark:border-blue-800 text-blue-700 dark:text-blue-400",
};

export function Badge({ label, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-mono",
          VARIANT_STYLES[variant],
          className
        )
      )}
    >
      {label}
    </span>
  );
}

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type BadgeVariant = "default" | "active" | "sold" | "archived" | "in-progress";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  default: "border-neutral-700 text-neutral-400",
  active: "border-green-800 text-green-400",
  sold: "border-yellow-800 text-yellow-400",
  archived: "border-neutral-700 text-neutral-500",
  "in-progress": "border-blue-800 text-blue-400",
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

import type { HookDifficulty, HookStatus } from "@/lib/types/hook";

/**
 * Generate a URL-friendly slug from a hook name
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-");
}

/**
 * Get display color class for hook status
 */
export function getStatusColor(status: HookStatus): string {
  const colors: Record<HookStatus, string> = {
    planned: "bg-gray-500",
    "in-progress": "bg-yellow-500",
    done: "bg-green-500",
  };
  return colors[status];
}

/**
 * Get display color class for difficulty level
 */
export function getDifficultyColor(difficulty: HookDifficulty): string {
  const colors: Record<HookDifficulty, string> = {
    beginner: "bg-green-500",
    intermediate: "bg-yellow-500",
    advanced: "bg-red-500",
  };
  return colors[difficulty];
}

/**
 * Capitalize first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Format hook name for display (e.g., "useState" -> "useState")
 */
export function formatHookName(name: string): string {
  return name.startsWith("use") ? name : `use${capitalize(name)}`;
}

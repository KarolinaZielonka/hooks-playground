import Link from "next/link";
import type { Hook } from "@/lib/types/hook";

const statusStyles = {
  planned: "bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-200",
  "in-progress":
    "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
  done: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
};

const difficultyStyles = {
  beginner:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
  intermediate:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
  advanced: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400",
};

const categoryStyles = {
  "built-in":
    "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-400",
  custom:
    "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-400",
};

interface HookCardProps {
  hook: Hook;
}

export function HookCard({ hook }: HookCardProps) {
  return (
    <Link
      href={`/hooks/${hook.id}`}
      className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-mono text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {hook.name}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[hook.status]}`}
        >
          {hook.status}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
        {hook.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryStyles[hook.category]}`}
        >
          {hook.category}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${difficultyStyles[hook.difficulty]}`}
        >
          {hook.difficulty}
        </span>
      </div>
    </Link>
  );
}

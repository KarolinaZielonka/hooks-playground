import Link from "next/link";
import type { Hook } from "@/lib/types/hook";

const statusStyles = {
  planned: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
  "in-progress":
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  done: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
};

const difficultyStyles = {
  beginner: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  intermediate:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  advanced: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

const categoryStyles = {
  "built-in": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  custom:
    "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
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

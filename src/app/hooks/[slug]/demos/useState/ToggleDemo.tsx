"use client";

import { useState } from "react";
import { Button } from "@/components";

/**
 * Toggle Demo - Demonstrates:
 * - Boolean state management
 * - Functional updates with negation
 * - Conditional rendering based on state
 *
 * Note: Uses React's built-in useState. See /lib/hooks/built-in/useState.ts
 * for an educational recreation showing how useState works internally.
 */

export function ToggleDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Show/Hide Toggle */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Button onClick={() => setIsVisible((prev) => !prev)} size="sm">
            {isVisible ? "Hide" : "Show"} Content
          </Button>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            State: {isVisible ? "true" : "false"}
          </span>
        </div>

        {isVisible && (
          <div className="rounded-md bg-blue-50 p-4 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            This content is conditionally rendered based on state.
          </div>
        )}
      </div>

      {/* Theme Toggle */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Button
            onClick={() => setIsDarkMode((prev) => !prev)}
            size="sm"
            variant="secondary"
          >
            Toggle Theme
          </Button>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Theme: {isDarkMode ? "Dark" : "Light"}
          </span>
        </div>

        <div
          className={`rounded-md p-4 transition-colors ${
            isDarkMode
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-900"
          }`}
        >
          This box changes based on the theme toggle state.
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";

/**
 * Render Count Demo - Demonstrates:
 * - Using useRef to store a mutable value that persists across renders
 * - Showing that updating a ref does NOT trigger a re-render
 * - Comparing ref behavior vs state behavior
 */

export function RenderCountDemo() {
  const renderCount = useRef(0);
  renderCount.current++;

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="rounded-lg border border-gray-300 mx-2 px-4 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
      Rendered {renderCount.current} times
    </div>
  );
}

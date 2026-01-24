"use client";

import { useRef } from "react";

import { Button } from "@/components";

/**
 * Focus Input Demo - Demonstrates:
 * - Using useRef to get a reference to a DOM element
 * - Calling imperative DOM methods (e.g., .focus())
 * - Understanding when to use refs vs state for DOM interactions
 */

export function FocusInputDemo() {
  const inputRef = useRef(null);
  return (
    <div>
      <Button onClick={() => inputRef.current.focus()}>Focus!</Button>

      <input
        ref={inputRef}
        className="rounded-lg border border-gray-300 mx-2 px-4 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
}

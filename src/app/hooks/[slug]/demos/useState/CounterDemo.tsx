"use client";

import { useState } from "react";
import { Button } from "@/components";

/**
 * Counter Demo - Demonstrates:
 * - Basic state with numbers
 * - Functional updates (prev => prev + 1)
 * - Multiple state operations
 *
 * Note: Uses React's built-in useState. See /lib/hooks/built-in/useState.ts
 * for an educational recreation showing how useState works internally.
 */

export function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">
          {count}
        </span>
      </div>

      <div className="flex justify-center gap-2">
        <Button onClick={() => setCount((prev) => prev - 1)}>-1</Button>
        <Button onClick={() => setCount(0)} variant="secondary">
          Reset
        </Button>
        <Button onClick={() => setCount((prev) => prev + 1)}>+1</Button>
      </div>

      <div className="flex justify-center gap-2">
        <Button
          onClick={() => setCount((prev) => prev - 10)}
          variant="secondary"
          size="sm"
        >
          -10
        </Button>
        <Button
          onClick={() => setCount((prev) => prev + 10)}
          variant="secondary"
          size="sm"
        >
          +10
        </Button>
      </div>
    </div>
  );
}

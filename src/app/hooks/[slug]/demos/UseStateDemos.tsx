"use client";

import { DemoContainer } from "@/components/DemoContainer";
import { CounterDemo } from "./useState/CounterDemo";
import { ToggleDemo } from "./useState/ToggleDemo";

export function UseStateDemos() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Interactive Demos
      </h2>

      <DemoContainer
        title="Counter Demo"
        description="Basic state with numbers - increment, decrement, reset"
      >
        <CounterDemo />
      </DemoContainer>

      <DemoContainer
        title="Toggle Demo"
        description="Boolean state for show/hide functionality"
      >
        <ToggleDemo />
      </DemoContainer>
    </div>
  );
}

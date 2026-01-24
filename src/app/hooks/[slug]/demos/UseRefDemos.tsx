"use client";

import { DemoContainer } from "@/components/DemoContainer";
import { FocusInputDemo } from "./useRef/FocusInputDemo";
import { RenderCountDemo } from "./useRef/RenderCountDemo";

export function UseRefDemos() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Interactive Demos
      </h2>

      <DemoContainer
        title="Focus Input Demo"
        description="Using a ref to access a DOM element and call imperative methods"
      >
        <FocusInputDemo />
      </DemoContainer>

      <DemoContainer
        title="Render Count Demo"
        description="Storing a mutable value that persists across renders without causing re-renders"
      >
        <RenderCountDemo />
      </DemoContainer>
    </div>
  );
}

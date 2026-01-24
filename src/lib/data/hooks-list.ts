import type { Hook } from "@/lib/types/hook";

export const builtInHooks: Hook[] = [
  {
    id: "use-state",
    name: "useState",
    category: "built-in",
    status: "done",
    description: "Manage component state with a value and setter function",
    difficulty: "beginner",
  },
  {
    id: "use-effect",
    name: "useEffect",
    category: "built-in",
    status: "planned",
    description: "Perform side effects in function components",
    difficulty: "beginner",
  },
  {
    id: "use-ref",
    name: "useRef",
    category: "built-in",
    status: "in-progress",
    description: "Access DOM elements and persist mutable values",
    difficulty: "beginner",
  },
  {
    id: "use-memo",
    name: "useMemo",
    category: "built-in",
    status: "planned",
    description: "Memoize expensive computations",
    difficulty: "intermediate",
  },
  {
    id: "use-callback",
    name: "useCallback",
    category: "built-in",
    status: "planned",
    description: "Memoize callback functions to prevent unnecessary re-renders",
    difficulty: "intermediate",
  },
  {
    id: "use-reducer",
    name: "useReducer",
    category: "built-in",
    status: "planned",
    description: "Manage complex state with reducer pattern",
    difficulty: "intermediate",
  },
  {
    id: "use-context",
    name: "useContext",
    category: "built-in",
    status: "planned",
    description: "Access context values without prop drilling",
    difficulty: "intermediate",
  },
  {
    id: "use-layout-effect",
    name: "useLayoutEffect",
    category: "built-in",
    status: "planned",
    description: "Synchronous version of useEffect for DOM measurements",
    difficulty: "advanced",
  },
  {
    id: "use-imperative-handle",
    name: "useImperativeHandle",
    category: "built-in",
    status: "planned",
    description: "Customize ref values exposed to parent components",
    difficulty: "advanced",
  },
  {
    id: "use-debug-value",
    name: "useDebugValue",
    category: "built-in",
    status: "planned",
    description: "Display custom hook labels in React DevTools",
    difficulty: "advanced",
  },
];

export const customHooks: Hook[] = [
  {
    id: "use-local-storage",
    name: "useLocalStorage",
    category: "custom",
    status: "planned",
    description: "Persist state to localStorage with automatic sync",
    difficulty: "beginner",
  },
  {
    id: "use-debounce",
    name: "useDebounce",
    category: "custom",
    status: "planned",
    description: "Debounce rapidly changing values",
    difficulty: "beginner",
  },
  {
    id: "use-fetch",
    name: "useFetch",
    category: "custom",
    status: "planned",
    description: "Declarative data fetching with loading and error states",
    difficulty: "intermediate",
  },
  {
    id: "use-toggle",
    name: "useToggle",
    category: "custom",
    status: "planned",
    description: "Simple boolean state toggling",
    difficulty: "beginner",
  },
  {
    id: "use-media-query",
    name: "useMediaQuery",
    category: "custom",
    status: "planned",
    description: "Respond to CSS media query changes",
    difficulty: "intermediate",
  },
  {
    id: "use-click-outside",
    name: "useClickOutside",
    category: "custom",
    status: "planned",
    description: "Detect clicks outside a referenced element",
    difficulty: "intermediate",
  },
  {
    id: "use-interval",
    name: "useInterval",
    category: "custom",
    status: "planned",
    description: "Declarative setInterval with automatic cleanup",
    difficulty: "intermediate",
  },
  {
    id: "use-previous",
    name: "usePrevious",
    category: "custom",
    status: "planned",
    description: "Track the previous value of a variable",
    difficulty: "beginner",
  },
  {
    id: "use-window-size",
    name: "useWindowSize",
    category: "custom",
    status: "planned",
    description: "Track window dimensions with resize listener",
    difficulty: "beginner",
  },
  {
    id: "use-key-press",
    name: "useKeyPress",
    category: "custom",
    status: "planned",
    description: "Detect when specific keys are pressed",
    difficulty: "intermediate",
  },
];

export const allHooks: Hook[] = [...builtInHooks, ...customHooks];

export function getHookById(id: string): Hook | undefined {
  return allHooks.find((hook) => hook.id === id);
}

export function getHooksByCategory(category: Hook["category"]): Hook[] {
  return allHooks.filter((hook) => hook.category === category);
}

export function getHooksByStatus(status: Hook["status"]): Hook[] {
  return allHooks.filter((hook) => hook.status === status);
}

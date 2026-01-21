/**
 * useState Recreation
 *
 * This is an educational implementation showing how useState works internally.
 * It demonstrates the core concepts but is not meant to be used in actual React components.
 *
 * Learning goals:
 * - Understand how state is stored between renders (state array + index)
 * - Learn about closures and state persistence
 * - Implement functional updates (setState(prev => prev + 1))
 * - Understand lazy initialization
 *
 * Why this can't replace React's useState:
 * - Uses global state, causing conflicts between components
 * - Not integrated with React's reconciliation and render cycle
 * - No support for concurrent features
 */

let state: any[] = [];
let currentStateIndex = 0;
let reRender: (() => void) | null = null;

function useState<T>(initialVal: T | (() => T)): [T, (newValue: T | ((prev: T) => T)) => void] {
  const stateIndex = currentStateIndex;

  // Lazy initialization: if initialVal is a function, call it
  if (state[stateIndex] === undefined) {
    state[stateIndex] =
      typeof initialVal === "function"
        ? (initialVal as () => T)()
        : initialVal;
  }

  const setState = (newValue: T | ((prev: T) => T)) => {
    const nextValue =
      typeof newValue === "function"
        ? (newValue as (prev: T) => T)(state[stateIndex])
        : newValue;
    state[stateIndex] = nextValue;
    currentStateIndex = 0;
    if (reRender) {
      reRender();
    }
  };

  currentStateIndex++;

  return [state[stateIndex], setState];
}

export function setReRender(fn: () => void) {
  reRender = fn;
}

export function resetHooks() {
  currentStateIndex = 0;
}

export default useState;

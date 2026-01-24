/**
 * useRef Recreation
 *
 * This is an educational implementation showing how useRef works internally.
 * It demonstrates the core concepts but is not meant to be used in actual React components.
 *
 * Learning goals:
 * - Understand how refs persist a mutable value across renders without triggering re-renders
 * - Learn the difference between refs and state
 * - Understand how refs can hold DOM element references
 * - Learn why refs are useful for storing "instance variables" in function components
 *
 * Why this can't replace React's useRef:
 * - Not integrated with React's reconciliation and render cycle
 * - No automatic DOM element attachment via ref prop
 * - Uses global state, causing conflicts between components
 */

// TODO: Implement your useRef recreation here

let refs: any[] = [];
let currentRefIndex = 0;

function useRef<T>(initialVal: T) {
  if (refs[currentRefIndex] === undefined) {
    refs[currentRefIndex] = { current: initialVal };
  }

  const index = currentRefIndex
  currentRefIndex++;

  return refs[index];
}

export default useRef;

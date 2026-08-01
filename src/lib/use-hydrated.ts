import { useEffect, useState } from "react";

/**
 * True only after the client has hydrated.
 *
 * Use it to gate session/browser-dependent UI so the first client render is
 * byte-identical to the SSR output (no hydration mismatch, no flicker).
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "mypath.pro";

type Ctx = {
  isPro: boolean;
  setPro: (v: boolean) => void;
  upgradeOpen: boolean;
  openUpgrade: (feature?: string) => void;
  closeUpgrade: () => void;
  upgradeFeature: string | null;
};

const ProContext = createContext<Ctx | null>(null);

export function ProProvider({ children }: { children: ReactNode }) {
  const [isPro, setIsPro] = useState(false);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [upgradeFeature, setUpgradeFeature] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsPro(window.localStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  const setPro = useCallback((v: boolean) => {
    setIsPro(v);
    if (typeof window !== "undefined") {
      if (v) window.localStorage.setItem(STORAGE_KEY, "1");
      else window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const openUpgrade = useCallback((feature?: string) => {
    setUpgradeFeature(feature ?? null);
    setUpgradeOpen(true);
  }, []);
  const closeUpgrade = useCallback(() => setUpgradeOpen(false), []);

  const value = useMemo<Ctx>(
    () => ({ isPro, setPro, upgradeOpen, openUpgrade, closeUpgrade, upgradeFeature }),
    [isPro, setPro, upgradeOpen, openUpgrade, closeUpgrade, upgradeFeature],
  );
  return <ProContext.Provider value={value}>{children}</ProContext.Provider>;
}

export function usePro(): Ctx {
  const ctx = useContext(ProContext);
  if (!ctx) throw new Error("usePro must be used within ProProvider");
  return ctx;
}

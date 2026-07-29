import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/lib/supabase-hooks";

type Ctx = {
  isPro: boolean;
  /** True while the entitlement is being loaded from the server. */
  loading: boolean;
  upgradeOpen: boolean;
  openUpgrade: (feature?: string) => void;
  closeUpgrade: () => void;
  upgradeFeature: string | null;
};

const ProContext = createContext<Ctx | null>(null);

export function ProProvider({ children }: { children: ReactNode }) {
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [upgradeFeature, setUpgradeFeature] = useState<string | null>(null);
  const { user } = useSession();

  // Entitlement is server-authoritative: it lives in the `subscriptions` table,
  // which is read-only for users and only written by trusted billing processes.
  const { data: isPro = false, isLoading } = useQuery({
    queryKey: ["subscription", user?.id],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return false;
      const { data, error } = await supabase
        .from("subscriptions")
        .select("plan, status, current_period_end")
        .eq("user_id", user.id)
        .maybeSingle();
      if (error) throw error;
      if (!data) return false;
      const notExpired = !data.current_period_end || new Date(data.current_period_end) > new Date();
      return data.plan === "pro" && data.status === "active" && notExpired;
    },
  });

  const openUpgrade = useCallback((feature?: string) => {
    setUpgradeFeature(feature ?? null);
    setUpgradeOpen(true);
  }, []);
  const closeUpgrade = useCallback(() => setUpgradeOpen(false), []);

  const value = useMemo<Ctx>(
    () => ({ isPro, loading: !!user && isLoading, upgradeOpen, openUpgrade, closeUpgrade, upgradeFeature }),
    [isPro, user, isLoading, upgradeOpen, openUpgrade, closeUpgrade, upgradeFeature],
  );
  return <ProContext.Provider value={value}>{children}</ProContext.Provider>;
}

export function usePro(): Ctx {
  const ctx = useContext(ProContext);
  if (!ctx) throw new Error("usePro must be used within ProProvider");
  return ctx;
}

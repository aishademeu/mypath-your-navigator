import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { unlockApplicationPlan } from "@/lib/unlocks.functions";
import type { ApplicationPlan } from "@/lib/unlock-plan";

export type UnlockRow = { opportunity_id: string; plan: ApplicationPlan | null };

export function useUnlocks(user: User | null) {
  return useQuery({
    queryKey: ["unlocks", user?.id],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return [] as UnlockRow[];
      const { data, error } = await supabase
        .from("opportunity_unlocks")
        .select("opportunity_id, plan")
        .eq("user_id", user.id);
      if (error) throw error;
      return (data ?? []) as UnlockRow[];
    },
  });
}

function isAuthError(e: unknown) {
  const m = e instanceof Error ? e.message : String(e);
  return /forbidden|unauthorized|401|403|jwt|token/i.test(m);
}

export function useUnlockPlan(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: { opportunityId: string; lang: string; matchScore: number }) => {
      // Make sure a fresh access token is attached: an expired session makes the
      // authenticated server function reject the call with "Forbidden".
      await supabase.auth.getSession();
      try {
        return (await unlockApplicationPlan({ data: input })) as ApplicationPlan;
      } catch (e) {
        if (!isAuthError(e)) throw e;
        const { data, error } = await supabase.auth.refreshSession();
        if (error || !data.session) throw e;
        return (await unlockApplicationPlan({ data: input })) as ApplicationPlan;
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["unlocks", userId] }),
  });
}


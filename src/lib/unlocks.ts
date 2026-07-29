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

export function useUnlockPlan(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: { opportunityId: string; lang: string; matchScore: number }) =>
      (await unlockApplicationPlan({ data: input })) as ApplicationPlan,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["unlocks", userId] }),
  });
}

import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

// ---- Session ----
export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return { session, user: session?.user ?? null, loading };
}

// ---- Profile ----
export type ProfileRow = {
  id: string;
  name: string | null;
  email: string | null;
  age: number | null;
  grade: string | null;
  country: string | null;
  avatar_url: string | null;
  about: string | null;
  curious_about: string | null;
  world_change: string | null;
};

export function useProfile(user: User | null) {
  return useQuery({
    queryKey: ["profile", user?.id],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
      if (error) throw error;
      return data as ProfileRow | null;
    },
  });
}

export function useUpdateProfile(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (patch: Partial<ProfileRow>) => {
      if (!userId) throw new Error("No user");
      const { error } = await supabase.from("profiles").update({ ...patch, updated_at: new Date().toISOString() }).eq("id", userId);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["profile", userId] }),
  });
}

// ---- Onboarding ----
export type OnboardingRow = {
  user_id: string;
  interests: string[];
  strengths: string[];
  problems: string[];
  goals: string[];
  dream: string | null;
  experience_level: string | null;
  completed_at: string | null;
};

export function useOnboarding(user: User | null) {
  return useQuery({
    queryKey: ["onboarding", user?.id],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase.from("onboarding").select("*").eq("user_id", user.id).maybeSingle();
      if (error) throw error;
      return data as OnboardingRow | null;
    },
  });
}

export function useSaveOnboarding(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (row: Omit<OnboardingRow, "user_id" | "completed_at"> & { completed_at?: string | null }) => {
      if (!userId) throw new Error("No user");
      const payload = { ...row, user_id: userId, updated_at: new Date().toISOString() };
      const { error } = await supabase.from("onboarding").upsert(payload, { onConflict: "user_id" });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["onboarding", userId] }),
  });
}

// ---- Portfolio ----
export type PortfolioRow = {
  id: string;
  user_id: string;
  section: string;
  title: string;
  description: string | null;
  date: string | null;
  created_at: string;
};

export function usePortfolio(user: User | null) {
  return useQuery({
    queryKey: ["portfolio", user?.id],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return [] as PortfolioRow[];
      const { data, error } = await supabase.from("portfolio_items").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as PortfolioRow[];
    },
  });
}

export function useAddPortfolio(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: { section: string; title: string; description?: string; date?: string | null }) => {
      if (!userId) throw new Error("No user");
      const { error } = await supabase.from("portfolio_items").insert({ user_id: userId, ...input });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["portfolio", userId] }),
  });
}

export function useUpdatePortfolio(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, patch }: { id: string; patch: Partial<PortfolioRow> }) => {
      const { error } = await supabase.from("portfolio_items").update(patch).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["portfolio", userId] }),
  });
}

export function useRemovePortfolio(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("portfolio_items").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["portfolio", userId] }),
  });
}

// ---- Saved opportunities ----
export function useSavedOpportunities(user: User | null) {
  return useQuery({
    queryKey: ["saved-opps", user?.id],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return [] as { opportunity_id: string; status: string }[];
      const { data, error } = await supabase.from("saved_opportunities").select("opportunity_id, status").eq("user_id", user.id);
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useToggleSaved(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ opportunityId, currentlySaved }: { opportunityId: string; currentlySaved: boolean }) => {
      if (!userId) throw new Error("No user");
      if (currentlySaved) {
        const { error } = await supabase.from("saved_opportunities").delete().eq("user_id", userId).eq("opportunity_id", opportunityId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("saved_opportunities").insert({ user_id: userId, opportunity_id: opportunityId, status: "saved" });
        if (error) throw error;
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["saved-opps", userId] }),
  });
}

// ---- Application progress ----
export function useApplicationProgress(user: User | null, opportunityId: string) {
  return useQuery({
    queryKey: ["app-progress", user?.id, opportunityId],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return [] as { step_key: string; completed: boolean }[];
      const { data, error } = await supabase
        .from("application_progress")
        .select("step_key, completed")
        .eq("user_id", user.id)
        .eq("opportunity_id", opportunityId);
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useToggleStep(userId: string | undefined, opportunityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ stepKey, completed }: { stepKey: string; completed: boolean }) => {
      if (!userId) throw new Error("No user");
      const { error } = await supabase.from("application_progress").upsert(
        { user_id: userId, opportunity_id: opportunityId, step_key: stepKey, completed, updated_at: new Date().toISOString() },
        { onConflict: "user_id,opportunity_id,step_key" }
      );
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["app-progress", userId, opportunityId] }),
  });
}

// ---- Chat ----
export type ChatRow = { id: string; role: "user" | "assistant"; content: string; created_at: string };

export function useChat(user: User | null) {
  return useQuery({
    queryKey: ["chat", user?.id],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return [] as ChatRow[];
      const { data, error } = await supabase.from("chat_messages").select("id, role, content, created_at").eq("user_id", user.id).order("created_at");
      if (error) throw error;
      return (data ?? []) as ChatRow[];
    },
  });
}

export function useAddChat(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: { role: "user" | "assistant"; content: string }) => {
      if (!userId) throw new Error("No user");
      const { error } = await supabase.from("chat_messages").insert({ user_id: userId, ...input });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["chat", userId] }),
  });
}

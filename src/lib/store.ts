// Client-side store for MyPath MVP. Persists to localStorage.
export type User = {
  id: string;
  name: string;
  email: string;
  age?: number;
  country?: string;
  createdAt: string;
};

export type Onboarding = {
  interests: string[];
  problems: string[];
  strengths: string[];
  dream: string;
  goals: string[];
  completedAt?: string;
};

export type PortfolioItem = {
  id: string;
  section: "about" | "story" | "projects" | "research" | "leadership" | "achievements" | "skills";
  title: string;
  description?: string;
  date?: string;
};

export type ChatMsg = { id: string; role: "user" | "assistant"; content: string; at: string };

export type Profile = {
  user: User;
  onboarding?: Onboarding;
  portfolio: PortfolioItem[];
  chat: ChatMsg[];
};

const KEY = "mypath.profile.v1";
const AUTH_KEY = "mypath.auth.v1";

function isBrowser() { return typeof window !== "undefined"; }

export function getProfile(): Profile | null {
  if (!isBrowser()) return null;
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

export function saveProfile(p: Profile) {
  if (!isBrowser()) return;
  localStorage.setItem(KEY, JSON.stringify(p));
  window.dispatchEvent(new Event("mypath:update"));
}

export function updateProfile(fn: (p: Profile) => Profile) {
  const cur = getProfile();
  if (!cur) return;
  saveProfile(fn(cur));
}

export function signUp(input: { name: string; email: string; password: string; age: number; country: string }) {
  const user: User = {
    id: crypto.randomUUID(),
    name: input.name,
    email: input.email,
    age: input.age,
    country: input.country,
    createdAt: new Date().toISOString(),
  };
  const profile: Profile = { user, portfolio: [], chat: [] };
  saveProfile(profile);
  localStorage.setItem(AUTH_KEY, JSON.stringify({ email: input.email, password: input.password }));
  return user;
}

export function login(email: string, password: string): User | null {
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  const creds = JSON.parse(raw);
  if (creds.email !== email || creds.password !== password) return null;
  return getProfile()?.user ?? null;
}

export function logout() {
  if (!isBrowser()) return;
  // Keep profile, just clear session flag if we had one. For MVP we clear the auth so login is required.
  localStorage.removeItem(AUTH_KEY);
  window.dispatchEvent(new Event("mypath:update"));
}

export function isAuthed(): boolean {
  if (!isBrowser()) return false;
  return !!localStorage.getItem(AUTH_KEY) && !!getProfile();
}

export function uid() { return crypto.randomUUID(); }

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { LANGS, useI18n, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/welcome")({
  component: Welcome,
  head: () => ({
    meta: [
      { title: "MyPath — Choose your language / Выберите язык / Тілді таңдаңыз" },
      { name: "description", content: "Select your preferred language for MyPath: English, Русский, Қазақша." },
      { property: "og:title", content: "MyPath — Choose your language" },
      { property: "og:description", content: "MyPath in English, Russian, or Kazakh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Welcome() {
  const navigate = useNavigate();
  const { lang, setLang } = useI18n();

  const choose = (l: Lang) => {
    setLang(l);
    navigate({ to: "/" });
  };

  return (
    <div className="gradient-hero min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-10">
        <div className="flex justify-center">
          <Logo className="h-10 w-auto" />
        </div>

        <div className="animate-fade-up mt-14 text-center md:mt-24">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">MyPath</div>
          <h1 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">
            Choose your language
          </h1>
          <p className="mt-2 font-display text-2xl italic text-navy/70 md:text-3xl">
            Выберите язык · Тілді таңдаңыз
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-navy/60">
            Your MyPath experience, in the language you think and dream in.
          </p>
        </div>

        <div className="mt-10 grid gap-3">
          {LANGS.map((l) => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={() => choose(l.code)}
                className={`group flex min-h-[72px] items-center gap-4 rounded-3xl border bg-white/85 px-5 py-4 text-left backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl ${active ? "border-navy shadow-lg shadow-navy/10" : "border-navy/10"}`}
              >
                <span className="text-3xl leading-none">{l.flag}</span>
                <span className="flex-1">
                  <span className="block font-display text-2xl text-navy">{l.native}</span>
                  <span className="block text-xs text-navy/50">{l.label}</span>
                </span>
                <span className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-ivory opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-navy/50">
          You can change this anytime in your profile.
        </p>
      </div>
    </div>
  );
}

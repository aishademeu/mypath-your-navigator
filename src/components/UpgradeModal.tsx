import { Link } from "@tanstack/react-router";
import { usePro } from "@/lib/pro";
import { useI18n } from "@/lib/i18n";

export function UpgradeModal() {
  const { upgradeOpen, closeUpgrade, upgradeFeature } = usePro();
  const { dict } = useI18n();
  if (!upgradeOpen) return null;
  const perks = dict.pro.modalPerks;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/50 p-4 backdrop-blur-sm animate-fade-up"
      onClick={closeUpgrade}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-navy via-[#1a2e5c] to-[#22417a] p-8 text-ivory">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lavender/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold/25 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-lavender px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
              ✦ MyPath Pro
            </div>
            <h3 className="mt-4 font-display text-2xl md:text-3xl text-balance">
              {dict.pro.modalTitle}
            </h3>
            {upgradeFeature && (
              <p className="mt-2 text-sm text-ivory/80">
                {dict.pro.modalFeaturePrefix} <span className="font-semibold text-ivory">{upgradeFeature}</span>
              </p>
            )}
          </div>
        </div>
        <div className="p-6 md:p-7">
          <ul className="space-y-2.5">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-navy/80">
                <span className="mt-0.5 text-growth">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              onClick={closeUpgrade}
              className="min-h-[44px] rounded-full border border-navy/15 px-5 py-2.5 text-sm font-medium hover:bg-navy/5"
            >
              {dict.pro.maybeLater}
            </button>
            <Link
              to="/pricing"
              onClick={closeUpgrade}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-navy to-[#22417a] px-6 py-2.5 text-sm font-semibold text-ivory shadow-lg hover:opacity-95"
            >
              {dict.pro.upgradeCta} →
            </Link>
          </div>
          <p className="mt-4 text-center text-[11px] text-navy/45">{dict.pro.modalReassure}</p>
        </div>
      </div>
    </div>
  );
}

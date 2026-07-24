export function ProBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-lavender px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy shadow-sm ${className}`}
    >
      ✦ Pro
    </span>
  );
}

import logo from "@/assets/mypath-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto", variant = "navy" }: { className?: string; variant?: "navy" | "ivory" }) {
  if (variant === "ivory") {
    return (
      <span className="inline-flex items-center gap-2 rounded-2xl bg-navy px-3 py-2">
        <img src={logo.url} alt="MyPath" className={className} />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-navy px-3 py-2 shadow-lg shadow-navy/20">
      <img src={logo.url} alt="MyPath" className={className} />
    </span>
  );
}

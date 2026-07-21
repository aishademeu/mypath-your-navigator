import logo from "@/assets/mypath-logo.png.asset.json";

export function Logo({ className = "h-9 w-auto", variant = "navy" }: { className?: string; variant?: "navy" | "ivory" }) {
  if (variant === "ivory") {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="rounded-lg bg-navy p-1.5">
          <img src={logo.url} alt="MyPath" className={className} />
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-xl bg-navy px-2.5 py-1.5">
      <img src={logo.url} alt="MyPath" className={className} />
    </span>
  );
}

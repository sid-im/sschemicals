import { Link } from "@tanstack/react-router";
export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="SS Chemicals home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime font-display text-sm font-extrabold text-accent-foreground shadow-glow">SS</span>
      <span className={`font-display text-lg font-bold leading-none ${light ? "text-primary-foreground" : "text-foreground"}`}>
        SS Chemicals
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>Clean · Care · Trust</span>
      </span>
    </Link>
  );
}

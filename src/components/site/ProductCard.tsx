import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, products, waLink } from "@/lib/site-data";

export function ProductCard({ p, i }: { p: (typeof products)[number]; i: number }) {
  const cat = categories.find((c) => c.id === p.cat)!;
  const Icon = cat.icon;
  return (
    <motion.article layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-500 hover:-translate-y-2 hover:shadow-soft">
      <div className="relative mb-6 grid h-40 place-items-center overflow-hidden rounded-2xl bg-hero">
        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl transition duration-700 group-hover:scale-150" />
        <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-deep text-primary-foreground shadow-soft transition duration-500 group-hover:rotate-6 group-hover:scale-110">
          <Icon className="h-9 w-9" />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-card/80 px-3 py-1 text-[11px] font-bold text-primary backdrop-blur">{cat.name}</span>
      </div>
      <h3 className="text-xl font-bold">{p.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary/70">{p.size}</p>
      <a href={waLink(`Hello SS Chemicals, I'd like to enquire about ${p.name}.`)} target="_blank" rel="noreferrer"
        className="mt-5 inline-flex items-center justify-between rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition group-hover:bg-deep group-hover:text-primary-foreground">
        Enquire Now <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
      </a>
    </motion.article>
  );
}

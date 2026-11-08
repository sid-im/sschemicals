import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaBand } from "@/components/site/CtaBand";
import { categories, products, type CategoryId } from "@/lib/site-data";

const ids = categories.map((c) => c.id) as string[];

export const Route = createFileRoute("/products")({
  validateSearch: (s: Record<string, unknown>): { cat?: CategoryId } =>
    typeof s["cat"] === "string" && ids.includes(s["cat"]) ? { cat: s["cat"] as CategoryId } : {},
  head: () => ({
    meta: [
      { title: "Products — 20+ Cleaning & Hygiene Products | SS Chemicals" },
      { name: "description", content: "Phenyl, floor cleaners, detergents, hand wash, dishwash liquid and industrial cleaning chemicals manufactured by SS Chemicals." },
      { property: "og:title", content: "SS Chemicals Product Range" },
      { property: "og:description", content: "Browse 20+ cleaning and hygiene products across six categories." },
    ],
  }),
  component: Products,
});

function Products() {
  const { cat } = Route.useSearch();
  const navigate = useNavigate({ from: "/products" });
  const list = cat ? products.filter((p) => p.cat === cat) : products;
  const tabs = [{ id: undefined, name: "All Products" }, ...categories];
  return (
    <>
      <PageHero eyebrow="Our products" title={`${products.length} products. One trusted maker.`} text="Every product is formulated and bottled in our own facility. Filter by category and enquire instantly on WhatsApp." />
      <section className="container-x py-16">
        <div className="sticky top-20 z-30 -mx-2 mb-10 flex gap-2 overflow-x-auto rounded-full bg-background/80 p-2 backdrop-blur" role="tablist">
          {tabs.map((t) => {
            const active = cat === t.id;
            return (
              <button key={t.name} role="tab" aria-selected={active} onClick={() => navigate({ search: t.id ? { cat: t.id } : {}, resetScroll: false })}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${active ? "text-primary-foreground" : "text-foreground/70 hover:text-primary"}`}>
                {active && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-deep" transition={{ type: "spring", bounce: 0.2 }} />}
                <span className="relative">{t.name}</span>
              </button>
            );
          })}
        </div>
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}
          </AnimatePresence>
        </motion.div>
      </section>
      <CtaBand />
    </>
  );
}

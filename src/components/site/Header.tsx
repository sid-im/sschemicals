import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { categories, services } from "@/lib/site-data";

const linkCls = "rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-secondary hover:text-primary";

function Dropdown({ label, to, items }: { label: string; to: "/products" | "/services"; items: { name: string; search?: { cat: string } }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link to={to} className={`${linkCls} inline-flex items-center gap-1`} activeProps={{ className: "text-primary" }} onFocus={() => setOpen(true)}>
        {label} <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
            className="absolute left-0 top-full w-72 pt-3">
            <div className="rounded-2xl border border-border bg-card p-2 shadow-soft">
              {items.map((i) => (
                <Link key={i.name} to={to} search={i.search as never} onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:pl-5 hover:text-primary">
                  {i.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 shadow-soft backdrop-blur-xl" : ""}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-primary" }}>About</Link>
          <Dropdown label="Products" to="/products" items={categories.map((c) => ({ name: c.name, search: { cat: c.id } }))} />
          <Dropdown label="Services" to="/services" items={services.map((s) => ({ name: s.title }))} />
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-primary" }}>Contact</Link>
        </nav>
        <Link to="/contact" className="group hidden items-center gap-2 rounded-full bg-deep px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 lg:inline-flex">
          Get a Quote <span className="h-2 w-2 rounded-full bg-accent transition group-hover:scale-150" />
        </Link>
        <button className="grid h-11 w-11 place-items-center rounded-full bg-secondary lg:hidden" onClick={() => setMobile(!mobile)} aria-label="Toggle menu" aria-expanded={mobile}>
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {mobile && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden">
            <div className="container-x flex flex-col gap-1 py-4">
              {([["/", "Home"], ["/about", "About"], ["/products", "Products"], ["/services", "Services"], ["/contact", "Contact"]] as const).map(([to, l]) => (
                <Link key={to} to={to} onClick={() => setMobile(false)} className="rounded-xl px-4 py-3 font-semibold hover:bg-secondary">{l}</Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

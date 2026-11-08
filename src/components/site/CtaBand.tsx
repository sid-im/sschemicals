import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink } from "@/lib/site-data";
export function CtaBand() {
  return (
    <section className="container-x py-24">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-deep p-10 text-primary-foreground md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-xl text-3xl font-bold md:text-5xl">Ready for a cleaner, healthier space?</h2>
            <p className="mt-3 text-primary-foreground/70">Bulk product orders or a cleaning contract — we reply within hours.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-accent-foreground shadow-glow transition hover:-translate-y-1">
              Request a Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-primary-foreground/30 px-7 py-4 font-bold transition hover:bg-primary-foreground/10">WhatsApp Us</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

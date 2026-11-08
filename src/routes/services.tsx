import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import cleaning from "@/assets/services-cleaning.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cleaning Services — Floor, Office & Building | SS Chemicals" },
      { name: "description", content: "Professional floor cleaning, residential, office and commercial building cleaning services by SS Chemicals." },
      { property: "og:title", content: "SS Chemicals Cleaning Services" },
      { property: "og:description", content: "Trained crews, our own chemicals, spotless results." },
    ],
  }),
  component: Services,
});

const steps = ["Site visit & assessment", "Custom cleaning plan & quote", "Trained crew with our own chemicals", "Supervised quality check"];

function Services() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Professional cleaning for every space." text="From a single apartment to multi-storey commercial buildings — trained staff, proper equipment and our own proven chemicals." />
      <section className="container-x py-20">
        <Reveal><img src={cleaning} alt="SS Chemicals team cleaning an office lobby floor" width={1600} height={1008} className="aspect-[21/9] w-full rounded-[2rem] object-cover shadow-soft" /></Reveal>
        <div className="mt-16 space-y-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.05}>
              <div className="group grid items-center gap-6 rounded-3xl border border-border bg-card p-8 transition duration-500 hover:bg-deep hover:text-primary-foreground hover:shadow-soft md:grid-cols-[auto_1fr_auto]">
                <div className="flex items-center gap-5">
                  <span className="font-display text-sm font-bold text-muted-foreground group-hover:text-accent">0{i + 1}</span>
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-lime text-accent-foreground transition group-hover:rotate-6"><s.icon className="h-7 w-7" /></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">{s.title}</h2>
                  <p className="mt-1 text-muted-foreground group-hover:text-primary-foreground/70">{s.desc}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-primary group-hover:text-accent">Book <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-secondary/60 py-24">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="A simple, professional process." />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((t, i) => (
              <Reveal key={t} delay={i * 0.1} className="rounded-3xl bg-card p-7 shadow-soft">
                <p className="font-display text-5xl font-extrabold text-accent">{i + 1}</p>
                <p className="mt-4 flex gap-2 text-lg font-bold"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

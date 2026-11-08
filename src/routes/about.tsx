import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import factory from "@/assets/manufacturing.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SS Chemicals — Manufacturer & Cleaning Experts" },
      { name: "description", content: "Learn about SS Chemicals: our mission, vision, manufacturing capabilities and commitment to quality." },
      { property: "og:title", content: "About SS Chemicals" },
      { property: "og:description", content: "Our mission, vision and in-house manufacturing of 20+ cleaning products." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Chemistry for cleaner, healthier spaces." text="SS Chemicals is a chemical manufacturing and professional cleaning services company specialising in high-quality cleaning and hygiene products for homes, businesses and industry." />
      <section className="container-x grid gap-12 py-24 lg:grid-cols-2">
        <Reveal><img src={factory} alt="Production line at SS Chemicals" loading="lazy" width={1600} height={1008} className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" /></Reveal>
        <div>
          <SectionHeading eyebrow="Our story" title="From the mixing tank to your floor." />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>We started with a simple belief: cleaning products should be effective, safe and fairly priced. Today we manufacture more than 20 products across six categories.</p>
            <p>Because we use our own products in our cleaning services, we see every formula perform in the real world — and keep improving it.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-secondary/60 py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[{ i: Target, t: "Our Mission", d: "To deliver reliable, high-quality cleaning products and services that make every home, office and facility healthier and more hygienic." },
            { i: Eye, t: "Our Vision", d: "To become a trusted name in cleaning and hygiene — known for consistent quality, honest pricing and professional service." }].map((x, k) => (
            <Reveal key={x.t} delay={k * 0.1} className="rounded-3xl bg-card p-10 shadow-soft">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime text-accent-foreground"><x.i className="h-7 w-7" /></div>
              <h3 className="mt-6 text-3xl font-bold">{x.t}</h3>
              <p className="mt-3 text-lg text-muted-foreground">{x.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container-x py-24">
        <SectionHeading center eyebrow="Capabilities" title="Manufacturing you can rely on." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[["Formulation", "Tested recipes for consistent strength, fragrance and safety."], ["Production", "Stainless-steel mixing and semi-automatic filling lines."], ["Packaging", "From 100ml retail bottles to 50L industrial cans."]].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1} className="rounded-3xl border border-border p-8 transition hover:-translate-y-2 hover:shadow-soft">
              <p className="font-display text-6xl font-extrabold text-accent">0{i + 1}</p>
              <h3 className="mt-4 text-2xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 rounded-[2rem] bg-deep p-10 text-primary-foreground md:p-14">
          <h3 className="text-3xl font-bold">Our commitment to quality & customers</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {["Every batch checked before dispatch", "Honest, transparent pricing", "Quick response to every enquiry", "Long-term support for business clients"].map((t) => (
              <p key={t} className="flex items-center gap-3 font-semibold"><CheckCircle2 className="h-5 w-5 text-accent" />{t}</p>
            ))}
          </div>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, FlaskConical, Phone, Sparkles } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero-products.png";
import factory from "@/assets/manufacturing.png";
import cleaning from "@/assets/services-cleaning.png";
import { CtaBand } from "@/components/site/CtaBand";
import { categories, products, reasons, services } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SS Chemicals — Complete Cleaning Solutions. Quality You Can Trust." },
      { name: "description", content: "SS Chemicals manufactures 20+ cleaning & hygiene products and provides professional floor, office and building cleaning services." },
      { property: "og:title", content: "SS Chemicals — Complete Cleaning Solutions" },
      { property: "og:description", content: "20+ cleaning products manufactured in-house, plus professional cleaning services." },
    ],
  }),
  component: Index,
});

const marquee = ["Phenyl", "Floor Cleaner", "Detergent", "Hand Wash", "Dishwash Liquid", "Toilet Cleaner", "Glass Cleaner", "Sanitizer", "Degreaser", "Acid Cleaner"];

function Index() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-hero pt-32 pb-16 md:pt-40">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-primary shadow-soft">
              <FlaskConical className="h-4 w-4" /> Chemical Manufacturer · Cleaning Services
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-5xl font-extrabold leading-[0.95] md:text-7xl">
              Complete Cleaning Solutions.{" "}
              <span className="relative inline-block text-primary">
                Quality You Can Trust.
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.8 }} className="absolute -bottom-1 left-0 -z-10 h-4 w-full origin-left rounded-full bg-accent/70" />
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 max-w-xl text-lg text-muted-foreground">
              We manufacture <strong className="text-foreground">20+ cleaning & hygiene products</strong> — from phenyl and floor cleaners to hand wash and detergents — and deliver professional floor, office and building cleaning services.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-deep px-7 py-4 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-1">
                Explore Products <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-accent-foreground shadow-glow transition hover:-translate-y-1">
                <Sparkles className="h-4 w-4" /> Our Services
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-bold transition hover:-translate-y-1 hover:border-primary">
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </motion.div>
            <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[["20+", "Products"], ["6", "Categories"], ["100%", "In-house made"]].map(([n, l], i) => (
                <Reveal key={l} delay={0.6 + i * 0.1}>
                  <p className="font-display text-3xl font-extrabold text-primary">{n}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <motion.div style={{ y: imgY }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-lime opacity-30 blur-3xl" />
            <img src={hero} alt="SS Chemicals cleaning product range" width={1280} height={1280} className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-soft transition-transform duration-700 hover:scale-[1.02]" />
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -left-4 bottom-10 rounded-2xl border border-border bg-card/90 p-4 shadow-soft backdrop-blur md:-left-10">
              <p className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Quality tested batches</p>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -right-2 top-8 rounded-2xl bg-deep p-4 text-primary-foreground shadow-soft md:-right-6">
              <p className="font-display text-2xl font-extrabold text-accent">99.9%</p>
              <p className="text-xs text-primary-foreground/70">germ protection</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-primary-deep py-5">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex w-max gap-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl font-bold text-primary-foreground/90">{m}<Sparkles className="h-5 w-5 text-accent" /></span>
          ))}
        </motion.div>
      </div>

      {/* Three pillars */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Who we are" title="One partner for products and cleaning." text="SS Chemicals blends chemical manufacturing expertise with hands-on cleaning services, so every space gets the right formula and the right care." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Chemical Manufacturer", d: "Our own production facility formulates, mixes and bottles every product we sell." },
            { n: "02", t: "20+ Hygiene Products", d: "Phenyl, floor cleaners, detergents, hand wash, dishwash and industrial chemicals." },
            { n: "03", t: "Professional Cleaning", d: "Trained crews for floor, residential, office and commercial building cleaning." },
          ].map((x, i) => (
            <Reveal key={x.n} delay={i * 0.1} className="group rounded-3xl border border-border bg-card p-8 transition duration-500 hover:-translate-y-2 hover:bg-deep hover:text-primary-foreground hover:shadow-soft">
              <p className="font-display text-5xl font-extrabold text-accent transition group-hover:text-accent">{x.n}</p>
              <h3 className="mt-6 text-2xl font-bold">{x.t}</h3>
              <p className="mt-3 text-muted-foreground transition group-hover:text-primary-foreground/70">{x.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories bento */}
      <section className="bg-secondary/60 py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our products" title="Six categories. Every surface covered." />
            <Link to="/products" className="group inline-flex items-center gap-2 font-bold text-primary">View all {products.length} products <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => {
              const count = products.filter((p) => p.cat === c.id).length;
              return (
                <Reveal key={c.id} delay={i * 0.06}>
                  <Link to="/products" search={{ cat: c.id }} className="group relative flex h-full items-center gap-5 overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-500 hover:-translate-y-1 hover:shadow-soft">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-lime text-accent-foreground transition duration-500 group-hover:rotate-12"><c.icon className="h-7 w-7" /></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{c.name}</h3>
                      <p className="text-sm text-muted-foreground">{count} products</p>
                    </div>
                    <ArrowRight className="h-5 w-5 -translate-x-2 text-primary opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing split */}
      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <Reveal className="relative">
          <img src={factory} alt="SS Chemicals manufacturing facility" loading="lazy" width={1600} height={1008} className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
          <div className="absolute -bottom-6 -right-4 rounded-3xl bg-lime p-6 shadow-glow md:-right-8">
            <p className="font-display text-4xl font-extrabold text-accent-foreground">In-house</p>
            <p className="text-sm font-semibold text-accent-foreground/80">formulation & bottling</p>
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Manufacturing" title="Made in our own facility, batch by batch." text="From raw material selection to final filling, every bottle goes through controlled mixing and quality checks before it leaves our plant." />
          <ul className="mt-8 space-y-3">
            {["Controlled, consistent formulations", "Bulk and retail pack sizes", "Private labelling on request"].map((t, i) => (
              <Reveal key={t} delay={i * 0.1}><li className="flex items-center gap-3 font-semibold"><CheckCircle2 className="h-5 w-5 text-primary" />{t}</li></Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-primary-deep py-24 text-primary-foreground">
        <img src={cleaning} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-accent"><span className="h-px w-8 bg-accent" />Our services</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Spotless spaces, delivered by professionals.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="group rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-accent hover:text-accent-foreground">
                <s.icon className="h-8 w-8 text-accent transition group-hover:text-accent-foreground" />
                <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm opacity-70">{s.desc}</p>
              </Reveal>
            ))}
          </div>
          <Link to="/services" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-accent-foreground transition hover:-translate-y-1">
            Explore services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Why */}
      <section className="container-x py-24">
        <SectionHeading center eyebrow="Why SS Chemicals" title="Built on quality. Trusted for results." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06} className="group bg-card p-8 transition hover:bg-secondary">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-deep group-hover:text-primary-foreground"><r.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-muted-foreground">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { contact, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SS Chemicals — Enquiries & Quotes" },
      { name: "description", content: "Call, WhatsApp or email SS Chemicals for product orders and cleaning service quotes." },
      { property: "og:title", content: "Contact SS Chemicals" },
      { property: "og:description", content: "Get in touch for bulk orders and cleaning contracts." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-2xl border border-input bg-background px-5 py-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-accent/40";

function Contact() {
  const [f, setF] = useState({ name: "", phone: "", email: "", interest: "Products", message: "" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  const body = () => `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nInterested in: ${f.interest}\n\n${f.message}`;
  const valid = () => {
    if (!f.name.trim() || !f.phone.trim() || !f.message.trim()) { setErr("Please fill in your name, phone and message."); return false; }
    setErr(""); return true;
  };
  const sendWa = (e: FormEvent) => { e.preventDefault(); if (valid()) window.open(waLink(`Enquiry from website\n\n${body()}`), "_blank"); };
  const sendMail = () => { if (valid()) window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry – ${f.interest}`)}&body=${encodeURIComponent(body())}`; };

  const cards = [
    { i: User, l: "Contact Person", v: contact.person },
    { i: Phone, l: "Phone", v: contact.phone, href: `tel:+${contact.phoneRaw}` },
    { i: MessageCircle, l: "WhatsApp", v: contact.phone, href: waLink(), ext: true },
    { i: Mail, l: "Email", v: contact.email, href: `mailto:${contact.email}` },
    { i: MapPin, l: "Address", v: contact.address },
  ];
  return (
    <>
      <PageHero eyebrow="Contact us" title="Let's make your space shine." text="Send an enquiry for products or cleaning services — we usually reply within a few hours." />
      <section className="container-x grid gap-8 py-20 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <Reveal className="rounded-3xl bg-deep p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold">{contact.company}</h2>
            <p className="mt-2 text-primary-foreground/70">Manufacturer & cleaning services</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:+${contact.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5"><Phone className="h-4 w-4" />Call now</a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-bold transition hover:bg-primary-foreground/10"><MessageCircle className="h-4 w-4" />WhatsApp</a>
            </div>
          </Reveal>
          {cards.map((c, k) => {
            const inner = (
              <>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-lime group-hover:text-accent-foreground"><c.i className="h-5 w-5" /></div>
                <div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.l}</p><p className="font-semibold">{c.v}</p></div>
              </>
            );
            return (
              <Reveal key={c.l} delay={k * 0.05}>
                {c.href ? <a href={c.href} target={c.ext ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-soft">{inner}</a>
                  : <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4">{inner}</div>}
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.1}>
          <form onSubmit={sendWa} className="rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-10" noValidate>
            <h2 className="text-3xl font-bold">Send an enquiry</h2>
            <p className="mt-2 text-muted-foreground">Fill the form and send it via WhatsApp or email.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <label className="sr-only" htmlFor="name">Name</label>
              <input id="name" className={field} placeholder="Your name *" value={f.name} onChange={set("name")} maxLength={100} />
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input id="phone" className={field} placeholder="Phone number *" type="tel" value={f.phone} onChange={set("phone")} maxLength={20} />
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" className={field} placeholder="Email address" type="email" value={f.email} onChange={set("email")} maxLength={255} />
              <label className="sr-only" htmlFor="interest">Interested in</label>
              <select id="interest" className={field} value={f.interest} onChange={set("interest")}>
                <option>Products</option><option>Bulk / Wholesale Order</option><option>Cleaning Services</option><option>Other</option>
              </select>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea id="message" className={`${field} min-h-36 md:col-span-2`} placeholder="Tell us what you need *" value={f.message} onChange={set("message")} maxLength={1000} />
            </div>
            {err && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm font-semibold text-destructive" role="alert">{err}</motion.p>}
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-deep px-7 py-4 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-1"><MessageCircle className="h-4 w-4" />Send via WhatsApp</button>
              <button type="button" onClick={sendMail} className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-accent-foreground transition hover:-translate-y-1"><Send className="h-4 w-4" />Send via Email</button>
            </div>
          </form>
        </Reveal>
      </section>
      <section className="container-x pb-24">
        <Reveal className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
          <iframe title="SS Chemicals location" src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`} className="h-[420px] w-full" loading="lazy" />
        </Reveal>
      </section>
    </>
  );
}

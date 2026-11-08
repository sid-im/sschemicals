import { Link } from "@tanstack/react-router";
import { AtSign, Camera, Globe, Mail, MapPin, Phone, PlayCircle } from "lucide-react";
import { Logo } from "./Logo";
import { categories, contact, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-40" />
      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-6 max-w-sm text-primary-foreground/70">Manufacturer of 20+ cleaning and hygiene products and a trusted partner for professional floor, office and building cleaning.</p>
          <div className="mt-6 flex gap-3">
            {[Globe, Camera, AtSign, PlayCircle].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {([["/", "Home"], ["/about", "About Us"], ["/products", "Products"], ["/services", "Services"], ["/contact", "Contact"]] as const).map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-accent">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Products</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {categories.map((c) => <li key={c.id}><Link to="/products" search={{ cat: c.id }} className="hover:text-accent">{c.name}</Link></li>)}
          </ul>
          <h3 className="mt-6 font-bold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {services.slice(0, 4).map((s) => <li key={s.title}><Link to="/services" className="hover:text-accent">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-accent" /><a href={`tel:+${contact.phoneRaw}`} className="hover:text-accent">{contact.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-accent" /><a href={`mailto:${contact.email}`} className="hover:text-accent">{contact.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-accent" />{contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="container-x relative flex flex-col justify-between gap-2 border-t border-primary-foreground/10 py-6 text-xs text-primary-foreground/50 md:flex-row">
        <p>© {new Date().getFullYear()} SS Chemicals. All rights reserved.</p>
        <p>Complete Cleaning Solutions. Quality You Can Trust.</p>
      </div>
    </footer>
  );
}

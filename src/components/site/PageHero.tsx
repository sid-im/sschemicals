import { motion } from "framer-motion";
export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-hero pt-36 pb-20">
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="container-x relative">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow"><span className="h-px w-8 bg-primary" />{eyebrow}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] md:text-7xl">{title}</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</motion.p>
      </div>
    </section>
  );
}

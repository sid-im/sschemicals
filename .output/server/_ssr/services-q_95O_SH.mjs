import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-COgXp-0X.mjs";
import { n as SectionHeading, t as Reveal } from "./Reveal-BYnHreeb.mjs";
import { F as ArrowRight, T as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as services } from "./site-data-BQzWzEPa.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./CtaBand-DSTnNyhg.mjs";
import { t as services_cleaning_default } from "./services-cleaning-DscTYmmt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-q_95O_SH.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Site visit & assessment",
	"Custom cleaning plan & quote",
	"Trained crew with our own chemicals",
	"Supervised quality check"
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our services",
			title: "Professional cleaning for every space.",
			text: "From a single apartment to multi-storey commercial buildings — trained staff, proper equipment and our own proven chemicals."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: services_cleaning_default,
				alt: "SS Chemicals team cleaning an office lobby floor",
				width: 1600,
				height: 1008,
				className: "aspect-[21/9] w-full rounded-[2rem] object-cover shadow-soft"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-4",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group grid items-center gap-6 rounded-3xl border border-border bg-card p-8 transition duration-500 hover:bg-deep hover:text-primary-foreground hover:shadow-soft md:grid-cols-[auto_1fr_auto]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-sm font-bold text-muted-foreground group-hover:text-accent",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-16 w-16 place-items-center rounded-2xl bg-lime text-accent-foreground transition group-hover:rotate-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold md:text-3xl",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted-foreground group-hover:text-primary-foreground/70",
								children: s.desc
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 font-bold text-primary group-hover:text-accent",
								children: ["Book ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
							})
						]
					})
				}, s.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/60 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "How it works",
					title: "A simple, professional process."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-4",
					children: steps.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .1,
						className: "rounded-3xl bg-card p-7 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-5xl font-extrabold text-accent",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex gap-2 text-lg font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }), t]
						})]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Services as component };

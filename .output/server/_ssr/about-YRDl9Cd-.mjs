import { t as manufacturing_default } from "./manufacturing-Cp1nwDod.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-COgXp-0X.mjs";
import { n as SectionHeading, t as Reveal } from "./Reveal-BYnHreeb.mjs";
import { S as Eye, T as CircleCheck, a as Target } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./CtaBand-BcZhmwmc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-YRDl9Cd-.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About us",
			title: "Chemistry for cleaner, healthier spaces.",
			text: "SS Chemicals is a chemical manufacturing and professional cleaning services company specialising in high-quality cleaning and hygiene products for homes, businesses and industry."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-12 py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: manufacturing_default,
				alt: "Production line at SS Chemicals",
				loading: "lazy",
				width: 1600,
				height: 1008,
				className: "aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our story",
				title: "From the mixing tank to your floor."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .1,
				className: "mt-6 space-y-4 text-lg text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We started with a simple belief: cleaning products should be effective, safe and fairly priced. Today we manufacture more than 20 products across six categories." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Because we use our own products in our cleaning services, we see every formula perform in the real world — and keep improving it." })]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/60 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid gap-6 md:grid-cols-2",
				children: [{
					i: Target,
					t: "Our Mission",
					d: "To deliver reliable, high-quality cleaning products and services that make every home, office and facility healthier and more hygienic."
				}, {
					i: Eye,
					t: "Our Vision",
					d: "To become a trusted name in cleaning and hygiene — known for consistent quality, honest pricing and professional service."
				}].map((x, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: k * .1,
					className: "rounded-3xl bg-card p-10 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 place-items-center rounded-2xl bg-lime text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x.i, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-3xl font-bold",
							children: x.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg text-muted-foreground",
							children: x.d
						})
					]
				}, x.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Capabilities",
					title: "Manufacturing you can rely on."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: [
						["Formulation", "Tested recipes for consistent strength, fragrance and safety."],
						["Production", "Stainless-steel mixing and semi-automatic filling lines."],
						["Packaging", "From 100ml retail bottles to 50L industrial cans."]
					].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .1,
						className: "rounded-3xl border border-border p-8 transition hover:-translate-y-2 hover:shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-6xl font-extrabold text-accent",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-bold",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: d
							})
						]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-16 rounded-[2rem] bg-deep p-10 text-primary-foreground md:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl font-bold",
						children: "Our commitment to quality & customers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-2",
						children: [
							"Every batch checked before dispatch",
							"Honest, transparent pricing",
							"Quick response to every enquiry",
							"Long-term support for business clients"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-3 font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-accent" }), t]
						}, t))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { About as component };

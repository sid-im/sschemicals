import { i as AnimatePresence, r as motion } from "../_libs/framer-motion+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-COgXp-0X.mjs";
import { P as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { o as waLink, r as products, t as categories } from "./site-data-zk3KOPiU.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./CtaBand-BcZhmwmc.mjs";
import { t as Route } from "./products-RpHG1TiG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CuC5RbwH.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ p, i }) {
	const cat = categories.find((c) => c.id === p.cat);
	const Icon = cat.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		layout: true,
		initial: {
			opacity: 0,
			scale: .95
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .95
		},
		transition: {
			duration: .4,
			delay: Math.min(i * .03, .3)
		},
		className: "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-500 hover:-translate-y-2 hover:shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-6 grid h-40 place-items-center overflow-hidden rounded-2xl bg-hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl transition duration-700 group-hover:scale-150" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid h-20 w-20 place-items-center rounded-2xl bg-deep text-primary-foreground shadow-soft transition duration-500 group-hover:rotate-6 group-hover:scale-110",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-9 w-9" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-3 top-3 rounded-full bg-card/80 px-3 py-1 text-[11px] font-bold text-primary backdrop-blur",
						children: cat.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold",
				children: p.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm text-muted-foreground",
				children: p.desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs font-semibold uppercase tracking-wider text-primary/70",
				children: p.size
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: waLink(`Hello SS Chemicals, I'd like to enquire about ${p.name}.`),
				target: "_blank",
				rel: "noreferrer",
				className: "mt-5 inline-flex items-center justify-between rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition group-hover:bg-deep group-hover:text-primary-foreground",
				children: ["Enquire Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition group-hover:rotate-45" })]
			})
		]
	});
}
function Products() {
	const { cat } = Route.useSearch();
	const navigate = useNavigate({ from: "/products" });
	const list = cat ? products.filter((p) => p.cat === cat) : products;
	const tabs = [{
		id: void 0,
		name: "All Products"
	}, ...categories];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our products",
			title: `${products.length} products. One trusted maker.`,
			text: "Every product is formulated and bottled in our own facility. Filter by category and enquire instantly on WhatsApp."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-20 z-30 -mx-2 mb-10 flex gap-2 overflow-x-auto rounded-full bg-background/80 p-2 backdrop-blur",
				role: "tablist",
				children: tabs.map((t) => {
					const active = cat === t.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						role: "tab",
						"aria-selected": active,
						onClick: () => navigate({
							search: t.id ? { cat: t.id } : {},
							resetScroll: false
						}),
						className: `relative shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${active ? "text-primary-foreground" : "text-foreground/70 hover:text-primary"}`,
						children: [active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "tab",
							className: "absolute inset-0 rounded-full bg-deep",
							transition: {
								type: "spring",
								bounce: .2
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: t.name
						})]
					}, t.name);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layout: true,
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						p,
						i
					}, p.name))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Products as component };

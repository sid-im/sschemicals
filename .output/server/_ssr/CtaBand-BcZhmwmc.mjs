import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-BYnHreeb.mjs";
import { F as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as waLink } from "./site-data-zk3KOPiU.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaBand-BcZhmwmc.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "relative overflow-hidden rounded-[2rem] bg-deep p-10 text-primary-foreground md:p-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-dots opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-xl text-3xl font-bold md:text-5xl",
						children: "Ready for a cleaner, healthier space?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-primary-foreground/70",
						children: "Bulk product orders or a cleaning contract — we reply within hours."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-accent-foreground shadow-glow transition hover:-translate-y-1",
							children: ["Request a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink(),
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center rounded-full border border-primary-foreground/30 px-7 py-4 font-bold transition hover:bg-primary-foreground/10",
							children: "WhatsApp Us"
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { CtaBand as t };

import { r as motion } from "../_libs/framer-motion+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-COgXp-0X.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-hero pt-36 pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), eyebrow]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] md:text-7xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .35 },
					className: "mt-6 max-w-2xl text-lg text-muted-foreground",
					children: text
				})
			]
		})]
	});
}
//#endregion
export { PageHero as t };

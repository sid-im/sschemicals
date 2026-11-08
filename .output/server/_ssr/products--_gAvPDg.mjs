import { t as categories } from "./site-data-BQzWzEPa.mjs";
import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products--_gAvPDg.js
var $$splitComponentImporter = () => import("./products-CVIe4wd2.mjs");
var ids = categories.map((c) => c.id);
var Route = createFileRoute("/products")({
	validateSearch: (s) => typeof s["cat"] === "string" && ids.includes(s["cat"]) ? { cat: s["cat"] } : {},
	head: () => ({ meta: [
		{ title: "Products — 20+ Cleaning & Hygiene Products | SS Chemicals" },
		{
			name: "description",
			content: "Phenyl, floor cleaners, detergents, hand wash, dishwash liquid and industrial cleaning chemicals manufactured by SS Chemicals."
		},
		{
			property: "og:title",
			content: "SS Chemicals Product Range"
		},
		{
			property: "og:description",
			content: "Browse 20+ cleaning and hygiene products across six categories."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

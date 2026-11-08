import { n as __toESM } from "../_runtime.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion+[...].mjs";
import { t as manufacturing_default } from "./manufacturing-Cp1nwDod.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionHeading, t as Reveal } from "./Reveal-BYnHreeb.mjs";
import { F as ArrowRight, T as CircleCheck, b as FlaskConical, o as Sparkles, u as Phone } from "../_libs/lucide-react.mjs";
import { a as services, i as reasons, r as products, t as categories } from "./site-data-zk3KOPiU.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./CtaBand-BcZhmwmc.mjs";
import { t as services_cleaning_default } from "./services-cleaning-DscTYmmt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-6b0NNJ29.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_products_default = "/assets/hero-products-DnOOz7s2.png";
var marquee = [
	"Phenyl",
	"Floor Cleaner",
	"Detergent",
	"Hand Wash",
	"Dishwash Liquid",
	"Toilet Cleaner",
	"Glass Cleaner",
	"Sanitizer",
	"Degreaser",
	"Acid Cleaner"
];
function Index() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref,
			className: "relative overflow-hidden bg-hero pt-32 pb-16 md:pt-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-primary shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-4 w-4" }), " Chemical Manufacturer · Cleaning Services"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
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
						className: "mt-6 text-5xl font-extrabold leading-[0.95] md:text-7xl",
						children: [
							"Complete Cleaning Solutions.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative inline-block text-primary",
								children: ["Quality You Can Trust.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: { scaleX: 0 },
									animate: { scaleX: 1 },
									transition: {
										delay: .8,
										duration: .8
									},
									className: "absolute -bottom-1 left-0 -z-10 h-4 w-full origin-left rounded-full bg-accent/70"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .4 },
						className: "mt-6 max-w-xl text-lg text-muted-foreground",
						children: [
							"We manufacture ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "20+ cleaning & hygiene products"
							}),
							" — from phenyl and floor cleaners to hand wash and detergents — and deliver professional floor, office and building cleaning services."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .55 },
						className: "mt-9 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products",
								className: "group inline-flex items-center gap-2 rounded-full bg-deep px-7 py-4 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-1",
								children: ["Explore Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-accent-foreground shadow-glow transition hover:-translate-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), " Our Services"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-bold transition hover:-translate-y-1 hover:border-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Contact Us"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid max-w-md grid-cols-3 gap-6",
						children: [
							["20+", "Products"],
							["6", "Categories"],
							["100%", "In-house made"]
						].map(([n, l], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .6 + i * .1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl font-extrabold text-primary",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: l
							})]
						}, l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: imgY },
					initial: {
						opacity: 0,
						scale: .92
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: 1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[3rem] bg-lime opacity-30 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_products_default,
							alt: "SS Chemicals cleaning product range",
							width: 1280,
							height: 1280,
							className: "relative aspect-square w-full rounded-[2.5rem] object-cover shadow-soft transition-transform duration-700 hover:scale-[1.02]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { y: [
								0,
								-10,
								0
							] },
							transition: {
								repeat: Infinity,
								duration: 4
							},
							className: "absolute -left-4 bottom-10 rounded-2xl border border-border bg-card/90 p-4 shadow-soft backdrop-blur md:-left-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-sm font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" }), " Quality tested batches"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							animate: { y: [
								0,
								10,
								0
							] },
							transition: {
								repeat: Infinity,
								duration: 5
							},
							className: "absolute -right-2 top-8 rounded-2xl bg-deep p-4 text-primary-foreground shadow-soft md:-right-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-extrabold text-accent",
								children: "99.9%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-primary-foreground/70",
								children: "germ protection"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-y border-border bg-primary-deep py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { x: ["0%", "-50%"] },
				transition: {
					repeat: Infinity,
					duration: 30,
					ease: "linear"
				},
				className: "flex w-max gap-10",
				children: [...marquee, ...marquee].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-10 font-display text-2xl font-bold text-primary-foreground/90",
					children: [m, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-accent" })]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Who we are",
				title: "One partner for products and cleaning.",
				text: "SS Chemicals blends chemical manufacturing expertise with hands-on cleaning services, so every space gets the right formula and the right care."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: [
					{
						n: "01",
						t: "Chemical Manufacturer",
						d: "Our own production facility formulates, mixes and bottles every product we sell."
					},
					{
						n: "02",
						t: "20+ Hygiene Products",
						d: "Phenyl, floor cleaners, detergents, hand wash, dishwash and industrial chemicals."
					},
					{
						n: "03",
						t: "Professional Cleaning",
						d: "Trained crews for floor, residential, office and commercial building cleaning."
					}
				].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .1,
					className: "group rounded-3xl border border-border bg-card p-8 transition duration-500 hover:-translate-y-2 hover:bg-deep hover:text-primary-foreground hover:shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-5xl font-extrabold text-accent transition group-hover:text-accent",
							children: x.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-2xl font-bold",
							children: x.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground transition group-hover:text-primary-foreground/70",
							children: x.d
						})
					]
				}, x.n))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/60 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Our products",
						title: "Six categories. Every surface covered."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "group inline-flex items-center gap-2 font-bold text-primary",
						children: [
							"View all ",
							products.length,
							" products ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: categories.map((c, i) => {
						const count = products.filter((p) => p.cat === c.id).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products",
								search: { cat: c.id },
								className: "group relative flex h-full items-center gap-5 overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-500 hover:-translate-y-1 hover:shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-lime text-accent-foreground transition duration-500 group-hover:rotate-12",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-7 w-7" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground",
											children: [count, " products"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 -translate-x-2 text-primary opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" })
								]
							})
						}, c.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid items-center gap-12 py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: manufacturing_default,
					alt: "SS Chemicals manufacturing facility",
					loading: "lazy",
					width: 1600,
					height: 1008,
					className: "aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 -right-4 rounded-3xl bg-lime p-6 shadow-glow md:-right-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-extrabold text-accent-foreground",
						children: "In-house"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-accent-foreground/80",
						children: "formulation & bottling"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Manufacturing",
				title: "Made in our own facility, batch by batch.",
				text: "From raw material selection to final filling, every bottle goes through controlled mixing and quality checks before it leaves our plant."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-3",
				children: [
					"Controlled, consistent formulations",
					"Bulk and retail pack sizes",
					"Private labelling on request"
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" }), t]
					})
				}, t))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-primary-deep py-24 text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: services_cleaning_default,
				alt: "",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover opacity-15"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-accent" }), "Our services"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl font-bold md:text-5xl",
							children: "Spotless spaces, delivered by professionals."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5",
						children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: i * .08,
							className: "group rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-accent hover:text-accent-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-8 w-8 text-accent transition group-hover:text-accent-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-lg font-bold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm opacity-70",
									children: s.desc
								})
							]
						}, s.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "group mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-accent-foreground transition hover:-translate-y-1",
						children: ["Explore services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				center: true,
				eyebrow: "Why SS Chemicals",
				title: "Built on quality. Trusted for results."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .06,
					className: "group bg-card p-8 transition hover:bg-secondary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-deep group-hover:text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl font-bold",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: r.desc
						})
					]
				}, r.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Index as component };

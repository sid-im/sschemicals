import { n as __toESM } from "../_runtime.mjs";
import { r as motion } from "../_libs/framer-motion+[...].mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-COgXp-0X.mjs";
import { t as Reveal } from "./Reveal-BYnHreeb.mjs";
import { d as MessageCircle, i as User, l as Send, m as Mail, p as MapPin, u as Phone } from "../_libs/lucide-react.mjs";
import { n as contact, o as waLink } from "./site-data-zk3KOPiU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DtvcBJKm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full rounded-2xl border border-input bg-background px-5 py-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-accent/40";
function Contact() {
	const [f, setF] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		interest: "Products",
		message: ""
	});
	const [err, setErr] = (0, import_react.useState)("");
	const set = (k) => (e) => setF({
		...f,
		[k]: e.target.value
	});
	const body = () => `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nInterested in: ${f.interest}\n\n${f.message}`;
	const valid = () => {
		if (!f.name.trim() || !f.phone.trim() || !f.message.trim()) {
			setErr("Please fill in your name, phone and message.");
			return false;
		}
		setErr("");
		return true;
	};
	const sendWa = (e) => {
		e.preventDefault();
		if (valid()) window.open(waLink(`Enquiry from website\n\n${body()}`), "_blank");
	};
	const sendMail = () => {
		if (valid()) window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry – ${f.interest}`)}&body=${encodeURIComponent(body())}`;
	};
	const cards = [
		{
			i: User,
			l: "Contact Person",
			v: contact.person
		},
		{
			i: Phone,
			l: "Phone",
			v: contact.phone,
			href: `tel:+${contact.phoneRaw}`
		},
		{
			i: MessageCircle,
			l: "WhatsApp",
			v: contact.phone,
			href: waLink(),
			ext: true
		},
		{
			i: Mail,
			l: "Email",
			v: contact.email,
			href: `mailto:${contact.email}`
		},
		{
			i: MapPin,
			l: "Address",
			v: contact.address
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact us",
			title: "Let's make your space shine.",
			text: "Send an enquiry for products or cleaning services — we usually reply within a few hours."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-8 py-20 lg:grid-cols-[1fr_1.3fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-3xl bg-deep p-8 text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold",
							children: contact.company
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-primary-foreground/70",
							children: "Manufacturer & cleaning services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+${contact.phoneRaw}`,
								className: "inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Call now"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(),
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-bold transition hover:bg-primary-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
							})]
						})
					]
				}), cards.map((c, k) => {
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-lime group-hover:text-accent-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
						children: c.l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: c.v
					})] })] });
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: k * .05,
						children: c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: c.href,
							target: c.ext ? "_blank" : void 0,
							rel: "noreferrer",
							className: "group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-soft",
							children: inner
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "group flex items-center gap-4 rounded-2xl border border-border bg-card p-4",
							children: inner
						})
					}, c.l);
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: sendWa,
					className: "rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-10",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold",
							children: "Send an enquiry"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Fill the form and send it via WhatsApp or email."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "sr-only",
									htmlFor: "name",
									children: "Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									className: field,
									placeholder: "Your name *",
									value: f.name,
									onChange: set("name"),
									maxLength: 100
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "sr-only",
									htmlFor: "phone",
									children: "Phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "phone",
									className: field,
									placeholder: "Phone number *",
									type: "tel",
									value: f.phone,
									onChange: set("phone"),
									maxLength: 20
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "sr-only",
									htmlFor: "email",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									className: field,
									placeholder: "Email address",
									type: "email",
									value: f.email,
									onChange: set("email"),
									maxLength: 255
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "sr-only",
									htmlFor: "interest",
									children: "Interested in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "interest",
									className: field,
									value: f.interest,
									onChange: set("interest"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Products" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bulk / Wholesale Order" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cleaning Services" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "sr-only",
									htmlFor: "message",
									children: "Message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									className: `${field} min-h-36 md:col-span-2`,
									placeholder: "Tell us what you need *",
									value: f.message,
									onChange: set("message"),
									maxLength: 1e3
								})
							]
						}),
						err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							className: "mt-4 text-sm font-semibold text-destructive",
							role: "alert",
							children: err
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "group inline-flex items-center gap-2 rounded-full bg-deep px-7 py-4 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Send via WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: sendMail,
								className: "inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-accent-foreground transition hover:-translate-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), "Send via Email"]
							})]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "overflow-hidden rounded-[2rem] border border-border shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "SS Chemicals location",
					src: `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`,
					className: "h-[420px] w-full",
					loading: "lazy"
				})
			})
		})
	] });
}
//#endregion
export { Contact as component };

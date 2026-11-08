import { A as Briefcase, C as Droplets, M as Award, O as BuildingComplex, _ as HeartHandshake, c as ShieldCheck, g as House, h as Layers, j as BadgeIndianRupee, k as Brush, n as UtensilsCrossed, o as Sparkles, r as Users, s as Shirt, v as Hand, x as Factory } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-data-zk3KOPiU.js
var contact = {
	company: "SS Chemicals",
	person: "Appu Hosur",
	phone: "+91 8660100885",
	phoneRaw: "8660100885",
	whatsapp: "8660100885",
	email: "info@sschemicals.in",
	address: "Industrial Area, Your City, India",
	mapQuery: "Industrial Area India"
};
var waLink = (msg = "Hello SS Chemicals, I would like to enquire about your products/services.") => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
var categories = [
	{
		id: "floor",
		name: "Phenyl & Floor Care",
		icon: Droplets
	},
	{
		id: "laundry",
		name: "Detergents & Laundry",
		icon: Shirt
	},
	{
		id: "hand",
		name: "Hand & Personal Hygiene",
		icon: Hand
	},
	{
		id: "kitchen",
		name: "Kitchen & Dishwash",
		icon: UtensilsCrossed
	},
	{
		id: "surface",
		name: "Surface & Bathroom",
		icon: Sparkles
	},
	{
		id: "industrial",
		name: "Industrial & Commercial",
		icon: Factory
	}
];
var products = [
	{
		name: "Black Phenyl",
		cat: "floor",
		desc: "Powerful disinfectant for drains, floors and outdoor areas.",
		size: "1L · 5L · 20L"
	},
	{
		name: "White Phenyl",
		cat: "floor",
		desc: "Germ-killing emulsion with a fresh pine finish.",
		size: "1L · 5L · 20L"
	},
	{
		name: "Floor Cleaner – Lavender",
		cat: "floor",
		desc: "Concentrated, streak-free cleaner with long-lasting fragrance.",
		size: "500ml · 1L · 5L"
	},
	{
		name: "Floor Cleaner – Lemon",
		cat: "floor",
		desc: "Citrus-fresh formula that cuts grease and grime.",
		size: "500ml · 1L · 5L"
	},
	{
		name: "Marble & Tile Polish",
		cat: "floor",
		desc: "Restores shine to marble, granite and vitrified tiles.",
		size: "1L · 5L"
	},
	{
		name: "Liquid Detergent",
		cat: "laundry",
		desc: "Gentle on fabric, tough on stains. Machine & hand wash.",
		size: "1L · 5L"
	},
	{
		name: "Detergent Powder",
		cat: "laundry",
		desc: "High-foam everyday washing powder for bright clothes.",
		size: "500g · 1kg · 5kg"
	},
	{
		name: "Fabric Conditioner",
		cat: "laundry",
		desc: "Softens fabrics and leaves a lasting fresh scent.",
		size: "1L · 5L"
	},
	{
		name: "Hand Wash – Aloe",
		cat: "hand",
		desc: "Mild, moisturising hand wash enriched with aloe vera.",
		size: "250ml · 5L"
	},
	{
		name: "Hand Wash – Neem",
		cat: "hand",
		desc: "Antibacterial neem formula for everyday protection.",
		size: "250ml · 5L"
	},
	{
		name: "Hand Sanitizer",
		cat: "hand",
		desc: "Alcohol-based quick-dry sanitizer, 70% IPA.",
		size: "100ml · 500ml · 5L"
	},
	{
		name: "Dishwash Liquid",
		cat: "kitchen",
		desc: "Lime-powered liquid that removes grease in seconds.",
		size: "500ml · 1L · 5L"
	},
	{
		name: "Dishwash Gel",
		cat: "kitchen",
		desc: "Thick concentrated gel, a few drops for a full sink.",
		size: "250ml · 1L"
	},
	{
		name: "Kitchen Degreaser",
		cat: "kitchen",
		desc: "Cuts baked-on oil from chimneys, stoves and tiles.",
		size: "500ml · 5L"
	},
	{
		name: "Toilet Cleaner",
		cat: "surface",
		desc: "Thick liquid that kills 99.9% germs and removes stains.",
		size: "500ml · 1L · 5L"
	},
	{
		name: "Bathroom Cleaner",
		cat: "surface",
		desc: "Removes hard-water marks and soap scum effortlessly.",
		size: "500ml · 5L"
	},
	{
		name: "Glass Cleaner",
		cat: "surface",
		desc: "Streak-free shine for glass, mirrors and screens.",
		size: "500ml · 5L"
	},
	{
		name: "Multi-Surface Cleaner",
		cat: "surface",
		desc: "One spray for tables, counters and workstations.",
		size: "500ml · 5L"
	},
	{
		name: "Acid Cleaner",
		cat: "industrial",
		desc: "Heavy-duty descaler for tough industrial deposits.",
		size: "5L · 20L · 50L"
	},
	{
		name: "Air Freshener",
		cat: "industrial",
		desc: "Long-lasting room fresheners for offices and lobbies.",
		size: "250ml · 5L"
	},
	{
		name: "Floor Scrubber Chemical",
		cat: "industrial",
		desc: "Low-foam concentrate for auto scrubbing machines.",
		size: "5L · 20L · 50L"
	},
	{
		name: "Car Wash Shampoo",
		cat: "industrial",
		desc: "pH-balanced foam shampoo safe for paint and glass.",
		size: "1L · 5L · 20L"
	}
];
var services = [
	{
		title: "Floor Cleaning",
		icon: Brush,
		desc: "Deep scrubbing, polishing and restoration for marble, granite, tile and industrial floors."
	},
	{
		title: "Residential Cleaning",
		icon: House,
		desc: "Complete home cleaning — kitchens, bathrooms, living spaces and move-in / move-out."
	},
	{
		title: "Commercial Building Cleaning",
		icon: BuildingComplex,
		desc: "Lobbies, corridors, facades and common areas kept spotless for tenants and visitors."
	},
	{
		title: "Office Cleaning",
		icon: Briefcase,
		desc: "Daily, weekly or one-time housekeeping for workstations, cabins and washrooms."
	},
	{
		title: "Maintenance Solutions",
		icon: Layers,
		desc: "Annual maintenance contracts with trained staff, our own chemicals and equipment."
	}
];
var reasons = [
	{
		title: "20+ Products",
		icon: Layers,
		desc: "A complete range for every surface and every space."
	},
	{
		title: "Quality Manufacturing",
		icon: Award,
		desc: "Tested formulations made in our own facility."
	},
	{
		title: "Reliable Services",
		icon: ShieldCheck,
		desc: "Trained crews who show up on time, every time."
	},
	{
		title: "Professional Approach",
		icon: Users,
		desc: "Clear scopes, uniformed staff and accountable supervision."
	},
	{
		title: "Competitive Pricing",
		icon: BadgeIndianRupee,
		desc: "Factory-direct prices for retail and bulk orders."
	},
	{
		title: "Customer Satisfaction",
		icon: HeartHandshake,
		desc: "Long-term relationships built on consistent results."
	}
];
//#endregion
export { services as a, reasons as i, contact as n, waLink as o, products as r, categories as t };

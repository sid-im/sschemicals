globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-11-08T07:35:57.753Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/assets/PageHero-D6T75KgH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"377-3/8aPQaSe1Sw/w6I80OtYCUwVRI\"",
		"mtime": "2026-11-08T07:35:57.619Z",
		"size": 887,
		"path": "../public/assets/PageHero-D6T75KgH.js"
	},
	"/assets/CtaBand-CHNtGoI-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"671-gXo47KfaTm07dE4YJYdRl/kaFa8\"",
		"mtime": "2026-11-08T07:35:57.619Z",
		"size": 1649,
		"path": "../public/assets/CtaBand-CHNtGoI-.js"
	},
	"/assets/Reveal-DB65bcey.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b8-++FLz0xghCxrshu1qw+5Zmffc68\"",
		"mtime": "2026-11-08T07:35:57.619Z",
		"size": 696,
		"path": "../public/assets/Reveal-DB65bcey.js"
	},
	"/assets/about-Ctbed6Ad.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1039-8J+5dz6xP88Ml+Ke7YtRN0QYbYY\"",
		"mtime": "2026-11-08T07:35:57.619Z",
		"size": 4153,
		"path": "../public/assets/about-Ctbed6Ad.js"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-11-08T07:35:57.753Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/assets/circle-check-Cy9Rhupf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-ruxPylL+jcKG91S3X8pFDQasarc\"",
		"mtime": "2026-11-08T07:35:57.619Z",
		"size": 239,
		"path": "../public/assets/circle-check-Cy9Rhupf.js"
	},
	"/assets/contact-lakHVS-X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"196c-B62aGRTI3NPw+n8xR82PHbAvYJI\"",
		"mtime": "2026-11-08T07:35:57.619Z",
		"size": 6508,
		"path": "../public/assets/contact-lakHVS-X.js"
	},
	"/assets/manufacturing-CyHiOvL-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-wXzdGw7JT99tI1OundiJEAu/qaI\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 58,
		"path": "../public/assets/manufacturing-CyHiOvL-.js"
	},
	"/assets/routes-Fr0QYqvF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ded-4fY4ff30+hSWv/dFt8aBvJyCGqg\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 19949,
		"path": "../public/assets/routes-Fr0QYqvF.js"
	},
	"/assets/services-cleaning-TaUqc7h2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e-bBJs7VqoO8bviBYvS7mIy4K9tHo\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 62,
		"path": "../public/assets/services-cleaning-TaUqc7h2.js"
	},
	"/assets/services-DYgKWsPp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ace-KSAay3Dnz5ZdXKtiMMMoe3TZu58\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 2766,
		"path": "../public/assets/services-DYgKWsPp.js"
	},
	"/assets/styles-BbOcmiQz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15ad3-T022u0qY6JZ1PP4xiNqnWBf0QKs\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 88787,
		"path": "../public/assets/styles-BbOcmiQz.css"
	},
	"/assets/products-Bf3ie66d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5d-JMyUJpWlUo4TxVZiMzk2hKnZMdo\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 3421,
		"path": "../public/assets/products-Bf3ie66d.js"
	},
	"/assets/index-CclKpyYR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82b5d-5Y5bhzYZwxf56dsUFz8FTU8ibrQ\"",
		"mtime": "2026-11-08T07:35:57.619Z",
		"size": 535389,
		"path": "../public/assets/index-CclKpyYR.js"
	},
	"/assets/manufacturing-BOGBlkyS.png": {
		"type": "image/png",
		"etag": "\"1ead27-+pDhtnZazYeGlYVivHen78FdtVY\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 2010407,
		"path": "../public/assets/manufacturing-BOGBlkyS.png"
	},
	"/assets/services-cleaning-inX2Diro.png": {
		"type": "image/png",
		"etag": "\"1a7373-nH6MIviLAkD+oSkHKeQZGH38oeE\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 1733491,
		"path": "../public/assets/services-cleaning-inX2Diro.png"
	},
	"/assets/hero-products-DnOOz7s2.png": {
		"type": "image/png",
		"etag": "\"233792-lf7yBLFWkcS7TrEN7kMjsWQWqUU\"",
		"mtime": "2026-11-08T07:35:57.620Z",
		"size": 2307986,
		"path": "../public/assets/hero-products-DnOOz7s2.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_C9V4NR = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_C9V4NR
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

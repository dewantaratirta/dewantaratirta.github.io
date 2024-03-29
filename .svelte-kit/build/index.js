
import root from '__GENERATED__/root.svelte';
import { respond } from '../../node_modules/@sveltejs/kit/src/runtime/server/index.js';
import { set_paths, assets, base } from '../../node_modules/@sveltejs/kit/src/runtime/paths.js';
import { set_prerendering } from '../../node_modules/@sveltejs/kit/src/runtime/env.js';
import { set_private_env } from '../../node_modules/@sveltejs/kit/src/runtime/env-private.js';
import { set_public_env } from '../../node_modules/@sveltejs/kit/src/runtime/env-public.js';

const app_template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\r\n<html lang=\"en\" data-theme=\"dark\">\r\n\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<link rel=\"icon\" href=\"" + assets + "/favicon.ico\" />\r\n\t<link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"" + assets + "/apple-icon-57x57.png\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"" + assets + "/apple-icon-60x60.png\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"" + assets + "/apple-icon-72x72.png\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"" + assets + "/apple-icon-76x76.png\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"" + assets + "/apple-icon-114x114.png\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"" + assets + "/apple-icon-120x120.png\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"" + assets + "/apple-icon-144x144.png\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"" + assets + "/apple-icon-152x152.png\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + assets + "/apple-icon-180x180.png\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"" + assets + "/android-icon-192x192.png\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + assets + "/favicon-32x32.png\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"" + assets + "/favicon-96x96.png\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + assets + "/favicon-16x16.png\">\r\n\t<link rel=\"manifest\" href=\"" + assets + "/manifest.json\">\r\n\t<meta name=\"msapplication-TileColor\" content=\"#ffffff\">\r\n\t<meta name=\"msapplication-TileImage\" content=\"/ms-icon-144x144.png\">\r\n\t<meta name=\"theme-color\" content=\"#ffffff\">\r\n\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t<link rel=\"stylesheet\" href=\"" + assets + "/assets/css/pico.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"" + assets + "/assets/css/pico-bootstrap-grid.min.css\">\r\n\r\n\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n\t<link\r\n\t\thref=\"https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@300;400;500;700&display=swap\"\r\n\t\trel=\"stylesheet\">\r\n\r\n\t<title>Dewantara Tirta</title>\r\n\t<!-- <link rel=\"stylesheet\" href=\"app.css\"> -->\r\n\t" + head + "\r\n</head>\r\n\r\n<body>\r\n\t<div>" + body + "</div>\r\n</body>\r\n\r\n</html>";

const error_template = ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			csrf: {
				check_origin: true,
			},
			dev: false,
			handle_error: (error, event) => {
				return this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				}) ?? { message: 'Internal Error' };
			},
			hooks: null,
			manifest,
			paths: { base, assets },
			public_env: {},
			read,
			root,
			service_worker: null,
			app_template,
			app_template_contains_nonce: false,
			error_template,
			trailing_slash: "never"
		};
	}

	/**
	 * Take care: Some adapters may have to call `Server.init` per-request to set env vars,
	 * so anything that shouldn't be rerun should be wrapped in an `if` block to make sure it hasn't
	 * been done already.
	 */
	async init({ env }) {
		const entries = Object.entries(env);

		const prv = Object.fromEntries(entries.filter(([k]) => !k.startsWith('PUBLIC_')));

		const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith('PUBLIC_')));

		set_private_env(prv);
		set_public_env(pub);

		this.options.public_env = pub;

		if (!this.options.hooks) {
			const module = await import("..\\..\\src\\hooks.server.js");

			// TODO remove this for 1.0
			if (module.externalFetch) {
				throw new Error('externalFetch has been removed — use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details');
			}

			this.options.hooks = {
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				handleFetch: module.handleFetch || (({ request, fetch }) => fetch(request))
			};
		}
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}

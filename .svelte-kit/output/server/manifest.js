export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","assets/css/pico-bootstrap-grid.min.css","assets/css/pico.min.css","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","img/pp.webp","manifest.json","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png","portfolio/eduka1.png","portfolio/eduka2.jpg","portfolio/infest-inkubasi.png","portfolio/infest_2.png","portfolio/placeholder.webp","portfolio/sapa-budaya.jpg","portfolio/sb_2.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".webp":"image/webp",".json":"application/json",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-2fadab07.js","imports":["_app/immutable/start-2fadab07.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-4ed68ad2.js","_app/immutable/chunks/singletons-b3ebd2c7.js","_app/immutable/chunks/index-990a9927.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "asd",
				pattern: /^\/asd\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/asd/_server.js')
			},
			{
				id: "asd/all_post",
				pattern: /^\/asd\/all_post\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/asd/all_post/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

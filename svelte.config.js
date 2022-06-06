import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';
import {
	mdsvex
} from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'dist',
			assets: 'dist',
			fallback: null
		}),
		// paths: {
		// 	base: dev ? '' : '/dewantaratirta',
		// },
		alias: {
			$components: 'src/components',
			$utils: 'src/utils'
		},
		methodOverride: {
			allowed: ['POST']
		},
		trailingSlash: 'always',
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	},

	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: {
				project: 'src/routes/project/_post.svelte'
			}
		}),
	],
};

export default config;
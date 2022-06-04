import adapter from '@sveltejs/adapter-static';
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

		alias: {
			$components: 'src/components',
			$utils: 'src/utils'
		},
		methodOverride: {
			allowed: ['POST']
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
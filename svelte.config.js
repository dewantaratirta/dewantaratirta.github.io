import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

// const dev = process.env.NODE_ENV === "development";
// console.log(dev);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: 'index.html',
      precompress: false,
    }),
    // trailingSlash: 'always',
    // paths: {
    //   base: dev ? "" : "/dewantaratirta",
    // },
    // hydrate the <div id="svelte"> element in src/app.html
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    preprocess({
      // postcss: {
      // 	plugins: [autoprefixer]
      // },
      /* Other sveltePreprocess options here, like SCSS */
    }),
    mdsvex({
      extensions: ['.md']
    })
  ]
};

export default config;

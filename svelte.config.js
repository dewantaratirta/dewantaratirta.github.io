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
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    preprocess({
    }),
    mdsvex({
      extensions: ['.md'],
      layout: {
        basemd: "./src/lib/components/portfolio/layout.svelte"
      }
    })
  ]
};

export default config;

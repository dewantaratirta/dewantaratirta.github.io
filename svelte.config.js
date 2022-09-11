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
    }),
    // paths: {
    //   base: dev ? "" : "/dewantaratirta",
    // },
    // hydrate the <div id="svelte"> element in src/app.html
  },
};

export default config;

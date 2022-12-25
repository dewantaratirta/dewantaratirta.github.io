import { c as create_ssr_component } from "./index.js";
const layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".md.svelte-1mauutx h1,.md.svelte-1mauutx h2,.md.svelte-1mauutx h3,.md.svelte-1mauutx h4,.md.svelte-1mauutx h5,.md.svelte-1mauutx h6,.md.svelte-1mauutx p{margin-bottom:1rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<div class="${"container md svelte-1mauutx"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as L
};

import { c as create_ssr_component, v as validate_component } from "./index.js";
import { L as Layout } from "./layout.js";
const metadata = {
  "title": "Eduka5eks",
  "date": "2018-11-15",
  "description": "Interactive Quiz",
  "slug": "eduka5eks",
  "header_image": "eduka1.png",
  "link": false,
  "layout": "basemd"
};
const Eduka5eks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h1>Eduka5eks</h1>
<p>Interactive desktop quiz app that makes educational material more fun and engaging.</p>
<p><img src="${"/portfolio/eduka2.jpg"}" alt="${"alt text"}" title="${"Eduka5eks"}"></p>`;
    }
  })}`;
});
export {
  Eduka5eks as default,
  metadata
};

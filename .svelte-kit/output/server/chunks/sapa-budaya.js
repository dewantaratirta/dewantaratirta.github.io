import { c as create_ssr_component, v as validate_component } from "./index.js";
import { L as Layout } from "./layout.js";
const metadata = {
  "title": "Sapa Budaya",
  "date": "2021-12-15",
  "description": "Social media apps for local community",
  "slug": "sapa-budaya",
  "header_image": "sapa-budaya.jpg",
  "link": "http://sapabudaya.jogjakota.go.id/",
  "layout": "basemd"
};
const Sapa_budaya = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p><img src="${"/portfolio/sapa-budaya.jpg"}" alt="${"alt text"}" title="${"Title"}"></p>
<h1>Hello world</h1>
<p>Hello, I am <em>Post One.</em></p>
<p><strong>Nice to meet you!</strong></p>`;
    }
  })}`;
});
export {
  Sapa_budaya as default,
  metadata
};

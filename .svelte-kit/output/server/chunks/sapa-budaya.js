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
      return `<h1>Sapabudaya</h1>
<p>Sapabudaya is a local social network to share knowledge, experience and culture to broaden the knowledge of Indonesian people.</p>
<p>Through this application, we can get to know and connect with the local community in our area.</p>
<p><img src="${"/portfolio/sb_2.png"}" alt="${"alt text"}" title="${"SapaBudaya"}"></p>
<p><img src="${"/portfolio/sapa-budaya.jpg"}" alt="${"alt text"}" title="${"SapaBudaya"}"></p>`;
    }
  })}`;
});
export {
  Sapa_budaya as default,
  metadata
};

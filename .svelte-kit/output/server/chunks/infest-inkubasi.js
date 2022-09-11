import { c as create_ssr_component, v as validate_component } from "./index.js";
import { L as Layout } from "./layout.js";
const metadata = {
  "title": "Infest Inkubasi",
  "date": "2021-11-15",
  "description": "Develop a website for online activation events. with features such as: registration, ticketing, winner announcement, online vote, streaming and chat",
  "slug": "infest-inkubasi",
  "header_image": false,
  "link": false,
  "layout": "basemd"
};
const Infest_inkubasi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h1>Infest Inkubasi</h1>
<p>infest inkubasi halo 123</p>`;
    }
  })}`;
});
export {
  Infest_inkubasi as default,
  metadata
};

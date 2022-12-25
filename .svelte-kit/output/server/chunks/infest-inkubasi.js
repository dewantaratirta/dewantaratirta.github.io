import { c as create_ssr_component, v as validate_component } from "./index.js";
import { L as Layout } from "./layout.js";
/* empty css                                            */const metadata = {
  "title": "Infest Inkubasi",
  "date": "2021-11-15",
  "description": "Web based online event",
  "slug": "infest-inkubasi",
  "header_image": "infest-inkubasi.png",
  "link": false,
  "layout": "basemd"
};
const Infest_inkubasi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h1>InFest Inkubasi</h1>

<p>InFest Inkubasi is an annual competition for young Indonesians to showcase their talents. It\u2019s a celebration of youth and ideas, bringing together the brightest and most innovative minds from all over Indonesia.</p>
<p><img src="${"/portfolio/infest_2.png"}" alt="${"alt text"}" title="${"Infest Inkubasi"}">
<img src="${"/portfolio/infest-inkubasi.png"}" alt="${"alt text"}" title="${"Infest Inkubasi"}"></p>`;
    }
  })}`;
});
export {
  Infest_inkubasi as default,
  metadata
};

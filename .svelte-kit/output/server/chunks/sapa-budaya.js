import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Sapa Budaya",
  "date": "2021-12-15",
  "description": "Social media apps for local community",
  "slug": "sapa-budaya",
  "header_image": "sapa-budaya.jpg",
  "link": "http://sapabudaya.jogjakota.go.id/"
};
const Sapa_budaya = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Hello world</h1>
<p>Hello, I am <em>Post One.</em></p>
<p><strong>Nice to meet you!</strong></p>
<h1>Hello world</h1>`;
});
export {
  Sapa_budaya as default,
  metadata
};

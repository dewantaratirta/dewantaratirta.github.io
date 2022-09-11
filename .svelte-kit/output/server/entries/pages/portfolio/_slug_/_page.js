import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../adira-finance.md": () => import("../../../../chunks/adira-finance.js"), "../infest-inkubasi.md": () => import("../../../../chunks/infest-inkubasi.js"), "../sapa-budaya.md": () => import("../../../../chunks/sapa-budaya.js") }), `../${params.slug}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
}
export {
  load
};

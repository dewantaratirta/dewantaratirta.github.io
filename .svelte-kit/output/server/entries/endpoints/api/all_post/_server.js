async function GET({ url }) {
  const hostUrl = url.protocol + "//" + url.host + "/";
  const allPostFiles = /* @__PURE__ */ Object.assign({ "../../../lib/portfolio/adira-finance.md": () => import("../../../../chunks/adira-finance.js"), "../../../lib/portfolio/eduka5eks.md": () => import("../../../../chunks/eduka5eks.js"), "../../../lib/portfolio/infest-inkubasi.md": () => import("../../../../chunks/infest-inkubasi.js"), "../../../lib/portfolio/sapa-budaya.md": () => import("../../../../chunks/sapa-budaya.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const imgFolder = hostUrl + "portfolio/";
  let defaultImage = imgFolder + "placeholder.webp";
  let allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      let { metadata } = await resolver();
      let postSlug = path.split("/").pop().slice(0, -3);
      let meta = metadata;
      if (metadata.header_image == false) {
        meta.header_image = defaultImage;
      } else {
        if (!meta.header_image.includes(imgFolder)) {
          meta.header_image = imgFolder + meta.header_image;
        }
      }
      return {
        meta,
        slug: postSlug
      };
    })
  );
  const sortedPosts = await allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return new Response(String(JSON.stringify(sortedPosts)));
}
export {
  GET
};

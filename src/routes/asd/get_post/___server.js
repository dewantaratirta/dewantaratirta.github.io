// export async function GET(data) {
//     let {url} = data;
//     let params = data.url.searchParams;
//     let slug = params.get('slug') ?? null;
//     const hostUrl = url.protocol + '//' + url.host + '/';


//     // const post = import(`../../../lib/portfolio/${slug}.md`);
//     const allPostFiles = import.meta.glob("../../../lib/portfolio/*.md");
//     const iterablePostFiles = Object.entries(allPostFiles);
  
//     const imgFolder = hostUrl + "portfolio/";
//     let defaultImage = imgFolder + "placeholder.webp";
  
//     let allPosts = await Promise.all(
//       iterablePostFiles.map(async ([path, resolver]) => {
//         let { metadata } = await resolver();
//         let postSlug = path.split("/").pop().slice(0, -3);
  
//         let meta = metadata;
//         // set default image
//         if (metadata.header_image == false) {
//           meta.header_image = defaultImage;
//         }
//     );

//   return new Response(String(slug));
// }

// const allPostFiles = import.meta.glob("$portfolio/*.md");
const allPostFiles = import.meta.glob("../../portfolio/*.md");
const iterablePostFiles = Object.entries(allPostFiles);

const imgFolder = './portfolio/';
export let defaultImage = imgFolder + "placeholder.webp";


/**
 * Get data markdown
 */
export const getAllMetadata = async () => {

    let allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            let { metadata } = await resolver();
            let postSlug = path.split("/").pop().slice(0, -3);


            let meta = metadata;
            // set default image
            if (metadata.header_image == false) {
                meta.header_image = defaultImage;
            } else {
                if (!meta.header_image.includes(imgFolder)) {
                    meta.header_image = imgFolder + meta.header_image;
                }
            }


            return {
                meta: meta,
                slug: postSlug,
            };
        })
    );

    const sortedPosts = await allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

    return sortedPosts;
};

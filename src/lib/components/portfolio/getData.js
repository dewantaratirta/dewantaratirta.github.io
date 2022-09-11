import { getAllContexts, onMount } from "svelte";

const allPostFiles = import.meta.glob("$portfolio/*.md");
const iterablePostFiles = Object.entries(allPostFiles);

export let defaultImage = './img/placeholder.webp';


/**
 * Get data markdown
 */
export const getAllMetadata = async () => {

    let allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            let { metadata } = await resolver();
            let postSlug = path.split("/").pop().slice(0, -3);

            // set default image
            metadata.header_image = !metadata.header_image
                ? defaultImage
                : './portfolio/' + metadata.header_image;

            return {
                meta: metadata,
                slug: postSlug,
            };
        })
    );

    const sortedPosts = await allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

    return sortedPosts;
};

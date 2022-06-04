import {
    makeUrl,
    generateSlug
} from "$lib/markdown_resolver";

export const get = async () => {
    const allPostFiles =
        import.meta.glob('../project/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const {
                metadata
            } = await resolver()
            const postPath = path.slice(2, -3);

            // generate slug from title
            metadata.slug = generateSlug(metadata.title);

            return {
                meta: metadata,
                path: postPath,
                url: makeUrl(generateSlug(metadata.title))
            }
        })
    )

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return {
        body: allPosts
    }
}
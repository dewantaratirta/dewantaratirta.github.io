<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  const allPostFiles = import.meta.glob("../../routes/project/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  let posts = [];

  onMount(async () => {
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        let postSlug = path.split('/').pop().slice(0,-3);

        return {
          meta: metadata,
          slug: postSlug,
        };
      })
    );

    const sortedPosts = await allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date);
    });

    posts = sortedPosts;
  });
</script>


<div class="px-0 md:px-4">
  <h1 class="font-chivo text-2xl mb-0.5 mt-2">Projects</h1>
  {#each posts as post}
  <a sveltekit:prefetch href="project/{post.slug}">
    <img src={post.meta.header_image} alt="">
    <h1>{post.meta.title}</h1>
  </a>
  {/each}
</div>


<style>
  img{
      filter: contrast(0.4) opacity(.8) sepia(1);
      transition: filter 2s;
  }
  img:hover{
      filter:none;
  }
</style>
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  const allPostFiles = import.meta.glob("../../routes/project/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  let posts = [];

  const gridColumn = (v) => {
    let mod = (v + 1) % 2;
    if (mod == 1) {
      return 1;
    }
    return 2;
  };

  const gridRow = (v) => {
    return v + 1;
  };

  onMount(async () => {
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        let postSlug = path.split("/").pop().slice(0, -3);

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

<div class="pb-5 relative">
  <h1 class="font-chivo text-2xl mb-0.5 mt-0">Projects</h1>

  <div
    class="post-wrapper"
    style="grid-template-rows: repeat({posts.length}, 1fr);"
  >
    {#each posts as post, i}
      <a
        sveltekit:prefetch
        href="project/{post.slug}"
        style="grid-column-start:{gridColumn(i)}; grid-row-start:{gridRow(i)}"
        class="link"
      >
        {#if post.meta.hasOwnProperty("header_image")}
          <img src={post.meta.header_image} alt="" />
        {/if}
        <h1 class="thumbnail-title text-xs md:text-lg">{post.meta.title}</h1>
      </a>
    {/each}
  </div>

</div>

<style lang="postcss">
  img {
    filter: contrast(0.4) opacity(0.8) sepia(1);
    transition: filter 2s;
  }
  img:hover {
    filter: none;
  }

  .post-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: center;
    grid-column-gap: 1rem;
    z-index: 2;
  }
  
  .post-wrapper a{
    max-height:350px;
    overflow: hidden;
  }

  /* posts */
  a.link {
    position: relative;
  }

  .thumbnail-title {
    @apply font-mono font-bold;
    position: absolute;
    bottom: 1em;
    left: 1em;
    padding:0.5em;
    border:1px solid var(--text-primary);
    background: var(--background);
    box-shadow: -0.5em 0.5em var(--text-primary);
    transition: box-shadow 300ms linear;
  }

  a:hover .thumbnail-title{
    box-shadow: -0.2em 0.2em var(--text-primary);
  }

</style>

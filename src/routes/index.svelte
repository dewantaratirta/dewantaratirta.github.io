<script context="module">
  export const prerender = true;
  import { theme } from "$lib/stores.js";
</script>

<svelte:head>
  <title>dewantaratirta.github.io</title>
</svelte:head>

<section id="main">
  <div class="main-image"><img src="./img-candi.jpg" alt="" /></div>
</section>

<style lang="scss">
  #main {
    margin-top: 10px;
    border-top: 1px solid var(--text-primary);
  }
  .main-image {
    padding: 10px;
  }
  .main-image img {
    width: 100%;
    height: auto;
    filter: var(--filter-url) blur(0.2px) brightness(1.1) hue-rotate(5deg) opacity(0.9) saturate(1.3) sepia(0.4);
  }
</style>

<script context="module">
  export const prerender = true;
  import Header from "$lib/header/Header.svelte";
  import MainMenu from "../components/index/MainMenu.svelte";
</script>

<svelte:head>
  <title>dewantaratirta.github.io</title>
</svelte:head>

<section id="main" class="flex">
  <div class="h-full">
    <MainMenu />
  </div>
</section>

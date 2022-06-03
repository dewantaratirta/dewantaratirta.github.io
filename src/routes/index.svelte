<script context="module">
  export const prerender = true;
  import MainMenu from "../components/index/MainMenu.svelte";
  import Title from "$lib/Title.svelte";
  import Projects from "../components/index/Projects.svelte";
</script>

<svelte:head>
  <title>dewantara tirta 🐎</title>
</svelte:head>

<section id="main" class="flex">
  <div class="">
    <MainMenu />
  </div>
  <Projects />
</section>

<Title />

<style>
  @media (max-width: 1024px) {
    #main {
      flex-direction: column;
      width: 100%;
    }
  }
  @media (min-width: 1025px) {
    #main {
      height: 100%;
    }
  }
</style>

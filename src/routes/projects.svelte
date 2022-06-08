<script context="module">
  export const prerender = true;
  import Title from "$lib/Title.svelte";
  import Thumbnail from "$components/Project/Thumbnail.svelte";
</script>

<svelte:head>
  <title>dewantara tirta 🐎</title>
</svelte:head>

<div class="d-flex">
    <Thumbnail />
</div>

<Title />

<script>
  import Header from "$lib/header/Header.svelte";
  import { onMount } from "svelte/internal";
  import "../app.css";
</script>

<div id="maincontainer" class="flex flex-col">
  <Header />
  <slot />
</div>

<style>
  #maincontainer {
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
  }
</style>

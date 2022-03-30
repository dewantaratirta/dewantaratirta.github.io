<script>
  import Header from "$lib/header/Header.svelte";
  import { onMount } from "svelte/internal";
  import "../app.css";
</script>

<div id="maincontainer">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style>
  :global(body) {
    max-width: 1700px;
    margin: 10px auto;
    border: 1px solid var(--text-primary);
  }

  :global(body > *:not(:last-child)) {
    border-bottom: 1px solid var(--text-primary);
  }

  @media (max-width: 1699px) {
    :global(body) {
      margin: 10px;
    }
  }
</style>

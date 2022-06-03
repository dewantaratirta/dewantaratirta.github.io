<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  import Cursor from "$lib/cursor/Cursor.svelte";

  // cursor element
  let cursorComponent;
  
</script>

<Cursor bind:this={cursorComponent}/>
<div id="maincontainer" class="flex flex-col" on:mousemove={cursorComponent.mouseMove}>
  <Header />
  <slot />
</div>

<style>
  #maincontainer {
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
  }
</style>

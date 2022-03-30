<script>
  import { page } from "$app/stores";
  import logo from "./svelte-logo.svg";
  import { theme, toggle } from "$lib/stores.js";

  let currentTheme;
  theme.subscribe((v) => {
    return (currentTheme = v);
  });
</script>

<header>
  <!-- <img src={logo} alt="SvelteKit" /> -->
  <!-- <li class:active={$page.url.pathname === "/"}><a sveltekit:prefetch href="/">Home</a></li> -->

  <div class="text-4xl font-bold" id="logo">ꦢꦺꦮꦤ꧀ꦠꦫ</div>
  <div>
    <div id="right" class="text-2xl font-chivo font-bold text-right" on:click={toggle}>
      {#if currentTheme == "light"}
        <span class="opa05">Dark</span>
        <span>/</span>
        <span>Light</span>
      {:else}
        <span>Dark</span>
        <span>/</span>
        <span class="opa05">Light</span>
      {/if}
    </div>
  </div>
</header>

<style>
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  #logo {
    line-height: 0px;
  }
  #right {
    cursor: pointer;
  }
  .opa05 {
    opacity: 0.5;
  }
</style>

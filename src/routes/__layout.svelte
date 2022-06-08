<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  import { onMount } from "svelte";
  import Cursor from "$components/cursor/Cursor.svelte";
  import MainMenu from "$components/index/MainMenu.svelte";
  import CheckMobile from "$lib/utils/CheckMobile";

  // cursor element
  let cursorComponent;

  let menuShow = true;

  const resize = () => {
    if (CheckMobile.isMobile() || CheckMobile.isTablet()) {
      menuShow = false;
      return;
    }

    if (menuShow != true) {
      menuShow = true;
    }
  };

  let click = () => {
    if (!CheckMobile.isMobile() || !CheckMobile.isTablet()) return;
    menuShow = !menuShow;
  };

  onMount(() => {
    resize();
  });

  $: menuShow;
</script>

<Cursor bind:this={cursorComponent} />
<div
  id="maincontainer"
  class="flex flex-col"
  on:mousemove={cursorComponent.mouseMove}
>
  <Header callbackMenuClick={click} />

  <section id="main" class="flex">
    <div class="">
      <MainMenu show={menuShow} />
    </div>
    <div class="content px-0 md:px-4 mt-2">
      <slot />
    </div>
  </section>
</div>

<svelte:window on:resize={resize} />

<style>
  #maincontainer {
    height: 100vh;
  }

  #main {
    height: calc(100vh - 8vh - 10px);
    margin-top: 8vh;
    padding: 0px 10px 10px 10px;
  }
  
  .content{
    width:100%;
  }

  @media (max-width: 1024px) {
    #main {
      flex-direction: column;
      width: 100%;
      overflow-x:hidden;
    }
  }
  @media (min-width: 1025px) {
    .content {
      margin-left:calc(15vw + 10px);
    }
  }
</style>

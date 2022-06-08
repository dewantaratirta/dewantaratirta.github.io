<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  import { onMount } from "svelte";
  import Cursor from "$components/cursor/Cursor.svelte";
  import MainMenu from "$components/index/MainMenu.svelte";
  import CheckMobile from "$lib/utils/CheckMobile";
  import { page } from "$app/stores";
  import GrainBackground from "$components/GrainBackground.svelte";
  import { base } from "$app/paths";

  // cursor element
  let cursorComponent;

  let menuShow = true;

  let pageActive = 1;

  let baseFrequency = 3;

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

  const fractalEffect = () => {
    setTimeout(() => {
      let x = Math.random() * 8;
      x = (x < 1) ? x + Math.random() + 1 : x;
      baseFrequency = x.toPrecision("4");
      fractalEffect();
    }, 333);
  };

  onMount(() => {
    resize();
    fractalEffect();
  });

  page.subscribe((v) => {
    let { routeId } = v;

    console.log("route" + routeId);
    switch (true) {
      case /(project)/.test(routeId):
        pageActive = 2;
        break;

      default:
        pageActive = 1;
        break;
    }
  });

  $: menuShow;
  $: baseFrequency;
</script>

<Cursor bind:this={cursorComponent} />
<div
  id="maincontainer"
  class="flex flex-col"
  on:mousemove={cursorComponent.mouseMove}
>
  <Header callbackMenuClick={click} />

  <section id="main" class="flex" >
    <div class="">
      <MainMenu show={menuShow} active={pageActive} />
    </div>
    <div class="content px-0 md:px-4 mt-2">
      <slot />
    </div>
  </section>
</div>

<!-- grain background -->
<GrainBackground {baseFrequency} />
<!-- grain background -->

<svg id="filterBg">
  <rect x="0" y="0" width="100vw" height="100vh" filter="url(#noise)" />
</svg>
<svelte:window on:resize={resize} />

<style>
  #maincontainer {
    /* height: 100vh; */
  }

  #main {
    /* height: calc(100vh - 8vh - 10px); */
    margin-top: 8vh;
    padding: 0px 10px 10px 10px;
  }

  .content {
    width: 100%;
  }

  @media (max-width: 1024px) {
    #main {
      flex-direction: column;
      width: 100%;
      overflow-x: hidden;
    }
  }
  @media (min-width: 1025px) {
    .content {
      margin-left: calc(15vw + 10px);
    }
  }

  #filterBg {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 100vw;
    height: 100vh;
  }
</style>

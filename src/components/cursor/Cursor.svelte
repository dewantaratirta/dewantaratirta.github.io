<script>
  import { gsap } from "gsap";
  import { onMount, onDestroy } from "svelte";
  import checkMobile from "$lib/utils/CheckMobile";

  // handle mouse effect on/off
  export let effect = false;

  // cursor element
  let cursor, cursor_s;

  let init = false;

  let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0,
    mouse_sX = 0,
    mouse_sY = 0,
    mouseMinus = 25;

  let targetLink = [];

  let isUserTablet = false;
  let lastMoveContainLinks = false;

  export const resize = () => {
    if (checkMobile.isTablet()) {
      isUserTablet = true;
      cursor.style.opacity = "0";
      cursor_s.style.opacity = "0";
      effect = false;
      return;
    }
    isUserTablet = false;
    cursor.style.opacity = "1";
    cursor_s.style.opacity = "1";
    effect = true;
  };

  export const mouseMove = (e) => {
    if (!init) {
      resize();
      init = true;
    }
    if(isUserTablet) return;
    
    mouseX = e.clientX - mouseMinus;
    mouseY = e.clientY - mouseMinus;
    mouse_sX = e.clientX - 5;
    mouse_sY = e.clientY - 5;
    gsap.to("#cursor", { left: mouseX, top: mouseY, duration: 0.6 });
    gsap.to("#cursor_s", { left: mouse_sX, top: mouse_sY, duration: 0.4 });
  };

  const mouseEnter = () => {
    if (isUserTablet) return;
    mouseMinus = 40;
    let cursorOpacity = cursor.style.opacity == "0" ? 0 : 0.5;
    cursor_s.style.opacity = cursorOpacity;
    gsap.to("#cursor", {
      width: "80px",
      height: "80px",
      opacity: cursorOpacity,
      duration: 0.6,
      background: "var(--text-primary)",
    });
  };

  const mouseLeave = () => {
    setTimeout(() => {
      mouseMinus = 25;
      let cursorOpacity = cursor.style.opacity == "0" ? 0 : 1;
      cursor_s.style.opacity = cursorOpacity;
      gsap.to("#cursor", {
        width: "50px",
        height: "50px",
        opacity: cursorOpacity,
        duration: 0.4,
        background: "none",
      });
    }, 333);
  };

  const mouseOver = (e) => {
    let containLinks =
      e.target.classList.contains("link") ||
      e.target.parentElement.classList.contains("link");
    if (containLinks) {
      mouseEnter(e.target.classList);
      mouseEnter(e.target.parentElement.classList);
    } else {
      mouseLeave();
    }
  };
</script>

<div id="cursor" bind:this={cursor} on:mousemove={mouseMove} />
<div id="cursor_s" bind:this={cursor_s} />

<svelte:window on:resize={resize} on:mouseover={mouseOver} />

<!-- </div> -->
<style>
  #cursor {
    position: fixed;
    top: 0px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) background-color width
      height;
    z-index: 1000;
    width: 50px;
    height: 50px;
    border: 1px solid var(--text-primary);
    pointer-events: none;
    border-radius: 50em;
    opacity: 0;
  }

  #cursor_s {
    position: fixed;
    top: 0px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform;
    z-index: 1000;
    width: 10px;
    height: 10px;
    pointer-events: none;
    border-radius: 50em;
    background-color: var(--text-primary);
    opacity: 0;
  }
</style>

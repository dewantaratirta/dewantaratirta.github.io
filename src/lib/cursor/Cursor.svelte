<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    var cursor = window.document.getElementById("cursor");
    var posX = 0,
      posY = 0;
    var mouseX = 0,
      mouseY = 0,
      mouse_sX = 0,
      mouse_sY = 0,
      mouseMinus = 25;

    window.document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX - mouseMinus;
      mouseY = e.clientY - mouseMinus;
      mouse_sX = e.clientX - 5;
      mouse_sY = e.clientY - 5;

      gsap.to("#cursor", { left: mouseX, top: mouseY, duration: 0.6 });
      gsap.to("#cursor_s", { left: mouse_sX, top: mouse_sY, duration: 0.4 });
    });

    let b = window.document.querySelectorAll(".link");
    Array.from(b).forEach((v) => {
      v.addEventListener("mouseenter", (e) => {
        mouseMinus = 40;
        gsap.to("#cursor", { width: "80px", height: "80px", opacity: 0.5, duration: 0.6, background: "var(--text-primary)" });
      });
      v.addEventListener("mouseleave", (e) => {
        mouseMinus = 25;
        gsap.to("#cursor", { width: "50px", height: "50px", opacity: 1, duration: 0.4, background: "none" });
      });
    });
  });
</script>

<!-- <div id="cursor-area"> -->
<!-- <svg class="cursor" id="cursor" width="20" height="20" style="opacity: 1;">
  <circle class="cursor__inner" fill="var(--text-primary)" cx="10" cy="10" r="5" />
</svg> -->
<div id="cursor" />
<div id="cursor_s" />

<!-- </div> -->
<style>
  #cursor {
    position: fixed;
    top: 0px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) background-color width height;
    z-index: 1000;
    width: 50px;
    height: 50px;
    border: 1px solid var(--text-primary);
    pointer-events: none;
    border-radius: 50em;
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
  }
</style>

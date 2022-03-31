<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    var cursor = window.document.getElementById("cursor");
    var posX = 0,
      posY = 0;
    var mouseX = 0,
      mouseY = 0;

    window.document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX - 5;
      mouseY = e.clientY - 10;
      gsap.to("#cursor", { left: mouseX, top: mouseY, duration: 0.4 });
    });
  });
</script>

<!-- <div id="cursor-area"> -->
<svg class="cursor" id="cursor" width="20" height="20" style="opacity: 1;">
  <circle class="cursor__inner" fill="var(--text-primary)" cx="10" cy="10" r="5" />
</svg>

<!-- </div> -->
<style>
  #cursor {
    opacity: 1;
    position: fixed;
    top: 0px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform, 0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
    z-index: 1000;
    pointer-events: none;
  }
</style>

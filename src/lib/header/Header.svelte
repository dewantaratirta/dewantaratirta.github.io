<script>
  import gsap from "gsap";
  import { onMount } from "svelte";

</script>

<div id="header">
  
  <div id="logo-container">
    <svg width="1" height="1" xmlns="http://www.w3.org/2000/svg" id="f">
      <filter id="blurMe">
        <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" result="warp" />
        <feOffset dx="0" dy="0" result="warpOffset" />
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
      </filter>
    </svg>

    <a href="/">
      <h3 class="font-black font-mono">Dewantara<br>Tirta</h3>
    </a>

  </div>
  <div class="flex justify-center items-center">
    <div id="right" class="link">
      <svg width="60" viewBox="0 0 700 700" fill="var(--text-primary)" xmlns="http://www.w3.org/2000/svg">
        <path d="M349.07 248.8C293.402 248.804 248.27 203.675 248.27 148C248.27 203.668 203.141 248.8 147.47 248.8C203.138 248.796 248.27 293.925 248.27 349.6C248.27 293.928 293.399 248.8 349.07 248.8V248.8Z" fill="var(--text-primary)" />
        <path d="M449.86 349.6C449.86 293.932 494.989 248.8 550.66 248.8C494.992 248.804 449.86 203.675 449.86 148C449.86 203.668 404.731 248.8 349.06 248.8C404.732 248.792 449.86 293.925 449.86 349.6V349.6Z" fill="var(--text-primary)" />
        <path d="M248.27 349.6C248.27 405.268 203.141 450.4 147.47 450.4C203.138 450.396 248.27 495.525 248.27 551.2C248.27 495.532 293.399 450.4 349.07 450.4C293.398 450.404 248.27 405.271 248.27 349.6V349.6Z" fill="var(--text-primary)" />
        <path d="M449.86 349.6C449.86 405.268 404.731 450.4 349.06 450.4C404.728 450.396 449.86 495.525 449.86 551.2C449.86 495.532 494.989 450.4 550.66 450.4C494.992 450.404 449.86 405.271 449.86 349.6V349.6Z" fill="var(--text-primary)" />
      </svg>
    </div>
  </div>
</div>

<style>
  div#header {
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
  #logo-container {
    position: relative;
  }
  #f {
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>

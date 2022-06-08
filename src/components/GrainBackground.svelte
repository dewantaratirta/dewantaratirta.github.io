<script>
    export let idFilter = "noise";
    export let baseFrequency = 3.13;
    export let numOctaves = 1;
</script>

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" id="svg">
  <filter id={idFilter}>
    <feTurbulence
      type="fractalNoise"
      baseFrequency="{baseFrequency}"
      numOctaves="{numOctaves}"
      stitchTiles="stitch"
    />
  </filter>
</svg>

<style>
    #svg{
        width:100px;
        height:100px;
    }
</style>
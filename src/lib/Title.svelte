<script>
  import { onMount } from "svelte";

  onMount(() => {
    let title = window.document.querySelector("title");

    function walkingTitle(step = 10) {
      let words = "dewantara tirta";
      let space = " ";

      for (let i = 0; i <= step; i++) {
        space += "_";
      }
      let newtitle = words + space + "🐎";
      title.innerHTML = newtitle;

      setTimeout(() => {
        let s = step + 1 == 0 ? 10 : step - 1;
        walkingTitle(s);
      }, 1000);
    }
    walkingTitle();
  });
</script>

<svelte:head>
  <title>dewantara tirta 🐎</title>
</svelte:head>

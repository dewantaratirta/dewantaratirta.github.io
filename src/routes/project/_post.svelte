<script>
import MainMenu from "$components/index/MainMenu.svelte";
export let title;
export let date;
export let header_image;

</script>

<section id="main" class="flex">
  <div class="">
    <MainMenu />
  </div>
  <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <img src="/{header_image}" alt="">

      <div class="prose prose-sm">
          <slot/>
      </div>

  </div>
</section>


<style>
    @media (max-width: 1024px) {
      #main {
        flex-direction: column;
        width: 100%;
      }
    }
    @media (min-width: 1025px) {
      #main {
        height: 100%;
      }
    }

    h1{
        color:red;
    }
  </style>
  
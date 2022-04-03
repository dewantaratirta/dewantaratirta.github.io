<script>
</script>

<div class="border-r h-full pr-4">
  <nav id="menu_left" class="flex flex-col">
    <a sveltekit:prefetch class="link" href="/">PROJECT</a>
    <a sveltekit:prefetch class="link" href="/">PLAYGROUND</a>
  </nav>
</div>

<style type="postcss">
  #menu_left > a {
    @apply font-bold font-chivo text-4xl;
    margin-right: 20px;
    padding: 6px 0px;
  }

  @media (max-width: 1024px) {
    #menu_left a {
      font-size: 4vmin;
    }
  }
</style>

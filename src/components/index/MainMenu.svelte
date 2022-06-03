<script>
</script>

<div id="menu-container" class="h-full d-flex flex flex-col md:justify-between">
  <div id="tab_1" class="pr-4">
    <h2 id="dir">Directory</h2>
    <nav id="menu_left" class="flex flex-col">
      <ol>
        <li>
          <a sveltekit:prefetch class="link" href="/">Project</a>
        </li>
        <li>
          <a sveltekit:prefetch class="link" href="/">Playground</a>
        </li>
      </ol>
    </nav>
  </div>
  
  
  <div id="tab-2" class="pt-4 md:pt-0">
    <p class="font-mono text-xs">Hello, my name is dewantara. I'm fullstack developer. Reach me at</p>
    <p class="font-mono text-xs underline font-bold link"><a href="mailto:dewantara.tirta@gmail.com">dewantara.tirta@gmail.com</a></p>
  </div>
</div>

<style type="postcss">
  #dir {
    @apply font-chivo text-2xl mb-0.5 mt-2;
  }
  #menu_left ol {
    @apply pr-6 pl-8 py-2;
    list-style-type: decimal-leading-zero;
    background-color: var(--text-primary);
  }

  #menu_left ol li a,
  #menu_left ol li::marker {
    color: var(--background);
  }
  #menu_left ol li a:hover {
    border-bottom: 1px solid var(--background);
  }
  #menu_left ol li a.active {
    @apply italic;
  }

  /* MOBILE */
  @media (max-width: 1024px) {
    #menu-container {
      padding-bottom: 4px;
      border-bottom: 1px solid var(--text-primary);
    }
  }

  /* DESKTOP */
  @media (min-width: 1025px) {
    #menu-container {
      width:15vw;
      padding-right: 4px;
      border-right: 1px solid var(--text-primary);
    }
  }
</style>

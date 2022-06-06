<script>
  import { fly } from "svelte/transition";
  // active menu integer by order
  export let active = 1;

  export let show = true;
</script>

{#if show}
  <div
    id="menu-container"
    class="h-full d-flex flex flex-col md:justify-between"

    in:fly|local="{{ y: -50, duration: 2000 }}"
    out:fly|local="{{ y: -50, duration: 400 }}"
  >
    <div id="tab_1" class="pr-0 md:pr-4">
      <h2 id="dir" class="font-chivo text-2xl mb-0.5 mt-2">Directory</h2>
      <nav id="menu_left" class="flex flex-col">
        <ol class="pr0 md:pr-6 pl-8 py-2">
          <li>
            <a class="link {active == 1 ? 'active' : ''}" href="/">Projects</a>
          </li>
          <li>
            <a
              sveltekit:prefetch
              class="link {active == 2 ? 'active' : ''}"
              href="/">Playground</a
            >
          </li>
        </ol>
      </nav>
    </div>

    <div id="tab-2" class="pt-4 md:pt-0 pr-0 md:pr-4">
      <p class="font-mono text-xs">
        👋 I'm a software engineer based on Yogyakarta, Indonesia. Specializing
        in building website.
      </p>
      <p class="font-mono text-xs">
        You can reach me on <a
          class="font-mono text-xs underline font-bold link mail"
          href="mailto:dewantara.tirta@gmail.com">dewantara.tirta@gmail.com</a
        >
      </p>
    </div>
  </div>
{/if}

<style type="postcss">
  #menu-container {
  }
  #menu_left ol {
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

  .mail {
    word-break: break-all;
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
      width: 15vw;
      padding-right: 4px;
      border-right: 1px solid var(--text-primary);
    }
  }
</style>

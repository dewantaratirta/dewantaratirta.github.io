<script>
    import { getAllMetadata } from "$components/portfolio/getData";
  import Popup from "$components/portfolio/Popup.svelte";
  import { onMount } from "svelte";

  let popupComp;
  let slug = null;
  var data = [];

    getAllMetadata().then((res) => {
      data = res;
    });

  const popupHandlerEvent = (popupslug) => {
    slug = popupslug;
    popupComp.open(popupslug);
  };

  /**
   * Handle popup event
   * @param e
   */
  const eventHandler = (e) => {
    popupShow = e.detail.show;
    slug = e.detail.slug;
  };

  /**
   * @ HOOK
   */
  // onMount(async () => {
  //   const base_url = window.location.origin + "/";
  //   const api_url = base_url + "api/all_post";
  //   let x = await fetch(api_url)
  //     .then((response) => response.json())
  //     .then((d) => {
  //       data = d;
  //     });
  // });

  let popupShow = 0;
</script>

<Popup show={popupShow} on:popupChange={eventHandler} bind:this={popupComp} />

<div class="tab-container">
  {#if data.length == 0}
    Loading...
  {:else}
    <h6>MY PROJECTS</h6>
    <div class="row-grid">
      {#each data as project}
        <div
          class="project-thumbnail"
          on:click={() => {
            popupHandlerEvent(project.meta.slug);
          }}
        >
          <div
            class="image"
            style={`background-image: url(${project.meta.header_image})`}
          />
          <div class="card-body">
            <h6>{project.meta.title}</h6>
            <p>{project.meta.description}</p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .project-thumbnail {
    border-radius: var(--border-radius);
    box-shadow: var(--card-box-shadow);
    overflow: hidden;
    padding: 0px;
    cursor: pointer;
  }

  .project-thumbnail .card-body {
    padding: 1rem;
  }

  .project-thumbnail .image {
    width: 100%;
    height: 15vmin;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--secondary);
  }

  .project-thumbnail h6 {
    font-size: 0.95em;
    margin-bottom: calc(var(--bs-gutter-x) * 0.5);
  }

  .project-thumbnail p {
    font-size: 0.9em;
  }

  @media (max-width: 767px) {
    .project-thumbnail .image {
      height: 15vmax;
    }
  }

  :globalhtml[data-theme="light"] .project-thumbnail {
    background: radial-gradient(
      circle at top left,
      hsl(205deg, 20%, 94%) 10%,
      #fff 90%
    );
  }

  :globalhtml[data-theme="dark"] .project-thumbnail {
    background: radial-gradient(circle at top left, #18232c 10%, #141e26 90%);
  }
  :globalhtml[data-theme="dark"] .project-thumbnail:hover {
    background: radial-gradient(
      circle at top left,
      hsl(205deg 29% 22%) 10%,
      #1f2d38 90%
    );
  }
</style>

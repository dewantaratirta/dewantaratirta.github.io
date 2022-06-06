<script>
  export let title;
  export let date;
  export let header_image;
</script>

<div>
  <h1>{title}</h1>
  <p>{date}</p>
  <img src="/{header_image}" alt="" />

  <div class="prose prose-sm">
    <slot />
  </div>
</div>

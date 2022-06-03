<script>
  export let title = "";
  export let slug = "";
  export let description = "";
  export let header_image = "";
  export let date;
  export let link = '#';

</script>

<div class="link">
  <a href={link}>
    <img src={header_image} alt="" />
    <h1>{title}</h1>
    <p>{description}</p>
    <!-- {#if typeof(date) != 'undefined'}
            <p>{date}</p>
            {/if} -->

    <hr />
  </a>
</div>


<style>
    img{
        filter: contrast(0.4) opacity(.8) sepia(1);
        transition: filter 2s;
    }
    img:hover{
        filter:none;
    }
</style>
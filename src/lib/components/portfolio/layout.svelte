<script>
    export let title;
</script>

<div class="container md">
    <slot/>
</div>

<style>
 .md :global(h1), 
 .md :global(h2), 
 .md :global(h3), 
 .md :global(h4), 
 .md :global(h5), 
 .md :global(h6),
 .md :global(p)
 {
    margin-bottom: 1rem;
 }
</style>
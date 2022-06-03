<script>
    import {getData} from "./ProjectData";
    import Thumbnail from "./../Project/Thumbnail.svelte";

    let projects = getData();
</script>

<div class="pl-0 md:pl-4 w-full">
    <h1 class="font-chivo text-2xl mb-0.5 mt-2">Projects</h1>
    {#each projects as project}
        <Thumbnail title={project.title} description={project.description} header_image={project.header_image}
         link={project.link}/>
    {/each}
</div>
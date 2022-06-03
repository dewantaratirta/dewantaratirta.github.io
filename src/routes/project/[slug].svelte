<script>
    import { page } from "$app/stores";
    import {getDataBySlug} from "../../components/index/ProjectData";

    let slug = '';
    let project = [];

    page.subscribe( ({params}) => {
        slug = params.slug;
        project = getDataBySlug(slug);
    })
</script>

<h1>{slug}</h1>
{@html JSON.stringify(project)}
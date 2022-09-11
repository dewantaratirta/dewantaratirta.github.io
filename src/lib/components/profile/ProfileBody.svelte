<script>
    import ShowAll from "$components/portfolio/ShowAll.svelte";
</script>

<div class="body">
    <nav>
        <ul>
            <li class="active"><strong>Project</strong></li>
            <li><strong>Resume</strong></li>
            <li><strong>Contact</strong></li>
        </ul>
    </nav>

    <div>
        <ShowAll />
    </div>
</div>

<style>
    .body{
        padding: calc(var(--block-spacing-vertical) * .66) var(--block-spacing-horizontal);
        margin:0px 10px;
    }
    ul li{
        color:var(--secondary);
        border-bottom:4px solid transparent;
        transition: 1s color, 1s border;
        cursor: pointer;
        margin-right: 10px;
    }
    
    ul li:hover:not(.active){
        color:var(--secondary-hover);
        border-bottom:4px solid var(--secondary-hover);
    }
    
    ul li.active{
        color:var(--h3-color);
        border-bottom:4px solid var(--h3-color);
    }
</style>
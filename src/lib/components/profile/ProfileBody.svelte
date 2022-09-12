<script>
    import ShowAll from "$components/portfolio/ShowAll.svelte";
    import { onMount } from "svelte";

    let tab = {
        portfolio: { active: false },
        resume: { active: false },
        contact: { active: false },
    };

    const tabClickHandler = (name) => {
        let key = Object.keys(tab);
        key.forEach((value, index) => {
            if (value == name) {
                tab[value].active = true;
            } else {
                tab[value].active = false;
            }
        });
    };

    onMount(() => {
        tabClickHandler("portfolio");
    });

    $: tab;
</script>

<div class="body">
    <nav>
        <ul>
            <li
                class={tab.portfolio.active ? "active" : ""}
                on:click={() => {
                    tabClickHandler("portfolio");
                }}
            >
                <strong>Portfolio</strong>
            </li>
            <li
                class={tab.resume.active ? "active" : ""}
                on:click={() => {
                    tabClickHandler("resume");
                }}
            >
                <strong>Resume</strong>
            </li>
            <li
                class={tab.contact.active ? "active" : ""}
                on:click={() => {
                    tabClickHandler("contact");
                }}
            >
                <strong>Contact</strong>
            </li>
        </ul>
    </nav>

    <div>
        {#if tab.portfolio.active == true}
            <ShowAll />
        {:else}
            {JSON.stringify(tab)}
        {/if}
    </div>
</div>

<style>
    .body {
        padding: calc(var(--block-spacing-vertical) * 0.66)
            var(--block-spacing-horizontal);
        margin: 0px 10px;
    }
    ul li {
        color: var(--secondary);
        border-bottom: 4px solid transparent;
        transition: 1s color, 1s border;
        cursor: pointer;
        margin-right: 10px;
    }

    ul li:hover:not(.active) {
        color: var(--secondary-hover);
        border-bottom: 4px solid var(--secondary-hover);
    }

    ul li.active {
        color: var(--h3-color);
        border-bottom: 4px solid var(--h3-color);
    }
</style>

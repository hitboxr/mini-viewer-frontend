<script>
    import { sizeTranslator } from "$lib/dictionaries.js";
    import Lightbox from "$components/UI/Lightbox.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    const details = data.miniDetails;

    const altText = details.description ? details.description : details.name;
    const fullSizeName = sizeTranslator[details.size];
</script>

<style>
    .mini-details-page {
        margin-top: 4rem;
    }

    .header {
        text-align: center;
    }

    .size{
        color: var(--color-gray);
    }

    h1 {
        margin-bottom: 1rem;
    }

    h3 {
        color: var(--color-gray);
        margin-top: 0;
    }

    hr {
        margin-bottom: 3rem;
    }
</style>

<svelte:head>
    <title>{details.name}</title>
</svelte:head>

<div class="mini-details-page">
    <div class="header">
        <h1>{details.name}</h1>
        <h3>from pack {details.pack.pack_name}</h3>
        <hr>
    </div>
    <div class="details">
        <p class="size">Size &rarr; {fullSizeName}</p>
        {#if details.description}
            <p>Description: {details.description}</p>
        {/if}
    </div>

    {#if details.mini_images}
        <Lightbox images={details.mini_images}/>
    {:else}
        <div>No images :(</div>
    {/if}

</div>
<script>
    import { sizeTranslator } from "$lib/dictionaries.js";

    /** @type {import('./$types').PageData} */
    export let data;

    const details = data.miniDetails;

    const altText = details.description ? details.description : details.name;
    const fullSizeName = sizeTranslator[details.size];
</script>

<style>
    img {
        width: 50rem;
        max-width: 100%;
    }
</style>

<svelte:head>
    <title>{details.name}</title>
</svelte:head>

<img src="{details.mini_images[0]}" alt="{altText}">
<p>Name: {details.name}</p>
<p>Pack: {details.pack.pack_name}</p>
<p>Description: {details.description}</p>
<p>Size: {fullSizeName}</p>
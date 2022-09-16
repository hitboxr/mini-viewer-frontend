<script>
    import Button from '../../../../components/UI/Button.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    const details = data.miniDetails;

    const altText = details.description ? details.description : details.name;
</script>

<style>
    img {
        width: 50rem;
        max-width: 100%;
    }
</style>

<img src="{details.mini_images[0]}" alt="altText">
<p>Name: {details.name}</p>
<p>Pack: {details.pack.pack_name}</p>
<p>Description: {details.description}</p>
<p>Size: {details.size}</p>
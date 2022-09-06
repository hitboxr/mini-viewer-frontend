<script>
    export let data;

    // long descriptions overflow the card and it looks bad
    $: truncDescription = data.description.length < 85 ? data.description : `${data.description.slice(0,85)}...`
</script>

<style>
    .card {
        flex-grow: 0 0 auto;
        max-width: 16rem;
        max-height: 20rem;

        background-color: rgb(234, 241, 233);
        border: 2px solid var(--color-light-1);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 3px 5px 1px rgb(234, 241, 233);
        color: black;
    }

    .preview-image {
        width: 100%;
        height: 10rem;
    }

    .preview-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 20%;
    }

    h2, p {
        padding: 0 1rem;
    }

    h2 {
        margin: 1rem 0;
        text-transform: capitalize;
    }
</style>

<div class="card">
    <h2>{data.name}</h2>
    <div class="preview-image">
        <img src="{data.imageURL}" alt="{data.description}">
    </div>
    <p>{truncDescription}</p>
</div>
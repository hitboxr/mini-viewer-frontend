<script>
    export let mini;

    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    const id = mini.id;
    const name = mini.name;
    const images = mini.mini_images;
    const dateUpdated = new Date(mini.modified).toLocaleDateString('en-US', dateOptions);
</script>

<style>
    :root {
        --card-border-radius: 1rem;
    }

    .card {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        flex-grow: 0 0 auto;    
        width: 30rem;
        height: 42rem;

        background-color: var(--color-gray-light);
        /* border: 2px solid var(--color-light-1); */
        border-radius: var(--card-border-radius);
        overflow: hidden;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .5);
        color: black;
        overflow: visible;
        transition: all .2s;
    }

    .card:hover,
    .card:focus {
        transform: scale(1.02);
        box-shadow: 0 3px 15px rgba(0, 0, 0, .4);
        cursor: pointer;
    }

    .preview-image {
        flex-shrink: 0;

        border-radius: var(--card-border-radius) var(--card-border-radius) 0px 0px;
        height: 70%;
        overflow: hidden;

        image-rendering: crisp-edges;
    }

    .preview-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 20%;
    }

    .preview-text {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        margin-bottom: 1.6rem;
        padding: 0 1.6rem;
        height: 100%;
    }

    h3 {
        display: inline-block;
        margin-bottom: .8rem;
        width: fit-content;
        padding: .1rem 0;

        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, var(--color-black-matte) 50%);
        background-size: 220%;
        transition: all .4s;
    }

    .card:hover h3,
    .card:focus h3 {
        color: var(--color-gray-light-2);
        background-position: 100%;
        padding: .1rem .5rem;
    }

    p {
        margin: 0;
    }

    .last-updated {
        font-size: 1.2rem;
        color: var(--color-gray);
    }

    .details-link {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>

<div class="card">
    <div class="preview-image">
        {#if images}
            <img src="{images[0]}" alt="{name}">
        {:else}
            <img src="https://via.placeholder.com/300.jpg" alt="A blank placeholder">
        {/if}
    </div>
    <div class="preview-text">
        <h3>{name}</h3>
        <p class="last-updated">Last updated: {dateUpdated}</p>
    </div>
    <a href="/minis/{id}"><span class="details-link"></span></a>
</div>
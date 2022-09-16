<script>
    export let data;

    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    let name = data.name;
    let images = data.mini_images;
    let dateUpdated = new Date(data.modified)
        .toLocaleDateString('en-US', dateOptions);
    let detailsURL = data.url;

    // get a list of the unique images, regardless of file extension
    $: imageNames = images.map((filepath) => filepath.replace(/\.[^/.]+$/, ""))
    $: uniqueImages = [... new Set(imageNames)];
</script>

<style>
    :root {
        --card-border-radius: 1rem;
    }

    .card {
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
        margin-bottom: .8rem;
    }

    p {
        margin: 0;
    }

    .last-updated {
        font-size: 1.2rem;
        color: var(--color-gray);
    }
</style>

<div class="card">
    <div class="preview-image">
        <!-- TODO: Better image handling (what if a mini has no images?) -->
        <img src="{data.mini_images[0]}" alt="{data.name}">
    </div>
    <div class="preview-text">
        <h3>{data.name}</h3>
        <p class="last-updated">Last updated: {dateUpdated}</p>
    </div>
</div>
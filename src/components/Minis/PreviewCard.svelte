<script>
    export let data;

    let name = data.name;
    let images = data.mini_images;
    let dateUpdated = data.modified;
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
        flex-grow: 0 0 auto;
        width: 30rem;
        height: 42rem;

        background-color: rgb(234, 241, 233);
        /* border: 2px solid var(--color-light-1); */
        border-radius: var(--card-border-radius);
        overflow: hidden;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .5);
        color: black;

        overflow: visible;
    }

    .preview-image {
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

    p {
        padding: 0 1rem;
    }
</style>

<div class="card">
    <div class="preview-image">
        <!-- TODO: Better image handling (what if a mini has no images?) -->
        <img src="{data.mini_images[0]}" alt="{data.name}">
    </div>
    <!-- TODO: Either serve description in mini list view or change card format -->
    <p>{data.name}</p>
</div>
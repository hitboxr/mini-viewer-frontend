<script>
    import lookCloserIcon from '$lib/assets/icons/magnifying-glass-50.png';

    // TODO: change data format to include alt text
    export let images = [];  // list of URLs

    let activeImage = images ? images[0] : "";

    function setActiveImage(e) {
        const button = e.currentTarget
        activeImage = button.querySelector('.selector-image').src;
    }
</script>

<style>
    .lightbox {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 95vh;
        padding: 2.5rem;
        border: 1px solid var(--color-gray-light);
        border-radius: 1rem;
        box-shadow: inset 0 0 1rem 2px rgba(0, 0, 0, 0.2);
    }

    img {
        max-height: 100%;
        max-width: 100%;
        border-radius: 1rem;
    }

    .main-image {
        width: 80%;
        min-height: 0;
        margin-right: 2.5rem;
        object-fit: contain;
    }

    .image-selector {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 100%;
        max-height: 100%;
    }

    .image-button {
        position: relative;
        max-width: 20rem;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
        box-sizing: border-box;
    }
    
    .image-button:not(:last-child) {
        margin-bottom: 0.5rem;
    }
    
    .selector-image {
        box-sizing: border-box;
        border: 3px solid transparent;
        transition: all .2s;
    }

    .selected {
        border: 3px solid var(--color-primary);
    }

    .image-button:hover .selector-image {
        filter: brightness(50%);
    }

    .look-closer-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        max-width: 50%;
        filter: invert() brightness(80%);
        opacity: 0;
        transition: all .2s;
    }

    .image-button:hover .look-closer-icon {
        transform: translate(-50%, -50%);
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        .lightbox {
            flex-direction: column;
            padding: 1.5rem;
        }

        .main-image {
            width: 90%;
            margin-bottom: 2rem;
            margin-right: 0;
        }

        .image-selector {
            flex-direction: row;
        }

        .image-button:not(:last-child) {
            margin-bottom: 0;
            margin-right: 0.5rem;
        }
    }
</style>

<div class="lightbox">
    <img class="main-image" src="{activeImage}" alt="">
    <div class="image-selector">
        {#each images as image}
            <button class="image-button" on:click={setActiveImage}>
                <img src="{image}" alt="" class="selector-image" class:selected="{activeImage === image}">
                <img src="{lookCloserIcon}" alt="" class="look-closer-icon">
            </button>
        {/each}
    </div>
</div>
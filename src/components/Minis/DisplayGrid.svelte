<script>
    import PreviewCard from "./PreviewCard.svelte";
    import Button from "../UI/Button.svelte";

    export let minis;

    let numOnPage = 30;
    let currentPage = 0;
    let maxPages = Math.ceil(minis.length / numOnPage);

    $: currentPageStartIndex = currentPage * numOnPage
    $: minisToShow = (currentPageStartIndex + numOnPage) <= minis.length
        ? minis.slice(currentPageStartIndex, currentPageStartIndex + numOnPage)
        : minis.slice(currentPageStartIndex);

    function nextPage() {
        if ((currentPageStartIndex + numOnPage) <= minis.length) {
            currentPage++;
        }
    }

    function previousPage() {
        if (currentPage > 0) {
            currentPage--;
        }
    }
</script>

<style>
    .display-grid {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: stretch;
        align-content: flex-start;
        gap: 2.5rem 2rem;
    }

    .display-grid-controls {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 4rem;
        width: 100%;
    }

    p {
        padding: 0 2rem;
    }
</style>

<div class="display-grid">
    {#each minisToShow as mini (mini.id)}
        <PreviewCard data={mini} />
    {/each}
    <div class="display-grid-controls">
        <button on:click={previousPage}>&larr; Previous page</button>
        <p><strong>Current page: {currentPage + 1}/{maxPages}</strong></p>
        <button on:click={nextPage}>Next page &rarr;</button>
    </div>
</div>
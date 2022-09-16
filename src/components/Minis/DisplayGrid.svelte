<script>
    import PreviewCard from "./PreviewCard.svelte";

    export let minis;
</script>

<style>
    .display-grid {
        display: flex;
        /* flex-direction: row; */
        /* flex-wrap: wrap; */
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: flex-start;
        gap: 2.5rem 2rem;
    }
</style>

<div class="display-grid">
    {#each minis as mini (mini.id)}
        <PreviewCard data={mini} />
    {/each}
</div>
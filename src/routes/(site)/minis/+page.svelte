<script>
    import DisplayGrid from "$components/Minis/DisplayGrid.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<style>
    h1 {
        text-align: center;
    }

    hr {
        margin-bottom: 3rem;
    }
</style>

<svelte:head>
    <title>Minis</title>
</svelte:head>

<div class="minis-display-wrapper">
    <h1>Minis</h1>
    <hr>
    <DisplayGrid minis={data.minis} />
</div>


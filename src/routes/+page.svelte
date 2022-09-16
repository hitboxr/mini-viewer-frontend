<script>
    import Button from "../components/UI/Button.svelte";
</script>

<style>
    header, main {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        font-size: var(--font-size-default);

    }

    header > *, main > * {
        text-align: center;
        flex-grow: 1;
        width: 100%;
    }

    header {
        padding-bottom: 1.2rem;
        border-bottom: 1px rgb(189, 189, 189) solid;
        box-shadow: 0 2px 4px 0 rgb(189, 189, 189);
    }
    
    header > p {
        margin-top: 0;
    }

    main {
        margin: 6rem auto;
    }

    ul {
        width: 20%;
        max-width: 30rem;
        min-width: 20rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        width: 100%;
        padding-bottom: 2.5rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>

<svelte:head>
    <title>Mini City</title>
</svelte:head>

<header>
    <h1>Mini City</h1>
    <p>A menagerie of 3D models for tabletop gameplay</p>
</header>
<main>
    <ul>
        <li><a href="/site/minis"><Button>Minis</Button></a></li>
        <li><a href="/site/about"><Button>About this site</Button></a></li>
        <li><Button>Fake link</Button></li>
    </ul>
</main>

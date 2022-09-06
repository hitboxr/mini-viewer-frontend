<script>
    import Button from "../components/UI/Button.svelte";
</script>

<style>
    header, main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 100%;
    }

    header > *, main > * {
        text-align: center;
        flex-grow: 1;
        width: 100%;
    }

    header {
        padding-bottom: 0.7rem;
        border-bottom: 1px rgb(189, 189, 189) solid;
        box-shadow: 0 2px 4px 0 rgb(189, 189, 189);
    }
    
    header > p {
        margin-top: 0;
    }

    main {
        margin: 4rem auto;
    }

    ul {
        width: auto;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        flex-basis: 0;
        flex-grow: 1;
        padding-bottom: 2rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>

<header>
    <h1>Mini City</h1>
    <p>A menagerie of 3D models for tabletop gameplay</p>
</header>
<main>
    <ul>
        <li><a href="/site/minis"><Button>Minis</Button></a></li>
        <li><Button><a href="/site/about">About this site</a></Button></li>
        <li><Button>Other pages in the future?</Button></li>
    </ul>
</main>

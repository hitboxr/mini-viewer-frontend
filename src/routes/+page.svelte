<script>
    import Button from "$components/UI/Button.svelte";
</script>

<style>
    /* header, main {
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
    } */
    .homepage {
        min-height: 100vh;
        background-color: var(--color-black-matte);
        color: var(--color-gray-light);
        text-align: center;
    }

    header {
        padding: 0 2rem;
        padding-top: 5vh;
    }

    h1 {
        margin: 0 auto;
        text-transform: uppercase;
        font-size: 8rem;
    }

    h3 {
        color: var(--color-gray);
        text-transform: lowercase;
        font-size: 2rem;
    }

    nav {
        padding-top: 15vh;
    }

    ul {
        padding-left: 0;
        list-style: none;
    }

    li {
        font-size: 4rem;
        backface-visibility: hidden;
    }

    li:not(:last-child) {
        margin-bottom: 10vh;
    }

    a {
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;

        padding: .5rem 1rem;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, var(--color-gray-light) 50%);
        background-size: 220%;
        transition: all .4s;
    }

    a:hover,
    a:focus {
        color: var(--color-primary);
        font-weight: bold;
        background-position: 100%;
    }

    @media screen and (max-width: 480px) {
        h1 {
            font-size: 6rem;
        }

        li {
            font-size: 3rem;
        }
    }
</style>

<svelte:head>
    <title>Mini City</title>
</svelte:head>

<!-- <header>
    <h1>Mini City</h1>
    <p>A menagerie of 3D models for tabletop gameplay</p>
</header>
<main>
    <ul>
        <li><a href="/minis"><Button>Minis</Button></a></li>
        <li><a href="/about"><Button>About this site</Button></a></li>
        <li><Button>Fake link</Button></li>
    </ul>
</main> -->

<div class="homepage">
    <header>
        <h1>Mini City</h1>
        <h3>A menagerie of 3D models for tabletop gameplay</h3>
    </header>
    <nav>
        <ul>
            <li><a href="/minis">Browse minis</a></li>
            <li><a href="/about">About this site</a></li>
        </ul>
    </nav>
</div>

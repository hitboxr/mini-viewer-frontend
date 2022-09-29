<script>
    let minisLinkHover = false;

    function activateBackground() {
        minisLinkHover = true;
    }
    
    function deactivateBackground() {
        minisLinkHover = false;
    }
</script>

<style>
    .homepage {
        position: relative;
        min-height: 100vh;
        color: var(--color-gray-light);
        text-align: center;
        overflow: hidden;
        background-color: var(--color-black-matte);
        transition: all 1s;
    }

    .homepage::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: 
            url("$lib/assets/images/dice-bg-1.png"),
            url("$lib/assets/images/dice-bg-2.png");
        z-index: -1;
    }

    .minisLinkHover {
        background-color: rgba(40, 40, 43, .5);
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

    hr {
        display: block;
        margin-top: 3rem;
        border: none;
        border-top: 1px solid var(--color-primary);
        max-width: 940px;
        width: 80%;
    }

    nav {
        padding-top: 4vh;
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

<div class="homepage" class:minisLinkHover>
    <header>
        <h1>Mini City</h1>
        <h3>A menagerie of 3D models for tabletop gameplay</h3>
        <hr>
    </header>
    <nav>
        <ul>
            <li>
                <a href="/minis" 
                    on:mouseenter={activateBackground}
                    on:focus={activateBackground}
                    on:mouseleave={deactivateBackground}
                    on:blur={deactivateBackground}>
                    Browse minis
                </a>
            </li>
            <li>
                <a href="/about">
                    About this site
                </a>
            </li>
        </ul>
    </nav>
</div>

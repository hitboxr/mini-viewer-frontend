<style>
    :root {
        --footer-height: 3rem;
    }

    nav {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
        padding: 1rem 2rem;
        border-bottom: 1px rgb(189, 189, 189) solid;
        box-shadow: 0 1px 2px rgb(189, 189, 189);
        background-color: var(--color-primary-1);
        color: white;
    }
    
    nav a {
        margin: 0 1.4rem;
        color: inherit;
        text-decoration: none;
        font-weight: 700;
        letter-spacing: 0.1rem;
    }

    main {
        display: flex;
        justify-content: center;
        margin: auto;
        max-width: 940px;
        padding: 0 2rem;
    }

    footer {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: var(--footer-height);
        color: var(--color-dark-2);
    }

    .footer-text {
        margin: 1rem;
    }

    @media screen and (max-width: 940px) {
        main {
            max-width: 100%;
            padding: 0 2rem;
            padding-bottom: var(--footer-height);
        }
    }
</style>

<nav>
    <a href="/">Home</a>
    <a href="/site/about">About</a>
    <a href="/site/minis">Minis</a>
</nav>

<main>
    <slot /> 
</main>

<footer>
    <p class="footer-text">John &amp; Forrest 2022</p>
</footer>
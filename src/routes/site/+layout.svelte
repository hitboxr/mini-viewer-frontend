<style>
    :root {
        --footer-height: 3rem;
    }

    * {
        font-size: var(--font-size-default);
    }

    nav {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
        padding: 2rem 3rem;
        border-bottom: 1px rgb(189, 189, 189) solid;
        box-shadow: 0 1px 2px rgb(189, 189, 189);
        background-color: var(--color-primary);
        color: white;
        font-size: var(--font-size-default);
    }
    
    nav a {
        margin: 0 1.4rem;
        color: inherit;
        text-decoration: none;
        font-weight: 700;
        letter-spacing: 0.1rem;
    }

    main {
        margin: 0 auto;
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
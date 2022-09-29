<style>
    :root {
        --footer-height: 5rem;
    }

    * {
        font-size: var(--font-size-default);
    }

    .wrapper::before {
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
        padding-bottom: var(--footer-height);
    }

    footer {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: var(--footer-height);
        color: var(--color-gray);
    }

    .footer-text {
        margin: 2rem;
    }

    @media screen and (max-width: 940px) {
        main {
            max-width: 100%;
        }
    }
</style>

<div class="wrapper">
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/minis">Minis</a>
    </nav>
    
    <main>
        <slot /> 
    </main>
    
    <footer>
        <p class="footer-text">John &amp; Forrest 2022</p>
    </footer>
</div>
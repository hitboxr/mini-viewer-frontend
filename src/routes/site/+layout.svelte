<style>
    nav {
        display: flex;
        padding: 1rem 2rem;
        border-bottom: 1px rgb(189, 189, 189) solid;
        box-shadow: 0 1px 2px rgb(189, 189, 189);
        background-color: var(--color-primary-1);
        color: white;
    }
    
    nav > * {
        margin-right: 2rem;
        color: inherit;
        text-decoration: none;
        font-weight: 700;
        letter-spacing: 0.1rem;
    }

    .site-wrapper {
        margin: 0 2rem;
        padding-bottom: 3rem;
    }

    footer {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3rem;
        color: var(--color-dark-2);
    }

    .footer-text {
        margin: 1rem;
    }
</style>

<nav>
    <a href="/">Home</a>
    <a href="/site/about">About</a>
    <a href="/site/minis">Minis</a>
</nav>

<div class="site-wrapper">
    <slot />
</div>

<footer>
    <p class="footer-text">John &amp; Forrest 2022</p>
</footer>
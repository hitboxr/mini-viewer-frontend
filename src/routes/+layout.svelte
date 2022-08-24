<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

    nav, .layout-wrapper {
        font-family: 'Lato', sans-serif;
    }
    
    nav {
        display: flex;
    }

    nav > * {
        margin-right: 2rem;
    }
</style>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/minis">Minis</a>
</nav>

<div class="layout-wrapper">
    <slot />
</div>
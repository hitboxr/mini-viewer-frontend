<style>
    
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
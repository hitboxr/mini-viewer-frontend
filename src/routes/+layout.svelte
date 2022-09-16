<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

    :global(html) {
        --color-primary-1: #7DCD85;
        --color-dark-1: #80AB82;
        --color-dark-2: #778472;
        --color-light-1: #C2E1C2;
        --color-gray-1: #BAC7BE;

        --font-size-default: 1.6rem;

        font-size: 62.5%;
    }

    .page-container {
        position: relative;
        min-height: 100vh;
        font-family: 'Lato', sans-serif;
        color: black;
        padding: 0;
        margin: 0;
        width: 100%;
    }
</style>

<div class="page-container">
    <slot />
</div>
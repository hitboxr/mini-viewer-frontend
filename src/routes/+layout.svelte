<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

    :global(html) {
        --color-primary: #7DCD85;
        --color-black: #000;
        --color-black-matte: #28282B;
        --color-gray: #777;
        --color-gray-light: whitesmoke;
        --color-gray-light-2: #eee;
        --color-white: #fff;

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
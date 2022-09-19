<style>
    button {
        min-width: 20rem;
        background-color: var(--color-primary);
        border: none;
        border-radius: 10rem;
        color: white;
        padding: 1rem 2rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: inherit;
        font-weight: 700;
    }

    button:hover {
        cursor: pointer;
    }
</style>

<button on:click>
    <slot />
</button>
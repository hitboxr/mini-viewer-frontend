<style>
    button {
        width: 100%;
        background-color: var(--color-primary-1);
        border: none;
        border-radius: 2rem;
        color: white;
        padding: 1rem 2rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        font-weight: 700;
        /* letter-spacing: 0.2rem; */
    }

    button:hover {
        cursor: pointer;
    }
</style>

<button>
    <slot />
</button>
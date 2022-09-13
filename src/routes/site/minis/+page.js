import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const res = await fetch(`url`);
    const minis = await res.json();
    return {
        minis: minis,
    };
}
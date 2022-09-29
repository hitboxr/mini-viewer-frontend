import { variables } from '$lib/variables';

/** @type {import('./$types').PageLoad} */
export async function load(event) {
    const url = `${variables.basePath}/packs/`
    const res = await event.fetch(url ,{
        headers: {"Accept": "application/json"}
    });
    const packs = await res.json();
    return {
        packs
    };
}
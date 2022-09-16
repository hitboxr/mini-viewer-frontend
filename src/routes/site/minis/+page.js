import { variables } from '$lib/variables';

/** @type {import('./$types').PageLoad} */
export async function load(event) {
    const url = `${variables.basePath}/minis`
    const res = await event.fetch(url ,{
        headers: {"Accept": "application/json"}
    });
    const minis = await res.json();
    return {
        minis
    };
}
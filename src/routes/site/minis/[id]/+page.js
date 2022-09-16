import { variables } from '$lib/variables';

/** @type {import('./types').PageLoad} */
export async function load({ params }) {
    const url = `${variables.basePath}/minis/${params.id}`
    const res = await fetch(url ,{
        headers: {"Accept": "application/json"}
    });
    const miniDetails = await res.json();
    return {
        miniDetails
    };
}
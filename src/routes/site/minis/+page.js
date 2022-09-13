/** @type {import('./$types').PageLoad} */
export async function load(event) {
    const res = await event.fetch(`url`,{
        headers: {"Accept": "application/json"}
    });
    const minis = await res.json();
    return {
        minis
    };
}
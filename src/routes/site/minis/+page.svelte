<script>
    import DisplayGrid from "../../../components/Minis/DisplayGrid.svelte";

    let minis = [ // dummy data
        {
            "id": "m1",
            "name": "Giff Warlord",
            "description": "A mighty hippo-man wielding some serious guns.",
            "imageURL": "https://angrygolem-games.com/wp-content/uploads/2021/09/Giff.jpg",
        },
        {
            "id": "m2",
            "name": "Crate Mimic",
            "description": "This unassuming crate has dozens of slimy teeth waiting to shred unsuspecting adventurers. Although they are most at home in dank dungeons, many find their prey in the holds of cargo ships.",
            "imageURL": "https://i.etsystatic.com/31155370/r/il/96a283/3643613589/il_fullxfull.3643613589_85ab.jpg",
        },
        {
            "id": "m3",
            "name": "Spelljamming ship",
            "description": "Take to the Astral Sea in a spelljamming ship. This model comes in both normal scale and ship-scale. Spelljamming chair not included.",
            "imageURL": "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/05/Dungeons-Dragons-Spelljammer-Galleon-Cover.jpg",
        },
        {
            "id": "m4",
            "name": "Sand Mephit",
            "description": "This high-detailed model was part of our 2022 release on Patreon. If you are interested in seeing the full set, please visit our store.",
            "imageURL": "https://cdn2.myminifactory.com/assets/object-assets/6318b5b15f2e7/images/720X720-2267-sand-mephit-spear-medium.jpg",
        },
        {
            "id": "m5",
            "name": "Shady Fortune Teller Treasure",
            "description": "You can aslo support us on Patreon to get the models much earlier.",
            "imageURL": "https://cdn2.myminifactory.com/assets/object-assets/6317ddc151013/images/720X720-2258-shady-fortune-teller-treasure-medium.jpg",
        },
    ]
</script>

<style>

</style>


<div class="minis-display-wrapper">
    <h1>Minis</h1>
    <DisplayGrid {minis} />
</div>


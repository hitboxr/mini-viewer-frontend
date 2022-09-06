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
            "description": "This unsuspecting crate has dozens of slimy teeth waiting to shred unsuspecting adventurers. Although they are most at home in dank dungeons, many find their prey in the holds of cargo ships.",
            "imageURL": "https://i.etsystatic.com/31155370/r/il/96a283/3643613589/il_fullxfull.3643613589_85ab.jpg",
        },
    ]
</script>

<h1>Minis</h1>
<DisplayGrid {minis} />
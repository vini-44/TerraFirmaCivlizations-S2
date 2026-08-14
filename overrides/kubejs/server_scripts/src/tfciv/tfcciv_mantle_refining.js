ServerEvents.recipes(event => {
    //copper
    event.recipes.create.milling(
        [
            'tfc:ore/normal_native_copper',
        ], 
        `terrafirmacivilizations:copper_mantle_chunk`
    )

    event.Shapeless(
        'tfc:ore/normal_native_copper',
        [
            `terrafirmacivilizations:copper_mantle_chunk`,
            '#forge:tools/hammers',
        ]
    )

    //tin
    event.recipes.create.milling(
        [
            'tfc:ore/normal_cassiterite',
        ], 
        `terrafirmacivilizations:tin_mantle_chunk`
    )

    //bismuth
    event.recipes.create.milling(
        [
            'tfc:ore/normal_bismuthinite',
        ], 
        `terrafirmacivilizations:bismuth_mantle_chunk`
    )

    //zinc
    event.recipes.create.milling(
        [
            'terrafirmacivilizations:crushed_mantle_zinc',
        ], 
        'terrafirmacivilizations:tin_mantle_chunk'
    )

    event.shapeless(
        'tfc:ore/normal_sphalerite',
        [
            'terrafirmacivilizations:crushed_mantle_zinc',
            'tfc:powder/flux',
        ]
    )

    //common catalyst
    event.shapeless(
        Item.of('terrafirmacivilizations:common_catalyst', 9),
        [
            '8x tfcorewashing:pellet_copper',
            '#forge:sand',
        ]
    )

    //gold
    event.recipes.create.milling(
        [
            'terrafirmacivilizations:crushed_mantle_gold',
        ], 
        'terrafirmacivilizations:gold_mantle_chunk'
    )

    event.shapeless(
        'tfc:ore/normal_native_gold',
        [
            `terrafirmacivilizations:crushed_mantle_gold`,
            'terrafirmacivilizations:common_catalyst',
        ]
    )

    //alloy catalyst
    event.shapeless(
        Item.of('terrafirmacivilizations:alloy_catalyst', 9),
        [
            '5x tfcorewashing:pellet_sphalerite',
            '4x tfcorewashing:pellet_cassiterite',
        ]
    )

    //silver and chromite
    event.recipes.create.milling(
        [
            'terrafirmacivilizations:crushed_mantle_silver',
        ], 
        'terrafirmacivilizations:silver_mantle_chunk'
    )

    event.shapeless(
        'tfc:ore/normal_native_silver',
        [
            `terrafirmacivilizations:crushed_mantle_silver`,
            'terrafirmacivilizations:common_catalyst',
        ]
    )

    event.recipes.create.mixing(
        [
            'firmalife:ore/small_chromite',
            'tfc:ore/small_native_copper',
        ],
        [
            `terrafirmacivilizations:crushed_mantle_gold`,
            'terrafirmacivilizations:alloy_catalyst',
        ]
    )

    //iron
    event.recipes.create.milling(
        [
            'terrafirmacivilizations:crushed_mantle_iron',
        ], 
        'terrafirmacivilizations:iron_mantle_chunk'
    )

    event.shapeless(
        'tfc:ore/normal_hematite',
        [
            `terrafirmacivilizations:crushed_mantle_iron`,
            'terrafirmacivilizations:alloy_catalyst',
        ]
    )

    //lime alternate recipe
    event.recipes.create.compacting(
        [
            'tfc:powder/lime'
        ],
        [
            'tfc:powder/flux'
        ],
    ).heated()

    //precious catalyst
    event.recipes.create.compacting(
        [
            Item.of('terrafirmacivilizations:precious_catalyst', 9),
        ],
        [
            '5x tfcorewashing:pellet_gold',
            '3x tfcorewashing:pellet_silver',
            '2x tfc:powder/lime',
        ],
    ).heated()

    //nickel
    event.recipes.create.crushing(
        [
            'terrafirmacivilizations:crushed_mantle_nickel',
        ], 
        'terrafirmacivilizations:nickel_mantle_chunk'
    )

    event.recipes.create.mixing(
        [
            'terrafirmacivilizations:nickel_slurry',
        ],
        [
            `terrafirmacivilizations:crushed_mantle_nickel`,
            'terrafirmacivilizations:precious_catalyst',
            Fluid.of('minecraft:water', 250),
        ]
    ).heated()

    event.recipes.create.filling(
        'tfc:ore/normal_garnierite',
        [
            Fluid.of(`terrafirmacivilizations:nickel_slurry`),
            'terrafirmacivilizations:alloy_catalyst',
        ]
    )

    //ultimate catalyst
    event.recipes.create.compacting(
        [
            Item.of('terrafirmacivilizations:ultimate_catalyst'),
        ],
        [
            'terrafirmacivilizations:precious_catalyst',
            'terrafirmacivilizations:common_catalyst',
            'terrafirmacivilizations:alloy_catalyst',
        ],
    ).superheated()

    //magma recipe
    event.recipes.create.mixing(
        [
            Fluid.of('terrafirmacivilizations:magma_liquid', 500),
        ],
        [
            Fluid.of('minecraft:lava', 1000),
            'terrafirmacivilizations:ultimate_catalyst',
        ]
    ).superheated()

    // super heating upgrade
    event.recipes.create.mechanical_crafting('moreburners:heat_upgrade', [
        'SSSSS',
        'BCPCB',
        'RAHAR',
        ' RRR '
    ], {
        S: 'tfc:metal/double_sheet/red_steel',
        B: 'tfc:metal/double_sheet/black_steel',
        A: 'kubejs:metal/rod/aluminum',
        R: 'afc:rubber_bar',
        C: 'kubejs:chromium_wire',
        H: 'thermal:machine_frame',
        P: 'create:precision_mechanism',
    })
})
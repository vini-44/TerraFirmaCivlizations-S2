ServerEvents.recipes(event => {
    //instruments
    event.shaped(
        Item.of('immersive_melodies:triangle'), // arg 1: output
        [
            ' A ',
            'A A', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: 'tfc:metal/rod/copper'
        }
    )
    event.shaped(
        Item.of('immersive_melodies:handpan'), // arg 1: output
        [
            '   ',
            'AAA', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: 'tfc:metal/sheet/copper'
        }
    )
    event.shaped(
        Item.of('immersive_melodies:didgeridoo'), // arg 1: output
        [
            'A  ',
            ' AB', // arg 2: the shape (array of strings)
            '  A'
        ],
        {
            A: '#minecraft:planks',
            B: '#forge:sand'
        }
    )
    event.shaped(
        Item.of('immersive_melodies:trumpet'), // arg 1: output
        [
            'AAA',
            'AAA', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: 'tfc:metal/rod/brass'
        }
    )
    event.shaped(
        Item.of('immersive_melodies:ender_bass'), // arg 1: output
        [
            '   ',
            'ABA', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: 'minecraft:note_block',
            B: 'kubejs:plastic'
        }
    )


    //warforge
    event.shaped(
        Item.of('warforge:citadelblock'), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: '#tfc:rock/smooth',
            B: '#forge:double_sheets',  //arg 3: the mapping object
            C: 'create:precision_mechanism'
        }
    )
    event.shaped(
        Item.of('warforge:siegecampblock'), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of stri  ngs)
            'ABA'
        ],  
        {
            A: 'kubejs:stone_reinforcement',
            B: 'kubejs:wood_reinforcement',  //arg 3: the mapping object
            C: 'firmaciv:large_waterproof_hide'
        }
    )
    event.shaped(
        Item.of('warforge:siegecampblock'), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of stri  ngs)
            'ABA'
        ],  
        {
            A: 'kubejs:stone_reinforcement',
            B: 'kubejs:wood_reinforcement',  //arg 3: the mapping object
            C: '#tfc:swords'
        }
    )
    event.shaped(
        Item.of('warforge:basicclaimblock', 2), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of stri  ngs)
            'ABA'
        ],
        {
            A: 'kubejs:stone_reinforcement',
            B: 'kubejs:wood_reinforcement',  //arg 3: the mapping object
            C: 'tfc:brass_mechanisms'
        }
    )
    event.shaped(
        Item.of('warforge:reinforcedclaimblock'), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'kubejs:stone_reinforcement',
            B: 'kubejs:iron_reinforcement',  //arg 3: the mapping object
            C: 'create:precision_mechanism'
        }
    )

    event.shapeless(
        Item.of('warforge:topleaderboard'), // arg 1: output
        [
            'create:display_board',
            'supplementaries:hat_stand'  //arg 3: the mapping object
        ]
    )
    event.shapeless(
        Item.of('warforge:wealthleaderboard'), // arg 1: output
        [
            'create:display_board',
            '#lithiccoins:fit_in_purse'  //arg 3: the mapping object
        ]
    )
    event.shapeless(
        Item.of('warforge:notorietyleaderboard'), // arg 1: output
        [
            'create:display_board',
            '#tfc:swords'  //arg 3: the mapping object
        ]
    )
    event.shapeless(
        Item.of('warforge:legacyleaderboard'), // arg 1: output
        [
            'create:display_board',
            'firmalife:cheesecloth'  //arg 3: the mapping object
        ]
    )

    
    /*
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
    */
})
ServerEvents.recipes(event => {
    const stoneTypes = [
        'granite', 'diorite', 'gabbro', 'shale', 'claystone', 
        'limestone', 'dolomite', 'chert', 'chalk', 'rhyolite', 
        'basalt', 'andesite', 'dacite', 'quartzite', 'slate', 'phyllite', 
        'schist', 'gneiss', 'marble'
    ];


    stoneTypes.forEach(stone => {
        event.recipes.create.splashing(
            [
                Item.of('minecraft:air').withChance(0.2),
                Item.of(`tfcorewashing:pile_black_sand`).withChance(0.3),
                Item.of(`tfc:rock/loose/${stone}`).withChance(0.4),

                Item.of("minecraft:flint").withChance(0.04),
                Item.of("tfc:powder/native_copper").withChance(0.04),
                Item.of("tfc:powder/native_gold").withChance(0.01),
                Item.of("tfc:powder/native_silver").withChance(0.01),
            ], 
            `tfc:rock/gravel/${stone}`
        )
    })
})
// priority: 0

ServerEvents.recipes(event => {
    let remove = [
        'minecraft:crossbow',
        'minecraft:piston',
        'minecraft:hopper',
        'minecraft:cauldron',
        'minecraft:powered_rail',
        'minecraft:detector_rail',
        'minecraft:activator_rail',
        'minecraft:heavy_weighted_pressure_plate',
        "minecraft:tripwire_hook",
        "minecraft:minecart",
        "minecraft:tnt",
        'minecraft:brick'
    ].forEach(mc =>[
        event.remove({ output: mc, mod: 'minecraft' })
    ]

    )


}
)
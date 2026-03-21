
global.reinforcements = 
{
    values: 
    {
        "weak":
        {
            "item":"",
            "value": 0,
            "particle": 'minecraft:dust 0.15 0.15 0.15 1.0',
            "name": "Damaged",
            "tool_tier": 1,
            "tool_type": "hammer"
        },
        "wood":
        {
            "item":"kubejs:wood_reinforcement",
            "value": 5,
            "particle": "minecraft:dust 0.6, 0.4, 0.2",
            "name": "Wood",
            "sound":"minecraft:block.bamboo_wood.place",
            "tool_tier": 1,
            "tool_type": "hammer"
        },
        "stone":
        {
            "item":"kubejs:stone_reinforcement",
            "value": 10,
            "particle": "minecraft:dust 0.5 0.5 0.5 1.0",
            "name": "Stone",
            "sound":"minecraft:block.calcite.place",
            "tool_tier": 1,
            "tool_type": "hammer"
        },
        "bronze":
        {
            "item":"kubejs:bronze_reinforcement",
            "value": 25,
            "particle": "minecraft:dust 0.9 0.5 0.2 1.0",
            "name": "Bronze",
            "sound": "minecraft:block.copper.place",
            "tool_tier": 2,
            "tool_type": "hammer"
        },
        "iron":
        {
            "item":"kubejs:iron_reinforcement",
            "value": 50,
            "particle": "minecraft:dust 0.85 0.9 1 1.0",
            "name": "Iron",
            "sound": "minecraft:block.metal.place",
            "tool_tier": 3,
            "tool_type": "hammer"
        },
        "steel":
        {
            "item":"kubejs:steel_reinforcement",
            "value": 100,
            "particle": "minecraft:dust 0.3 0.5 0.7 1.0",
            "name": "Steel",
            "sound": "minecraft:block.chain.place",
            "tool_tier": 4,
            "tool_type": "hammer"
        },
        "titanium":
        {
            "item":"kubejs:titanium_reinforcement",
            "value": 250,
            "particle": "minecraft:dust 1 1 1 1.0",
            "name": "Titanium",
            "sound": "minecraft:block.anvil.place",
            "tool_type": "welder"
        },
        "carotine":
        {
            "item":"kubejs:carotine_reinforcement",
            "value": 500,
            "particle": "minecraft:dust 1 0.78 0.32 1.0",
            "name": "Carotine steel",
            "sound": "minecraft:block.anvil.place",
            "tool_type": "welder"
        },
        "admin":
        {
            "item":"kubejs:admin_reinforcement",
            "value": 10000,
            "particle": "minecraft:dust 1 0 1 1.0",
            "name": "Unbreakable",
            "sound": "minecraft:block.amethyst_block.place",
            "tool_type": "admin"
        }
    },
    order: ["weak","wood","stone","bronze","iron","steel","titanium","carotine","admin"],

    //tools
    hammers: {
        "tfc:metal/hammer/copper":1,
        "tfc:metal/hammer/bronze":2,
        "tfc:metal/hammer/black_bronze":2,
        "tfc:metal/hammer/bismuth_bronze":2,
        "tfc:metal/hammer/wrought_iron":3,
        "tfc:metal/hammer/steel":4,
        "tfc:metal/hammer/black_steel":4,
        "tfc:metal/hammer/blue_steel":4,
        "tfc:metal/hammer/red_steel":4
    },
    welder: "createbigcannons:cannon_welder", //for high tier
    admin: "kubejs:admin_hammer",
    cooldownTicks: 60,

    getByValue: function(value)
    {
        for(let i=global.reinforcements.order.length-1; i>=0; --i)
        {
            let type = global.reinforcements.order[i];
            if (value >= global.reinforcements.values[type].value)
            {
                return global.reinforcements.values[type];
            }
        }
    },
    getByItem: function(item)
    {
        for (let typename in global.reinforcements.values)
        {
            let type = global.reinforcements.values[typename];
            if (type.item == item)
            {
                return type;
            }
        }
    },
    getByTool: function(item)
    {
        for (let typename in global.reinforcements.hammers)
        {
            if (typename == item)
            {
                let level = global.reinforcements.hammers[typename];
                return {type:"hammer",level:level};
            }
        }
        if (item == global.reinforcements.welder)
        {
            return {type:"welder",level:1};
        }
        if (item == global.reinforcements.admin)
        {
            return {type:"admin",level:1};
        }
    },
    goggle_item: "create:goggles",
    banned_tags: [
        "tfc:plants", //all plants (incl. moss, water lily, algae)
        "tfc:single_block_replaceable", //twigs, fallen leaves
        "tfc:can_be_snow_piled",  //loose rocks
        "minecraft:leaves", //all leaves
        "minecraft:saplings", //all saplings
        "tfc:snow", //can melt
        "tfc:support_beams", //can pop
        "tfc:can_landslide" //most gravity blocks
    ],
    banned_ids: [
        "tfc:placed_item",
        "tfc:log_pile", //disappears when gets empty
        "tfc:powderkeg", //disappears when explodes
        "minecraft:air",
        "minecraft:water",
        "tfc:salt_water",
        "tfc:spring_water"
    ]
};

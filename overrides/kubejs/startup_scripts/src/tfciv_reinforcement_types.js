
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
        },
        "wood":
        {
            "item":"kubejs:wood_reinforcement",
            "value": 10,
            "particle": "minecraft:dust 0.6, 0.4, 0.2",
            "name": "Wood",
            "sound":"minecraft:block.bamboo_wood.place"
        },
        "stone":
        {
            "item":"kubejs:stone_reinforcement",
            "value": 25,
            "particle": "minecraft:dust 0.5 0.5 0.5 1.0",
            "name": "Stone",
            "sound":"minecraft:block.calcite.place"
        },
        "copper":
        {
            "item":"kubejs:copper_reinforcement",
            "value": 50,
            "particle": "minecraft:dust 0.9 0.5 0.2 1.0",
            "name": "Copper",
            "sound": "minecraft:block.copper.place"
        },
        "iron":
        {
            "item":"kubejs:iron_reinforcement",
            "value": 100,
            "particle": "minecraft:dust 0.85 0.9 1 1.0",
            "name": "Iron",
            "sound": "minecraft:block.metal.place"
        },
        "steel":
        {
            "item":"kubejs:steel_reinforcement",
            "value": 200,
            "particle": "minecraft:dust 0.3, 0.5, 0.7 1.0",
            "name": "Steel",
            "sound": "minecraft:block.metal.place"
        },
        "titanium":
        {
            "item":"kubejs:titanium_reinforcement",
            "value": 500,
            "particle": "minecraft:dust 0, 0, 0 1.0",
            "name": "Titanium",
            "sound": "minecraft:block.metal.place"
        },
        "admin":
        {
            "item":"kubejs:admin_reinforcement",
            "value": 10000,
            "particle": "minecraft:dust 1 0 1 1.0",
            "name": "Unbreakable",
            "sound": "minecraft:block.amethyst_block.place"
        }
    },
    order: ["weak","stone","copper","iron","admin"],
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
    goggle_item: "minecraft:iron_helmet"
};

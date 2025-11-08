
global.reinforcements = 
{
    values: 
    {
        "weak":
        {
            "item":"",
            "value": 0,
            "particle": 'minecraft:dust 0.15 0.15 0.15 1.0',
            "name": "Damaged"
        },
        "wood":
        {
            "item":"kubejs:wood_reinforcement",
            "value": 5,
            "particle": "minecraft:dust 0.6, 0.4, 0.2",
            "name": "Wooden"
        },
        "stone":
        {
            "item":"kubejs:stone_reinforcement",
            "value": 10,
            "particle": "minecraft:dust 0.5 0.5 0.5 1.0",
            "name": "Stone"
        },
        "copper":
        {
            "item":"kubejs:copper_reinforcement",
            "value": 25,
            "particle": "minecraft:dust 0.9 0.5 0.2 1.0",
            "name": "Copper"
        },
        "iron":
        {
            "item":"kubejs:iron_reinforcement",
            "value": 50,
            "particle": "minecraft:dust 0.85 0.9 1 1.0",
            "name": "Iron"
        },
        "steel":
        {
            "item":"kubejs:steel_reinforcement",
            "value": 100,
            "particle": "minecraft:dust 0.3, 0.5, 0.7 1.0",
            "name": "Steel"
        },
        "titanium":
        {
            "item":"kubejs:titanium_reinforcement",
            "value": 250,
            "particle": "minecraft:dust 0, 0, 0 1.0",
            "name": "Titanium"
        },
        "admin":
        {
            "item":"kubejs:admin_reinforcement",
            "value": 10000,
            "particle": "minecraft:dust 1 0 1 1.0",
            "name": "Unbreakable"
        }
    },
    order: ["weak","wood","stone","copper","iron","steel","titanium","admin"],
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
    goggle_item: "create:goggles"
};

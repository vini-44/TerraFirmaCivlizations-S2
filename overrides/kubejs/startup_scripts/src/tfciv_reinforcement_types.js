
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
        "admin":
        {
            "item":"kubejs:admin_reinforcement",
            "value": 1000,
            "particle": "minecraft:dust 1 0 1 1.0",
            "name": "Unbreakable"
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
    goggle_item: "create:goggles"
};

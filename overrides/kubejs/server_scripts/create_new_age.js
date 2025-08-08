// priority: 1

ServerEvents.tags('items', event => {

event.add('forge:ingots', 'kubejs:compressed_magnetite')
event.add('forge:ingots', 'kubejs:aligned_magnetite')
event.add('tfc:pileable_ingots', 'kubejs:compressed_magnetite')
event.add('tfc:pileable_ingots', 'kubejs:aligned_magnetite')

})

ServerEvents.recipes(event => {

/*
        Replace inputs

Format:
event.replaceInput(
  { input: 'mod:item_id'},
  'mod:item_being_replaced',
  'mod:replacement_item
)

*/

event.replaceInput(
  { output: 'create_new_age:basic_motor' },
  'minecraft:iron_nugget',
  'immersiveengineering:plate_steel'
  )
event.replaceInput(
  { output: 'create_new_age:advanced_motor' },
  'create_new_age:overcharged_iron',
  'create_new_age:redstone_magnet'
  )
event.replaceInput(
  { output: 'create_new_age:advanced_motor' },
  'minecraft:gold_nugget',
  'immersiveengineering:plate_gold'
  )

/*
        Shaped Recipes

Format:
event.shaped('mod:output_id',[
  'XXX',
  'XXX',
  'XXX'
],{
  X: 'mod:input_id'
}).damageIngredient(Ingredient.of('mod:tool')) // optional

*/

event.shaped('create_new_age:basic_motor_extension',[
  'PPP',
  'MEE',
  'PPP'
], {
    E: 'immersiveengineering:component_electronic_adv',
    P: 'immersiveengineering:plate_steel',
    M: 'create_new_age:basic_motor'
})

event.shaped('create_new_age:carbon_brushes',[
  'ASA',
  'CWC',
  'PPP'
], {
    P: 'immersiveengineering:plate_steel',
    S: 'create:shaft',
    A: 'create:andesite_alloy',
    C: 'tfc:powder/charcoal',
    W: 'immersiveengineering:wirecoil_copper'
})

event.shaped('create_new_age:generator_coil',[
  'CRC',
  'RSR',
  'CRC'
], {
    R: 'tfc:metal/rod/steel',
    S: 'create:shaft',
    C: 'immersiveengineering:coil_lv'
})

event.shaped('create_new_age:energiser_t2', [
  'AEA',
  'PRP',
  ' R '
],{
  A: 'kubejs:aligned_magnetite',
  E: 'create_new_age:energiser_t1',
  P: 'immersiveengineering:plate_gold',
  R: 'minecraft:lightning_rod'
})

event.shaped('create_new_age:energiser_t3', [
  'GEG',
  'RTR',
  ' S '
],{
  G: 'create_new_age:overcharged_diamond',
  E: 'create_new_age:energiser_t2',
  R: 'tfc:metal/rod/blue_steel',
  T: 'immersiveengineering:toolupgrade_powerpack_tesla',
  S: 'tfc:metal/double_sheet/copper'
})

/*
        Create New Age Energizing Recipes
*/

event.custom({
  "type": "create_new_age:energising",
  "energy_needed": 30000,
  "ingredients": [{
    "tag": "tfc:top_cut_gems"
    }],
  "results": [{
    "item": "create_new_age:overcharged_diamond"
    }]
  })

event.custom({
  "type": "create_new_age:energising",
  "energy_needed": 111,
  "ingredients": [{
    "item": "kubejs:compressed_magnetite"
    }],
  "results": [{
    "item": "kubejs:aligned_magnetite"
    }]
  })

event.custom({"type": "create_new_age:energising",
  "energy_needed": 500,
  "ingredients": [    {
    "item": "tfc:powder/limonite"
    }],
  "results": [    {
    "item": "tfc:powder/magnetite"
    }]
})

event.custom({
  "type": "create_new_age:energising",
  "energy_needed": 500,
  "ingredients": [    {
    "item": "tfc:powder/hematite"
    }],
  "results": [    {
    "item": "tfc:powder/magnetite"
    }]
})

/*
        Create Compacting Recipes
*/
//this is done in data/red/recipes/compacting,
//event.recipes.create.compacting('kubejs:compressed_magnetite', '9x tfc:powder/magnetite')

/*
        Create Mechanical Crafting Recipes
*/

event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "result": {
    "count": 6,
    "item": "create_new_age:fluxuated_magnetite"
  },
  "pattern": [
    " CCC ",
    "CPMPC",
    "CMGMC",
    "CPMPC",
    " CCC "
  ],
  "key": {
    "M": {
      "item": "create_new_age:magnetite_block"
    },
    "C": {
      "item": "immersiveengineering:wirecoil_steel"
    },
    "P": {
      "item": "create:sturdy_sheet"
    },
    "G": {
      "item": "create_new_age:overcharged_diamond"
    }
  }
})

event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "result": {
    "count": 2,
    "item": "create_new_age:redstone_magnet"
  },
  "pattern": [
    "CEC",
    "ERE",
    "CEC"
  ],
  "key": {
    "R": {
      "item": "minecraft:redstone_block"
    },
    "C": {
      "item": "immersiveengineering:wirecoil_copper"
    },
    "E": {
      "item": "immersiveengineering:wirecoil_electrum"
    }
  }
})

event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "result": {
    "count": 1,
    "item": "create_new_age:reinforced_motor"
  },
  "pattern": [
    "CMPPC",
    "EBRSS",
    "CMPPC"
  ],
  "key": {
    "S": {
      "item": "create:shaft"
    },
    "B": {
      "item": "create:brass_casing"
    },
    "E": {
      "item": "immersiveengineering:component_electronic_adv"
    },
    "P": {
      "item": "immersiveengineering:plate_steel"
    },
    "M": {
      "item": "tfc:brass_mechanisms"
    },
    "R": {
      "item": "minecraft:redstone_block"
    },
    "C": {
      "item": "create_new_age:overcharged_diamond"
    }
  }
})

event.custom(
{
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "key": {
    "E": {
      "item": "immersiveengineering:component_electronic_adv"
    },
    "P": {
      "item": "immersiveengineering:plate_steel"
    },
    "M": {
      "item": "create_new_age:reinforced_motor"
    },
    "C": {
      "item": "create_new_age:overcharged_diamond"
    }
  },
  "pattern": [
    "PPPPP",
    "CEMEC",
    "PPPPP"
  ],
  "result": {
    "count": 2,
    "item": "create_new_age:advanced_motor_extension"
  }
})

/*
        Create Sequenced Assembly
*/

event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "kubejs:aligned_magnetite"
  },
  "loops": 2,
  "results": [{
      "item": "create_new_age:layered_magnet"
    }
  ],
  "sequence": [{
    "type": "create:filling",
    "ingredients": [{
        "item": "kubejs:incomplete_layered_magnet"
      },
      {
        "amount": 50,
        "fluid": "tfc:metal/gold",
        "nbt": {}
      }
    ],
    "results": [{
        "item": "kubejs:incomplete_layered_magnet"
      }]
  },{
    "type": "create_new_age:energising",
    "energy_needed": 250,
    "ingredients": [{
        "item": "kubejs:incomplete_layered_magnet"
      }],
    "results": [{
        "item": "kubejs:incomplete_layered_magnet"
      }]
  },{
    "type": "create:deploying",
    "ingredients": [{
        "item": "kubejs:incomplete_layered_magnet"
      },{
        "item": "kubejs:aligned_magnetite"
      }
    ],
    "results": [{
        "item": "kubejs:incomplete_layered_magnet"
      }]
  },{
    "type": "create:pressing",
    "ingredients": [{
        "item": "kubejs:incomplete_layered_magnet"
      }],
    "results": [{
        "item": "kubejs:incomplete_layered_magnet"
      }]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_layered_magnet"
  }
})

event.custom({
  'type': 'create:sequenced_assembly',
  'ingredient': {'item': 'tfc:powder/lime'},
  'loops': 1,
  'results':[{'item': 'minecraft:glowstone_dust'}],
  'sequence':[{
    'type': 'create:filling',
    "ingredients": [{
      "item": "kubejs:incomplete_glowstone_dust"
    },{
      "amount": 50,
      "fluid": "tfc:metal/red_steel"
    }],
    'results': [{'item': "kubejs:incomplete_glowstone_dust"}]
  },{
    "type": "create_new_age:energising",
    "energy_needed": 250,
    "ingredients": [{
        "item": "kubejs:incomplete_glowstone_dust"
      }],
    "results": [{
        "item": "kubejs:incomplete_glowstone_dust"
      }]
  }],
  'transitionalItem': {'item': "kubejs:incomplete_glowstone_dust"}
})

})


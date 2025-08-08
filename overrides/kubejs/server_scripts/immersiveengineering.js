// priority: 1


ServerEvents.tags('item', event => {

/*
        Add tags

Format:
    event.add('mod:tag', 'mod:item_id')

*/

  event.add('tfc:usable_in_bookshelf', 'immersiveengineering:manual')
  event.add('minecraft:bookshelf_books', 'immersiveengineering:manual')
  event.add('tfc:books', 'immersiveengineering:manual')
  event.add('forge:autocannon_cartridge_plate', 'immersiveengineering:plate_copper')
  event.add('forge:autocannon_cartridge_plate', 'immersiveengineering:plate_gold')
  event.add('forge:autocannon_cartridge_plate', 'immersiveengineering:plate_iron')
  event.add('forge:igneous_grits', 'immersiveengineering:dust_nickel')
  event.add('forge:igneous_grits', 'immersiveengineering:dust_iron')
  event.add('forge:dusts/zinc', 'kubejs:dust_zinc')
  event.add('forge:plates', 'kubejs:metal_plate_brass')
  event.add('tfc:usable_on_tool_rack', 'immersiveengineering:buzzsaw')
  event.add('tfc:usable_on_tool_rack','immersiveengineering:drill')
  event.add('tfc:usable_on_tool_rack','immersiveengineering:hammer')
  event.add('tfc:usable_on_tool_rack','immersiveengineering:voltmeter')
  event.add('tfc:usable_on_tool_rack','immersiveengineering:wirecutter')
  event.add('tfc:usable_on_tool_rack','immersiveengineering:revolver')
  event.add('tfc:usable_on_tool_rack','immersiveengineering:chemthrower')
  event.add('tfc:usable_on_tool_rack','immersiveengineering:skyhook')
  event.add('tfc:usable_on_tool_rack','immersiveengineering:screwdriver')

  event.add('forge:ingots/brick', 'kubejs:concrete_brick')
  event.add('forge:ingots/brick', 'kubejs:slag_brick')
  event.add('supplementaries:throwable_bricks', 'kubejs:concrete_brick')
  event.add('supplementaries:throwable_bricks', 'kubejs:slag_brick')

})


ServerEvents.recipes(event => {

/*
        Custom events

Format: json
*/

//beam house stuff


//beam house stuff end

  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless(
      Item.of('kubejs:concrete_brick', 4),
      [
        '#tfc:chisels',
        'immersiveengineering:concrete'
      ]
    )
  )

  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless(
      'kubejs:slag_brick',
      [
        '#tfc:chisels',
        'immersiveengineering:slag'
      ]
    )
  )

  event.shaped(
    Item.of('immersiveengineering:concrete_brick', 4),
    [
      'BMB',
      'MBM',
      'BMB'
    ],
    {
      B: 'kubejs:concrete_brick',
      M: 'tfc:mortar'
    }
  )

  event.shaped(
    Item.of('immersiveengineering:slag_brick', 4),
    [
      'BMB',
      'MBM',
      'BMB'
    ],
    {
      B: 'kubejs:slag_brick',
      M: 'tfc:mortar'
    }
  )

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "tag": "minecraft:flowers"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "minecraft:flower_banner_pattern"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "minecraft:gunpowder"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "minecraft:creeper_banner_pattern"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "minecraft:player_head"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "minecraft:skull_banner_pattern"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "immersiveengineering:dust_gold"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "minecraft:mojang_banner_pattern"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "supplementaries:globe"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "minecraft:globe_banner_pattern"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "supplementaries:globe_sepia"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "minecraft:globe_banner_pattern"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "farmersdelight:ham"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "minecraft:piglin_banner_pattern"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "minecraft:bone"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "immersiveengineering:bannerpattern_wolf_l"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "minecraft:bone"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "immersiveengineering:bannerpattern_wolf_r"
  }
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 1,
      "base_ingredient": {
        "item": "minecraft:paper"
      }
    },
    {
      "item": "minecraft:bone"
    }
  ],
  "category": "bannerpatterns",
  "result": {
    "item": "immersiveengineering:bannerpattern_wolf"
  }
})

//bottling


event.custom(
  {
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 1000,
      "tag": "forge:silica_glass"
    },
    "input": {
      "item": "tfc_ie_addon:mold_block"
    },
    "results": [
      {
        "item": "minecraft:glass"
      },
      {
        "item": "tfc_ie_addon:mold_block"
      }
    ]
  }
)

event.custom(
  {
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 1000,
      "tag": "forge:hematitic_glass"
    },
    "input": {
      "item": "tfc_ie_addon:mold_block"
    },
    "results": [
      {
        "item": "minecraft:orange_stained_glass"
      },
      {
        "item": "tfc_ie_addon:mold_block"
      }
    ]
  }
)

event.custom(
  {
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 1000,
      "tag": "forge:olivine_glass"
    },
    "input": {
      "item": "tfc_ie_addon:mold_block"
    },
    "results": [
      {
        "item": "minecraft:green_stained_glass"
      },
      {
        "item": "tfc_ie_addon:mold_block"
      }
    ]
  }
)

event.custom(
  {
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
      "amount": 1000,
      "tag": "forge:volcanic_glass"
    },
    "input": {
      "item": "tfc_ie_addon:mold_block"
    },
    "results": [
      {
        "item": "minecraft:blue_stained_glass"
      },
      {
        "item": "tfc_ie_addon:mold_block"
      }
    ]
  }
)


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
    { output: 'immersiveengineering:electromagnet' },
    'minecraft:iron_ingot',
    'tfc:metal/ingot/wrought_iron'
    )

  event.replaceInput(
      { output: 'immersiveengineering:toolupgrade_powerpack_magnet' },
      'minecraft:iron_ingot',
      'tfc:metal/ingot/wrought_iron'
      )


 event.replaceInput(
   { output: 'immersiveengineering:craftingtable' },
   'minecraft:crafting_table',
  '#tfc:workbenches'
  )
event.replaceInput(
  { output: 'immersiveengineering:toolupgrade_railgun_scope' },
  '#forge:rods/steel',
  'tfc:metal/rod/steel'
  )
event.replaceInput(
  { output: 'immersiveengineering:toolupgrade_railgun_scope' },
  '#forge:glass_panes',
  'tfc:lens'
  )
event.replaceInput(
  { output: 'immersiveengineering:toolupgrade_railgun_scope' },
  '#forge:glass_panes',
  'tfc:lens'
  )
event.replaceInput(
  { output: 'immersiveengineering:fluid_placer' },
  'minecraft:iron_bars',
  'tfc:metal/bars/wrought_iron'
  )

/*
        TFC Anvil Recipes

TIERS
-  (0): Stone
I  (1): Copper, Gold
II (2): Bronze, Brass
III(3): Iron
IV (4): Steel
V  (5): Black Steel
VI (6): Red/Blue Steel

Format:
event.recipes.tfc.anvil('mod:output_id', 'mod:input_id', ['step_one', 'step_two', 'step, 3']).tier(0-6)

*/

event.recipes.tfc.anvil('kubejs:propeller_blade', 'immersiveengineering:plate_aluminum', ['hit_last', 'shrink_second_last', 'draw_third_last']).tier(1)
event.recipes.tfc.anvil('immersiveengineering:sawblade', 'tfc:metal/sheet/steel', ['hit_any', 'hit_second_last', 'hit_last']).tier(4)
event.recipes.tfc.anvil('8x immersiveengineering:fluid_pipe', 'tfc:metal/sheet/wrought_iron', ['draw_last', 'bend_not_last']).tier(3)
event.recipes.tfc.anvil('2x kubejs:propeller_blade', 'tfc_ie_addon:metal/sheet/aluminum', ['hit_last', 'shrink_second_last', 'draw_third_last']).tier(1)

/*
        TFC Welding Recipes

Format:
event.recipes.tfc.welding('mod:output_id', 'mod:input_id', 'mod:additional_item_id',#) // # = tier

*/

event.recipes.tfc.welding('immersiveengineering:armor_faraday_helmet', 'tfc:metal/unfinished_helmet/steel', 'kubejs:steel_chain_mesh',4)
event.recipes.tfc.welding('immersiveengineering:armor_faraday_chestplate', 'tfc:metal/unfinished_chestplate/steel', 'kubejs:steel_chain_mesh',4)
event.recipes.tfc.welding('immersiveengineering:armor_faraday_leggings', 'tfc:metal/unfinished_greaves/steel', 'kubejs:steel_chain_mesh',4)
event.recipes.tfc.welding('immersiveengineering:armor_faraday_boots', 'tfc:metal/unfinished_boots/steel', 'kubejs:steel_chain_mesh',4)
event.recipes.tfc.welding('immersiveengineering:rockcutter', 'immersiveengineering:sawblade', 'tfc:powder/diamond', 4)

event.recipes.tfc.glassworking('kubejs:glass_bulb', 'tfc:silica_glass_batch', ['blow','roll', 'pinch', 'saw'])

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

event.shaped('immersiveengineering:electric_lantern', [
  ' P ',
  'LBG',
  ' W '
], {
  P: 'immersiveengineering:plate_steel',
  B: 'immersiveengineering:light_bulb',
  G: 'tfc:lamp_glass',
  L: 'tfc:metal/unfinished_lamp/steel',
  W: 'immersiveengineering:wire_copper'
})

event.shaped('4x immersiveengineering:radiator', [
  'BPB',
  'PWP',
  'BPB'
], {
  P: 'immersiveengineering:plate_constantan',
  B: 'tfc:metal/block/black_steel',
  W: {"type":"immersiveengineering:fluid","amount":1000,"tag":"minecraft:water"}
})

event.shaped('immersiveengineering:floodlight', [
    'SII',
    'PLS',
    'SWM'
], {
    S: 'immersiveengineering:plate_silver',
    L: 'tfc:powder/lime',
    I: 'tfc:metal/ingot/steel',
    P: 'minecraft:glass_pane',
    W: 'immersiveengineering:wirecoil_electrum',
    M: 'immersiveengineering:component_steel'
})

event.shaped('immersiveengineering:connector_redstone', [
    'BBB',
    'TRT'
], {
    T: 'minecraft:terracotta',
    R: 'minecraft:redstone',
    B: 'tfc:metal/rod/brass'
})

event.shaped('immersiveengineering:fiberboard', [
    'SSS',
    'SGS',
    'SSS'
], {
    S: 'minecraft:terracotta',
    G: 'tfc:glue'
})

event.shaped('immersiveengineering:toolupgrade_drill_capacity', [
  'FP ',
  'PRP',
  ' PS'
], {
  F: 'immersiveengineering:fluid_pipe',
  P: 'immersiveengineering:plate_steel',
  R: 'tfc:metal/rod/red_steel',
  S: 'tfc:metal/sheet/red_steel'
})

event.shaped('immersiveengineering:toolupgrade_drill_waterproof', [
  'SP ',
  'PRP',
  ' PF'
], {
  F: 'immersiveengineering:fluid_pipe',
  P: 'immersiveengineering:plate_steel',
  R: 'tfc:metal/rod/blue_steel',
  S: 'tfc:metal/sheet/blue_steel'
})

event.shaped('immersiveengineering:cloche', [
  'GLG',
  'G G',
  'PMP'
],{
  G: 'firmalife:iron_greenhouse_wall',
  L: 'immersiveengineering:light_bulb',
  P: '#forge:treated_wood',
  M: 'immersiveengineering:component_iron'
})


/*
        Shapeless Recipes

Format:
event.shapeless('mod:output_id',[
  'mod:input_id',
  'mod:input_id',
  //...
]).damageIngredient(Ingredient.of('mod:tool')) // optional

*/

event.custom(
  {"type":"immersiveengineering:shapeless_fluid","category":"misc","ingredients":
  [
    {"tag":"forge:dusts/wood"},
    {"tag":"forge:dusts/wood"},
    {"tag":"forge:dusts/wood"},
    {"tag":"forge:dusts/wood"},
    {"type":"immersiveengineering:fluid","amount":1000,"tag":"minecraft:water"}],
    "result":{"count":2,"item":"tfc:unrefined_paper"}}
)

event.shapeless(Item.of('immersiveengineering:glider', '{Damage:0}'), [
  'kubejs:glider_sail',
  'kubejs:glider_harness'
])

event.shapeless('2x kubejs:metal_plate_brass',[
  'tfc:metal/sheet/brass',
  'immersiveengineering:wirecutter'
]).damageIngredient(Ingredient.of('immersiveengineering:wirecutter'))

event.shapeless('immersiveengineering:hempcrete_brick_cracked',[
  'immersiveengineering:hempcrete_brick',
  '#tfc:hammers'
]).damageIngredient(Ingredient.of('#tfc:hammers'))

event.shapeless('immersiveengineering:concrete_brick_cracked',[
  'immersiveengineering:concrete_brick',
  '#tfc:hammers'
]).damageIngredient(Ingredient.of('#tfc:hammers'))

event.shapeless('immersiveengineering:hempcrete_chiseled',[
  'immersiveengineering:hempcrete_brick',
  '#tfc:chisels'
]).damageIngredient(Ingredient.of('#tfc:chisels'))

event.shapeless('immersiveengineering:concrete_chiseled',[
  'immersiveengineering:concrete_brick',
  '#tfc:chisels'
]).damageIngredient(Ingredient.of('#tfc:chisels'))

/*
        Immersive Engineering Blueprint Recipes
*/

event.custom({
  "type": "immersiveengineering:blueprint",
  "category": "components",
  "result": {
    "count": 3,
    "item": "immersiveengineering:electron_tube"
  },
  "inputs": [
    {"item": "tfc:empty_jar"},
    {"tag": "forge:plates/nickel"},
    {"tag": "forge:wires/copper"},
    {"tag": "forge:dusts/redstone"}
  ],
})

event.custom({
  "type": "immersiveengineering:blueprint",
  "category": "components",
  "result": {
    "count": 3,
    "item": "immersiveengineering:light_bulb"
  },
  "inputs": [
    {"item": "kubejs:glass_bulb"},
    {
      "base_ingredient": [
        {"item": "immersiveengineering:wire_electrum"}
      ],
      "count": 1
    },
    {"item": "immersiveengineering:plate_copper"}
  ],
})

/*
        Immersive Engineering Crusher Recipes
*/

event.custom({
  "type": "immersiveengineering:crusher",
  "energy": 6000,
  "result": {
    "count": 4,
    "base_ingredient": {
      "item": "tfc:ore/bituminous_coal"
    }
  },
  "secondaries": [
    {
      "chance": 0.15,
      "output": {
        "item": "tfc:powder/sulfur"
      }
    }
  ],
  "input": {
    "tag": "forge:ores/coal"
  }
})

/*
        Immersive Engineering Metal Press Recipes
*/


event.custom(
  {
    "type": "immersiveengineering:metal_press",
    "mold": "immersiveengineering:mold_bullet_casing",
    "input": {
      "tag": "forge:ingots/brass"
    },
    "result": {
      "item": "immersiveengineering:empty_casing",
      "count": 4
    },
    "energy": 2400
  }
)


event.custom({
  "type": "immersiveengineering:metal_press",
  "energy": 2400,
  "result": {
    "item": "create:sturdy_sheet"
  },
  "input": {
    "item": "tfc:metal/ingot/black_steel"
  },
  "mold": "immersiveengineering:mold_plate"
})

/*
        Sewing Recipes
*/

event.custom({
  "type": "sewingkit:sewing",
  "materials": [
    {
      "count": 2,
      "ingredient": {
        "tag": "minecraft:wool"
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": "tfc:metal/rod/wrought_iron"
      }
    }
  ],
  "result": {
    "item": "immersiveengineering:earmuffs"
  },
  "tool": {
    "type": "sewingkit:tool_ingredient",
    "tool_type": "sewingkit_sew"
  }
})

event.custom({
  "type": "sewingkit:sewing",
  "materials": [
    {
      "count": 8,
      "ingredient": {
        "item": "tfc:silk_cloth"
      }
    },
    {
      "count": 2,
      "ingredient": {
        "item": "immersiveengineering:stick_aluminum"
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": "minecraft:string"
      }
    }
  ],
  "result": {
    "item": "kubejs:glider_sail"
  },
  "tool": {
    "type": "sewingkit:tool_ingredient",
    "tool_type": "sewingkit_sew"
  }
})

event.custom({
  "type": "sewingkit:sewing",
  "materials": [
    {
      "count": 6,
      "ingredient": {
        "item": "sewingkit:leather_strip"
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": "minecraft:leather"
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": "tfc:metal/rod/black_steel"
      }
    }
  ],
  "result": {
    "item": "kubejs:glider_harness"
  },
  "tool": {
    "type": "sewingkit:tool_ingredient",
    "tool_type": "sewingkit_sew"
  }
})

event.custom(
  {
    "type": "immersiveengineering:metal_press",
    "energy": 2400,
    "input": {
      "tag": "forge:ingots/brass"
    },
    "mold": "immersiveengineering:mold_plate",
    "result": {
      "item": "kubejs:metal_plate_brass"
    }
  }
  
)

event.custom(
  {
    "type": "advancedtfctech:beamhouse",
    "result": {
      "stack": {
        "item": "tfc:jute_fiber",
        "count": 1
      }
    },
    "input": {
      "item": "tfc:jute"
    },
    "fluid": {
      "tag": "tfc:fresh_water",
      "amount": 200
    },
    "time": 300,
    "energy": 6000
  }
)
event.custom(
  {
    "type": "advancedtfctech:beamhouse",
    "result": {
      "stack": {
        "item": "tfc_ie_addon:treated_wood_lumber",
        "count": 1
      }
    },
    "input": {
      "tag": "tfc:lumber"
    },
    "fluid": {
      "tag": "forge:creosote",
      "amount": 50
    },
    "time": 300,
    "energy": 6000
  }
)

event.custom(
  {
    "type": "advancedtfctech:beamhouse",
    "result": {
      "stack": {
        "item": "tfc:soaked_papyrus_strip",
        "count": 1
      }
    },
    "input": {
      "tag": "mimi:resonant_reed"
    },
    "fluid": {
      "tag": "tfc:fresh_water",
      "amount": 200
    },
    "time": 300,
    "energy": 6000
  }
)

event.custom(
  {
    "type": "advancedtfctech:beamhouse",
    "result": {
      "stack": {
        "item": "tfc:mortar",
        "count": 16
      }
    },
    "input": {
      "tag": "forge:sand"
    },
    "fluid": {
      "tag": "tfc:limewater",
      "amount": 100
    },
    "time": 300,
    "energy": 6000
  }
)


})
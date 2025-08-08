// priority: 1

ServerEvents.tags('block', event => {
/*
        Add tags

Format:
    event.add('mod:tag', 'mod:item_id')

*/

event.add('create:passive_boiler_heaters', 'tfc:rock/magma/granite')
event.add('create:passive_boiler_heaters', 'tfc:rock/magma/diorite')
event.add('create:passive_boiler_heaters', 'tfc:rock/magma/gabbro')
event.add('create:passive_boiler_heaters', 'tfc:rock/magma/rhyolite')
event.add('create:passive_boiler_heaters', 'tfc:rock/magma/basalt')
event.add('create:passive_boiler_heaters', 'tfc:rock/magma/andesite')
event.add('create:passive_boiler_heaters', 'tfc:rock/magma/dacite')

})


ServerEvents.tags('item', event => {
  event.add('create:contraption_controlled', 'tfc:brass_bell')
  event.add('create:contraption_controlled', 'tfc:bronze_bell')
  event.add('forge:copper_pipe', 'create:fluid_pipe')
  event.add('forge:bells', 'create:peculiar_bell')
  event.add('forge:tea_leaves', 'firmalife:plant/vanilla')
  event.add('forge:tea_leaves', 'firmalife:plant/cardamom')
  event.add('forge:igneous_grits', 'kubejs:dust_zinc')
})

ServerEvents.recipes( event => {
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
  { output: 'create:hand_crank' },
  'create:andesite_alloy',
  'tfc:metal/ingot/wrought_iron'
  )

event.replaceInput(
  { input: 'create:brass_sheet' },
  'create:brass_sheet',
  'kubejs:metal_plate_brass'
  )
event.replaceInput(
  { output: 'create:belt_connector' },
  'minecraft:dried_kelp',
  'sewingkit:leather_strip'
  )
//event.replaceInput(
//  { output: 'create:tree_fertilizer'},
//  'minecraft:fire_coral',
//  '#tfc:coral'
//  )
event.replaceInput(
  { output: 'create:display_board'},
  'create:electron_tube',
  'create:cogwheel'
  )
event.replaceInput(
  { output: 'create:andesite_funnel'},
  'minecraft:dried_kelp',
  'immersiveengineering:strip_curtain'
  )
event.replaceInput(
  { output: 'create:brass_funnel'},
  'minecraft:dried_kelp',
  'immersiveengineering:strip_curtain'
  )
event.replaceInput(
  { output: 'create:andesite_tunnel'},
  'minecraft:dried_kelp',
  'immersiveengineering:strip_curtain'
  )
event.replaceInput(
  { output: 'create:brass_tunnel'},
  'minecraft:dried_kelp',
  'immersiveengineering:strip_curtain'
  )
event.replaceInput(
  { output: 'create:mechanical_harvester'},
  '#forge:plates/iron',
  'advancedtfctech:fleshing_blades'
  )
event.replaceInput(
  { output: 'create:redstone_contact'},
  'minecraft:cobblestone',
  '#forge:cobblestone'
  )
event.replaceInput(
    { output: 'create:propeller' },
    '#forge:plates/iron',
    'kubejs:propeller_blade'
    )
event.replaceInput(
  { output: 'create:item_drain' },
  'minecraft:iron_bars',
  'kubejs:steel_chain_mesh'
  )
event.replaceInput(
  { output: 'create:hose_pulley' },
  'minecraft:dried_kelp_block',
  'immersiveengineering:fluid_pipe'
  )
event.replaceInput(
  { output: 'create:steam_whistle' },
  '#forge:plates/gold',
  'tfc:metal/sheet/gold'
  )
event.replaceInput(
  { output: 'create:steam_whistle' },
  '#forge:ingots/copper',
  'tfc:metal/ingot/rose_gold'
  )
event.replaceInput(
  { output: 'create:spout' },
  'minecraft:dried_kelp',
  'immersiveengineering:toolupgrade_chemthrower_focus'
  )
event.replaceInput(
  { output: 'create:controller_rail' },
  '#forge:ingots/gold',
  'tfc:metal/rod/gold'
  )
event.replaceInput(
  { output: 'create:clockwork_bearing' },
  'create:electron_tube',
  'minecraft:clock'
  )
event.replaceInput(
  { output: 'create:electron_tube' },
  '#forge:plates/iron',
  'immersiveengineering:plate_iron'
  )
event.replaceInput(
  { output: 'create:encased_chain_drive' },
  'minecraft:iron_nugget',
  '#forge:chains'
  )
event.replaceInput(
  { output: 'create:wrench' },
  '#forge:rods/wooden',
  'tfc:metal/rod/cast_iron'
  )
event.replaceInput(
  { output: 'create:sand_paper' },
  'minecraft:sand',
  '#forge:sand'
  )
event.replaceInput(
  { output: 'create:sand_paper' },
  'minecraft:paper',
  'tfc:unrefined_paper'
  )
  event.replaceInput(
    { output: 'create:clipboard' },
    'create:andesite_alloy',
    'immersiveengineering:stick_aluminum'
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

event.recipes.tfc.anvil('8x create:fluid_pipe', 'tfc:metal/sheet/copper', ['draw_last', 'bend_not_last']).tier(1)
event.recipes.tfc.anvil('kubejs:unfinished_brass_hand', 'tfc:metal/double_ingot/brass', ['bend_last', 'bend_not_last', 'upset_not_last']).tier(2)

/*
        TFC Welding Recipes

Format:
event.recipes.tfc.welding('mod:output_id', 'mod:input_id', 'mod:additional_item_id',#) // # = tier

*/
event.recipes.tfc.welding(Item.of('minecraft:netherite_leggings', '{Damage:0}'), Item.of('tfc:metal/greaves/copper', '{Damage:0}'), 'tfc:metal/unfinished_greaves/black_steel',5)
event.recipes.tfc.welding('create:netherite_diving_boots', 'create:copper_diving_boots', 'tfc:metal/ingot/black_steel',5)
event.recipes.tfc.welding('create:netherite_backtank', 'create:copper_backtank', 'tfc:metal/ingot/black_steel',5)
event.recipes.tfc.welding('create:brass_hand', 'immersiveengineering:plate_iron', 'kubejs:unfinished_brass_hand', 3)
event.recipes.tfc.welding('create:peculiar_bell', 'tfc:brass_bell', 'tfc:brass_mechanisms',2)
event.recipes.tfc.welding('create:copper_diving_helmet', 'tfc:metal/unfinished_helmet/copper', 'firmalife:reinforced_glass',2)
event.recipes.tfc.welding('create:netherite_diving_helmet', 'create:copper_diving_helmet', 'tfc:metal/ingot/black_steel',5)
event.recipes.tfc.welding('create:copper_diving_boots', 'tfc:metal/unfinished_boots/copper', 'tfc_ie_addon:metal/sheet/lead',2)

event.recipes.tfc.heating('create:basin', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 1600))

event.recipes.tfc.heating('create:andesite_alloy', 1535).resultFluid(Fluid.of('kubejs:molten_igneous_alloy', 100))

event.recipes.tfc.heating('#forge:magma_block', 2000).resultFluid(Fluid.of('minecraft:lava', 50))



event.recipes.tfc.barrel_sealed(1000)
      .outputItem('create:rose_quartz')
      .inputs('#forge:gems/quartz', TFC.fluidStackIngredient('immersiveengineering:redstone_acid', 1000))

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

event.shaped('create:windmill_bearing',[
  'LLL',
  'ISI',
  'IMI'
],{
  L: '#tfc:lumber',
  S: 'create:shaft',
  M: 'tfc:brass_mechanism',
  I: 'tfc:metal/ingot/wrought_iron'
})

event.shaped('2x create:windmill_bearing',[
  'LLL',
  'ISI',
  'IMI'
],{
  L: '#tfc:lumber',
  S: 'create:shaft',
  M: 'tfc:brass_mechanism',
  I: 'tfc:metal/ingot/steel'
})

event.shaped('create:crafter_slot_cover',[
  'MM'
], {
  M: 'kubejs:metal_plate_brass'
})

event.shaped('create:super_glue',[
  'GS',
  'LG'
], {
  G: 'tfc:glue',
  S: 'tfc:metal/sheet/tin',
  L: 'tfc:jar_lid'
})

event.shaped('4x create:chute',[
  'D D',
  ' S ',
], {
  S: 'tfc:metal/ingot/steel',
  D: 'immersiveengineering:plate_steel'
})

event.shaped('create:basin',[
  'D D',
  'SDS',
], {
  D: 'tfc:metal/double_sheet/cast_iron',
  S: 'tfc:metal/sheet/cast_iron'
})

event.shaped('4x create:metal_bracket',[
  'RRR',
  'PAP',
], {
  P: 'immersiveengineering:plate_iron',
  A: 'create:andesite_alloy',
  R: 'tfc:metal/rod/wrought_iron'
})

event.shaped('create:smart_fluid_pipe',[
  ' P ',
  'MCM',
  ' E '
], {
  P: 'kubejs:metal_plate_brass',
  C: 'create:fluid_pipe',
  M: 'tfc:brass_mechanisms',
  E: 'create:electron_tube'
})

event.shaped('2x create:fluid_tank',
[
  ' P ',
  'PGP',
  ' P '
], {
  P: 'immersiveengineering:plate_copper',
  G: 'firmalife:reinforced_glass'
})
event.shaped('4x create:fluid_tank',
[
  ' P ',
  'PGP',
  ' P '
], {
  P: 'tfc:metal/sheet/copper',
  G: 'firmalife:reinforced_glass'
})

event.shaped('create:smart_chute',[
  ' P ',
  'MCM',
  ' E '
], {
  P: 'kubejs:metal_plate_brass',
  C: 'create:chute',
  M: 'tfc:brass_mechanisms',
  E: 'create:electron_tube'
})

event.shaped('create:display_link',[
  'C',
  'W',
  'B'
], {
  C: 'immersiveengineering:component_electronic_adv',
  W: 'immersiveengineering:wirecoil_copper',
  B: 'create:brass_casing'
})

event.shaped('4x create:nixie_tube',[
  'VV',
  'EE'
], {
  V: 'immersiveengineering:electron_tube',
  E: 'create:electron_tube'
})


event.shaped('create:gantry_carriage',[
  'GW',
  'SA',
  ' C'
], {
  G: 'tfc:glue',
  W: '#minecraft:wooden_slabs',
  S: 'create:shaft',
  A: 'create:andesite_casing',
  C: 'create:cogwheel'
})

event.shaped('create:steam_engine',[
  ' A ',
  'PTP',
  ' H '
], {
  A: 'create:mechanical_arm',
  P: 'immersiveengineering:plate_constantan',
  T: 'create:fluid_tank',
  H: 'immersiveengineering:generator'
})

event.shaped('create:mechanical_saw',[
  'C',
  'A',
  'S'
], {
  S: 'create:shaft',
  C: 'immersiveengineering:sawblade',
  A: 'create:andesite_casing'
})

event.shaped('2x create:electron_tube',[
  'R',
  'P'
], {
  R: 'create:polished_rose_quartz',
  P: '#forge:plates/steel'
})

event.shaped('kubejs:burner_core',[
  'GMG',
  'MCM',
  'GMG'
], {
  C: 'tfc:crucible',
  G: 'immersiveengineering:plate_gold',
  M: '#tfc:magma'
})

event.shaped('kubejs:burner_core',[
  'GMG',
  'MCM',
  'GMG'
], {
  C: 'immersiveengineering:coke',
  G: 'immersiveengineering:plate_gold',
  M: '#tfc:magma'
})

event.shaped('create:rope_pulley',[
  ' S ',
  'BBB',
  ' I '
], {
  S: 'create:andesite_casing',
  B: 'immersiveengineering:wirecoil_structure_rope',
  I: 'immersiveengineering:plate_iron'
})


event.shaped('create:elevator_pulley',[
  ' S ',
  'BBB',
  ' I '
], {
  S: 'create:brass_casing',
  B: 'immersiveengineering:wirecoil_structure_rope',
  I: 'immersiveengineering:plate_steel'
})

event.shaped('create:empty_blaze_burner',[
  ' B ',
  'BSB',
  ' B '
], {
  S: 'tfc_ie_addon:metal/sheet/constantan',
  B: 'tfc:metal/bars/wrought_iron'
}
)

event.shaped('create:mechanical_press',[
  ' R ',
  'SCS',
  'DDD'
], {
  R: 'create:piston_extension_pole',
  S: 'create:shaft',
  C: 'create:andesite_casing',
  D: 'tfc:metal/double_sheet/cast_iron'
})

event.shaped('create:copper_backtank',[
  'ISI',
  'LTL',
  ' V '
], {
  I: 'create:andesite_alloy',
  S: 'create:shaft',
  T: 'create:fluid_tank',
  L: 'sewingkit:leather_strip',
  V: 'create:fluid_valve'
})

event.shaped('create:whisk',[
  ' R ',
  'RIR',
  ' R '
], {
  I: 'create:andesite_alloy',
  R: 'immersiveengineering:stick_aluminum'
})

event.shaped('2x create:item_vault',[
  ' R ',
  'RIR',
  ' R '
], {
  I: 'immersiveengineering:crate',
  R: 'immersiveengineering:plate_steel'
})

event.shaped('create:goggles',
[
  ' S ',
  'LGL'
], {
  G: 'tfc:metal/rod/gold',
  L: 'tfc:lens',
  S: 'sewingkit:leather_strip',
})

event.shaped('2x create:shaft',[
  'SC',
  'S '
], {
  S: '#tfc:rock/raw',
  C: '#tfc:chisels'
}).damageIngredient(Ingredient.of('#tfc:chisels'))

event.shaped('4x create:white_sail',[
  'CS',
  'SI'
], {
  I: 'create:andesite_alloy',
  S: '#forge:rods/wooden',
  C: '#tfc:high_quality_cloth'
})

event.shaped('2x create:white_sail',[
  'CS',
  'SI'
], {
  I: 'create:andesite_alloy',
  S: '#forge:rods/wooden',
  C: 'tfc:burlap_cloth'
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

event.shapeless('2x create:sturdy_sheet',[
  'tfc:metal/sheet/black_steel',
  'immersiveengineering:wirecutter'
]).damageIngredient(Ingredient.of('immersiveengineering:wirecutter'))

event.shapeless('create:filter',[
  'tfc:burlap_cloth',
  'create:andesite_alloy'
])

event.shapeless('create:attribute_filter',[
  'tfc:burlap_cloth',
  'kubejs:metal_plate_brass'
])

/*
		Create Item Application
*/


event.custom({
    'type': 'create:item_application',
    'ingredients': [{'tag': 'forge:stripped_logs'},
            {'item': 'tfc:metal/ingot/copper'}],
    'results': {'item': 'create:copper_casing'}
})

/*
       Create Item Application Recipes
*/
event.custom({
  'type': 'create:item_application',
  'ingredients': [
      {
        'tag': 'forge:stripped_wood'
      },
      {
        'tag': "forge:ingots/copper"
      }
    ],
  'results': [
    {
      'item': 'create:copper_casing'
    }
  ]
})

event.custom({
  'type': 'create:item_application',
  'ingredients': [
      {
        'tag': 'forge:stripped_logs'
      },
      {
        'tag': "forge:ingots/copper"
      }
    ],
  'results': [
    {
      'item': 'create:copper_casing'
    }
  ]
})

/*
       Create Mixing Recipes
*/


event.custom({
  'type': 'create:mixing',
  'heatRequirement': 'heated',
  'results': [
    {
      'amount': 500,
      'fluid': 'create:tea'
    }
  ],
  'ingredients': [
    {
      'tag': 'forge:tea_leaves'
    },{
      'item': 'tfc:plant/artists_conk'
    },{
      'amount': 250,
      'fluid': 'minecraft:water'
    },{
      'amount': 250,
      'fluidTag': 'forge:milk'
    }
  ]
})

event.custom({
  'type': 'create:mixing',
  'results': [
    {
      'item': 'tfc:unrefined_paper',
      'count': 2
    }
  ],
  'ingredients': [
    {
      'tag': 'forge:dusts/wood'
    },{
      'tag': 'forge:dusts/wood'
    },{
      'amount': 1000,
      'fluid': 'minecraft:water'
    },{
      'tag': 'forge:dusts/wood'
    },
    {
      'tag': 'forge:dusts/wood'
    }
  ]
})

/*
        Create Mechanical Crafting Recipes
*/

event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "result": {
    "count": 1,
    "item": "create:mechanical_roller"
  },
  "pattern": [
    "EAAA",
    "CAMA",
    " AAA"
  ],
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "immersiveengineering:component_steel"
    },
    "E": {
      "item": "create:electron_tube"
    }
  }
})

event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "result": {
    "count": 1,
    "item": "create:potato_cannon"
  },
  "pattern": [
    " T ",
    " T ",
    "PCS",
    "QMS",
    " T "
  ],
  "key": {
    "S": {
      "item": "immersiveengineering:plate_copper"
    },
    "C": {
      "item": "create:cogwheel"
    },
    "M": {
      "item": "createbigcannons:cannon_mount"
    },
    "Q": {
      "item": "createbigcannons:quickfiring_mechanism"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "T": {
      "tag": "forge:copper_pipe"
    }
  }
})

event.custom(
{
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "result": {
    "count": 1,
    "item": "create:wand_of_symmetry"
  },
  "pattern": [
    " P ",
    "PGP",
    " S ",
    " M ",
    " R "
  ],
  "key": {
    "P": {
      "item": "minecraft:magenta_stained_glass"
    },
    "G": {
      "item": "create_new_age:overcharged_diamond"
    },
    "S": {
      "item": "immersiveengineering:toolupgrade_railgun_scope"
    },
    "M": {
      "item": "create:precision_mechanism"
    },
    "R": {
      "item": "tfc:metal/rod/black_steel"
    }
  }
})


//mixing bowl automation
event.custom(
  {
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "tfc:powder/salt"
      },
      {
        "amount": 1000,
        "fluid": "firmalife:cream",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": "firmalife:food/butter"
      }
    ]
  }
  )

event.custom(
  {
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "item": 'tfc:kaolin_clay'
      }
    ],
    "results": [
      {
        "item": 'tfc:powder/kaolinite',
        "chance": 0.3
      }
    ]
  }
)

//custom
event.custom(
  {
    "type": "minecraft:blasting",
    "category": "misc",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "tfc:ceramic/unfired_brick"
    },
    "result": "minecraft:brick"
  }
)



})

//  ServerEvents.tags('item', event => {
//    event.add('#create:blaze_burner_fuel/special', 'immersiveengineering:coal_coke')

//   event.add('create:passive_boiler_heaters', 'tfc:rock/magma/granite')
//   event.add('create:passive_boiler_heaters', 'tfc:rock/magma/diorite')
//   event.add('create:passive_boiler_heaters', 'tfc:rock/magma/gabbro')
//   event.add('create:passive_boiler_heaters', 'tfc:rock/magma/rhyolite')
//   event.add('create:passive_boiler_heaters', 'tfc:rock/magma/basalt')
//   event.add('create:passive_boiler_heaters', 'tfc:rock/magma/andesite')
//   event.add('create:passive_boiler_heaters', 'tfc:rock/magma/dacite')
 //})

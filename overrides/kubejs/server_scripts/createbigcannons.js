// priority: 1

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
  { output: 'createbigcannons:empty_powder_charge' },
  'minecraft:string',
  '#forge:string'
  )
event.replaceInput(
  { output: 'createbigcannons:empty_powder_charge' },
  '#minecraft:wool',
  '#tfc:high_quality_cloth'
  )
event.replaceInput(
  { input: 'createbigcannons:nethersteel_ingot' },
  'createbigcannons:nethersteel_ingot',
  'tfc:metal/ingot/black_steel'
  )

/*
        TFC Welding Recipes

Format:
event.recipes.tfc.welding('mod:output_id', 'mod:input_id', 'mod:additional_item_id',#) // # = tier

*/

event.recipes.tfc.welding('createbigcannons:wrought_iron_drop_mortar_end', 'createbigcannons:wrought_iron_cannon_end', 'tfc:metal/rod/wrought_iron', 3)



event.recipes.tfc.heating('createbigcannons:congealed_nitro', 1399).resultItem('createbigcannons:hardened_nitro')



event.recipes.tfc.quern('2x createbigcannons:nitropowder', 'createbigcannons:hardened_nitro')

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

event.shaped('createbigcannons:worm_head',[
  'M',
  'P'
],{
  M: '#forge:chain_meshes',
  P: 'create:piston_extension_pole'
})

event.shaped('2x createbigcannons:big_cartridge_sheet',[
  'PP',
  'PP'
], {
  P: 'kubejs:metal_plate_brass'
})

event.shaped('createbigcannons:solid_shot',[
  ' W ',
  ' W ',
  ' P '
], {
  P: 'immersiveengineering:plate_steel',
  W: 'tfc:metal/sheet/wrought_iron'
})

event.shaped('createbigcannons:ap_shot',[
  ' B ',
  ' W ',
  ' P '
], {
  P: 'immersiveengineering:plate_steel',
  W: 'tfc:metal/sheet/wrought_iron',
  B: 'tfc:metal/sheet/black_steel'
})

event.shaped('createbigcannons:mortar_stone',[
  ' B ',
  'CGC',
  ' P '
], {
  P: 'immersiveengineering:plate_steel',
  C: 'tfc:metal/sheet/cast_iron',
  G: 'immersiveengineering:gunpowder_barrel',
  B: 'tfc:metal/sheet/steel'
})

event.shaped('createbigcannons:bag_of_grapeshot',[
  'SSS',
  'WBW',
  ' P '
], {
  P: 'immersiveengineering:plate_steel',
  S: '#forge:string',
  B: 'kubejs:shot_balls',
  W: '#tfc:high_quality_cloth'
})

event.shaped('createbigcannons:smoke_shell',[
  'PHP',
  'PHP',
  'PSP'
], {
  P: 'immersiveengineering:plate_steel',
  S: 'immersiveengineering:slab_storage_steel',
  H: 'minecraft:hay_block'
})

event.shaped('createbigcannons:wrought_iron_cannon_end',[
  ' I ',
  'SSS',
  ' G '
], {
  I: 'tfc:metal/ingot/wrought_iron',
  S: 'tfc:metal/sheet/wrought_iron',
  G: 'minecraft:gunpoweder'
})

event.shaped('createbigcannons:wrought_iron_cannon_chamber',[
  ' S ',
  'SGS',
  ' S '
], {
  S: 'tfc:metal/double_sheet/wrought_iron',
  G: 'minecraft:gunpoweder'
})

event.shaped('kubejs:shot_balls',[
  'RRR',
  'RRR',
  'RRR',
], {
  R: '#tfc:rock_knapping'
})

event.shaped('createbigcannons:drop_mortar_shell',[
  ' G ',
  'PSP',
  ' C '
],{
  G: 'immersiveengineering:gunpowder_barrel',
  P: 'immersiveengineering:plate_iron',
  S: 'create:shaft',
  C: 'createbigcannons:powder_charge'
})

event.shaped('4x createbigcannons:impact_fuze',[
  'B',
  'R'
],{
  B: '#minecraft:stone_buttons',
  R: 'minecraft:redstone'
})

event.shaped('4x createbigcannons:timed_fuze',[
  'I',
  'C',
  'R'
],{
  I: 'tfc:metal/ingot/wrought_iron',
  C: 'minecraft:clock',
  R: 'minecraft:redstone'
})

event.shaped('4x createbigcannons:proximity_fuze',[
  ' B ',
  'RQR',
  ' I '
],{
  B: '#mcw_tfc_aio:metal_rods',
  R: 'minecraft:redstone',
  Q: '#forge:gems',
  I: 'tfc:metal/ingot/wrought_iron'
})


event.shaped('createbigcannons:casting_sand',[
  'SS',
  'DC'
],{
  S: '#minecraft:sand',
  D: '#minecraft:dirt',
  C: '#forge:clay'
})

event.shaped('createbigcannons:cannon_drill',[
  ' D ',
  'PCP',
  ' S '
],{
  D: 'immersiveengineering:drillhead_steel',
  P: 'create:fluid_pipe',
  C: 'create:andesite_casing',
  S: 'create:piston_extension_pole'
})

event.shaped('createbigcannons:cannon_builder',[
  'RIR',
  ' C ',
  ' P '
],{
  R: 'tfc:metal/rod/steel',
  I: 'tfc:metal/ingot/steel',
  C: 'create:andesite_casing',
  P: 'create:piston_extension_pole'
})

event.shaped('4x createbigcannons:ap_autocannon_round',[
  'R',
  'I'
],{
  R: 'tfc:metal/rod/black_steel',
  I: 'tfc:metal/ingot/wrought_iron'
})

event.shaped('createbigcannons:spring_wire',[
  'LWL',
  ' W ',
  'LWL'
],{
  L: '#tfc:lumber',
  W: 'immersiveengineering:wire_steel'
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

event.shapeless('createbigcannons:tracer_tip',[
  'tfc:powder/lime',
  'createbigcannons:nitropowder'
])

/*
        Create Cutting Recipes
*/

event.custom({
  'type': 'create:cutting',
  'results': [
    {
      'count': 4,
      'item': 'createbigcannons:autocannon_cartridge_sheet'
    }
  ],
  'ingredients': [
    {
      'item': 'kubejs:metal_plate_brass'
    }
  ]
})

event.custom({
  'type': 'create:cutting',
  'results': [
    {
      'item': 'createbigcannons:autocannon_cartridge_sheet'
    },
    {
      'chance': 0.125,
      'item': 'createbigcannons:autocannon_cartridge_sheet'
    },
    {
      'chance': 0.125,
      'item': 'createbigcannons:autocannon_cartridge_sheet'
    }
  ],
  'ingredients': [
    {
      'tag': 'forge:autocannon_cartridge_plate'
    }
  ]
})

/*
        Create Mixing Recipes
*/

event.custom({
  'type': 'create:mixing',
  'ingredients': [{
    'amount': 100,
    'fluid': 'immersiveengineering:redstone_acid'
  },{
    'amount': 100,
    'fluid': 'immersiveengineering:biodiesel'
  }],
  'results': [{
    'count': 4,
    'item': 'createbigcannons:congealed_nitro'
  }]
})

/*
        Create Mechanical Crafting Recipes
*/

event.custom({
  'type': 'create:mechanical_crafting',
  'acceptMirrored': false,
  'result': {
    'count': 1,
    'item': 'createbigcannons:he_shell'
  },
  'pattern': [
    ' S ',
    'SGS',
    'SGS',
    ' P '
  ],
  'key': {
    'S': {
      'item': 'tfc:metal/sheet/cast_iron'
    },
    'G': {
      'item': 'immersiveengineering:gunpowder_barrel'
    },
    'P': {
      'item': 'immersiveengineering:plate_steel'
    }
  }
})

event.custom({
  'type': 'create:mechanical_crafting',
  'acceptMirrored': false,
  'result': {
    'count': 1,
    'item': 'createbigcannons:ap_shell'
  },
  'pattern': [
    ' B ',
    'SGS',
    'SGS',
    ' P '
  ],
  'key': {
    'S': {
      'item': 'tfc:metal/sheet/cast_iron'
    },
    'B': {
      'item': 'tfc:metal/sheet/black_steel'
    },
    'G': {
      'item': 'immersiveengineering:gunpowder_barrel'
    },
    'P': {
      'item': 'immersiveengineering:plate_steel'
    }
  }
})

event.custom({
  'type': 'create:mechanical_crafting',
  'acceptMirrored': false,
  'result': {
    'count': 1,
    'item': 'createbigcannons:shrapnel_shell'
  },
  'pattern': [
    ' S ',
    'SBS',
    'SPS',
    ' L '
  ],
  'key': {
    'S': {
      'item': 'tfc:metal/sheet/cast_iron'
    },
    'B': {
      'item': 'kubejs:shot_balls'
    },
    'P': {
      'item': 'createbigcannons:packed_gunpowder'
    },
    'L': {
      'item': 'immersiveengineering:plate_steel'
    }
  }
})

event.custom({
  'type': 'create:mechanical_crafting',
  'acceptMirrored': false,
  'result': {
    'count': 1,
    'item': 'createbigcannons:cannon_carriage'
  },
  'pattern': [
    '   P ',
    '  PSP',
    'RPPPR',
    'MLLLM',
    'W   W'
  ],
  'key': {
    'P': {
      'tag': 'minecraft:planks'
    },
    'S': {
      'item': 'create:shaft'
    },
    'R': {
      'item': 'tfc:metal/rod/steel'
    },
    'M': {
      'item': 'tfc:brass_mechanisms'
    },
    'L': {
      'tag': 'tfc:lumber'
    },
    'W': {
      'item': 'createbigcannons:pair_of_cannon_wheels'
    }
  }
})
})
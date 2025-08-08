// priority: 1

ServerEvents.tags('item', event => {
  event.add('forge:black_bricks', 'tfc:brick/basalt')
  event.add('forge:black_bricks', 'tfc:brick/dolomite')
  event.add('forge:black_bricks', 'tfc:brick/shale')
  event.add('forge:white_bricks', 'tfc:brick/diorite')
  event.add('forge:white_bricks', 'tfc:brick/chalk')
  event.add('forge:white_bricks', 'tfc:brick/marble')
  event.add('forge:white_bricks', 'tfc:brick/quartzite')
  event.add('forge:white_bricks', 'tfc:alabaster_brick')
  event.add('forge:soap_ash', 'supplementaries:ash')
  event.add('forge:soap_ash', 'tfc:powder/wood_ash')
})

ServerEvents.recipes(event => {

  event.shaped(
    Item.of('supplementaries:ash_bricks', 4),
    [
      'BMB',
      'MBM',
      'BMB'
    ],
    {
      B: 'supplementaries:ash_brick',
      M: 'tfc:mortar'
    }
  )

event.recipes.tfc.anvil('supplementaries:goblet', 'tfc:metal/ingot/wrought_iron', ['upset_not_last','shrink_any','bend_last']).tier(3)
event.recipes.tfc.anvil('supplementaries:bubble_blower', 'tfc:metal/ingot/tin', ["draw_not_last", "bend_any", "hit_any"]).tier(1)
event.recipes.tfc.anvil('supplementaries:weather_vane', 'tfc:metal/double_ingot/wrought_iron', ['draw_not_last', 'shrink_not_last', 'shrink_last']).tier(3)
event.recipes.tfc.anvil('supplementaries:gold_door', 'tfc:metal/sheet/gold', ["hit_last", "draw_not_last", "punch_not_last"]).tier(1)
event.recipes.tfc.anvil('supplementaries:gold_trapdoor', 'tfc:metal/sheet/gold', ["bend_last", "draw_second_last", "draw_third_last"]).tier(1)
event.recipes.tfc.anvil('supplementaries:iron_gate', 'tfc:metal/bars/wrought_iron', ["draw_third_last", "shrink_second_last", "shrink_last"]).tier(3)
event.recipes.tfc.anvil('supplementaries:key', 'tfc:metal/rod/gold', ["draw_not_last", "bend_any", "hit_any"]).tier(1)
event.recipes.tfc.anvil('supplementaries:netherite_door', 'tfc:metal/sheet/black_steel', ["hit_last", "draw_not_last", "punch_not_last"]).tier(5)
event.recipes.tfc.anvil('supplementaries:netherite_trapdoor', 'tfc:metal/sheet/black_steel', ["bend_last", "draw_second_last", "draw_third_last"]).tier(5)
event.recipes.tfc.anvil('supplementaries:wrench', 'tfc:metal/ingot/copper', ["bend_last", "draw_second_last", "draw_third_last"]).tier(1)
event.recipes.tfc.anvil('kubejs:candle_holder', 'tfc:metal/ingot/steel', ['punch_last', 'draw_not_last', 'hit_not_last']).tier(4)

event.recipes.tfc.heating('kubejs:unfired_urn', 1399).resultItem('supplementaries:urn')

event.recipes.tfc.barrel_sealed(1000)
  .outputItem('supplementaries:flag_white')
  .inputs('#supplementaries:flags', TFC.fluidStackIngredient('tfc:lye',25))

event.recipes.tfc.barrel_sealed(1000)
  .outputItem('supplementaries:present')
  .inputs('#supplementaries:presents', TFC.fluidStackIngredient('tfc:lye',25))

event.recipes.tfc.barrel_sealed(1000)
  .outputItem('supplementaries:trapped_present')
  .inputs('#supplementaries:trapped_presents', TFC.fluidStackIngredient('tfc:lye',25))

  event.recipes.tfc.extra_products_shapeless_crafting('tfc:ceramic/ingot_mold',
  event.shapeless('supplementaries:ash_brick', ['supplementaries:ash', 'tfc:ceramic/ingot_mold']))

event.shaped('supplementaries:doormat',[
  'CC',
  'CC'
],{
  C: 'farmersdelight:canvas_rug'
})

event.shaped('supplementaries:pulley_block', [
  'PSP',
  'PFP',
  'PSP'
], {
  S: '#minecraft:wooden_slabs',
  P: '#minecraft:planks',
  F: 'create:shaft'
})

event.shaped('supplementaries:speaker_block', [
  'PPP',
  'PDP',
  'PEP'
], {
  E: 'create:electron_tube',
  P: '#minecraft:planks',
  D: 'immersiveengineering:plate_duroplast'
})

event.shaped('supplementaries:hourglass', [
  ' B ',
  ' B ',
  ' G '
], {
  B: 'kubejs:glass_bulb',
  G: 'tfc:metal/sheet/gold'
})

event.shaped('supplementaries:hat_stand', [
  'P',
  'S'
], {
  S: '#forge:smooth_stone_slab',
  P: '#minecraft:planks'
})

event.shaped('supplementaries:timber_frame', [
  ' L ',
  'L L',
  ' L '
], {
  L: '#tfc:lumber'
})

event.shaped('supplementaries:timber_brace', [
  'L  ',
  'L L',
  '  L'
], {
  L: '#tfc:lumber'
})

event.shaped('supplementaries:timber_cross_brace', [
  'L L',
  '   ',
  'L L'
], {
  L: '#tfc:lumber'
})

event.shaped('4x supplementaries:bomb_blue', [
  ' N ',
  'NSN',
  ' N '
], {
  N: 'createbigcannons:nitropowder',
  S: 'tfc:metal/double_sheet/steel'
})

event.shaped('4x supplementaries:bomb', [
  ' N ',
  'NSN',
  ' N '
], {
  N: 'minecraft:gunpowder',
  S: 'tfc:metal/double_sheet/cast_iron'
})

event.shaped('supplementaries:altimeter', [
  'L',
  'R',
  'E'
], {
  R: 'minecraft:redstone',
  E: 'tfc_ie_addon:metal/sheet/electrum',
  L: 'tfc:lens'
})

event.shaped('supplementaries:slingshot', [
  'SLS',
  'RGR',
  ' R '
], {
  R: 'tfc:metal/rod/wrought_iron',
  G: 'tfc:glue',
  L: 'sewingkit:leather_sheet',
  S: '#forge:string'
})

event.shaped('supplementaries:cage',[
  'SSS',
  'B B',
  'LLL'
],{
  S: 'immersiveengineering:plate_iron',
  B: 'tfc:metal/bars/wrought_iron',
  L: '#tfc:lumber'
})

event.shaped('supplementaries:safe',[
  'BPB',
  'PGP',
  'BPB'
],{
  B: 'tfc:metal/block/black_steel',
  P: 'tfc:metal/double_sheet/black_steel',
  G: 'tfc:metal/trapdoor/black_steel'
})

event.shaped('supplementaries:crank',[
  ' S ',
  'BBB'
],{
  S: '#tfc:firepit_sticks',
  B: '#forge:cobblestone_slabs'
})

event.shaped('supplementaries:relayer',[
  'CCC',
  'RRI',
  'CCC'
],{
  C: '#forge:cobblestone',
  R: 'minecraft:redstone',
  I: 'tfc:metal/ingot/wrought_iron'
})

event.shaped('supplementaries:spring_launcher',[
  'LLL',
  'CRC',
  'CMC'
],{
  L: '#tfc:lumber',
  C: '#forge:cobblestone',
  R: 'createbigcannons:recoil_spring',
  M: 'tfc:brass_mechanisms'
})

event.shaped('2x supplementaries:crystal_display',[
  'SC',
  'SC',
  'SC'
],{
  S: '#forge:smooth_stone',
  C: 'tfc_ie_addon:mineral/quartz_shard'
})

event.shaped('supplementaries:lock_block',[
  'IPI',
  'PMP',
  'IPI'
],{
  I: 'tfc:metal/rod/wrought_iron',
  P: '#minecraft:planks',
  M: 'tfc:brass_mechanisms'
})

event.shapeless('supplementaries:ash', [
  'tfc:powder/wood_ash'
])

event.shapeless('tfc:powder/wood_ash', [
  'supplementaries:ash'
])

event.custom({
  'type': 'tfc:pot',
  'ingredients': [
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    }
  ],
  'fluid_ingredient': {
    'ingredient': 'tfc:olive_oil',
    'amount': 100
  },
  'duration': 1200,
  'temperature': 200,
  'item_output': [
    {
      'item': 'supplementaries:soap'
    },
    {
      'item': 'supplementaries:soap'
    },
    {
      'item': 'supplementaries:soap'
    },
    {
      'item': 'supplementaries:soap'
    },
    {
      'item': 'supplementaries:soap'
    }
  ]
})

event.custom({
  'type': 'tfc:pot',
  'ingredients': [
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },
    {
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    }
  ],
  'fluid_ingredient': {
    'ingredient': 'tfc:tallow',
    'amount': 100
  },
  'duration': 1200,
  'temperature': 200,
  'item_output': [
    {
      'item': 'supplementaries:soap'
    },
    {
      'item': 'supplementaries:soap'
    },
    {
      'item': 'supplementaries:soap'
    },
    {
      'item': 'supplementaries:soap'
    },
    {
      'item': 'supplementaries:soap'
    }
  ]
})

event.custom({
  'type': 'tfc:pot',
  'ingredients': [{
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },{
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },{
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },{
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    },{
      'ingredient': {
        'tag': 'forge:soap_ash',
      }
    }
  ],
  'fluid_ingredient': {
    'ingredient': 'immersiveengineering:plantoil',
    'amount': 100
  },
  'duration': 1200,
  'temperature': 200,
  'item_output': [{
      'item': 'supplementaries:soap'
    },{
      'item': 'supplementaries:soap'
    },{
      'item': 'supplementaries:soap'
    },{
      'item': 'supplementaries:soap'
    },{
      'item': 'supplementaries:soap'
    }
  ]
})


let colours = [
  'red',
  'green',
  'brown',
  'blue',
  'purple',
  'cyan',
  'light_gray',
  'gray',
  'pink',
  'lime',
  'yellow',
  'light_blue',
  'magenta',
  'orange',
  'black',
].forEach(colour => {
  event.custom({
    type: "tfc:barrel_sealed",
    input_item: {
      ingredient: {
        tag: "supplementaries:flags"
      }
    },
    input_fluid: {
      ingredient: "tfc:" + colour + "_dye",
      amount: 25
    },
    output_item: {
      item: "supplementaries:flag_" + colour
    },
    duration: 1000
  })
  event.custom({
    type: "tfc:barrel_sealed",
    input_item: {
      ingredient: {
        tag: "supplementaries:presents"
      }
    },
    input_fluid: {
      ingredient: "tfc:" + colour + "_dye",
      amount: 25
    },
    output_item: {
      item: "supplementaries:present_" + colour
    },
    duration: 1000
  })
  event.custom({
    type: "tfc:barrel_sealed",
    input_item: {
      ingredient: {
        tag: "supplementaries:trapped_presents"
      }
    },
    input_fluid: {
      ingredient: "tfc:" + colour + "_dye",
      amount: 25
    },
    output_item: {
      item: "supplementaries:trapped_present_" + colour
    },
    duration: 1000
  })
})

event.shaped('supplementaries:flag_white',[
  'SWW'
],{
  S: '#tfc:firepit_sticks',
  W: '#tfc:high_quality_cloth'
})
})
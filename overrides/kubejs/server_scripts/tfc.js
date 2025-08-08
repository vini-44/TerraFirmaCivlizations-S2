// priority: 1

let tfc_rocks = [
  'granite',
  'diorite',
  'gabbro',
  'shale',
  'claystone',
  'limestone',
  'conglomerate',
  'dolomite',
  'chert',
  'chalk',
  'rhyolite',
  'basalt',
  'andesite',
  'dacite',
  'quartzite',
  'slate',
  'phyllite',
  'schist',
  'gneiss',
  'marble'
]

let deposit_ores = [
  "native_copper",
  "native_silver",
  "native_gold",
  "cassiterite"
]

let ore_grades = [
  "poor",
  "normal",
  "rich"
]

let tfc_graded_ores = [
  "native_copper",
  "native_gold",
  "hematite",
  "native_silver",
  "cassiterite",
  "bismuthinite",
  "garnierite",
  "malachite",
  "magnetite",
  "limonite",
  "sphalerite",
  "tetrahedrite"
]

let ie_graded_ores = [
  "bauxite",
  "galena",
  "uraninite"
]

let tfc_non_graded_ores =[
  "bituminous_coal",
  "lignite",
  "gypsum",
  "graphite",
  "sulfur",
  "cinnabar",
  "cryolite",
  "saltpeter",
  "sylvite",
  "borax",
  "halite"
]

let tfc_gems = [
  "amethyst",
  "diamond",
  "emerald",
  "lapis_lazuli",
  "opal",
  "pyrite",
  "ruby",
  "sapphire",
  "topaz"
]

let non_tfc_brick = [
  "immersiveengineering:clinker_brick",
  "immersiveengineering:slag_brick",
  "immersiveengineering:cokebrick",
  "immersiveengineering:blastbrick",
  "immersiveengineering:concrete_brick",
  "immersiveengineering:concrete_brick_cracked",
  "supplementaries:ash_bricks"
]

let non_tfc_concrete = [
  "immersiveengineering:concrete",
  "immersiveengineering:concrete_chiseled",
  "immersiveengineering:concrete_pillar",
  "immersiveengineering:concrete_tile",
  "immersiveengineering:concrete_leaded"
]
/*
TFCEvents.data(event => {

  tfc_gems.forEach(gem => {
    event.itemHeat("tfc:ore/" + gem, 1.5, null, 1800)
  })
  event.itemHeat("#forge:stone", 6, null, 1800)

})
*/

ServerEvents.tags('block', event => {

  non_tfc_brick.forEach(brick_block => {
    event.add('tfc:forge_insulation', brick_block)
    event.add('tfc:bloomery_insulation', brick_block)
    event.add('firmalife:oven_insulation', brick_block)
  })

  non_tfc_concrete.forEach(concrete_block => {
    event.add('tfc:bloomery_insulation', concrete_block)
    event.add('firmalife:oven_insulation', concrete_block)
  })

  event.add('firmalife:oven_insulation', '#minecraft:concrete')

})

ServerEvents.tags('item', event => {

  tfc_rocks.forEach(rock =>[
    event.add('forge:cobblestone_slabs', 'tfc:rock/cobble/' + rock + '_slab'),
    event.add('forge:cobblestone_slabs', 'tfc:rock/mossy_cobble/' + rock + '_slab'),
    event.add('minecraft:stone_buttons', 'tfc:rock/button/' + rock),
    event.add('forge:ores/uranium', 'tfc_ie_addon:ore/poor_uraninite/' + rock),
    event.add('forge:ores/uranium', 'tfc_ie_addon:ore/normal_uraninite/' + rock),
    event.add('forge:ores/uranium', 'tfc_ie_addon:ore/rich_uraninite/' + rock),
    event.add('forge:ingots/brick', 'tfc:brick/' + rock)
  ])

  event.add('tfc:coloured_steel_sheet', 'tfc:metal/double_sheet/blue_steel')
  event.add('tfc:coloured_steel_sheet', 'tfc:metal/double_sheet/red_steel')

  event.remove('minecraft:candles', '#tfc:candles')

  event.add('firmalife:foods/raw_fish', 'tfc:food/calamari')
  event.add('firmalife:foods/raw_fish', 'farmersdelight:salmon_slice')
  event.add('firmalife:foods/raw_fish', 'farmersdelight:cod_slice')
  event.add('forge:raw_fishes', 'tfc:food/calamari')

  event.add('tfc:chicken_food','minecraft:baked_potato')
  event.add('tfc:compost_greens_high','minecraft:baked_potato')
  event.add('tfc:dog_food','minecraft:baked_potato')
  event.add('tfc:duck_food','minecraft:baked_potato')
  event.add('tfc:foods','minecraft:baked_potato')
  event.add('firmalife:foods/pizza_ingredients','minecraft:baked_potato')
  event.add('tfc:foods/usable_in_salad','minecraft:baked_potato')
  event.add('tfc:foods/usable_in_sandwich','minecraft:baked_potato')
  event.add('tfc:foods/vegetables','minecraft:baked_potato')
  event.add('tfc:goat_food','minecraft:baked_potato')
  event.add('tfc:pig_food','minecraft:baked_potato')
  event.add('tfc:quail_food','minecraft:baked_potato')
  event.add('forge:vegetables','minecraft:baked_potato')

  event.add('forge:chains', 'tfc:metal/chain/bismuth_bronze')
  event.add('forge:chains', 'tfc:metal/chain/black_bronze')
  event.add('forge:chains', 'tfc:metal/chain/bronze')
  event.add('forge:chains', 'tfc:metal/chain/copper')
  event.add('forge:chains', 'tfc:metal/chain/steel')
  event.add('forge:chains', 'tfc:metal/chain/wrought_iron')
  event.add('forge:chains', 'tfc:metal/chain/black_steel')
  event.add('forge:chains', 'tfc:metal/chain/blue_steel')
  event.add('forge:chains', 'tfc:metal/chain/red_steel')
  event.add('forge:chain_meshes', 'kubejs:steel_chain_mesh')
  event.add('forge:chain_meshes', 'kubejs:black_steel_chain_mesh')
  event.add('forge:chain_meshes', 'kubejs:blue_steel_chain_mesh')
  event.add('forge:chain_meshes', 'kubejs:red_steel_chain_mesh')
  event.add('tfc:magma', 'tfc:rock/magma/granite')
  event.add('tfc:magma', 'tfc:rock/magma/diorite')
  event.add('tfc:magma', 'tfc:rock/magma/gabbro')
  event.add('tfc:magma', 'tfc:rock/magma/rhyolite')
  event.add('tfc:magma', 'tfc:rock/magma/basalt')
  event.add('tfc:magma', 'tfc:rock/magma/andesite')
  event.add('tfc:magma', 'tfc:rock/magma/dacite')
  event.add('forge:ingots/zinc', 'tfc:metal/ingot/zinc')
  event.add('tfc:top_cut_gems', 'tfc:gem/diamond')
  event.add('tfc:top_cut_gems', 'tfc:gem/ruby')
  event.add('tfc:top_cut_gems', 'tfc:gem/sapphire')
  event.add('tfc:coral', 'tfc:coral/fire_coral')
  event.add('tfc:coral', 'tfc:coral/tube_coral')
  event.add('tfc:coral', 'tfc:coral/brain_coral')
  event.add('tfc:coral', 'tfc:coral/horn_coral')
  event.add('forge:bells', 'tfc:brass_bell')
  event.add('forge:bells', 'tfc:bronze_bell')
  event.add('forge:bells', 'minecraft:bell')
  event.add('sliceanddice:allowed_tools', '#tfc:knives')
  event.add('forge:ingots/zinc', 'tfc:metal/ingot/zinc')
  event.add('forge:copper_pipe', 'firmalife:copper_pipe')
  event.add('minecraft:axes', '#tfc:axes')

})

ServerEvents.tags('block', event =>{
    event.add('firmalife:cellar_insulation', 'immersiveengineering:feedthrough')

    event.add('immersiveengineering:mineable/rockcutter', 'minecraft:diamond_ore')
    //im putting this here cause the list is already here and i don't wanna bother trying to import
    tfc_rocks.forEach(rock => {
      event.add('immersiveengineering:mineable/rockcutter', 'tfc:rock/raw/'+rock)
    })
    tfc_rocks.forEach(rock => {
      ore_grades.forEach(grade => {
        tfc_graded_ores.forEach(ore => {
          event.add('immersiveengineering:mineable/rockcutter', "tfc:ore/" + grade + "_" + ore + "/" + rock)
        })
        ie_graded_ores.forEach(ore => {
          event.add('immersiveengineering:mineable/rockcutter', "tfc_ie_addon:ore/" + grade + "_" + ore + "/" + rock)
        })
        event.add('immersiveengineering:mineable/rockcutter', "firmalife:ore/" + grade + "_chromite/" + rock)
      })
      tfc_gems.forEach(gem => {
        event.add('immersiveengineering:mineable/rockcutter', "tfc:ore/" + gem + "/" + rock, "tfc:ore/" + gem)
      })
      tfc_non_graded_ores.forEach(ore => {
        event.add('immersiveengineering:mineable/rockcutter', "tfc:ore/" + ore + "/" + rock, "tfc:ore/" + ore)
      });
    })

})


ServerEvents.recipes(event => {

  /*
  tfc_rocks.forEach(rock => {
    ore_grades.forEach(grade => {
      tfc_graded_ores.forEach(ore => {
        event.recipes.tfc.welding("tfc:ore/" + grade + "_" + ore + "/" + rock, "tfc:ore/" + grade + "_" + ore, "tfc:rock/raw/" + rock)
      })
      ie_graded_ores.forEach(ore => {
        event.recipes.tfc.welding("tfc_ie_addon:ore/" + grade + "_" + ore + "/" + rock, "tfc_ie_addon:ore/" + grade + "_" + ore, "tfc:rock/raw/" + rock)
      })
      event.recipes.tfc.welding("firmalife:ore/" + grade + "_chromite/" + rock, "firmalife:ore/" + grade + "_chromite", "tfc:rock/raw/" + rock)
    })
    tfc_gems.forEach(gem => {
      event.recipes.tfc.welding("tfc:ore/" + gem + "/" + rock, "tfc:ore/" + gem, "tfc:rock/raw/" + rock)
    })
    tfc_non_graded_ores.forEach(ore => {
      event.recipes.tfc.welding("tfc:ore/" + ore + "/" + rock, "tfc:ore/" + ore, "tfc:rock/raw/" + rock)
    });
  })
*/
  event.recipes.tfc.welding('kubejs:steel_chain_mesh', 'tfc:metal/chain/steel', 'tfc:metal/chain/steel',4)
  event.recipes.tfc.welding('kubejs:black_steel_chain_mesh', 'tfc:metal/chain/black_steel', 'tfc:metal/chain/black_steel',5)
  event.recipes.tfc.welding('kubejs:blue_steel_chain_mesh', 'tfc:metal/chain/blue_steel', 'tfc:metal/chain/blue_steel',6)
  event.recipes.tfc.welding('kubejs:red_steel_chain_mesh', 'tfc:metal/chain/red_steel', 'tfc:metal/chain/red_steel',6)


  event.recipes.tfc.welding('tfc:metal/double_sheet/black_steel', 'tfc:metal/sheet/black_steel', 'tfc:metal/sheet/black_steel',5)
  event.recipes.tfc.welding('tfc:metal/double_sheet/blue_steel', 'tfc:metal/sheet/blue_steel', 'tfc:metal/sheet/blue_steel',6)
  event.recipes.tfc.welding('tfc:metal/double_sheet/red_steel', 'tfc:metal/sheet/red_steel', 'tfc:metal/sheet/red_steel',6)
  function cutgrain(grain) {
  // event.recipes.farmersdelight.cutting(
  //   TFC.ingredient.notRotten('tfc:food/' + grain),
  //   '#tfc:knives',
  //   [
  //     'tfc:food/' + grain + '_grain',
  //     'tfc:straw',
  //     Item.of('tfc:food/'+grain+'_grain').withChance(0.3),
  //     Item.of('tfc:food/'+grain+'_grain').withChance(0.3),
  //     Item.of('tfc:straw').withChance(0.25),
  //   ]
  // )
  event.recipes.farmersdelight.cutting(
    TFC.ingredient.notRotten('tfc:food/' + grain + '_bread'),
    '#tfc:knives',
    [
      '2x firmalife:food/' + grain + '_slice',
      Item.of('firmalife:food/'+ grain + '_slice').withChance(0.2),
      Item.of('firmalife:food/'+ grain + '_slice').withChance(0.2)
    ]
  )
  event.recipes.farmersdelight.cutting(
    TFC.ingredient.notRotten('tfc:food/'+grain),
    '#tfc:knives',
    [
      'tfc:food/'+grain+'_grain',
      'tfc:straw',
      Item.of('tfc:food/'+grain+'_grain').withChance(0.2),
      Item.of('tfc:food/'+grain+'_grain').withChance(0.2)
    ]
  )
  }
  cutgrain('barley')
  cutgrain('maize')
  cutgrain('oat')
  cutgrain('rice')
  cutgrain('rye')
  cutgrain('wheat')



  event.recipes.farmersdelight.cutting(
    'tfc:small_sheepskin_hide',
    '#tfc:knives',
    [
      'tfc:wool',
      'tfc:small_raw_hide',
      Item.of('tfc:wool').withChance(0.2),
      Item.of('tfc:wool').withChance(0.2),
    ]
  )
  event.recipes.farmersdelight.cutting(
    'tfc:medium_sheepskin_hide',
    '#tfc:knives',
    [
      '2x tfc:wool',
      'tfc:medium_raw_hide',
      Item.of('tfc:wool').withChance(0.2),
      Item.of('tfc:wool').withChance(0.2),
    ]
  )
  event.recipes.farmersdelight.cutting(
    'tfc:large_sheepskin_hide',
    '#tfc:knives',
    [
      '3x tfc:wool',
      'tfc:large_raw_hide',
      Item.of('tfc:wool').withChance(0.2),
      Item.of('tfc:wool').withChance(0.2)
    ]
  )
  event.recipes.farmersdelight.cutting(
    TFC.ingredient.notRotten('tfc:melon'),
    '#tfc:knives',
    [
      '4x tfc:food/melon_slice',
      Item.of('tfc:food/melon_slice').withChance(0.2),
      Item.of('tfc:food/melon_slice').withChance(0.2)
    ]
  )
  event.recipes.farmersdelight.cutting(
    'tfc:papyrus',
    '#tfc:knives',
    [
      '4x tfc:papyrus_strip',
      Item.of('tfc:papyrus_strip').withChance(0.2),
      Item.of('tfc:papyrus_strip').withChance(0.2)
    ]
    )
  event.recipes.farmersdelight.cutting(
    TFC.ingredient.notRotten('tfc:food/sugarcane'),
    '#tfc:knives',
    [
      '4x kubejs:sugarcane_strip',
      Item.of('kubejs:sugarcane_strip').withChance(0.2),
      Item.of('kubejs:sugarcane_strip').withChance(0.2)
    ]
  )
  event.recipes.farmersdelight.cutting(
    TFC.ingredient.notRotten(TFC.ingredient.hasTrait('firmalife:food/pineapple', 'firmalife:dried')),
    '#tfc:knives',
    [
      'firmalife:pineapple_fiber',
      Item.of('firmalife:pineapple_fiber').withChance(0.2),
      Item.of('firmalife:pineapple_fiber').withChance(0.2)
    ]
  )
  event.recipes.farmersdelight.cutting(
    TFC.ingredient.notRotten('firmalife:food/roasted_cocoa_beans'),
    '#tfc:knives',
    [
      'firmalife:food/cocoa_powder',
      'firmalife:food/cocoa_butter',
      Item.of('firmalife:food/cocoa_powder').withChance(0.3),
      Item.of('firmalife:food/cocoa_butter').withChance(0.3)
    ]
  )
  event.recipes.farmersdelight.cutting(
    TFC.ingredient.notRotten('#firmalife:foods/cheeses'),
    '#tfc:knives',
    [
      '4x firmalife:food/shredded_cheese',
      Item.of('firmalife:food/shredded_cheese').withChance(0.2),
      Item.of('firmalife:food/shredded_cheese').withChance(0.2)
    ]
  )
  event.recipes.farmersdelight.cutting(
    'firmalife:plant/basil',
    '#tfc:knives',
    [
      '2x firmalife:spice/basil_leaves',
      Item.of('firmalife:spice/basil_leaves').withChance(0.2),
      Item.of('firmalife:spice/basil_leaves').withChance(0.2)
    ]
  )

  event.shapeless('4x kubejs:sugarcane_strip',[
      'tfc:food/sugarcane',
      '#tfc:knives'
  ]).damageIngredient(Ingredient.of('#tfc:knives'))


  event.shapeless('tfc:candle',[
    'supplementaries:soap',
    '#tfc:candles'
  ])
/*
  event.shaped('4x minecraft:bricks', [
    'BMB',
    'MBM',
    'BMB'
  ],{
    B: 'minecraft:brick',
    M: 'tfc:mortar'
  })
  */


  let gems = [
    'amethyst',
    'diamond',
    'emerald',
    'lapis',
    'opal',
    'pyrite',
    'ruby',
    'sapphire',
    'topaz'
  ].forEach(gem =>[
    event.custom({
      'type': 'create:sandpaper_polishing',
      'ingredients': [
      {
        'item': 'tfc:ore/' + gem
      }
      ],
      'results': [
      {
        'item': 'tfc:gem/' + gem
      }
      ]
    }),
    event.custom({
      "type": "immersiveengineering:crusher",
      "energy": 1600,
      "input": {
      "item": "tfc:gem/" + gem
      },
      "result": {
      "base_ingredient": {
        "item": "tfc:powder/" + gem
      },
      "count": 4
      },
      "secondaries": []
    })
  ])

  event.recipes.tfc.barrel_sealed(8000)
    .outputItem('tfc:soaked_papyrus_strip')
    .inputs('kubejs:sugarcane_strip', TFC.fluidStackIngredient('minecraft:water', 200))

    event.replaceInput(
      { output: 'tfc:cake' },
      '#tfc:musk_ox_food',
      '#tfc:foods/flour'
      )

  event.replaceInput(
    { input: 'minecraft:copper_block' },
    'minecraft:copper_block',
    'tfc:metal/block/copper'
    )

  event.replaceInput(
    { input: 'minecraft:slime_ball' },
    'minecraft:slime_ball',
    'tfc:glue'
    )

  event.replaceInput(
    { input: 'minecraft:torch'},
    'minecraft:torch',
    'tfc:torch'
    )

  event.replaceInput(
    { input: 'minecraft:crafting_table' },
    'minecraft:crafting_table',
    '#tfc:workbenches'
    )

  tfc_rocks.forEach(rock => {
      
    event.custom(
        {
          "type": "create:cutting",
          "ingredients": [
            {
              "item": "tfc:rock/loose/"+rock
            }
          ],
          "processingTime": 200,
          "results": [
            {
              "count": 1,
              "item": "tfc:brick/"+rock
            }
          ]
        }
    )
    event.custom(
      {
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
          "item": "tfc:rock/cobble/" + rock
        },
        "result": {
          "item": "tfc:rock/gravel/" + rock
        },
        "secondaries": []
      }
    )
    event.custom(
      {
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
          "item": "tfc:rock/mossy_cobble/" + rock
        },
        "result": {
          "item": "tfc:rock/gravel/" + rock
        },
        "secondaries": [        {
          "chance": 0.5,
          "output": {
              "item": "tfc:plant/moss"
          }
      }]
      }
    )
    deposit_ores.forEach(ore => {
      event.custom(
        {
          "type": "immersiveengineering:crusher",
          "energy": 1600,
          "input": {
            "item": "tfc:ore/poor_" + ore + "/" + rock
          },
          "result": {
            "item": "tfc:deposit/" + ore + "/" + rock
          },
          "secondaries": []
        }
      )
    })
  })
})

ItemEvents.foodEaten(['minecraft:pumpkin_pie',
                      'firmalife:food/cooked_pie'
  ],event =>{
  event.server.schedule(1, callback => {
    event.player.giveInHand('firmalife:pie_pan')
  })
}

)

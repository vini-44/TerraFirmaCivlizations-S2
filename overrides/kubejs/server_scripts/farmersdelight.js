// priority: 1

ServerEvents.tags('item', event => {
  event.add('farmersdelight:bbq_vegetables', 'tfc:food/tomato')
  event.add('farmersdelight:bbq_vegetables', 'tfc:food/green_bell_pepper')
  event.add('farmersdelight:bbq_vegetables', 'tfc:food/yellow_bell_pepper')
  event.add('farmersdelight:bbq_vegetables', 'tfc:food/red_bell_pepper')
  event.add('farmersdelight:bbq_vegetables', 'tfc:food/onion')
  event.add('farmersdelight:shepherds_pie_meat', 'farmersdelight:beef_patty')
  event.add('farmersdelight:shepherds_pie_meat', 'farmersdelight:cooked_mutton_chops')
  event.add('tfc:foods/aromatic_vegetables', 'tfc:food/onion')
  event.add('tfc:foods/aromatic_vegetables', 'tfc:food/garlic')
  event.add('tfc:foods/peppers', 'tfc:food/green_bell_pepper')
  event.add('tfc:foods/peppers', 'tfc:food/yellow_bell_pepper')
  event.add('tfc:foods/peppers', 'tfc:food/red_bell_pepper')
  event.add('farmersdelight:tomato_sauce', 'farmersdelight:tomato_sauce')
  event.add('farmersdelight:tomato_sauce', 'firmalife:food/tomato_sauce')

})

TFCEvents.data(event => {
  // Custom items

  event.foodItem('kubejs:apple_pie_filling', food => {
    food.hunger(1)
    food.decayModifier(3)
  })
  event.foodItem('kubejs:raw_apple_pie', food => {
    food.hunger(1)
    food.decayModifier(3)
  })
  event.foodItem('kubejs:chocolate_pie_filling', food => {
    food.hunger(1)
    food.decayModifier(3)
  })
  event.foodItem('kubejs:raw_chocolate_pie', food => {
    food.hunger(1)
    food.decayModifier(3)
  })
  event.foodItem('kubejs:berry_cheesecake_filling', food => {
    food.hunger(1)
    food.decayModifier(3)
  })
  event.foodItem('kubejs:raw_berry_cheesecake', food => {
    food.hunger(1)
    food.decayModifier(3)
  })

  // Nutrition Changes

  event.foodItem('farmersdelight:egg_sandwich', food => {
    food.grain(1)
    food.protein(3)
    food.dairy(0.6)
    food.saturation(3)
    food.hunger(4)
  })
  event.foodItem('farmersdelight:chicken_sandwich', food => {
    food.grain(1)
    food.vegetables(1.5)
    food.protein(1.5)
    food.saturation(2)
    food.hunger(4)
  })
  // event.foodItem('farmersdelight:tomato_sauce', food => {
  //   food.vegetables(5)
  //   food.saturation(0.5)
  //   food.hunger(2)
  //   food.water(0.5)
  // })
  event.foodItem('farmersdelight:sweet_berry_cookie', food => {
    food.grain(0.8)
    food.fruit(0.8)
    food.dairy(0.1)
    food.saturation(1)
    food.hunger(1)
  })
  // event.foodItem('farmersdelight:honey_cookie', food => {
  //   food.grain(1)
  //   food.dairy(0.2)
  //   food.saturation(1)
  //   food.hunger(1)
  // })
  // event.foodItem('farmersdelight:melon_popsicle', food => {
  //   food.fruit(0.8)
  //   food.saturation(1)
  //   food.hunger(1)
  //   food.water(1)
  // })
  event.foodItem('farmersdelight:glow_berry_custard', food => {
    food.protein(1.5)
    food.fruit(1)
    food.dairy(0.3)
    food.saturation(1)
    food.hunger(4)
    food.water(0.5)
  })
  // event.foodItem('farmersdelight:barbecue_stick', food => {
  //   food.vegetables(2)
  //   food.protein(2)
  //   food.saturation(2)
  //   food.hunger(4)
  // })
  // event.foodItem('farmersdelight:hamburger', food => {
  //   food.grain(1.5)
  //   food.vegetables(3)
  //   food.protein(1.5)
  //   food.saturation(3)
  //   food.hunger(5)
  // })
  event.foodItem('farmersdelight:bacon_sandwich', food => {
    food.grain(1.5)
    food.vegetables(2)
    food.protein(1.2)
    food.saturation(2)
    food.hunger(4)
  })
  event.foodItem('farmersdelight:mutton_wrap', food => {
    food.grain(1.5)
    food.vegetables(2)
    food.protein(1.5)
    food.saturation(2)
    food.hunger(4)
  })
// Needs to be in a json for some fucking reason
  // event.foodItem('farmersdelight:stuffed_potato', food => {
  //   food.grain(2)
  //   food.vegetables(1)
  //   food.protein(1.5)
  //   food.dairy(1)
  //   food.saturation(2)
  //   food.hunger(5)
  // })
  event.foodItem('farmersdelight:kelp_roll', food => {
    food.grain(2)
    food.vegetables(1)
    food.protein(2)
    food.saturation(3)
    food.hunger(6)
  })
  event.foodItem('farmersdelight:kelp_roll_slice', food => {
    food.grain(0.7)
    food.vegetables(0.3)
    food.protein(0.7)
    food.saturation(3)
    food.hunger(2)
  })
  event.foodItem('farmersdelight:bone_broth', food => {
    food.fruit(0.5)
    food.protein(1)
    food.saturation(2)
    food.hunger(4)
    food.water(2)
  })
  event.foodItem('farmersdelight:chicken_soup', food => {
    food.grain(2)
    food.vegetables(3)
    food.protein(1.5)
    food.saturation(2)
    food.hunger(5)
    food.water(2)
  })
  event.foodItem('farmersdelight:vegetable_soup', food => {
    food.grain(2)
    food.vegetables(3.5)
    food.saturation(2)
    food.hunger(5)
    food.water(2)
  })
  // event.foodItem('farmersdelight:fish_stew', food => {
  //   food.vegetables(2.5)
  //   food.protein(1.5)
  //   food.saturation(2)
  //   food.hunger(5)
  //   food.water(2)
  // })
  // event.foodItem('farmersdelight:fried_rice', food => {
  //   food.grain(1.5)
  //   food.vegetables(2)
  //   food.protein(1.5)
  //   food.dairy(0.3)
  //   food.saturation(3)
  //   food.hunger(5)
  // })
  event.foodItem('farmersdelight:pumpkin_soup', food => {
    food.vegetables(2)
    food.protein(1)
    food.fruit(1)
    food.saturation(2)
    food.hunger(5)
    food.water(2)
  })
  event.foodItem('farmersdelight:baked_cod_stew', food => {
    food.grain(2)
    food.vegetables(2)
    food.protein(2.5)
    food.dairy(0.3)
    food.saturation(2)
    food.hunger(5)
    food.water(2)
  })
  event.foodItem('farmersdelight:pasta_with_meatballs', food => {
    food.grain(1.5)
    food.vegetables(3)
    food.protein(1.5)
    food.saturation(3)
    food.hunger(5)
  })
  event.foodItem('farmersdelight:pasta_with_mutton_chop', food => {
    food.grain(1.5)
    food.vegetables(3)
    food.protein(1.5)
    food.saturation(2)
    food.hunger(5)
  })
  event.foodItem('farmersdelight:roasted_mutton_chops', food => {
    food.grain(1)
    food.vegetables(2.5)
    food.protein(1)
    food.saturation(2)
    food.hunger(5)
  })
  event.foodItem('farmersdelight:vegetable_noodles', food => {
    food.grain(3)
    food.vegetables(3)
    food.saturation(2)
    food.hunger(5)
  })
  event.foodItem('farmersdelight:steak_and_potatoes', food => {
    food.grain(2)
    food.vegetables(3)
    food.protein(3)
    food.saturation(3)
    food.hunger(5)
  })
  // event.foodItem('farmersdelight:ratatouille', food => {
  //   food.vegetables(5)
  //   food.saturation(3)
  //   food.hunger(5)
  // })
  event.foodItem('farmersdelight:squid_ink_pasta', food => {
    food.grain(1)
    food.vegetables(1.5)
    food.protein(1.2)
    food.saturation(2)
    food.hunger(5)
  })
  // event.foodItem('farmersdelight:grilled_salmon', food => {
  //   food.vegetables(2)
  //   food.protein(2)
  //   food.fruit(1)
  //   food.saturation(3)
  //   food.hunger(4)
  // })
  event.foodItem('farmersdelight:roast_chicken_block', food => {
    food.grain(5)
    food.vegetables(5)
    food.protein(4)
    food.dairy(0.3)
    food.saturation(4)
    food.hunger(16)
  })
  event.foodItem('farmersdelight:roast_chicken', food => {
    food.grain(1.3)
    food.vegetables(1.3)
    food.protein(1)
    food.dairy(0.1)
    food.saturation(4)
    food.hunger(6)
  })
  event.foodItem('farmersdelight:stuffed_pumpkin_block', food => {
    food.grain(3)
    food.vegetables(5)
    food.fruit(3)
    food.saturation(4)
    food.hunger(16)
  })
// Needs to be in a json for some fucking reason
  // event.foodItem('farmersdelight:stuffed_pumpkin', food => {
  //   food.grain(0.8)
  //   food.vegetables(1.3)
  //   food.fruit(0.8)
  //   food.saturation(4)
  //   food.hunger(4)
  // })
  event.foodItem('farmersdelight:honey_glazed_ham_block', food => {
    food.grain(2)
    food.protein(5)
    food.fruit(4)
    food.saturation(4)
    food.hunger(16)
  })
  event.foodItem('farmersdelight:honey_glazed_ham', food => {
    food.grain(0.5)
    food.protein(1.3)
    food.fruit(1)
    food.saturation(6)
    food.hunger(6)
  })
  event.foodItem('farmersdelight:shepherds_pie_block', food => {
    food.grain(4)
    food.protein(3)
    food.vegetables(4)
    food.dairy(1)
    food.hunger(16)
    food.saturation(4)
  })
// Needs to be in a json for some fucking reason
  // event.foodItem('farmersdelight:shepherds_pie', food => {
  //   food.grain(1)
  //   food.protein(0.8)
  //   food.vegetables(1)
  //   food.dairy(0.3)
  //   food.hunger(4)
  //   food.saturation(4)
  // })
})

ServerEvents.recipes(event => {
  event.recipes.tfc.loom('6x farmersdelight:canvas', '12x tfc:straw', 12, 'tfc:thatch')

  event.recipes.tfc.heating('kubejs:raw_apple_pie', 180)
    .resultItem('farmersdelight:apple_pie')
  event.recipes.tfc.heating('kubejs:raw_chocolate_pie', 180)
    .resultItem('farmersdelight:chocolate_pie')
  event.recipes.tfc.heating('kubejs:raw_berry_cheesecake', 180)
    .resultItem('farmersdelight:sweet_berry_cheesecake')

  event.shapeless('kubejs:raw_apple_pie',[
    'firmalife:food/pie_dough',
    'kubejs:apple_pie_filling'
  ])
  event.shapeless('kubejs:raw_chocolate_pie',[
    'firmalife:food/pie_dough',
    'kubejs:chocolate_pie_filling'
  ])
  event.shapeless('kubejs:raw_berry_cheesecake',[
    'firmalife:food/pie_dough',
    'kubejs:berry_cheesecake_filling'
  ])
  event.shapeless('farmersdelight:honey_cookie',[
    'firmalife:food/sugar_cookie',
    'firmalife:raw_honey'
  ])
  event.shapeless('farmersdelight:sweet_berry_cookie',[
    'firmalife:food/sugar_cookie',
    '#forge:fruits/berries'
  ])
  event.shapeless('farmersdelight:barbecue_stick',[
    '#farmersdelight:bbq_vegetables',
    '#tfc:foods/cooked_meats',
    '#tfc:knives',
    '#tfc:firepit_sticks',
    '#farmersdelight:bbq_vegetables',
  ]).damageIngredient(Ingredient.of('#tfc:knives'))
  event.shapeless('farmersdelight:stuffed_potato',[
    'minecraft:baked_potato',
    'firmalife:food/shredded_cheese',
    'farmersdelight:beef_patty'
  ])
  event.shapeless('farmersdelight:cabbage_rolls',[
    'farmersdelight:cabbage_leaf',
    '#tfc:knives',
    'farmersdelight:cabbage_leaf',
    '#firmalife:foods/cooked_meats_and_substitutes'
  ]).damageIngredient(Ingredient.of('#tfc:knives'))

  // Such a game changing recipe
  event.shapeless('farmersdelight:rope',[
    'tfc:straw',
    'tfc:straw',
    '#lithicaddon:spindles'
  ]).damageIngredient(Ingredient.of('#lithicaddon:spindles'))

  event.shaped('farmersdelight:stove',[
    'BCB',
    'BMB'
  ],{
    B: 'minecraft:bricks',
    C: 'castirongrill:cast_iron_grill',
    M: '#forge:magma_block'
  })

  event.shaped('farmersdelight:shepherds_pie_block',[
    'PBP',
    'MMM',
    'OLO'
  ],{
    P: TFC.ingredient.notRotten('#forge:food/cooked/potato'),
    B: TFC.ingredient.notRotten('firmalife:food/butter'),
    M: TFC.ingredient.notRotten('#farmersdelight:shepherds_pie_meat'),
    O: TFC.ingredient.notRotten('tfc:food/green_bean'),
    L: 'minecraft:bowl'
  })

  event.shaped('4x farmersdelight:melon_popsicle',[
    ' MM',
    'IMM',
    'SI '
  ],{
    M: TFC.ingredient.notRotten('tfc:food/melon_slice'),
    I: 'firmalife:ice_shavings',
    S: '#tfc:firepit_sticks'
  })

  event.shapeless('farmersdelight:chicken_sandwich',[
    TFC.ingredient.notRotten('#forge:bread'),
    TFC.ingredient.notRotten('#forge:cooked_fowl'),
    '#tfc:knives',
    TFC.ingredient.notRotten('farmersdelight:cabbage_leaf'),
    TFC.ingredient.notRotten('tfc:food/tomato')
  ]).damageIngredient(Ingredient.of('#tfc:knives'))

  event.shaped('farmersdelight:kelp_roll',[
    'DRK',
    'RDF'
  ],{
    D: TFC.ingredient.notRotten('tfc:food/dried_kelp'),
    R: TFC.ingredient.notRotten('tfc:food/cooked_rice'),
    F: TFC.ingredient.notRotten('#firmalife:foods/raw_fish'),
    K: '#tfc:knives'
  }).damageIngredient(Ingredient.of('#tfc:knives'))

  event.recipes.farmersdelight.cooking(
    [
      TFC.ingredient.notRotten('tfc:food/tomato'),
      TFC.ingredient.notRotten('tfc:food/tomato'),
      TFC.ingredient.notRotten('tfc:food/garlic'),
      'firmalife:spice/basil_leaves',
      'tfc:powder/salt'
    ],
    'farmersdelight:tomato_sauce',
    0,
    600,
    'minecraft:bowl'
  )

  event.recipes.farmersdelight.cooking(
    [
      'minecraft:bone',
      TFC.ingredient.notRotten('#tfc:foods/raw_meats'),
      TFC.ingredient.notRotten('#forge:fruits/berries'),
      'tfc:powder/salt'
    ],
    'farmersdelight:bone_broth',
    0,
    1200,
    'minecraft:bowl'
  )

  // event.recipes.farmersdelight.cooking(
  //   [
  //     TFC.ingredient.notRotten('tfc:food/pumpkin_chunks'),
  //     TFC.ingredient.notRotten('#forge:vegetables/cabbage'),
  //     TFC.ingredient.notRotten('#forge:raw_fowl'),
  //     Fluid.of(TFC.fluidStackIngredient('#tfc:milks', 1000)),
  //     'tfc:powder/salt'
  //   ],
  //   'farmersdelight:pumpkin_soup',
  //   0,
  //   100,
  //   'minecraft:bowl'
  // )


//replacements
event.replaceInput(
  { input: 'farmersdelight:tomato_sauce' },
  'farmersdelight:tomato_sauce',
  '#farmersdelight:tomato_sauce'
  )




// Couldn't figure out how to do a fluid ingredient in js, so here's a custom json

  event.custom({
    "type": "farmersdelight:cooking",
    "recipe_book_tab": "meals",
    "ingredients": [
      {
        "type": "tfc:not_rotten",
        "ingredient": {
          "item": "tfc:food/pumpkin_chunks"
        }
      },
      {
        "type": "tfc:not_rotten",
        "ingredient": {
          "tag": "forge:vegetables/cabbage"
        }
      },
      {
        "type": "tfc:not_rotten",
        "ingredient": {
          "tag": "forge:raw_fowl"
        }
      },
      {
        "type": "tfc:fluid_item",
        "fluid_ingredient": {
          "ingredient": {
            "tag": "tfc:milks"
          },
          "amount": 1000
        }
      },
      {
        "tag": "forge:dusts/salt"
      }
    ],
    "result": {
      "item": "farmersdelight:pumpkin_soup",
      "modifiers": [
        "tfc:copy_food"
      ]
    },
    "experience": 1.0,
    "cookingtime": 2400
  })

  event.recipes.farmersdelight.cooking(
    [
      TFC.ingredient.notRotten('#farmersdelight:tomato_sauce'),
      TFC.ingredient.notRotten('farmersdelight:minced_beef'),
      TFC.ingredient.notRotten('farmersdelight:raw_pasta'),
      'tfc:powder/salt'
    ],
      'farmersdelight:pasta_with_meatballs',
    0,
    600,
    'minecraft:bowl'
  )

  event.recipes.farmersdelight.cooking(
    [
      TFC.ingredient.notRotten('#farmersdelight:tomato_sauce'),
      TFC.ingredient.notRotten('#forge:raw_fishes'),
      TFC.ingredient.notRotten('farmersdelight:raw_pasta'),
      'tfc:powder/salt',
      'minecraft:ink_sac'
    ],
      'farmersdelight:squid_ink_pasta',
    0,
    600,
    'minecraft:bowl'
  )

  event.recipes.farmersdelight.cooking(
    [
      TFC.ingredient.notRotten('#farmersdelight:tomato_sauce'),
      TFC.ingredient.notRotten('#forge:raw_mutton'),
      TFC.ingredient.notRotten('farmersdelight:raw_pasta'),
      'tfc:powder/salt'
    ],
      'farmersdelight:pasta_with_mutton_chop',
    0,
    600,
    'minecraft:bowl'
  )

  event.recipes.farmersdelight.cooking(
    [
      TFC.ingredient.notRotten('#tfc:foods/peppers'),
      TFC.ingredient.notRotten('#tfc:foods/aromatic_vegetables'),
      TFC.ingredient.notRotten('tfc:food/carrot'),
      TFC.ingredient.notRotten('#farmersdelight:tomato_sauce'),
      'tfc:powder/salt'
    ],
      'farmersdelight:ratatouille',
    0,
    1000,
    'minecraft:bowl'
  )

  event.custom(
    {
      "type": "farmersdelight:cooking",
      "recipe_book_tab": "meals",
      "ingredients": [{
          "type": "tfc:not_rotten",
          "ingredient": {"tag": "forge:grain/rice"}
        },{
          "type": "tfc:not_rotten",
          "ingredient": {
            "tag": "forge:vegetables/onion"}
        },{"type": "tfc:not_rotten",
          "ingredient": {"tag": "forge:vegetables/potato"}},{
          "type": "tfc:not_rotten",
          "ingredient": {"tag": "forge:fruits/berries"}
        },{
          "type": "tfc:not_rotten",
          "ingredient": {"tag": "forge:vegetables/carrot"}}],
      "result": {
        "item": "farmersdelight:stuffed_pumpkin_block",
        "modifiers": ["tfc:copy_food"]
      },
      "container": {"item": "tfc:pumpkin"},
      "experience": 2.0,
      "cookingtime": 1600
  })

  event.custom(
    {
      "type": "farmersdelight:cooking",
      "recipe_book_tab": "meals",
      "ingredients": [{
          "type": "tfc:not_rotten",
          "ingredient": {"tag": "forge:vegetables/carrot"}
        },{
          "tag": "forge:dusts/salt"
        },{
          "type": "tfc:not_rotten",
          "ingredient": {"tag": "forge:pasta"}
        },{
          "type": "tfc:not_rotten",
          "ingredient": {"tag": "forge:vegetables/cabbage"}
        },{
          "type": "tfc:not_rotten",
          "ingredient": {"tag": "forge:vegetables/potato"}
        }],
      "result": {
        "item": "farmersdelight:vegetable_noodles",
        "modifiers": ["tfc:copy_food"]
      },
      "experience": 1.0,
      "cookingtime": 1600
    }
  )

// Pie filling mixing bowl recipes
// Apple pie: apples, sugar, butter, cinnamon
  event.custom({
    "type": "firmalife:mixing_bowl",
    "ingredients": [{
      "type": "tfc:not_rotten",
      "ingredient": {"tag": "tfc:foods/apples"}
    },{
      "type": "tfc:not_rotten",
      "ingredient": {"tag": "tfc:foods/apples"}
    },{
      "tag": "tfc:sweetener"
    },{
      "type": "tfc:not_rotten",
      "ingredient": {"item": "firmalife:food/butter"}
    },{
      "item": "firmalife:spice/ground_cinnamon"
    }],
    "output_item": {"item": "kubejs:apple_pie_filling"}
  })

// Chocolate pie: 2x cocoa powder, cream, sugar, vanilla
  event.custom({
    "type": "firmalife:mixing_bowl",
    "ingredients": [{
      "type": "tfc:not_rotten",
      "ingredient": {"item": "firmalife:food/cocoa_powder"}
    },{
      "type": "tfc:not_rotten",
      "ingredient": {"item": "firmalife:food/cocoa_powder"}
    },{
      "tag": "tfc:sweetener"
    },{
      "item": "minecraft:egg"
    },{
      "item": "firmalife:spice/vanilla"
    }],
    "fluid_ingredient": {"ingredient": "firmalife:cream", "amount": 1000},
    "output_item": {"item": "kubejs:chocolate_pie_filling"}
  })

// Cheesecake: shosha cheese, cream, sugar, egg, vanilla, berries
  event.custom({
    "type": "firmalife:mixing_bowl",
    "ingredients": [{
      "type": "tfc:not_rotten",
      "ingredient": {"item": "firmalife:food/shosha"}
    },{
      "type": "tfc:not_rotten",
      "ingredient": {"tag": "forge:fruits/berries"}
    },{
      "tag": "tfc:sweetener"
    },{
      "item": "minecraft:egg"
    },{
      "item": "firmalife:spice/vanilla"
    }],
    "fluid_ingredient": {"ingredient": "firmalife:cream", "amount": 1000},
    "output_item": {"item": "kubejs:berry_cheesecake_filling"}
  })

  let colours = [ //You can use this section to batch remove anything using all colors
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
  'white'
].forEach(colour =>[
  event.recipes.tfc.barrel_sealed(1000)
    .outputItem('farmersdelight:' + colour + '_hanging_canvas_sign')
    .inputs('#farmersdelight:hanging_canvas_signs', TFC.fluidStackIngredient('tfc:'+colour+'_dye', 50)),
  event.recipes.tfc.barrel_sealed(1000)
    .outputItem('farmersdelight:' + colour + '_canvas_sign')
    .inputs('#farmersdelight:canvas_signs', TFC.fluidStackIngredient('tfc:'+colour+'_dye', 50)),
])

event.recipes.tfc.barrel_sealed(1000)
  .outputItem('farmersdelight:canvas_sign')
  .inputs('#farmersdelight:canvas_signs', TFC.fluidStackIngredient('tfc:lye', 50))
event.recipes.tfc.barrel_sealed(1000)
  .outputItem('farmersdelight:hanging_canvas_sign')
  .inputs('#farmersdelight:hanging_canvas_signs', TFC.fluidStackIngredient('tfc:lye', 50))

})
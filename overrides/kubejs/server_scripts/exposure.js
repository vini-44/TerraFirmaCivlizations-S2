// priority: 1

ServerEvents.recipes(event => {

event.shaped('exposure:lightroom',[
  'MT',
  'PP',
  'PP'
],{
  M: 'firmalife:mixing_bowl',
  T: 'minecraft:redstone_torch',
  P: '#minecraft:planks'
})

event.shaped('exposure:camera',[
  'VMB',
  'PLP',
  'PPP'
],{
  V: 'minecraft:lever',
  M: 'immersiveengineering:component_iron',
  B: '#minecraft:stone_buttons',
  P: 'immersiveengineering:plate_iron',
  L: 'tfc:lens'
})

event.shaped('kubejs:empty_film_reel',[
  'B',
  'R',
  'R'
],{
  B: '#minecraft:stone_buttons',
  R: 'tfc:metal/rod/wrought_iron'
})

event.shapeless('exposure:black_and_white_film',[
  'kubejs:empty_film_reel',
  'kubejs:black_and_white_film_base'
])

event.shapeless('exposure:color_film',[
  'kubejs:empty_film_reel',
  'kubejs:color_film_base'
])

event.recipes.tfc.barrel_sealed(1000)
  .outputItem('kubejs:film_base')
  .inputs('tfc:soaked_papyrus_strip', TFC.fluidStackIngredient('immersiveengineering:redstone_acid',50))


  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "exposure:color_film"
    },
    "loops": 1,
    "results": [{
        "item": "exposure:developed_color_film"
      }
    ],
    "sequence": [{
      "type": "create:filling",
      "ingredients": [{
          "item": "exposure:color_film"
        },
        {
          "amount": 250,
          "fluid": "lithicaddon:acid/silver_halide",
          "nbt": {}
        }
      ],
      "results": [{
          "item": "exposure:color_film"
        }]
    },{
      "type": "create:filling",
      "ingredients": [{
          "item": "exposure:color_film"
        },
        {
          "amount": 250,
          "fluid": "lithicaddon:acid/silver_halide",
          "nbt": {}
        }
      ],
      "results": [{
          "item": "exposure:color_film"
        }]
    },{
      "type": "create:filling",
      "ingredients": [{
          "item": "exposure:color_film"
        },
        {
          "amount": 250,
          "fluid": "lithicaddon:acid/silver_halide",
          "nbt": {}
        }
      ],
      "results": [{
          "item": "exposure:color_film"
        }]
    }
    ],
    "transitionalItem": {
      "item": "exposure:color_film"
    }
  })



event.custom({
  'type': 'create:filling',
  'ingredients': [{
    'item': 'kubejs:film_base'
  },{
    'amount': 50,
    'fluid': 'tfc:white_dye'
  }],
  'results': [{
    'item': 'kubejs:black_and_white_film_base'
  }]
})

event.custom({
  'type': 'create:filling',
  'ingredients': [{
    'item': 'kubejs:black_and_white_film_base'
  },{
    'amount': 50,
    'fluid': 'tfc:cyan_dye'
  }],
  'results': [{
    'item': 'kubejs:incomplete_color_film_base'
  }]
})

event.custom({
  'type': 'create:filling',
  'ingredients': [{
    'item': 'kubejs:incomplete_color_film_base'
  },{
    'amount': 50,
    'fluid': 'tfc:magenta_dye'
  }],
  'results': [{
    'item': 'kubejs:incomplete_color_film_base2'
  }]
})

event.custom({
  'type': 'create:filling',
  'ingredients': [{
    'item': 'kubejs:incomplete_color_film_base2'
  },{
    'amount': 50,
    'fluid': 'tfc:yellow_dye'
  }],
  'results': [{
    'item': 'kubejs:color_film_base'
  }]
})
})
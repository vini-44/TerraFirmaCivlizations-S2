// priority: 1

ServerEvents.tags('item', event => {
  /*
          Add tags

  Format:
      event.add('mod:tag', 'mod:item_id')

  */
let rocks = [
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
  'andesite',
  'dacite',
  'quartzite',
  'slate',
  'phyllite',
  'schist',
  'gneiss',
  'marble'
].forEach(rock =>[
  event.add('create:sleepers', 'tfc:rock/raw/' + rock + '_slab'),
  event.add('create:sleepers', 'tfc:rock/smooth/' + rock + '_slab')
])

event.add('minecraft:bamboo_slab','minecraft:bamboo_slab')
event.add('minecraft:bamboo','minecraft:bamboo')

event.add('railways:acacia_slab', 'tfc:wood/planks/acacia_slab')
event.add('railways:acacia_slab', 'tfc:wood/planks/palm_slab')
event.add('railways:birch_slab', 'tfc:wood/planks/pine_slab')
event.add('railways:birch_slab', 'tfc:wood/planks/douglas_fir_slab')
event.add('railways:birch_slab', 'tfc:wood/planks/white_cedar_slab')
event.add('railways:dark_oak_slab', 'tfc:wood/planks/chestnut_slab')
event.add('railways:dark_oak_slab', 'tfc:wood/planks/hickory_slab')
event.add('railways:jungle_slab', 'tfc:wood/planks/ash_slab')
event.add('railways:jungle_slab', 'tfc:wood/planks/spruce_slab')
event.add('railways:oak_slab', 'tfc:wood/planks/oak_slab')
event.add('railways:oak_slab', 'tfc:wood/planks/sycamore_slab')
event.add('railways:spruce_slab', 'tfc:wood/planks/maple_slab')
event.add('railways:spruce_slab', 'tfc:wood/planks/birch_slab')
event.add('railways:mangrove_slab', 'tfc:wood/planks/mangrove_slab')
event.add('railways:mangrove_slab', 'tfc:wood/planks/rosewood_slab')
event.add('railways:mangrove_slab', 'tfc:wood/planks/sequoia_slab')
event.add('railways:warped_slab', 'tfc:wood/planks/aspen_slab')
event.add('railways:warped_slab', 'tfc:wood/planks/willow_slab')
event.add('railways:crimson_slab', 'tfc:wood/planks/kapok_slab')
event.add('railways:black_slab', 'tfc:rock/raw/basalt_slab')
event.add('railways:black_slab', 'tfc:rock/smooth/basalt_slab')


})

ServerEvents.recipes(event => {

event.recipes.tfc.heating('railways:smokestack_coalburner', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 1600))
event.recipes.tfc.heating('railways:smokestack_oilburner', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 1600))
event.recipes.tfc.heating('railways:smokestack_woodburner', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 1600))

event.recipes.tfc.anvil('railways:conductor_whistle', 'tfc:metal/double_ingot/brass', ['hit_any', 'punch_second_last', 'hit_last']).tier(2)


event.shaped('railways:smokestack_coalburner',[
  'S S',
  'S S',
  'SGS'
],{
  S: 'tfc:metal/sheet/cast_iron',
  G: 'castirongrill:cast_iron_grill'
})

event.shaped('railways:smokestack_oilburner',[
  'S S',
  'DGD'
],{
  S: 'tfc:metal/sheet/cast_iron',
  D: 'tfc:metal/double_sheet/cast_iron',
  G: 'castirongrill:cast_iron_grill'
})

event.shaped('railways:smokestack_woodburner',[
  'D D',
  'SGS'
],{
  S: 'tfc:metal/sheet/cast_iron',
  D: 'tfc:metal/double_sheet/cast_iron',
  G: 'castirongrill:cast_iron_grill'
})

event.shapeless('railways:conductor_vent',[
  'framedblocks:framed_cube',
  'create:andesite_alloy'
])

/*
        TRACK RECIPES YAY
*/

function track(result, slab, incompleteItem) {
  event.custom({
    'type': 'create:sequenced_assembly',
    'ingredient': {'tag': slab},
    'loops': 1,
    'results':[{'item': result,"count": 2}],
    'sequence':[{
      'type': 'create:deploying',
      'ingredients': [{
        'item': incompleteItem
      },[
        {"tag": "forge:rods/zinc"},
        {"tag": "forge:rods/wrought_iron"}
      ]],
      'results': [{'item': incompleteItem}]
    },{
      'type': 'create:deploying',
      'ingredients': [{
        'item': incompleteItem
      },[
        {"tag": "forge:rods/zinc"},
        {"tag": "forge:rods/wrought_iron"}
      ]],
      'results': [{'item': incompleteItem}]
    },{
      'type': 'create:pressing',
      'ingredients': [{'item': incompleteItem}],
      'results': [{'item': incompleteItem}]
    }],
    'transitionalItem': {'item': incompleteItem}
  })
  event.custom({
    'type': 'create:sequenced_assembly',
    'ingredient': {'tag': slab},
    'loops': 1,
    'results':[{'item': result +'_narrow',"count": 2}],
    'sequence':[{
      'type': 'create:cutting',
      'ingredients': [{'item': incompleteItem + '_narrow'}],
      'results': [{'item': incompleteItem + '_narrow'}]
    },{
      'type': 'create:deploying',
      'ingredients': [{
        'item': incompleteItem + '_narrow'
      },[
        {"tag": "forge:rods/zinc"},
        {"tag": "forge:rods/wrought_iron"}
      ]],
      'results': [{'item': incompleteItem + '_narrow'}]
    },{
      'type': 'create:pressing',
      'ingredients': [{'item': incompleteItem + '_narrow'}],
      'results': [{'item': incompleteItem + '_narrow'}]
    }],
    'transitionalItem': {'item': incompleteItem + '_narrow'}
  })
  event.custom({
    'type': 'create:sequenced_assembly',
    'ingredient': {'item': result},
    'loops': 1,
    'results':[{'item': result +'_wide'}],
    'sequence':[{
      'type': 'create:cutting',
      'ingredients': [{'item': incompleteItem + '_wide'}],
      'results': [{'item': incompleteItem + '_wide'}]
    },{
      'type': 'create:deploying',
      'ingredients': [{
        'item': incompleteItem + '_wide'
      },[{
        'tag': slab
      }]],
      'results': [{'item': incompleteItem + '_wide'}]
    },{
      'type': 'create:pressing',
      'ingredients': [{'item': incompleteItem + '_wide'}],
      'results': [{'item': incompleteItem + '_wide'}]
    }],
    'transitionalItem': {'item': incompleteItem + '_wide'}
  })
}

track('create:track', 'create:sleepers', 'create:incomplete_track')
track('railways:track_bamboo', 'minecraft:bamboo', 'railways:track_incomplete_bamboo')
track('railways:track_stripped_bamboo', 'minecraft:bamboo_slab', 'railways:track_incomplete_stripped_bamboo')
//track('railways:track_warped', 'railways:warped_slab', 'railways:track_incomplete_warped')
//track('railways:track_crimson', 'railways:crimson_slab', 'railways:track_incomplete_crimson')
track('railways:track_blackstone', 'railways:black_slab', 'railways:track_incomplete_blackstone')


let wood = [
  'acacia',
  'ash',
  'aspen',
  'birch',
  'blackwood',
  'chestnut',
  'douglas_fir',
  'hickory',
  'kapok',
  'mangrove',
  'maple',
  'oak',
  'palm',
  'pine',
  'rosewood',
  'sequoia',
  'spruce',
  'sycamore',
  'white_cedar',
  'willow'
].forEach(woods =>[
      event.custom(
        {
          "fabric:load_conditions": [
            {
              "condition": "fabric:all_mods_loaded",
              "values": ["tfc"]
            }
          ],
          "type": "create:sequenced_assembly",
          "conditions": [
            {
              "type": "forge:mod_loaded",
              "modid": "tfc"
            }
          ],
          "ingredient": {
            "item": "tfc:wood/planks/"+woods+"_slab"
          },
          "loops": 1,
          "results": [
            {
              "item": "railways:track_tfc_"+woods,
              "count": 2
            }
          ],
          "sequence": [
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods
                },
                [
                  {"tag": "forge:rods/zinc"},
                  {"tag": "forge:rods/wrought_iron"}
                ]
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods
                }
              ]
            },
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods
                },
                [
                  {"tag": "forge:rods/zinc"},
                  {"tag": "forge:rods/wrought_iron"}
                ]
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods
                }
              ]
            },
            {
              "type": "create:pressing",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods
                }
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods
                }
              ]
            }
          ],
          "transitionalItem": {
            "item": "railways:track_incomplete_tfc_"+woods
          }
        }
      ),
      event.custom(
        {
          "fabric:load_conditions": [
            {
              "condition": "fabric:all_mods_loaded",
              "values": ["tfc"]
            }
          ],
          "type": "create:sequenced_assembly",
          "conditions": [
            {
              "type": "forge:mod_loaded",
              "modid": "tfc"
            }
          ],
          "ingredient": {
            "item": "tfc:wood/planks/"+woods+"_slab"
          },
          "loops": 1,
          "results": [
            {
              "item": "railways:track_tfc_"+woods+"_narrow",
              "count": 2
            }
          ],
          "sequence": [
            {
              "type": "create:cutting",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods+"_narrow"
                }
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods+"_narrow"
                }
              ]
            },
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods+"_narrow"
                },
                [
                  {"tag": "forge:rods/zinc"},
                  {"tag": "forge:rods/wrought_iron"}
                ]
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods+"_narrow"
                }
              ]
            },
            {
              "type": "create:pressing",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_tfc_c"+woods+"_narrow"
                }
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_tfc_"+woods+"_narrow"
                }
              ]
            }
          ],
          "transitionalItem": {
            "item": "railways:track_incomplete_tfc_"+woods+"_narrow"
          }
        }
        
      )

      ])



      //andisite
      event.custom(
        {
          "fabric:load_conditions": [
            {
              "condition": "fabric:all_mods_loaded",
              "values": ["tfc"]
            }
          ],
          "type": "create:sequenced_assembly",
          "conditions": [
            {
              "type": "forge:mod_loaded",
              "modid": "tfc"
            }
          ],
          "ingredient": {
            "tag": "create:sleepers"
          },
          "loops": 1,
          "results": [
            {
              "item": "railways:track_create_andesite_narrow",
              "count": 2
            }
          ],
          "sequence": [
            {
              "type": "create:cutting",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_create_andesite_narrow"
                }
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_create_andesite_narrow"
                }
              ]
            },
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_create_andesite_narrow"
                },
                [
                  {"tag": "forge:rods/zinc"},
                  {"tag": "forge:rods/wrought_iron"}
                ]
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_create_andesite_narrow"
                }
              ]
            },
            {
              "type": "create:pressing",
              "ingredients": [
                {
                  "item": "railways:track_incomplete_create_andesite_narrow"
                }
              ],
              "results": [
                {
                  "item": "railways:track_incomplete_create_andesite_narrow"
                }
              ]
            }
          ],
          "transitionalItem": {
            "item": "railways:track_incomplete_create_andesite_narrow"
          }
        }
        
      )
})
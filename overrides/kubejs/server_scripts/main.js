// priority: 1





//ServerEvents.recipes(event => { //listen for the "recipes" server event.

//Gem stuff

// let gems = [
//   'amethyst',
//   'diamond',
//   'emerald',
//   'lapis',
//   'opal',
//   'pyrite',
//   'ruby',
//   'sapphire',
//   'topaz'
// ].forEach(gem =>[
//   event.custom({
//     'type': 'create:sandpaper_polishing',
//     'ingredients': [
//       {
//         'item': 'tfc:ore/' + gem
//       }
//     ],
//     'results': [
//       {
//         'item': 'tfc:gem/' + gem
//       }
//     ]
//   }),
//   event.custom({
//     "type": "immersiveengineering:crusher",
//     "energy": 1600,
//     "input": {
//       "item": "tfc:gem/" + gem
//     },
//     "result": {
//       "base_ingredient": {
//         "item": "tfc:powder/" + gem
//       },
//       "count": 4
//     },
//     "secondaries": []
//   })
// ])


//TFC heating

// event.recipes.tfc.heating('kubejs:unfired_urn', 1399).resultItem('supplementaries:urn')
// event.recipes.tfc.heating('kubejs:unfired_ocarina', 1399).resultItem('mimi:ocarina')
// event.recipes.tfc.heating('createbigcannons:congealed_nitro', 1399).resultItem('createbigcannons:hardened_nitro')
// event.recipes.tfc.heating('create:basin', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 1600))
// event.recipes.tfc.heating('railways:smokestack_coalburner', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 1600))
// event.recipes.tfc.heating('railways:smokestack_oilburner', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 1600))
// event.recipes.tfc.heating('railways:smokestack_woodburner', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 1600))

//Exposure

// event.shaped('exposure:lightroom',[
//   'MT',
//   'PP',
//   'PP'
// ],{
//   M: 'firmalife:mixing_bowl',
//   T: 'minecraft:redstone_torch',
//   P: 'minecraft:planks'
// })

// event.shaped('exposure:camera',[
//   'VMB',
//   'PLP',
//   'PPP'
// ],{
//   V: 'minecraft:lever',
//   M: 'immersiveengineering:component_iron',
//   B: '#minecraft:stone_buttons',
//   P: 'immersiveengineering:plate_iron',
//   L: 'tfc:lens'
// })

// event.shaped('kubejs:empty_film_reel',[
//   'B',
//   'R',
//   'R'
// ],{
//   B: '#minecraft:stone_buttons',
//   R: 'tfc:metal/rod/wrought_iron'
// })

// event.shapeless('exposure:black_and_white_film',[
//   'kubejs:empty_film_reel',
//   'kubejs:black_and_white_film_base'
// ])

// event.shapeless('exposure:color_film',[
//   'kubejs:empty_film_reel',
//   'kubejs:color_film_base'
// ])

// event.custom({
//   'type': 'create:filling',
//   'ingredients': [{
//     'item': 'kubejs:black_and_white_film_base'
//   },{
//     'amount': 50,
//     'fluid': 'tfc:cyan_dye'
//   }],
//   'results': [{
//     'item': 'kubejs:incomplete_color_film_base'
//   }]
// })

// event.custom({
//   'type': 'create:filling',
//   'ingredients': [{
//     'item': 'kubejs:incomplete_color_film_base'
//   },{
//     'amount': 50,
//     'fluid': 'tfc:magenta_dye'
//   }],
//   'results': [{
//     'item': 'kubejs:incomplete_color_film_base2'
//   }]
// })

// event.custom({
//   'type': 'create:filling',
//   'ingredients': [{
//     'item': 'kubejs:incomplete_color_film_base2'
//   },{
//     'amount': 50,
//     'fluid': 'tfc:yellow_dye'
//   }],
//   'results': [{
//     'item': 'kubejs:color_film_base'
//   }]
// })

//MIMI

// event.shaped('mimi:banjo', [
//   'KSR',
//   'SNL',
//   'ELE'
// ], {
//   S: '#forge:string',
//   R: '#mcw_tfc_aio:metal_rods',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber',
//   E: '#forge:leather',
//   K: '#tfc:knives'
// }
// ).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:acguitar', [
//   'KSR',
//   'SNL',
//   'LPL'
// ], {
//   S: '#forge:string',
//   R: '#mcw_tfc_aio:metal_rods',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber',
//   P: '#forge:instrument_planks',
//   K: '#tfc:knives'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:elecguitar', [
//   'KWR',
//   'WNL',
//   'LAL'
// ], {
//   W: '#forge:wires',
//   R: '#mcw_tfc_aio:metal_rods',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber',
//   A: 'kubejs:aligned_magnetite',
//   K: '#tfc:knives'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:bassguitar', [
//   'KSR',
//   'SNL',
//   'PLP'
// ], {
//   S: '#forge:string',
//   R: '#mcw_tfc_aio:metal_rods',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber',
//   P: '#forge:instrument_planks',
//   K: '#tfc:knives'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:violin', [
//   'BSR',
//   'SN ',
//   'LLK'
// ], {
//   S: '#forge:string',
//   R: '#mcw_tfc_aio:metal_rods',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber',
//   B: 'minecraft:bow',
//   K: '#tfc:knives'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:microphone',[
//   ' WE',
//   ' NW',
//   'R  '
// ], {
//   W: 'tfc:wool',
//   E: 'create:electron_tube',
//   N: 'minecraft:note_block',
//   R: '#mcw_tfc_aio:metal_rods'
// })

// event.shaped('mimi:trumpet',[
//   'KBS',
//   'BN ',
//   'R  '
// ], {
//   B: '#forge:instrument_button',
//   S: 'tfc:metal/sheet/brass',
//   N: 'minecraft:note_block',
//   R: 'tfc:metal/rod/brass',
//   K: '#tfc:hammers'
// }).damageIngredient(Ingredient.of('#tfc:hammers'))

// event.shaped('mimi:frenchhorn',[
//   'KBS',
//   'BNS',
//   'RR '
// ], {
//   B: '#forge:instrument_button',
//   S: 'tfc:metal/sheet/brass',
//   N: 'minecraft:note_block',
//   R: 'tfc:metal/rod/brass',
//   K: '#tfc:hammers'
// }).damageIngredient(Ingredient.of('#tfc:hammers'))

// event.shaped('mimi:saxophone',[
//   'KBR',
//   'BN ',
//   'RS '
// ], {
//   B: '#forge:instrument_button',
//   S: 'tfc:metal/sheet/brass',
//   N: 'minecraft:note_block',
//   R: 'tfc:metal/rod/brass',
//   K: '#tfc:hammers'
// }).damageIngredient(Ingredient.of('#tfc:hammers'))

// event.shaped('mimi:clarinet',[
//   'BRO',
//   'BL ',
//   'NDK'
// ], {
//   B: '#forge:instrument_button',
//   R: '#forge:instrument_reed',
//   L: '#forge:instrument_lumber',
//   N: 'minecraft:note_block',
//   D: 'minecraft:black_dye',
//   O: '#mcw_tfc_aio:metal_rods',
//   K: '#tfc:knives'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:flute',[
//   'KBR',
//   'BR ',
//   'N  '
// ],{
//   B: '#forge:instrument_button',
//   R: 'tfc:metal/rod/silver',
//   N: 'minecraft:note_block',
//   K: '#tfc:hammers'
// }).damageIngredient(Ingredient.of('#tfc:hammers'))

// event.shaped('mimi:synlead',[
//   'PEP',
//   'PNP',
//   'BWB'
// ],{
//   P: 'immersiveengineering:plate_iron',
//   E: 'create:electron_tube',
//   N: 'minecraft:note_block',
//   B: '#forge:instrument_button',
//   W: 'immersiveengineering:wire_electrum'
// })

// event.shaped('mimi:kalimba',[
//   'K  ',
//   'RNR',
//   'LLL'
// ],{
//   K: '#tfc:knives',
//   R: '#mcw_tfc_aio:metal_rods',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:bagpipe', [
//   'LLL',
//   'EBC',
//   'NEC'
// ],{
//   L: '#forge:instrument_lumber',
//   E: '#forge:leather',
//   B: 'waterflasks:bladder',
//   C: '#tfc:high_quality_cloth',
//   N: 'minecraft:note_block',
// })

// event.shaped('mimi:oboe',[
//   'BRR',
//   'BLO',
//   'NDK'
// ], {
//   B: '#forge:instrument_button',
//   R: '#forge:instrument_reed',
//   L: '#forge:instrument_lumber',
//   N: 'minecraft:note_block',
//   D: 'minecraft:black_dye',
//   O: '#mcw_tfc_aio:metal_rods',
//   K: '#tfc:knives'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:accordion',[
//   'LLL',
//   'RPR',
//   'LNL'
// ],{
//   L: '#forge:instrument_lumber',
//   R: '#forge:leather',
//   P: 'minecraft:paper',
//   N: 'minecraft:note_block'
// })

// event.shaped('mimi:harmonica', [
//   'K  ',
//   'LRL',
//   'LNL'
// ],{
//   K: '#tfc:knives',
//   L: '#forge:instrument_lumber',
//   R: '#mcw_tfc_aio:metal_rods',
//   N: 'minecraft:note_block'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.custom(
//   {
//     "type": "tfc:damage_inputs_shapeless_crafting",
//     "recipe": {
//       "type": "minecraft:crafting_shapeless",
//       "ingredients": [
//         {
//           "item": "minecraft:note_block"
//         },
//         {
//           "tag": "forge:bells"
//         },
//         {
//           "item": "#tfc:hammers"
//         }
//       ],
//       "result": {
//         "item": "mimi:handbell",
//         "count": 1
//       }
//     }
//   }
//   )

// event.shaped('mimi:witchpipe',[
//   'KBS',
//   'BGL',
//   'NL '
// ],{
//   K: "#tfc:knives",
//   B: "#forge:instrument_button",
//   S: "#forge:instrument_reed",
//   G: "create_new_age:overcharged_diamond",
//   L: "#forge:instrument_lumber",
//   N: "minecraft:note_block"
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:glockenspiel',[
//   'K  ',
//   'RRR',
//   'LNL'
// ],{
//   K: '#tfc:knives',
//   R: '#mcw_tfc_aio:metal_rods',
//   L: '#forge:instrument_lumber',
//   N: 'minecraft:note_block'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:musicbox',[
//   'LLL',
//   'RNR',
//   'LKL'
// ],{
//   K: '#tfc:knives',
//   R: '#mcw_tfc_aio:metal_rods',
//   L: '#forge:instrument_lumber',
//   N: 'minecraft:note_block'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:musicbox',[
//   'LLL',
//   'RNR',
//   'LKL'
// ],{
//   L: '#forge:instrument_lumber',
//   R: '#mcw_tfw_aio:metal_rods',
//   N: 'minecraft:note_block',
//   K: '#tfc:knives',
// }).damageIngredient(Ingredient.of('#tfc:knives'))


// event.shaped('mimi:bassoon',[
//   'BSL',
//   'BLR',
//   'NLK'
// ],{
//   K: '#tfc:knives',
//   S: '#forge:instrument_reed',
//   B: '#forge:instrument_button',
//   R: '#mcw_tfc_aio:metal_rods',
//   L: '#forge:instrument_lumber',
//   N: 'minecraft:note_block'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:woodblock',[
//   'SRK',
//   'PPP',
//   'PNP'
// ],{
//   K: '#tfc:knives',
//   S: '#tfc:firepit_sticks',
//   R: '#mcw_tfc_aio:metal_rods',
//   P: '#forge:instrument_planks',
//   N: 'minecraft:note_block'
// }).damageIngredient(Ingredient.of('#tfc:knives'))


// event.shaped('mimi:bottle',[
//   'B B',
//   'SBS',
//   ' N '
// ],{
//   B: '#tfc:glass_bottles',
//   S: '#forge:string',
//   N: 'minecraft:note_block'
// })

// event.shaped('mimi:panflute',[
//   'L L',
//   'SNS',
//   ' LK'
// ],{
//   L: '#forge:instrument_lumber',
//   S: '#forge:string',
//   N: 'minecraft:note_block',
//   K: '#tfc:knives'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:recorder',[
//   'KBL',
//   'BL ',
//   'N  '
// ],{
//   K: '#tfc:knives',
//   B: 'minecraft:bone',
//   L: '#forge:instrument_lumber',
//   N: 'minecraft:note_block'
// }).damageIngredient(Ingredient.of('#tfc:knives'))

// event.shaped('mimi:piano',[
//   'PNP',
//   'PSP',
//   'BBB'
// ],{
//   P: '#forge:instrument_planks',
//   N: 'minecraft:note_block',
//   S: '#forge:string',
//   B: 'minecraft:bone'
// })

// event.shaped('mimi:drums',[
//   'PLP',
//   'SNM',
//   'BBB'
// ],{
//   P: 'kubejs:metal_plate_brass',
//   L: 'tfc:large_scraped_hide',
//   S: 'tfc:small_scraped_hide',
//   N: 'minecraft:note_block',
//   M: 'tfc:medium_scraped_hide',
//   B: 'tfc:wooden_bucket'
// })

// event.shaped('mimi:organ',[
//   'RSR',
//   'PBP',
//   'BNB'
// ],{
//   R: 'tfc:metal/rod/gold',
//   S: '#forge:string',
//   P: '#forge:instrument_planks',
//   B: 'minecraft:bone',
//   N: 'minecraft:note_block'
// })

// event.shaped('mimi:steeldrum',[
//   ' S ',
//   'LNL',
//   'RLR'
// ],{
//   S: 'firmalife:metal/sheet/stainless_steel',
//   L: '#forge:instrument_lumber',
//   N: 'minecraft:note_block',
//   R: '#mcw_tfc_aio:metal_rods'
// })

// event.shaped('mimi:xylophone',[
//   'RRR',
//   'GNG',
//   'L L'
// ],{
//   R: '#mcw_tfc_aio:metal_rods',
//   G: 'tfc:metal/rod/gold',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber'
// })

// event.shaped('mimi:vibraphone',[
//   'GGG',
//   'RNR',
//   'L L'
// ],{
//   R: '#mcw_tfc_aio:metal_rods',
//   G: 'tfc:metal/rod/gold',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber'
// })

// event.shaped('mimi:marimba',[
//   'PPP',
//   'RNR',
//   'L L'
// ],{
//   R: '#mcw_tfc_aio:metal_rods',
//   P: '#forge:instrument_planks',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber'
// })

// event.shaped('mimi:celesta',[
//   ' N ',
//   'PSP',
//   'RRR'
// ],{
//   N: 'minecraft:note_block',
//   P: '#forge:instrument_planks',
//   S: '#forge:string',
//   R: 'firmalife:metal/rod/stainless_steel'
// })

// event.shaped('mimi:tubularbells',[
//   'GLG',
//   'GNG',
//   'L L'
// ],{
//   G: 'tfc:metal/rod/gold',
//   N: 'minecraft:note_block',
//   L: '#forge:instrument_lumber'
// })

// event.shaped('mimi:harpsichord',[
//   'PSP',
//   'PSP',
//   'BNB'
// ],{
//   S: '#forge:string',
//   P: '#forge:instrument_planks',
//   B: 'minecraft:bone',
//   N: 'minecraft:note_block'
// })

// event.shaped('mimi:keyboard',[
//   'ENE',
//   'BBB',
//   'R R'
// ],{
//   E: 'create:electron_tube',
//   N: 'minecraft:note_block',
//   B: 'minecraft:bone',
//   R: '#mcw_tfc_aio:metal_rods'
// })

// event.shaped('mimi:prophet',[
//   'ENE',
//   'BBB',
//   'P P'
// ],{
//   E: 'create:electron_tube',
//   N: 'minecraft:note_block',
//   B: 'minecraft:bone',
//   P: '#forge:instrument_planks'
// })

// event.shaped('mimi:edrums',[
//   'D D',
//   'ERE',
//   'RNR'
// ],{
//   D: 'immersiveengineering:plate_duroplast',
//   E: 'create:electron_tube',
//   R: '#mcw_tfc_aio:metal_rods',
//   N: 'minecraft:note_block'
// })

// event.shaped('mimi:transmitter',[
//   ' E ',
//   'SAS',
//   ' S '
// ],{
//   E: 'create:electron_tube',
//   S: 'immersiveengineering:plate_iron',
//   A: 'immersiveengineering:component_electronic_adv'
// })

// event.shaped('mimi:filecaster',[
//   'RTR',
//   ' G '
// ],{
//   R: 'minecraft:redstone',
//   T: 'mimi:transmitter',
//   G: 'create_new_age:overcharged_diamond'
// })

// event.shaped('mimi:switchboard',[
//   'EB',
//   'SS'
// ],{
//   E: 'create:electron_tube',
//   B: '#forge:instrument_button',
//   S: 'immersiveengineering:plate_iron'
// })

// event.shaped('mimi:floppydisk',[
//   'RDR',
//   'DPD',
//   'RDR'
// ],{
//   R: '#mcw_tfc_aio:metal_rods',
//   D: 'minecraft:redstone',
//   P: 'immersiveengineering:plate_duroplast'
// })

// event.shaped('mimi:listener',[
//   'PAP',
//   'RNR',
//   'PRP'
// ],{
//   P: 'immersiveengineering:plate_iron',
//   A: 'immersiveengineering:component_electronic_adv',
//   R: 'minecraft:redstone',
//   N: 'minecraft:note_block'
// })

// event.shaped('mimi:receiver',[
//   'PEP',
//   'RTR',
//   'PRP'
// ],{
//   P: 'immersiveengineering:plate_iron',
//   E: 'create:electron_tube',
//   R: 'minecraft:redstone',
//   T: 'mimi:transmitter'
// })

// event.shaped('mimi:mechanicalmaestro',[
//   'PEP',
//   'CRD',
//   'PDP'
// ],{
//   P: 'immersiveengineering:plate_iron',
//   E: 'create:electron_tube',
//   C: '#forge:chests',
//   R: 'mimi:receiver',
//   D: 'minecraft:redstone'
// })

// event.shaped('mimi:conductor',[
//   'GEG',
//   'RTR',
//   'GRG'
// ],{
//   G: 'immersiveengineering:plate_gold',
//   E: 'create:electron_tube',
//   R: 'minecraft:redstone',
//   T: 'mimi:transmitter'
// })

// event.shaped('mimi:tuningtable',[
//   'WLW',
//   ' S '
// ],{
//   W: '#tfc:high_quality_cloth',
//   L: '#forge:leather',
//   S: '#forge:sheetmetals'
// })

// event.shaped('mimi:diskwriter',[
//   ' A ',
//   'RGR',
//   ' S '
// ],{
//   A: 'immersiveengineering:component_electronic_adv',
//   R: 'minecraft:redstone',
//   G: 'create_new_age:overcharged_diamond',
//   S: '#forge:sheetmetals'
// })



//CHALK

// event.shaped('4x chalk:white_chalk', [
//   'BC',
//   'B ',
// ], {
//   B: 'tfc:brick/chalk',
//   C: '#tfc:chisels'
// }
// ).damageIngredient(Ingredient.of('#tfc:chisels'))

//SOPHISTICATED BACKPACKS

// event.shaped('sophisticatedbackpacks:upgrade_base', [// arg 1: output
//     'YRY',
//     'RLR', // arg 2: the shape (array of strings)
//     'YRY'
//     ], {
//     Y: '#forge:string',
//     R: 'tfc:metal/rod/wrought_iron',
//     L: '#forge:leather'
//     }
//     )

// event.custom({
//   "type": "sophisticatedbackpacks:backpack_upgrade",
//   "conditions": [{
//     "type": "sophisticatedcore:item_enabled",
//     "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
//   }],
//   "key": {
//     "B": {
//       "item": "sophisticatedbackpacks:backpack"
//     },
//     "D": {
//       "item": "tfc:metal/double_sheet/sterling_silver"
//     },
//     "S": {
//       "item": "sewingkit:leather_strip"
//     },
//     "R": {
//       "item": "tfc:metal/rod/sterling_silver"
//     }
//   },
//   "pattern": [
//     'SRS',
//     'DBD',
//     'SRS'
//   ],
//   "result": {
//     "item": "sophisticatedbackpacks:iron_backpack"
//   }
// })

// event.custom({
//   "type": "sophisticatedbackpacks:backpack_upgrade",
//   "conditions": [{
//     "type": "sophisticatedcore:item_enabled",
//     "itemRegistryName": "sophisticatedbackpacks:gold_backpack"
//   }],
//   "key": {
//     "B": {
//       "item": "sophisticatedbackpacks:iron_backpack"
//     },
//     "D": {
//       "item": "tfc:metal/double_sheet/rose_gold"
//     },
//     "S": {
//       "item": "sewingkit:leather_strip"
//     },
//     "R": {
//       "item": "tfc:metal/rod/rose_gold"
//     }
//   },
//   "pattern": [
//     'SRS',
//     'DBD',
//     'SRS'
//   ],
//   "result": {
//     "item": "sophisticatedbackpacks:gold_backpack"
//   }
// })

// event.custom({
//   "type": "sophisticatedbackpacks:backpack_upgrade",
//   "conditions": [{
//     "type": "sophisticatedcore:item_enabled",
//     "itemRegistryName": "sophisticatedbackpacks:netherite_backpack"
//   }],
//   "key": {
//     "B": {
//       "item": "sophisticatedbackpacks:gold_backpack"
//     },
//     "D": {
//       "item": "tfc:metal/double_sheet/black_steel"
//     },
//     "S": {
//       "item": "sewingkit:leather_strip"
//     },
//     "R": {
//       "item": "tfc:metal/rod/black_steel"
//     }
//   },
//   "pattern": [
//     'SRS',
//     'DBD',
//     'SRS'
//   ],
//   "result": {
//     "item": "sophisticatedbackpacks:netherite_backpack"
//   }
// })

// event.custom({
//   "type": "sophisticatedbackpacks:backpack_upgrade",
//   "conditions": [{
//     "type": "sophisticatedcore:item_enabled",
//     "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
//   }],
//   "key": {
//     "B": {
//       "item": "sophisticatedbackpacks:netherite_backpack"
//     },
//     "D": {
//       "item": "tfc:metal/double_sheet/blue_steel"
//     },
//     "S": {
//       "item": "sewingkit:leather_strip"
//     },
//     "R": {
//       "item": "tfc:metal/rod/blue_steel"
//     }
//   },
//   "pattern": [
//     'SRS',
//     'DBD',
//     'SRS'
//   ],
//   "result": {
//     "item": "sophisticatedbackpacks:diamond_backpack"
//   }
// })

// let advances = [
//   'pickup',
//   'filter',
//   'magnet',
//   'feeding',
//   'void',
//   'restock',
//   'deposit',
//   'refill'
// ].forEach(advance =>[
//   event.custom({
//     'type': 'sewingkit:sewing',
//     'materials': [{
//       'count': 1,
//       'ingredient': {
//         'item': 'sophisticatedbackpacks:' + advance + '_upgrade'
//       }},{
//       'count': 1,
//       'ingredient': {
//         'item': 'immersiveengineering:component_electronic_adv'
//       }},{
//       'count': 1,
//       'ingredient': {
//         'item': 'create:attribute_filter'
//       }}
//     ],
//     'result': {
//       'item': 'sophisticatedbackpacks:advanced_' + advance + '_upgrade'
//     },
//     'tool': {
//       'type': 'sewingkit:tool_ingredient',
//       'tool_type': 'sewingkit_sew'
//     }
//   })
// ])

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'create:filter'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'minecraft:sticky_piston'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:pickup_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'create:filter'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'tag': 'forge:chain_meshes'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:filter_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'create:filter'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'kubejs:aligned_magnetite'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:magnet_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'create:filter'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'tfc:ceramic/bowl'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:feeding_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'create:filter'
//     }},{
//     'count': 3,
//     'ingredient': {
//       'item': 'minecraft:obsidian'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:void_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'create:filter'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'minecraft:dispenser'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:restock_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'create:filter'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'minecraft:dropper'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:deposit_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'create:filter'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'minecraft:hopper'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:refill_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'minecraft:jukebox'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:jukebox_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:metal_barrel'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:fluid_pipe'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:tank_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'tag': 'tfc:workbenches'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'tag': 'forge:chests'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:crafting_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:component_electronic'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:capacitor_lv'
//     }},{
//     'count': 1,
//     'ingredient': {
//       'item': 'immersiveengineering:wirecoil_electrum_ins'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:battery_upgrade'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:upgrade_base'
//     }},{
//     'count': 4,
//     'ingredient': {
//       'item': 'tfc:metal/double_sheet/sterling_silver'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:stack_upgrade_tier_1'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:stack_upgrade_tier_1'
//     }},{
//     'count': 4,
//     'ingredient': {
//       'item': 'tfc:metal/double_sheet/rose_gold'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:stack_upgrade_tier_2'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:stack_upgrade_tier_2'
//     }},{
//     'count': 4,
//     'ingredient': {
//       'item': 'tfc:metal/double_sheet/black_steel'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:stack_upgrade_tier_3'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.custom({
//   'type': 'sewingkit:sewing',
//   'materials': [{
//     'count': 1,
//     'ingredient': {
//       'item': 'sophisticatedbackpacks:stack_upgrade_tier_3'
//     }},{
//     'count': 4,
//     'ingredient': {
//       'item': 'tfc:metal/double_sheet/blue_steel'
//     }}
//   ],
//   'result': {
//     'item': 'sophisticatedbackpacks:stack_upgrade_tier_4'
//   },
//   'tool': {
//     'type': 'sewingkit:tool_ingredient',
//     'tool_type': 'sewingkit_sew'
//   }
// })

// event.shaped('framedblocks:framing_saw',[
//   ' S ',
//   'FFF'
// ],{
//   S: 'immersiveengineering:sawblade',
//   F: 'framedblocks:framed_cube'
// })

// event.shaped('framedblocks:powered_framing_saw',[
//   'GGG',
//   'RSR',
//   'FFF'
// ],{
//   G: 'firmalife:reinforced_glass',
//   R: 'minecraft:redstone',
//   S: 'immersiveengineering:sawblade',
//   F: 'framedblocks:framed_cube'
// })

// event.shaped('framedblocks:framed_key',[
//   'SSF',
//   'RR '
// ],{
//   S: '#tfc:firepit_sticks',
//   F: 'framedblocks:framed_cube',
//   R: 'tfc:metal/rod/wrought_iron'
// })

//custom
//sewing

// event.shaped('sewingkit:sewing_station',[
//   'SSS',
//   'P P',
//   'T T'
// ],{
//   S: '#minecraft:wooden_slabs',
//   P: '#minecraft:planks',
//   T: '#tfc:firepit_sticks'
// })

// event.shapeless('sewingkit:stone_sewing_needle',[
//   'sewingkit:file',
//   '#forge:cobblestone'
// ])

// event.shapeless('sewingkit:gold_sewing_needle',[
//   'sewingkit:file',
//   'tfc:metal/rod/gold'
// ])

// event.shapeless('sewingkit:iron_sewing_needle',[
//   'sewingkit:file',
//   'tfc:metal/rod/wrought_iron'
// ])

// event.shapeless('sewingkit:netherite_sewing_needle',[
//   'sewingkit:file',
//   'tfc:metal/rod/black_steel'
// ])

// event.recipes.tfc.anvil('sewingkit:file', 'tfc:metal/ingot/wrought_iron', ['punch_any', 'punch_any', 'punch_any']).tier(3)

// event.custom({
//   "type": "sewingkit:sewing",
//   "materials": [
//     {
//       "count": 2,
//       "ingredient": {
//         "tag": "minecraft:wool"
//       }
//     },
//     {
//       "count": 1,
//       "ingredient": {
//         "item": "tfc:metal/rod/wrought_iron"
//       }
//     }
//   ],
//   "result": {
//     "item": "immersiveengineering:earmuffs"
//   },
//   "tool": {
//     "type": "sewingkit:tool_ingredient",
//     "tool_type": "sewingkit_sew"
//   }
// })

// event.custom({
//   "type": "sewingkit:sewing",
//   "materials": [
//     {
//       "count": 8,
//       "ingredient": {
//         "item": "tfc:silk_cloth"
//       }
//     },
//     {
//       "count": 2,
//       "ingredient": {
//         "item": "immersiveengineering:stick_aluminum"
//       }
//     },
//     {
//       "count": 1,
//       "ingredient": {
//         "item": "minecraft:string"
//       }
//     }
//   ],
//   "result": {
//     "item": "kubejs:glider_sail"
//   },
//   "tool": {
//     "type": "sewingkit:tool_ingredient",
//     "tool_type": "sewingkit_sew"
//   }
// })

// event.custom({
//   "type": "sewingkit:sewing",
//   "materials": [
//     {
//       "count": 6,
//       "ingredient": {
//         "item": "sewingkit:leather_strip"
//       }
//     },
//     {
//       "count": 1,
//       "ingredient": {
//         "item": "minecraft:leather"
//       }
//     },
//     {
//       "count": 1,
//       "ingredient": {
//         "item": "tfc:metal/rod/black_steel"
//       }
//     }
//   ],
//   "result": {
//     "item": "kubejs:glider_harness"
//   },
//   "tool": {
//     "type": "sewingkit:tool_ingredient",
//     "tool_type": "sewingkit_sew"
//   }
// })

//zapping

// event.custom(
//   {
//   "type": "create_new_age:energising",
//   "energy_needed": 30000,
//   "ingredients": [
//     {
//       "tag": "tfc:top_cut_gems"
//     }
//   ],
//   "results": [
//     {
//       "item": "create_new_age:overcharged_diamond"
//     }
//   ]
//  }
//  )

//  event.custom(
//   {
//   "type": "create_new_age:energising",
//   "energy_needed": 111,
//   "ingredients": [
//     {
//       "item": "kubejs:compressed_magnetite"
//     }
//   ],
//   "results": [
//     {
//       "item": "kubejs:aligned_magnetite"
//     }
//   ]
//  }
//  )

//     event.custom(
//   {
//   "type": "create_new_age:energising",
//   "energy_needed": 500,
//   "ingredients": [
//     {
//       "item": "tfc:powder/limonite"
//     }
//   ],
//   "results": [
//     {
//       "item": "tfc:powder/magnetite"
//     }
//   ]
//  }
//  )
//   event.custom(
//   {
//   "type": "create_new_age:energising",
//   "energy_needed": 500,
//   "ingredients": [
//     {
//       "item": "tfc:powder/hematite"
//     }
//   ],
//   "results": [
//     {
//       "item": "tfc:powder/magnetite"
//     }
//   ]
//  }
//  )




//tfc

// event.recipes.tfc.glassworking('kubejs:glass_bulb', 'tfc:silica_glass_batch', ['blow','roll', 'pinch', 'saw'])


//simpleplanes

// event.shaped('simpleplanes:propeller', [// arg 1: output
//   'P P',
//   ' A ', // arg 2: the shape (array of strings)
//   'P P'
// ], {
//   A: 'create:andesite_alloy',
//   P: 'kubejs:propeller_blade'
// })

// event.shaped('simpleplanes:floaty_bedding', [// arg 1: output
//   'PRP',
//   'WWW', // arg 2: the shape (array of strings)
//   'SRS'
// ], {
//   P: 'immersiveengineering:plate_steel',
//   R: 'tfc:metal/rod/steel',
//   S: 'tfc:metal/sheet/steel',
//   W: 'immersiveengineering:balloon'
// })

// event.shaped('simpleplanes:booster', [// arg 1: output
//   ' F ',
//   'STP', // arg 2: the shape (array of strings)
//   ' P '
// ], {
//   F: 'minecraft:flint_and_steel',
//   S: 'immersiveengineering:stick_aluminum',
//   P: 'immersiveengineering:plate_aluminum',
//   T: 'immersiveengineering:toolupgrade_drill_capacity'
// })

// event.shaped('simpleplanes:healing', [// arg 1: output
//   'B B',
//   ' G ', // arg 2: the shape (array of strings)
//   ' B '
// ], {
//   B: 'tfc:metal/rod/black_steel',
//   G: 'tfc:metal/double_ingot/gold'
// })

// event.shaped('simpleplanes:armor', [// arg 1: output
//   'S S',
//   'DSD', // arg 2: the shape (array of strings)
//   'SDS'
// ], {
//   S: 'immersiveengineering:plate_steel',
//   D: 'tfc:metal/double_sheet/steel'
// })

// event.shaped('simpleplanes:folding',[
//   ' S ',
//   'PGP',
//   ' R '
// ],{
//   S: 'tfc:metal/double_sheet/black_bronze',
//   P: 'minecraft:piston',
//   G: 'create_new_age:overcharged_diamond',
//   R: 'tfc:metal/rod/blue_steel'
// })

// event.shaped('simpleplanes:seats',[
//   'LLL',
//   'GWG'
// ],{
//   L: '#tfc:lumber',
//   G: 'tfc:glue',
//   W: '#tfc:high_quality_cloth'
// })

// event.shaped('simpleplanes:electric_engine',[
//   'MSR',
//   'WTP',
//   'MSR'
// ],{
//   M: 'create_new_age:redstone_magnet',
//   S: 'tfc:metal/sheet/copper',
//   R: 'tfc:metal/rod/copper',
//   W: 'immersiveengineering:wirecoil_electrum',
//   T: 'create_new_age:basic_motor',
//   P: 'simpleplanes:propeller'
// })

// event.shaped('simpleplanes:furnace_engine',[
//   'BSR',
//   'GMP',
//   'BSR'
// ],{
//   B: 'tfc:bellows',
//   S: 'tfc:metal/sheet/steel',
//   R: 'tfc:metal/rod/steel',
//   G: 'immersiveengineering:plate_gold',
//   M: 'create_new_age:basic_motor',
//   P: 'simpleplanes:propeller'
// })

// event.shaped('simpleplanes:liquid_engine',[
//   'BSR',
//   'FMP',
//   'BSR'
// ],{
//   B: 'immersiveengineering:metal_barrel',
//   S: 'tfc:metal/sheet/steel',
//   R: 'tfc:metal/rod/steel',
//   F: 'immersiveengineering:fluid_pump',
//   M: 'create_new_age:basic_motor',
//   P: 'simpleplanes:propeller'
// })

// event.shaped('simpleplanes:plane_workbench',[
//   'HIS',
//   'OGO',
//   'MWM'
// ],{
//   H: 'immersiveengineering:hammer',
//   I: 'tfc:metal/ingot/steel',
//   S: 'immersiveengineering:screwdriver',
//   O: 'minecraft:obsidian',
//   G: 'tfc:metal/double_sheet/gold',
//   M: 'create:mechanical_crafter',
//   W: '#tfc:workbenches'
// })

// event.shaped('simpleplanes:charging_station',[
//   'PEP',
//   'GVG',
//   'PAP'
// ],{
//   P: 'immersiveengineering:plate_steel',
//   E: 'tfc_ie_addon:metal/sheet/electrum',
//   G: 'tfc:metal/rod/gold',
//   V: 'immersiveengineering:capacitor_hv',
//   A: 'immersiveengineering:component_electric_adv'
// })

// event.shaped('simpleplanes:parachute',[
//   'SSS',
//   'L L',
//   ' L '
// ],{
//   S: 'tfc:silk_cloth',
//   L: 'minecraft:lead'
// })

//framedblocks
// event.shaped('framedblocks:framed_cube', [// arg 1: output
//   'WSW',
//   'S S', // arg 2: the shape (array of strings)
//   'WSW'
// ], {
//   S: '#tfc:firepit_sticks',
//   W: '#minecraft:planks'
// })

// event.shapeless('framedblocks:framed_iron_door',[
//   'framedblocks:framed_door',
//   'minecraft:iron_door'
// ])

// event.shapeless('framedblocks:framed_iron_trapdoor',[
//   'framedblocks:framed_door',
//   'tfc:metal/trapdoor/wrought_iron'
// ])

// event.shaped('framedblocks:framed_iron_pressure_plate',[
//   'FF',
//   'II'
// ],{
//   F: 'framedblocks:framed_cube',
//   I: 'tfc:metal/ingot/wrought_iron'
// })

// event.shaped('framedblocks:framed_lever',[
//   'S',
//   'F'
// ],{
//   F: 'framedblocks:framed_cube',
//   S: '#tfc:firepit_sticks'
// })

// event.shaped('framedblocks:framed_sign',[
//   'FFF',
//   'FFF',
//   ' S '
// ],{
//   F: 'framedblocks:framed_cube',
//   S: '#tfc:firepit_sticks'
// })

// event.shaped('framedblocks:framed_hanging_sign',[
//   'C C',
//   'FFF',
//   'FFF'
// ],{
//   F: 'framedblocks:framed_cube',
//   C: '#forge:chains'
// })

// event.shaped('32x framedblocks:framed_fancy_rail',[
//   'R R',
//   'RFR',
//   'R R'
// ],{
//   F: 'framedblocks:framed_cube',
//   R: 'tfc:metal/rod/wrought_iron'
// })

// event.shaped('64x framedblocks:framed_fancy_rail',[
//   'R R',
//   'RFR',
//   'R R'
// ],{
//   F: 'framedblocks:framed_cube',
//   R: 'tfc:metal/rod/steel'
// })

// event.shaped('16x framedblocks:framed_fancy_powered_rail',[
//   'R R',
//   'RFR',
//   'RDR'
// ],{
//   F: 'framedblocks:framed_cube',
//   R: 'tfc:metal/rod/gold',
//   D: 'minecraft:redstone'
// })

// event.shaped('4x framedblocks:framed_fancy_detector_rail',[
//   'RPR',
//   'RFR',
//   'RDR'
// ],{
//   F: 'framedblocks:framed_cube',
//   R: 'tfc:metal/rod/wrought_iron',
//   P: '#minecraft:stone_pressure_plates',
//   D: 'minecraft:redstone'
// })

// event.shaped('8x framedblocks:framed_fancy_detector_rail',[
//   'RPR',
//   'RFR',
//   'RDR'
// ],{
//   F: 'framedblocks:framed_cube',
//   R: 'tfc:metal/rod/steel',
//   P: '#minecraft:stone_pressure_plates',
//   D: 'minecraft:redstone'
// })

// event.shaped('4x framedblocks:framed_fancy_activator_rail',[
//   'RFR',
//   'RTR',
//   'RFR'
// ],{
//   F: 'framedblocks:framed_cube',
//   R: 'tfc:metal/rod/wrought_iron',
//   T: 'minecraft:redstone_torch'
// })

// event.shaped('8x framedblocks:framed_fancy_activator_rail',[
//   'RFR',
//   'RTR',
//   'RFR'
// ],{
//   F: 'framedblocks:framed_cube',
//   R: 'tfc:metal/rod/steel',
//   T: 'minecraft:redstone_torch'
// })

//supplementaries

// event.recipes.tfc.extra_products_shapeless_crafting('tfc:ceramic/ingot_mold',
//   event.shapeless('supplementaries:ash_brick', ['supplementaries:ash', 'tfc:ceramic/ingot_mold']))

// event.shaped('supplementaries:pulley_block', [// arg 1: output
//     'PSP',
//     'PFP', // arg 2: the shape (array of strings)
//     'PSP'
//     ], {
//     S: '#minecraft:wooden_slabs',
//     P: '#minecraft:planks',
//     F: 'create:shaft'
//     }
//     )
//     event.shaped('supplementaries:speaker_block', [// arg 1: output
//     'PPP',
//     'PDP', // arg 2: the shape (array of strings)
//     'PEP'
//     ], {
//     E: 'create:electron_tube',
//     P: '#minecraft:planks',
//     D: 'immersiveengineering:plate_duroplast'
//     }
//     )
//     event.shaped('supplementaries:hourglass', [// arg 1: output
//     ' B ',
//     ' B ', // arg 2: the shape (array of strings)
//     ' G '
//     ], {
//     B: 'kubejs:glass_bulb',
//     G: 'tfc:metal/sheet/gold'
//     }
//     )
//     event.shaped('supplementaries:hat_stand', [// arg 1: output
//     'P',
//     'S'
//     ], {
//     S: '#forge:smooth_stone_slab',
//     P: '#minecraft:planks'
//     }
//     )
//     event.shaped('supplementaries:timber_frame', [// arg 1: output
//     ' L ',
//     'L L', // arg 2: the shape (array of strings)
//     ' L '
//     ], {
//     L: '#tfc:lumber'
//     }
//     )
//     event.shaped('supplementaries:timber_brace', [// arg 1: output
//     'L  ',
//     'L L', // arg 2: the shape (array of strings)
//     '  L'
//     ], {
//     L: '#tfc:lumber'
//     }
//     )
//     event.shaped('supplementaries:timber_cross_brace', [// arg 1: output
//     'L L',
//     '   ', // arg 2: the shape (array of strings)
//     'L L'
//     ], {
//     L: '#tfc:lumber'
//     }
//     )
//     event.shaped('4x supplementaries:bomb_blue', [// arg 1: output
//     ' N ',
//     'NSN', // arg 2: the shape (array of strings)
//     ' N '
//     ], {
//     N: 'createbigcannons:nitropowder',
//     S: 'tfc:metal/double_sheet/steel'
//     }
//     )

//     event.shaped('4x supplementaries:bomb', [// arg 1: output
//     ' N ',
//     'NSN', // arg 2: the shape (array of strings)
//     ' N '
//     ], {
//     N: 'minecraft:gunpowder',
//     S: 'tfc:metal/double_sheet/cast_iron'
//     }
//     )
//     event.shaped('supplementaries:altimeter', [// arg 1: output
//     'L',
//     'R', // arg 2: the shape (array of strings)
//     'E'
//     ], {
//     R: 'minecraft:redstone',
//     E: 'tfc_ie_addon:metal/sheet/electrum',
//     L: 'tfc:lens'
//     }
//     )
//     event.shaped('supplementaries:slingshot', [// arg 1: output
//     'SLS',
//     'RGR', // arg 2: the shape (array of strings)
//     ' R '
//     ], {
//     R: 'tfc:metal/rod/wrought_iron',
//     G: 'tfc:glue',
//     L: 'sewingkit:leather_sheet',
//     S: '#forge:string'
//     }
//     )

// event.shaped('supplementaries:cage',[
//   'SSS',
//   'B B',
//   'LLL'
// ],{
//   S: 'immersiveengineering:plate_iron',
//   B: 'tfc:metal/bars/wrought_iron',
//   L: '#tfc:lumber'
// })

// event.shaped('supplementaries:safe',[
//   'BPB',
//   'PGP',
//   'BPB'
// ],{
//   B: 'tfc:metal/block/black_steel',
//   P: 'tfc:metal/double_sheet/black_steel',
//   G: 'tfc:metal/trapdoor/black_steel'
// })

// event.shaped('supplementaries:crank',[
//   ' S ',
//   'BBB'
// ],{
//   S: '#tfc:firepit_sticks',
//   B: '#forge:cobblestone_slabs'
// })

// event.shaped('supplementaries:relayer',[
//   'CCC',
//   'RRI',
//   'CCC'
// ],{
//   C: '#forge:cobblestone',
//   R: 'minecraft:redstone',
//   I: 'tfc:metal/ingot/wrought_iron'
// })

// event.shaped('supplementaries:spring_launcher',[
//   'LLL',
//   'CRC',
//   'CMC'
// ],{
//   L: '#tfc:lumber',
//   C: '#forge:cobblestone',
//   R: 'createbigcannons:recoil_spring',
//   M: 'tfc:brass_mechanisms'
// })

// event.shaped('2x supplementaries:crystal_display',[
//   'SC',
//   'SC',
//   'SC'
// ],{
//   S: '#forge:smooth_stone',
//   C: 'tfc_ie_addon:mineral/quartz_shard'
// })

// event.shaped('supplementaries:lock_block',[
//   'IPI',
//   'PMP',
//   'IPI'
// ],{
//   I: 'tfc:metal/rod/wrought_iron',
//   P: '#minecraft:planks',
//   M: 'tfc:brass_mechanisms'
// })

// event.shapeless('supplementaries:ash', [
//   'tfc:powder/wood_ash'
// ])

// event.shapeless('tfc:powder/wood_ash', [
//   'supplementaries:ash'
// ])

// event.custom({
//   'type': 'tfc:pot',
//   'ingredients': [
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     }
//   ],
//   'fluid_ingredient': {
//     'ingredient': 'tfc:olive_oil',
//     'amount': 100
//   },
//   'duration': 1200,
//   'temperature': 200,
//   'item_output': [
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     }
//   ]
// })

// event.custom({
//   'type': 'tfc:pot',
//   'ingredients': [
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     }
//   ],
//   'fluid_ingredient': {
//     'ingredient': 'tfc:tallow',
//     'amount': 100
//   },
//   'duration': 1200,
//   'temperature': 200,
//   'item_output': [
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     }
//   ]
// })

// event.custom({
//   'type': 'tfc:pot',
//   'ingredients': [
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     },
//     {
//       'ingredient': {
//         'tag': 'forge:soap_ash',
//       }
//     }
//   ],
//   'fluid_ingredient': {
//     'ingredient': 'immersiveengineering:plantoil',
//     'amount': 100
//   },
//   'duration': 1200,
//   'temperature': 200,
//   'item_output': [
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     },
//     {
//       'item': 'supplementaries:soap'
//     }
//   ]
// })

//ie

// event.custom(
//   {
//     "type": "immersiveengineering:blueprint",
//     "category": "components",
//     "inputs": [
//       {"item": "tfc:empty_jar"},
//       {"tag": "forge:plates/nickel"},
//       {"tag": "forge:wires/copper"},
//       {"tag": "forge:dusts/redstone"}
//     ],
//     "result": {
//       "count": 3,
//       "item": "immersiveengineering:electron_tube"
//     }
//   }
// )

// event.custom(
//   {
//     "type": "immersiveengineering:blueprint",
//     "category": "components",
//     "inputs": [
//       {"item": "kubejs:glass_bulb"},
//       {
//         "base_ingredient": [
//           {"item": "immersiveengineering:wire_electrum"}
//         ],
//         "count": 1
//       },
//       {"item": "immersiveengineering:plate_copper"}
//     ],
//     "result": {
//       "count": 3,
//       "item": "immersiveengineering:light_bulb"
//     }
//   }

// )

// event.custom({
//   "type": "immersiveengineering:crusher",
//   "energy": 6000,
//   "input": {
//     "tag": "forge:ores/coal"
//   },
//   "result": {
//     "base_ingredient": {
//       "item": "tfc:ore/bituminous_coal"
//     },
//     "count": 4
//   },
//   "secondaries": [
//     {
//       "chance": 0.15,
//       "output": {
//         "item": "tfc:powder/sulfur"
//       }
//     }
//   ]
// }
// )

// event.shaped('immersiveengineering:electric_lantern', [// arg 1: output
//   ' P ',
//   'LBG', // arg 2: the shape (array of strings)
//   ' W '
// ], {
//   P: 'immersiveengineering:plate_iron',
//   B: 'immersiveengineering:light_bulb',
//   G: 'tfc:lamp_glass',
//   L: 'tfc:metal/unfinished_lamp/wrought_iron',
//   W: 'immersiveengineering:wire_copper'
// })

// event.shaped('immersiveengineering:floodlight', [// arg 1: output
//     'SII',
//     'PLS', // arg 2: the shape (array of strings)
//     'SWM'
// ], {
//     S: 'immersiveengineering:plate_silver',
//     L: 'tfc:powder/lime',
//     I: 'tfc:metal/ingot/wrought_iron',
//     P: 'minecraft:glass_pane',
//     W: 'immersiveengineering:wirecoil_electrum',
//     M: 'immersiveengineering:component_iron'
// })

// event.shaped('immersiveengineering:connector_redstone', [// arg 1: output
//     'BBB', // arg 2: the shape (array of strings)
//     'TRT'
// ], {
//     T: 'minecraft:terracotta',
//     R: 'minecraft:redstone',
//     B: 'tfc:metal/rod/brass'
// })

// event.shaped('immersiveengineering:fiberboard', [// arg 1: output
//     'SSS', // arg 2: the shape (array of strings)
//     'SGS',
//     'SSS'
// ], {
//     S: 'minecraft:terracotta',
//     G: 'tfc:glue'
// })

// event.shaped('immersiveengineering:toolupgrade_drill_capacity', [// arg 1: output
//   'FP ',
//   'PRP', // arg 2: the shape (array of strings)
//   ' PS'
// ], {
//   F: 'immersiveengineering:fluid_pipe',
//   P: 'immersiveengineering:plate_steel',
//   R: 'tfc:metal/rod/red_steel',
//   S: 'tfc:metal/sheet/red_steel'
// })

// event.shaped('immersiveengineering:toolupgrade_drill_waterproof', [// arg 1: output
//   'SP ',
//   'PRP', // arg 2: the shape (array of strings)
//   ' PF'
// ], {
//   F: 'immersiveengineering:fluid_pipe',
//   P: 'immersiveengineering:plate_steel',
//   R: 'tfc:metal/rod/blue_steel',
//   S: 'tfc:metal/sheet/blue_steel'
// })

// event.shapeless(Item.of('immersiveengineering:glider', '{Damage:0}'), [ // arg 1: output
//   'kubejs:glider_sail',
//   'kubejs:glider_harness'
// ])

//  event.custom({
//   "type": "immersiveengineering:metal_press",
//   "energy": 2400,
//   "input": {
//     "item": "tfc:metal/ingot/black_steel"
//   },
//   "mold": "immersiveengineering:mold_plate",
//   "result": {
//     "item": "create:sturdy_sheet"
//   }
// })

// event.shapeless('immersiveengineering:hempcrete_brick_cracked',[
//   'immersiveengineering:hempcrete_brick',
//   '#tfc:hammers'
// ]).damageIngredient(Ingredient.of('#tfc:hammers'))

// event.shapeless('immersiveengineering:concrete_brick_cracked',[
//   'immersiveengineering:concrete_brick',
//   '#tfc:hammers'
// ]).damageIngredient(Ingredient.of('#tfc:hammers'))

// event.shapeless('immersiveengineering:hempcrete_chiseled',[
//   'immersiveengineering:hempcrete_brick',
//   '#tfc:chisels'
// ]).damageIngredient(Ingredient.of('#tfc:chisels'))

// event.shapeless('immersiveengineering:concrete_chiseled',[
//   'immersiveengineering:concrete_brick',
//   '#tfc:chisels'
// ]).damageIngredient(Ingredient.of('#tfc:chisels'))

// event.shaped('immersiveengineering:cloche', [
//   'GLG',
//   'G G',
//   'PMP'
// ],{
//   G: 'firmalife:iron_greenhouse_wall',
//   L: 'immersiveengineering:light_bulb',
//   P: '#forge:treated_wood',
//   M: 'immersiveengineering:component_iron'
// })

//railways

// event.shaped('railways:smokestack_coalburner',[
//   'S S',
//   'S S',
//   'SGS'
// ],{
//   S: 'tfc:metal/sheet/cast_iron',
//   G: 'castirongrill:cast_iron_grill'
// })

// event.shaped('railways:smokestack_oilburner',[
//   'S S',
//   'DGD'
// ],{
//   S: 'tfc:metal/sheet/cast_iron',
//   D: 'tfc:metal/double_sheet/cast_iron',
//   G: 'castirongrill:cast_iron_grill'
// })

// event.shaped('railways:smokestack_woodburner',[
//   'D D',
//   'SGS'
// ],{
//   S: 'tfc:metal/sheet/cast_iron',
//   D: 'tfc:metal/double_sheet/cast_iron',
//   G: 'castirongrill:cast_iron_grill'
// })

// event.shapeless('railways:conductor_vent',[
//   'framedblocks:framed_cube',
//   'create:andesite_alloy'
// ])

//create

// event.custom({
//     "type": "create:mixing",
//     "heatRequirement": 'heated',
//     "results": [
//       {
//         "item": "create:andesite_alloy",
//         "count": 6
//       }
//     ],
//     "ingredients": [
//       {
//         "tag": "forge:igneous_grits"
//       },{
//         "tag": "forge:igneous_grits"
//       },{
//         "tag": "tfc:magma"
//       },{
//         "tag": "tfc:magma"
//       },{
//         "tag": "tfc:magma"
//       },{
//         "tag": "tfc:magma"
//       }
//     ]
// })

// event.custom({
//   'type': 'create:mixing',
//   'heatRequirement': 'heated',
//   'results': [
//     {
//       'amount': 500,
//       'fluid': 'create:tea'
//     }
//   ],
//   'ingredients': [
//     {
//       'tag': 'forge:tea_leaves'
//     },{
//       'item': 'tfc:plant/artists_conk'
//     },{
//       'amount': 250,
//       'fluid': 'minecraft:water'
//     },{
//       'amount': 250,
//       'fluidTag': 'forge:milk'
//     }
//   ]
// })


//  event.custom(
//   {
//     "type": "tfc:damage_inputs_shapeless_crafting",
//     "recipe": {
//       "type": "minecraft:crafting_shapeless",
//       "result": {
//         "item": "create:sturdy_sheet",
//         "count": 2
//       },
//       "ingredients": [
//         {
//           "item": "tfc:metal/sheet/black_steel"
//         },
//         {
//           "item": "immersiveengineering:wirecutter"
//         }
//       ]
//     }
//   }
//   )


// event.shapeless('create:filter',[
//   'tfc:burlap_cloth',
//   'create:andesite_alloy'
// ])

// event.shapeless('create:attribute_filter',[
//   'tfc:burlap_cloth',
//   'kubejs:metal_plate_brass'
// ])

// event.shapeless(Item.of('immersiveengineering:glider', '{Damage:0}'), [
//   'kubejs:glider_sail',
//   'kubejs:glider_harness'
// ])

// event.shaped('create:crafter_slot_cover',
// [
//   'MM'
// ], {
//   M: 'kubejs:metal_plate_brass'
// })
// event.shaped('create:super_glue',
// [
//   'GS',
//   'LG'
// ], {
//   G: 'tfc:glue',
//   S: 'tfc:metal/sheet/tin',
//   L: 'tfc:jar_lid'
// })


// event.custom({
//   "type": "create:mechanical_crafting",
//   "acceptMirrored": false,
//   "result": {
//     "count": 1,
//     "item": "create:mechanical_roller"
//   },
//   "pattern": [
//     "EAAA",
//     "CAMA",
//     " AAA"
//   ],
//   "key": {
//     "C": {
//       "item": "create:andesite_casing"
//     },
//     "A": {
//       "item": "create:andesite_alloy"
//     },
//     "M": {
//       "item": "immersiveengineering:component_steel"
//     },
//     "E": {
//       "item": "create:electron_tube"
//     }
//   }
// })

// event.custom(
//   {
//     "type": "create:mechanical_crafting",
//     "acceptMirrored": false,
//     "result": {
//       "count": 1,
//       "item": "create:potato_cannon"
//     },
//     "pattern": [
//       " T ",
//       " T ",
//       "PCS",
//       "QMS",
//       " T "
//     ],
//     "key": {
//       "S": {
//         "item": "immersiveengineering:plate_copper"
//       },
//       "C": {
//         "item": "create:cogwheel"
//       },
//       "M": {
//         "item": "createbigcannons:cannon_mount"
//       },
//       "Q": {
//         "item": "createbigcannons:quickfiring_mechanism"
//       },
//       "P": {
//         "item": "create:precision_mechanism"
//       },
//       "T": {
//         "tag": "forge:copper_pipe"
//       }
//     }
//   }
//   )
// event.custom(
// {
//   "type": "create:mechanical_crafting",
//   "acceptMirrored": false,
//   "key": {
//     "P": {
//       "item": "minecraft:magenta_stained_glass"
//     },
//     "G": {
//       "item": "create_new_age:overcharged_diamond"
//     },
//     "S": {
//       "item": "immersiveengineering:toolupgrade_railgun_scope"
//     },
//     "M": {
//       "item": "create:precision_mechanism"
//     },
//     "R": {
//       "item": "tfc:metal/rod/black_steel"
//     }
//   },
//   "pattern": [
//     " P ",
//     "PGP",
//     " S ",
//     " M ",
//     " R "
//   ],
//   "result": {
//     "count": 1,
//     "item": "create:wand_of_symmetry"
//   }
// }
// )

// event.shaped('create:chute',
// [
//   'D D',
//   ' S ',
// ], {
//   S: 'tfc:metal/ingot/steel',
//   D: 'immersiveengineering:plate_steel'
// }
// )

// event.shaped('create:basin',
// [
//   'D D',
//   'SDS',
// ], {
//   D: 'tfc:metal/double_sheet/cast_iron',
//   S: 'tfc:metal/sheet/cast_iron'
// }
// )

// event.shaped('4x create:metal_bracket',
// [
//   'RRR',
//   'PAP',
// ], {
//   P: 'immersiveengineering:plate_iron',
//   A: 'create:andesite_alloy',
//   R: 'tfc:metal/rod/wrought_iron'
// }
// )

// event.shaped('create:smart_fluid_pipe',
// [
//   ' P ',
//   'MCM',
//   ' E '
// ], {
//   P: 'kubejs:metal_plate_brass',
//   C: 'create:fluid_pipe',
//   M: 'tfc:brass_mechanisms',
//   E: 'create:electron_tube'
// }
// )

// event.shaped('create:fluid_tank',
// [
//   'SSS',
//   'C C',
//   'CCC'
// ], {
//   S: 'immersiveengineering:slab_sheetmetal_copper',
//   C: 'immersiveengineering:sheetmetal_copper'
// }
// )

// event.shaped('create:smart_chute',
// [
//   ' P ',
//   'MCM',
//   ' E '
// ], {
//   P: 'kubejs:metal_plate_brass',
//   C: 'create:chute',
//   M: 'tfc:brass_mechanisms',
//   E: 'create:electron_tube'
// }
// )
// event.shaped('create:display_link',
// [
//   'C',
//   'W',
//   'B'
// ], {
//   C: 'immersiveengineering:component_electronic_adv',
//   W: 'immersiveengineering:wirecoil_copper',
//   B: 'create:brass_casing'
// }
// )
// event.shaped('4x create:nixie_tube',
// [
//   'VV',
//   'EE'
// ], {
//   V: 'immersiveengineering:electron_tube',
//   E: 'create:electron_tube'
// }
// )


// event.shaped('create:gantry_carriage',
// [
//   'GW',
//   'SA',
//   ' C'
// ], {
//   G: 'tfc:glue',
//   W: '#minecraft:wooden_slabs',
//   S: 'create:shaft',
//   A: 'create:andesite_casing',
//   C: 'create:cogwheel'
// }
// )

// event.shaped('create:steam_engine',
// [
//   ' A ',
//   'PTP',
//   ' H '
// ], {
//   A: 'create:mechanical_arm',
//   P: 'immersiveengineering:plate_constantan',
//   T: 'create:fluid_tank',
//   H: 'immersiveengineering:generator'
// }
// )

// event.shaped('create:mechanical_saw',
// [
//   'C',
//   'A',
//   'S'
// ], {
//   S: 'create:shaft',
//   C: 'immersiveengineering:sawblade',
//   A: 'create:andesite_casing'
// }
// )

// event.shaped('kubejs:burner_core',
// [
//   'GMG',
//   'MCM',
//   'GMG'
// ], {
//   C: 'tfc:crucible',
//   G: 'immersiveengineering:plate_gold',
//   M: '#tfc:magma'
// }
// )
// event.shaped('create:rope_pulley',
// [
//   ' S ',
//   'BBB',
//   ' I '
// ], {
//   S: 'create:andesite_casing',
//   B: 'immersiveengineering:wirecoil_structure_rope',
//   I: 'immersiveengineering:plate_iron'
// }
// )


// event.shaped('create:elevator_pulley',
// [
//   ' S ',
//   'BBB',
//   ' I '
// ], {
//   S: 'create:brass_casing',
//   B: 'immersiveengineering:wirecoil_structure_rope',
//   I: 'immersiveengineering:plate_steel'
// }
// )

// event.shaped('create:empty_blaze_burner',
// [//
//   ' B ',
//   'BSB',
//   ' B '
// ], {
//   S: 'tfc_ie_addon:metal/sheet/constantan',
//   B: 'tfc:metal/bars/black_steel'
// }
// )

// event.shaped('create:mechanical_press',
// [
//   ' R ',
//   'SCS',
//   'DDD'
// ], {
//   R: 'create:piston_extension_pole',
//   S: 'create:shaft',
//   C: 'create:andesite_casing',
//   D: 'tfc:metal/double_sheet/cast_iron'
// })

// event.shaped('create:copper_backtank',
// [
//   'ISI',
//   'LTL',
//   ' V '
// ], {
//   I: 'create:andesite_alloy',
//   S: 'create:shaft',
//   T: 'create:fluid_tank',
//   L: 'sewingkit:leather_strip',
//   V: 'create:fluid_valve'
// })

// event.shaped('create:whisk',
// [
//   ' R ',
//   'RIR',
//   ' R '
// ], {
//   I: 'create:andesite_alloy',
//   R: 'immersiveengineering:stick_aluminum'
// })

// event.shaped('2x create:item_vault',
// [
//   ' R ',
//   'RIR',
//   ' R '
// ], {
//   I: 'immersiveengineering:crate',
//   R: 'immersiveengineering:plate_steel'
// })

// event.shaped('create:goggles',
// [
//   ' S ',
//   'LGL'
// ], {
//   G: 'tfc:metal/rod/gold',
//   L: 'tfc:lens',
//   S: 'sewingkit:leather_strip',
// })

// event.shaped('8x create:shaft', [
//   'SC',
//   'S '
// ], {
//   S: '#tfc:rock/raw',
//   C: '#tfc:chisels'
// }).damageIngredient(Ingredient.of('#tfc:chisels'))

//newage

// event.shaped('create_new_age:energiser_t2', [
//   'AEA',
//   'PRP',
//   ' R '
// ],{
//   A: 'kubejs:aligned_magnetite',
//   E: 'create_new_age:energiser_t1',
//   P: 'immersiveengineering:plate_gold',
//   R: 'minecraft:lightning_rod'
// })

// event.shaped('create_new_age:energiser_t3', [
//   'GEG',
//   'RTR',
//   ' S '
// ],{
//   G: 'create_new_age:overcharged_diamond',
//   E: 'create_new_age:energiser_t2',
//   R: 'tfc:metal/rod/blue_steel',
//   T: 'immersiveengineering:toolupgrade_powerpack_tesla',
//   S: 'tfc:metal/double_sheet/copper'
// })

// event.custom({
//   "type": "create:mechanical_crafting",
//   "acceptMirrored": false,
//   "key": {
//     "M": {
//       "item": "create_new_age:magnetite_block"
//     },
//     "C": {
//       "item": "immersiveengineering:wirecoil_steel"
//     },
//     "P": {
//       "item": "create:sturdy_sheet"
//     },
//     "G": {
//       "item": "create_new_age:overcharged_diamond"
//     }
//   },
//   "pattern": [
//     " CCC ",
//     "CPMPC",
//     "CMGMC",
//     "CPMPC",
//     " CCC "
//   ],
//   "result": {
//     "count": 4,
//     "item": "create_new_age:fluxuated_magnetite"
//   }
// })

// event.custom({
//   "type": "create:mechanical_crafting",
//   "acceptMirrored": false,
//   "key": {
//     "R": {
//       "item": "minecraft:redstone_block"
//     },
//     "C": {
//       "item": "immersiveengineering:wirecoil_copper"
//     },
//     "E": {
//       "item": "immersiveengineering:wirecoil_electrum"
//     }
//   },
//   "pattern": [
//     " CCC ",
//     "CEEEC",
//     "CEREC",
//     "CEEEC",
//     " CCC "
//   ],
//   "result": {
//     "count": 2,
//     "item": "create_new_age:redstone_magnet"
//   }
// })

// event.custom({
//   "type": "create:sequenced_assembly",
//   "ingredient": {
//     "item": "kubejs:aligned_magnetite"
//   },
//   "loops": 4,
//   "results": [
//     {
//       "item": "create_new_age:layered_magnet"
//     }
//   ],
//   "sequence": [
//     {
//       "type": "create:filling",
//       "ingredients": [
//         {
//           "item": "kubejs:incomplete_layered_magnet"
//         },
//         {
//           "amount": 50,
//           "fluid": "tfc:metal/gold",
//           "nbt": {}
//         }
//       ],
//       "results": [
//         {
//           "item": "kubejs:incomplete_layered_magnet"
//         }
//       ]
//     },
//     {
//       "type": "create_new_age:energising",
//       "energy_needed": 250,
//       "ingredients": [
//         {
//           "item": "kubejs:incomplete_layered_magnet"
//         }
//       ],
//       "results": [
//         {
//           "item": "kubejs:incomplete_layered_magnet"
//         }
//       ]
//     },
//     {
//       "type": "create:deploying",
//       "ingredients": [
//         {
//           "item": "kubejs:incomplete_layered_magnet"
//         },
//         {
//           "item": "kubejs:aligned_magnetite"
//         }
//       ],
//       "results": [
//         {
//           "item": "kubejs:incomplete_layered_magnet"
//         }
//       ]
//     },
//     {
//       "type": "create:pressing",
//       "ingredients": [
//         {
//           "item": "kubejs:incomplete_layered_magnet"
//         }
//       ],
//       "results": [
//         {
//           "item": "kubejs:incomplete_layered_magnet"
//         }
//       ]
//     }

//   ],
//   "transitionalItem": {
//     "item": "kubejs:incomplete_layered_magnet"
//   }
// })

// event.custom(
//   {
//     "type": "create:mechanical_crafting",
//     "acceptMirrored": false,
//     "key": {
//       "S": {
//         "item": "create:shaft"
//       },
//       "B": {
//         "item": "create:brass_casing"
//       },
//       "E": {
//         "item": "immersiveengineering:component_electronic_adv"
//       },
//       "P": {
//         "item": "immersiveengineering:plate_steel"
//       },
//       "M": {
//         "item": "tfc:brass_mechanisms"
//       },
//       "R": {
//         "item": "minecraft:redstone_block"
//       },
//       "C": {
//         "item": "create_new_age:overcharged_diamond"
//       }
//     },
//     "pattern": [
//       "CMPPC",
//       "EBRSS",
//       "CMPPC"
//     ],
//     "result": {
//       "count": 1,
//       "item": "create_new_age:reinforced_motor"
//     }
//   }
// )
//   event.custom(
//   {
//     "type": "create:mechanical_crafting",
//     "acceptMirrored": false,
//     "key": {
//       "E": {
//         "item": "immersiveengineering:component_electronic_adv"
//       },
//       "P": {
//         "item": "immersiveengineering:plate_steel"
//       },
//       "M": {
//         "item": "create_new_age:reinforced_motor"
//       },
//       "C": {
//         "item": "create_new_age:overcharged_diamond"
//       }
//     },
//     "pattern": [
//       "PPPPP",
//       "CEMEC",
//       "PPPPP"
//     ],
//     "result": {
//       "count": 2,
//       "item": "create_new_age:advanced_motor_extension"
//     }
//   }
// )

// event.shaped('create_new_age:basic_motor_extension',
// [// arg 1: output
//   'PPP',
//   'MEE',
//   'PPP'
// ], {
//     E: 'immersiveengineering:component_electronic_adv',
//     P: 'immersiveengineering:plate_steel',
//     M: 'create_new_age:basic_motor'
// }
// )

// event.shaped('create_new_age:carbon_brushes',
// [// arg 1: output
//   'ASA',
//   'CWC',
//   'PPP'
// ], {
//     P: 'immersiveengineering:plate_steel',
//     S: 'create:shaft',
//     A: 'create:andesite_alloy',
//     C: 'tfc:powder/charcoal',
//     W: 'immersiveengineering:wirecoil_copper'
// }
// )
// event.shaped('create_new_age:generator_coil',
// [// arg 1: output
//   'CRC',
//   'RSR',
//   'CRC'
// ], {
//     R: 'tfc:metal/rod/steel',
//     S: 'create:shaft',
//     C: 'immersiveengineering:coil_lv'
// }
// )



//bigcannons

// event.shaped('createbigcannons:worm_head', [
//   'M',
//   'P'
// ],{
//   M: '#forge:chain_meshes',
//   P: 'create:piston_extension_pole'
// })

// event.shaped('2x createbigcannons:big_cartridge_sheet',
// [// arg 1: output
//   'PP',
//   'PP'
// ], {
//   P: 'kubejs:metal_plate_brass'
// }
// )

// event.shaped('createbigcannons:solid_shot',
// [// arg 1: output
//   ' W ',
//   ' W ',
//   ' P '
// ], {
//   P: 'immersiveengineering:plate_steel',
//   W: 'tfc:metal/sheet/wrought_iron'
// }
// )

// event.shaped('createbigcannons:ap_shot',
// [// arg 1: output
//   ' B ',
//   ' W ',
//   ' P '
// ], {
//   P: 'immersiveengineering:plate_steel',
//   W: 'tfc:metal/sheet/wrought_iron',
//   B: 'tfc:metal/sheet/black_steel'
// }
// )

// event.shaped('createbigcannons:mortar_stone',
// [// arg 1: output
//   ' B ',
//   'CGC',
//   ' P '
// ], {
//   P: 'immersiveengineering:plate_steel',
//   C: 'tfc:metal/sheet/cast_iron',
//   G: 'immersiveengineering:gunpowder_barrel',
//   B: 'tfc:metal/sheet/steel'
// }
// )

// event.shaped('createbigcannons:bag_of_grapeshot',
// [// arg 1: output
//   'SSS',
//   'WBW',
//   ' P '
// ], {
//   P: 'immersiveengineering:plate_steel',
//   S: '#forge:string',
//   B: 'kubejs:shot_balls',
//   W: '#tfc:high_quality_cloth'
// }
// )

// event.shaped('createbigcannons:smoke_shell',
// [// arg 1: output
//   'PHP',
//   'PHP',
//   'PSP'
// ], {
//   P: 'immersiveengineering:plate_steel',
//   S: 'immersiveengineering:slab_storage_steel',
//   H: 'minecraft:hay_block'
// }
// )

// event.shaped('createbigcannons:wrought_iron_cannon_end',
// [
//   ' I ',
//   'SSS',
//   ' G '
// ], {
//   I: 'tfc:metal/ingot/wrought_iron',
//   S: 'tfc:metal/sheet/wrought_iron',
//   G: 'minecraft:gunpoweder'
// }
// )

// event.shaped('createbigcannons:wrought_iron_cannon_chamber',
// [
//   ' S ',
//   'SGS',
//   ' S '
// ], {
//   S: 'tfc:metal/double_sheet/wrought_iron',
//   G: 'minecraft:gunpoweder'
// }
// )

// event.shaped('kubejs:shot_balls',
// [
//   'RRR',
//   'RRR',
//   'RRR',
// ], {
//   R: '#tfc:rock_knapping'
// }
// )

// event.custom({
//   'type': 'create:cutting',
//   'results': [
//     {
//       'count': 4,
//       'item': 'createbigcannons:autocannon_cartridge_sheet'
//     }
//   ],
//   'ingredients': [
//     {
//       'item': 'kubejs:metal_plate_brass'
//     }
//   ]
// })

// event.custom({
//   'type': 'create:cutting',
//   'results': [
//     {
//       'item': 'createbigcannons:autocannon_cartridge_sheet'
//     },
//     {
//       'chance': 0.125,
//       'item': 'createbigcannons:autocannon_cartridge_sheet'
//     },
//     {
//       'chance': 0.125,
//       'item': 'createbigcannons:autocannon_cartridge_sheet'
//     }
//   ],
//   'ingredients': [
//     {
//       'tag': 'forge:autocannon_cartridge_plate'
//     }
//   ]
// })

// event.recipes.tfc.quern('2x createbigcannons:nitropowder', 'createbigcannons:hardened_nitro')

// event.custom({
//   'type': 'create:mechanical_crafting',
//   'acceptMirrored': false,
//   'result': {
//     'count': 1,
//     'item': 'createbigcannons:he_shell'
//   },
//   'pattern': [
//     ' S ',
//     'SGS',
//     'SGS',
//     ' P '
//   ],
//   'key': {
//     'S': {
//       'item': 'tfc:metal/sheet/cast_iron'
//     },
//     'G': {
//       'item': 'immersiveengineering:gunpowder_barrel'
//     },
//     'P': {
//       'item': 'immersiveengineering:plate_steel'
//     }
//   }
// })

// event.custom({
//   'type': 'create:mechanical_crafting',
//   'acceptMirrored': false,
//   'result': {
//     'count': 1,
//     'item': 'createbigcannons:ap_shell'
//   },
//   'pattern': [
//     ' B ',
//     'SGS',
//     'SGS',
//     ' P '
//   ],
//   'key': {
//     'S': {
//       'item': 'tfc:metal/sheet/cast_iron'
//     },
//     'B': {
//       'item': 'tfc:metal/sheet/black_steel'
//     },
//     'G': {
//       'item': 'immersiveengineering:gunpowder_barrel'
//     },
//     'P': {
//       'item': 'immersiveengineering:plate_steel'
//     }
//   }
// })

// event.custom({
//   'type': 'create:mechanical_crafting',
//   'acceptMirrored': false,
//   'result': {
//     'count': 1,
//     'item': 'createbigcannons:shrapnel_shell'
//   },
//   'pattern': [
//     ' S ',
//     'SBS',
//     'SPS',
//     ' L '
//   ],
//   'key': {
//     'S': {
//       'item': 'tfc:metal/sheet/cast_iron'
//     },
//     'B': {
//       'item': 'kubejs:shot_balls'
//     },
//     'P': {
//       'item': 'createbigcannons:packed_gunpowder'
//     },
//     'L': {
//       'item': 'immersiveengineering:plate_steel'
//     }
//   }
// })

// event.shaped('createbigcannons:drop_mortar_shell',[
//   ' G ',
//   'PSP',
//   ' C '
// ],{
//   G: 'immersiveengineering:gunpowder_barrel',
//   P: 'immersiveengineering:plate_iron',
//   S: 'create:shaft',
//   C: 'createbigcannons:powder_charge'
// })

// event.shaped('4x createbigcannons:impact_fuze',[
//   'B',
//   'R'
// ],{
//   B: '#minecraft:stone_buttons',
//   R: 'minecraft:redstone'
// })

// event.shaped('4x createbigcannons:timed_fuze',[
//   'I',
//   'C',
//   'R'
// ],{
//   I: 'tfc:metal/ingot/wrought_iron',
//   C: 'minecraft:clock',
//   R: 'minecraft:redstone'
// })

// event.shaped('4x createbigcannons:proximity_fuze',[
//   ' B ',
//   'RQR',
//   ' I '
// ],{
//   B: '#mcw_tfc_aio:metal_rods',
//   R: 'minecraft:redstone',
//   Q: '#forge:gems',
//   I: 'tfc:metal/ingot/wrought_iron'
// })

// event.shapeless('createbigcannons:tracer_tip',[
//   'tfc:powder/lime',
//   'createbigcannons:nitropowder'
// ])

// event.shaped('createbigcannons:casting_sand',[
//   'SS',
//   'DC'
// ],{
//   S: '#minecraft:sand',
//   D: '#minecraft:dirt',
//   C: '#forge:clay'
// })

// event.shaped('createbigcannons:cannon_drill',[
//   ' D ',
//   'PCP',
//   ' S '
// ],{
//   D: 'immersiveengineering:drillhead_steel',
//   P: 'create:fluid_pipe',
//   C: 'create:andesite_casing',
//   S: 'create:piston_extension_pole'
// })

// event.shaped('createbigcannons:cannon_builder',[
//   'RIR',
//   ' C ',
//   ' P '
// ],{
//   R: 'tfc:metal/rod/steel',
//   I: 'tfc:metal/ingot/steel',
//   C: 'create:andesite_casing',
//   P: 'create:piston_extension_pole'
// })

// event.custom({
//   'type': 'create:mechanical_crafting',
//   'acceptMirrored': false,
//   'result': {
//     'count': 1,
//     'item': 'createbigcannons:cannon_carriage'
//   },
//   'pattern': [
//     '   P ',
//     '  PSP',
//     'RPPPR',
//     'MLLLM',
//     'W   W'
//   ],
//   'key': {
//     'P': {
//       'tag': 'minecraft:planks'
//     },
//     'S': {
//       'item': 'create:shaft'
//     },
//     'R': {
//       'item': 'tfc:metal/rod/steel'
//     },
//     'M': {
//       'item': 'tfc:brass_mechanisms'
//     },
//     'L': {
//       'tag': 'tfc:lumber'
//     },
//     'W': {
//       'item': 'createbigcannons:pair_of_cannon_wheels'
//     }
//   }
// })

// event.shaped('4x createbigcannons:ap_autocannon_round',[
//   'R',
//   'I'
// ],{
//   R: 'tfc:metal/rod/black_steel',
//   I: 'tfc:metal/ingot/wrought_iron'
// })

// event.shaped('createbigcannons:spring_wire',[
//   'LWL',
//   ' W ',
//   'LWL'
// ],{
//   L: '#tfc:lumber',
//   W: 'immersiveengineering:wire_steel'
// })


//welding
// event.recipes.tfc.welding('create:netherite_backtank', 'create:copper_backtank', 'tfc:metal/ingot/black_steel',5)
// event.recipes.tfc.welding('create:brass_hand', 'immersiveengineering:plate_steel', 'kubejs:unfinished_brass_hand', 4)
// event.recipes.tfc.welding('create:peculiar_bell', 'tfc:brass_bell', 'tfc:brass_mechanisms',2)

// event.recipes.tfc.welding('create:copper_diving_helmet', 'tfc:metal/unfinished_helmet/copper', 'firmalife:reinforced_glass',2)
// event.recipes.tfc.welding('create:netherite_diving_helmet', 'create:copper_diving_helmet', 'tfc:metal/ingot/black_steel',5)

// event.recipes.tfc.welding('create:copper_diving_boots', 'tfc:metal/unfinished_boots/copper', 'tfc_ie_addon:metal/sheet/lead',2)
// event.recipes.tfc.welding('create:netherite_diving_boots', 'create:copper_diving_boots', 'tfc:metal/ingot/black_steel',5)

// event.recipes.tfc.welding('createbigcannons:wrought_iron_drop_mortar_end', 'createbigcannons:wrought_iron_cannon_end', 'tfc:metal/rod/wrought_iron', 3)



// event.recipes.tfc.welding('immersiveengineering:armor_faraday_helmet', 'tfc:metal/unfinished_helmet/steel', 'kubejs:steel_chain_mesh',4)
// event.recipes.tfc.welding('immersiveengineering:armor_faraday_chestplate', 'tfc:metal/unfinished_chestplate/steel', 'kubejs:steel_chain_mesh',4)
// event.recipes.tfc.welding('immersiveengineering:armor_faraday_leggings', 'tfc:metal/unfinished_greaves/steel', 'kubejs:steel_chain_mesh',4)
// event.recipes.tfc.welding('immersiveengineering:armor_faraday_boots', 'tfc:metal/unfinished_boots/steel', 'kubejs:steel_chain_mesh',4)
// event.recipes.tfc.welding('immersiveengineering:rockcutter', 'immersiveengineering:sawblade', 'tfc:powder/diamond', 4)



//anvil

//TIERS
// -  (0): Stone
// I  (1): Copper, Gold
// II (2): Bronze, Brass
// III(3): Iron
// IV (4): Steel
// V  (5): Black Steel
// VI (6): Red/Blue Steel

// event.recipes.tfc.anvil('kubejs:propeller_blade', 'immersiveengineering:plate_aluminum', ['hit_last', 'shrink_second_last', 'draw_third_last']).tier(1)
// event.recipes.tfc.anvil('immersiveengineering:sawblade', 'tfc:metal/sheet/steel', ['hit_any', 'hit_second_last', 'hit_last']).tier(4)
// event.recipes.tfc.anvil('8x immersiveengineering:fluid_pipe', 'tfc:metal/sheet/wrought_iron', ['draw_last', 'bend_not_last']).tier(3)
// event.recipes.tfc.anvil('2x kubejs:propeller_blade', 'tfc_ie_addon:metal/sheet/aluminum', ['hit_last', 'shrink_second_last', 'draw_third_last']).tier(1)

// event.recipes.tfc.anvil('kubejs:candle_holder', 'tfc:metal/ingot/steel', ['punch_last', 'draw_not_last', 'hit_not_last']).tier(4)
// event.recipes.tfc.anvil('8x create:fluid_pipe', 'tfc:metal/sheet/copper', ['draw_last', 'bend_not_last']).tier(1)
// event.recipes.tfc.anvil('kubejs:unfinished_brass_hand', 'tfc:metal/double_ingot/brass', ['upset_not_last', 'bend_not_last', 'bend_last']).tier(2)
// event.recipes.tfc.anvil('railways:conductor_whistle', 'tfc:metal/double_ingot/brass', ['hit_any', 'punch_second_last', 'hit_last']).tier(2)

// event.recipes.tfc.anvil('simpleplanes:wrench', 'tfc:metal/ingot/steel', ['shrink_any', 'shrink_any', 'punch_last']).tier(4)

// event.recipes.tfc.anvil('supplementaries:goblet', 'tfc:metal/ingot/wrought_iron', ['upset_not_last','shrink_any','bend_last']).tier(3)
// event.recipes.tfc.anvil('supplementaries:bubble_blower', 'tfc:metal/ingot/tin', ["draw_not_last", "bend_any", "hit_any"]).tier(1)
// event.recipes.tfc.anvil('supplementaries:weather_vane', 'tfc:metal/double_ingot/wrought_iron', ['draw_not_last', 'shrink_not_last', 'shrink_last']).tier(3)
// event.recipes.tfc.anvil('supplementaries:gold_door', 'tfc:metal/sheet/gold', ["hit_last", "draw_not_last", "punch_not_last"]).tier(1)
// event.recipes.tfc.anvil('supplementaries:gold_trapdoor', 'tfc:metal/sheet/gold', ["bend_last", "draw_second_last", "draw_third_last"]).tier(1)
// event.recipes.tfc.anvil('supplementaries:iron_gate', 'tfc:metal/bars/wrought_iron', ["draw_third_last", "shrink_second_last", "shrink_last"]).tier(3)
// event.recipes.tfc.anvil('supplementaries:key', 'tfc:metal/rod/gold', ["draw_not_last", "bend_any", "hit_any"]).tier(1)
// event.recipes.tfc.anvil('supplementaries:netherite_door', 'tfc:metal/sheet/black_steel', ["hit_last", "draw_not_last", "punch_not_last"]).tier(5)
// event.recipes.tfc.anvil('supplementaries:netherite_trapdoor', 'tfc:metal/sheet/black_steel', ["bend_last", "draw_second_last", "draw_third_last"]).tier(5)
// event.recipes.tfc.anvil('supplementaries:wrench', 'tfc:metal/ingot/copper', ["bend_last", "draw_second_last", "draw_third_last"]).tier(1)


//compacting


// event.recipes.create.compacting('kubejs:compressed_magnetite', '9x tfc:powder/magnetite')
// event.recipes.create.compacting('create_new_age:magnetite_block', '9x kubejs:compressed_magnetite')




//barrel sealed

// event.recipes.tfc.barrel_sealed(8000)
//       .outputItem('tfc:soaked_papyrus_strip')
//       .inputs('kubejs:sugarcane_strip', TFC.fluidStackIngredient('minecraft:water', 200))

// event.recipes.tfc.barrel_sealed(1000)
//       .outputItem('create:rose_quartz')
//       .inputs('#forge:gems/quartz', TFC.fluidStackIngredient('immersiveengineering:redstone_acid', 1000))

// event.recipes.tfc.barrel_sealed(1000)
//       .outputItem('chalk:white_chalk')
//       .inputs('#chalk:chalks', TFC.fluidStackIngredient('tfc:lye', 25))

// let colours = [ //You can use this section to batch add anything using all colors
//   'red',
//   'green',
//   'brown',
//   'blue',
//   'purple',
//   'cyan',
//   'light_gray',
//   'gray',
//   'pink',
//   'lime',
//   'yellow',
//   'light_blue',
//   'magenta',
//   'orange',
//   'black',
// ].forEach(colour => {
//   event.custom({
//     type: "tfc:barrel_sealed",
//     input_item: {
//       ingredient: {
//         tag: "chalk:chalks"
//       }
//     },
//     input_fluid: {
//       ingredient: "tfc:" + colour + "_dye",
//       amount: 25
//     },
//     output_item: {
//       item: "chalk:" + colour + "_chalk"
//     },
//     duration: 1000
//   })
//   event.custom({
//     type: "tfc:barrel_sealed",
//     input_item: {
//       ingredient: {
//         tag: "supplementaries:flags"
//       }
//     },
//     input_fluid: {
//       ingredient: "tfc:" + colour + "_dye",
//       amount: 25
//     },
//     output_item: {
//       item: "supplementaries:flag_" + colour
//     },
//     duration: 1000
//   })
//   event.custom({
//     type: "tfc:barrel_sealed",
//     input_item: {
//       ingredient: {
//         tag: "supplementaries:presents"
//       }
//     },
//     input_fluid: {
//       ingredient: "tfc:" + colour + "_dye",
//       amount: 25
//     },
//     output_item: {
//       item: "supplementaries:present_" + colour
//     },
//     duration: 1000
//   })
//   event.custom({
//     type: "tfc:barrel_sealed",
//     input_item: {
//       ingredient: {
//         tag: "supplementaries:trapped_presents"
//       }
//     },
//     input_fluid: {
//       ingredient: "tfc:" + colour + "_dye",
//       amount: 25
//     },
//     output_item: {
//       item: "supplementaries:trapped_present_" + colour
//     },
//     duration: 1000
//   })
// })

// event.shaped('supplementaries:flag_white',[
//   'SWW'
// ],{
//   S: '#tfc:firepit_sticks',
//   W: '#tfc:high_quality_cloth'
// })


// event.recipes.tfc.barrel_sealed(1000)
//   .outputItem('supplementaries:flag_white')
//   .inputs('#supplementaries:flags', TFC.fluidStackIngredient('tfc:lye',25))
// event.recipes.tfc.barrel_sealed(1000)
//   .outputItem('supplementaries:present')
//   .inputs('#supplementaries:presents', TFC.fluidStackIngredient('tfc:lye',25))
// event.recipes.tfc.barrel_sealed(1000)
//   .outputItem('supplementaries:trapped_present')
//   .inputs('#supplementaries:trapped_presents', TFC.fluidStackIngredient('tfc:lye',25))


//replacements
	// event.replaceInput(
  // { output: 'create:sand_paper' }, // Arg 1: the filter
  // 'minecraft:sand',            // Arg 2: the item to replace
  // '#forge:sand'         // Arg 3: the item to replace it with
  // // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
	// )
	// event.replaceInput(
  // { output: 'create:sand_paper' },
  // 'minecraft:paper',
  // 'tfc:unrefined_paper'
	// )
	// event.replaceInput(
  //   { output: 'create_new_age:basic_motor' },
  //   'minecraft:iron_nugget',
  //   'immersiveengineering:plate_steel'
  //   )


  // event.replaceInput(
  //   { output: 'create_new_age:advanced_motor' },
  //   'create_new_age:overcharged_iron',
  //   'create_new_age:redstone_magnet'
  //   )
  // event.replaceInput(
  //   { output: 'create_new_age:advanced_motor' },
  //   'minecraft:gold_nugget',
  //   'immersiveengineering:plate_gold'
  //   )

  // event.replaceInput(
  //   { output: 'create:tree_fertilizer'},
  //   'minecraft:fire_coral',
  //   '#tfc:coral'
  //   )

  // event.replaceInput(
  //   { output: 'create:display_board'},
  //   'create:electron_tube',
  //   'create:cogwheel'
  //   )

  // event.replaceInput(
  //   { output: 'create:andesite_funnel'},
  //   'minecraft:dried_kelp',
  //   'immersiveengineering:strip_curtain'
  //   )

  // event.replaceInput(
  //   { output: 'create:brass_funnel'},
  //   'minecraft:dried_kelp',
  //   'immersiveengineering:strip_curtain'
  //   )

  //   event.replaceInput(
  //     { output: 'create:andesite_tunnel'},
  //     'minecraft:dried_kelp',
  //     'immersiveengineering:strip_curtain'
  //     )

  //   event.replaceInput(
  //     { output: 'create:brass_tunnel'},
  //     'minecraft:dried_kelp',
  //     'immersiveengineering:strip_curtain'
  //     )


  // event.replaceInput(
  //   { output: 'create:mechanical_harvester'},
  //   '#forge:plates/iron',
  //   'advancedtfctech:fleshing_blades'
  //   )

  //   event.replaceInput(
  //     { output: 'create:redstone_contact'},
  //     'minecraft:cobblestone',
  //     '#forge:cobblestone'
  //     )

  // event.replaceInput(
  //   { output: 'create:propeller' },
  //   '#forge:plates/iron',
  //   'kubejs:propeller_blade'
  //   )
  // event.replaceInput(
  //   { output: 'create:item_drain' },
  //   'minecraft:iron_bars',
  //   'kubejs:steel_chain_mesh'
  //   )

  // event.replaceInput(
  //   { output: 'create:hose_pulley' },
  //   'minecraft:dried_kelp_block',
  //   'immersiveengineering:fluid_pipe'
  //   )

  //   event.replaceInput(
  //     { output: 'create:steam_whistle' },
  //     '#forge:plates/gold',
  //     'tfc:metal/sheet/gold'
  //     )

  //   event.replaceInput(
  //     { output: 'create:steam_whistle' },
  //     '#forge:ingots/copper',
  //     'tfc:metal/ingot/rose_gold'
  //     )

  //   event.replaceInput(
  //     { output: 'create:spout' },
  //     'minecraft:dried_kelp',
  //     'immersiveengineering:toolupgrade_chemthrower_focus'
  //     )

  // event.replaceInput(
  //   { output: 'create:controller_rail' },
  //   '#forge:ingots/gold',
  //   'tfc:metal/rod/gold'
  //   )

  // event.replaceInput(
  //   { output: 'create:clockwork_bearing' },
  //   'create:electron_tube',
  //   'minecraft:clock'
  //   )

	// event.replaceInput(
  // { output: 'create:electron_tube' },
  // '#forge:plates/iron',
  // '#forge:plates/steel'
	// )

	// event.replaceInput(
  // { output: 'create:encased_chain_drive' },
  // 'minecraft:iron_nugget',
  // '#forge:chains'
	// )

	// event.replaceInput(
  // { output: 'create:wrench' },
  // '#forge:rods/wooden',
  // 'tfc:metal/rod/cast_iron'
	// )
  // event.replaceInput(
  //   { output: 'immersiveengineering:craftingtable' },
  //   'minecraft:crafting_table',
  //   '#tfc:workbenches'
  //   )

  // event.replaceInput(
  //   { output: 'immersiveengineering:toolupgrade_railgun_scope' },
  //   '#forge:rods/steel',
  //   'tfc:metal/rod/steel'
  //   )
  // event.replaceInput(
  //   { output: 'immersiveengineering:toolupgrade_railgun_scope' },
  //   '#forge:glass_panes',
  //   'tfc:lens'
  //   )
  //         event.replaceInput(
  //   { output: 'immersiveengineering:toolupgrade_railgun_scope' },
  //   '#forge:glass_panes',
  //   'tfc:lens'
  //   )
  //   event.replaceInput(
  //     { output: 'immersiveengineering:fluid_placer' },
  //     'minecraft:iron_bars',
  //     'tfc:metal/bars/wrought_iron'
  //     )
    // event.replaceInput(
    //   { output: 'createbigcannons:empty_powder_charge' },
    //   'minecraft:string',
    //   '#forge:string'
    //   )
    // event.replaceInput(
    //   { output: 'createbigcannons:empty_powder_charge' },
    //   '#minecraft:wool',
    //   '#tfc:high_quality_cloth'
    //   )
    // event.replaceInput(
    //   { output: 'create:belt_connector' },
    //   'minecraft:dried_kelp',
    //   'sewingkit:leather_strip'
    //   )



    //replace via input

	// event.replaceInput(
  // { input: 'minecraft:copper_block' },
  // 'minecraft:copper_block',
  // 'tfc:metal/block/copper'
	// )
	// event.replaceInput(
    // { input: 'createbigcannons:nethersteel_ingot' },
    // 'createbigcannons:nethersteel_ingot',
    // 'tfc:metal/ingot/black_steel'
    // )
	// event.replaceInput(
  // { input: 'minecraft:slime_ball' },
  // 'minecraft:slime_ball',
  // 'tfc:glue'
	// )
  // event.replaceInput(
  //   { input: 'minecraft:torch'},
  //   'minecraft:torch',
  //   'tfc:torch'
  //   )
  // event.replaceInput(
  //   { input: 'create:brass_sheet' },
  //   'create:brass_sheet',
  //   'kubejs:metal_plate_brass'
  //   )

    // event.replaceInput(
    //   { input: 'minecraft:crafting_table' },
    //   'minecraft:crafting_table',
    //   '#tfc:workbenches'
    //   )

  // event.replaceInput({output: 'chalk:chalk_box'}, 'minecraft:paper', 'tfc:unrefined_paper')


//})


//tags
// ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.add('tfc:usable_in_bookshelf', 'immersiveengineering:manual')
  // event.add('minecraft:bookshelf_books', 'immersiveengineering:manual')
  // event.add('tfc:books', 'immersiveengineering:manual')

  // add tags for knives
  // event.add('sliceanddice:allowed_tools', '#tfc:knives')

  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  //event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')

  // Get #forge:ingots/copper tag and remove all entries from it
  //event.removeAll('forge:ingots/copper')


  // You can create new tags the same way you add to existing, just give it a name

  // event.add('forge:tea_leaves', 'firmalife:plant/vanilla')
  // event.add('forge:tea_leaves', 'firmalife:plant/cardamom')

  // event.add('forge:chains', 'tfc:metal/chain/bismuth_bronze')
  // event.add('forge:chains', 'tfc:metal/chain/black_bronze')
  // event.add('forge:chains', 'tfc:metal/chain/bronze')
  // event.add('forge:chains', 'tfc:metal/chain/copper')
  // event.add('forge:chains', 'tfc:metal/chain/steel')
  // event.add('forge:chains', 'tfc:metal/chain/wrought_iron')
  // event.add('forge:chains', 'tfc:metal/chain/black_steel')
  // event.add('forge:chains', 'tfc:metal/chain/blue_steel')
  // event.add('forge:chains', 'tfc:metal/chain/red_steel')

  // event.add('forge:chain_meshes', 'kubejs:steel_chain_mesh')
  // event.add('forge:chain_meshes', 'kubejs:black_steel_chain_mesh')
  // event.add('forge:chain_meshes', 'kubejs:blue_steel_chain_mesh')
  // event.add('forge:chain_meshes', 'kubejs:red_steel_chain_mesh')

  // event.add('forge:black_bricks', 'tfc:brick/basalt')
  // event.add('forge:black_bricks', 'tfc:brick/dolomite')
  // event.add('forge:black_bricks', 'tfc:brick/shale')
  // event.add('forge:white_bricks', 'tfc:brick/diorite')
  // event.add('forge:white_bricks', 'tfc:brick/chalk')
  // event.add('forge:white_bricks', 'tfc:brick/marble')
  // event.add('forge:white_bricks', 'tfc:brick/quartzite')
  // event.add('forge:white_bricks', 'tfc:alabaster_brick')

  // event.add('tfc:magma', 'tfc:rock/magma/granite')
  // event.add('tfc:magma', 'tfc:rock/magma/diorite')
  // event.add('tfc:magma', 'tfc:rock/magma/gabbro')
  // event.add('tfc:magma', 'tfc:rock/magma/rhyolite')
  // event.add('tfc:magma', 'tfc:rock/magma/basalt')
  // event.add('tfc:magma', 'tfc:rock/magma/andesite')
  // event.add('tfc:magma', 'tfc:rock/magma/dacite')

  // event.add('forge:autocannon_cartridge_plate', 'immersiveengineering:plate_copper')
  // event.add('forge:autocannon_cartridge_plate', 'immersiveengineering:plate_gold')
  // event.add('forge:autocannon_cartridge_plate', 'immersiveengineering:plate_iron')

  // event.add('forge:igneous_grits', 'immersiveengineering:dust_nickel')
  // event.add('forge:igneous_grits', 'immersiveengineering:dust_iron')
  // event.add('forge:igneous_grits', 'kubejs:dust_zinc')

  // event.add('forge:ingots/zinc', 'tfc:metal/ingot/zinc')
  // event.add('forge:dusts/zinc', 'kubejs:dust_zinc')

  // event.add('forge:plates', 'kubejs:metal_plate_brass')

  // event.add('create:contraption_controlled', 'tfc:brass_bell')
  // event.add('create:contraption_controlled', 'tfc:bronze_bell')

  // event.add('forge:ingots', 'kubejs:compressed_magnetite')
  // event.add('forge:ingots', 'kubejs:aligned_magnetite')
  // event.add('tfc:pileable_ingots', 'kubejs:compressed_magnetite')
  // event.add('tfc:pileable_ingots', 'kubejs:aligned_magnetite')

  // event.add('tfc:top_cut_gems', 'tfc:gem/diamond')
  // event.add('tfc:top_cut_gems', 'tfc:gem/ruby')
  // event.add('tfc:top_cut_gems', 'tfc:gem/sapphire')

  // event.add('forge:copper_pipe', 'create:fluid_pipe')
  // event.add('forge:copper_pipe', 'firmalife:copper_pipe')

  // event.add('tfc:coral', 'tfc:coral/fire_coral')
  // event.add('tfc:coral', 'tfc:coral/tube_coral')
  // event.add('tfc:coral', 'tfc:coral/brain_coral')
  // event.add('tfc:coral', 'tfc:coral/horn_coral')

  // event.add('forge:soap_ash', 'supplementaries:ash')
  // event.add('forge:soap_ash', 'tfc:powder/wood_ash')

  // event.add('forge:instrument_lumber', 'tfc:wood/lumber/maple')
  // event.add('forge:instrument_lumber', 'tfc:wood/lumber/rosewood')
  // event.add('forge:instrument_lumber', 'tfc:wood/lumber/spruce')
  // event.add('forge:instrument_planks', 'tfc:wood/planks/maple')
  // event.add('forge:instrument_planks', 'tfc:wood/planks/rosewood')
  // event.add('forge:instrument_planks', 'tfc:wood/planks/spruce')
  // event.add('forge:instrument_button', 'tfc:wood/planks/maple_button')
  // event.add('forge:instrument_button', 'tfc:wood/planks/rosewood_button')
  // event.add('forge:instrument_button', 'tfc:wood/planks/spruce_button')
  // event.add('forge:instrument_reed', 'tfc:papyrus_strip')
  // event.add('forge:instrument_reed', 'kubejs:sugarcane_strip')
  // event.add('forge:bells', 'tfc:brass_bell')
  // event.add('forge:bells', 'tfc:bronze_bell')
  // event.add('forge:bells', 'minecraft:bell')
  // event.add('forge:bells', 'create:peculiar_bell')

  // event.add('tfc:usable_on_tool_rack', 'mimi:banjo')
  // event.add('tfc:usable_on_tool_rack', 'mimi:acguitar')
  // event.add('tfc:usable_on_tool_rack', 'mimi:acguitar2')
  // event.add('tfc:usable_on_tool_rack', 'mimi:acguitar3')
  // event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar')
  // event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar2')
  // event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar3')
  // event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar4')
  // event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar5')
  // event.add('tfc:usable_on_tool_rack', 'mimi:bassguitar')
  // event.add('tfc:usable_on_tool_rack', 'mimi:bassguitar2')
  // event.add('tfc:usable_on_tool_rack', 'mimi:bassguitar3')
  // event.add('tfc:usable_on_tool_rack', 'mimi:violin')
  // event.add('tfc:usable_on_tool_rack', 'mimi:microphone')
  // event.add('tfc:usable_on_tool_rack', 'mimi:microphone2')
  // event.add('tfc:usable_on_tool_rack', 'mimi:microphone3')
  // event.add('tfc:usable_on_tool_rack', 'mimi:microphone4')
  // event.add('tfc:usable_on_tool_rack', 'mimi:microphone5')
  // event.add('tfc:usable_on_tool_rack', 'mimi:microphone6')
  // event.add('tfc:usable_on_tool_rack', 'mimi:trumpet')
  // event.add('tfc:usable_on_tool_rack', 'mimi:trumpet2')
  // event.add('tfc:usable_on_tool_rack', 'mimi:frenchhorn')
  // event.add('tfc:usable_on_tool_rack', 'mimi:saxophone')
  // event.add('tfc:usable_on_tool_rack', 'mimi:saxophone2')
  // event.add('tfc:usable_on_tool_rack', 'mimi:saxophone3')
  // event.add('tfc:usable_on_tool_rack', 'mimi:saxophone4')
  // event.add('tfc:usable_on_tool_rack', 'mimi:clarinet')
  // event.add('tfc:usable_on_tool_rack', 'mimi:flute')
  // event.add('tfc:usable_on_tool_rack', 'mimi:ocarina')
  // event.add('tfc:usable_on_tool_rack', 'mimi:synlead')
  // event.add('tfc:usable_on_tool_rack', 'mimi:synlead3')
  // event.add('tfc:usable_on_tool_rack', 'mimi:synlead4')
  // event.add('tfc:usable_on_tool_rack', 'mimi:kalimba')
  // event.add('tfc:usable_on_tool_rack', 'mimi:bagpipes')
  // event.add('tfc:usable_on_tool_rack', 'mimi:oboe')
  // event.add('tfc:usable_on_tool_rack', 'mimi:accordion')
  // event.add('tfc:usable_on_tool_rack', 'mimi:accordion2')
  // event.add('tfc:usable_on_tool_rack', 'mimi:harmonica')
  // event.add('tfc:usable_on_tool_rack', 'mimi:handbell')
  // event.add('tfc:usable_on_tool_rack', 'mimi:witchpipe')
  // event.add('tfc:usable_on_tool_rack', 'mimi:bonelute')
  // event.add('tfc:usable_on_tool_rack', 'mimi:glockenspiel')
  // event.add('tfc:usable_on_tool_rack', 'mimi:musicbox')
  // event.add('tfc:usable_on_tool_rack', 'mimi:recorder')
  // event.add('tfc:usable_on_tool_rack', 'mimi:bassoon')
  // event.add('tfc:usable_on_tool_rack', 'mimi:woodblock')
  // event.add('tfc:usable_on_tool_rack', 'mimi:bottle')
  // event.add('tfc:usable_on_tool_rack', 'mimi:panflute')

  // let rocks = [
  //   'granite',
  //   'diorite',
  //   'gabbro',
  //   'shale',
  //   'claystone',
  //   'limestone',
  //   'conglomerate',
  //   'dolomite',
  //   'chert',
  //   'chalk',
  //   'rhyolite',
  //   'basalt',
  //   'andesite',
  //   'dacite',
  //   'quartzite',
  //   'slate',
  //   'phyllite',
  //   'schist',
  //   'gneiss',
  //   'marble'
  // ].forEach(rock =>[
  //   event.add('forge:cobblestone_slabs', 'tfc:rock/cobble/' + rock + '_slab'),
  //   event.add('forge:cobblestone_slabs', 'tfc:rock/mossy_cobble/' + rock + '_slab'),
  //   event.add('minecraft:stone_buttons', 'tfc:rock/button/' + rock),
  //   event.add('forge:ores/uranium', 'tfc_ie_addon:ore/poor_uraninite/' + rock),
  //   event.add('forge:ores/uranium', 'tfc_ie_addon:ore/normal_uraninite/' + rock),
  //   event.add('forge:ores/uranium', 'tfc_ie_addon:ore/rich_uraninite/' + rock),
  //   event.add('forge:ingots/brick', 'tfc:brick/' + rock)
  // ])



  // It supports adding tags to tags as well. Just prefix the second tag with #
  //event.add('c:stones', '#forge:stone')

  // Removes all tags from this entry
  //event.removeAllTagsFrom('minecraft:stick')

  // Add all items from the forge:stone tag to the c:stone tag, unless the id contains diorite
  //const stones = event.get('forge:stone').getObjectIds()
  //const blacklist = Ingredient.of(/.*diorite.*/)
  //stones.forEach(stone => {
    //if (!blacklist.test(stone)) event.add('c:stone', stone)
  //})


// })

// ServerEvents.tags('block', event => {
//    event.add('create:passive_boiler_heaters', 'tfc:rock/magma/granite')
//   	event.add('create:passive_boiler_heaters', 'tfc:rock/magma/diorite')
//   	event.add('create:passive_boiler_heaters', 'tfc:rock/magma/gabbro')
//   	event.add('create:passive_boiler_heaters', 'tfc:rock/magma/rhyolite')
//   	event.add('create:passive_boiler_heaters', 'tfc:rock/magma/basalt')
//   	event.add('create:passive_boiler_heaters', 'tfc:rock/magma/andesite')
//   	event.add('create:passive_boiler_heaters', 'tfc:rock/magma/dacite')

// })


ServerEvents.tags('item', event => {
  event.add('mimi:resonant_lumber', 'tfc:wood/lumber/maple')
  event.add('mimi:resonant_lumber', 'tfc:wood/lumber/rosewood')
  event.add('mimi:resonant_lumber', 'tfc:wood/lumber/spruce')
  event.add('mimi:resonant_planks', 'tfc:wood/planks/maple')
  event.add('mimi:resonant_planks', 'tfc:wood/planks/rosewood')
  event.add('mimi:resonant_planks', 'tfc:wood/planks/spruce')
  event.add('mimi:resonant_button', 'tfc:wood/planks/maple_button')
  event.add('mimi:resonant_button', 'tfc:wood/planks/rosewood_button')
  event.add('mimi:resonant_button', 'tfc:wood/planks/spruce_button')
  event.add('mimi:resonant_reed', 'tfc:papyrus_strip')
  event.add('mimi:resonant_reed', 'kubejs:sugarcane_strip')
  event.add('tfc:usable_on_tool_rack', 'mimi:banjo')
  event.add('tfc:usable_on_tool_rack', 'mimi:acguitar')
  event.add('tfc:usable_on_tool_rack', 'mimi:acguitar2')
  event.add('tfc:usable_on_tool_rack', 'mimi:acguitar3')
  event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar')
  event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar2')
  event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar3')
  event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar4')
  event.add('tfc:usable_on_tool_rack', 'mimi:elecguitar5')
  event.add('tfc:usable_on_tool_rack', 'mimi:bassguitar')
  event.add('tfc:usable_on_tool_rack', 'mimi:bassguitar2')
  event.add('tfc:usable_on_tool_rack', 'mimi:bassguitar3')
  event.add('tfc:usable_on_tool_rack', 'mimi:violin')
  event.add('tfc:usable_on_tool_rack', 'mimi:microphone')
  event.add('tfc:usable_on_tool_rack', 'mimi:microphone2')
  event.add('tfc:usable_on_tool_rack', 'mimi:microphone3')
  event.add('tfc:usable_on_tool_rack', 'mimi:microphone4')
  event.add('tfc:usable_on_tool_rack', 'mimi:microphone5')
  event.add('tfc:usable_on_tool_rack', 'mimi:microphone6')
  event.add('tfc:usable_on_tool_rack', 'mimi:trumpet')
  event.add('tfc:usable_on_tool_rack', 'mimi:trumpet2')
  event.add('tfc:usable_on_tool_rack', 'mimi:frenchhorn')
  event.add('tfc:usable_on_tool_rack', 'mimi:saxophone')
  event.add('tfc:usable_on_tool_rack', 'mimi:saxophone2')
  event.add('tfc:usable_on_tool_rack', 'mimi:saxophone3')
  event.add('tfc:usable_on_tool_rack', 'mimi:saxophone4')
  event.add('tfc:usable_on_tool_rack', 'mimi:clarinet')
  event.add('tfc:usable_on_tool_rack', 'mimi:flute')
  event.add('tfc:usable_on_tool_rack', 'mimi:ocarina')
  event.add('tfc:usable_on_tool_rack', 'mimi:synlead')
  event.add('tfc:usable_on_tool_rack', 'mimi:synlead3')
  event.add('tfc:usable_on_tool_rack', 'mimi:synlead4')
  event.add('tfc:usable_on_tool_rack', 'mimi:kalimba')
  event.add('tfc:usable_on_tool_rack', 'mimi:bagpipes')
  event.add('tfc:usable_on_tool_rack', 'mimi:oboe')
  event.add('tfc:usable_on_tool_rack', 'mimi:accordion')
  event.add('tfc:usable_on_tool_rack', 'mimi:accordion2')
  event.add('tfc:usable_on_tool_rack', 'mimi:harmonica')
  event.add('tfc:usable_on_tool_rack', 'mimi:handbell')
  event.add('tfc:usable_on_tool_rack', 'mimi:witchpipe')
  event.add('tfc:usable_on_tool_rack', 'mimi:bonelute')
  event.add('tfc:usable_on_tool_rack', 'mimi:glockenspiel')
  event.add('tfc:usable_on_tool_rack', 'mimi:musicbox')
  event.add('tfc:usable_on_tool_rack', 'mimi:recorder')
  event.add('tfc:usable_on_tool_rack', 'mimi:bassoon')
  event.add('tfc:usable_on_tool_rack', 'mimi:woodblock')
  event.add('tfc:usable_on_tool_rack', 'mimi:bottle')
  event.add('tfc:usable_on_tool_rack', 'mimi:panflute')
})

ServerEvents.recipes(event => {

event.recipes.tfc.heating('kubejs:unfired_ocarina', 1399).resultItem('mimi:ocarina')
event.recipes.tfc.welding('mimi:handbell', '#forge:bells', 'minecraft:note_block') //this works, the bell needs to be hot enough to weld

event.shaped('mimi:banjo', [
  'KSR',
  'SNL',
  'ELE'
], {
  S: '#forge:string',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber',
  E: '#forge:leather',
  K: '#tfc:knives'
}
).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:acguitar', [
  'KSR',
  'SNL',
  'LPL'
], {
  S: '#forge:string',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber',
  P: '#mimi:resonant_planks',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:elecguitar', [
  'KWR',
  'WNL',
  'LAL'
], {
  W: '#forge:wires',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber',
  A: 'kubejs:aligned_magnetite',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:bassguitar', [
  'KSR',
  'SNL',
  'PLP'
], {
  S: '#forge:string',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber',
  P: '#mimi:resonant_planks',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:violin', [
  'BSR',
  'SN ',
  'LLK'
], {
  S: '#forge:string',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber',
  B: 'minecraft:bow',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:viola', [
  'BSR',
  'SN ',
  'LPK'
], {
  S: '#forge:string',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber',
  P: '#mimi:resonant_planks',
  B: 'minecraft:bow',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:cello', [
  'BSR',
  'SNL',
  'PPK'
], {
  S: '#forge:string',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber',
  P: '#mimi:resonant_planks',
  B: 'minecraft:bow',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:microphone',[
  ' WE',
  ' NW',
  'R  '
], {
  W: 'tfc:wool',
  E: 'immersiveengineering:component_electronic',
  N: 'minecraft:note_block',
  R: '#mcw_tfc_aio:metal_rods'
})

event.shaped('mimi:trumpet',[
  'KBS',
  'BN ',
  'R  '
], {
  B: '#mimi:resonant_button',
  S: 'tfc:metal/sheet/brass',
  N: 'minecraft:note_block',
  R: 'tfc:metal/rod/brass',
  K: '#tfc:hammers'
}).damageIngredient(Ingredient.of('#tfc:hammers'))

event.shaped('mimi:frenchhorn',[
  'KBS',
  'BNS',
  'RR '
], {
  B: '#mimi:resonant_button',
  S: 'tfc:metal/sheet/brass',
  N: 'minecraft:note_block',
  R: 'tfc:metal/rod/brass',
  K: '#tfc:hammers'
}).damageIngredient(Ingredient.of('#tfc:hammers'))

event.shaped('mimi:saxophone',[
  'KBR',
  'BN ',
  'RS '
], {
  B: '#mimi:resonant_button',
  S: 'tfc:metal/sheet/brass',
  N: 'minecraft:note_block',
  R: 'tfc:metal/rod/brass',
  K: '#tfc:hammers'
}).damageIngredient(Ingredient.of('#tfc:hammers'))

event.shaped('mimi:clarinet',[
  'BRO',
  'BL ',
  'NDK'
], {
  B: '#mimi:resonant_button',
  R: '#mimi:resonant_reed',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block',
  D: 'minecraft:black_dye',
  O: '#mcw_tfc_aio:metal_rods',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:flute',[
  'KBR',
  'BR ',
  'N  '
],{
  B: '#mimi:resonant_button',
  R: 'tfc:metal/rod/silver',
  N: 'minecraft:note_block',
  K: '#tfc:hammers'
}).damageIngredient(Ingredient.of('#tfc:hammers'))

event.shaped('mimi:synlead',[
  'PEP',
  'PNP',
  'BWB'
],{
  P: 'immersiveengineering:plate_iron',
  E: 'immersiveengineering:component_electronic',
  N: 'minecraft:note_block',
  B: '#mimi:resonant_button',
  W: 'immersiveengineering:wire_electrum'
})

event.shaped('mimi:kalimba',[
  'K  ',
  'RNR',
  'LLL'
],{
  K: '#tfc:knives',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:bagpipe', [
  'LLL',
  'EBC',
  'NEC'
],{
  L: '#mimi:resonant_lumber',
  E: '#forge:leather',
  B: 'waterflasks:bladder',
  C: '#tfc:high_quality_cloth',
  N: 'minecraft:note_block',
})

event.shaped('mimi:oboe',[
  'BRR',
  'BLO',
  'NDK'
], {
  B: '#mimi:resonant_button',
  R: '#mimi:resonant_reed',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block',
  D: 'minecraft:black_dye',
  O: '#mcw_tfc_aio:metal_rods',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:accordion',[
  'LLL',
  'RPR',
  'LNL'
],{
  L: '#mimi:resonant_lumber',
  R: '#forge:leather',
  P: 'minecraft:paper',
  N: 'minecraft:note_block'
})

event.shaped('mimi:harmonica', [
  'K  ',
  'LRL',
  'LNL'
],{
  K: '#tfc:knives',
  L: '#mimi:resonant_lumber',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:witchpipe',[
  'KBS',
  'BGL',
  'NL '
],{
  K: "#tfc:knives",
  B: "#mimi:resonant_button",
  S: "#mimi:resonant_reed",
  G: "create_new_age:overcharged_diamond",
  L: "#mimi:resonant_lumber",
  N: "minecraft:note_block"
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:glockenspiel',[
  'RRR',
  'LNL',
  ' K '
],{
  K: '#tfc:knives',
  R: '#mcw_tfc_aio:metal_rods',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block'
}).damageIngredient(Ingredient.of('#tfc:knives'))
event.shaped('mimi:glockenspiel',[
  'RRR',
  'LNL',
  '  K'
],{
  K: '#tfc:knives',
  R: '#mcw_tfc_aio:metal_rods',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block'
}).damageIngredient(Ingredient.of('#tfc:knives'))
event.shaped('mimi:glockenspiel',[
  'RRR',
  'LNL',
  'K  '
],{
  K: '#tfc:knives',
  R: '#mcw_tfc_aio:metal_rods',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:musicbox',[
  'LLL',
  'RNR',
  'LKL'
],{
  K: '#tfc:knives',
  R: '#mcw_tfc_aio:metal_rods',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block'
}).damageIngredient(Ingredient.of('#tfc:knives'))


event.shaped('mimi:bassoon',[
  'BSL',
  'BLR',
  'NLK'
],{
  K: '#tfc:knives',
  S: '#mimi:resonant_reed',
  B: '#mimi:resonant_button',
  R: '#mcw_tfc_aio:metal_rods',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:woodblock',[
  'SRK',
  'PPP',
  'PNP'
],{
  K: '#tfc:knives',
  S: '#tfc:firepit_sticks',
  R: '#mcw_tfc_aio:metal_rods',
  P: '#mimi:resonant_planks',
  N: 'minecraft:note_block'
}).damageIngredient(Ingredient.of('#tfc:knives'))


event.shaped('mimi:bottle',[
  'B B',
  'SBS',
  ' N '
],{
  B: '#tfc:glass_bottles',
  S: '#forge:string',
  N: 'minecraft:note_block'
})

event.shaped('mimi:panflute',[
  'LLL',
  'SNS',
  'K  '
],{
  L: '#mimi:resonant_lumber',
  S: '#forge:string',
  N: 'minecraft:note_block',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))
event.shaped('mimi:panflute',[
  'LLL',
  'SNS',
  ' K '
],{
  L: '#mimi:resonant_lumber',
  S: '#forge:string',
  N: 'minecraft:note_block',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))
event.shaped('mimi:panflute',[
  'LLL',
  'SNS',
  '  K'
],{
  L: '#mimi:resonant_lumber',
  S: '#forge:string',
  N: 'minecraft:note_block',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:recorder',[
  'KBL',
  'BL ',
  'N  '
],{
  K: '#tfc:knives',
  B: 'minecraft:bone',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:piano',[
  'PNP',
  'PSP',
  'BBB'
],{
  P: '#mimi:resonant_planks',
  N: 'minecraft:note_block',
  S: '#forge:string',
  B: 'minecraft:bone'
})

event.shaped('mimi:contrabass',[
  'BSR',
  'SNP',
  'PPK'
], {
  S: '#forge:string',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block',
  P: '#mimi:resonant_planks',
  B: 'minecraft:bow',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:harp',[
  'LLL',
  'SSN',
  'PPK'
], {
  L: '#mimi:resonant_lumber',
  S: '#forge:string',
  N: 'minecraft:note_block',
  P: '#mimi:resonant_planks',
  K: '#tfc:knives'
}).damageIngredient(Ingredient.of('#tfc:knives'))

event.shaped('mimi:drums',[
  'PTP',
  'TNT',
  'BBB'
],{
  P: 'kubejs:metal_plate_brass',
  N: 'minecraft:note_block',
  T: 'tfc:treated_hide',
  B: '#mimi:resonant_planks'
})

event.shaped('mimi:organ',[
  'RSR',
  'PBP',
  'BNB'
],{
  R: 'tfc:metal/rod/gold',
  S: '#forge:string',
  P: '#mimi:resonant_planks',
  B: 'minecraft:bone',
  N: 'minecraft:note_block'
})

event.shaped('mimi:steeldrum',[
  ' S ',
  'LNL',
  'RLR'
],{
  S: 'firmalife:metal/sheet/stainless_steel',
  L: '#mimi:resonant_lumber',
  N: 'minecraft:note_block',
  R: '#mcw_tfc_aio:metal_rods'
})

event.shaped('mimi:timpani',[
  'LTL',
  'LNL'
],{
  N: 'minecraft:note_block',
  T: 'tfc:treated_hide',
  B: '#mimi:resonant_lumber'
})

event.shaped('mimi:xylophone',[
  'RRR',
  'GNG',
  'L L'
],{
  R: '#mcw_tfc_aio:metal_rods',
  G: 'tfc:metal/rod/gold',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber'
})

event.shaped('mimi:vibraphone',[
  'GGG',
  'RNR',
  'L L'
],{
  R: '#mcw_tfc_aio:metal_rods',
  G: 'tfc:metal/rod/gold',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber'
})

event.shaped('mimi:marimba',[
  'PPP',
  'RNR',
  'L L'
],{
  R: '#mcw_tfc_aio:metal_rods',
  P: '#mimi:resonant_planks',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber'
})

event.shaped('mimi:celesta',[
  ' N ',
  'PSP',
  'RRR'
],{
  N: 'minecraft:note_block',
  P: '#mimi:resonant_planks',
  S: '#forge:string',
  R: 'firmalife:metal/rod/stainless_steel'
})

event.shaped('mimi:tubularbells',[
  'GLG',
  'GNG',
  'L L'
],{
  G: 'tfc:metal/rod/gold',
  N: 'minecraft:note_block',
  L: '#mimi:resonant_lumber'
})

event.shaped('mimi:harpsichord',[
  'PSP',
  'PSP',
  'BNB'
],{
  S: '#forge:string',
  P: '#mimi:resonant_planks',
  B: 'minecraft:bone',
  N: 'minecraft:note_block'
})

event.shaped('mimi:keyboard',[
  'ENE',
  'BBB',
  'R R'
],{
  E: 'immersiveengineering:component_electronic',
  N: 'minecraft:note_block',
  B: 'minecraft:bone',
  R: '#mcw_tfc_aio:metal_rods'
})

event.shaped('mimi:prophet',[
  'ENE',
  'BBB',
  'P P'
],{
  E: 'immersiveengineering:component_electronic',
  N: 'minecraft:note_block',
  B: 'minecraft:bone',
  P: '#mimi:resonant_planks'
})

event.shaped('mimi:edrums',[
  'D D',
  'ERE',
  'RNR'
],{
  D: 'immersiveengineering:plate_duroplast',
  E: 'immersiveengineering:component_electronic',
  R: '#mcw_tfc_aio:metal_rods',
  N: 'minecraft:note_block'
})

event.shaped('mimi:deviceconfig',[
  ' B ',
  'BEB',
  ' B '
],{
  B: '#mimi:resonant_button',
  E: 'immersiveengineering:component_electronic'
})

event.shaped('mimi:transmitter',[
  ' E ',
  'SAS',
  ' S '
],{
  E: 'immersiveengineering:component_electronic',
  S: 'immersiveengineering:plate_iron',
  A: 'immersiveengineering:component_electronic_adv'
})

event.shaped('mimi:filecaster',[
  'RTR',
  ' G '
],{
  R: 'minecraft:redstone',
  T: 'mimi:transmitter',
  G: 'create_new_age:overcharged_diamond'
})

event.shaped('mimi:listener',[
  'PAP',
  'RNR',
  'PRP'
],{
  P: 'immersiveengineering:plate_iron',
  A: 'immersiveengineering:component_electronic_adv',
  R: 'minecraft:redstone',
  N: 'minecraft:note_block'
})

event.shaped('mimi:receiver',[
  'PEP',
  'RTR',
  'PRP'
],{
  P: 'immersiveengineering:plate_iron',
  E: 'immersiveengineering:component_electronic',
  R: 'minecraft:redstone',
  T: 'mimi:transmitter'
})

event.shaped('mimi:mechanicalmaestro',[
  'PEP',
  'CRD',
  'PDP'
],{
  P: 'immersiveengineering:plate_iron',
  E: 'immersiveengineering:component_electronic',
  C: '#forge:chests',
  R: 'mimi:receiver',
  D: 'minecraft:redstone'
})

event.shaped('mimi:transmitterblock',[
  'IPI',
  'ERE',
  'IPI'
],{
  I: 'immersiveengineering:plate_iron',
  P: '#mimi:resonant_planks',
  E: 'immersiveengineering:component_electronic',
  R: 'minecraft:redstone_block'
})

event.shaped('mimi:tuningtable',[
  'WLW',
  ' S '
],{
  W: '#tfc:high_quality_cloth',
  L: '#forge:leather',
  S: '#forge:sheetmetals'
})

 })
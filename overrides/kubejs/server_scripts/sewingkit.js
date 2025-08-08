// priority: 1

ServerEvents.recipes(event => {

event.shaped('sewingkit:sewing_station',[
  'SSS',
  'P P',
  'T T'
],{
  S: '#minecraft:wooden_slabs',
  P: '#minecraft:planks',
  T: '#tfc:firepit_sticks'
})

event.shapeless('sewingkit:stone_sewing_needle',[
  'sewingkit:file',
  '#forge:cobblestone'
])

event.shapeless('sewingkit:gold_sewing_needle',[
  'sewingkit:file',
  'tfc:metal/rod/gold'
])

event.shapeless('sewingkit:iron_sewing_needle',[
  'sewingkit:file',
  'tfc:metal/rod/wrought_iron'
])

event.shapeless('sewingkit:netherite_sewing_needle',[
  'sewingkit:file',
  'tfc:metal/rod/black_steel'
])

event.recipes.tfc.anvil('sewingkit:file', 'tfc:metal/ingot/wrought_iron', ['punch_any', 'punch_any', 'punch_any']).tier(3)

})
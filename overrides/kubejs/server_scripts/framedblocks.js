// priority: 1

ServerEvents.recipes(event => {

event.shaped('framedblocks:framed_cube',[
  'LSL',
  'S S',
  'LSL'
],{
  L: '#tfc:lumber',
  S: '#tfc:firepit_sticks'
})

event.shaped('framedblocks:framing_saw',[
  ' S ',
  'FFF'
],{
  S: 'immersiveengineering:sawblade',
  F: 'framedblocks:framed_cube'
})

event.shaped('framedblocks:powered_framing_saw',[
  'GGG',
  'RSR',
  'FFF'
],{
  G: 'firmalife:reinforced_glass',
  R: 'minecraft:redstone',
  S: 'immersiveengineering:sawblade',
  F: 'framedblocks:framed_cube'
})

event.shaped('framedblocks:framed_key',[
  'SSF',
  'RR '
],{
  S: '#tfc:firepit_sticks',
  F: 'framedblocks:framed_cube',
  R: 'tfc:metal/rod/wrought_iron'
})

event.shaped('4x framedblocks:framed_cube', [
  'WSW',
  'S S',
  'WSW'
], {
  S: '#tfc:firepit_sticks',
  W: '#minecraft:planks'
})

event.shapeless('framedblocks:framed_iron_door',[
  'framedblocks:framed_door',
  'minecraft:iron_door'
])

event.shapeless('framedblocks:framed_iron_trapdoor',[
  'framedblocks:framed_door',
  'tfc:metal/trapdoor/wrought_iron'
])

event.shaped('framedblocks:framed_iron_pressure_plate',[
  'FF',
  'II'
],{
  F: 'framedblocks:framed_cube',
  I: 'tfc:metal/ingot/wrought_iron'
})

event.shaped('framedblocks:framed_lever',[
  'S',
  'F'
],{
  F: 'framedblocks:framed_cube',
  S: '#tfc:firepit_sticks'
})

event.shaped('framedblocks:framed_sign',[
  'FFF',
  'FFF',
  ' S '
],{
  F: 'framedblocks:framed_cube',
  S: '#tfc:firepit_sticks'
})

event.shaped('framedblocks:framed_hanging_sign',[
  'C C',
  'FFF',
  'FFF'
],{
  F: 'framedblocks:framed_cube',
  C: '#forge:chains'
})

event.shaped('32x framedblocks:framed_fancy_rail',[
  'R R',
  'RFR',
  'R R'
],{
  F: 'framedblocks:framed_cube',
  R: 'tfc:metal/rod/wrought_iron'
})

event.shaped('64x framedblocks:framed_fancy_rail',[
  'R R',
  'RFR',
  'R R'
],{
  F: 'framedblocks:framed_cube',
  R: 'tfc:metal/rod/steel'
})

event.shaped('16x framedblocks:framed_fancy_powered_rail',[
  'R R',
  'RFR',
  'RDR'
],{
  F: 'framedblocks:framed_cube',
  R: 'tfc:metal/rod/gold',
  D: 'minecraft:redstone'
})

event.shaped('4x framedblocks:framed_fancy_detector_rail',[
  'RPR',
  'RFR',
  'RDR'
],{
  F: 'framedblocks:framed_cube',
  R: 'tfc:metal/rod/wrought_iron',
  P: '#minecraft:stone_pressure_plates',
  D: 'minecraft:redstone'
})

event.shaped('8x framedblocks:framed_fancy_detector_rail',[
  'RPR',
  'RFR',
  'RDR'
],{
  F: 'framedblocks:framed_cube',
  R: 'tfc:metal/rod/steel',
  P: '#minecraft:stone_pressure_plates',
  D: 'minecraft:redstone'
})

event.shaped('4x framedblocks:framed_fancy_activator_rail',[
  'RFR',
  'RTR',
  'RFR'
],{
  F: 'framedblocks:framed_cube',
  R: 'tfc:metal/rod/wrought_iron',
  T: 'minecraft:redstone_torch'
})

event.shaped('8x framedblocks:framed_fancy_activator_rail',[
  'RFR',
  'RTR',
  'RFR'
],{
  F: 'framedblocks:framed_cube',
  R: 'tfc:metal/rod/steel',
  T: 'minecraft:redstone_torch'
})

})
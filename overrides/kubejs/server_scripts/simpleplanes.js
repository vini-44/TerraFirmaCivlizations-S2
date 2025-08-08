// priority: 1

ServerEvents.recipes(event =>{

event.recipes.tfc.anvil('simpleplanes:wrench', 'tfc:metal/ingot/steel', ['shrink_any', 'shrink_any', 'punch_last']).tier(4)

event.shaped('simpleplanes:propeller', [// arg 1: output
  'P P',
  ' A ', // arg 2: the shape (array of strings)
  'P P'
], {
  A: 'create:andesite_alloy',
  P: 'kubejs:propeller_blade'
})

event.shaped('simpleplanes:floaty_bedding', [// arg 1: output
  'PRP',
  'WWW', // arg 2: the shape (array of strings)
  'SRS'
], {
  P: 'immersiveengineering:plate_steel',
  R: 'tfc:metal/rod/steel',
  S: 'tfc:metal/sheet/steel',
  W: 'immersiveengineering:balloon'
})

event.shaped('simpleplanes:booster', [// arg 1: output
  ' F ',
  'STP', // arg 2: the shape (array of strings)
  ' P '
], {
  F: 'minecraft:flint_and_steel',
  S: 'immersiveengineering:stick_aluminum',
  P: 'immersiveengineering:plate_aluminum',
  T: 'immersiveengineering:toolupgrade_drill_capacity'
})

event.shaped('simpleplanes:healing', [// arg 1: output
  'B B',
  ' G ', // arg 2: the shape (array of strings)
  ' B '
], {
  B: 'tfc:metal/rod/black_steel',
  G: 'tfc:metal/double_ingot/gold'
})

event.shaped('simpleplanes:armor', [// arg 1: output
  'S S',
  'DSD', // arg 2: the shape (array of strings)
  'SDS'
], {
  S: 'immersiveengineering:plate_steel',
  D: 'tfc:metal/double_sheet/steel'
})

event.shaped('simpleplanes:folding',[
  ' S ',
  'PGP',
  ' R '
],{
  S: 'tfc:metal/double_sheet/black_bronze',
  P: 'minecraft:piston',
  G: 'create_new_age:overcharged_diamond',
  R: 'tfc:metal/rod/blue_steel'
})

event.shaped('simpleplanes:seats',[
  'LLL',
  'GWG'
],{
  L: '#tfc:lumber',
  G: 'tfc:glue',
  W: '#tfc:high_quality_cloth'
})

event.shaped('simpleplanes:electric_engine',[
  'MSR',
  'WTP',
  'MSR'
],{
  M: 'create_new_age:redstone_magnet',
  S: 'tfc:metal/sheet/copper',
  R: 'tfc:metal/rod/copper',
  W: 'immersiveengineering:wirecoil_electrum',
  T: 'create_new_age:basic_motor',
  P: 'simpleplanes:propeller'
})

event.shaped('simpleplanes:furnace_engine',[
  'BSR',
  'GMP',
  'BSR'
],{
  B: 'tfc:bellows',
  S: 'tfc:metal/sheet/steel',
  R: 'tfc:metal/rod/steel',
  G: 'immersiveengineering:plate_gold',
  M: 'create_new_age:basic_motor',
  P: 'simpleplanes:propeller'
})

event.shaped('simpleplanes:liquid_engine',[
  'BSR',
  'FMP',
  'BSR'
],{
  B: 'immersiveengineering:metal_barrel',
  S: 'tfc:metal/sheet/steel',
  R: 'tfc:metal/rod/steel',
  F: 'immersiveengineering:fluid_pump',
  M: 'create_new_age:basic_motor',
  P: 'simpleplanes:propeller'
})

event.shaped('simpleplanes:plane_workbench',[
  'HIS',
  'OGO',
  'MWM'
],{
  H: 'immersiveengineering:hammer',
  I: 'tfc:metal/ingot/steel',
  S: 'immersiveengineering:screwdriver',
  O: '#tfc:coloured_steel_sheet',
  G: 'tfc:metal/double_sheet/gold',
  M: 'create:mechanical_crafter',
  W: '#tfc:workbenches'
})

event.shaped('simpleplanes:charging_station',[
  'PEP',
  'GVG',
  'PAP'
],{
  P: 'immersiveengineering:plate_steel',
  E: 'tfc_ie_addon:metal/sheet/electrum',
  G: 'tfc:metal/rod/gold',
  V: 'immersiveengineering:capacitor_hv',
  A: 'immersiveengineering:component_electric_adv'
})

event.shaped('simpleplanes:parachute',[
  'SSS',
  'L L',
  ' L '
],{
  S: 'tfc:silk_cloth',
  L: 'minecraft:lead'
})
})
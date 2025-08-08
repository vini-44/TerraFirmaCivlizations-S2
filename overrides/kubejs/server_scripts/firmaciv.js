// priority: 1
ServerEvents.tags('block', event => {
  event.add('minecraft:mineable/pickaxe', 'firmaciv:cleat')
})

ServerEvents.recipes(event => {
  event.recipes.tfc.anvil('firmaciv:anchor','tfc:metal/double_sheet/wrought_iron',["hit_last", "punch_second_last", "bend_third_last"]).tier(3)
  event.recipes.tfc.anvil('firmaciv:cleat','tfc:metal/double_ingot/wrought_iron',["bend_last", "bend_second_last", "bend_third_last"]).tier(3)
  event.recipes.tfc.anvil('2x firmaciv:anchor','tfc:metal/double_sheet/steel',["hit_last", "punch_second_last", "bend_third_last"]).tier(4)
  event.recipes.tfc.anvil('2x firmaciv:cleat','tfc:metal/double_ingot/steel',["bend_last", "bend_second_last", "bend_third_last"]).tier(4)
  event.recipes.tfc.anvil('2x firmaciv:oarlock','tfc:metal/double_ingot/steel',["bend_last", "hit_second_last", "hit_third_last"]).tier(4)
  event.recipes.tfc.heating('firmaciv:anchor', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron',400))
  event.recipes.tfc.heating('firmaciv:cleat', 1535).resultFluid(Fluid.of('tfc:metal/cast_iron',200))

  event.replaceInput(
    { input: 'minecraft:compass'},
    'minecraft:compass',
    'firmaciv:firmaciv_compass'
  )
  
})
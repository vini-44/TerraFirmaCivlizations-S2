// priority: 0


StartupEvents.registry('fluid', event => {
  event.create('molten_igneous_alloy')
    .thickTexture(0x829789)
    .bucketColor(0x829789)
    .displayName('Molten Igneous Alloy')
})


StartupEvents.registry('item', event =>
{
/*
        Add Items
*/

// Vanilla
event.create('incomplete_glowstone_dust').displayName('Incomplete Glowstone Dust')
// TFC
event.create('sugarcane_strip').displayName('Sugarcane Strip')
event.create('black_steel_chain_mesh').displayName('Black Steel Chain Mesh')
event.create('blue_steel_chain_mesh').displayName('Blue Steel Chain Mesh')
event.create('red_steel_chain_mesh').displayName('Red Steel Chain Mesh')
event.create('steel_chain_mesh').displayName('Steel Chain Mesh')
event.create('dust_zinc').displayName('Zinc Grit')
// Create New Age
event.create('aligned_magnetite').displayName('Compressed Magnetite (Aligned)')
event.create('compressed_magnetite').displayName('Compressed Magnetite')
event.create('incomplete_layered_magnet').displayName('Incomplete Layered Magnet')
// Create
event.create('burner_core').displayName('Burner Core')
event.create('unfinished_brass_hand').displayName('Unfinished Brass Hand')
event.create('unfinished_burner_core').displayName('Unfinished Core')
event.create('metal_plate_brass').displayName('Brass Plate')
// Immersive Engineering
event.create('glider_harness').displayName('Glider Harness')
event.create('glider_sail').displayName('Glider Sail')
event.create('glass_bulb').displayName('Glass Bulb')
event.create('propeller_blade').displayName('Propeller Blade')
event.create('slag_brick').displayName('Slag Brick')
event.create('concrete_brick').displayName('Concrete Brick')
// Create Big Cannons
event.create('shot_balls').displayName('Shot Balls')
// Exposure
event.create('empty_film_reel').displayName('Empty Film Reel')
event.create('film_base').displayName('Film Base')
event.create('black_and_white_film_base').displayName('Black and White Film Base')
event.create('incomplete_color_film_base').displayName('Incomplete Color Film Base')
event.create('incomplete_color_film_base2').displayName('Incomplete Color Film Base')
event.create('color_film_base').displayName('Color Film Base')
// MIMI
event.create('unfired_ocarina').displayName('Unfired Ocarina')
// Supplementaries
event.create('candle_holder').displayName('Empty Candle Holder')
event.create('unfired_urn').displayName('Unfired Urn')
// event.create('flax', 'tfc:double_crop')
//   .requiresStick(false)
//   .stages(6)
//   .doubleStages(4)
//   .nutrient('phosphorus','nitrogen')
// Farmer's Delight
event.create('raw_apple_pie').displayName('Raw Apple Pie')
event.create('raw_chocolate_pie').displayName('Raw Chocolate Pie')
event.create('raw_berry_cheesecake').displayName('Raw Berry Cheesecake')
event.create('apple_pie_filling').displayName('Apple Pie Filling')
event.create('chocolate_pie_filling').displayName('Chocolate Pie Filling')
event.create('berry_cheesecake_filling').displayName('Berry Cheesecake Filling')
})

/*
        Burn Times for Train Fuel
*/

ItemEvents.modification(event => {


event.modify('create:copper_diving_helmet', item => {
   item.armorProtection = 1
 })
event.modify('create:copper_diving_boots', item => {
   item.armorProtection = 1
 })


event.modify('create:netherite_diving_helmet', item => {
  item.armorProtection = 2
  item.armorToughness = 2
  item.armorKnockbackResistance = 0.05
})

event.modify('create:netherite_backtank', item => {
  item.armorProtection = 6
  item.armorToughness = 2
  item.armorKnockbackResistance = 0.05
})

event.modify('minecraft:netherite_leggings', item => {
  item.armorProtection = 5
  item.armorToughness = 2
  item.armorKnockbackResistance = 0.05
})

event.modify('create:netherite_diving_boots', item => {
  item.armorProtection = 2
  item.armorToughness = 2
  item.armorKnockbackResistance = 0.05
})

event.modify('tfc:ore/bituminous_coal', item => {
  item.burnTime = 1600
})
event.modify('tfc:ore/lignite', item => {
  item.burnTime = 1600
})
/*
event.modify(Item.of('tfc:metal/bucket/blue_steel', '{fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), item => {
  item.burnTime = 1000
})
event.modify(Item.of('tfc:metal/bucket/red_steel', '{fluid:{Amount:1000,FluidName:"immersiveengineering:biodiesel"}}'), item => {
  item.burnTime = 500
})
event.modify(Item.of('tfc:wooden_bucket', '{fluid:{Amount:1000,FluidName:"immersiveengineering:biodiesel"}}'), item => {
  item.burnTime = 500
})
event.modify(Item.of('tfc:metal/bucket/red_steel', '{fluid:{Amount:1000,FluidName:"immersiveengineering:creosote"}}'), item => {
  item.burnTime = 250
})
event.modify(Item.of('tfc:wooden_bucket', '{fluid:{Amount:1000,FluidName:"immersiveengineering:creosote"}}'), item => {
  item.burnTime = 250
})
event.modify(Item.of('tfc:metal/bucket/red_steel', '{fluid:{Amount:1000,FluidName:"tfc:olive_oil"}}'), item => {
  item.burnTime = 250
})
event.modify(Item.of('tfc:wooden_bucket', '{fluid:{Amount:1000,FluidName:"tfc:olive_oil"}}'), item => {
  item.burnTime = 250
})
event.modify(Item.of('tfc:metal/bucket/red_steel', '{fluid:{Amount:1000,FluidName:"tfc:tallow"}}'), item => {
  item.burnTime = 250
})
event.modify(Item.of('tfc:wooden_bucket', '{fluid:{Amount:1000,FluidName:"tfc:tallow"}}'), item => {
  item.burnTime = 250
})
*/
})

ForgeEvents.onEvent('net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent', event => {
  if (event.itemStack.nbt?.fluid?.FluidName == 'tfc:tallow')
    event.setBurnTime(2000)
    if (event.itemStack.nbt?.fluid?.FluidName == 'tfc:olive_oil')
    event.setBurnTime(5000)
    if (event.itemStack.nbt?.fluid?.FluidName == 'minecraft:lava')
    event.setBurnTime(20000)
    if (event.itemStack.nbt?.fluid?.FluidName == 'immersiveengineering:creosote')
    event.setBurnTime(5000)
    if (event.itemStack.nbt?.fluid?.FluidName == 'immersiveengineering:biodiesel')
    event.setBurnTime(10000)
})
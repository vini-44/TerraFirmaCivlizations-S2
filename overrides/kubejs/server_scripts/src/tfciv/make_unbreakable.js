//make all minecraft blocks unbreakable except in creative mode
//BlockEvents.broken(event => {
  //if (event.getPlayer().isCreative()) return
  //if (event.block.id.split(':')[0] == 'minecraft') event.cancel()
//})


//list of unbreakable blocks
const UNBREAKABLE_BLOCKS = [
  'create_resource_vents:active_mantle_copper_vent',
  'create_resource_vents:active_mantle_iron_vent',
  'create_resource_vents:active_mantle_tin_vent',
  'create_resource_vents:active_mantle_gold_vent'
]

for (let block of UNBREAKABLE_BLOCKS) {
  BlockEvents.broken(block, event => {
    if (event.getPlayer().isCreative()) return
    event.cancel()
  })
}
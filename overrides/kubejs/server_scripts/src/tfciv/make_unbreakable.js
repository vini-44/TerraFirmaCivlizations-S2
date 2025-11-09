//list of unbreakable blocks
const UNBREAKABLE_BLOCKS = [
  'create_resource_vents:active_mantle_copper_vent',
  'create_resource_vents:active_mantle_iron_vent',
  'create_resource_vents:active_mantle_tin_vent',
  'create_resource_vents:active_mantle_gold_vent',
  'minecraft:nether_bricks'
]

for (let block of UNBREAKABLE_BLOCKS) {
  BlockEvents.broken(block, event => {
    if (event.getPlayer().isCreative()) return
    event.cancel()
  })
}
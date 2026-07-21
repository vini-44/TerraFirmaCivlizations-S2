BlockEvents.modification(event => {
  for (const material of ['copper', 'gold', 'silver', 'tin', 'bismuth', 'nickel', 'iron', 'cryolite', 'zinc']) {
    event.modify(`create_resource_vents:active_mantle_${material}_vent`, block => {
      block.destroySpeed = -1
    })
    event.modify(`create_resource_vents:dormant_mantle_${material}_vent`, block => {
      block.destroySpeed = -1
    })
  }
});
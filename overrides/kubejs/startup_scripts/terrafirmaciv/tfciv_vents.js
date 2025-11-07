BlockEvents.modification(event => {
  event.modify('create_resource_vents:active_mantle_copper_vent', block => {
    block.destroySpeed = 100000
  }) //this is not working for some reason. :(
});
// Listen for right-click events on blocks
BlockEvents.rightClicked(event => {
  let block = event.block;
  let player = event.player;
  let heldItem = player.heldItem;

  // Check if the player is holding the reinforcement item (copper)
  if (heldItem && heldItem.id == 'kubejs:copper_mantle_ore') {

    // Get the position of the block the player is interacting with
    let blockPos = block.pos;

    // Define a key to store/retrieve the reinforcement count from world data.
    // We're using block coordinates to ensure it's tied to this specific block's location.
    let key = 'reinforcements_' + blockPos.x + '_' + blockPos.y + '_' + blockPos.z;

    // Retrieve the current reinforcement count from world data (default to 0 if not set)
    let reinforcements = event.world.getData(key) || 0;

    // Set the new reinforcement count in the world data (increment by 1)
    event.world.setData(key, reinforcements + 1);

    // Tell the player the updated reinforcement count
    player.tell(`This block has been reinforced with copper and now has ${reinforcements + 1} reinforcements.`);
  }
});
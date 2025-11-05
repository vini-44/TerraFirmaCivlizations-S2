// --- kubejs/server_scripts/reinforcement_system.js ---

// Path to JSON file
const filePath = 'kubejs/data/reinforcements.json';
let reinforcedBlocks = {};

// Helper: unique key for each block
function blockKey(block) {
  return `${block.x},${block.y},${block.z},${block.level.dimension}`;
}

// --- Load data reliably ---
ServerEvents.highPriorityData(event => {
  reinforcedBlocks = JsonIO.read(filePath) || {};
  
  if (Object.keys(reinforcedBlocks).length === 0) {
    // File didn't exist or was empty, create new
    reinforcedBlocks = {};
    JsonIO.write(filePath, reinforcedBlocks);
    console.log('[KubeJS] Created new reinforcement data file.');
  } else {
    console.log(`[KubeJS] Loaded ${Object.keys(reinforcedBlocks).length} reinforced blocks.`);
  }
});

// --- Save data on world unload ---
ServerEvents.unloaded(event => {
  JsonIO.write(filePath, reinforcedBlocks);
  console.log(`[KubeJS] Saved ${Object.keys(reinforcedBlocks).length} reinforced blocks on world unload.`);
});

// --- Tick-based autosave every 5 minutes (6000 ticks) ---
let tickCounter = 0;
ServerEvents.tick(event => {
  tickCounter++;
  if (tickCounter >= 6000) { // 5 min
    JsonIO.write(filePath, reinforcedBlocks);
    console.log(`[KubeJS] Autosaved ${Object.keys(reinforcedBlocks).length} reinforced blocks.`);
    tickCounter = 0;

    reinforcedBlocks = {};
    reinforcedBlocks = JsonIO.read(filePath) || {};
    console.log(`[KubeJS] Loaded ${Object.keys(reinforcedBlocks).length} reinforced blocks.`);
  }
});


let counter = 1;

// --- Breaking blocks with reinforcement check ---
BlockEvents.broken(event => {
  let { block, player } = event;
  let key = blockKey(block);

  if (!reinforcedBlocks[key] && reinforcedBlocks[key] !== 0) return;
  
  if (!event.player) {
    
    reinforcedBlocks[key] = reinforcedBlocks[key]-5;
    
    if (reinforcedBlocks[key] > 0) {
      console.log('Reinforced block damaged by explosion');
      event.cancel();
    } else {
      delete reinforcedBlocks[key]; // remove from tracking
      console.log('Block destroyed by explosion.');
      return;
    }
  }
  
  //if creative, skip reinforcement but give a warning.
  if (player.isCreative()) {
    player.tell(`This block was reinforced! (${reinforcedBlocks[key]} reinforcements destroyed)`)
    delete reinforcedBlocks[key]; 
    return;
  }
  
  if (reinforcedBlocks[key] > 0) {
    // Block still reinforced, reduce reinforcement and cancel break


    reinforcedBlocks[key] = reinforcedBlocks[key]-0.5;
    //i hate this but we have to :(
    if(counter == 0) {
      player.tell(`This block is still reinforced! (${reinforcedBlocks[key]} left)`);
      counter = counter + 1;
    } 
    else {counter = 0}
    
    event.cancel()
    return;
  } 
  else {
    // Reinforcements already depleted, allow block to break
    delete reinforcedBlocks[key]; // remove from tracking
    player.tell(`This block had no reinforcements left and has broken.`);
    return;
  }
});

// --- Right-click to reinforce (for admin)---
BlockEvents.rightClicked(event => {
  let block = event.block;
  let player = event.player;
  let heldItem = player.mainHandItem;
  const upgradeLevel = 9999999;
  
  if (heldItem.id !== 'kubejs:admin_reinforcement') return;
  if (block.id === 'minecraft:air' || block.id === 'minecraft:water') return;

  let key = blockKey(block);

  if (reinforcedBlocks[key] < upgradeLevel || !reinforcedBlocks[key]) {
    reinforcedBlocks[key] = upgradeLevel;
    player.tell(`This ${block.id} now has admin (${reinforcedBlocks[key]}) reinforcements.`);
    if (!player.isCreative()) heldItem.count = heldItem.count -1;
  }
  else {player.tell(`This ${block.id} already has some (${reinforcedBlocks[key]}) reinforcements.`);}
});

  
// --- Right-click to reinforce (with stone)---
BlockEvents.rightClicked(event => {
  let block = event.block;
  let player = event.player;
  let heldItem = player.mainHandItem;
  const upgradeLevel = 10;
  
  if (heldItem.id !== 'kubejs:stone_reinforcement') return;
  if (block.id === 'minecraft:air' || block.id === 'minecraft:water') return;

  let key = blockKey(block);

  if (reinforcedBlocks[key] < upgradeLevel || !reinforcedBlocks[key]) {
    reinforcedBlocks[key] = upgradeLevel;
    player.tell(`This ${block.id} now has stone (${reinforcedBlocks[key]}) reinforcements.`);
    if (!player.isCreative()) heldItem.count = heldItem.count -1;
  }
  else {player.tell(`This ${block.id} already has some (${reinforcedBlocks[key]}) reinforcements.`);}
});


// --- Right-click to reinforce (with copper)---
BlockEvents.rightClicked(event => {
  let block = event.block;
  let player = event.player;
  let heldItem = player.mainHandItem;
  const upgradeLevel = 25;
  
  if (heldItem.id !== 'kubejs:copper_reinforcement') return;
  if (block.id === 'minecraft:air' || block.id === 'minecraft:water') return;

  let key = blockKey(block);

  if (reinforcedBlocks[key] < upgradeLevel || !reinforcedBlocks[key]) {
    reinforcedBlocks[key] = upgradeLevel;
    player.tell(`This ${block.id} now has copper (${reinforcedBlocks[key]}) reinforcements.`);
    if (!player.isCreative()) heldItem.count = heldItem.count -1;
  }
  else {player.tell(`This ${block.id} already has some (${reinforcedBlocks[key]}) reinforcements.`);}
});

// --- Right-click to reinforce (with iron)---
BlockEvents.rightClicked(event => {
  let block = event.block;
  let player = event.player;
  let heldItem = player.mainHandItem;
  const upgradeLevel = 50;

  if (heldItem.id !== 'kubejs:iron_reinforcement') return;
  if (block.id === 'minecraft:air' || block.id === 'minecraft:water') return;

  let key = blockKey(block);

  if (reinforcedBlocks[key] < upgradeLevel || !reinforcedBlocks[key]) {
    reinforcedBlocks[key] = upgradeLevel;
    player.tell(`This ${block.id} now has iron (${reinforcedBlocks[key]}) reinforcements.`);
    if (!player.isCreative()) heldItem.count = heldItem.count -1;
  }
  else {player.tell(`This ${block.id} already has some (${reinforcedBlocks[key]}) reinforcements.`);}
});

// File where reinforcement data is saved
const filePath = 'kubejs/data/reinforcements.json';

// Object to hold all reinforcement data in memory
let reinforcedBlocks = {};

// Helper: make a unique key for each block
function blockKey(block) {
  return `${block.x},${block.y},${block.z},${block.level.dimension}`;
}

// --- Load data early but reliably ---
ServerEvents.highPriorityData(event => {
  reinforcedBlocks = JsonIO.read(filePath) || {};
  if (Object.keys(reinforcedBlocks).length === 0) {
    // File didn’t exist or was empty
    reinforcedBlocks = {};
    JsonIO.write(filePath, reinforcedBlocks); // create file if missing
    console.log(`[KubeJS] Created new reinforcement data file.`);
  } 
  else {
    console.log(`[KubeJS] Loaded ${Object.keys(reinforcedBlocks).length} reinforced blocks.`);
  }
});

// --- Save data on proper shutdown ---
ServerEvents.unloaded(event => {
  JsonIO.write(filePath, reinforcedBlocks);
  console.log(`[KubeJS] Saved ${Object.keys(reinforcedBlocks).length} reinforced blocks on shutdown.`);
});

// --- Autosave every 5 minutes ---
ServerEvents.loaded(event => {
  console.log(`autosave scheduled`);
  event.server.schedule(1 * 1 * 20, task => {
    event.server.tell(Text.of("autosave activated"));
    JsonIO.write(filePath, reinforcedBlocks);

    console.log(`[KubeJS] Autosaved ${Object.keys(reinforcedBlocks).length} reinforced blocks.`);
    task.reschedule();
  });
});

// --- Handle right-clicking a block ---
BlockEvents.rightClicked(event => {

  let { block, player, item } = event;

  // Only act if holding the special item
  if (item.id !== 'kubejs:copper_mantle_ore') return;

  let key = blockKey(block);

  // Increase reinforcement count
  reinforcedBlocks[key] = (reinforcedBlocks[key] || 0) + 1;
  player.tell(`This ${block.id} now has ${reinforcedBlocks[key]} reinforcements.`);
});

// --- Handle block breaking ---
BlockEvents.broken(event => {
  let { block, player } = event;
  let key = blockKey(block);

  if (reinforcedBlocks[key]) {
    // Reduce reinforcement count by 1
    reinforcedBlocks[key]--;

    // If still reinforced, cancel the break
    if (reinforcedBlocks[key] >= 0) {
      player.tell(`This block is still reinforced! (${reinforcedBlocks[key]} left)`);
      event.cancel(); // Prevent the block from breaking
    } else {
      // Reinforcements depleted — allow block to break normally
      delete reinforcedBlocks[key];
      player.tell(`The block’s final reinforcement was broken!`);
    }
  }
});
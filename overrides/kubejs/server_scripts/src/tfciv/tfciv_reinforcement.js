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
  }
});

// --- Right-click to reinforce ---
BlockEvents.rightClicked(event => {
  let { block, player, item, level } = event;

  if (item.id !== 'kubejs:copper_reinforcement') return;
  if (block.id === 'minecraft:air' || block.id === 'minecraft:water') return;

  let key = blockKey(block);
  reinforcedBlocks[key] = (reinforcedBlocks[key] || 0) + 1;

  // Visual + audio cue
  //level.spawnParticles('minecraft:happy_villager', block.x + 0.5, block.y + 1, block.z + 0.5, 8, 0.3, 0.3, 0.3, 0.01);
  player.playSound('minecraft:anvil_use', 1.0, 1.2);

  player.tell(`§6${block.id} reinforced! Total: §e${reinforcedBlocks[key]}`);
});

// --- Breaking blocks with reinforcement check ---
BlockEvents.broken(event => {
  let { block, player, level } = event;
  if (player.isCreative()) return;

  let key = blockKey(block);
  if (!reinforcedBlocks[key]) return; // Not reinforced

  const remaining = reinforcedBlocks[key];

  if (remaining > 0) {
    // Still has reinforcements left → prevent break
    event.cancel();
    reinforcedBlocks[key] = remaining - 1;

    // Visual + audio cue
    level.spawnParticles('minecraft:smoke', block.x + 0.5, block.y + 0.5, block.z + 0.5, 10, 0.3, 0.3, 0.3, 0.02);
    player.playSound('minecraft:shield_block', 1.0, 1.0);

    player.tell(`§cThis block resisted! (${reinforcedBlocks[key]} reinforcements left)`);
  } else {
    // Now actually break and clean up
    delete reinforcedBlocks[key];
    player.tell(`§7The block finally broke — all reinforcements depleted.`);
  }
});
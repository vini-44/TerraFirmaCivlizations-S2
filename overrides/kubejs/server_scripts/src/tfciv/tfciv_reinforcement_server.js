// --- kubejs/server_scripts/reinforcement_system.js ---

//So the data is now stored in the server.persistentData that is saved and loaded automatically
//Also to make things faster (especiall sending only nearby data to players)
//we are storing the reinforcement numbers by chunk
//in the chunk key there is x,z,dim parts (x and z are divided by 16 relative to block coords)
//in the chunk block key there is x,y,z (x and z is only inside the chunk so 0-15, y is full corrd)
//so you need both of them to get the full pos of a block
//but overall it is much smaller to store and transmit

const DEBUG = true;
const reinforceVersions = {}

// chunk key creation
function getChunkKey(block) {
  return `${Math.floor(block.x/16)},${Math.floor(block.z/16)},${block.level.dimension}`;
}

// chunk block key creation
function getChunkBlockKey(block) {
  let x = block.x - Math.floor(block.x/16) * 16;
  let z = block.z - Math.floor(block.z/16) * 16;
  return `${x},${block.y},${z}`;
}

//some helper functions to easily get, set and remove reinformement data

function getReinforceValue(server, block)
{
  const data = server.persistentData;
  if (data.reinforceData)
  {
    let chunkKey = getChunkKey(block);
    if ( data.reinforceData[chunkKey] )
    {
      return data.reinforceData[chunkKey][getChunkBlockKey(block)];
    }
  }
}


function setReinforceValue(server, block, value)
{
  const data = server.persistentData;

  if ( !data.reinforceData ) data.reinforceData = {};

  let chunkKey = getChunkKey(block);
  if ( !data.reinforceData[chunkKey] ) data.reinforceData[chunkKey] = {};

  data.reinforceData[chunkKey][getChunkBlockKey(block)] = value;
  reinforceVersions[chunkKey] = new Date().getTime();
}

function removeReinforceValue(server, block)
{
  const data = server.persistentData;
  if ( !data.reinforceData ) return;

  let chunkKey = getChunkKey(block);
  if ( !data.reinforceData[chunkKey] ) return;

  delete data.reinforceData[chunkKey][getChunkBlockKey(block)];
  reinforceVersions[chunkKey] = new Date().getTime();
}

//get chunk keys near the player
function getNearbyChunksKeys(player)
{
  let centerx = Math.floor(player.x/16);
  let centerz = Math.floor(player.z/16);
  let chunkKeys = [];
  const radius = 1;
  for( let x = -radius; x <= radius; ++x)
  for( let z = -radius; z <= radius; ++z)
  {
    chunkKeys.push(`${centerx+x},${centerz+z},${player.level.dimension}`);
  }
  return chunkKeys;
}

let playerChunks = {};

function checkPlayerChunks(server,player)
{
  let chunksToSend = {};
  let count = 0;
  const reinforceData = server.persistentData.reinforceData;

  if (!playerChunks[player.UUID]) playerChunks[player.UUID] = {}
  let chunks = playerChunks[player.UUID];

  let chunkKeys = getNearbyChunksKeys(player);
  for( let key of chunkKeys )
  {
    //if there is data for this chunk
    if (reinforceData[key])
    {
      //see what version this player has already
      let lastVersion = chunks[key] || -1;
      //see what is the newest version on server
      let currentVersion = reinforceVersions[key] || 1;
      //console.log(`chunk:${key} version:${lastVersion} current:${currentVersion}`);
      //if there is newer send it
      if (currentVersion > lastVersion)
      {
        //save info for the player what version of this chunk it has
        chunks[key] = currentVersion;
        chunksToSend[key] = reinforceData[key]
        count++;
      }
    }
  }

  if (count>0)
  {
    player.sendData('reinforcement_data', {chunks:chunksToSend});
    if (DEBUG) console.log(`sent ${count} reinforced chunk data`);
  }
}

PlayerEvents.loggedOut(event => {
  delete playerChunks[event.player.UUID];
})

// --- Tick-based events ---
let reinforcementCounter = 0;
const reinforcementInterval = 20; // 1 sec
ServerEvents.tick(event => {
  reinforcementCounter++;

  if (reinforcementCounter >= reinforcementInterval) { 
    reinforcementCounter = 0;

    //periodically send reinforce data to every player who needs it
    event.server.players.forEach(player => {     
      let chunks = checkPlayerChunks(event.server,player);
    });
  }
});

//explosion handling
LevelEvents.afterExplosion(event => {
  let { server } = event;
  for( let block of event.affectedBlocks)
  {
    let reinforce_value = getReinforceValue(server,block);

    if (DEBUG) console.log(`Explosion affected block ${block.pos} of ${block.id} with reinforcement value ${reinforce_value}`);

    if (reinforce_value == global.reinforcements.values.admin.value)
    {
      event.removeAffectedBlock(block);
      if (DEBUG) console.log('Admin reinforced block resisted explosion at ' + block.pos);
      killGhost(event, block);
    }

    reinforce_value -= 5; //explosions do 5 damage
    if (reinforce_value > 0 && reinforce_value != global.reinforcements.values.admin.value - 5)
    {
      setReinforceValue(server,block,reinforce_value);
      if (DEBUG) console.log(`Reinforced block damaged! (${reinforce_value} left)`);
      event.removeAffectedBlock(block);
      killGhost(event, block);
    } 
    else if (reinforce_value != global.reinforcements.values.admin.value - 5)
    {
      removeReinforceValue(server,block);
      if (DEBUG) console.log(`Reinforced Block destroyed by explosion.`);
    }
  }
})

// --- Breaking blocks with reinforcement check ---
BlockEvents.broken(event => {
  let { server, block, player } = event;
  server.getTickTime
  let reinforce_value = getReinforceValue(server,block);
  if (reinforce_value === undefined) return;
  
  if (!player) {
    
    reinforce_value -= 5;
    
    if (reinforce_value > 0) {
      console.log('Reinforced block damaged by explosion');
      setReinforceValue(server,block,reinforce_value);
      event.cancel();
    } else {
      removeReinforceValue(server,block);
      console.log('Block destroyed by explosion.');
    }
    return;
  }
  
  //if creative, skip reinforcement but give a warning.
  if (player.isCreative()) {
    player.tell(`This block was reinforced! (${reinforce_value} reinforcements destroyed)`)
    removeReinforceValue(server,block);
    killGhost(event, block);
    return;
  }

  if (reinforce_value == global.reinforcements.values.admin.value)
  {
    player.tell(`This block is unbreakable, has admin reinforcement!`);
  }
  
  reinforce_value -= 1;

  if (reinforce_value > 0)
  {
    setReinforceValue(server,block,reinforce_value);
    reinforceBreakEffects(player,block,reinforce_value);
    killGhost(event, block);
    event.cancel()
  } 
  else
  {
    removeReinforceValue(server,block);
    player.tell(`This block had no reinforcements left and has broken.`);
  }
});

const nonReinforcableBlocks = [
  'minecraft:air',
  'minecraft:water',
  'tfc:salt_water',
  'tfc:spring_water'
]

function canBlockBeReinforced(blockid)
{
  return nonReinforcableBlocks.indexOf(blockid) == -1;
}

// --- Right-click to reinforce ---
BlockEvents.rightClicked(event => {
  let { server, block, player } = event;
  let heldItem = player.mainHandItem;

  let reinforce_type = global.reinforcements.getByItem(heldItem.id);
  if ( !reinforce_type ) return;
  if ( !canBlockBeReinforced(block.id) ) return;
  
  let reinforce_value = getReinforceValue(server,block) || 0;

  if (reinforce_value < reinforce_type.value) {
    setReinforceValue(server,block,reinforce_type.value)
    player.tell(`This block now has ${reinforce_type.name} (${reinforce_type.value}) reinforcements.`);
    if (!player.isCreative()) heldItem.count = heldItem.count -1;

    player.level.playSound(null,block.x,block.y,block.z,reinforce_type.sound,"master",1,1)

    event.server.players.forEach(player => {
      if (player.distanceToSqr(block) < 32 * 32)
      {
        player.sendData( 'block_reinforced', {x: block.x, y: block.y, z: block.z, value:reinforce_type.value});
      }
    });
  }
  else
  {
    let block_reinfocement_type = global.reinforcements.getByValue(reinforce_value);
    //player.tell(`This block already has ${block_reinfocement_type.name} (${block_reinfocement_type.value}) reinforcements.`);
  }
});

//if a falling block spawns at a reinforced location that means that block started falling
//so we remove the reinforcement
EntityEvents.spawned("minecraft:falling_block",event => {
  let block = {x:Math.floor(event.entity.x),y:event.entity.y,z:Math.floor(event.entity.z),level:event.entity.level};
  if (getReinforceValue(event.server, block))
  {
    event.server.players.forEach(player => {
      if (player.distanceToSqr(event.entity) < 32 * 32)
      {
        reinforceBreakEffects(player,block,0);
      }
    });
    removeReinforceValue(event.server,block);
  }
})
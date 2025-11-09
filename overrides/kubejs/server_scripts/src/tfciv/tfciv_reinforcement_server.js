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

let blockBrokenThisTick = [];
//block key creation
function getBlockKey(block) {
  return `${Math.floor(block.x)},${Math.floor(block.y)},${Math.floor(block.z)},${block.level.dimension}`;
}

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
  blockBrokenThisTick = []; //reset the list of broken blocks each tick

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
      blockBrokenThisTick.push(getBlockKey(block));
      killGhost(event, block);
    } else {

      reinforce_value -= Math.max(15, Math.round(reinforce_value*0.25)); //explosions do 15 or 25% damage

      if (reinforce_value > 0 && reinforce_value != global.reinforcements.values.admin.value - 5)
      {
        setReinforceValue(server,block,reinforce_value);
        if (DEBUG) console.log(`Reinforced block damaged! (${reinforce_value} left)`);
        event.removeAffectedBlock(block);    
        blockBrokenThisTick.push(getBlockKey(block));
        killGhost(event, block);
      } 
      else if (reinforce_value != global.reinforcements.values.admin.value - 5)
      {
        removeReinforceValue(server,block);
        blockBrokenThisTick.push(getBlockKey(block));
        if (DEBUG) console.log(`Reinforced Block destroyed by explosion.`);
      }
    }
  }
})

// --- Breaking blocks with reinforcement check ---
BlockEvents.broken(event => {
  let { server, block, player } = event;
  server.getTickTime
  let reinforce_value = getReinforceValue(server,block);
  if (reinforce_value === undefined) return;

  if (blockBrokenThisTick.includes(getBlockKey(block))) {
    //console.log("stopping double break");
    killGhost(event, block);
    event.cancel();
    return;
  }

  //if creative, skip reinforcement but give a warning.
  if (player.isCreative()) {
    player.tell(`This block was reinforced! (${reinforce_value} reinforcements destroyed)`)
    removeReinforceValue(server,block);
    blockBrokenThisTick.push(getBlockKey(block));
    return;
  }

  if (reinforce_value == global.reinforcements.values.admin.value)
  {
    player.tell(`This block is unbreakable, has admin reinforcement!`);
    killGhost(event, block);
    blockBrokenThisTick.push(getBlockKey(block));
    event.cancel()
  }
  
  reinforce_value -= 1;

  if (reinforce_value >= 0)
  {
    setReinforceValue(server,block,reinforce_value);
    reinforceBreakEffects(player,block,reinforce_value);
    killGhost(event, block);
    blockBrokenThisTick.push(getBlockKey(block));
    event.cancel()
  } 
  else
  {
    removeReinforceValue(server,block);
    player.tell(`This block had no reinforcements left and has broken.`);
    blockBrokenThisTick.push(getBlockKey(block));
    return;
  }
});

function killGhost(event, block){
  //this is a fix for ghostblocks appearing when others break reinforced blocks.
  let blockX = block.pos.x;
  let blockY = block.pos.y;
  let blockZ = block.pos.z;
  //console.log('Sending killGhost for ' + block.id + ' at ' + blockX + ',' + blockY + ',' + blockZ + ' to players');
  event.server.players.forEach(player => {
    player.sendData( 'killGhost', {ghostX: blockX, ghostY: blockY, ghostZ: blockZ, blockId: block.id});
  });
}

function reinforceBreakEffects(player,block,newvalue)
{
  player.level.playSound(null,block.x,block.y,block.z,"minecraft:block.gilded_blackstone.fall","master",1,1)
  player.sendData( 'reinforce_break', {x: block.x, y: block.y, z: block.z,value:newvalue});
}

function canBlockBeReinforced(block)
{
  if (global.reinforcements.banned_ids.indexOf(block.id) != -1)
  {
    return false;
  }
  if (block.getTags().some(r=> global.reinforcements.banned_tags.indexOf(r) != -1))
  {
    return false;
  }
  return true;
}

// --- Right-click to reinforce ---
BlockEvents.rightClicked(event => {
  let { server, block, player } = event;
  let heldItem = player.mainHandItem;

  let reinforce_type = global.reinforcements.getByItem(heldItem.id);
  if ( blockBrokenThisTick.includes(getBlockKey(block))) {
    //console.log("stopping double reinforce");
    event.cancel();
    return;
  }
  if ( !reinforce_type ) return;
  if ( !canBlockBeReinforced(block) )
  {
    event.player.tell("This type of block is not reinforable.")
    return;
  } 
  
  let reinforce_value = getReinforceValue(server,block) || 0;

  if (reinforce_value < reinforce_type.value) {
    setReinforceValue(server,block,reinforce_type.value)
    player.tell(`This block now has ${reinforce_type.name} (${reinforce_type.value}) reinforcements.`);
    if (!player.isCreative()) heldItem.count = heldItem.count -1;

    event.server.players.forEach(player => {
      if (player.distanceToSqr(block) < 32 * 32)
      {
        player.level.playSound(null,block.x,block.y,block.z,reinforce_type.sound,"master",1,1)
        player.sendData( 'block_reinforced', {x: block.x, y: block.y, z: block.z, value:reinforce_type.value});
      }
    });
    blockBrokenThisTick.push(getBlockKey(block));
  }
  else
  {
    let block_reinfocement_type = global.reinforcements.getByValue(reinforce_value);
    //player.tell(`This block already has ${block_reinfocement_type.name} (${block_reinfocement_type.value}) reinforcements.`);
    blockBrokenThisTick.push(getBlockKey(block));
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
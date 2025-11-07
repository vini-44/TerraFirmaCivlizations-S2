//So the data is now stored in the server.persistentData that is saved and loaded automatically
//Also to make things faster (especiall sending only nearby data to players)
//we are storing the reinforcement numbers by chunk
//in the chunk key there is x,z,dim parts (x and z are divided by 16 relative to block coords)
//in the chunk block key there is x,y,z (x and z is only inside the chunk so 0-15, y is full corrd)
//so you need both of them to get the full pos of a block
//but overall it is much smaller to store and transmit

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
}

function removeReinforceValue(server, block)
{
  const data = server.persistentData;
  if ( !data.reinforceData ) return;

  let chunkKey = getChunkKey(block);
  if ( !data.reinforceData[chunkKey] ) return;

  delete data.reinforceData[chunkKey][getChunkBlockKey(block)];
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

// --- Tick-based events ---
let reinforcementCounter = 0;
const reinforcementInterval = 20; // 1 sec

ServerEvents.tick(event => {
  reinforcementCounter++;

  if (reinforcementCounter >= reinforcementInterval) { 
    reinforcementCounter = 0;

    //periodically send reinforce data to every player who needs it

    let reinforceData = event.server.getPersistentData().reinforceData || {};

    event.server.players.forEach(player => {
      //only send data to players who should see it
      if ( player.headArmorItem != global.reinforcements.goggle_item ) return;
      
      let chunkKeys = getNearbyChunksKeys(player);
      //console.log(`nearby chunks: ${chunkKeys}`);

      let count = 0;
      let data = {}
      for( let key of chunkKeys )
      {
        if (reinforceData[key])
        {
          data[key] = reinforceData[key];
          count++;
        }
      }

      if (count>0)
      {
        player.sendData('reinforcement_data', {chunks:data});
        //console.log(`sent ${count} reinforced chunk data`);
      }

    });
  }
});

//explosion handling
LevelEvents.afterExplosion(event => {
  let { server } = event;
  for( let block of event.affectedBlocks)
  {
    let reinforce_value = getReinforceValue(server,block);

    //console.log(`Explosion affected block ${block.pos} of ${block.id} with reinforcement value ${reinforce_value}`);

    if (reinforce_value == global.reinforcements.values.admin.value)
    {
      event.removeAffectedBlock(block);
      //console.log('Admin reinforced block resisted explosion at ' + block.pos);
      killGhost(event, block);
    }

    reinforce_value -= 5; //explosions do 5 damage
    if (reinforce_value > 0 && reinforce_value != global.reinforcements.values.admin.value - 5)
    {
      setReinforceValue(server,block,reinforce_value);
      //console.log(`Reinforced block damaged! (${reinforce_value} left)`);
      event.removeAffectedBlock(block);
      killGhost(event, block);
    } 
    else if (reinforce_value != global.reinforcements.values.admin.value - 5)
    {
      removeReinforceValue(server,block);
      //console.log(`Reinforced Block destroyed by explosion.`);
    }
  }
})

// --- Breaking blocks with reinforcement check ---
BlockEvents.broken(event => {
  let { server, block, player } = event;

  let reinforce_value = getReinforceValue(server,block);
  if (reinforce_value === undefined) return;

  
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
    killGhost(event, block);
    event.cancel()
  }
  
  reinforce_value -= 1;

  if (reinforce_value > 0)
  {
    setReinforceValue(server,block,reinforce_value);
    player.tell(`This block is still reinforced! (${reinforce_value} left)`);
    killGhost(event, block);
    event.cancel()
  } 
  else
  {
    removeReinforceValue(server,block);
    player.tell(`This block had no reinforcements left and has broken.`);
  }
});

function killGhost(event, block){
  //this is a fix for ghostblocks appearing when other break reinforced blocks.
  let blockX = block.pos.x;
  let blockY= block.pos.y;
  let blockZ= block.pos.z;
  console.log('Sending killGhost for ' + block.id + ' at ' + blockX + ',' + blockY + ',' + blockZ + ' to players');
  event.server.players.forEach(player => {
    player.sendData( 'killGhost', {ghostX: blockX, ghostY: blockY, ghostZ: blockZ, blockId: block.id});
  });
}

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
  }
  else
  {
    let block_reinfocement_type = global.reinforcements.getByValue(reinforce_value);
    player.tell(`This block already has ${block_reinfocement_type.name} (${block_reinfocement_type.value}) reinforcements.`);
  }
});

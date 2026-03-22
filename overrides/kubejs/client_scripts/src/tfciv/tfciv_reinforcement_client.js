
let reinforcedBlocksPerChunk = {}

// chunk key creation
function getChunkKey(block) {
  return `${Math.floor(block.x/16)},${Math.floor(block.z/16)},${block.level.dimension}`;
}

function getDataForChunkKey(chunkkey) {
  let parts = chunkkey.split(',');
  return { 
    x:parseInt(parts[0]),
    z:parseInt(parts[1]),
    dim:parts[2]
  }
}

function getDataForInBlockKey(chunkdata,blockkey) {
  let parts = blockkey.split(',');
  return { 
    x:parseInt(parts[0]) + chunkdata.x * 16,
    y:parseInt(parts[1]),
    z:parseInt(parts[2]) + chunkdata.z * 16,
    dim:chunkdata.dim
  }
}

NetworkEvents.dataReceived('reinforcement_data', event => {
  let chunks = event.data.chunks;
  for( let chunkkey in chunks )
  {
    reinforcedBlocksPerChunk[chunkkey] = [];

    let chunkdata = getDataForChunkKey(chunkkey);
    for( let blockkey in chunks[chunkkey] )
    {
      let obj = getDataForInBlockKey(chunkdata,blockkey);
      obj.value = chunks[chunkkey][blockkey];
      reinforcedBlocksPerChunk[chunkkey].push(obj);
    }
  }
});

NetworkEvents.dataReceived('block_reinforced', event => {
  let reinforce_type = global.reinforcements.getByValue(event.data.value)
  for( let i=0; i<5; ++i)
  {
    blockParticleEffects(event.level,event.data.x,event.data.y,event.data.z,reinforce_type.particle)
  }
});

NetworkEvents.dataReceived('reinforce_break', event => {
  let block = {x:event.data.x,y:event.data.y,z:event.data.z,level:event.player.level};
  let chunkKey = getChunkKey(block);
  if (reinforcedBlocksPerChunk[chunkKey])
  {
    for( let i in reinforcedBlocksPerChunk[chunkKey] )
    {
      let obj = reinforcedBlocksPerChunk[chunkKey][i];
      if (obj.x == event.data.x && obj.y == event.data.y && obj.z == event.data.z)
      {
        if (event.data.value)
        {
          obj.value = event.data.value;
        }
        else
        {
          reinforcedBlocksPerChunk[chunkKey].splice(i,1);
        }
        break;
      }
    }
  }
  for( let i=0; i<5; ++i)
  {
    blockParticleEffects(event.level,event.data.x,event.data.y,event.data.z,"minecraft:enchanted_hit")
  }
});


const blockDirections = [
 { x:1, y:0, z:0, diru:"y", dirv:"z" },
 { x:0, y:1, z:0, diru:"x", dirv:"z" },
 { x:0, y:0, z:1, diru:"x", dirv:"y" },
 { x:-1, y:0, z:0, diru:"y", dirv:"z" },
 { x:0, y:-1, z:0, diru:"x", dirv:"z" },
 { x:0, y:0, z:-1, diru:"x", dirv:"y" }
]

function blockParticleEffects(level,x,y,z,particle)
{
  blockDirections.forEach(dir => {
      let neighbor = level.getBlock(x+ dir.x, y + dir.y, z + dir.z);
      if (neighbor.id === 'minecraft:air') {
          let pos = {
            x: x + 0.5 + dir.x * 0.55,
            y: y + 0.5 + dir.y * 0.55,
            z: z + 0.5 + dir.z * 0.55
          }
          pos[dir.diru] += Math.random() - 0.5;
          pos[dir.dirv] += Math.random() - 0.5;
          level.addParticle(particle,
              pos.x, pos.y, pos.z,
              dir.x, dir.y, dir.z);
      }
  });
}

let tickCounter = 0;
ClientEvents.tick(event => {
  tickCounter++;
  if (tickCounter >= 5) {
    tickCounter = 0;

    if ( event.player.headArmorItem == global.reinforcements.goggle_item )
    {
      for(let chunkkey in reinforcedBlocksPerChunk)
      {
        reinforcedBlocksPerChunk[chunkkey].forEach( obj => {
          if ( obj.dim != event.player.level.dimension ) return;

          let reinforce_type = global.reinforcements.getByValue(obj.value)
          blockParticleEffects(event.level,obj.x,obj.y,obj.z,reinforce_type.particle)
        })
      }
    }
  }
})

//this part is on its own so it can be reloaded
global["ReinforcementTooltip"] = (tooltip, accessor) => {

  //local data version
  let pos = accessor.getPosition()
  let chunk = `${Math.floor(pos.x/16)},${Math.floor(pos.z/16)},${accessor.level.dimension}`;
  if (reinforcedBlocksPerChunk[chunk])
  {
    for( let reinforceobj of reinforcedBlocksPerChunk[chunk] )
    {
      if (reinforceobj.x == pos.x && reinforceobj.y == pos.y && reinforceobj.z == pos.z)
      {
        if (reinforceobj.value == global.reinforcements.values.admin.value)
        {
          tooltip.add("Block reinforcement: UNBREAKABLE");
        }
        else
        {
          tooltip.add("Block reinforcement: "+reinforceobj.value);
        }
      }
    }
  }
  
};

//this only runs at game startup
JadeEvents.onClientRegistration((event) => {
    // Register a new block component provider for the Brushable Block.
    event.block('minecraft:block', Java.loadClass("net.minecraft.world.level.block.Block"))
            .tooltip((tooltip, accessor, pluginConfig) => {
                global["ReinforcementTooltip"](tooltip,accessor,reinforcedBlocksPerChunk)
            });
});
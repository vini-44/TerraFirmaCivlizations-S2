
let reinforcedBlocks = []

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
  reinforcedBlocks = []
  let chunks = event.data.chunks;
  for( let chunkkey in chunks )
  {
    let chunkdata = getDataForChunkKey(chunkkey);
    for( let blockkey in chunks[chunkkey] )
    {
      let obj = getDataForInBlockKey(chunkdata,blockkey);
      obj.value = chunks[chunkkey][blockkey];
      reinforcedBlocks.push(obj);
      //event.player.tell(`Block: ${JSON.stringify(obj)}`);
    }
  }
  //event.player.tell(`Received ${reinforcedBlocks.length} reinforced block data`);
});

const blockDirections = [
 { x:1, y:0, z:0, diru:"y", dirv:"z" },
 { x:0, y:1, z:0, diru:"x", dirv:"z" },
 { x:0, y:0, z:1, diru:"x", dirv:"y" },
 { x:-1, y:0, z:0, diru:"y", dirv:"z" },
 { x:0, y:-1, z:0, diru:"x", dirv:"z" },
 { x:0, y:0, z:-1, diru:"x", dirv:"y" }
]

let tickCounter = 0;
ClientEvents.tick(event => {
  tickCounter++;
  if (tickCounter >= 5) {
    tickCounter = 0;

    if ( event.player.headArmorItem != global.reinforcements.goggle_item )
    {
      reinforcedBlocks = []
    }

    reinforcedBlocks.forEach( obj => {
      //if ( obj.dim != event.player.level.dimension ) return;

        let reinforce_type = global.reinforcements.getByValue(obj.value)
        blockDirections.forEach(dir => {
            let neighbor = event.player.level.getBlock(obj.x + dir.x, obj.y + dir.y, obj.z + dir.z);
            if (neighbor.id === 'minecraft:air') {
                let pos = {
                  x: obj.x + 0.5 + dir.x * 0.55,
                  y: obj.y + 0.5 + dir.y * 0.55,
                  z: obj.z + 0.5 + dir.z * 0.55
                }
                pos[dir.diru] += Math.random() - 0.5;
                pos[dir.dirv] += Math.random() - 0.5;
                event.player.level.addParticle(reinforce_type.particle,
                    pos.x, pos.y, pos.z,
                    dir.x, dir.y, dir.z);
            }
        });
    })
  }
})

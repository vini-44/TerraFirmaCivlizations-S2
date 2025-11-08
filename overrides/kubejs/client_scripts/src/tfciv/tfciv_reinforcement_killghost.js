NetworkEvents.dataReceived('killGhost', event => {
  let ghostid = event.data.blockId;
  let ghost = event.player.level.getBlock(event.data.ghostX, event.data.ghostY, event.data.ghostZ);

  //console.log('Ghost block is ' + ghost.pos);
  //console.log('Ghost block id is ' + ghostid);

  ghost.set(ghost.id);
});
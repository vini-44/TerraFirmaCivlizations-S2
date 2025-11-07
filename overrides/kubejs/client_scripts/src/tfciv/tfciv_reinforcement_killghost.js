NetworkEvents.dataReceived('killGhost', event => {
  event.player.tell('Received ghost block:');
  reinforcedBlocks = []
  let ghost = event.data.ghost;

  event.player.tell('Received ghost block:');
  event.player.tell('Received ghost block: ' + ghost.id);

  //setblock( ghost, ghost.id );
});
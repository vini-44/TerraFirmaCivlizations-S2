PlayerEvents.tick(event => {
    const player = event.player;

	const block = player.level.getBlock(player.blockPosition());

    if (block.id === 'terrafirmacivilizations:magma_liquid' || block.id === 'terrafirmacivilizations:flowing_magma_liquid') {
        player.setSecondsOnFire(8);

		if (player.server.tickCount % 10 !== 0) return;    
			player.attack(4);
    }
})
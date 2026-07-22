// server_scripts/fruit_windfall.js
BlockEvents.rightClicked(event => {
	fruitCheck(event);
	jamCheck(event);
	ovenCheck(event);
	leatherCheck(event);
	meatHookCheck(event);
	cleaverRightClickCheck(event);
});
BlockEvents.broken(event => {
	cropCheck(event);
});
EntityEvents.hurt(event => {
	
	cleaverDamageCheck(event);
});
EntityEvents.drops(event => {
	animalDropCheck(event);
});

function animalDropCheck(event) {
	const { entity, source, drops, level } = event;

	// Only care about kills by a player
	const attacker = source.actual;

	
	if (!attacker.isPlayer()) return;

	if (!attacker.tags.contains('animal_bonus_1')) return;

	//attacker.tell(`kill by ${attacker}, ${attacker.tags}`);

	let chance = 1;

	if (attacker.tags.contains('animal_bonus_1')) chance += 0.10;
	if (attacker.tags.contains('animal_bonus_2')) chance += 0.10;
	if (attacker.tags.contains('animal_bonus_3')) chance += 0.15;
	if (attacker.tags.contains('animal_bonus_4')) chance += 0.15;

	//attacker.tell(`chance: ${chance}`);

	if (Math.random() > chance) return;

    const originalItems = [];
    for (let i = 0; i < drops.size(); i++) {
        originalItems.push(drops.get(i).item); // pull the ItemStack out of the ItemEntity
    }

    originalItems.forEach(stack => {
		attacker.tell(Text.of(`Bonus drop! ${stack.count}x `).append(stack.getDisplayName()));
        event.addDrop(stack.copy());
    });
}
function cleaverDamageCheck(event) {
	const {source} = event;
	const player = source.actual;

	if(!player.tags.contains('butcher') && player.mainHandItem.id === 'butchersdelight:cleaver') {
		player.tell('You need to be a butcher to use the cleaver!');
		event.cancel();
	}
}
function cleaverRightClickCheck(event) {
	const {player, hand} = event;

	if (hand !== 'main_hand') return;

	if(!player.tags.contains('butcher') && player.mainHandItem.id === 'butchersdelight:cleaver') {
		player.tell('You need to be a butcher to use the cleaver!');
		event.cancel();
	}
}
function meatHookCheck(event) {
	const { player, level, hand, block} = event;
	
	if (hand !== 'main_hand') return;
	if (block.id !== 'butchersdelight:hook') return;

	if(!player.tags.contains('butcher')) {
		player.tell('You need to be a butcher to use the meat hook!');
		event.cancel();
	}
}
function leatherCheck(event) {
	const { player, level, hand, block} = event;
	
	if (hand !== 'main_hand') return;
	if (block.id !== 'tfc:scraping') return;
	//player.tell(block.id);

	if(player.mainHandItem.hasTag('tfc:knives') && !player.tags.contains('leather_worker')) {
		player.tell('You need to be a leather worker to make leather!');
		event.level.destroyBlock(event.block.pos, true);
		event.cancel();
	}
}
function ovenCheck(event) {
	const { player, level, hand, block} = event;

	if (hand !== 'main_hand') return;
	if (!block.hasTag('firmalife:oven_blocks')) return;

	if(!player.tags.contains('grand_farmer')) {
		player.tell('You need to be a grand farmer to use the oven!');
		event.cancel();
	}
}
function jamCheck(event) {
	const { player, level, hand} = event;

	if (hand !== 'main_hand') return;

	if(player.mainHandItem.id == 'tfc:empty_jar' && !player.tags.contains('orchardist')) {
		player.tell('You need to be an orchardist to collect jam!');
		event.cancel();
	}
}
function cropCheck(event) {
	const { player, level, hand, block} = event;

	if (hand !== 'main_hand') return;
	if (!block.hasTag('tfc:crop')) return;
  	if (block.properties.age !== '7') return;
	if (!player.tags.contains('crop_bonus_1')) return;
	
	let chance = 0;
	if (player.tags.contains('baby_hands_1')) chance += 0.15;
	if (player.tags.contains('baby_hands_2')) chance += 0.15;

	if (Math.random() > chance) return;
	
	let normalDrops = block.getDrops();

	// Spawn a duplicate of each dropped item into the world
	normalDrops.forEach(drop => {
		event.block.popItem(drop);
	});
	
}
function fruitCheck(event) {
	const { player, level, hand, block} = event;

	
	if (hand !== 'main_hand') return;
	if (!block.hasTag('tfc:fruit_tree_leaves')) return;
  	if (block.properties.lifecycle !== 'fruiting') return;

	//for (const key in player) {
	//	console.log(key);
	//}

	//console.log(`lifecycle value: "${block.properties.lifecycle}"`);
	//player.tell(`lifecycle value: "${block.properties.lifecycle}"`);

	const playerName = (String(player.name).split('{')[1]).split('}')[0];
	
	event.server.runCommandSilent(`puffish_skills experience add ${playerName} puffish_skills:farmer 10`);


	if (!player.tags.contains('fruit_bonus_1')) return;
	
	let chance = 0;
	if (player.tags.contains('orchardist')) chance += 0.15;
	if (player.tags.contains('fruit_bonus_1')) chance += 0.15;
	if (player.tags.contains('fruit_bonus_2')) chance += 0.15;
	if (player.tags.contains('fruit_bonus_3')) chance += 0.10;
	if (player.tags.contains('fruit_bonus_4')) chance += 0.10;

	if (Math.random() > chance) return;

	event.server.runCommandSilent(`puffish_skills experience add ${playerName} puffish_skills:farmer 10`);

	const blockId = String(block).split('[')[0];
	const fruitName = blockId.split('/')[1].replace('_leaves', '');
	const foodId = `tfc:food/${fruitName}`;

	//player.tell('You got an extra fruit! ' + foodId);
	player.give(Item.of(foodId, 1));
}
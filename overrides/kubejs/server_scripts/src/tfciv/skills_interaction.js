// server_scripts/fruit_windfall.js
BlockEvents.rightClicked(event => {
	fruitCheck(event);
	jamCheck(event);
	ovenCheck(event);
	leatherCheck(event);
	meatHookCheck(event);
	cleaverRightClickCheck(event);
	proPickCheck(event);
});
BlockEvents.broken(event => {
	cropCheck(event);
	oreCheck(event);
	depthSicknessCheck(event);
	fluxboreCheck(event);
});
EntityEvents.hurt(event => {
	cleaverDamageCheck(event);
});
EntityEvents.drops(event => {
	//animalDropCheck(event);
});

LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
        .matchEntity(entity => entity.anyType('#tfc:animals'))
        .killedByPlayer()
        .apply(context => {
            //console.log('LootJS apply triggered');

            const player = context.getPlayer();
            if (!player) {
                //console.log('No player found in context');
                return;
            }

            //console.log(`Player tags: ${player.tags}`);

            let chance = 0;
            if (player.tags.contains('animal_bonus_1')) chance += 0.10;
            if (player.tags.contains('animal_bonus_2')) chance += 0.10;
            if (player.tags.contains('animal_bonus_3')) chance += 0.15;
            if (player.tags.contains('animal_bonus_4')) chance += 0.15;

            //console.log(`Calculated chance: ${chance}`);

            if (chance <= 0) return;
            if (Math.random() > chance) {
                //console.log('Roll failed, no bonus');
                return;
            }

            const bonusItems = [];
            context.forEachLoot(item => {
                bonusItems.push(item.copy());
            });

            bonusItems.forEach(item => {
                context.addLoot(item);
                player.tell(Text.of(`Bonus drop! ${item.count}x `).append(item.getDisplayName()));
            });
        });
});

//right click checks
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
	
	SkillExperience.addExperience(player, "puffish_skills:farmer", 5);

	if (!player.tags.contains('fruit_bonus_1')) return;
	
	let chance = 0;
	if (player.tags.contains('orchardist')) chance += 0.15;
	if (player.tags.contains('fruit_bonus_1')) chance += 0.15;
	if (player.tags.contains('fruit_bonus_2')) chance += 0.15;
	if (player.tags.contains('fruit_bonus_3')) chance += 0.10;
	if (player.tags.contains('fruit_bonus_4')) chance += 0.10;

	if (Math.random() > chance) return;

	SkillExperience.addExperience(player, "puffish_skills:farmer", 5);

	const blockId = String(block).split('[')[0];
	const fruitName = blockId.split('/')[1].replace('_leaves', '');
	const foodId = `tfc:food/${fruitName}`;

	//player.tell('You got an extra fruit! ' + foodId);
	player.give(Item.of(foodId, 1));
}
function jamCheck(event) {
	const { player, level, hand} = event;

	if (hand !== 'main_hand') return;

	if(player.mainHandItem.id == 'tfc:empty_jar' && !player.tags.contains('orchardist')) {
		player.tell('You need to be an orchardist to collect jam!');
		event.cancel();
	}
	else if (player.mainHandItem.id == 'tfc:empty_jar' && player.tags.contains('orchardist')){
		SkillExperience.addExperience(player, "puffish_skills:farmer", 10);
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
function proPickCheck(event) {
	const {player, hand} = event;

	if (hand !== 'main_hand') return;

	if(!player.tags.contains('spelunker') && (
		player.mainHandItem.hasTag('tfc:propicks') ||
		player.mainHandItem.hasTag('precisionprospecting:prospector_hammers') ||
		player.mainHandItem.hasTag('precisionprospecting:prospector_drills') ||
		player.mainHandItem.hasTag('precisionprospecting:mineral_prospectors') 
	))
	{
		player.tell(`You need to be a Spelunker to use this tool!`);
		event.cancel();
	}
	else if(player.tags.contains('spelunker') && (
		player.mainHandItem.hasTag('tfc:propicks') ||
		player.mainHandItem.hasTag('precisionprospecting:prospector_hammers') ||
		player.mainHandItem.hasTag('precisionprospecting:prospector_drills') ||
		player.mainHandItem.hasTag('precisionprospecting:mineral_prospectors') 
	))
	{
		SkillExperience.addExperience(player, "puffish_skills:miner", 1);
	}
}

//entity hurt checks
function cleaverDamageCheck(event) {
	const {source} = event;
	const player = source.actual;

	if(!player) return;

	if(!player.tags || !player.mainHandItem) return;

	if(!player.tags.contains('butcher') && player.mainHandItem.id === 'butchersdelight:cleaver') {
		player.tell('You need to be a butcher to use the cleaver!');
		event.cancel();
	}
}

// Block break events
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
	
	SkillExperience.addExperience(player, "puffish_skills:farmer", 5)

}
function oreCheck(event) {
	const { player, level, block} = event;

	if (!block.hasTag('forge:ores') && !block.hasTag('terrafirmacivilizations:mantle_ore')) return;
	
	let chance = 0;
	if (player.tags.contains('mining_bonus_1')) chance += 0.05;
	if (player.tags.contains('mining_bonus_2')) chance += 0.05;
	if (player.tags.contains('mining_bonus_3')) chance += 0.10;
	if (player.tags.contains('mining_bonus_4')) chance += 0.10;
	if (player.tags.contains('mining_bonus_5')) chance += 0.10;
	if (player.tags.contains('mining_bonus_6')) chance += 0.10;

	if (Math.random() > chance) return;
	let normalDrops = block.getDrops();

	// Spawn a duplicate of each dropped item into the world
	normalDrops.forEach(drop => {
		event.block.popItem(drop);
	});

	SkillExperience.addExperience(player, "puffish_skills:miner", 10)
}
function depthSicknessCheck(event){
	const { player, level, hand, block} = event;

	if (player.y >= 55) return;	
	
	let lowestDepth = 55;
	if (player.tags.contains('depth_sickness_1')) lowestDepth -= 10;
	if (player.tags.contains('depth_sickness_2')) lowestDepth -= 20;
	if (player.tags.contains('depth_sickness_3')) lowestDepth -= 20;
	if (player.tags.contains('depth_sickness_4')) lowestDepth -= 20;
	if (player.tags.contains('depth_sickness_5')) lowestDepth -= 25;

	if (player.y >= lowestDepth) return;
	if (!player.tags.contains('depth_sickness_5')){
		player.potionEffects.add('minecraft:slowness', 120 * 20, 0);
		player.potionEffects.add('minecraft:hunger', 60 * 20, 1);
		player.potionEffects.add('tfc:thirst', 60 * 20, 1);
		player.potionEffects.add('minecraft:nausea', 5 * 20, 0);
		player.potionEffects.add('minecraft:mining_fatigue', 5 * 20, 0);
		player.potionEffects.add('minecraft:blindness', 120 * 20, 0);
	}
	else{	
		player.potionEffects.add('minecraft:blindness', 20 * 20, 0);
	}

	player.tell(`You're in too deep, your safe depth is ${lowestDepth}, you're currently at ${player.y}`);

	event.server.runCommandSilent('cave_dweller fast_forward minecraft:overworld 800 400');
}
function fluxboreCheck(event){
	const { player, level, block} = event;
	
	if (!player.tags.contains('bulk_miner') && player.mainHandItem.id == 'thermal:flux_drill') {
		player.tell("You need to be a Bulk Miner to use the Fluxbore");
		event.cancel();
	}
		
}
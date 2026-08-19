const CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");

const Pathogens = {};
let pathogensLoaded = false;

function loadPathogens(server) {
	//if (pathogensLoaded || !server) return;
	//pathogensLoaded = true;

	var raw = server.persistentData.getString('custom_pathogens');
	if (!raw) return;

	try {
		var loadedPathogens = JSON.parse(raw);
		for (var key of Object.keys(loadedPathogens)) {
			Pathogens[key] = new PathogenClass(
				loadedPathogens[key].name,
				loadedPathogens[key].severity,
				loadedPathogens[key].virality,
				loadedPathogens[key].patient_0,
				loadedPathogens[key].infected_count
			);
			//console.log(`pathogen ${key} loaded`);
		}
		console.log(`LOADED ${Object.keys(loadedPathogens).length} pathogens from persistent data`);
	} catch (e) {
		console.log('ERROR Failed to parse stored pathogens: ' + e);
	}
	pruneInactivePathogens(server);
}
function pruneInactivePathogens(server) {
	if (Object.keys(Pathogens).length < 500) return;

	var removedCount = 0;
	for (var key of Object.keys(Pathogens)) {
		if (Pathogens[key].patient_0 === 'lab') continue; // never auto-delete undeployed curated pathogens

		getInfectedCount(key, server); // refresh count before checking
		if (Pathogens[key].infected_count === 0) {
			delete Pathogens[key];
			removedCount++;
		}
	}

	if (removedCount > 0) {
		savePathogens(server);
		console.log(`Auto-pruned ${removedCount} inactive pathogen(s), Pathogens count was over 500.`);
	}
}
function savePathogens(server) {
	var pathogensToSave = {};
	try{
		for (var key of Object.keys(Pathogens)) {
			getInfectedCount(key,server);
			pathogensToSave[key] = {
				name: Pathogens[key].name,
				severity: Pathogens[key].severity,
				virality: Pathogens[key].virality,
				patient_0: Pathogens[key].patient_0,
				infected_count: Pathogens[key].infected_count
			};
			//console.log(`pathogen ${key} saved`);
		}
		console.log(`SAVED ${Object.keys(pathogensToSave).length} pathogens to persistent data`);
	} catch(e){
		console.log('ERROR Failed to save pathogens: ' + e);
	}

	server.persistentData.putString('custom_pathogens', JSON.stringify(pathogensToSave));

}

// Covers a real server startup
ServerEvents.loaded(event => {
	loadPathogens(event.server);
});

function PathogenClass(name, severity, virality, patient_0, infected_count) {
	this.name = name;
	this.severity = severity;
	this.virality = virality;
	this.patient_0 = patient_0;
	this.infected_count = infected_count;
}

PathogenClass.prototype.infectPlayer = function(player) {
	var pData = player.persistentData;

	if(!pData.getBoolean('is_sick')){
		pData.putString('sickness_name', this.name);
		pData.putDouble('sickness_severity', this.severity);
		pData.putDouble('sickness_virality', this.virality);
		pData.putBoolean('is_sick', true);
		pData.putDouble('infected_count', 1);

		setCureTimer(player,this.severity);

		//player.tell(`You have contracted ${this.name}!`);
		player.tell(`You now feel rather ill...`);
	} else{
		player.tell(`You still feel rather ill...`);
	}
};

PathogenClass.prototype.curePlayer = function(player) {
	var pData = player.persistentData;
	pData.putString('sickness_name', 'none');
	pData.putDouble('sickness_severity', 0);
	pData.putDouble('sickness_virality', 0);
	pData.putBoolean('is_sick', false);
	player.tell('You feel better now');
};

PathogenClass.prototype.damage_check = function(player) {
	var pData = player.persistentData;
	if (!pData.getBoolean('is_sick')) return;

	var savedSeverity = pData.getDouble('sickness_severity');
	var savedHygiene = pData.getLong('hygiene')/100;
	var savedName = pData.getString('sickness_name');
	var chance = Math.random();

	var sickRoll = (chance * savedSeverity)/(2*savedHygiene);
	
	//player.tell(sickRoll);

	if (sickRoll >= 0 && sickRoll < 1) {
		player.tell(`You cough.`);
		player.potionEffects.add('tfc:thirst', 10 * 20, 1);
		player.potionEffects.add('minecraft:hunger', 5 * 20, 1);
	}else if (sickRoll >= 1 && sickRoll < 2) {
		player.tell(`You cough roughly, hurting your thoat`);
		player.potionEffects.add('minecraft:blindness', 2 * 20, 0);
		player.potionEffects.add('minecraft:slowness', 5 * 20, 0);
		player.potionEffects.add('tfc:thirst', 10 * 20, 1);
	}else if (sickRoll >= 2 && sickRoll < 3) {
		player.tell(`You cough and sneeze, feeling rather ill`);
		player.potionEffects.add('minecraft:blindness', 5 * 20, 0);
		player.potionEffects.add('minecraft:slowness', 20 * 20, 0);
		player.potionEffects.add('minecraft:hunger', 30 * 20, 1);
		player.potionEffects.add('tfc:thirst', 30 * 20, 1);
		player.potionEffects.add('minecraft:poison', 1 * 20, 0);
	}else if (sickRoll >= 3 && sickRoll < 4) {
		player.tell(`You hack and wheeze, feeling terribly ill`);
		player.potionEffects.add('minecraft:blindness', 20 * 20, 0);
		player.potionEffects.add('minecraft:slowness', 60 * 20, 0);
		player.potionEffects.add('minecraft:hunger', 240 * 20, 1);
		player.potionEffects.add('tfc:thirst', 240 * 20, 1);
		player.potionEffects.add('minecraft:poison', 2 * 20, 0);
	}else if (sickRoll >= 4 && sickRoll < 5) {
		player.tell(`You fight for your life, your constant coughing and exhaustion make it hard to even move`);
		player.potionEffects.add('minecraft:blindness', 20 * 20, 1);
		player.potionEffects.add('minecraft:slowness', 120 * 20, 0);
		player.potionEffects.add('minecraft:slowness', 15 * 20, 2);
		player.potionEffects.add('minecraft:hunger', 240 * 20, 1);
		player.potionEffects.add('tfc:thirst', 240 * 20, 1);
		player.potionEffects.add('minecraft:poison', 5 * 20, 0);
	}

	var radius = 3 * pData.getDouble('sickness_virality');

	// 1. Filter players strictly by coordinate math
	const nearbyPlayers = player.server.players.filter(p => {
		if (p.username === player.username) return false;
		
		// Calculate 3D distance manually to prevent version compatibility issues
		let dx = player.x - p.x;
		let dy = player.y - p.y;
		let dz = player.z - p.z;
		let actualDistance = Math.sqrt(dx * dx + dy * dy + dz * dz);
		
		return actualDistance <= radius;
	});

	// 2. Infect the filtered players and handle notifications
	if (nearbyPlayers.length > 0) {

		loadPathogens(player.server);

		var pathogenname = savedName.toString();
		var pathogen = Pathogens[pathogenname];

		let names = nearbyPlayers.map(p => p.displayName.string).join(', ');
		player.tell(`The following hear you cough: ${names}`);

		nearbyPlayers.forEach(targetPlayer => {

			//console.info(`DEBUG: savedName is currently: "${savedName}" (Type: ${typeof savedName})`);
			//console.info(`DEBUG: pathogenname is currently: "${pathogenname}" (Type: ${typeof pathogenname})`);

			//console.info(`DEBUG: Available keys in Pathogens: ${Object.keys(Pathogens).join(', ')}`);

			//player.tell(`You cough with: ${savedName}`);

			//targetPlayer.tell(`You hear ${player.displayName.string} cough`)
			
			var savedVirality = pData.getDouble('sickness_virality');
			var coughlevel = (savedVirality * chance)/(2*savedHygiene);

			if (coughlevel >= 0 && coughlevel < 1) {
				targetPlayer.tell(`You hear ${player.displayName.string} lightly cough`)
			}else if (coughlevel >= 1 && coughlevel < 2) {
				targetPlayer.tell(`You hear ${player.displayName.string} cough`)
			}else if (coughlevel >= 2 && coughlevel < 3) {
				targetPlayer.tell(`You hear ${player.displayName.string} cough and sneeze`)
			}else if (coughlevel >= 3 && coughlevel < 4) {
				targetPlayer.tell(`You hear ${player.displayName.string} hack and wheeze`)
			}else if (coughlevel >= 4 && coughlevel < 5) {
				targetPlayer.tell(`You hear ${player.displayName.string} fighting for their life`)
			}

			if ((coughlevel)/(2*targetPlayer.persistentData.getDouble('hygiene')) >= (5*(Math.random()**2))){
				if(!hasHeadCurio(player, "createbigcannons:gas_mask")){	
					pathogen.infectPlayer(targetPlayer); 
				}
				else if ((Math.random() < 0.1)){ //10% to get infected anyways
					pathogen.infectPlayer(targetPlayer); 
				}
			}
		});

	} else {
		player.tell("No one hears you");
	}
};

ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event;

	event.register(
		Commands.literal('pathogen')

		.requires(source => {
			const player = source.getEntity ? source.getEntity() : null;
			return player != null && player.hasPermissions(2);
		})
		//infect
		.then(
			Commands.literal('infect')
				.then(
					Commands.argument('target', Arguments.PLAYER.create(event))
						.then(
							Commands.argument('pathogenName', Arguments.STRING.create(event))
								.executes(ctx => {
									loadPathogens(ctx.source.server);

									var targetPlayer = Arguments.PLAYER.getResult(ctx, 'target');
									var pathogenKey = Arguments.STRING.getResult(ctx, 'pathogenName');

									var pathogen = Pathogens[pathogenKey];
									if (!pathogen) {
										ctx.source.player.tell(`No pathogen named '${pathogenKey}' exists.`);
										return 0;
									}
									if (pathogen.patient_0 == 'lab') {
										pathogen.patient_0 = targetPlayer.username;
										savePathogens(ctx.source.server);
										ctx.source.player.tell(`${targetPlayer.username} is now patient 0 of '${pathogen.name}'`);
									}

									pathogen.infectPlayer(targetPlayer);
									ctx.source.player.tell(`Gave '${pathogen.name}' to ${targetPlayer.username}`);
									return 1;
								})
						)
				)
		)
		//cure
		.then(
			Commands.literal('cure')
				.then(
					Commands.argument('target', Arguments.PLAYER.create(event))
						.executes(ctx => {
							var targetPlayer = Arguments.PLAYER.getResult(ctx, 'target');

							ctx.source.player.tell(`Cured ${targetPlayer.username} of ${targetPlayer.persistentData.getString('sickness_name')}`);

							PathogenClass.prototype.curePlayer(targetPlayer);
							return 1;
						})
				)
		)
		//check
		.then(
			Commands.literal('check')
				.then(
					Commands.argument('target', Arguments.PLAYER.create(event))
						.executes(ctx => {
							var targetPlayer = Arguments.PLAYER.getResult(ctx, 'target');
							if (!targetPlayer.persistentData.getBoolean('is_sick')) {
								ctx.source.player.tell(`${targetPlayer.username} is not sick`);
								return 1;
							}
							ctx.source.player.tell(`${targetPlayer.username} sick state is ${targetPlayer.persistentData.getBoolean('is_sick')}`);
							ctx.source.player.tell(`${targetPlayer.username} has ${targetPlayer.persistentData.getString('sickness_name')}`);
							ctx.source.player.tell(`${targetPlayer.username}'s sickness is severity ${targetPlayer.persistentData.getDouble('sickness_severity')}`);
							ctx.source.player.tell(`${targetPlayer.username}'s sickness is virality ${targetPlayer.persistentData.getDouble('sickness_virality')}`);
							ctx.source.player.tell(`${targetPlayer.username}'s cough is in ${targetPlayer.persistentData.getDouble('pathogen_check_countdown')}`);
							ctx.source.player.tell(`${targetPlayer.username}'s cure is in ${targetPlayer.persistentData.getDouble('pathogen_cure_countdown')}`);
							ctx.source.player.tell(`${targetPlayer.username}'s hygiene is ${targetPlayer.persistentData.getDouble('hygiene')}`);
							return 1;
						})
				)
		)
		//cough
		.then(
			Commands.literal('cough')
				.then(
					Commands.argument('target', Arguments.PLAYER.create(event))
						.executes(ctx => {

							var targetPlayer = Arguments.PLAYER.getResult(ctx, 'target');
							if (!targetPlayer.persistentData.getBoolean('is_sick')) {
								ctx.source.player.tell(`${targetPlayer.username} is not sick`);
								return 1;
							}
							
							PathogenClass.prototype.damage_check(targetPlayer);

							ctx.source.player.tell(`${targetPlayer.username} told to cough`);
							return 1;
						})
				)
		)
		// /pathogen create <name> <severity>
		.then(
			Commands.literal('create')
				.then(
					Commands.argument('name', Arguments.STRING.create(event))
						.then(
							Commands.argument('severity', Arguments.DOUBLE.create(event))
								.then(
									Commands.argument('virality', Arguments.DOUBLE.create(event))
										.executes(ctx => {
											loadPathogens(ctx.source.server);

											var name = Arguments.STRING.getResult(ctx, 'name');
											var severity = Arguments.DOUBLE.getResult(ctx, 'severity');
											var virality = Arguments.DOUBLE.getResult(ctx, 'virality');

											if (severity < 0 || severity > 5) {
												ctx.source.player.tell(`Severity must be between 0.0 and 5.0`);
												return 0;
											}

											var key = name.toLowerCase().replace(/\s+/g, '_');
											Pathogens[key] = new PathogenClass(name, severity, virality, 'lab');
											savePathogens(ctx.source.server);

											ctx.source.player.tell(`Created pathogen '${name}' (key: ${key}, severity: ${severity}, virality: ${virality})`);
											return 1;
										})
								)
						)
				)
		)
		// /pathogen list
		.then(
			Commands.literal('list')
				.executes(ctx => {
					loadPathogens(ctx.source.server);

					var keys = Object.keys(Pathogens);

					if (!keys.length) {
						ctx.source.player.tell('No pathogens exist yet.');
						return 1;
					}
					

					ctx.source.player.tell(`Known pathogens (${keys.length}):`);
					for (var key of keys) {
						var p = Pathogens[key];
						getInfectedCount(key, ctx.source.server)
						if(p.infected_count > 0){
							ctx.source.player.tell(`- ${key}: '${p.name}', severity ${p.severity}, virality ${p.virality}, patient 0: ${p.patient_0}, active infected: ${p.infected_count}`);
						}
					}
					return 1;
				})
		)
		// remove
		.then(
			Commands.literal('remove')
				.then(
					Commands.argument('keyToRemove', Arguments.STRING.create(event))
						.executes(ctx => {
							loadPathogens(ctx.source.server);

							var key = Arguments.STRING.getResult(ctx, 'keyToRemove');
							
							try {
								ctx.source.server.players.forEach(player => {
									if(player.persistentData.getString('sickness_name') == Pathogens[key].name) {
										PathogenClass.prototype.curePlayer(player);
									}
								}) 

								delete Pathogens[key]; 
								ctx.source.player.tell(`Removed pathogen '${key}'`);
							} catch (e){
								ctx.source.player.tell('ERROR Failed to remove pathogen: ' + e);
							}

							savePathogens(ctx.source.server);
							return 1;
						})
				)
		)
		// wipe.then(
		.then(
			Commands.literal('clearall')
				.then(
					Commands.literal('confirm')
						.executes(ctx => {
							var server = ctx.source.server;
							var count = Object.keys(Pathogens).length;

							// Cure anyone currently sick, since their pathogen is about to stop existing
							server.players.forEach(p => {
								if (p.persistentData.getBoolean('is_sick')) {
									PathogenClass.prototype.curePlayer(p);
								}
							});

							// Wipe in-memory registry
							for (var key of Object.keys(Pathogens)) {
								delete Pathogens[key];
							}

							// Wipe persistent storage
							server.persistentData.remove('custom_pathogens');

							ctx.source.player.tell(`Deleted all ${count} pathogen(s) and cured any sick players.`);
							return 1;
						})
				)
				.executes(ctx => {
					ctx.source.player.tell(`This will permanently delete all pathogens and cure all sick players. Run '/pathogen clearall confirm' to proceed.`);
					return 1;
				})
		)
	)
	event.register(
		Commands.literal('checkHealth')
			.executes(ctx =>{
				var player = ctx.source.player;
				var pData = player.persistentData;
				const scale = (value, inMin, inMax, outMin, outMax) => {
					return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
				};

				var soapCurrent = Math.round(100*scale(pData.getInt('soapModifier'), 0, 600, 0, 1));
				var showerCurrent = Math.round(100*scale(pData.getInt('showerModifier'), 0, 1200, 0, 1));
				var herbsCurrent = Math.round(100*scale(pData.getInt('herbsModifier'), 0, 12000, 0, 1));
				var nutrition = player.data['tfc:player_data'].getAverageNutrition();

				player.tell(`Your soap modifier is at ${soapCurrent}%`);
				player.tell(`Your shower modifier is at ${showerCurrent}%`);
				player.tell(`Your herbs modifier is at ${herbsCurrent}%`);
				player.tell(`Your nutrition modifier is at ${Math.round(100*nutrition)}`);

				player.tell(`Your overall hygiene is at ${pData.getLong('hygiene')}`)
				player.tell(`Your sick state is ${pData.getBoolean('is_sick')}`)
				return 1;
			})
	)
})


ServerEvents.tick(event => {
	if (event.server.tickCount % 20 !== 0) return; // only evaluate once per second

	event.server.players.forEach(player => {
		var pData = player.persistentData;
		tickingClean(player,event);

		//bad water thing
		if (player.potionEffects.isActive('minecraft:unluck')) {
			var chance = (Math.random()*(2*(pData.getLong('hygiene'))/100));
			//player.tell(chance);
			//player.tell((pData.getLong('hygiene')/100));
			//player.tell(chance);
			if(chance <= 0.02){
				var severity = Math.round(5 * Math.pow(Math.random(), 3)*100)/100;
				var virality = Math.round(5 * Math.pow(Math.random(), 3)*100)/100;

				if(severity <= 1){
					player.tell('That water was gross');
					createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
				} else if (severity > 1 && severity <= 2){
					player.tell('That water was really gross');
					createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
				} else if (severity > 2 && severity <= 3){
					player.tell('That water was horrible');
					createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
				} else if (severity > 3 && severity <= 4){
					player.tell('That water was completely disgusting');
					createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
				} else if (severity > 4 && severity <= 5){
					player.tell('That water was completely disgusting');
					createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
				}
				else{
					player.tell('uh oh something weird (ERROR)');
				}

			} else{
				player.tell('That water was kinda weird.');
			}
  			player.runCommandSilent(`effect clear ${player.name.string} minecraft:unluck`)
    	}

		//damage tick
		if (!player.persistentData.getBoolean('is_sick')) {
			//ctx.source.player.tell(`${targetPlayer.username} is not sick`);
			return;
		} else {
			console.log('spawning particles');
			player.level.spawnParticles(
				'minecraft:sneeze', // 1. Particle Name
				false,               // 2. Force rendering (override video settings distance)
				player.x,            // 3. X Coordinate
				player.y + 1,        // 4. Y Coordinate
				player.z,            // 5. Z Coordinate
				0.5,                 // 6. X Spread (dx)
				0.5,                 // 7. Y Spread (dy)
				0.5,                 // 8. Z Spread (dz)
				10,                   // 9. Count
				0.05                  // 10. Speed
			)


			//loadPathogens(player.server);


			var keys = Object.keys(Pathogens);
			var names = [];
			/*
			for (var key of keys) {
				var p = Pathogens[key];
				getInfectedCount(key, player.server)
				names.push(p.name);
			}
			if (!names.includes(player.persistentData.getString('sickness_name'))) {
				player.tell(`your sickness isnt real ${player.persistentData.getString('sickness_name')}`);
				PathogenClass.prototype.curePlayer(player);
				return;
			}
			*/
			var hurtcountdown = pData.getInt('pathogen_check_countdown');
			if (hurtcountdown > 0) {
				pData.putInt('pathogen_check_countdown', hurtcountdown - 1);
			} else{
				var baseInterval = 60*5;
				var jitter = Math.floor(Math.random() * 60*5);
				pData.putInt('pathogen_check_countdown', baseInterval + jitter);
				PathogenClass.prototype.damage_check(player);
			}

			//getting better tick
			var healcountdown = pData.getInt('pathogen_cure_countdown');
			if (healcountdown > 0) {
				pData.putInt('pathogen_cure_countdown', healcountdown - 1);
				return;
			} else {			
				PathogenClass.prototype.curePlayer(player);
			}
		}
	});
});
function hasHeadCurio(player, itemId) {
    let curiosHelper = CuriosApi.getCuriosHelper();
    
    // 1. Find the curio on the player
    let found = curiosHelper.findFirstCurio(player, itemId);
    
    // 2. Explicitly check if it exists BEFORE grabbing the inner data
    if (!found.isPresent()) {
        return false; 
    }
    

    // 3. Safe to call .get() now because isPresent() returned true
    let slotResult = found.get();
    let slotId = slotResult.slotContext().identifier(); 
    //player.tell(`You are wearing ${slotResult}`);
    
    return slotId === 'head';
}
function tickingClean(player, event){


	var pData = player.persistentData;
	const scale = (value, inMin, inMax, outMin, outMax) => {
		return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	};

	if (player.isInWater()) {
		var showerModifier = pData.getDouble('showerModifier');
		//player.tell(showerModifier);
		if (showerModifier < 1700) {
			player.tell('You bathe.');
			pData.putDouble('showerModifier', (showerModifier + 100));
		}
		else if(showerModifier >= 1699){
			//player.tell('Youre clean!');
		}
	}

	pData.putInt('soapModifier', Math.max((pData.getInt('soapModifier') - 1) , 0));
	pData.putInt('showerModifier', Math.max((pData.getInt('showerModifier') - 1), 0));
	pData.putInt('herbsModifier', Math.max((pData.getInt('herbsModifier') - 1), 0));
	pData.putInt('nutrition', (player.data['tfc:player_data'].getAverageNutrition()));

	var soapCurrent = Math.min(scale(pData.getInt('soapModifier'), 0, 600, 0, 1), 1);
	var showerCurrent = Math.min(scale(pData.getInt('showerModifier'), 0, 1200, 0, 1), 1);
	var herbsCurrent = Math.min(scale(pData.getInt('herbsModifier'), 0, 12000, 0, 1), 1);
	var nutrition = player.data['tfc:player_data'].getAverageNutrition();

	var calculatedHygiene = ((soapCurrent*0.2)+(herbsCurrent*0.2)+(showerCurrent*0.3)+(nutrition*0.3))*100;
	if (hasHeadCurio(player, "createbigcannons:gas_mask")){
		calculatedHygiene += 15;
	}
	//player.tell(`Your overall hygiene is at ${player.persistentData.getLong('hygiene')}`)
	pData.putLong('hygiene', Math.max(calculatedHygiene, 1));
}

ItemEvents.rightClicked(event => {
	soapWash(event);
	herbEat(event);
});
const healthyHerbs = [
	'firmalife:spice/basil_leaves',
	'firmalife:plant/bay_laurel',
	'firmalife:plant/cardamom',
	'firmalife:plant/cilantro',
	'firmalife:plant/cumin',
	'firmalife:plant/oregano',
	'firmalife:plant/pimento',
	'firmalife:plant/vanilla'
];
function herbEat(event){
	var { player, item, hand } = event;
    let tfcData = player.data['tfc:player_data']

	if (!healthyHerbs.includes(item.id)) return;

	if (hand !== 'MAIN_HAND') return;
	

	var pData = player.persistentData;
	var now = Date.now();


	var lastWash = pData.getLong('last_herb_eat');
	if (now - lastWash < (1000*10)) {
		player.tell(`You cant stomach another herb for a while.`);
		return;
	}
	pData.putLong('last_herb_eat', now);
	
	if (pData.getLong('herbsModifier') <= 24000){
		pData.putLong('herbsModifier', pData.getLong('herbsModifier') + 1200); 
		player.tell('You eat the herb.');
		if (!player.isCreative()) {
			item.count -= 1;
		}
	}
	else {
		player.tell(`You cant stomach anymore herbs.`);
	}


}
function soapWash(event){
	var { player, item, hand } = event;
    let tfcData = player.data['tfc:player_data']
	if(item.id !== 'supplementaries:soap') return;
	if (hand !== 'MAIN_HAND') return;
	if (!player.isInWater()) return; // must be standing/swimming in water to wash
	

	var pData = player.persistentData;
	var now = Date.now();


	var lastWash = pData.getLong('last_hand_wash');
	if (now - lastWash < 1000) return;
	pData.putLong('last_hand_wash', now);
	
	if (pData.getLong('soapModifier') <= 600){
		pData.putLong('soapModifier', 660); //11 minutes of clean hands
		player.tell('You wash your hands clean.');
	
		if (!player.isCreative()) {
			item.count -= 1;
		}
	}
	else {
		player.tell(`Your hands are already clean.`);
	}

}
function getInfectedCount(key,server){
	var infectedTemp = 0;

	//console.log(`GETTING INFECTED COUNT for ${key}`);

	server.players.forEach(player => {
		//console.log(`checking ${player.username} has ${player.persistentData.getString('sickness_name')}`)
		if (player.persistentData.getBoolean('is_sick') && player.persistentData.getString('sickness_name') == Pathogens[key].name) {
			infectedTemp += 1;
		}
	}) 

	//console.log(`INFECTED COUNT for ${key} IS ${infectedTemp}`);

	Pathogens[key].infected_count = infectedTemp;

	//console.log(`CHECKING INFECTED COUNT for ${key} IS ${Pathogens[key].infected_count}`);
	return (infectedTemp);
}
function setCureTimer(player, severity){
	var pData = player.persistentData;
	var baseInterval = 60*15;
	var jitter = Math.floor(Math.random() * 60*30);
	pData.putInt('pathogen_cure_countdown', baseInterval + jitter + (severity*10));
}
function createPathogen(event, player, pathoName, severity, virality){
	loadPathogens(event.server);


	var key = String(pathoName);
	Pathogens[key] = new PathogenClass(String(pathoName), severity, virality, player.name.string);

	Pathogens[key].infectPlayer(player);

	//player.tell(Pathogens[key]);
	console.log(`Created pathogen: (key: ${key}, name: '${pathoName}' severity: ${severity}, virality: ${virality}, paitent 0: ${player.name.string})`);

	player.runCommandSilent(`effect clear ${player.name.string} minecraft:unluck`)
	
	savePathogens(event.server);
	pruneInactivePathogens(event.server);
}

ItemEvents.foodEaten(event => {
	const { player, server, item} = event;

    var pData = player.persistentData;

	if(item.hasTag('tfc:foods/raw_meats')||item.hasTag('forge:meat_uncooked')){
		var chance = (Math.random()*(2*(pData.getLong('hygiene'))/100));
		if(chance >= 0.15){
			var severity = Math.round(5 * Math.pow(Math.random(), 3)*100)/100;
			var virality = Math.round(5 * Math.pow(Math.random(), 3)*100)/100;

			if(severity <= 1){
				player.tell('You feel bad after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			} else if (severity > 1 && severity <= 2){
				player.tell('You feel really bad');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			} else if (severity > 2 && severity <= 3){
				player.tell('You feel horrible after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			} else if (severity > 3 && severity <= 4){
				player.tell('You feel really horrible after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			}else if (severity > 3 && severity <= 4){
				player.tell('You feel like your going to die after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			}else {
				player.tell('uh oh something weird (ERROR)');
			}
		} else{
			player.tell('You feel okay after eating that.');
		}
	}
	if(item.hasTag('forge:dough')){
		var chance = (Math.random()*(2*(pData.getLong('hygiene'))/100));
		if(chance >= 0.02){
			var severity = Math.round(5 * Math.pow(Math.random(), 3)*100)/100;
			var virality = Math.round(5 * Math.pow(Math.random(), 3)*100)/100;
			
			if(severity <= 1){
				player.tell('You feel bad after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			} else if (severity > 1 && severity <= 2){
				player.tell('You feel really bad');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			} else if (severity > 2 && severity <= 3){
				player.tell('You feel horrible after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			} else if (severity > 3 && severity <= 4){
				player.tell('You feel really horrible after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			}else if (severity > 3 && severity <= 4){
				player.tell('You feel like your going to die after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity, virality);
			}else {
				player.tell('uh oh something weird (ERROR)');
			}
		} else{
			player.tell('You feel okay after eating that.');
		}
	}
});
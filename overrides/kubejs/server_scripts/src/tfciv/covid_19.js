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
				loadedPathogens[key].patient_0,
				loadedPathogens[key].infected_count
			);
			//console.log(`pathogen ${key} loaded`);
		}
		console.log(`LOADED ${Object.keys(loadedPathogens).length} pathogens from persistent data`);
	} catch (e) {
		console.log('ERROR Failed to parse stored pathogens: ' + e);
	}
}

function savePathogens(server) {
	var pathogensToSave = {};
	try{
		for (var key of Object.keys(Pathogens)) {
			getInfectedCount(key);
			pathogensToSave[key] = {
				name: Pathogens[key].name,
				severity: Pathogens[key].severity,
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

function PathogenClass(name, severity, patient_0, infected_count) {
	this.name = name;
	this.severity = severity;
	this.patient_0 = patient_0;
	this.infected_count = infected_count;
}

PathogenClass.prototype.infectPlayer = function(player) {
	var pData = player.persistentData;
	pData.putString('sickness_name', this.name);
	pData.putDouble('sickness_severity', this.severity);
	pData.putBoolean('is_sick', true);
	pData.putDouble('infected_count', 1);

	setCureTimer(player,this.severity);

	player.tell(`You have contracted ${this.name}!`);
};

PathogenClass.prototype.curePlayer = function(player) {
	var pData = player.persistentData;
	pData.putString('sickness_name', 'none');
	pData.putDouble('sickness_severity', 0);
	pData.putBoolean('is_sick', false);
	player.tell('You feel better now');
};

PathogenClass.prototype.damage_check = function(player) {
	var pData = player.persistentData;
	if (!pData.getBoolean('is_sick')) return;

	var savedSeverity = pData.getDouble('sickness_severity');
	var savedName = pData.getString('sickness_name');
	var chance = Math.random();

	var sickRoll = chance * savedSeverity;
	
	player.tell(sickRoll);

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

	/*
    const nearbyPlayers = server.players.filter(p => {
        return p.username !== player.username && player.distanceToEntity(p) <= radius;
    });

    // Notify the triggering player about who is nearby
    if (nearbyPlayers.length > 0) {
        let names = nearbyPlayers.map(p => p.displayName).join(', ');
        player.tell(`Players nearby: ${names}`);
    } else {
        player.tell("No other players are nearby.");
    }
	*/
};

ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event;

	event.register(
		Commands.literal('pathogen')

		.requires(source => source.hasPermission(2)) // Check if the player has operator privileges
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
							ctx.source.player.tell(`${targetPlayer.username}'s cough is in ${targetPlayer.persistentData.getDouble('pathogen_check_countdown')}`);
							ctx.source.player.tell(`${targetPlayer.username}'s cure is in ${targetPlayer.persistentData.getDouble('pathogen_cure_countdown')}`);
							return 1;
						})
				)
		)
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
								.executes(ctx => {
									loadPathogens(ctx.source.server);

									var name = Arguments.STRING.getResult(ctx, 'name');
									var severity = Arguments.DOUBLE.getResult(ctx, 'severity');

									if (severity < 0 || severity > 5) {
										ctx.source.player.tell(`Severity must be between 0.0 and 5.0`);
										return 0;
									}

									var key = name.toLowerCase().replace(/\s+/g, '_');
									Pathogens[key] = new PathogenClass(name, severity, 'lab');
									savePathogens(ctx.source.server);

									ctx.source.player.tell(`Created pathogen '${name}' (key: ${key}, severity: ${severity})`);
									return 1;
								})
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
						ctx.source.player.tell(`- ${key}: '${p.name}', severity ${p.severity}, patient 0: ${p.patient_0}, infected: ${getInfectedCount(key, ctx.source.server)}`);
					}
					return 1;
				})
		)
	)
})


ServerEvents.tick(event => {
	if (event.server.tickCount % 20 !== 0) return; // only evaluate once per second

	event.server.players.forEach(player => {
		var pData = player.persistentData;

		//bad water thing
		if (player.potionEffects.isActive('minecraft:unluck')) {
			var chance = Math.random();
			//player.tell(chance);
			if(chance <= 0.05){
				var severity =  Math.round((Math.sqrt(Math.random()*25))*100)/100;

				if(severity <= 1){
					player.tell('That water was gross');
					createPathogen(event, player, Math.round(Math.random()*10000), severity);
				} else if (severity > 1 && severity <= 2){
					player.tell('That water was really gross');
					createPathogen(event, player, Math.round(Math.random()*10000), severity);
				} else if (severity > 2 && severity <= 3){
					player.tell('That water was horrible');
					createPathogen(event, player, Math.round(Math.random()*10000), severity);
				} else if (severity > 3 && severity <= 4){
					player.tell('That water was completely disgusting');
					createPathogen(event, player, Math.round(Math.random()*10000), severity);
				} else if (severity > 4 && severity <= 5){
					player.tell('That water was completely disgusting');
					createPathogen(event, player, Math.round(Math.random()*10000), severity);
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

function getInfectedCount(key,server){
	var infectedTemp = 0;
	server.players.forEach(player => {
		if (!player.persistentData.getBoolean('is_sick') && player.persistentData.getString('name') == Pathogens[key].name) {
			infectedTemp += 1;
		}
	})
	Pathogens[key].infected_count = infectedTemp;
	return (infectedTemp);
}
function setCureTimer(player, severity){
	var pData = player.persistentData;
	var baseInterval = 60*15;
	var jitter = Math.floor(Math.random() * 60*30);
	pData.putInt('pathogen_cure_countdown', baseInterval + jitter + (severity*10));

}
function createPathogen(event, player, pathoName, severity){
	loadPathogens(event.server);


	var key = String(pathoName);
	Pathogens[key] = new PathogenClass(String(pathoName), severity, player.name.string);

	Pathogens[key].infectPlayer(player);

	//player.tell(Pathogens[key]);
	console.log(`Created pathogen: (key: ${key}, name: '${pathoName}' severity: ${severity}, paitent 0: ${player.name.string})`);

	player.runCommandSilent(`effect clear ${player.name.string} minecraft:unluck`)
	
	savePathogens(event.server);
}

ItemEvents.foodEaten(event => {
	const { player, server, item} = event;
    
	if(item.hasTag('tfc:foods/raw_meats')||item.hasTag('forge:meat_uncooked')){
		if(Math.random() <= 0.15){
			var severity =  Math.sqrt(Math.random()*25);

			if(severity <= 1){
				player.tell('You feel bad after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			} else if (severity > 1 && severity <= 2){
				player.tell('You feel really bad');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			} else if (severity > 2 && severity <= 3){
				player.tell('You feel horrible after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			} else if (severity > 3 && severity <= 4){
				player.tell('You feel really horrible after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			}else if (severity > 3 && severity <= 4){
				player.tell('You feel like your going to die after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			}else {
				player.tell('uh oh something weird (ERROR)');
			}
		} else{
			player.tell('You feel okay after eating that.');
		}
	}
	if(item.hasTag('forge:dough')){
		if(Math.random() <= 0.05){
			var severity = Math.sqrt(Math.random()*25);
			
			if(severity <= 1){
				player.tell('You feel bad after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			} else if (severity > 1 && severity <= 2){
				player.tell('You feel really bad');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			} else if (severity > 2 && severity <= 3){
				player.tell('You feel horrible after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			} else if (severity > 3 && severity <= 4){
				player.tell('You feel really horrible after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			}else if (severity > 3 && severity <= 4){
				player.tell('You feel like your going to die after eating that');
				createPathogen(event, player, Math.round(Math.random()*10000), severity);
			}else {
				player.tell('uh oh something weird (ERROR)');
			}
		} else{
			player.tell('You feel okay after eating that.');
		}
	}
});
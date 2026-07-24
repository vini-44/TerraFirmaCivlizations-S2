const Pathogens = {};
let pathogensLoaded = false;

function loadPathogens(server) {
    if (pathogensLoaded || !server) return;
    pathogensLoaded = true;

    const raw = server.persistentData.getString('custom_pathogens');
    if (!raw) return;

    try {
        const loadedPathogens = JSON.parse(raw);
        for (const key of Object.keys(loadedPathogens)) {
            Pathogens[key] = new PathogenClass(
                loadedPathogens[key].name,
                loadedPathogens[key].severity,
                loadedPathogens[key].patient_0
            );
        }
        console.log(`Loaded ${Object.keys(loadedPathogens).length} pathogens from persistent data`);
    } catch (e) {
        console.log('ERROR Failed to parse stored pathogens: ' + e);
    }
}

function savePathogens(server) {
    const pathogensToSave = {};
    for (const key of Object.keys(Pathogens)) {
        pathogensToSave[key] = {
            name: Pathogens[key].name,
            severity: Pathogens[key].severity,
            patient_0: Pathogens[key].patient_0
        };
    }
    server.persistentData.putString('custom_pathogens', JSON.stringify(pathogensToSave));
}

// Covers a real server startup
ServerEvents.loaded(event => {
    loadPathogens(event.server);
});



function PathogenClass(name, severity, patient_0) {
    this.name = name;
    this.severity = severity;
    this.patient_0 = patient_0;
}
PathogenClass.prototype.infectPlayer = function(player) {
    const pData = player.persistentData;
    pData.putString('sickness_name', this.name);
    pData.putDouble('sickness_severity', this.severity);
    pData.putBoolean('is_sick', true);

    player.tell(`You have contracted ${this.name}!`);
};
PathogenClass.prototype.curePlayer = function(player) {
    const pData = player.persistentData;
    pData.putString('sickness_name', 'none');
    pData.putDouble('sickness_severity', 0);
    pData.putBoolean('is_sick', false);
	player.tell('You feel better now');
};

PathogenClass.prototype.damage_check = function(player) {
	const pData = player.persistentData;
	if (!pData.getBoolean('is_sick')) return;

	let savedSeverity = pData.getDouble('sickness_severity');
	let savedName = pData.getString('sickness_name');
	let chance = Math.random(); 
	
	// Corrected comparison check
	if (chance <= savedSeverity) { 
		console.log(`${chance} was less than or equal to ${savedSeverity}`);
		player.tell(`The ${savedName} wracks your body!`);
		player.damage(2.0); // Deals 1 heart of damage
	} else { 
		player.tell(`${savedName} makes you cough.`);
		console.log(`Pathogen ${savedName} resisted. Roll: ${chance} was over Severity: ${savedSeverity}`); 
	} 
} 


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

									let targetPlayer = Arguments.PLAYER.getResult(ctx, 'target');
									let pathogenKey = Arguments.STRING.getResult(ctx, 'pathogenName');

									const pathogen = Pathogens[pathogenKey];
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
							let targetPlayer = Arguments.PLAYER.getResult(ctx, 'target');

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
							let targetPlayer = Arguments.PLAYER.getResult(ctx, 'target');
							if(!targetPlayer.persistentData.getBoolean('is_sick')){
								ctx.source.player.tell (`${targetPlayer.username} is not sick`)
								return 1;
							}
							ctx.source.player.tell(` ${targetPlayer.username} sick state is ${targetPlayer.persistentData.getBoolean('is_sick')}`);
							ctx.source.player.tell(` ${targetPlayer.username} has ${targetPlayer.persistentData.getString('sickness_name')}`);
							ctx.source.player.tell(` ${targetPlayer.username}'s sickness is severity ${targetPlayer.persistentData.getDouble('sickness_severity')}`);
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

									let name = Arguments.STRING.getResult(ctx, 'name');
									let severity = Arguments.DOUBLE.getResult(ctx, 'severity');

									if (severity < 0 || severity > 1) {
										ctx.source.player.tell(`Severity must be between 0.0 and 1.0`);
										return 0;
									}

									const key = name.toLowerCase().replace(/\s+/g, '_');
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
				
				const keys = Object.keys(Pathogens);

				if (!keys.length) {
					ctx.source.player.tell('No pathogens exist yet.');
					return 1;
				}

				ctx.source.player.tell(`Known pathogens (${keys.length}):`);
				for (const key of keys) {
					const p = Pathogens[key];
					ctx.source.player.tell(`- ${key}: '${p.name}', severity ${p.severity}, patient 0: ${p.patient_0}`);
				}
				return 1;
			})
		)
    )
})
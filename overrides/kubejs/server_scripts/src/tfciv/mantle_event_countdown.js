let activeCountdowns = {}; // { [id]: { remaining, pos, x, z, subtitle } }
let activeEmitters = {};   // { [id]: { x, z, top, endY } }

let EMITTER_RISE_SPEED = 10; // blocks per second
let EMITTER_INTERVAL_SECONDS = 0.5;
let EMITTER_INTERVAL_TICKS = Math.max(1, Math.round(EMITTER_INTERVAL_SECONDS * 20));
let RISE_PER_INTERVAL = EMITTER_RISE_SPEED * EMITTER_INTERVAL_SECONDS;
let COLUMN_STEP = 2;

let MILESTONE_SECONDS = [30 * 60, 5 * 60]; // 1800, 300 — extend this list for more checkpoints

ServerEvents.commandRegistry(event => {
	let { commands: Commands, arguments: Arguments } = event;

	event.register(
		Commands.literal('countdown')
			.requires(source => source.hasPermission(2))
			.then(
				Commands.argument('id', Arguments.STRING.create(event))
					.then(
						Commands.argument('name', Arguments.STRING.create(event))
							.then(
								Commands.argument('cords', Arguments.BLOCK_POS.create(event))
									.then(
										Commands.argument('time', Arguments.INTEGER.create(event))
											.then(
												Commands.argument('color', Arguments.STRING.create(event))
													.then(
														Commands.argument('subtitle', Arguments.STRING.create(event))
															.executes(ctx => {
																let server = ctx.source.server;

																let id = Arguments.STRING.getResult(ctx, 'id');
																let name = Arguments.STRING.getResult(ctx, 'name');
																let time = Arguments.INTEGER.getResult(ctx, 'time');
																let color = Arguments.STRING.getResult(ctx, 'color');
																let subtitle = Arguments.STRING.getResult(ctx, 'subtitle');

																let blockPos = Arguments.BLOCK_POS.getResult(ctx, 'cords');
																let x = blockPos.getX();
																let z = blockPos.getZ();
																let pos = `${x} ${blockPos.getY()} ${z}`;

																let validColors = ['pink', 'blue', 'red', 'green', 'yellow', 'purple', 'white'];
																if (!validColors.includes(color)) {
																	ctx.source.sendFailure(Text.of(`Invalid color. Choose from: ${validColors.join(', ')}`));
																	return 0;
																}
																if (time <= 0) {
																	ctx.source.sendFailure(Text.of('Time must be greater than 0'));
																	return 0;
																}
																if (activeCountdowns[id]) {
																	ctx.source.sendFailure(Text.of(`A countdown with id "${id}" already exists`));
																	return 0;
																}

																server.runCommandSilent(`bossbar add ${id} "${name}"`);
																server.runCommandSilent(`bossbar set minecraft:${id} max ${time}`);
																server.runCommandSilent(`bossbar set minecraft:${id} value ${time}`);
																server.runCommandSilent(`bossbar set minecraft:${id} color ${color}`);
																server.runCommandSilent(`bossbar set minecraft:${id} players @a`);

																activeCountdowns[id] = { remaining: time, pos: pos, x: x, z: z, subtitle: subtitle };

																ctx.source.sendSuccess(Text.of('Timer Created'), false);
																return 1;
															})
													)
											)
									)
							)
					)
			)
	);
});

ServerEvents.tick(event => {
	let server = event.server;
	let tick = server.tickCount;

	if (tick % 20 === 0) {
		for (let id of Object.keys(activeCountdowns)) {
			let data = activeCountdowns[id];
			data.remaining -= 1;

			if (data.remaining <= 0) {
				server.runCommandSilent(`bossbar remove minecraft:${id}`);
				server.runCommandSilent(`playsound tfcthermaldeposits:earthquake master @a ${data.pos} 100`);

				server.runCommandSilent(`title @a subtitle {"text":"${data.subtitle}","color":"white"}`);
				server.runCommandSilent(`title @a title {"text":"⚠ WARNING ⚠","color":"red","bold":true}`);

				activeEmitters[id] = { x: data.x, z: data.z, top: 50, endY: 150 };

				delete activeCountdowns[id];
			} else {
				server.runCommandSilent(`bossbar set minecraft:${id} value ${data.remaining}`);

				if (MILESTONE_SECONDS.includes(data.remaining)) {
					let minutes = data.remaining / 60;
					let label = `${minutes} minute${minutes === 1 ? '' : 's'} remaining`;
					server.runCommandSilent(`title @a title {"text":"${label}","color":"yellow","bold":true}`);
				server.runCommandSilent(`title @a subtitle {"text":"${data.subtitle}","color":"white"}`);
				}
			}
		}
	}

	if (tick % EMITTER_INTERVAL_TICKS === 0) {
		for (let id of Object.keys(activeEmitters)) {
			let em = activeEmitters[id];

			for (let y = 50; y <= em.top; y += COLUMN_STEP) {
				server.runCommandSilent(`particle tfcthermaldeposits:pyroclastic_bomb_emitter ${em.x} ${y} ${em.z} 0.3 0.3 0.3 0.01 20`);
			}
			server.runCommandSilent(`playsound createbigcannons:shell_explosion master @a ${em.x} ${em.top} ${em.z} 100`);

			if (em.top >= em.endY) {
				delete activeEmitters[id];
			} else {
				em.top = Math.min(em.top + RISE_PER_INTERVAL, em.endY);
			}
		}
	}
});
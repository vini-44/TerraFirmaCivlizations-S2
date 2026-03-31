
function getPlayerOrigin(player)
{
	const full = player.nbt;
	const caps = full.get("ForgeCaps")
    if (!caps) return

    const originsCap = caps.get("origins:origins")
    if (!originsCap) return;

    const originsData = originsCap.get("Origins")
	if (!originsData) return;

    return originsData.getString("origins:origin")
}

PlayerEvents.tick((event) => {
	let player = event.player;

    if (player.age % 10 !== 0) {
		return;
	}

    let data = player.persistentData;

    if (!data.originInitialized)
    {
        let origin = getPlayerOrigin(player);
        if (origin)
        {
            data.originInitialized = true;

            let spawn = null
            if (data.originSpawns && data.originSpawns[origin]) {
                spawn = data.originSpawns[origin]
                player.teleportTo(
                    spawn.x + 0.5,
                    spawn.y,
                    spawn.z + 0.5
                )
            }
        }
    }
});


PlayerEvents.respawned(event => {
    
    const forcedSpawn = event.player.isRespawnForced()
    if (!forcedSpawn)
    {
        return;
    } 

	let origin = getPlayerOrigin(event.player);
	if (!origin) return

    const data = event.server.persistentData
    
    let spawn = null
    if (data.originSpawns && data.originSpawns[origin]) {
        spawn = data.originSpawns[origin]
    }

    if (!spawn) {
        console.log(`No spawn found for origin: ${origin}`)
        return
    }

    event.player.teleportTo(
        spawn.x + 0.5,
        spawn.y,
        spawn.z + 0.5
    )
});

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('tfciv_set_origin_spawn')
            .requires(source => source.hasPermission(2)) // OP level 2+
            .then(
                Commands.argument('origin_name', Arguments.STRING.create(event))
                    .then(
                        Commands.argument('pos', Arguments.BLOCK_POS.create(event))
                            .executes(ctx => {
                                const source = ctx.source
                                const player = source.player
                                const data = source.server.persistentData;

                                if (!player) return 0

                                const originName = Arguments.STRING.getResult(ctx, 'origin_name')
                                const pos = Arguments.BLOCK_POS.getResult(ctx, 'pos')

                                player.tell(`Origin '${originName}' spawn set to ${pos.x}, ${pos.y}, ${pos.z}`)

                                if ( !data.originSpawns ) data.originSpawns = {};

                                data.originSpawns["origins:"+originName] = {
                                    x: pos.x,
                                    y: pos.y,
                                    z: pos.z
                                }

                                return 1
                            })
                    )
            )
    )
})
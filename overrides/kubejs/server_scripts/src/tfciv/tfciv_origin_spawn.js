
function getPlayerOrigin(player)
{
	const full = player.nbt;
	const caps = full.get("ForgeCaps")
    //console.log(caps)
    if (!caps) return

    const originsCap = caps.get("origins:origins")
    //console.log(originsCap)
    if (!originsCap) return;

    const originsData = originsCap.get("Origins")
    //console.log(originsData)
	if (!originsData) return;

    return originsData.getString("origins:origin")
}

PlayerEvents.tick((event) => {
	let player = event.player;

    if (player.age % 100 !== 0) {
		return;
	}

    let data = player.persistentData;
    let serverData =  event.server.persistentData

    //event.player.tell(event.player.persistentData.originInitialized)
    
    if (!data.originInitialized)
    {
        //console.log(`Initializing origin for `);
        let origin = getPlayerOrigin(player);
        if (origin)
        {
            console.log(`origin found ${origin}`);

            let spawn = null

            //console.log(serverData.originSpawns)
            //console.log(serverData.originSpawns[origin])

            if (serverData.originSpawns && serverData.originSpawns[origin]) {
                spawn = serverData.originSpawns[origin]
                //console.log(`teleporting`);
                player.teleportTo(
                    spawn.x + 0.5,
                    spawn.y,
                    spawn.z + 0.5
                )
                data.originInitialized = true;
            }else 
            if (!spawn) {
                console.log(`No spawn found for ${origin}`)
                return
            }
        }
    }
});


PlayerEvents.respawned(event => {
    //event.player.tell(`respawning at ${event.player.getRespawnPosition()}`)
    const forcedSpawn = event.player.isRespawnForced()
    if (!forcedSpawn && event.player.getRespawnPosition() !== null)
    {
        //event.player.tell(`forced respawn`)
        return;
    } 

	let origin = getPlayerOrigin(event.player);
    //event.player.tell(`Your origin is`)
    //console.log(`${origin}`)
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
            .requires(source => {
                const player = source.getEntity ? source.getEntity() : null;
                return player != null && player.hasPermissions(2);
            })
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
BlockEvents.placed('tfc:crop/rice', event => {
    event.player.tell(event.level.getBiome(event.block.pos));
    event.player.tell(event.level.canSeeSky(event.block.pos));

    if (event.block.x < 0) {
        event.player.tell('You cannot plant rice in the western hemisphere.')
        event.player.give('tfc:crop/rice')
        event.cancel()
    }



    if (TFC.climate.getAverageTemperature(event.level, event.block.pos) < 5) {
        event.player.tell('The temperature is too low to plant rice here.')
        event.player.give('tfc:crop/rice')
        event.cancel()
    }
})
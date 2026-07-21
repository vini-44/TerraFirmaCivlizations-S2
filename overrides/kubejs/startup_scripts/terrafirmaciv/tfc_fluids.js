StartupEvents.registry('fluid', event => {
    event.create('terrafirmacivilizations:magma_liquid')
        // --- Visuals ---
        .thickTexture(0xB22000)         // Deep reddish-orange (darker than lava's 0xFF4500)
        .bucketColor(0xB22000)

        // --- Physical Properties ---
        .viscosity(20000)               // Much thicker than lava (lava = 10000)
        .density(4500)                  // Heavier/denser than lava (lava = 3000)
        .temperature(1600)              // Hotter than lava (lava = 1300K)
        .luminosity(13)                 // Slightly dimmer glow than lava (lava = 15)
                                        // — deep magma buried underground, less radiant
})
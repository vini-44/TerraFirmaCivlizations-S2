CDGEvents.oilAmount((event) => {
    let x = event.chunkPos.x;
    let z = event.chunkPos.z;
    let seed = event.seed;
    let biomes = event.biomes;

    // "Southwest half": map split along the NW-SE diagonal (x = z).
    // Chunks south/west of that line (z > x) count as southwest.
    let isSouthwestHalf = z > x;

    // Ocean check - substring match covers TFC's ocean variants
    // (tfc:ocean, tfc:deep_ocean, tfc:ocean_reef, etc.) and vanilla ones.
    let isOcean = false;
    for (let i = 0; i < biomes.length; i++) {
        if (biomes[i].includes("ocean")) {
            isOcean = true;
            break;
        }
    }

    let eligible = isSouthwestHalf || isOcean;

    // --- deterministic hash: seed + chunk coords + salt -> 0..1 float ---
    function hashToFloat(seed, x, z, salt) {
        let h = (seed ^ Math.imul(x, 0x1f1f1f1f) ^ Math.imul(z, 0x2545F491) ^ salt) | 0;
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        h ^= h >>> 16;
        return (h >>> 0) / 4294967296; // 0 to 1
    }

    if (eligible) {
        let chanceRoll = hashToFloat(seed, x, z, 1);
        let hasOil = chanceRoll < 0.01; // 1 in 100

        if (hasOil) {
            let amountRoll = hashToFloat(seed, x, z, 2);
            let amount = Math.floor(5000 + amountRoll * (75000 - 5000));
            event.success(amount);
        } else {
            event.success(0);
        }
    } else {
        event.success(0);
    }
});
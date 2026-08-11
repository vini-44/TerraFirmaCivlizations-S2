CDGEvents.oilAmount((event) => {
    let x = event.chunkPos.x;
    let z = event.chunkPos.z;
    let seed = event.seed;
    let biomes = event.biomes;
    // "Southwest half": map split along the NW-SE diagonal (x = z).
    let isSouthwestHalf = z > x;

    let isOcean = false;
    for (let i = 0; i < biomes.length; i++) {
        if (biomes[i].includes("ocean")) {
            isOcean = true;
            break;
        }
    }

    let eligible = isSouthwestHalf || isOcean;

    // --- base hash: seed + coords + salt -> 0..1 ---
    function hashToFloat(seed, x, z, salt) {
        let h = (seed ^ Math.imul(x, 0x1f1f1f1f) ^ Math.imul(z, 0x2545F491) ^ salt) | 0;
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        h ^= h >>> 16;
        return (h >>> 0) / 4294967296;
    }

    function smoothstep(t) { return t * t * (3 - 2 * t); }

    // --- value noise: interpolates between a coarse lattice for smooth blobs ---
    function valueNoise2D(seed, x, z, scale, salt) {
        //console.log(seed);
        //console.log(x);
        //console.log(z);
        let fx = x / scale, fz = z / scale;
        let ix0 = Math.floor(fx), iz0 = Math.floor(fz);
        let ix1 = ix0 + 1, iz1 = iz0 + 1;
        let tx = smoothstep(fx - ix0), tz = smoothstep(fz - iz0);

        let v00 = hashToFloat(seed, ix0, iz0, salt);
        let v10 = hashToFloat(seed, ix1, iz0, salt);
        let v01 = hashToFloat(seed, ix0, iz1, salt);
        let v11 = hashToFloat(seed, ix1, iz1, salt);

        let vx0 = v00 + (v10 - v00) * tx;
        let vx1 = v01 + (v11 - v01) * tx;
        return vx0 + (vx1 - vx0) * tz; // ~0 to 1, but bell-shaped not uniform
    }

    if (eligible) {
        let scale = 16;        // blob size in chunks - bigger = bigger, more spread out clumps
        let threshold = 0.9; // tuned for ~1% coverage at scale=8

        let noiseVal = valueNoise2D(seed, x, z, scale, 1);
        console.log(noiseVal);
        if (noiseVal > threshold) {
            // how deep into the blob are we? 0 at the edge, 1 at the richest point
            let depth = (noiseVal - threshold) / (1 - threshold);
            let amount = Math.floor(5000 + depth * (75000 - 5000));
            event.success(amount);
        } else {
            event.success(0);
        }
    } else {
        event.success(0);
    }
});
/*
BlockEvents.placed('tfc:crop/PLANT_NAME', event => {
    let bad_biomes = []
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);
    
    fertilityCheck(
        event, 'tfc:crop/PLANT_NAME', bad_biomes, true,
        heat_levels[0], heat_levels[7], rain_high_levels[0], rain_low_levels[7]
    );
})
*/
const ocean_biomes = ['tfc:ocean', 'tfc:deep_ocean' ,'tfc:deep_ocean_trench' , 'tfc:ocean_reef', 'tfc:shore', 'tfc:tidal_flats'];
const mountain_biomes = ['tfc:mountain', 'tfc:mountain_lake','tfc:oceanic_mountain_lake','tfc:oceanic_mountain', 'tfc:old_mountains', 'tfc:old_mountains_lake'];
const volcanic_biomes = ['tfc:volcanic_mountains', 'tfc:volcanic_mountain_lake', 'tfc:volcanic_oceanic_mountains', 'tfc:volcanic_oceanic_mountain_lake'];

const heat_levels = [
    -20, //extreme_cold 0
    -10, //very_cold 1
    -5, //mid_cold 2
    0, //low_cold 3
    5, //normal 4
    10, //low_hot 5
    20, //very_hot 6
    30 //extreme_hot 7
];
const rain_levels = [
    0, //total dry 0
    50, //very dry 1
    100, //low dry 2
    200, //low normal 3
    350, //high normal 4
    400, //low_wet 5
    450, //very_wet 6
    500 //extreme_wet 7
];

// actual function
let fertilityCheck = (event, plant, needs_sun, invalid_biomes, temp_range_low, temp_range_high, rain_range_low, rain_range_high) => {

    var failed = false; 
    
    let local_biome = String(event.level.getBiome(event.block.pos).key().location()).trim();

    if (!event.level.canSeeSky(event.block.pos) && needs_sun == true){
        event.player.tell('Plants need the sun.');
        failed = true; 
    }

    //event.player.tell(local_biome);
    //event.player.tell(invalid_biomes);
    //event.player.tell(typeof local_biome);
    //event.player.tell(invalid_biomes.includes(local_biome));

    if (invalid_biomes.includes(local_biome)){
        if (ocean_biomes.includes(local_biome)){
            event.player.tell('The ocean salt makes this area unsuitable for this crop.');
        }
        else if (mountain_biomes.includes(local_biome)){
            event.player.tell('The mountainous surroundings make this area unsuitable for this crop.');
        }
        else {event.player.tell('This plant does not grow in this biome.');}
        failed = true; 
    }

    
    //event.player.tell('Avg Temp: ' + TFC.climate.getAverageTemperature(event.level, event.block.pos)); 
    if (TFC.climate.getAverageTemperature(event.level, event.block.pos) > temp_range_high){
        event.player.tell('This crop needs less than ' + temp_range_high + ' C average temperature.');
        failed = true; 
    }
    if(TFC.climate.getAverageTemperature(event.level, event.block.pos) < temp_range_low){ 
        event.player.tell('This crop needs at least ' + temp_range_low + ' C average temperature.');
        failed = true; 
    }

    //event.player.tell('Avg Rainfall: ' + TFC.climate.getAverageRainfall(event.level, event.block.pos));
    if (TFC.climate.getAverageRainfall(event.level, event.block.pos) > rain_range_high){
        event.player.tell('This crop needs less than ' + rain_range_high + ' mm of rainfall');
        failed = true; 
    }
    if(TFC.climate.getAverageRainfall(event.level, event.block.pos) < rain_range_low){  
        event.player.tell('This crop needs at least ' + rain_range_low + ' mm of rainfall');
        failed = true; 
    }

    if (failed==true){
        event.player.give(plant);
        event.cancel();
    }
}

//crops other
BlockEvents.placed('textile:crop/cotton', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'textile:crop/cotton', false, bad_biomes, 
        heat_levels[5], heat_levels[7], rain_levels[4], rain_levels[7]
    );
})

//crops GRAINS
BlockEvents.placed('tfc:crop/barley', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/barley', true, bad_biomes, 
        heat_levels[2], heat_levels[6], rain_levels[3], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/oat', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/oat', true, bad_biomes, 
        heat_levels[3], heat_levels[7], rain_levels[4], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/rye', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    //bad_biomes = bad_biomes.concat(mountain_biomes);
    //bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/rye', true, bad_biomes, 
        heat_levels[0], heat_levels[6], rain_levels[3], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/maize', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/maize', true, bad_biomes, 
        heat_levels[6], heat_levels[7], rain_levels[5], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/wheat', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/wheat', true, bad_biomes, 
        heat_levels[3], heat_levels[6], rain_levels[4], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/rice', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/rice', false, bad_biomes, 
        heat_levels[5], heat_levels[7], rain_levels[6], rain_levels[7]
    );
})

//VEGGIES
BlockEvents.placed('tfc:crop/beet', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/beet', false, bad_biomes, 
        heat_levels[2], heat_levels[5], rain_levels[3], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/cabbage', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    //bad_biomes = bad_biomes.concat(mountain_biomes);
    //bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/cabbage', false, bad_biomes, 
        heat_levels[0], heat_levels[5], rain_levels[4], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/carrot', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/carrot', false, bad_biomes, 
        heat_levels[3], heat_levels[6], rain_levels[3], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/garlic', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    //bad_biomes = bad_biomes.concat(mountain_biomes);
    //bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/garlic', false, bad_biomes, 
        heat_levels[0], heat_levels[5], rain_levels[3], rain_levels[5]
    );
})
BlockEvents.placed('tfc:crop/green_bean', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/green_bean', false, bad_biomes, 
        heat_levels[3], heat_levels[6], rain_levels[4], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/potato', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/potato', false, bad_biomes, 
        heat_levels[2], heat_levels[6], rain_levels[4], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/pumpkin', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/pumpkin', false, bad_biomes, 
        heat_levels[2], heat_levels[6], rain_levels[3], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/melon', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/melon', false, bad_biomes, 
        heat_levels[3], heat_levels[7], rain_levels[5], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/red_bell_pepper', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/red_bell_pepper', false, bad_biomes, 
        heat_levels[5], heat_levels[7], rain_levels[5], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/yellow_bell_pepper', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/yellow_bell_pepper', false, bad_biomes, 
        heat_levels[5], heat_levels[7], rain_levels[5], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/onion', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/onion', false, bad_biomes, 
        heat_levels[3], heat_levels[7], rain_levels[3], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/soybean', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/soybean', false, bad_biomes, 
        heat_levels[4], heat_levels[7], rain_levels[5], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/squash', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/squash', false, bad_biomes, 
        heat_levels[3], heat_levels[6], rain_levels[3], rain_levels[6]
    );
})
BlockEvents.placed('tfc:crop/sugarcane', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/sugarcane', false, bad_biomes, 
        heat_levels[6], heat_levels[7], rain_levels[5], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/tomato', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/tomato', false, bad_biomes, 
        heat_levels[3], heat_levels[7], rain_levels[4], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/jute', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/jute', false, bad_biomes, 
        heat_levels[4], heat_levels[7], rain_levels[4], rain_levels[7]
    );
})
BlockEvents.placed('tfc:crop/papyrus', event => {
    let bad_biomes = [];
    //const special_bad_biomes = [];
    //bad_biomes.push(special_bad_biomes);

    bad_biomes = bad_biomes.concat(ocean_biomes);
    bad_biomes = bad_biomes.concat(mountain_biomes);
    bad_biomes = bad_biomes.concat(volcanic_biomes);

    fertilityCheck(
        event, 'tfc:crop/papyrus', false, bad_biomes, 
        heat_levels[6], heat_levels[7], rain_levels[0], rain_levels[7]
    );
})
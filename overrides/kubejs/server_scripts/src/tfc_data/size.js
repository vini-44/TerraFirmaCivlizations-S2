const SIZE_DEFS = {
	//example
	//'minecraft:gold_ingot': ['huge', 'very_heavy']
	//tiny, very_small, small, normal, large, very_large, huge
	//very_light, light, medium, heavy, very_heavy

	'create:cardboard_package_12x10': ['huge', 'very_heavy'],
	'create:cardboard_package_10x8': ['huge', 'very_heavy'],
	'create:cardboard_package_10x12': ['huge', 'very_heavy'],
	'create:cardboard_package_12x12': ['huge', 'very_heavy'],
	'kubejs:empty_fuel_can': ['large', 'medium'],
	'kubejs:diesel_fuel_can': ['large', 'very_heavy'],
	'kubejs:gasoline_fuel_can': ['large', 'very_heavy'],
	'kubejs:ethanol_fuel_can': ['large', 'very_heavy'],
    'kubejs:kerosene_fuel_can': ['large', 'very_heavy'],
	'kubejs:biodiesel_fuel_can': ['large', 'very_heavy'],
	'thermal:machine_pyrolyzer': ['huge', 'very_heavy'],
	'thermal:tinker_bench': ['huge', 'very_heavy'],
	'thermal:wrench': ['very_large', 'very_heavy'],
	'thermal:device_nullifier': ['huge', 'very_heavy'],
	'thermal:flux_drill': ['very_large', 'very_heavy'],
	'thermal:flux_saw': ['very_large', 'very_heavy'],
	'thermal:detonator': ['normal', 'medium'],
	'createdieselgenerators:canister': ['very_large', 'very_heavy'],
	'createdieselgenerators:oil_barrel': ['very_large', 'very_heavy'],
	'createdieselgenerators:pumpjack_head': ['very_large', 'very_heavy'],
	'createdieselgenerators:pumpjack_crank': ['very_large', 'very_heavy'],
	'createdieselgenerators:pumpjack_bearing': ['very_large', 'very_heavy'],
	'createdieselgenerators:huge_diesel_engine': ['very_large', 'very_heavy'],
	'createdieselgenerators:large_diesel_engine': ['very_large', 'very_heavy'],
	'createdieselgenerators:diesel_engine': ['very_large', 'very_heavy'],
	'immersive_aircraft:bomb_bay': ['very_large', 'very_heavy'],
	'immersive_aircraft:telescope': ['very_large', 'very_heavy'],
	'immersive_aircraft:heavy_crossbow': ['very_large', 'very_heavy'],
	'immersive_aircraft:rotary_cannon': ['very_large', 'very_heavy'],
	'man_of_many_planes:economy_plane': ['huge', 'very_heavy'],
	'man_of_many_planes:scarlet_biplane': ['huge', 'very_heavy'],
	'railways:fuel_tank': ['large', 'heavy'],
	'createaddition:gold_spool': ['normal', 'medium'],
	'createaddition:copper_spool': ['normal', 'medium'],
	'createaddition:large_connector': ['small', 'light'],
	'createaddition:small_light_connector': ['tiny', 'light'],
	'createaddition:connector': ['tiny', 'light'],
	'createaddition:rolling_mill': ['very_large', 'very_heavy'],
	'createaddition:alternator': ['very_large', 'very_heavy'],
	'createaddition:electric_motor': ['very_large', 'very_heavy'],
	'kubejs:musket_barrel': ['large', 'medium'],
	'kubejs:pistol_barrel': ['normal', 'medium'],
	'railways:portable_fuel_interface': ['very_large', 'very_heavy'],
	'thermal:machine_frame': ['very_large', 'very_heavy'],
	'#createbigcannons:big_cannon_projectile': ['large', 'heavy'],
	'create:item_vault': ['large', 'heavy'],
	'create:steam_engine': ['huge', 'very_heavy'],
	'create:fluid_tank': ['large', 'heavy'],
	'create:large_water_wheel': ['very_large', 'very_heavy'],
	'create:water_wheel': ['large', 'heavy'],
	'create:mechanical_mixer': ['large', 'heavy'],
	'create:mechanical_press': ['large', 'heavy'],
	'create:crushing_wheel': ['large', 'heavy'],
	'create:millstone': ['large', 'heavy'],
	'createlowheated:basic_burner': ['large', 'heavy'],
	'create_connected:item_silo': ['large', 'heavy'],
	'createbigcannons:worm': ['very_large', 'very_heavy'],
	'createbigcannons:ram_rod': ['very_large', 'very_heavy'],
	'createbigcannons:autocannon_ammo_container': ['large', 'heavy'],
	'createbigcannons:cannon_carriage': ['huge', 'very_heavy'],
	'createbigcannons:powder_charge': ['large', 'heavy'],
	'createbigcannons:big_cartridge': ['large', 'heavy'],
	'create:brown_toolbox': ['very_large', 'very_heavy'],
	'create:wrench': ['very_large', 'very_heavy'],
	'supplementaries:wrench': ['very_large', 'very_heavy'],

	'musketmod:musket_with_bayonet': ['very_large', 'very_heavy'],
	'musketmod:musket': ['very_large', 'very_heavy'],
	'musketmod:pistol': ['small', 'medium'],


	'createbigcannons:mortar_stone': ['large', 'heavy'],
	'createbigcannons:bag_of_grapeshot': ['large', 'heavy'],
	'createbigcannons:he_shell': ['large', 'heavy'],
	'createbigcannons:ap_shell': ['large', 'heavy'],
	'createbigcannons:shrapnel_shell': ['large', 'heavy'],
	'createbigcannons:fluid_shell': ['large', 'heavy'],
	'createbigcannons:smoke_shell': ['large', 'heavy'],
	'createbigcannons:drop_mortar_shell': ['large', 'heavy'],
	'createbigcannons:ap_shot': ['large', 'heavy'],
	'createbigcannons:solid_shot': ['large', 'heavy'],

	'supplementaries:safe': ['huge', 'very_heavy'],
	'minecraft:gunpowder': ['small', 'light'],
};

TFCEvents.data((event) => {
	for (const [item, def] of Object.entries(SIZE_DEFS)) {
		event.itemSize(Ingredient.of(item), def[0], def[1]);
	}
});

TFCEvents.data(event => {
    event.itemSize(
        Ingredient.of('#functionalstorage:drawer'),
        'huge',
        'very_heavy'
    );
});
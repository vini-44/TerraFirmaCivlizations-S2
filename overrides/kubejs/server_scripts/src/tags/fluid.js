const usableInAllBuckets = [
	'createdieselgenerators:plant_oil',
	'thermal:creosote',
	'kubejs:kaolinite_sludge',
	'kubejs:alumina_slurry',
    'kubejs:sugarcane_juice',
        'kubejs:lubricant',
];
const usableInMetalBuckets = [
	'createdieselgenerators:crude_oil',
	'createdieselgenerators:ethanol',
	'createdieselgenerators:gasoline',
	'createdieselgenerators:biodiesel',
	'createdieselgenerators:diesel',
	'kubejs:kerosene',
    'kubejs:liquid_petroleum_gas',
    //'kubejs:molten_plastic'
];
const usableInBarrels = [
	'createdieselgenerators:plant_oil',
	'kubejs:kaolinite_sludge',
	'kubejs:alumina_slurry',
    'kubejs:sugarcane_juice',
    'kubejs:lubricant',

];
const usableInPot = [
	'createdieselgenerators:plant_oil',
	'kubejs:kaolinite_sludge',
	'kubejs:alumina_slurry',
    'kubejs:sugarcane_juice'

];
const usableInJug = [
	'createdieselgenerators:plant_oil',
	'kubejs:kaolinite_sludge',
	'kubejs:alumina_slurry',
    'kubejs:sugarcane_juice'
];

const moltenMetals = [
	'kubejs:molten_aluminum',
	'kubejs:molten_manganese',
	'kubejs:molten_mangalloy',
	'kubejs:molten_titanium',
	'kubejs:molten_tungsten',
    'kubejs:molten_carotine_steel'
];

ServerEvents.tags('fluid', (event) => {
	event.add('tfc:usable_in_wooden_bucket', usableInAllBuckets);
	event.add('tfc:usable_in_red_steel_bucket', usableInAllBuckets);
	event.add('tfc:usable_in_blue_steel_bucket', usableInAllBuckets);
	event.add('tfc:usable_in_barrel', usableInAllBuckets);

	event.add('tfc:usable_in_red_steel_bucket', usableInMetalBuckets);
	event.add('tfc:usable_in_blue_steel_bucket', usableInMetalBuckets);

	event.add('tfc:usable_in_barrel', usableInBarrels);

	event.add('tfc:usable_in_pot', usableInPot);

	event.add('tfc:usable_in_jug', usableInJug);

	event.add('tfc:molten_metals', moltenMetals);
	event.add('tfc:usable_in_ingot_mold', moltenMetals);

	event.add('c:hidden_from_recipe_viewers', REMOVED_FLUIDS);

    //event.add('kubejs:lpg_ingredients', ['createdieselgenerators:gasoline', 'createdieselgenerators:diesel', 'kubejs:kerosene']);
});

ServerEvents.recipes((e) => {
	e.recipes.create.milling(
		'4x kubejs:wolframite_powder',
		'kubejs:wolframite_chunk'
	);
	e.recipes.create.crushing(
		[
			'4x kubejs:wolframite_powder',
			Item.of('kubejs:wolframite_powder', 2).withChance(0.25),
		],
		'kubejs:wolframite_chunk'
	);

	e.shaped('kubejs:wolframite_powder_block', ['WWW', 'WWW', 'WWW'], {
		W: 'kubejs:wolframite_powder',
	});
	e.shapeless('9x kubejs:wolframite_powder', [
		'kubejs:wolframite_powder_block',
	]);

	e.shaped('kubejs:tungsten_powder_block', ['WWW', 'WWW', 'WWW'], {
		W: 'kubejs:tungsten_powder',
	});
	e.shapeless('9x kubejs:tungsten_powder', ['kubejs:tungsten_powder_block']);

	e.recipes.tfc
		.heating('kubejs:tungsten_powder', 1485.0)
		.resultFluid(Fluid.of('kubejs:molten_tungsten', 5));

	e.recipes.thermal
		.crystallizer('kubejs:tungsten_powder', [
			Fluid.of('kubejs:liquid_hydrogen', 1000),
			'kubejs:unrefined_tungsten_powder',
		])
		.energy(20000);



	let molds = ['jar', 'lamp', 'blank', 'part'].forEach((mold) => {
		e.recipes.tfc
			.anvil(
				Item.of(
					'createdieselgenerators:mold',
					'{Mold:"kubejs:' + mold + '"}'
				),
				'kubejs:metal/sheet/titanium',
				['punch_any', 'hit_any', 'punch_any']
			)
			.tier(5);
	});

    	let ingredients = [];

	//I'm *not* writing that twenty times over.
	for (let i = 0; i < 20; i++) {
		ingredients.push({
			item: 'kubejs:tungsten_powder',
		});
		ingredients.push({
			item: 'tfc:powder/graphite',
		});
	}

	e.custom({
		type: 'createdieselgenerators:compression_molding',
		ingredients: ingredients,
		mold: 'kubejs:part',
		heatRequirement: 'superheated',
		results: [
			{
				item: 'kubejs:tungsten_carbide_parts',
				count: 1,
			},
		],
	});

	e.shaped('kubejs:metal_former_su_input', [' D ', 'ABC', ' D '], {
		A: 'create:shaft',
		B: 'thermal:machine_frame',
		C: 'kubejs:tungsten_carbide_parts',
		D: 'kubejs:metal/sheet/tungsten',
	});

	e.shaped('kubejs:metal_former_fluid_input', [' A ', 'BCB', ' A '], {
		A: 'create:fluid_tank',
		C: 'thermal:machine_frame',
		B: 'kubejs:metal/rod/tungsten',
	});

	e.shaped('kubejs:metal_former', ['GBG', 'CDE', 'ABA'], {
		A: 'kubejs:metal/double_sheet/titanium',
		B: 'create:fluid_tank',
		C: 'kubejs:tungsten_carbide_parts',
		D: 'thermal:machine_frame',
		G: 'kubejs:metal/sheet/tungsten',
        E: 'kubejs:circuit'
	});
});

// priority: 50

ServerEvents.recipes((e) => {
	e.recipes.tfc
		.heating('kubejs:plastic', 600)
		.resultFluid(Fluid.of('kubejs:molten_plastic', 100));

	e.recipes.thermal.crystallizer('kubejs:plastic', [
		Fluid.of('kubejs:liquid_petroleum_gas', 90),
		'kubejs:ilmenite_powder',
		'tfc:powder/graphite',
	]);
	e.recipes.thermal.crystallizer('afc:rubber_bar', [
		Fluid.of('kubejs:liquid_petroleum_gas', 90),
		'kubejs:ilmenite_powder',
		'tfc:powder/sulfur',
	]);

	let trans = 'kubejs:unfinished_circuit';
	e.recipes.create
		.sequenced_assembly(
			'kubejs:circuit',
			'kubejs:plastic',
			[
				e.recipes.create.deploying(trans, [
					trans,
					'createaddition:gold_wire',
				]),
				e.recipes.create.deploying(trans, [
					trans,
					'createaddition:gold_wire',
				]),
				e.recipes.create.deploying(trans, [
					trans,
					'tfc:metal/sheet/blue_steel',
				]),
				e.recipes.create
					.deploying(trans, [trans, 'createbigcannons:cannon_welder'])
					.keepHeldItem(),
			],
			trans
		)
		.loops(1);

	e.shaped('kubejs:automaton_head', ['ABA', 'CDE', 'ABA'], {
		A: 'tfc:metal/sheet/steel',
		B: 'createaddition:copper_wire',
		C: 'create:electron_tube',
		D: 'kubejs:circuit',
		E: 'createaddition:capacitor',
	});

    e.recipes.create.filling('kubejs:reinforced_synthetic_fiber', ['#tfc:flux', Fluid.of('kubejs:molten_plastic', 25)])
    e.recipes.tfc.loom('kubejs:reinforced_synthetic_fabric', '16x kubejs:reinforced_synthetic_fiber', 8, 'kubejs:block/reinforced_synthetic_fabric');

    
});

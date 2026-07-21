// priority: 50

ServerEvents.recipes((e) => {
    e.remove({ mod: 'createaddition' });

    e.shapeless('2x createaddition:capacitor', [
        'tfc:metal/rod/copper',
        'tfc:metal/sheet/zinc',
        'redstone',
    ]);

    METAL_DEFS.forEach((metal) => {
        e.custom({
            type: 'createaddition:rolling',
            input: Item.of(`tfc:metal/ingot/${metal}`),
            result: Item.of(`tfc:metal/rod/${metal}`, 2),
        });
    });

    e.custom({
        type: 'createaddition:rolling',
        input: {
            item: `firmalife:metal/ingot/chromium`,
        },
        result: {
            item: `firmalife:metal/rod/chromium`,
            count: 2,
        },
    });

    
    e.custom({
        type: 'createaddition:rolling',
        input: {
            item: `firmalife:metal/ingot/stainless_steel`,
        },
        result: {
            item: `firmalife:metal/rod/stainless_steel`,
            count: 2,
        },
    });


    for (const [rod, wire] of Object.entries(WIRE_METALS)) {
        e.custom({
            type: 'createaddition:rolling',
            input: Item.of(rod),
            result: Item.of(wire, 2),
        });
    }

    e.recipes.create.sequenced_assembly('kubejs:stator', ['tfc:metal/double_sheet/brass'], [
        e.recipes.create.deploying('tfc:metal/double_sheet/brass', ['tfc:metal/double_sheet/brass', 'createaddition:copper_wire']),
        e.recipes.create.deploying('tfc:metal/double_sheet/brass', ['tfc:metal/double_sheet/brass', 'tfc:metal/sheet/steel']),
        e.recipes.create.deploying('tfc:metal/double_sheet/brass', ['tfc:metal/double_sheet/brass', 'createaddition:copper_wire']),
        e.recipes.create.cutting('tfc:metal/double_sheet/brass', 'tfc:metal/double_sheet/brass'),
    ], 'tfc:metal/double_sheet/brass').loops(6)

    e.recipes.create.sequenced_assembly('kubejs:rotor', 'tfc:metal/double_sheet/brass', [
        e.recipes.create.deploying('tfc:metal/double_sheet/brass', ['tfc:metal/double_sheet/brass', ['tfc:ore/poor_magnetite', 'tfc:ore/normal_magnetite', 'tfc:ore/rich_magnetite']]),
        e.recipes.create.deploying('tfc:metal/double_sheet/brass', ['tfc:metal/double_sheet/brass', 'tfc:metal/rod/black_steel']),
        e.recipes.create.pressing('tfc:metal/double_sheet/brass', ['tfc:metal/double_sheet/brass'])
    ], 'tfc:metal/double_sheet/brass').loops(6)

    e.shaped('createaddition:alternator', ['ABA', 'CDC', 'AEA'], {
		A: 'firmaciv:copper_bolt',
		B: 'kubejs:stator',
		C: 'createaddition:copper_spool',
		D: 'create:shaft',
		E: 'kubejs:rotor',
	});
	e.shaped('createaddition:electric_motor', ['ABA', 'CDC', 'AEA'], {
		A: 'firmaciv:copper_bolt',
		B: 'kubejs:stator',
		C: 'create:andesite_alloy',
		D: 'create:shaft',
		E: 'kubejs:rotor',
	});

    e.shaped('createaddition:redstone_relay', ['CEC', 'SSS'], {
        C: 'createaddition:connector',
        E: 'create:electron_tube',
        S: '#forge:smooth_stone',
    });

    e.shapeless('4x createaddition:connector', [
        'tfc:metal/rod/copper',
        'create:andesite_alloy',
    ]);
    e.shapeless('2x createaddition:large_connector', [
        'tfc:metal/rod/copper',
        '2x create:andesite_alloy',
    ]);

    e.shapeless('createaddition:small_light_connector', [
        'createaddition:connector',
        'tfc:lamp_glass',
        'kubejs:chromium_wire',
    ]);

    e.shaped('createaddition:spool', ['A', 'B', 'A'], {
        A: '#tfc:lumber',
        B: '#forge:rods/wooden'
    })

    e.shapeless('createaddition:copper_spool', [
        'createaddition:spool',
        '4x createaddition:copper_wire',
    ]);
    e.shapeless('createaddition:gold_spool', [
        'createaddition:spool',
        '4x createaddition:gold_wire',
    ]);

    e.shapeless('4x createaddition:copper_wire', [
        'createaddition:copper_spool',
    ]).replaceIngredient('createaddition:copper_spool', 'createaddition:spool');
    e.shapeless('4x createaddition:gold_wire', [
        'createaddition:gold_spool',
    ]).replaceIngredient('createaddition:gold_spool', 'createaddition:spool');

    e.shaped('createaddition:rolling_mill', ['PSP', 'ASA', 'ACA'], {
        P: 'tfc:metal/sheet/wrought_iron',
        S: 'create:shaft',
        A: 'create:andesite_alloy',
        C: 'create:andesite_casing',
    });

    e.shaped('createaddition:portable_energy_interface', ['CSL'], {
        C: 'create:brass_casing',
        S: 'create:chute',
        L: 'createaddition:copper_spool',
    });

    e.shaped('createaddition:modular_accumulator', ['R R', 'CBC', ' S '], {
        R: 'tfc:metal/rod/copper',
        C: 'createaddition:capacitor',
        B: 'create:brass_casing',
        S: 'createaddition:gold_spool',
    })

    e.shaped('createaddition:tesla_coil', ['SSS', ' A ', 'CBC'], {
        S: 'createaddition:copper_spool',
        C: 'createaddition:capacitor',
        B: 'create:brass_casing',
        A: 'create:andesite_alloy',
    })

    e.shaped('4x createaddition:barbed_wire', ['WW', 'WW'], {
        W: 'createaddition:iron_wire'
    })



});
ServerEvents.recipes((e) => {

  e.shaped(
    Item.of('kubejs:wood_reinforcement', 8), 
    [
      'ABA',
      'ACA', 
      'ABA'
    ],
    {
      A: '#tfc:support_beams',  
      B: 'firmaciv:copper_bolt',
      C: '#tfc:lumber'
    }
  )  
  e.shaped(
    Item.of('kubejs:stone_reinforcement', 8),
    [
      'AAA',
      'ABA', 
      'AAA'
    ],
    {
      A: '#forge:stone_bricks',
      B: [
      'rnr:bucket/concrete', 
      Item.of('tfc:wooden_bucket', '{fluid:{Amount:1000,FluidName:"rnr:concrete"}}').weakNBT()
      ]
    }
  ).replaceIngredient('rnr:bucket/concrete', 'minecraft:bucket')

  e.recipes.create.mixing(
    Item.of('kubejs:stone_reinforcement', 8), // Output
    [
      '8x #forge:stone_bricks', // Input items (8 bricks)
      Fluid.of('rnr:concrete', 1000) // Input fluid (1000mB = 1 bucket)
    ]
  )

  e.shaped(
    Item.of('kubejs:bronze_reinforcement', 8),
    [
      'ACA',
      'ABA',
      'ACA'
    ],
    {
      A: '#tfc:support_beams',
      B: [
        'tfc:metal/bars/bronze',
        'tfc:metal/bars/black_bronze',
        'tfc:metal/bars/bismuth_bronze'
      ],
      C: [
        'tfc:metal/rod/bronze',
        'tfc:metal/rod/black_bronze',
        'tfc:metal/rod/bismuth_bronze'
      ]
    }
  )

  e.shaped(
    Item.of('kubejs:iron_reinforcement', 8),
    [
      'ABA',
      'CBC',
      'ABA'
    ],
    {
      A: '#tfc:support_beams',
      B: 'tfc:metal/bars/wrought_iron',
      C: 'tfc:metal/rod/wrought_iron'
    }
  )
  
  e.shaped(
    Item.of('kubejs:steel_reinforcement', 8),
    [
      'ABA',
      'CBC',
      'ABA'
    ],
    {
      A: '#tfc:support_beams',
      B: 'tfc:metal/bars/steel',
      C: 'tfc:metal/rod/steel'
    }
  )

  e.recipes.kubejs
			.metal_former()
			.id("titanium_reinforcement_former")
			.duration(1000)
			.chance(0, (builder) => {
				builder.inputItems(Item.of("kubejs:titanium_reinforcement", 8));
			})
			.inputItems(Item.of('kubejs:metal/ingot/titanium',4))
			.outputItems(Item.of('kubejs:titanium_reinforcement'))
			.perTick((builder) => {
        builder.inputFluids(Fluid.of('kubejs:lubricant', 1));
				builder.inputFE(2048);
			})
			.inputStress(1024)
			.inputRPM(256);

    e.recipes.kubejs
			.metal_former()
			.id("carotine_reinforcement_former")
			.duration(1000)
			.chance(0, (builder) => {
				builder.inputItems(Item.of("kubejs:carotine_reinforcement", 8));
			})
			.inputItems(Item.of('kubejs:metal/ingot/carotine_steel',4))
			.outputItems(Item.of('kubejs:carotine_reinforcement'))
			.perTick((builder) => {
        builder.inputFluids(Fluid.of('kubejs:lubricant', 1));
				builder.inputFE(2048);
			})
			.inputStress(1024)
			.inputRPM(256);

  let metals = [
		`bismuth_bronze`,
		`black_bronze`,
		'bronze',
		'wrought_iron',
		'steel'
	].forEach((metal) => {
e.recipes.create
			.sequenced_assembly(
				[`tfc:metal/bars/${metal}`],
				`tfc:metal/sheet/${metal}`,
				[
					e.recipes.create.cutting(
						`tfc:metal/sheet/${metal}`,
						`tfc:metal/sheet/${metal}`
					),
          e.recipes.create.cutting(
						`tfc:metal/sheet/${metal}`,
						`tfc:metal/sheet/${metal}`
					),
          e.recipes.create.cutting(
						`tfc:metal/sheet/${metal}`,
						`tfc:metal/sheet/${metal}`
					),
          e.recipes.create.pressing(
						`tfc:metal/sheet/${metal}`,
						`tfc:metal/sheet/${metal}`
					)
				]
			)
			.transitionalItem(Ingredient.of(`tfc:metal/sheet/${metal}`))
      .loops(1);
  })
});
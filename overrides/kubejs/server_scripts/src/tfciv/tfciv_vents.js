ServerEvents.recipes((event) => {  

	//coppper mantle ore
	event.recipes.create.crushing(
		[
			'tfc:ore/normal_native_copper', Item.of('tfc:ore/normal_native_copper').withChance(0.25)
		], 
		'kubejs:copper_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/normal_native_copper', Item.of('tfc:ore/normal_native_copper').withChance(0.25)
		], 
		'kubejs:copper_mantle_ore'
	).processingTime(1000)

	//gold mantle ore
	event.recipes.create.crushing(
		[
			'tfc:ore/normal_native_gold', Item.of('tfc:ore/normal_native_gold').withChance(0.25)
		], 
		'kubejs:gold_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/normal_native_gold', Item.of('tfc:ore/normal_native_gold').withChance(0.25)
		], 
		'kubejs:gold_mantle_ore'
	).processingTime(1000)

	//iron mantle ore
	event.recipes.create.crushing(
		[
			'tfc:ore/normal_hematite', Item.of('tfc:ore/normal_hematite').withChance(0.25)
		], 
		'kubejs:iron_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/normal_hematite', Item.of('tfc:ore/normal_hematite').withChance(0.25)
		], 
		'kubejs:iron_mantle_ore'
	).processingTime(1000)

	//silver mantle ore
	event.recipes.create.crushing(
		[
			'tfc:ore/normal_native_silver', Item.of('tfc:ore/normal_native_silver').withChance(0.25)
		], 
		'kubejs:silver_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/normal_native_silver', Item.of('tfc:ore/normal_native_silver').withChance(0.25)
		], 
		'kubejs:silver_mantle_ore'
	).processingTime(1000)

	//tin mantle ore
	event.recipes.create.crushing(
		[
			'tfc:ore/normal_cassiterite', Item.of('tfc:ore/normal_cassiterite').withChance(0.25)
		], 
		'kubejs:tin_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/normal_cassiterite', Item.of('tfc:ore/normal_cassiterite').withChance(0.25)
		], 
		'kubejs:tin_mantle_ore'
	).processingTime(1000)

	//zinc mantle ore	
	event.recipes.create.crushing(
		[
			'tfc:ore/normal_sphalerite', Item.of('tfc:ore/normal_sphalerite').withChance(0.25)
		], 
		'kubejs:zinc_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/normal_sphalerite', Item.of('tfc:ore/normal_sphalerite').withChance(0.25)
		], 
		'kubejs:zinc_mantle_ore'
	).processingTime(1000)

	//Bismuth mantle ore
	event.recipes.create.crushing(
		[
			'tfc:ore/normal_bismuthinite', Item.of('tfc:ore/normal_bismuthinite').withChance(0.25)
		], 
		'kubejs:bismuth_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/normal_bismuthinite', Item.of('tfc:ore/normal_bismuthinite').withChance(0.25)
		], 
		'kubejs:bismuth_mantle_ore'
	).processingTime(1000)

	//nickel mantle ore
	event.recipes.create.crushing(
		[
			'tfc:ore/normal_garnierite', Item.of('tfc:ore/normal_garnierite').withChance(0.25)
		], 
		'kubejs:nickel_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/normal_garnierite', Item.of('tfc:ore/normal_garnierite').withChance(0.25)
		], 
		'kubejs:nickel_mantle_ore'
	).processingTime(1000)

	//cryolite mantle ore
	event.recipes.create.crushing(
		[
			'tfc:ore/cryolite'
		], 
		'kubejs:cryolite_mantle_ore'
	).processingTime(500)
	event.recipes.create.milling(
		[
			'tfc:ore/cryolite'
		], 
		'kubejs:cryolite_mantle_ore'
	).processingTime(1000)
});

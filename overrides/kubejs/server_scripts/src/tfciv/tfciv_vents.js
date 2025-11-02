ServerEvents.recipes((event) => {  
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
});

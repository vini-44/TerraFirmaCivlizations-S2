ServerEvents.recipes((event) => {  
	event.recipes.create.crushing(['tfc:ore/normal_native_copper', Item.of('kubejs:copper_mantle_ore', 0.5)], 'kubejs:copper_mantle_ore')
	event.recipes.create.milling(['tfc:ore/normal_native_copper', Item.of('kubejs:copper_mantle_ore', 0.5)], 'kubejs:copper_mantle_ore')
});

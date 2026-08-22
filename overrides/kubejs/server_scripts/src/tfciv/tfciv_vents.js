LootJS.modifiers((event) => {
    event.addBlockLootModifier('terrafirmacivilizations:copper_mantle_ore')
        .removeLoot(Ingredient.all)
        .addLoot('terrafirmacivilizations:copper_mantle_chunk')

	event.addBlockLootModifier('terrafirmacivilizations:gold_mantle_ore')
        .removeLoot(Ingredient.all)
		.addLoot('terrafirmacivilizations:gold_mantle_chunk')

	event.addBlockLootModifier('terrafirmacivilizations:iron_mantle_ore')
        .removeLoot(Ingredient.all)
		.addLoot('terrafirmacivilizations:iron_mantle_chunk')

	event.addBlockLootModifier('terrafirmacivilizations:silver_mantle_ore')
		.removeLoot(Ingredient.all)
		.addLoot('terrafirmacivilizations:silver_mantle_chunk')

	event.addBlockLootModifier('terrafirmacivilizations:tin_mantle_ore')
		.removeLoot(Ingredient.all)
		.addLoot('terrafirmacivilizations:tin_mantle_chunk')

	event.addBlockLootModifier('terrafirmacivilizations:zinc_mantle_ore')
		.removeLoot(Ingredient.all)
		.addLoot('terrafirmacivilizations:zinc_mantle_chunk')

	event.addBlockLootModifier('terrafirmacivilizations:bismuth_mantle_ore')
		.removeLoot(Ingredient.all)
		.addLoot('terrafirmacivilizations:bismuth_mantle_chunk')

	event.addBlockLootModifier('terrafirmacivilizations:nickel_mantle_ore')
		.removeLoot(Ingredient.all)
		.addLoot('terrafirmacivilizations:nickel_mantle_chunk')

	event.addBlockLootModifier('terrafirmacivilizations:cryolite_mantle_ore')
		.removeLoot(Ingredient.all)
		.addLoot('tfc:ore/cryolite')
})
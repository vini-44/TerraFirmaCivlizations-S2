ServerEvents.tags('item', event => {
	const materials = ['copper', 'gold', 'bismuth', 'cryolite', 'iron', 'nickel', 'silver', 'tin', 'zinc'];

	materials.forEach(material => {
		event.add('terrafirmacivilizations:mantle_vent', `create_resource_vents:dormant_mantle_${material}_vent`);
		event.add('terrafirmacivilizations:mantle_vent', `create_resource_vents:active_mantle_${material}_vent`);
	});
})
ServerEvents.tags('block', event => {
	const materials = ['copper', 'gold', 'bismuth', 'cryolite', 'iron', 'nickel', 'silver', 'tin', 'zinc'];

	materials.forEach(material => {
		event.add('terrafirmacivilizations:mantle_vent', `create_resource_vents:dormant_mantle_${material}_vent`);
		event.add('terrafirmacivilizations:mantle_vent', `create_resource_vents:active_mantle_${material}_vent`);
	});
})
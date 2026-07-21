TFCEvents.data((event) => {
	//entity daamge res

	/*event.entityDamageResistance('opposing_force:dicer', 80, 80, 80);
	event.entityDamageResistance('opposing_force:frowzy', null, -10, null);
	event.entityDamageResistance('opposing_force:ramble', 70, null, -10);
	event.entityDamageResistance('opposing_force:slug', -10, null, 10);
	event.entityDamageResistance('opposing_force:terror', -10, null, null);
	event.entityDamageResistance('opposing_force:trembler', 80, 80, -50);
	event.entityDamageResistance('opposing_force:umber_spider', -10, null, 25);
    event.entityDamageResistance('opposing_force:pale_spider', -10, null, null)*/
});


ServerEvents.tags('entity_type', (event) => {
    /*event.add('tfc:deals_crushing_damage', ['opposing_force:frowzy', 'opposing_force:trembler'])
    event.add('tfc:deals_piercing_damage', ['opposing_force:terror', 'opposing_force:umber_spider', 'opposing_force:pale_spider'])
    event.add('tfc:deals_slashing_damage', ['opposing_force:ramble', 'opposing_force:dicer', 'opposing_force:slug'])

    const opp_force = [
		'opposing_force:dicer',
		'opposing_force:frowzy',
		'opposing_force:ramble',
		'opposing_force:slug',
		'opposing_force:terror',
		'opposing_force:trembler',
		'opposing_force:umber_spider',
		'opposing_force:pale_spider',
    ].forEach((entity) => {
        event.add(entity, entity)
    })*/
});
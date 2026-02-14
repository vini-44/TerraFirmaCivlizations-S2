StartupEvents.registry('item', (event) => {
	event.create('wood_reinforcement').displayName('Wooden Reinforcement').tooltip('Reinforcement value: 5')
	event.create('stone_reinforcement').displayName('Stone Reinforcement').tooltip('Reinforcement value: 10')
	event.create('bronze_reinforcement').displayName('Bronze Reinforcement').tooltip('Reinforcement value: 25')
	event.create('iron_reinforcement').displayName('Iron Reinforcement').tooltip('Reinforcement value: 50')
	event.create('steel_reinforcement').displayName('Steel Reinforcement').tooltip('Reinforcement value: 200')
	event.create('titanium_reinforcement').displayName('Titanium Reinforcement').tooltip('Reinforcement value: 500')
	event.create('carotine_reinforcement').displayName('Carotine steel Reinforcement').tooltip('Reinforcement value: 800')
	event.create('admin_reinforcement').displayName('Admin Reinforcement').tooltip('Reinforcement value: 10000')
});

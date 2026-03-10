StartupEvents.registry('item', (event) => {
	event.create('wood_reinforcement').displayName('Wooden Reinforcement').tooltip('Reinforcement value: 5 §nNeeds a Copper Hammer or better to apply')
	event.create('stone_reinforcement').displayName('Stone Reinforcement').tooltip('Reinforcement value: 10 §nNeeds a Copper Hammer or better to apply')
	event.create('bronze_reinforcement').displayName('Bronze Reinforcement').tooltip('Reinforcement value: 25 §nNeeds a Bronze Hammer or better to apply')
	event.create('iron_reinforcement').displayName('Iron Reinforcement').tooltip('Reinforcement value: 50 §nNeeds a Wrought Iron Hammer or better to apply')
	event.create('steel_reinforcement').displayName('Steel Reinforcement').tooltip('Reinforcement value: 100 §nNeeds a Steel Hammer or better to apply')
	event.create('titanium_reinforcement').displayName('Titanium Reinforcement').tooltip('Reinforcement value: 250 §nNeeds a Welder to apply')
	event.create('carotine_reinforcement').displayName('Carotine steel Reinforcement').tooltip('Reinforcement value: 500 §nNeeds a Welder to apply')
	event.create('admin_reinforcement').displayName('Admin Reinforcement').tooltip('Reinforcement value: ∞')
	event.create('admin_hammer').displayName('Admin Hammer').tooltip('Used to apply Admin Reinforcement')
});

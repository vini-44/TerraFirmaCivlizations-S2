// priority: 0

const hideCat=[
	'create:mystery_conversion',
	'minecraft:brewing',
	'create:automatic_brewing',
	'minecraft:stonecutting'
	]

JEIEvents.removeCategories(event => {

	function myFunction(value) {
	  event.remove(value)
	}
	
	hideCat.forEach(myFunction);

})

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')


ServerEvents.recipes((e) => {

  e.shaped(
    Item.of('kubejs:stone_reinforcement', 8), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: '#forge:cobblestone',  //arg 3: the mapping object
      B: 'minecraft:clay'
    }
  )  
  e.shaped(
    Item.of('kubejs:copper_reinforcement', 16), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'tfc:metal/ingot/copper',  //arg 3: the mapping object
      B: 'tfc:glue'
    }
  )
  e.shaped(
    Item.of('kubejs:iron_reinforcement', 12), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'tfc:metal/ingot/cast_iron',  //arg 3: the mapping object
      B: 'tfc:glue'
    }
  )
  e.shaped(
    Item.of('kubejs:iron_reinforcement', 24), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'tfc:metal/ingot/wrought_iron',  //arg 3: the mapping object
      B: 'tfc:glue'
    }
  )

});
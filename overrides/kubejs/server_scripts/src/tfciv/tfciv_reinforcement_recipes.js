ServerEvents.recipes((e) => {

  e.shaped(
    Item.of('kubejs:wood_reinforcement', 8), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: '#minecraft:logs',  //arg 3: the mapping object
      B: 'tfc:glue'
    }
  )  
  e.shaped(
    Item.of('kubejs:stone_reinforcement', 4), // arg 1: output
    [
      'ABA',
      'BAB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#forge:stone_bricks',  //arg 3: the mapping object
      B: 'kubejs:wood_reinforcement'
    }
  )  
  e.shaped(
    Item.of('kubejs:copper_reinforcement', 4), // arg 1: output
    [
      'ABA',
      'BAB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'tfc:metal/rod/copper',  //arg 3: the mapping object
      B: 'kubejs:stone_reinforcement'
    }
  )

  e.shaped(
    Item.of('kubejs:iron_reinforcement', 4), // arg 1: output
    [
      'ABA',
      'BAB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'tfc:metal/rod/cast_iron',  //arg 3: the mapping object
      B: 'kubejs:stone_reinforcement'
    }
  )
  e.shaped(
    Item.of('kubejs:iron_reinforcement', 8), // arg 1: output
    [
      'ABA',
      'BAB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'tfc:metal/rod/wrought_iron',  //arg 3: the mapping object
      B: 'kubejs:stone_reinforcement'
    }
  )
  
  e.shaped(
    Item.of('kubejs:steel_reinforcement', 4), // arg 1: output
    [
      'ABA',
      'BAB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'tfc:metal/rod/steel',  //arg 3: the mapping object
      B: 'kubejs:iron_reinforcement'
    }
  )

  e.shaped(
    Item.of('kubejs:titanium_reinforcement', 4), // arg 1: output
    [
      'ABA',
      'BAB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'kubejs:metal/rod/titanium',  //arg 3: the mapping object
      B: 'kubejs:steel_reinforcement'
    }
  )
});
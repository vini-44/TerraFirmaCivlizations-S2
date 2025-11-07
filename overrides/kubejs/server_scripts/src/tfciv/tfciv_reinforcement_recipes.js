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
    Item.of('kubejs:stone_reinforcement', 8), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: '#forge:stone_bricks',  //arg 3: the mapping object
      B: 'kubejs:wood_reinforcement x8'
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
      A: 'tfc:metal/rod/copper',  //arg 3: the mapping object
      B: 'kubejs:stone_reinforcement x16'
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
      A: 'tfc:metal/rod/cast_iron',  //arg 3: the mapping object
      B: 'kubejs:stone_reinforcement x12'
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
      A: 'tfc:metal/rod/wrought_iron',  //arg 3: the mapping object
      B: 'kubejs:stone_reinforcement x24'
    }
  )
  
  e.shaped(
    Item.of('kubejs:steel_reinforcement', 16), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'tfc:metal/rod/steel',  //arg 3: the mapping object
      B: 'kubejs:iron_reinforcement x16'
    }
  )

  e.shaped(
    Item.of('kubejs:titanium_reinforcement', 16), // arg 1: output
    [
      'AAA',
      'ABA', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'tfc:metal/rod/titanium',  //arg 3: the mapping object
      B: 'kubejs:steel_reinforcement x16'
    }
  )
});
// priority: 1

ServerEvents.recipes(event => {
  event.shaped('comforts:sleeping_bag_white',[
    'WWW'
  ],{
    W: '#tfc:high_quality_cloth'
  })
  event.shaped('comforts:hammock_white',[
    'STS',
    'SBS',
    'STS'
  ],{
    S: '#forge:string',
    T: '#tfc:firepit_sticks',
    B: 'comforts:sleeping_bag_white'
  })
  event.recipes.tfc.barrel_sealed(1000)
    .outputItem('comforts:hammock_white')
    .inputs('#comforts:hammocks', TFC.fluidStackIngredient('tfc:lye'))
  event.recipes.tfc.barrel_sealed(1000)
    .outputItem('comforts:sleeping_bag_white')
    .inputs('#comforts:sleeping_bags', TFC.fluidStackIngredient('tfc:lye'))

  let colours = [
    'red',
    'green',
    'brown',
    'blue',
    'purple',
    'cyan',
    'light_gray',
    'gray',
    'pink',
    'lime',
    'yellow',
    'light_blue',
    'magenta',
    'orange',
    'black',
  ].forEach(colour => {
    event.recipes.tfc.barrel_sealed(1000)
      .outputItem('comforts:sleeping_bag_' + colour)
      .inputs('#comforts:sleeping_bags', TFC.fluidStackIngredient('tfc:'+colour+'_dye', 50))
    event.recipes.tfc.barrel_sealed(1000)
      .outputItem('comforts:hammock_' + colour)
      .inputs('#comforts:hammocks', TFC.fluidStackIngredient('tfc:'+colour+'_dye', 50))
    event.shaped('comforts:hammock_' + colour,[
      'STS',
      'SBS',
      'STS'
    ],{
      S: '#forge:string',
      T: '#tfc:firepit_sticks',
      B: 'comforts:sleeping_bag_' + colour
    })
  })

  event.shapeless('2x comforts:rope_and_nail',[
    '#forge:rope',
    'firmaciv:copper_bolt'
  ])

  event.shaped('2x comforts:rope_and_nail',[
    'SS ',
    'SR ',
    '  S'
  ],{
    S: '#forge:string',
    R: 'firmaciv:copper_bolt'
  })
})
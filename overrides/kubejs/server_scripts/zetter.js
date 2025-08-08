// priority: 1

ServerEvents.tags('item', event => {
  event.add('zetter:acacia_lumber', 'tfc:wood/lumber/acacia')
  event.add('zetter:acacia_lumber', 'tfc:wood/lumber/palm')
  event.add('zetter:birch_lumber', 'tfc:wood/lumber/pine')
  event.add('zetter:birch_lumber', 'tfc:wood/lumber/douglas_fir')
  event.add('zetter:birch_lumber', 'tfc:wood/lumber/white_cedar')
  event.add('zetter:dark_oak_lumber', 'tfc:wood/lumber/chestnut')
  event.add('zetter:dark_oak_lumber', 'tfc:wood/lumber/hickory')
  event.add('zetter:dark_oak_lumber', 'tfc:wood/lumber/blackwood')
  event.add('zetter:jungle_lumber', 'tfc:wood/lumber/ash')
  event.add('zetter:jungle_lumber', 'tfc:wood/lumber/spruce')
  event.add('zetter:oak_lumber', 'tfc:wood/lumber/oak')
  event.add('zetter:oak_lumber', 'tfc:wood/lumber/sycamore')
  event.add('zetter:spruce_lumber', 'tfc:wood/lumber/maple')
  event.add('zetter:spruce_lumber', 'tfc:wood/lumber/birch')
  event.add('zetter:mangrove_lumber', 'tfc:wood/lumber/mangrove')
  event.add('zetter:mangrove_lumber', 'tfc:wood/lumber/rosewood')
  event.add('zetter:mangrove_lumber', 'tfc:wood/lumber/sequoia')
  event.add('zetter:warped_lumber', 'tfc:wood/lumber/aspen')
  event.add('zetter:warped_lumber', 'tfc:wood/lumber/willow')
  event.add('zetter:crimson_lumber', 'tfc:wood/lumber/kapok')
})

ServerEvents.recipes(event =>{

  event.custom({
    "type": "zetter:framing",
    "frame": {"tag": "zetter:frames"},
    "painting": {"item": "zetter:painting"}
  })

  event.custom({
    "type": "zetter:unframing",
    "frame": {"tag": "zetter:frames"}
  })

  function frame(wood) {
    event.shaped('zetter:' + wood + '_basic_frame',[
      'LHL',
      'STS',
      'LSL'
    ],{
      L: '#zetter:' + wood + '_lumber',
      H: 'firmaciv:copper_bolt',
      S: '#tfc:firepit_sticks',
      T: '#forge:leather'
    })
    event.shapeless('zetter:' + wood + '_plated_frame',[
      'zetter:' + wood + '_basic_frame',
      'kubejs:metal_plate_brass'
    ])
  }

  frame('acacia')
  frame('birch')
  frame('dark_oak')
  frame('jungle')
  frame('oak')
  frame('spruce')
  frame('mangrove')
  frame('warped')
  frame('crimson')

  event.shaped('zetter:canvas',[
    ' S ',
    'SCS',
    ' S '
  ],{
    C: 'farmersdelight:canvas',
    S: '#tfc:lumber'
  })

  event.shaped('zetter:easel',[
    'PP',
    'PP',
    'SS'
  ],{
    P: '#minecraft:planks',
    S: '#tfc:lumber'
  })

  event.shaped('zetter:gold_basic_frame',[
    'EHE',
    'GLG',
    'EGE'
  ],{
    E: 'tfc:gem/emerald',
    H: 'firmaciv:copper_bolt',
    G: 'tfc:metal/rod/gold',
    L: '#forge:leather'
  })

  event.shapeless('zetter:gold_plated_frame',[
    'zetter:gold_basic_frame',
    'kubejs:metal_plate_brass'
  ])

  event.shaped('zetter:iron_frame',[
    'NHN',
    'PLP',
    'NPN'
  ],{
    N: 'firmalife:metal/rod/stainless_steel',
    H: 'firmaciv:copper_bolt',
    P: 'minecraft:glass_pane',
    L: '#forge:leather'
  })

  event.custom({
    "type": "zetter:palette_recharge",
    "palette": {"item": "zetter:palette"},
    "recharge": {"tag": "zetter:paint_sources"}
  })

  event.shapeless('zetter:palette',[
    'zetter:paints',
    '#tfc:lumber'
  ])

})
// priority: 1

ServerEvents.recipes(event => {
  event.shaped('sophisticatedbackpacks:upgrade_base', [// arg 1: output
    'YRY',
    'RLR', // arg 2: the shape (array of strings)
    'YRY'
    ], {
    Y: '#forge:string',
    R: 'tfc:metal/rod/wrought_iron',
    L: '#forge:leather'
    }
    )

event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [{
    "type": "sophisticatedcore:item_enabled",
    "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
  }],
  "key": {
    "B": {
      "item": "sophisticatedbackpacks:backpack"
    },
    "D": {
      "item": "tfc:metal/double_sheet/copper"
    },
    "S": {
      "item": "sewingkit:leather_strip"
    },
    "R": {
      "item": "tfc:metal/rod/copper"
    }
  },
  "pattern": [
    'SRS',
    'DBD',
    'SRS'
  ],
  "result": {
    "item": "sophisticatedbackpacks:copper_backpack"
  }
})

event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [{
    "type": "sophisticatedcore:item_enabled",
    "itemRegistryName": "sophisticatedbackpacks:copper_backpack"
  }],
  "key": {
    "B": {
      "item": "sophisticatedbackpacks:copper_backpack"
    },
    "D": {
      "item": "tfc:metal/double_sheet/sterling_silver"
    },
    "S": {
      "item": "sewingkit:leather_strip"
    },
    "R": {
      "item": "tfc:metal/rod/sterling_silver"
    }
  },
  "pattern": [
    'SRS',
    'DBD',
    'SRS'
  ],
  "result": {
    "item": "sophisticatedbackpacks:iron_backpack"
  }
})

event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [{
    "type": "sophisticatedcore:item_enabled",
    "itemRegistryName": "sophisticatedbackpacks:gold_backpack"
  }],
  "key": {
    "B": {
      "item": "sophisticatedbackpacks:iron_backpack"
    },
    "D": {
      "item": "tfc:metal/double_sheet/rose_gold"
    },
    "S": {
      "item": "sewingkit:leather_strip"
    },
    "R": {
      "item": "tfc:metal/rod/rose_gold"
    }
  },
  "pattern": [
    'SRS',
    'DBD',
    'SRS'
  ],
  "result": {
    "item": "sophisticatedbackpacks:gold_backpack"
  }
})

event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [{
    "type": "sophisticatedcore:item_enabled",
    "itemRegistryName": "sophisticatedbackpacks:netherite_backpack"
  }],
  "key": {
    "B": {
      "item": "sophisticatedbackpacks:gold_backpack"
    },
    "D": {
      "item": "tfc:metal/double_sheet/black_steel"
    },
    "S": {
      "item": "sewingkit:leather_strip"
    },
    "R": {
      "item": "tfc:metal/rod/black_steel"
    }
  },
  "pattern": [
    'SRS',
    'DBD',
    'SRS'
  ],
  "result": {
    "item": "sophisticatedbackpacks:netherite_backpack"
  }
})

event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [{
    "type": "sophisticatedcore:item_enabled",
    "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
  }],
  "key": {
    "B": {
      "item": "sophisticatedbackpacks:netherite_backpack"
    },
    "D": {
      "item": "tfc:metal/double_sheet/blue_steel"
    },
    "S": {
      "item": "sewingkit:leather_strip"
    },
    "R": {
      "item": "tfc:metal/rod/blue_steel"
    }
  },
  "pattern": [
    'SRS',
    'DBD',
    'SRS'
  ],
  "result": {
    "item": "sophisticatedbackpacks:diamond_backpack"
  }
})

let advances = [
  'pickup',
  'filter',
  'magnet',
  'feeding',
  'void',
  'restock',
  'deposit',
  'refill',
  'compacting'
].forEach(advance =>[
  event.custom({
    'type': 'sewingkit:sewing',
    'materials': [{
      'count': 1,
      'ingredient': {
        'item': 'sophisticatedbackpacks:' + advance + '_upgrade'
      }},{
      'count': 1,
      'ingredient': {
        'item': 'immersiveengineering:component_electronic_adv'
      }},{
      'count': 1,
      'ingredient': {
        'item': 'create:attribute_filter'
      }}
    ],
    'result': {
      'item': 'sophisticatedbackpacks:advanced_' + advance + '_upgrade'
    },
    'tool': {
      'type': 'sewingkit:tool_ingredient',
      'tool_type': 'sewingkit_sew'
    }
  })
])

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:basin'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:mechanical_press'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:compacting_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})


event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:filter'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'minecraft:sticky_piston'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:pickup_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:filter'
    }},{
    'count': 1,
    'ingredient': {
      'tag': 'forge:chain_meshes'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:filter_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:filter'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'kubejs:aligned_magnetite'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:magnet_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:filter'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'tfc:ceramic/bowl'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:feeding_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:filter'
    }},{
    'count': 3,
    'ingredient': {
      'item': 'minecraft:obsidian'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:void_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:filter'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'minecraft:dispenser'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:restock_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:filter'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'minecraft:dropper'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:deposit_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'create:filter'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'minecraft:hopper'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:refill_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'minecraft:jukebox'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:jukebox_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:metal_barrel'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:fluid_pipe'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:tank_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'tag': 'tfc:workbenches'
    }},{
    'count': 1,
    'ingredient': {
      'tag': 'forge:chests'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:crafting_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:component_electronic'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:capacitor_lv'
    }},{
    'count': 1,
    'ingredient': {
      'item': 'immersiveengineering:wirecoil_electrum_ins'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:battery_upgrade'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:upgrade_base'
    }},{
    'count': 4,
    'ingredient': {
      'item': 'tfc:metal/double_sheet/copper'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:stack_upgrade_starter_tier'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:stack_upgrade_starter_tier'
    }},{
    'count': 4,
    'ingredient': {
      'item': 'tfc:metal/double_sheet/sterling_silver'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:stack_upgrade_tier_1'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:stack_upgrade_tier_1'
    }},{
    'count': 4,
    'ingredient': {
      'item': 'tfc:metal/double_sheet/rose_gold'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:stack_upgrade_tier_2'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:stack_upgrade_tier_2'
    }},{
    'count': 4,
    'ingredient': {
      'item': 'tfc:metal/double_sheet/black_steel'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:stack_upgrade_tier_3'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})

event.custom({
  'type': 'sewingkit:sewing',
  'materials': [{
    'count': 1,
    'ingredient': {
      'item': 'sophisticatedbackpacks:stack_upgrade_tier_3'
    }},{
    'count': 4,
    'ingredient': {
      'item': 'tfc:metal/double_sheet/blue_steel'
    }}
  ],
  'result': {
    'item': 'sophisticatedbackpacks:stack_upgrade_tier_4'
  },
  'tool': {
    'type': 'sewingkit:tool_ingredient',
    'tool_type': 'sewingkit_sew'
  }
})
})

ServerEvents.tags('item', event => {
  event.add('sophisticatedbackpacks:backpacks', 'sophisticatedbackpacks:backpack')
  event.add('sophisticatedbackpacks:backpacks', 'sophisticatedbackpacks:copper_backpack')
  event.add('sophisticatedbackpacks:backpacks', 'sophisticatedbackpacks:iron_backpack')
  event.add('sophisticatedbackpacks:backpacks', 'sophisticatedbackpacks:gold_backpack')
  event.add('sophisticatedbackpacks:backpacks', 'sophisticatedbackpacks:diamond_backpack')
  event.add('sophisticatedbackpacks:backpacks', 'sophisticatedbackpacks:netherite_backpack')


}
)
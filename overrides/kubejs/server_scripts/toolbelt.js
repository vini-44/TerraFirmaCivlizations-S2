// priority: 1

ServerEvents.recipes(event =>{

  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "sewingkit:sewing",
        "materials": [{
          "count": 2,
          "ingredient": {
            "item": "sewingkit:leather_strip"
          }
        },{
          "count": 3,
          "ingredient": {
            "item": "sewingkit:leather_sheet"
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "tfc:metal/ingot/wrought_iron"
          }
        },{
          "count": 2,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:belt"
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "minecraft:wood",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "sewingkit:sewing",
        "materials": [{
          "count": 2,
          "ingredient": {
            "item": "sewingkit:leather_strip"
          }
        },{
          "count": 3,
          "ingredient": {
            "item": "sewingkit:leather_sheet"
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "tfc:brass_mechanisms"
          }
        },{
          "count": 1,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:pouch"
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "minecraft:wood",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "toolbelt:sewing_upgrade",
        "materials": [{
          "count": 1,
          "ingredient": {
            "type": "toolbelt:belt_upgrade_level",
            "upgrade_level": 0
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "toolbelt:pouch"
          }
        },{
          "count": 1,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:belt",
          "nbt": {
            "Size": 3
          }
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "minecraft:wood",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "toolbelt:sewing_upgrade",
        "materials": [{
          "count": 1,
          "ingredient": {
            "type": "toolbelt:belt_upgrade_level",
            "upgrade_level": 1
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "toolbelt:pouch"
          }
        },{
          "count": 1,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:belt",
          "nbt": {
            "Size": 4
          }
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "sewingkit:bone",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "toolbelt:sewing_upgrade",
        "materials": [{
          "count": 1,
          "ingredient": {
            "type": "toolbelt:belt_upgrade_level",
            "upgrade_level": 2
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "toolbelt:pouch"
          }
        },{
          "count": 1,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:belt",
          "nbt": {
            "Size": 5
          }
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "minecraft:iron",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "toolbelt:sewing_upgrade",
        "materials": [{
          "count": 1,
          "ingredient": {
            "type": "toolbelt:belt_upgrade_level",
            "upgrade_level": 3
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "toolbelt:pouch"
          }
        },{
          "count": 1,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:belt",
          "nbt": {
            "Size": 6
          }
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "minecraft:iron",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "toolbelt:sewing_upgrade",
        "materials": [{
          "count": 1,
          "ingredient": {
            "type": "toolbelt:belt_upgrade_level",
            "upgrade_level": 4
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "toolbelt:pouch"
          }
        },{
          "count": 1,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:belt",
          "nbt": {
            "Size": 7
          }
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "minecraft:iron",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "toolbelt:sewing_upgrade",
        "materials": [{
          "count": 1,
          "ingredient": {
            "type": "toolbelt:belt_upgrade_level",
            "upgrade_level": 5
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "toolbelt:pouch"
          }
        },{
          "count": 1,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:belt",
          "nbt": {
            "Size": 8
          }
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "minecraft:iron",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
  event.custom({
    "type": "forge:conditional",
    "recipes": [{
      "conditions": [{
        "type": "forge:mod_loaded",
        "modid": "sewingkit"
      },{
        "type": "toolbelt:enable_sewing_crafting"
      }],
      "recipe": {
        "type": "toolbelt:sewing_upgrade",
        "materials": [{
          "count": 1,
          "ingredient": {
            "type": "toolbelt:belt_upgrade_level",
            "upgrade_level": 6
          }
        },{
          "count": 1,
          "ingredient": {
            "item": "toolbelt:pouch"
          }
        },{
          "count": 1,
          "ingredient": {
            "tag": "forge:string"
          }
        }],
        "result": {
          "item": "toolbelt:belt",
          "nbt": {
            "Size": 9
          }
        },
        "tool": {
          "type": "sewingkit:tool_ingredient",
          "tool_level": "minecraft:netherite",
          "tool_type": "sewingkit_sew"
        }
      }
    }]
  })
})
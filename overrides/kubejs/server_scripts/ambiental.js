ServerEvents.tags("block", event =>{

    // TFC

    const hot_tfc_blocks = [
        "molten",
        "torch"
    ]

    hot_tfc_blocks.forEach(block => {

        event.add("tfcambiental:hot_stuff", "tfc:" + block)

    })

    const lit_pumpkins = [
        "cicle",
        "creeper",
        "axe",
        "hammer",
        "pickaxe",
        "left",
        "right"
    ]

    lit_pumpkins.forEach(pumpkin => {

        event.add("tfcambiental:warm_stuff", "firmalife:lit_pumpkin/" + pumpkin)

    })

    const tfc_magma_rocks = [
        "granite",
        "diorite",
        "gabbro",
        "rhyolite",
        "basalt",
        "andesite",
        "dacite"
    ]

    tfc_magma_rocks.forEach(rock => {
        
        event.add("tfcambiental:warm_stuff", "tfc:rock/magma/" + rock)

    });

    // CREATE

    const hot_create_blocks = [
        "blaze_burner"
    ]

    hot_create_blocks.forEach(block => {

        event.add("tfcambiental:hot_stuff", "create:" + block)

    })

    // IMMERSIVEENGINEERING

    const hot_ie_blocks = [
        "arc_furnace",
        "diesel_generator"
    ]

    hot_ie_blocks.forEach(block => {

        event.add("tfcambiental:hot_stuff", "immersiveengineering:" + block)

    })

    // FARMERS DELIGHT

    const warm_fd_blocks = [
        "stove"
    ]

    warm_fd_blocks.forEach(block => {

        event.add("tfcambiental:warm_stuff", "farmersdelight:" + block)

    })

    //DECORATIVE BLOCKS

    const hot_db_blocks = [
        "brazier",
        "soul_brazier",
        "chandelier",
        "soul_chandelier"
    ]

    hot_db_blocks.forEach(block => {

        event.add("tfcambiental:hot_stuff", "decorative_blocks:" + block)

    })

    // FRAMED BLOCKS

    const warm_framed_blocks = [
        "framed_torch",
        "framed_soul_torch"
    ]

    warm_framed_blocks.forEach(block => {

        event.add("tfcambiental:warm_stuff", "framedblocks:" + block)

    })
});

ServerEvents.recipes(event => {

    //burlap
    //shirt
    event.custom({
        'type': 'sewingkit:sewing',
        'materials': [{
          'count': 4,
          'ingredient': {
            'item': 'tfc:burlap_cloth'
          }},{
          'count': 4,
          'ingredient': {
            'item': 'tfc:jute_fiber'
          }}
        ],
        'result': {
          'item': 'tfcambiental:burlap_shirt'
        },
        'tool': {
          'type': 'sewingkit:tool_ingredient',
          'tool_type': 'sewingkit_sew'
        }
      })
      //pants
      event.custom({
        'type': 'sewingkit:sewing',
        'materials': [{
          'count': 4,
          'ingredient': {
            'item': 'tfc:burlap_cloth'
          }},{
          'count': 2,
          'ingredient': {
            'item': 'tfc:jute_fiber'
          }}
        ],
        'result': {
          'item': 'tfcambiental:burlap_pants'
        },
        'tool': {
          'type': 'sewingkit:tool_ingredient',
          'tool_type': 'sewingkit_sew'
        }
      })
      //hat
      event.custom({
        'type': 'sewingkit:sewing',
        'materials': [{
          'count': 2,
          'ingredient': {
            'item': 'tfc:burlap_cloth'
          }},{
          'count': 2,
          'ingredient': {
            'item': 'tfc:jute_fiber'
          }}
        ],
        'result': {
          'item': 'tfcambiental:burlap_cowl'
        },
        'tool': {
          'type': 'sewingkit:tool_ingredient',
          'tool_type': 'sewingkit_sew'
        }
      })
      //shoes
      event.custom({
        'type': 'sewingkit:sewing',
        'materials': [{
          'count': 2,
          'ingredient': {
            'item': 'tfc:burlap_cloth'
          }},{
          'count': 4,
          'ingredient': {
            'item': 'tfc:jute_fiber'
          }},
          {
            'count': 1,
            'ingredient': {
              'tag': 'tfc:lumber'
            }}
        ],
        'result': {
          'item': 'tfcambiental:burlap_shoes'
        },
        'tool': {
          'type': 'sewingkit:tool_ingredient',
          'tool_type': 'sewingkit_sew'
        }
      })

    //wool
          //shirt
        event.custom({
            'type': 'sewingkit:sewing',
            'materials': [{
              'count': 4,
              'ingredient': {
                'item': 'tfc:wool_cloth'
              }},{
              'count': 4,
              'ingredient': {
                'item': 'tfc:wool_yarn'
              }}
            ],
            'result': {
              'item': 'tfcambiental:wool_sweater'
            },
            'tool': {
              'type': 'sewingkit:tool_ingredient',
              'tool_type': 'sewingkit_sew'
            }
          })
          //pants
          event.custom({
            'type': 'sewingkit:sewing',
            'materials': [{
              'count': 4,
              'ingredient': {
                'item': 'tfc:wool_cloth'
              }},{
              'count': 2,
              'ingredient': {
                'item': 'tfc:wool_yarn'
              }}
            ],
            'result': {
              'item': 'tfcambiental:wool_pants'
            },
            'tool': {
              'type': 'sewingkit:tool_ingredient',
              'tool_type': 'sewingkit_sew'
            }
          })
          //hat
          event.custom({
            'type': 'sewingkit:sewing',
            'materials': [{
              'count': 2,
              'ingredient': {
                'item': 'tfc:wool_cloth'
              }},{
              'count': 2,
              'ingredient': {
                'item': 'tfc:wool_yarn'
              }}
            ],
            'result': {
              'item': 'tfcambiental:wool_hat'
            },
            'tool': {
              'type': 'sewingkit:tool_ingredient',
              'tool_type': 'sewingkit_sew'
            }
          })
          //shoes
          event.custom({
            'type': 'sewingkit:sewing',
            'materials': [{
              'count': 2,
              'ingredient': {
                'item': 'tfc:wool_cloth'
              }},{
              'count': 4,
              'ingredient': {
                'item': 'tfc:wool_yarn'
              }},
              {
                'count': 1,
                'ingredient': {
                  'tag': 'tfc:lumber'
                }}
            ],
            'result': {
              'item': 'tfcambiental:wool_boots'
            },
            'tool': {
              'type': 'sewingkit:tool_ingredient',
              'tool_type': 'sewingkit_sew'
            }
          })
        //wool

    //silk
        //shirt
        event.custom({
            'type': 'sewingkit:sewing',
            'materials': [{
              'count': 4,
              'ingredient': {
                'item': 'tfc:silk_cloth'
              }},{
              'count': 4,
              'ingredient': {
                'item': 'minecraft:string'
              }}
            ],
            'result': {
              'item': 'tfcambiental:silk_shirt'
            },
            'tool': {
              'type': 'sewingkit:tool_ingredient',
              'tool_type': 'sewingkit_sew'
            }
          })
          //pants
          event.custom({
            'type': 'sewingkit:sewing',
            'materials': [{
              'count': 4,
              'ingredient': {
                'item': 'tfc:silk_cloth'
              }},{
              'count': 2,
              'ingredient': {
                'item': 'minecraft:string'
              }}
            ],
            'result': {
              'item': 'tfcambiental:silk_pants'
            },
            'tool': {
              'type': 'sewingkit:tool_ingredient',
              'tool_type': 'sewingkit_sew'
            }
          })
          //hat
          event.custom({
            'type': 'sewingkit:sewing',
            'materials': [{
              'count': 2,
              'ingredient': {
                'item': 'tfc:silk_cloth'
              }},{
              'count': 2,
              'ingredient': {
                'item': 'minecraft:string'
              }}
            ],
            'result': {
              'item': 'tfcambiental:silk_cowl'
            },
            'tool': {
              'type': 'sewingkit:tool_ingredient',
              'tool_type': 'sewingkit_sew'
            }
          })
          //shoes
          event.custom({
            'type': 'sewingkit:sewing',
            'materials': [{
              'count': 2,
              'ingredient': {
                'item': 'tfc:silk_cloth'
              }},{
              'count': 4,
              'ingredient': {
                'item': 'minecraft:string'
              }},
              {
                'count': 1,
                'ingredient': {
                  'tag': 'tfc:lumber'
                }}
            ],
            'result': {
              'item': 'tfcambiental:silk_shoes'
            },
            'tool': {
              'type': 'sewingkit:tool_ingredient',
              'tool_type': 'sewingkit_sew'
            }
          })

      
}
)
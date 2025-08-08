// priority: 1

ServerEvents.recipes(event => {

event.recipes.tfc.barrel_sealed(1000)
  .outputItem('chalk:white_chalk')
  .inputs('#chalk:chalks', TFC.fluidStackIngredient('tfc:lye', 25))

event.replaceInput({output: 'chalk:chalk_box'}, 'minecraft:paper', 'tfc:unrefined_paper')

event.shaped('4x chalk:white_chalk', [
  'BC',
  'B ',
], {
  B: 'tfc:brick/chalk',
  C: '#tfc:chisels'
}
).damageIngredient(Ingredient.of('#tfc:chisels'))

let colours = [ //You can use this section to batch add anything using all colors
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
  event.custom({
    type: "tfc:barrel_sealed",
    input_item: {
      ingredient: {
        tag: "chalk:chalks"
      }
    },
    input_fluid: {
      ingredient: "tfc:" + colour + "_dye",
      amount: 25
    },
    output_item: {
      item: "chalk:" + colour + "_chalk"
    },
    duration: 1000
  })
})
})
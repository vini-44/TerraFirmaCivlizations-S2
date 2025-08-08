// priority: 1

ServerEvents.recipes(event => {

/*
        Replace inputs

Format:
event.replaceInput(
  { input: 'mod:item_id'},
  'mod:item_being_replaced',
  'mod:replacement_item
)

*/
event.replaceInput(
  { output: 'decorative_blocks:chandelier'},
  'tfc:torch',
  'minecraft:torch'
)
event.replaceInput(
  { output: 'decorative_blocks:brazier'},
  'minecraft:iron_bars',
  'tfc:metal/bars/wrought_iron'
)
event.replaceInput(
  { output: 'decorative_blocks:brazier'},
  '#minecraft:coals',
  'minecraft:torch'
)


/*
        TFC Welding Recipes

Format:
event.recipes.tfc.welding('mod:output_id', 'mod:input_id', 'mod:additional_item_id',#) // # = tier

*/



/*
        Shaped Recipes

Format:
event.shaped('mod:output_id',[
  'XXX',
  'XXX',
  'XXX'
],{
  X: 'mod:input_id'
}).damageIngredient(Ingredient.of('mod:tool')) // optional

*/


})
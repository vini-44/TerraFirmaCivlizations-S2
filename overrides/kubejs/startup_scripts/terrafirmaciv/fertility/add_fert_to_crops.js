BlockEvents.modification(event => {
    event.modify('minecraft:andesite', block => {
        block.isRandomlyTicking = true;
        block.setRandomTickCallback(Convert);
    });
});

function Convert(block, random) {
    block.getLevel().setBlockAndUpdate(block.pos, 'minecraft:stone');
}
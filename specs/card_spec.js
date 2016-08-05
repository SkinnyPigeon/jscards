var assert = require( 'chai' ).assert
var Cards = require( '../cards' )


describe( 'The cards: ', function() {

  beforeEach( function() {
      cards = new Cards;
      cards.build();
      cards.shuffle();
    })

  it( 'Should have a full suit: ', function() {
    assert.deepEqual( 13, cards.diamonds.length )
  })

  it ( 'Should shuffle the pack: ', function()  {
    assert.deepEqual( true, cards.startingPack != this.shuffledPack )
  })

  it( 'Should be able to deal a card: ', function() {
    cards.deal();
    assert.deepEqual( 51, cards.shuffledPack.length )
  })

  // it( 'Should have a card to give to player', function() {
  //   cards.deal()
  //   assert.equal( "A♠️", cards.dealtCard )
  // })


})


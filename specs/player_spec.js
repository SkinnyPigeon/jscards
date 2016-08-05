var assert = require( 'chai' ).assert
var Cards = require( '../cards' )
var Player = require( '../player' )


describe( 'The player: ', function() {

  beforeEach( function() {
      cards = new Cards;
      cards.build();
      cards.shuffle();

      jeff = new Player( "Jeff" );
    })

  it( 'Should have a name', function() {
    assert.equal( "Jeff", jeff.name )
  })

  it( 'Should have some chips', function() {
    assert.equal( 500, jeff.chips )
  })

  it( 'Should start with an empty hand', function() {
    assert.equal( 0, jeff.hand.length )
  })

  it ('Should be able to take a card', function() {
    cards.deal()
    jeff.getCard( cards.dealtCard );
    assert.equal( 1, jeff.hand.length )
  })

})
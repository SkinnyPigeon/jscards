var assert = require( 'chai' ).assert
var Cards = require( '../cards' )
var Public = require( '../shared_cards' )


describe( 'The Pile: ', function() {

  beforeEach( function() {
    cards = new Cards;
    cards.build();
    cards.shuffle();

    public = new Public();
  })

  it( 'Should start with an no cards', function() {
    assert.equal( 0, public.hand.length )
  })

  it ('Should be able to take a card', function() {
    cards.deal()
    public.getCard( cards.dealtCard );
    assert.equal( 1, public.hand.length )
  })

})
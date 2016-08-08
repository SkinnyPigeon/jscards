var assert = require( 'chai' ).assert
var Cards = require( '../cards')
var Game = require( '../game' )
var Player = require( '../player' )
var TestCards = require( '../test_cards' )

describe( 'The game: ', function() {

  beforeEach( function() {
    cards = new Cards;
    cards.build();
    cards.shuffle();

    jeff = new Player( "Jeff" );
    game = new Game();
    test = new TestCards();
  })

  it( 'Should have no players to begin with', function() {
    assert.equal( 0, game.players.length )
  })

  it( 'Should be able to take in a player', function() {
    game.addPlayer( jeff );
    assert.deepEqual( jeff, game.players[0] )
  })

  it( 'Should start with 0 in the pot', function() {
    assert.equal( 0, game.pot )
  })

  it( 'Should be able to have its pot increase', function() {
    jeff.placeBet( 100 );
    game.takeBet( jeff )
    assert.equal( 100, game.pot );
  })

  it( 'Should be able to see the test cards', function() {
    assert.equal( 4, test.pack.length )
  })




})
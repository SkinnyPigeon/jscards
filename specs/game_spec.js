var assert = require( 'chai' ).assert
var Cards = require( '../cards')
var Game = require( '../game' )
var Player = require( '../player' )

describe( 'The game: ', function() {

  beforeEach( function() {
    cards = new Cards;
    cards.build();
    cards.shuffle();

    jeff = new Player( "Jeff" );

    game = new Game();

  })

  it( 'Should have no players to begin with', function() {
    assert.equal( 0, game.players.length )
  })

  it( 'Should be able to take in a player', function() {
    game.addPlayer( jeff );

    assert.deepEqual( jeff, game.players[0] )
  })
})
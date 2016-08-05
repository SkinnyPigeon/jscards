var assert = require( 'chai' ).assert
var Cards = require( '../cards')
var Game = require( '../game' )
var Player = require( '../player' )

describe( 'The game: ', function() {

  beforeEach( function() {
    cards = new Cards;
    cards.build();
    cards.shuffle();

    player1 = new Player;
  })

  // it( 'Should be able to take in a card', function() {
  //   assert.deepEqual( 1, game.player1)
  // })
})
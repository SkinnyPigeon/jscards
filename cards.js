var _ = require( 'lodash' )

var Cards = function() {

  this.spades = [ "A♠️", "2♠️", "3♠️", "4♠️", "5♠️", "6♠️", "7♠️", "8♠️", "9♠️", "10♠️", "J♠️", "Q♠️", "K♠️" ];

  this.hearts = [ "A♥️", "2♥️", "3♥️", "4♥️", "5♥️", "6♥️", "7♥️", "8♥️", "9♥️", "10♥️", "J♥️", "Q♥️", "K♥️" ];

  this.clubs = [ "A♣️", "2♣️️", "3♣️️", "4♣️️", "5♣️️", "6♣️️", "7♣️️", "8♣️️", "9♣️️", "10♣️️", "J♣️️", "Q♣️️", "K♣️️" ];

  this.diamonds = [ "A♦️", "2♦️️", "3♦️️", "4♦️", "5♦️️", "6♦️", "7♦️", "8♦️️", "9♦️", "10♦️", "J♦️", "Q♦️", "K♦️" ];

  this.startingPack = [];

  this.shuffledPack = [];

  this.dealtCard = ""

}

Cards.prototype = {

  build: function() {
    this.startingPack = this.spades.concat( this.hearts, this.clubs, this.diamonds )
  },

  shuffle: function() {
    this.shuffledPack = _.shuffle( this.startingPack )
  },

  deal: function() {
    this.dealtCard = this.shuffledPack.pop()
  }

}



module.exports = Cards
var Player = function( name ) {
  this.name = name;
  this.chips = 500;
  this.hand = [];
}

Player.prototype = {
  getCard: function( card ) {
    this.hand.push( card )
  }

}

module.exports = Player;
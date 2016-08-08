var Public = function() {
  this.hand = [];
}

Public.prototype = {
  getCard: function( card ) {
    this.hand.push( card )
  }

}

module.exports = Public;
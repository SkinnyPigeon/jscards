var assert = require( 'chai' ).assert
var TestCards = require( '../test_cards' )

describe( 'The logic: ', function() {

  beforeEach( function() {
    test = new TestCards();
  })

  it( 'Should be able to see the test cards', function() {
    assert.equal( 4, test.pack.length )
  })

})


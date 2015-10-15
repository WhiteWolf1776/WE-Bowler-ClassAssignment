/**
 * Created by nbliz0 on 10/15/2015.
 */

//input should be a legal number or accepted valid symbols
//input should not be less than 0
//input should not exceed 10

var assert = chai.assert;

describe( 'Validating Input', function()  {

  it( 'should validate user input', function() {
    var result = return0();
    assert.equal( result, 0 );
  } );

  it( 'should be a legal number', function() {
    var numResult = validateNumber();
    assert.equal( numResult, false );
  });

  it( 'should be valid symbol', function() {
    var symResult = validateSymbol();
    assert.equal( symResult, false );
  });

  it( 'should be a valid game with 20 frames', function() {
    var game [[1,1], [1,1], [1,1], [1,1], [1,1],
              [1,1], [1,1], [1,1], [1,1], [1,1]];
    
  });

} );

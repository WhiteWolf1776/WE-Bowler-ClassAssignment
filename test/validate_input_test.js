/**
 * Created by nbliz0 on 10/15/2015.
 */

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

} );

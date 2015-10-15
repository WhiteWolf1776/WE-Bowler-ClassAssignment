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
    assert.equal( symResult, true );
  });

  it( 'minimum value should be 0', function() {
    var minScore = 1;
    var minResult = validateMinScore( minScore );
    assert.equal( minResult, true );
  });

  it( 'maximum value should be 10', function() {
    var maxScore = 11;
    var maxResult = validateMaxScore( maxScore );
    assert.equal( maxResult, false );
  });



} );

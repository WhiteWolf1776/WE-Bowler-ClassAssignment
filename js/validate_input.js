/**
 * Created by nbliz0 on 10/15/2015.
 */

function return0 () {
  return 0;
}

function validateNumber () {
  var input = 0;
  var result = isNaN( input );
  return result;
}

function validateSymbol () {
var symbols = ['X', '/', '-'];
var input = 'Y';
var result = symbols.indexOf( input );
  if( result >= 0 ) {
    return true;
  }
  else {
    return false;
  }
}

function validateMinScore ( score ) {
  var min = 0;
  if( score < min ){
    return false;
  }
  else {
    return true;
  }
}

function validateMaxScore ( score ) {
  var max = 10;
  if( score <= max){
    return true;
  }
  else {
    return false;
  }
}

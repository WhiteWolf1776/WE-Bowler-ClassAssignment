/**
 * Created by nbliz0 on 10/15/2015.
 */

var assert = chai.assert;

describe( 'Scoring Tests', function() {

    it( 'should calculate score for first frame', function() {
        score = [['3', '5']];
        calculateScore();
        assert.equal( score[0][3], '8');
    } );

    it( 'should calculate score for two frames that do not include strike or spare', function() {
        score = [['3', '5'],['2','6']];
        calculateScore();
        assert.equal( score[1][3], '16');
    });

    it( 'should calculate the score for all 10 frames including no spares or strikes', function() {
        score = [['5', '3'],['5', '3'],['5', '3'],['5', '3'],['5', '3'],['5', '3'],['5', '3'],['5', '3'],['5', '3'],['5', '3']];
        calculateScore();
        assert.equal( score[9][3], '80');
    })
} );

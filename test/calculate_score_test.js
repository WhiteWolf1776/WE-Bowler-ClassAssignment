/**
 * Created by nbliz0 on 10/15/2015.
 */

var assert = chai.assert;
var rolls;

var perfectGame = [[10,0],[10,0],[10,0],[10,0],[10,0],
                   [10,0],[10,0],[10,0],[10,0],[10,10,10]];

var twentyFrameGame = [[1,1],[1,1],[1,1],[1,1],[1,1],
                       [1,1],[1,1],[1,1],[1,1],[1,1]];

var gameWithOneBonusPin = [[9,1],[1,0],[0,0],[0,0],[0,0],
                           [0,0],[0,0],[0,0],[0,0],[0,0]];

var gameWithTwoBonusPins = [[10,0],[1,1],[0,0],[0,0],[0,0],
                            [0,0],[0,0],[0,0],[0,0],[0,0]];

describe( 'Scoring Tests', function() {

    it( 'should calculate score for first frame', function() {
        rolls = calculateScore(twentyFrameGame);
        assert.equal( rolls[0][3], 2);
    } );

    it( 'should calculate score for two frames that do not include strike or spare', function() {
        rolls = calculateScore(twentyFrameGame);
        assert.equal( rolls[1][3], 4);
    });

    it( 'should calculate the score for all 10 frames including no spares or strikes', function() {
        rolls = calculateScore(twentyFrameGame);
        assert.equal( rolls[9][3], 20);
    });

    it ('it should calculate a game with a spare and one bonus pin', function(){
        rolls = calculateScore(gameWithOneBonusPin);
        assert.equal( rolls[9][3], 12);
    });

    it ('it should calculate a game with a strike and two bonus pins', function(){
        rolls = calculateScore(gameWithTwoBonusPins);
        assert.equal( rolls[9][3], 14);
    });

} );

/**
 * Created by nbliz0 on 10/15/2015.
 */

var assert = chai.assert;
var rolls;

var perfectGame = [[10],[10],[10],[10],[10],
                   [10],[10],[10],[10],[10],[10],[10]];

var twentyFrameGame = [['1','1'],['1','1'],['1','1'],['1','1'],['1','1'],
                       ['1','1'],['1','1'],['1','1'],['1','1'],['1','1']];

var gameWithOneBonusPin = [['9','1'],['1','0'],['0','0'],['0','0'],['0','0'],
                           ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']];

var gameWithTwoBonusPins = [['10'],['1','1'],['0','0'],['0','0'],['0','0'],
                            ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']];

describe( 'Scoring Tests', function() {

    it( 'should calculate score for first frame', function() {
        rolls = [['3', '5']];
        rolls = calculateScore(rolls);
        assert.equal( rolls[0][3], '8');
    } );

    it( 'should calculate score for two frames that do not include strike or spare', function() {
        rolls = [['3', '5'],
                 ['2','6']];
        rolls = calculateScore(rolls);
        assert.equal( rolls[1][3], '16');
    });

    it( 'should calculate the score for all 10 frames including no spares or strikes', function() {
        rolls = [['5', '3'],
                 ['5', '3'],
                 ['5', '3'],
                 ['5', '3'],
                 ['5', '3'],
                 ['5', '3'],
                 ['5', '3'],
                 ['5', '3'],
                 ['5', '3'],
                 ['5', '3']];
        rolls = calculateScore(rolls);
        assert.equal( rolls[9][3], '80');
    })
} );

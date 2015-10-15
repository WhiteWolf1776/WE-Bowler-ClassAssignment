/**
 * Created by nbliz0 on 10/15/2015.
 */
var score;
var gameScore;

function calculateScore( ) {
    gameScore = 0;
    for ( var i = 0; i < score.length; i++ ){
        gameScore += parseInt(score[i][0]) + parseInt(score[i][1]);
        score[i][3] = gameScore.toString();
    }
}



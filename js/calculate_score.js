/**
 * Created by nbliz0 on 10/15/2015.
 */

function calculateScore(score) {
    var gameScore = 0;
    for ( var i = 0; i < score.length; i++ ){
        gameScore += parseInt(score[i][0]) + parseInt(score[i][1]);
        score[i][3] = gameScore.toString();
    }

    return score;
}



/**
 * Created by nbliz0 on 10/15/2015.
 */

function calculateScore(score) {
    var gameScore = 0;
    for ( var i = 0; i < score.length; i++ ){
        var thisFrame = score[i][0] + score[i][1];
        if ( score[i][0] == 10 )
        {

        }
        else if (thisFrame == 10)
        {
            thisFrame = thisFrame + score[i+1][0]
        }
        gameScore += thisFrame;
        score[i][3] = gameScore;
    }

    return score;
}



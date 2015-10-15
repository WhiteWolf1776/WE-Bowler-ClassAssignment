/**
 * Created by nbliz0 on 10/15/2015.
 */

function calculateScore(score) {
    var gameScore = 0;
    var thisFrame = 0
    for ( var i = 0; i < score.length && i < 8; i++ ){
        thisFrame = score[i][0] + score[i][1];
        if ( score[i][0] == 10 )
        {
            if (score[i+1][0] != 10) {
                thisFrame += score[i + 1][0] + score[i + 1][1];
            }
            else
            {
                thisFrame += score[i+1][0] + score[i+2][0];
            }
        }
        else if (thisFrame == 10)
        {
            thisFrame = thisFrame + score[i+1][0]
        }
        gameScore += thisFrame;
        score[i][3] = gameScore;
    }

    if (score.length > 8){
        thisFrame = score[8][0] + score[8][1];
        if ( score[8][0] == 10 )
        {
            thisFrame += score[9][0] + score[9][1];
        }
        else if (thisFrame == 10)
        {
            thisFrame = thisFrame + score[9][0]
        }
        gameScore += thisFrame;
        score[8][3] = gameScore;

    }
    if (score.length > 9) {
        thisFrame = score[9][0] + score[9][1];
        if ( score[9][0] == 10 )
        {
            thisFrame += score[9][2];
        }
        else if (thisFrame == 10)
        {
            thisFrame +=  score[9][2]
        }
        gameScore += thisFrame;
        score[9][3] = gameScore;
    }

    return score;
}



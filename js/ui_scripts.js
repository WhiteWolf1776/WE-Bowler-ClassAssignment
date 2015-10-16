/**
 * Created by nbliz0 on 10/15/2015.
 */
var gameNumber = 0;

function addPlayerInfo() {
  document.write("<div id='playerInfoTable'>");
     document.write("<table>"
                   +"<tr>"
                   +"<td style='padding: 10px;'>Player Name : <input type='text' name='Player Name' size='50'/>"
                   +"</td>"
                   +"</tr>"
                   +"</table>");
     document.write("<table>"
                   +"<tr>"
                   +"<td style='padding: 10px;'>Place Name : <input type='text' name='Place Name' size='50'/>"
                   +"</td>"
                   +"</tr>"
                   +"</table>");
     document.write("<table>"
                   +"<tr>"
                   +"<td style='padding: 10px;'>Date and Time : <input type='Date' name='Datetime' size='50'/>"
                   +"</td>"
                   +"</tr>"
                   +"</table>");
  document.write("</div>");
}

function addGame() {
    gameNumber = gameNumber + 1;
    var gameName = "Game" + gameNumber;
    document.write("<form id='" + gameName + "' name='" + gameName + "' onSubmit='return false'>");
    document.write("<table id='gameNameTable'>"
                  +"<tr>"
                  +"<td style='padding: 10px;'>"
                  +"<input name='Game' type='text' size='30' value='" + gameName + "'/>"
                  +"</td>"
                  +"</tr>"
                  +"</table>");
    document.write("<table id='gameScoreTable'><tr>");
    for (var i = 1; i <= 10; i++) {
        document.write("<td colspan='2' id='frame'>"+i+"</td>");
    }
    document.write("</tr><tr>");
    for (var i = 0; i <= 20; i++)  // Display input fields
    {
        document.write("<td id= 'frameScoreCell'>"
                      +"<input type='text' name='ball' size='1' maxLength='1' onChange='calculate("+gameName+")' />"
                      +"</td>");
    }
    document.write("<td>&nbsp;</td><td>Max Score</td></tr><tr>");  // Display the Max Score heading

    for (var i = 0; i < 10 ; i++)  // Display the score boxes
    {
        document.write("<td colspan='2'><input type='text' name='score' size='7' readOnly='true' /></td>");
    }
    //TODO: make this Final Score and use in the average method
    document.write("<td colspan='2'>"
                  +"&nbsp;"
                  +"</td>"
                  +"<td>"
                  +"<input type='text' name='maxScore' size='8' readOnly='true' value='300'/>"
                  +"</td>"
                  +"</tr>");

    // Display pin diagram
    document.write("<tr>");
    for (var i=0; i<11; i++)  // Back row 4
    {
        document.write("<td colspan='2'>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",7)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"7' />"
                      +"</a>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",8)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"8' />"
                      +"</a>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",9)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"9' />"
                      +"</a>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",10)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"10' />"
                      +"</td>");
    }
    document.write("</tr><tr>");
    for (var i=0; i<11; i++)  // 3 pin row
    {
        document.write("<td colspan='2' style='padding-left: 6px;'>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",4)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"4' />"
                      +"</a>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",5)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"5' />"
                      +"</a>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",6)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"6' />"
                      +"</a>"
                      +"</td>");
    }
    document.write("</tr><tr>");
    for (var i=0; i<11; i++)  // 2 pin row
    {
        document.write("<td colspan='2' style='padding-left: 11px;'>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",2)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"2' />"
                      +"</a>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",3)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"3' />"
                      +"</a>"
                      +"</td>");
    }
    document.write("</tr><tr>");
    for (var i=0; i<11; i++)  // head pin
    {
        document.write("<td colspan='2' style='padding-left: 17px;'>"
                      +"<a href='#' onClick='changePin("+gameName+","+i+",1)' />"
                      +"<img src='hit.gif' name='"+gameName+i+"1' />"
                      +"</a>"
                      +"</td>");
    }
    document.write("</tr>");
    document.write("<tr>"
                  +"<td colspan='4' id='tip'>"
                  +"<img src='hit.gif' name='hitGif'  /> Pin knocked down</td>"
                  +"<td colspan='6' id='tip'>"
                  +"<img src='left.gif' name='leftGif' /> Pin left standing after 1st ball</td>"
                  +"<td colspan='6' id='tip'>"
                  +"<img src='miss.gif' name='missGif' /> Pin left standing after spare ball</td>"
                  +"<td colspan='7' style='text-align: right;'>"
                  +"<input style='font-weight: normal; padding-right: 5px;' type='button' name='clear' value='Clear values' onClick='clearValues("+gameName+")' />"
                  +"</td>"
                  +"</tr>"
                  +"</table>");
    document.write("</form>");
}

function changePin(form, frame, pin) {
    imgName = form.name+frame+pin;
    fileName = document.images[imgName].src;
    if (fileName.indexOf("hit") != -1)
    {
        document.images[imgName].src = "left.gif";
    }
    else if (fileName.indexOf("left") != -1)
    {
        document.images[imgName].src = "miss.gif";
    }
    else
    {
        document.images[imgName].src = "hit.gif";
    }
}

function linkStylesheet() {
  document.write("<head>");
  //link main.css
  document.write("<link rel='stylesheet' href='./css/main.css' type='text/css'>");
  //link google font api
  document.write("<link href='https://fonts.googleapis.com/css?family=Chewy' rel='stylesheet' type='text/css'>");
  document.write("</head>");
}

function writeScoreToForm(gameData, form) {

    for (var i = 0; i < 10; i++){
        if (form.ball[i*2].value.length > 0) {
            form.score[i].value = gameData[i][3];
            var fudgeFactor = 30;
            if (i >= 9){
                fudgeFactor = 0;
            }
            else if (i == 0)
            {
                fudgeFactor = 20;
            }
            form.maxScore.value = ((9-i)*30)+ gameData[i][3] + fudgeFactor;

        } else
            return;
    }
}

function addGameButton() {

    document.write("<button class='addGameButton' onclick='addGame()'>Add Game</button><br><br>");
    document.write("<td>&nbsp;</td><td>Average Score</td></tr><tr>");  // Display the Max Score heading
    document.write("<td colspan='2'>&nbsp;</td><td><input type='text' id='avgScore' name='avgScore' size='8' readOnly='true' value=''/></td></tr>");
}

// calculate is called every time a score value is changed
function calculate(form) {

    //get scores from the text boxes and validate all strings

    var gameData = parseValues(form);

    //calculate score
    gameData = calculateScore(gameData);

    //write scores to text boxes
    writeScoreToForm(gameData, form);

    //update avgScore if necessary
    buildAverageScore();

    //calculateOldAndUgly(form);
}

function buildAverageScore(){
    if (gameNumber == 0){
        return;
    }

    //collect scores
    var avgScore = 0;
    var numFinalScoredGames = 0;
    for (var i = 1; i <= gameNumber; i++){
        var form = document.getElementById( 'Game' + i);
        if (form.score[9].value.length > 0) {
            avgScore += parseInt(form.score[9].value);
            numFinalScoredGames++;
        }
    }

    //avgScore
    if (numFinalScoredGames > 0) {
        avgScore = avgScore / numFinalScoredGames;

        //write to the screen
        document.getElementById('avgScore').value = avgScore;
    }
}

function convertStringToScore(ballScore) {
    // if X make 10
    if (ballScore == 'X' || ballScore == 'x')
    {
        return 10;
    }
    //if - make 0
    if (ballScore == '-' || ballScore.length <= 0)
    {
        return 0;
    }

    //if number - make int
    if (!isNaN(ballScore) ) {
        return parseInt(ballScore);
    }

    return 0;
}

function parseValues(form) {
    var fieldValueList = [];
    var fieldValue;
    //store text boxes in the var
    for ( var i = 0; i <= 20; i++ ) {
        fieldValue = form.ball[i].value;
        fieldValueList[i] = fieldValue;
    }

    //convert game to integer data
    var gameData = [[0,0],[0,0],[0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0],[0,0],[0,0]];

    for (var i = 0; i < 10; i++){

        var dataNum = i * 2;
        //check for X, for -, for nan
        gameData[i][0] = convertStringToScore(fieldValueList[dataNum]);
        if (fieldValueList[dataNum + 1] != '/') {
            gameData[i][1] = convertStringToScore(fieldValueList[dataNum + 1]);
        } else {
            gameData[i][1] = 10 - gameData[i][0];
        }
        if (i == 9) {
            gameData[i][2] = convertStringToScore(fieldValueList[dataNum + 2]);
        }
    }

    //return data
    return gameData;
}

function clearValues(form) {
    for (var i = 0; i <= 20; i++)  // Clear ball entries
    {
        form.ball[i].value = "";
    }
    for (var i = 0; i < 10; i++)  // Clear score fields
    {
        form.score[i].value = "";
    }
    for (var frame = 0; frame < 11; frame++)  // Clear pin diagrams
    {
        for (var pin = 1; pin < 11; pin++)
        {
            imgName = form.name+frame+pin;
            document.images[imgName].src = "hit.gif";
        }
    }
    form.maxScore.value = "300";  // Clear Max Score field
    form.player.value = "";  // Clear Player Name field
}

function validateInput(form) {

    for (var i = 0; i <= 18; i++)  // Balls through 18, first balls can't have / and 2nd balls can't have x
    {
        if (form.ball[i].value == '-')  // Change dashes to zeroes
            form.ball[i].value = '0';
        fieldValue = form.ball[i].value;
        if (i % 2 == 0 && fieldValue != '0' && fieldValue != '1' && fieldValue != '2' && fieldValue != '3' && fieldValue != '4' && fieldValue != '5' && fieldValue != '6' && fieldValue != '7' && fieldValue != '8' && fieldValue != '9' && fieldValue.toLowerCase() != 'x')
            form.ball[i].value = "";  // Even j value means it's ball 1 of the frame
        if (i % 2 != 0 && fieldValue != '0' && fieldValue != '1' && fieldValue != '2' && fieldValue != '3' && fieldValue != '4' && fieldValue != '5' && fieldValue != '6' && fieldValue != '7' && fieldValue != '8' && fieldValue != '9' && fieldValue != '/')
            form.ball[i].value = "";  // Not even j value means it's ball 2 of the frame
    }
    // Special check on ball 19 and 20 - can have all values 0-9 and x and /
    for (var i=19; i<=20; i++)
    {
        if (form.ball[i].value == '-')
            form.ball[i].value = '0';
        fieldValue = form.ball[i].value;
        if (fieldValue != '0' && fieldValue != '1' && fieldValue != '2' && fieldValue != '3' && fieldValue != '4' && fieldValue != '5' && fieldValue != '6' && fieldValue != '7' && fieldValue != '8' && fieldValue != '9' && fieldValue != '/' && fieldValue != 'x')
            form.ball[i].value = "";
    }

}

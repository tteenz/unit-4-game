var targetNumber = Math.floor((Math.random() * 90) + 10);
$("#numberGuess").text(targetNumber);

var counter = 0;
var wins = 0;
var losses  = 0;

$('#counter').text(totalScore);
$('#numWins').text(wins);
$('#numLosses').text(losses);

// Value of Disney character
var firstNum = Math.floor(Math.random() * 11+1);
var secNum = Math.floor(Math.random() * 11+1);
var thirdNum = Math.floor(Math.random() * 11+1);
var fourthNum = Math.floor(Math.random() * 11+1);

// Resets the game
function reset() {
    targetNumber = Math.floor((Math.random() * 90) + 10);
    console.log(targetNumber)
    $("#numberGuess").text(targetNumber);
    var firstNum = Math.floor(Math.random() * 11+1);
    var secNum = Math.floor(Math.random() * 11+1);
    var thirdNum = Math.floor(Math.random() * 11+1);
    var fourthNum = Math.floor(Math.random() * 11+1);    
    counter = 0;
    $('#totalScore').text(counter);
}

function winner(){
    alert("You won!");
    wins++;
    $('#numWins').text(wins);
    reset();
}

function loser() {
    alert ("You lose!)");
    losses++;
    $('#numLosses').text(losses);
    reset()
}

$('#mickey').on('click', function(){
    counter = counter + firstNum;
    console.log("New counter=" + counter);
    $('#totalScore').text(counter);

        if (counter == targetNumber){
            winner();
        }
        else if (counter > targetNumber){
            loser();
        }
})

$('#baymax').on('click', function(){
    counter = counter + secNum;
    console.log("New counter=" + counter);
    $('#totalScore').text(counter);

        if (counter == targetNumber){
            winner();
        }
        else if (counter > targetNumber){
            loser();
        }
})

$('#stitch').on('click', function(){
    counter = counter + thirdNum;
    console.log("New counter=" + counter);
    $('#totalScore').text(counter);

        if (counter == targetNumber){
            winner();
        }
        else if (counter > targetNumber){
            loser();
        }
})

$('#jack').on('click', function(){
    counter = counter + fourthNum;
    console.log("New counter=" + counter);
    $('#totalScore').text(counter);

        if (counter == targetNumber){
            winner();
        }
        else if (counter > targetNumber){
            loser();
        }
});

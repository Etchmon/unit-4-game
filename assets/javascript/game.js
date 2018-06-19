var score = 0;
var wins = 0;
var losses = 0;

var randomNumber = Math.floor((Math.random() * 500) + 100);
var ruby = Math.floor((Math.random() * 50) + 1);
var emerald = Math.floor((Math.random() * 20) + 1);
var topaz = Math.floor((Math.random() * 30) + 1);
var sapphire = Math.floor((Math.random() * 40) + 1);

$(".thistag").html(randomNumber);

console.log(sapphire);

function setGame(){
    ruby = Math.floor((Math.random() * 50) + 1);
    emerald = Math.floor((Math.random() * 20) + 1);
    topaz = Math.floor((Math.random() * 30) + 1);
    sapphire = Math.floor((Math.random() * 40) + 1);
    randomNumber = Math.floor((Math.random() * 500) + 100);

    $(".thistag").html(randomNumber);

    score = 0;

    $(".number").html("score here")

    console.log(randomNumber)

}

function win(){
    alert("CONGRATZ M8 YOU WON!");
    wins++;
    $(".wins").html("Wins: " + wins);
    setGame();
}

function lose(){
    alert("You lost dude");
    losses++;
    $(".losses").html("Losses: " + losses);
    setGame();
}


$("#ruby").on("click", function(){
    score = score + ruby;
    $(".number").html(score);
    if(score === randomNumber){
            win();
        }
    else if ( score > randomNumber){
            lose();
        }

});

$("#sapphire").on("click", function(){
    score = score + sapphire;
    $(".number").html(score);
        if(score === randomNumber){
            win();
        }
        else if ( score > randomNumber){
            lose();
        }

});

$("#emerald").on("click", function(){
    score = score + emerald;
    $(".number").html(score);
        if(score === randomNumber){
            win();
        }
        else if ( score > randomNumber){
            lose();
        }

});

$("#topaz").on("click", function(){
    score = score + topaz;
    $(".number").html(score);
        if(score === randomNumber){
            win();
        }
        else if ( score > randomNumber){
            lose();
        }

});
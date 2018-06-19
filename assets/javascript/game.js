var score = 0;
var wins = 0;
var losses = 0;

var randomNumber = Math.floor((Math.random() * 500) + 1);
var ruby = Math.floor((Math.random() * 50) + 1);
var emerald = Math.floor((Math.random() * 100) + 1);
var topz = Math.floor((Math.random() * 30) + 1);
var sapphire = Math.floor((Math.random() * 40) + 1);

console.log(randomNumber);
console.log(sapphire);

function setGame(){
    var randomNumber = Math.floor((Math.random() * 500) + 1);
    var ruby = Math.floor((Math.random() * 50) + 1);
    var emerald = Math.floor((Math.random() * 100) + 1);
    var topz = Math.floor((Math.random() * 30) + 1);
    var sapphire = Math.floor((Math.random() * 40) + 1);

    $(".thistag").html(randomNumber);
}

setGame();

$("#ruby").on("click", function(){
    $(".readme").html("hahahah")
});
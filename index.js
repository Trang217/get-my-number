    'use strict';


    let secretNumber = Math.trunc(Math.random()*20)+1;

    let score = 20;

    document.querySelector(".check").addEventListener("click", function(){
    console.log(document.querySelector(".guess").value);
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    
    // when there is no input

    if (!guess){
        document.querySelector(".message").textContent = "No number!";

    // when the player wins 

    } else if (guess === secretNumber){
        document.querySelector(".message").textContent = "Correct Number!";
        document.querySelector(".number").textContent = secretNumber;


        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

    // when guess is too high

    } else if (guess > secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = "Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game!";
            document.querySelector(".score").textContent = 0;

        }

    // when guess is too low

    } else if (guess < secretNumber) {
        if(score > 1){
            document.querySelector(".message").textContent = "Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game!";
            document.querySelector(".score").textContent = 0;

        }

        
    }
});


// restore the game

document.querySelector(".again").addEventListener("click", function(){

    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";


    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";


   
})
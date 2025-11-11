// //generated a random color

// const randomColor = function () {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// let intervalId;
// const startChangingColor = function () {
//   if (!intervalId){
//     intervalId = setInterval(changeBgColor, 1000);
//   }

//   function changeBgColor() {
//     document.body.style.backgroundColor = randomColor();
//   }
// };
// const stopChangingColor = function () {
//   clearInterval(intervalId);
//   intervalId = null;
// };

// document.querySelector("#start").addEventListener("click", startChangingColor);

// document.querySelector("#stop").addEventListener("click", stopChangingColor);










const prompt = require("prompt-sync")();

const max = 100
const min = 1
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let numberOfGuessLeft = 10;

prevGuess = [];

for (let i = 1; i <= 10; i++){

    // Taking user guess
    let userInput = Number(prompt("Enter your guess: "))
    
    // Checking whether the given number is between 1 to 100 or not and the number is valid or not
    if (userInput < 1 || userInput > 100 || isNaN(userInput)){
    
        console.log("Please choose number between 1 to 100 or you have entered a invalid number");
        console.log();      // to add space
        numberOfGuessLeft--;
        console.log(`Number of guess left: ${numberOfGuessLeft}`);
        prevGuess.push(userInput)
        console.log(`Previous guesses: ${prevGuess},`);
        console.log();      // to add space
        continue;
    }


    // Checking user guess the correct number or not
    if (userInput > randomNumber){

        console.log("Too high!!!");
        numberOfGuessLeft--;
        console.log();      // to add space
        console.log(`Number of guess left: ${numberOfGuessLeft}`);
        prevGuess.push(userInput)
        console.log(`Previous guesses: ${prevGuess},`);
        console.log();      // to add space
    
    } else if (userInput < randomNumber){
    
        console.log("Too low!!!");
        numberOfGuessLeft--;
        console.log();      // to add space
        console.log(`Number of guess left: ${numberOfGuessLeft}`);
        prevGuess.push(userInput)
        console.log(`Previous guesses: ${prevGuess},`);
        console.log();      // to add space
    
    } else if (userInput === randomNumber){
    
        console.log();      // to add space
        console.log("   Congratulations!!!! You have guessed the number correct.");
        break;
    }


    // Checking user have number of chances left or not
    if (numberOfGuessLeft == 0){
        console.log();      // to add space
        console.log("   Sorry!!! You lost the game");
    }

}

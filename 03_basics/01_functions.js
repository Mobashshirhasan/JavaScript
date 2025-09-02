function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("B");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("R");
}

// sayMyName()


// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2)
// }
// addTwoNumber(4, 5)


function addTwoNumber(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1 + number2

}
const result = addTwoNumber(4, 5)
// console.log("Result: ", result);


function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("MObashshir"))
console.log(loginUserMessage())  //undefined

 
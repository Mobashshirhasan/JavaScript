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


function loginUserMessage(username = "sam"){ //default value 'sam'
    // if (username === undefined){
    if (!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("MObashshir"))
// console.log(loginUserMessage(""))  //if we don't pass any value then it wil undefined
// console.log(loginUserMessage("Mobashshir"))  //if we pass any value then it will override the value of username



function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))


const user = {
    username: "mobashshir",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 599
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
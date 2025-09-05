const user = {
    username: "mobashshir",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this : current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// const chai = function (){
//     let username = "Mobashshir"
//     console.log(this.username );  //username can't be access here (undefined)
// }

// chai()

// const chai = () => {
//     let username = "Mobashshir"
//     console.log(this);
// }
// chai()

// () => {}  // Arrow function

// const addTwo = (num1 , num2) => {  //basic arrow function
//     return num1 + num2
// }
// console.log(addTwo(3, 4))


// const addTwo = (num1 , num2) => num1 + num2 //implicit return
// const addTwo = (num1 , num2) => (num1 + num2) // if we don't use {} then no need to give return keyword
const addTwo = (num1 , num2) => ({username: "Mobashshir"}) // returning the object
console.log(addTwo(3, 5))

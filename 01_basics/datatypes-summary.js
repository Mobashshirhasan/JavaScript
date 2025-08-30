// Primitive

// 7 types : string, number , boolean, null, undefined , symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


// Refrence (non- primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "naagraj", "hulk"]

let myObj = {
    name: "mobashshir",
    age: 25,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myObj)

// all the non-primitive's type will be object only


// ***********************************************
//  Stack (Primitive),  Heap (Non-Primitive)

let myYoutubename = "mobashshirhasan"

let anothername = myYoutubename
anothername = "mobashshirjavascrript"

console.log(myYoutubename);
console.log(anothername);


let userone = {
    email: 'mobashshir12@gmail.com',
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "abcd@gmial.com"

console.log(userone.email);
console.log(usertwo.email);

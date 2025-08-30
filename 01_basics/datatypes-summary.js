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
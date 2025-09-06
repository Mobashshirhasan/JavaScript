const userEmail = "mobashshir12@gmail.com"

if (userEmail){
    console.log("Got the user's email");
}
else{
    console.log("Don't have user email.")
}

// Notes : 
// falsy values
// false,0, -0 , BigInt on, "" , null, undefined
//  Truthy values:
// "0", 'false', " ", [], {}, function(){}


if (userEmail.length === 0){
    console.log("Array is empty");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = undefined ?? 15 ?? 20

// console.log(val1);

//  Turniary Operator:
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
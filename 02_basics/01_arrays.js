// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj", "thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(7)
// myArr.pop()

// myArr.unshift(6)
myArr.shift()

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);

// slice, splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it manupulate the original array.
console.log("c ", myArr);
console.log(myn2);



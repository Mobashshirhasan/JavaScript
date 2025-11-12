// /* We need to filter and store only those values which are greater than 50 */

// const myObj = {
//     a: 30,
//     b: 60,
//     c: 90,
//     d: 40
// }
// console.log(myObj);

// const filterObj = Object.fromEntries(Object.entries(myObj).filter( (arr) => arr[1] > 50));

// console.log(filterObj)






const myObj = {
    a: 30,
    b: 60,
    c: 90,
    d: 40
}

const newFiltr = Object.fromEntries(Object.entries(myObj).filter(([key, value]) => value > 50));

console.log(newFiltr);


/*
    Object.entries(obj) :- It converts the given object into an array
    Object.fromEntries(arr) :- It converts the given array into an object
*/


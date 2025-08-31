// Dates

let myDate = new Date() // here an object (Date) is created and their instance is (myDate)

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025, 7, 31);
let myCreatedDate = new Date(2025, 7, 31, 5, 4);
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

const weekday = newDate.toLocaleString('default', {
    weekday: "long"
});

console.log(weekday);
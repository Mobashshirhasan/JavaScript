/* We need to filter and store only those values which are greater than 50 */

const myObj = {
    a: 30,
    b: 60,
    c: 90,
    d: 40
}
console.log(myObj);

const filterObj = Object.entries(myObj)

console.log(filterObj)
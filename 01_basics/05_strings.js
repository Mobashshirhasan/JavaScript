const name = "mobashshir"
const repoCount = 15

// console.log(name + repoCount + "Value");

console.log(`Helllo my name is ${name} and my repo is ${repoCount}`)

const gameName = new String('mobashshir');
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));

const newString =  gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 3)
console.log(anotherString);

const newStringOne = "   mobashshir   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mobashshir.com%20hasan"

console.log(url.replace('%20', '-'))

console.log(url.includes('mobash'))

console.log(gameName.split('-'));
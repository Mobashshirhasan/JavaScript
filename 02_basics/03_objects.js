// There are two ways to declare objects, Literal & Constructor.
// Anything we build through constructor then Singleton is made , it means ye apni tarah ka ek hi object hai.
// when we build through literals then multiple instance will created.

// Object Literals 
//{} :- This is object

const mySym = Symbol("key1")

const JsUser = { 
    name: "Mobashshir",
    "full name": "Mobashshir hasan",
    mySym: "mykey1",
    age: 25,
    location: "Bangalore",
    email: "mobashshir12@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["MOnaday", "Saturday"]
}  


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum]);

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "mobashshirhasan333@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "hiteshchaudhary@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

console.log(JsUser.greeting());  //function

JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
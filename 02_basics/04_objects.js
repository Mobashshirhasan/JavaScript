//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "mobi@gmail.com",
    fullname: {
        userfullname: {
            firstnmae: "mobashshir",
            lastname: "hasan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstnmae);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1 , obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email:" mobai@gmail.com"
    },
    {
        id: 2,
        email:" mobi@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursenmae: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor : instructor} = course //destructure
console.log(instructor);

//json
// {
//     "name": "MObashshir",
//     "course":"js in hindi",
//     "price": "free"
// }

// Array in loop. An object is in the Array
[
    {},
    {},
    {}
]
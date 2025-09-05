// let a = 10
// const b =20
// var c = 30

// var c = 300
let a = 300

if (true){
    let a = 10
    const b =20
    var c = 30
    console.log("INNER : ", a)
}

console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "MObashshir"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true){
    const username = "MObashshir"
    if (username === "MObashshir"){
        const website = "Youtbue"
        console.log(username + website);
    }
    // console.log(website); //not accesseble
}
// console.log(username); //not accesseble


//+++++++++++++++++++++++++ interesting ++++++++++++
console.log(addone(5))
function addone(num){
    return num +1
}
print(hello)

// addTwo(5) 
const addTwo = function(num){
    return num + 2
}

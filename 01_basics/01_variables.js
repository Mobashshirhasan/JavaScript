const accountId = 1363  //once const is assigned then its value will not changable
let accountEmail = "mobashshir12@gmail.com" // 'let' their values is changable
var accountPassword = "136300" // var is also changeable
accountCity = "Bangalore"

// accountId = 2 // not allowed

accountEmail = "mobi@gmail.com"
accountPassword = "154893"
accountCity = "Jaipur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])


/*
do not use var
because ofissue in the block scope and functional scope
*/
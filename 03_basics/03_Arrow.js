const user = {
    username: "mobashshir",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this : current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);
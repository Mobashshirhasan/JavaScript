class user{
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password
}
encryptPassword(){
    return `${this.password}abc`
}

}
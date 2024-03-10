function setUserName(username){
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("chai", "chai@fb.com", 123)

console.log(user);
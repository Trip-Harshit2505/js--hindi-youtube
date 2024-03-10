class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User ${this.username} is logged in`);
    }

    static createId(){
        return `123`
    }
}

const chai = new User("chai")

console.log(chai.createId());
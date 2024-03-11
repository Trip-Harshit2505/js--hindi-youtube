class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}harshit`
    }

    set password(value){
        this._password = value
    }
}

const harshit = new User('h@harshit.ai', 'abc')
console.log(harshit.password);
console.log(harshit.email);
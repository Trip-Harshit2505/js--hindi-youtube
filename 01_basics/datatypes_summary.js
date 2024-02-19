// Primitive 

//  7 types of data types :- String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('123');
const anotherid = Symbol('123')

console.log(id === anotherid);

// Reference (Non-Primitive)

// Arrays, Objects, Functions

const heros = [ "Shaktiman", "Naagrag", "Doga" ]

const myObj = {
    name : "Harshit",
    age : 20
}

const myFunction = function(){
    console.log("Hello World");
}

// +++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive) and Heap(Non-Primitive)

let myYoutubename = "hirodura@gmail.com"

let anothername = myYoutubename
anothername = "codeaurchai"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    name: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "harshit@google.com"

console.log(userOne.email);
console.log(userTwo.email);
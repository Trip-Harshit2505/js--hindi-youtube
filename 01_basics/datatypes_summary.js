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
// singleton
// Objects.create()

const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "harshit",
    "full name": "Harshit Tripathi",
    [mySym]: "mykey1",
    age: 20,
    location: "Bhopal",
    email: "harshit@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "harshit@microsoft.com"
// Object.freeze(JsUser)

JsUser.email = "harshit@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function (){
    console.log(`Hello JS user, ${JsUser.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
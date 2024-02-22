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

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
function sayMyname() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyname()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log(`Result: ${result}`);

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in!!`
// }

// // console.log(loginUserMessage("Harshit"));
// // console.log(loginUserMessage());

// function calculateCartprice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartprice(200, 400, 800, 2000));

const user = {
    username: "Harshit",
    price: 199
}

function handleObject(anyObject){
    return `${anyObject.username} is username and ${anyObject.price} is price`
}

console.log(handleObject(user));
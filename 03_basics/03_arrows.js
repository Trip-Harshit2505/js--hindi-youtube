const user = {
    username: "harshit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "harshit"
//     console.log(this.username);
// }

// const chai = function(){
//     let username = "harshit"
//     console.log(this.username);
// }
const chai = ()  => {
    let username = "harshit"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit 

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ( {username: "harshit"} )

console.log(addTwo(3,8));
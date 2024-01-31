const accountId = 122445
let accountEmail = "harshit@google.com"
var accountPassword = "123"
accountCity = "Bhopal"

// accountId = 2 // not allowed

accountEmail = "Tripathi@google.com"
accountPassword = "212231"
accountCity = "Indore"
let accountState;

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
const name = "harshit"
const repoCount = 10

// console.log(name + repoCount + " Value");

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshit-hc-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.endsWith('c'));
// console.log(gameName.toUpperCase());
// console.log(gameName.length);

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,6);
console.log(newString);

const anotherString = gameName.slice(-10, 4);
console.log(anotherString);

const newStringOne = "    harshit    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harshit.com/harshit%20tripathi"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));
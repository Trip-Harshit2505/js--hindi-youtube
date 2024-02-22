const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["Superman", "flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const all_Heros = marvel_heros.concat(dc_heros)
// console.log(all_Heros);

// Spread Operator

// const all_new_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_Heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [5, 4]]]
const another_new_array = anotherArray.flat(Infinity)

// console.log(another_new_array);

console.log(Array.isArray("harshit"));
console.log(Array.from("harshit"));
console.log(Array.from({name:"harshit"})); //interesting from point of interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
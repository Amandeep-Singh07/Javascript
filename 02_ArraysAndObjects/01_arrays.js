// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[3]);

// Array methods

// myArr.push(6)
// myArr.push(7)  
// myArr.pop()  

// myArr.unshift(9)  // adds 9 to the first index of the array
// myArr.shift()     // removes the first element of the array

// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(3));  

const newArr = myArr.join()  // it converts the array into string

// console.log(myArr);
// console.log( newArr);

// slice, splice  -> the main difference is slice operation doesn't change the original array but splice does

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);


// Some other concepts about arrays
 
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) // here dc_heros array is added as an element to the marvel_heros array at the last index

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)  // difference between push and concat method is push pushes the element in the same array but concat creates a new array

// console.log(allHeros);
 
const all_new_heros = [...marvel_heros, ...dc_heros];  // this ... is known as spread operator (it is similar to concat method)

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh")); // from is used to make an array
// console.log(Array.from({ name: "hitesh" })); // interesting case for an interview perspective

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // .of() is used to create an array

// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is best number");
  }
  //console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
  }
}
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}

// WHILE LOOP


let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  //console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

// ****************** FOR OF LOOP *********************

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
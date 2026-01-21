// for

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     //console.log("5 is best number");
//   }
//   //console.log(element);
// }

// // console.log(element);

// for (let i = 1; i <= 10; i++) {
//   //console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     //console.log(`Inner loop value ${j} and inner loop ${i}`);
//     //console.log(i + '*' + j + ' = ' + i*j );
//   }
// }
// let myArray = ["flash", "batman", "superman"];
// //console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   //console.log(element);
// }

// // break and continue

// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         break
// //     }
// //    console.log(`Value of i is ${index}`);

// // }

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`Value of i is ${index}`);
// }

// // WHILE LOOP


// let index = 0;
// // while (index <= 10) {
// //     console.log(`Value of index is ${index}`);
// //     index = index + 2
// // }

// let myArray = ["flash", "batman", "superman"];

// let arr = 0;
// while (arr < myArray.length) {
//   //console.log(`Value is ${myArray[arr]}`);
//   arr = arr + 1;
// }

// let score = 11;

// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10);

// // ****************** FOR OF LOOP *********************

// // ["", "", ""]
// // [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

// **************Maps*********************
// It stores unique value

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
//     console.log(key, ':-', value);           // it will not work
    
// }


const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject2) {
    // console.log(`${key} shortcut is for ${myObject2[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map1 = new Map()
// map1.set('IN', "India")
// map1.set('USA', "United States of America")
// map1.set('Fr', "France")
// map1.set('IN', "India")
// for (const key in map1) {     // it will not work
//     console.log(key);
// }


// ***************FOR EACH LOOP *********************

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (val){
    // console.log(val);
} )

coding.forEach( (item) => {
    // console.log(item);
} )

function printMe(item){
    // console.log(item);  
}
coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
})

// coding.forEach((item, index, arr) => console.log(item, index, arr));  // this is same as above line (just shorter way)
/// VERY VERY IMPORTANT

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageName);
  // console.log(item.languageFileName);
});
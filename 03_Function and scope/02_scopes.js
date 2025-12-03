//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


/// From here nested scopes

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website);
  }
//   console.log(website);             // error 
}

console.log(username);              // error

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));  // here we can access before declaration  this is also known as hoisting

function addone(num) {
  return num + 1;
}

addTwo(5);                      // but here it will throw error
const addTwo = function (num) {
  return num + 2;
};

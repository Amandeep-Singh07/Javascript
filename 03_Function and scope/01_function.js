function sayMyName() {
  console.log("a");
  console.log("m");
  console.log("a");
  console.log("n");
  console.log("d");
  console.log("e");
  console.log("e");
  console.log("p");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result =addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Amandeep"))
// console.log(loginUserMessage(null))

function calculateCartPrice(val1, val2, ...num1) {  // ... is a rest operator and is also called spread operator.
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000,89))

const user = {
  username: "aman",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user)
handleObject({            // here we are passing direct object.
  username: "sam",
  price: 399,
});

const myNewArray = [200, 700, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

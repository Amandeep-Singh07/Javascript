// // What is a Promise?
// // A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// // A Promise is in one of these states:
// // Pending: Initial state, neither fulfilled nor rejected.
// // Fulfilled: Meaning that the operation was completed successfully.
// // Rejected: Meaning that the operation failed.

// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   // DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is compelete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Chai", email: "chai@example.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "hitesh", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {  // async function always returns a promise
//   try {
//     const response = await promiseFive; // wait for the promise to resolve or reject
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));


// what is promise.all?
// promise.all is a method that takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject.
// it is used to run multiple asynchronous operations in parallel and wait for all of them to complete before proceeding.

// Example:
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise A resolved");
  }, 1000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise B resolved");
  }, 2000);
});
const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise C resolved");
  }, 1500);
});
Promise.all([promiseA, promiseB, promiseC])
  .then((values) => {
    console.log(values); // ["Promise A resolved", "Promise B resolved", "Promise C resolved"]
  })
  .catch((error) => {
    console.log(error);
  });







// we will learn about this keyword also

const user = {
  username: "Aman",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username} , welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   // here it will print {} but in browser it will show window 

function chai(){
    let username = "Aman"
    console.log(this.username);         // this keyword is working with objects not functions will see later in detail in DOM
}

chai()

// const chai = function () {
//     let username = "Aman"
//     console.log(this.username);
// }

// const chai = () => {         // arrow function created
//   let username = "Aman";
// //   console.log(this);
// };

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )   // we are not using curly braces so we not need to use return keyword also (REACT )

const addTwo = (num1, num2) => ({ username: "Aman" });

console.log(addTwo(3, 9));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

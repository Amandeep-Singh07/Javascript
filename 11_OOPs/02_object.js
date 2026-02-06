// function multipleBy5(num) {
//   return num * 5;
// }

// multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
//  console.log(multipleBy5.prototype); // output will be {} in node but in browser it will show the prototype object with constructor property pointing to the function itself



function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// below we are adding methods to the prototype of the createUser constructor function, which means that all instances created using this constructor will have access to these methods through the prototype chain. This is a common practice in JavaScript to share methods across instances without having to define them inside the constructor function, which can save memory and improve performance.
createUser.prototype.increment = function () {  
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea =new createUser("tea", 250);

chai.printMe();
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

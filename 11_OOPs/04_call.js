function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);  // here we are using the call method to invoke the SetUsername function with the current context of createUser, which allows us to set the username property on the new user object being created. This is a common pattern in JavaScript to reuse functionality from one function in another function, especially when dealing with constructor functions and object creation.

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

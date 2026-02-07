// // in this example we are using getter and setter to manipulate the data before returning it or setting it,
// // so here we are using getter to return the email in uppercase and setter to set the email and password, and we are using _email and _password to store the actual values of email and password, so that we can manipulate them in getter and setter without affecting the original values.

// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   get email() {
//     return this._email.toUpperCase();
//   }
//   set email(value) {
//     this._email = value;
//   }

//   get password() {
//     return `${this._password}hitesh`;
//   }

//   set password(value) {
//     this._password = value;
//   }
// }

// const hitesh = new User("h@hitesh.ai", "abc");
// console.log(hitesh.email);


// ******************* BELOW is the Old method of using getter and setter in js *******************

// function User(email, password) {
//   this._email = email;
//   this._password = password;

//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value;
//     },
//   });
//   Object.defineProperty(this, "password", {
//     get: function () {
//       return this._password.toUpperCase();
//     },
//     set: function (value) {
//       this._password = value;
//     },
//   });
// }

// const chai = new User("chai@chai.com", "chai");

// console.log(chai.email);


// Another way to use getter and setter is by using Object.


const User = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);



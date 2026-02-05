const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);  // this will print the current context of the function, which is the user object in this case
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// Constructor Function below

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
// console.log(userOne);
console.log(userOne.constructor);
//console.log(userTwo);

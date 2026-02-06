// learning inheritance in JavaScript using classes

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // super keyword does the work of calling the constructor of the parent class, which in this case is the User class. This allows us to initialize the username property in the Teacher class by calling the constructor of the User class with the provided username argument.
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

// chai.addCourse();
// chai.logMe();
// const masalaChai = new User("masalaChai");

// masalaChai.logMe();

// console.log(chai instanceof User);

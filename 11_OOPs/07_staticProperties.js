// below will understand static keyword used in classes in JavaScript. The static keyword is used to define a method or property that belongs to the class itself, rather than to instances of the class. This means that static methods and properties can be accessed directly on the class without needing to create an instance of the class. Static members are often used for utility functions or properties that are relevant to the class as a whole, rather than to individual instances. To define a static method or property in a class, you simply prefix the method or property declaration with the static keyword. For example:


class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");

// iphone.logMe();
// console.log(iphone.createId());
console.log(User.createId()); // this will work because createId is a static method of the User class, and we can access it directly on the class itself without needing to create an instance of the class.

// in this example we are using getter and setter to manipulate the data before returning it or setting it,
// so here we are using getter to return the email in uppercase and setter to set the email and password, and we are using _email and _password to store the actual values of email and password, so that we can manipulate them in getter and setter without affecting the original values.

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);

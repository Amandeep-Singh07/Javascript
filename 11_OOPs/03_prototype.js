// my objective is to add a trueLength method to the String prototype, which will allow us to calculate the length of a string without counting any leading or trailing whitespace. This can be useful in various scenarios where we want to get the actual length of a string without any extra spaces.

// By adding the trueLength method to the String prototype, we can call this method on any string instance, and it will return the length of the string after trimming the whitespace. This is a convenient way to extend the functionality of strings in JavaScript and make it easier to work with string data that may have unwanted spaces.


// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()  // it will not work because heyHitesh is defined on Array prototype and heroPower is an object, so it will not have access to the heyHitesh method through the prototype chain. However, heroPower will still have access to the hitesh method defined on Object.prototype, since all objects in JavaScript inherit from Object.prototype. Therefore, calling heroPower.hitesh() will work and print "hitesh is present in all objects", but calling heroPower.heyHitesh() will result in a TypeError because heyHitesh is not a function that exists on the heroPower object or its prototype chain.

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // here it will get access to the properties of TeachingSupport through the prototype chain.
};

Teacher.__proto__ = User; // another way to set the prototype of an object is by using the __proto__ property, which is a legacy feature in JavaScript. 

// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher); // here we are setting the prototype of TeachingSupport to Teacher,




// below we can understand the this keyword better
let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`); // here it will print the current context of the function.
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();

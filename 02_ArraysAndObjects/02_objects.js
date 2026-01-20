// singleton
// Object.create

// object literals

const mySym = Symbol("key1"); // create a symbol datatype
 
const JsUser = {
  name: "amandeep",
  "full name": "amandeep singh",
  [mySym]: "mykey1",         // way to define a symbol in a object (IMPORTANT)
  age: 18,
  location: "Jaipur",
  email: "amandeep@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  
// console.log(JsUser[mySym])
// console.log(typeof mySym);  

JsUser.email = "amandeep@chatgpt.com";
// Object.freeze(JsUser)               // now we cannot change the Value further
JsUser.email = "amandeep@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
//   console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


///////// above we have created object literals below we will create singleton

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "amandeep",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   // returns an array of keys.
// console.log(Object.values(tinderUser)); // returns an array of values.
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // return true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// Object destructuring 
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


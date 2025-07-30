// Immediately Invoked Function Expressions (IIFE)

// An IIFE (Immediately Invoked Function Expression) in JavaScript is used to execute a function immediately after it is defined, primarily to create a new scope and prevent variables from polluting the global namespace

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

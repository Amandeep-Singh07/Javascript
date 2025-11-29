const accountId = 144553;
let accountEmail = "amandeep@google.com";
var accountPassword = "12345";
accountCity = "phagwara";
let accountState;

// accountId = 2 // not allowed

accountEmail = "sfd@hc.com";
accountPassword = "21212121";
accountCity = "meghalaya";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);



function example() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }

  console.log(a); // ✅ 1 (function-scoped)
  console.log(b); // ❌ Error (block-scoped)
  console.log(c); // ❌ Error (block-scoped)////
}

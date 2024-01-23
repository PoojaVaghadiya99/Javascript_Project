const accountId = 144553;
let accountEmail = "poojavaghadiya99@gmail.com";
var accountPassword = "12345";
accountCity = "Vadodara";
let accountState;

// accountId = 2 // Not Allowed
console.log("Account ID = ", accountId);

/*

Prefer not to use var
because of issue in block scope and functional scope

*/

accountEmail = "poojavaghadiya1@gmail.com";
console.log("Account Email = ", accountEmail);

accountPassword = "67890";
console.log("Account Password = ", accountPassword);

accountCity = "Morbi";
console.log("Account City = ", accountCity);

console.log("Account State = ", accountState);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

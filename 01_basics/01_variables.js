const accountId = 144553
let accountEmail = "rajat@google.com"
var accountPassward = "12345"
accountCity = "Jaipur"

/*
 in Js prefer not to use var and use let for variables
because in var there is problem of block scope and functional scope.
*/

// accountId = 2  // not allowed TypeError
console.log(accountId);


accountEmail = "hc@hc.com"
accountPassward = "21212121"
accountCity = "Bengaluru"

console.log(accountId)
console.table([accountId , accountEmail , accountPassward , accountCity])

let accountState;
console.table([accountId , accountEmail , accountPassward , accountCity , accountState])
/*
when the value of a variable is not given it is undefined
*/
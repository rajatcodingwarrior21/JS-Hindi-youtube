// 2 ways to create object
// literal way ,=>not singleton


let mys= Symbol("12345")

// object literal
const jsUser={    // key: value
    "full name":"rajat",
    email:"rajat@google.com",
    isLoggedIn: false,
    lastLoggedIn:['monday','saturday'],
    [mys]:"123"
}

// access it by obj.key or obj["key"]
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// if key is string then only way => obj["key"]
// console.log(jsUser.full name);  not work
// console.log(jsUser["full name"]);

// also if symbol is used then key is in []
// console.log(jsUser[mys])

// constructor method  => singleton -> one instance

// console.log(jsUser);

// jsUser.email="rajat@mnnit.ac.in"
// console.log(jsUser);

// Object.freeze(jsUser)
// jsUser.email="rajat@microsoft.com"  // no changes after freeze
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
    
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this["full name"]}`);
}

jsUser.greeting()
jsUser.greetingTwo()
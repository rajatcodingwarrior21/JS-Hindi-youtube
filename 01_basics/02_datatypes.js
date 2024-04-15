"use strict" // treat all JS code as newer version

// alert( 3+3 )  //gives the ReferenceError as we are using Node.js not browser

console.log( 3 + 3 ); console.log("Rajat");  // code readability low
console.log( 3
        +
        3)

console.log( 3 + 3 )
console.log("Rajat")

// code readability should be high

let name = "Rajat" //string
let age = 18 // number
let isLoggedIn = false // boolean

/* Data Types
//number => 2 to power 53
//bigint => used for website like trading , banking
//string => "" or ''
//boolean => true/false
//null => stand alone value -->object type
//undefined => when no value is assigned

//symbol => uniqueness used in react , and figma 

//object 

*/

console.log(typeof "Rajat")  // string
console.log(typeof 22)  // number
console.log(typeof 3.14)  // number
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
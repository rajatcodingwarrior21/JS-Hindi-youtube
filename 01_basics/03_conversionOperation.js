// conversion into number
// as if we get value we don't know its type so we need conversion

// Number()

let score = 33
let valueInNumber = Number(score)
console.log( valueInNumber );
console.log(typeof valueInNumber );

// conversion into number 
/*
33 => 33 => number
"33" => 33 => number
"33abc" => Nan => number   // note Nan is Not a Number of type number
"rajat" => NaN => number
null => 0 => number
undefined => Nan => number
true => 1 => number
false => 0 => number

*/


// Boolean()

let num = undefined
let boolNum = Boolean(num)
console.log( boolNum );
console.log(typeof boolNum );

// conversion into boolean 
/*
33 => true => boolean
"33" => true => boolean
"" => false => boolean   
null => false => boolean
undefined => false => boolean
true => true => boolean
false => false => boolean

so "",0,0.00,null,undefined --> false
else true

*/


// String()

let value = 0.000000000
let stringValue = String(value)
console.log( stringValue );
console.log(typeof stringValue );

// conversion into number 
/*
33 => 33 => string
0.0000 => 0 => string
"33" => 33 => string
"33abc" => 33abc => string   // note Nan is Not a Number of type number
"rajat" => rajat => string
null => null => string
undefined => undefined => string
true => true => string
false => false => string

*/
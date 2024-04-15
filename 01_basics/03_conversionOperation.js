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

let num = 33
let boolNum = Boolean(num)
console.log( boolNum );
console.log(typeof boolNum );

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


// String()

let value = 33
let stringValue = String(value)
console.log( stringValue );
console.log(typeof stringValue );

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
// Data types in JS are two type on basis of how is stored in memory and how is accessed -> by value or by reference

// 1) Primitive datatypes (pass by value)=> 7 => number,boolean,bigint (n),null, undefined, symbol,string

// const x="rajat"
// console.log(typeof(x));
// const y=23
// console.log(typeof(y));
// const z=22.45
// console.log(typeof(z));
// const t=32432432536454634424n
// console.log(typeof(t));
// const u='h'
// console.log(typeof(u));
// let id1=Symbol('124')
// console.log(typeof(id1));
// let id2=Symbol('124')
// console.log(typeof(id2));
// console.log(id1===id2);
// let isGood=false
// let temp=null
// let email; // undefined type

// 2) Reference type (Non Primitive) => array , objects , Functions
// arrays
let arr=["rajat",23,42];
console.log(arr);
console.log(typeof arr);

let obj={
    "id":123,
    "name":"rajat"
}
console.log(obj);
console.log(typeof obj);

let f=function(){
    console.log("hi");
    
}
console.log(f());
console.log(typeof f);





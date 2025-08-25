let arr = [ 1,2,3,4,5,6,true,'rajat'] // diff elements no issue

let array=[1,2,3,4,5]

// 0 based indexing and accessing
// console.log(array[0]);

const a= new Array(1,2,3,4)

console.log(a);

// array methods
// a.push(5)
// a.push(6)
// a.pop()

// a.unshift(10)     // adds element in start
// a.shift()         // remove element from start 
// console.log(a);

// console.log(a.length);
// console.log(a.includes(3));   // true 
// console.log(a.indexOf(19));    // if not exist -1


// join()
// let y = a.join() // string mei convert hojata hai
// console.log([typeof(y),y);



//slice and splice
// slice don't change orignal array it get copy   => it do not include end arr.slice(a,b) => means [a,b)
// splice change orignal array also       => it includes both ends also arr.splice(a,b)=> means [a,b]

console.log("A",a);
let b=a.slice(1,3)
console.log("slice part : ",b);
console.log("B",a);
let c=a.splice(1,3)
console.log("splice part : ",c);
console.log("C",a);







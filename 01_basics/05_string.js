// let name="rajat"
// let marks=99

// console.log(name+ marks+ "hi"); // older method and not modern practice

// console.log(`hi my name is ${name} and i got ${marks} in my exam`);
// better and modern way -> called string interpolation


const name = new String("rajat");
const id="123"
console.log(["length",id.length]);
console.log(name.length);
console.log(name.__proto__);  // proto means prototype means this obj has functions like length , uppercase ,lowercase and so on

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.indexOf('j'));

//slicling and substring
console.log(name.substring(0,3));   //  start>=0 if start<0 is takes it 0
console.log(name.slice(-3,5));   // here negative index work but slice forward only

let y="      khumbhu      ";
console.log(y);
console.log(y.trim());

// replace and includes

const url="https://www.google.com/rajat?20"

console.log(url.replace("rajat","-"));

console.log(url.includes("20"));   // true

let sen="my name is rajat raj";
console.log(sen.split(" "));   // give array






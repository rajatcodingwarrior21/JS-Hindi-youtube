let marvel_heros=["thor","iron-man","spider-man"]
let dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); 

// push changes the array and add this array inside the marvel_heros [0,1,2,[4,5,6]] 
// array(1,2,3,array(4,5,6))

//concat can be used but it do not change the array it gives new array

// let all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);

// another method is spread method which is [...array] is open the array

// let newarr=[...marvel_heros,...dc_heros]
// console.log(newarr);

// let arr=[1,2,3,[4,5,6,[7,8,[9,10],11],12],13];
// console.log(arr.flat(Infinity));    // gives depth


//some methods
console.log(Array.isArray("rajat"));
console.log(Array.from("rajat"));
console.log(Array.from({name:"rajat"}));    // empty when is don't know how to make array

//
const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3));

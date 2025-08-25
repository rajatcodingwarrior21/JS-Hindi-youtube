//const tinderUser = new Object() // singleton object
let tinderUser={}
// console.log(tinderUser);

tinderUser.id="123"
tinderUser.name="rajat"
tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser={
    email:"rajat@mnnit.ac.in",
    fullname : {
        userfullname:{
            firstname:"rajat",
            lastname:"raj"
        }

    }
    
}
// console.log(regularUser.fullname);

// console.log(regularUser.fullname.userfullname?.firstname);  // ? if no obj 

let obj1={1:'a',2:'b'}
let obj2={3:'c',4:'d'}

// let obj3={obj1,obj2}  // not good way

// let obj3=Object.assign({},obj1,obj2)
let obj3={...obj1,...obj2}
// console.log(obj3);

const users=[{
    id:"123",
    email:"r@gmail.com"
            },
            {
    id:"123",
    email:"r@gmail.com"
            },
            {
    id:"123",
    email:"r@gmail.com"
            },
            {
    id:"123",
    email:"r@gmail.com"
            },
        ]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser)); // array of keys

// console.log(Object.values(tinderUser)); // array of values


// console.log(Object.entries(tinderUser)); // array of array of key,value


// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

//******************************* More on objects ********************************** */

// destructuring in objects

const course ={
    coursename:"react",
    price:999,
    instructor:"hitesh"
}

//course.instructor

// destructering

let {instructor: inst} = course

console.log(inst);



// json => api call
// {
//     "id":"123",
//     "name":"rajat",
//     "age":23
// }

// https://api.github.com/users/rajatcodingwarrior21

// api response can also be array of objects instead of object
// [
//     {},
//     {},
//     {}
// ]
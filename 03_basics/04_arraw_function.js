// normal fucntion declarion

function one(){
    return 1;
}

// console.log(one());


const two = function(){
    return 2;
}
// console.log(two());


const three = () =>{
    return 3;
}
// console.log(three());

// () => { return } explict arrow function
// () => () implict arrow function

const four = () => ( 4 )

// console.log(four());


//*************************************************************** */



const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);// it will give full object
        
        
    }
}
// user.welcomeMessage()
// user.username="rajat"
// user.welcomeMessage()



// console.log(this);  // gives empty object in node => {}
// in weindows browser it gives window object with many things like onclick ..... and so one


// function chai(){
//     let username="hitesh"
//     console.log(this.username); // undefined => so can't access username
//     console.log(this);   // global reference 
// }
// chai()

// const chai= function(){
//     let username="hitesh"
//     console.log(this.username); // undefined => so can't access username
//     console.log(this);   // global reference 
// }
// chai()

// arrow function with this keyword
// const chai = () =>{
//     let username="hitesh"
//     console.log(this.username); // undefined => so can't access username
//     console.log(this);   // empty object => {}
// }
// chai()


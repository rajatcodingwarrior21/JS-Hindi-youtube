// function declarion
function myfun(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("T");
}

// myfun -> reference of function
// myfun() -> function calling
// myfun()

function addTwoNos(num1,num2){
    return num1+num2
}
// const ans=addTwoNos(3,5)
// console.log(ans);

// default parameters

function sum(a=3,b=2){
    return a+b
}
// console.log(sum(8,9));

// here ... is rest operator is combine all parameters
function total(...a){
    return a
}
console.log(total(10,20,30,40));

// what if no parameter passed
function fun(a){
    if(!a){
        return `no parameter passed`
    }
    return `hi my name is ${a}`
}
console.log(fun()); // undefined is printed



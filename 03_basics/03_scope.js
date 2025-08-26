function one(){
    let username="rajat"

    function two(){
        let website="https://github.com"
        console.log(username)
    }
    // console.log(website);
    two()
    
}
// one()


// hoisting => moving the declartions on top of var,let,const and function


console.log(addone(5));


function addone(num){// declartion => hoisted => moved to top
    return 1+num
}


// console.log(addtwo(5)); // error


let addtwo = function(num){ // initialize also not hoisted
    return num+2
}

// console.log(addtwo(5));

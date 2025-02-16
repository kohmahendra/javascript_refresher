function myfunct(name){
    console.log(`hi ${name}`);
}

myfunct('John');


//Above function can be written in lambda function as below
let myfunct2=(name)=>console.log(`hi ${name}`);
myfunct2('John');


let add=(i,j)=>i+j;
console.log(add(2,3));
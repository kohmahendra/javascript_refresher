for(var i=0;i<3;i++){ //i is var
    console.log(i);
}
console.log(i);

for(let j=0;j<3;j++){ //see j is defined as let not var
    console.log(j);
}
//console.log(j);

/* let's see var and let in functions scope now*/

function getDate(){
    var date1=new Date().toJSON().slice(0,10);
        return new Date().toJSON().slice(0,10);
}

console.log(getDate());
//console.log(date1);


const a=3;
a=12;
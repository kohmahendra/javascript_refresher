const user = {
    "firstName": "Mahendra",
    "lastName": "Pappu",
    "age": 42
};

let firstName=user.firstName;
let lastName=user.lastName;
let age=user.age;

console.log(`Welcome ${lastName} ${firstName}!, your age is {age}`);

/*
  Using deconstruct we can simply do like below. instead of defining all variable seperatly in seperate lines,
  we can deconstruct the object in single line. it's a short hand

*/

console.log('----------------------------------------------------------------');
const orderDetails = {
    "id": "123456",
    "productId": "1",
    "productName": "IPhone 15 Max",
    "qty":2
};

const {id,productId,productName,qty} =orderDetails;

console.log(`You ordered ${qty} ${productName} phones.`);

console.log('---------------------Deconstruct Arrays-------------------------------------------');

const days=[0,1,2,3,4,5,6];
const [SUNDAY,MONDAY] =days; //they will be in order
console.log(`Day index is ${MONDAY}`);
console.log(MONDAY);

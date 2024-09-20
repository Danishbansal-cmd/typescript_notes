//type unknown is safer than any
//to perform operations on it one must define its type first
let x: unknown;

x = 1;
x = "asfa";
x = []
x = 1;
let z = x;
//it will give error because the type of z is unknown 
//which it gets from variable x
// z++;

//it is why we must provide the type to variable of type unknown
//to perform operations on it.
let y = x as number;
y++;
y++;
y++;
let someValue: unknown = "asfdasdf";

console.log(`the value of y is ${y}`)
console.log(`the value of z is ${z}`)

//its type must be defined to perform any operations on it
// console.log(`the value of someValue is ${someValue.length}`)
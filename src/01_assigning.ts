let value: string = "rohan";

let firstName = "rishabh";

console.log("value: " + value)
console.log("firstName: " + firstName)

let age: number = 20;
if (age < 50){
    age += 10;
}
console.log(age)

function hello(somevalue: string) {
    console.log(somevalue);
}

// let u = true;
//Cannot use this upper line because the typescript will infer the value type
//to boolean and then the boolean cannot be converted to string
//and it will give the error. But using it implicit for "any" won't

let u: any = true;
u = "string";

//infer the type in array
let anArray: number[]= [34,34,34434,34]
anArray.push(4344);
// anArray.push("Sfg");
//it would give array because TS infer the type of array to int
console.log("anArray: " + anArray)

//Tuples
//It allows the array to have pre-defined length and type of each index
let newTuple: [number, boolean, string] = [325, true, "ha ha this is me"]
console.log("newTuple: " + newTuple)
//tuple with optional property or value
let newTupleSecond: [number, boolean, string?] = [325235434, false]
console.log("newTupleSecond: " + newTupleSecond)

let tupleTwo: [number, boolean, string];
//Incorrect order of the types would give you the error
//tupleTwo = [325, "true", true]

//readonly tuple
//A good practice is to make your tuple readonly.
let tupleThree: readonly [boolean, string, number, object];
tupleThree = [false, "this is the best way to do practice", 354, {name:"danish bansal",getname: () =>  {return "this is the method"}}];
//try to add something new in "readonly" tuple, it will give error
// tupleThree.push("asdf");

//objects in TS
let objectOne: {type: string, car: string, year: number};
objectOne = {
    type: "SUV", car: "Mahindra", year: 2018
}

//object can infer the type based on the value
let objectTwo = {type : "sedan"}
objectTwo.type = "SUV";
//It will give error as it tries to change the type of the object property
// objectTwo.type = 24325;

//object with optional property
let objectThree: {type : string, year?: number};
//not defining the optional property in object definition would not give error
objectThree = {type: "sedan"}

//object without optional property
let objectFour: {type : string, year: number};
//not defining the property in object definition would give you error
// objectFour = {type: "sedan"}

//index signatures with objects
//defines: any number of key of type String must have a value of type number
let objectFive: { [key: string]: number};
objectFive = {"type":234,"number":3454}
//it would give error as the type of value cannot be string
// objectFive = {"type":234,"number":"string"}
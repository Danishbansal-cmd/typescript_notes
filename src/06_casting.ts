//casting in TS
let word : unknown = "hello";
//two different ways to casting
console.log((word as string).length);
console.log((<string>word).length);

let aNumber : unknown = 3435;
console.log((aNumber as string).length);
//it will print undefined as numbers do not have any length property
//casting does not changes the type of data within variable 

//like in js, it does change the type of data but not in TS
console.log((3434).toString().length);

//force casting
//to prevent the errors that typescript may throw when casting, use unknown first
//then to the target type
let forceCasting = 'hello';
// console.log(((forceCasting as unknown) as number).length)
//it will give error as the length property does not exist on number
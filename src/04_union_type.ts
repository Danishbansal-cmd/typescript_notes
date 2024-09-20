//union type is used when a value can be more than single type
let unionOne: string | number;
unionOne = "asdf";
unionOne = 24356;
console.log(`unionOne: ${unionOne}`)

//union type in function
function statusCode(code: string | number){
    console.log(`status code is : ${code}`)
    // console.log(`status code is : ${code.toUpperCase()}`)
    //it will give error as the number does not have the toUpperCase() property.
}
statusCode("404");
statusCode(404);


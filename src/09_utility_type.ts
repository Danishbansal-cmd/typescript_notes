export{}
//The export {} statement indicates that the file is an ES module. 
//In TypeScript, any file containing a top-level import or export 
//is considered to be a module. Without top-level import or export 
//declarations, the file gets treated as a script whose contents 
//are available in the global scope (and to other modules). This 
//is what causes the name clash between our name variable and 
//the name variable declared in TypeScript global typings.


//partial utility
interface Point {
    x: number
    y: number
}
//Partial changes all the properties in an object to be optional.
let pointOne: Partial<Point> = {
    x: 33242
}

//required utility
interface Car{
    model: string,
    year: number,
    plateNumber?: string
}
let carOne : Required<Car> = {
    model: "AMG",
    year: 2016,
    plateNumber: "F1"
}

//record utility
//Record is a shortcut to defining an 
//object type with a specific key type and value type.
let someObject: Record<string, number> = {
    "Danish": 22,
    "Rishabh": 24,
    "Abhishek": 26,
    "Rohit": 29
}
//Record<string, number> is same as {[key:string] : number}

//omit utility
interface chairClassification {
    color: String,
    height: number,
    width: number,
    weight?: number,
    numberOfLegs: number
}
//Omit removes keys from an object type.
let chairOne : Omit<chairClassification, 'weight' | 'width'> = {
    color: "black",
    height: 20,
    numberOfLegs: 4
}

//Pick utility
interface bed {
    color: string,
    weight?: number,
    bedSize: string
}
//Pick removes all but the specified keys from an object type.
let bedOne: Pick<bed, "color"> = {
    color : "dark Brown"
}

//Exclude utilty
//Exclude removes types from a union.
type primitive = string | number | boolean;
let value : Exclude<primitive, string> = true;
value = 235435;
//aliases are used to define seperately from variables and use them
//aliases can be used for string or more complexes like objects and arrays
type carModel = string;
type carYear = number;
type car = {
    model: carModel
    year: carYear
}

let CarModel: carModel = "Mercedes Benz"
let CarYear : carYear = 2021
let Car: car = {
    model: CarModel,
    year: CarYear
}

//interfaces are like aliases but only apply to object
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

let  coloredRectangle: ColoredRectangle = {
    height: 34,
    width: 235,
    color: "yellow"
}

//abstract classes
abstract class Polygon {
    public abstract getArea() : number;
    public toString() : string{
        return `Polygon[area=${this.getArea()}]`;
    }
}
//the constructor parameters with any Visibility modifiers(public, private, protected) 
//like in here (protected readonly modifiers) the modifier is(private), 
//TypeScript automatically generates and initializes these properties
// for the class. There's no need for additional assignments within 
//the constructor body.
class RectangleTwo extends Polygon{
    public constructor(protected readonly rectangleWidth: number, protected readonly rectangleHeight: number){
        super();
    }
    public getArea(): number {
        return this.rectangleWidth * this.rectangleHeight;
    }
}
let someRectange = new RectangleTwo(10,34);
console.log("rectangle area: " + someRectange.getArea())
console.log(someRectange.toString())
"use strict";
let CarModel = "Mercedes Benz";
let CarYear = 2021;
let Car = {
    model: CarModel,
    year: CarYear
};
let coloredRectangle = {
    height: 34,
    width: 235,
    color: "yellow"
};
//abstract classes
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
//the constructor parameters with any Visibility modifiers(public, private, protected) 
//like in here (protected readonly modifiers) the modifier is(private), 
//TypeScript automatically generates and initializes these properties
// for the class. There's no need for additional assignments within 
//the constructor body.
class RectangleTwo extends Polygon {
    constructor(rectangleWidth, rectangleHeight) {
        super();
        this.rectangleWidth = rectangleWidth;
        this.rectangleHeight = rectangleHeight;
    }
    getArea() {
        return this.rectangleWidth * this.rectangleHeight;
    }
}
let someRectange = new RectangleTwo(10, 34);
console.log("rectangle area: " + someRectange.getArea());
console.log(someRectange.toString());
//# sourceMappingURL=03_aliases_interfaces.js.map
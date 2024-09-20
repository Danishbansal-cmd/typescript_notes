"use strict";
//enums in ts
//it is a special classes that represent group of constants
//The value of first enum is 0 then it increment by 1
//most important
//Enums come in two flavors string and numeric
//Technically, you can mix and match string and numeric enum values, 
//but it is recommended not to do so.
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["South"] = 1] = "South";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let someDirection = CardinalDirections.North;
console.log("someDirection: " + someDirection);
// someDirection = "North"
//It will throw an error as "North" is not a valid enum
//to set the value of the first enum
//we can use
var directionPartTwo;
(function (directionPartTwo) {
    directionPartTwo[directionPartTwo["North"] = 1] = "North";
    directionPartTwo[directionPartTwo["South"] = 2] = "South";
    directionPartTwo[directionPartTwo["East"] = 3] = "East";
    directionPartTwo[directionPartTwo["West"] = 4] = "West";
})(directionPartTwo || (directionPartTwo = {}));
let firstDirectionPartTwo = directionPartTwo.North;
let secondDirectionPartTwo = directionPartTwo.South;
console.log("firstDirectionPartTwo: " + firstDirectionPartTwo);
console.log("secondDirectionPartTwo: " + secondDirectionPartTwo);
//one can uniquely initialized the enum
var cars;
(function (cars) {
    cars[cars["MecedesYear"] = 2021] = "MecedesYear";
    cars[cars["MahindraYaar"] = 1002] = "MahindraYaar";
    cars[cars["ToyotaYear"] = 2001] = "ToyotaYear";
    cars[cars["HondaYear"] = 1990] = "HondaYear";
})(cars || (cars = {}));
let firstCar = cars.MecedesYear;
let secondCar = cars.MahindraYaar;
console.log("firstCar: " + firstCar);
console.log("secondCar: " + secondCar);
//another example for the uniquely initialized enum
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log("StatusCodes.NotFound: " + StatusCodes.NotFound);
// logs 200
console.log("StatusCodes.Success: " + StatusCodes.Success);
//string enums
var directionPartThree;
(function (directionPartThree) {
    directionPartThree["North"] = "North";
    directionPartThree["South"] = "South";
    directionPartThree["East"] = "East";
    directionPartThree["West"] = "West";
})(directionPartThree || (directionPartThree = {}));
let firstDirectionPartThree = directionPartThree.North;
let secondDirectionPartThree = directionPartThree.South;
console.log("firstDirectionPartThree: " + firstDirectionPartThree);
console.log("secondDirectionPartThree: " + secondDirectionPartThree);
//# sourceMappingURL=02_assigning_enums.js.map
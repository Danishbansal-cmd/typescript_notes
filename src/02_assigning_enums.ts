//enums in ts
//it is a special classes that represent group of constants
//The value of first enum is 0 then it increment by 1

//most important
//Enums come in two flavors string and numeric
//Technically, you can mix and match string and numeric enum values, 
//but it is recommended not to do so.

enum CardinalDirections {
    North,
    South,
    East,
    West
}

let someDirection: CardinalDirections = CardinalDirections.North;
console.log("someDirection: " + someDirection)

// someDirection = "North"
//It will throw an error as "North" is not a valid enum


//to set the value of the first enum
//we can use
enum directionPartTwo {
    North = 1,
    South,
    East,
    West
}

let firstDirectionPartTwo = directionPartTwo.North;
let secondDirectionPartTwo = directionPartTwo.South;
console.log("firstDirectionPartTwo: " + firstDirectionPartTwo)
console.log("secondDirectionPartTwo: " + secondDirectionPartTwo)

//one can uniquely initialized the enum
enum cars {
    MecedesYear = 2021,
    MahindraYaar = 1002,
    ToyotaYear = 2001,
    HondaYear = 1990
}

let firstCar = cars.MecedesYear;
let secondCar = cars.MahindraYaar;
console.log("firstCar: " + firstCar)
console.log("secondCar: " + secondCar)

//another example for the uniquely initialized enum
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log("StatusCodes.NotFound: " + StatusCodes.NotFound);
  // logs 200
  console.log("StatusCodes.Success: " + StatusCodes.Success);

  //string enums
  enum directionPartThree {
    North = 'North',
    South = 'South',
    East = 'East',
    West = 'West'
}

let firstDirectionPartThree = directionPartThree.North;
let secondDirectionPartThree = directionPartThree.South;
console.log("firstDirectionPartThree: " + firstDirectionPartThree)
console.log("secondDirectionPartThree: " + secondDirectionPartThree)
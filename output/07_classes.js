"use strict";
//classes in TS
class Person {
    display() {
        console.log(this.name);
    }
}
let personOne = new Person();
personOne.name = "personOne";
console.log(personOne);
//the constructor parameters with any Visibility modifiers(public, private, protected) 
//like in here (protected readonly modifiers) the modifier is(private), 
//TypeScript automatically generates and initializes these properties
// for the class. There's no need for additional assignments within 
//the constructor body.
//visibility modifiers
//Class members also be given special modifiers which affect visibility.
class infoCar {
    constructor(modelName) {
        this.modelName = modelName;
    }
    getName() {
        return this.modelName;
    }
}
let carOne = new infoCar("Benz");
console.log(`model of car is ${carOne.getName()}`);
//it is not accessible out of the class since it is private
// console.log(`model of car is ${carOne.modelName}`);
//TypeScript provides a convenient way to define class members 
//in the constructor, by adding a visibility modifiers to the parameter.
//If any visiblity modifier is added to the constructor with the parameter, then
//there is no need for assignments in the constructor body
//parameter properties with constructor(private parameter: type)
class infoStudent {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `Name of student is ${this.name}`;
    }
}
let studentOne = new infoStudent("Danish");
console.log(studentOne.getName());
//parameter properties with constructor(public parameter: type)
class publicStudent {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `Name of publicStudent is ${this.name}`;
    }
}
let publicStudentOne = new publicStudent("Rishabh");
console.log(publicStudentOne.getName());
//readonly
class studentInfoReadonly {
    constructor(name) {
        //name cannot be changed after this initial definiton
        this.name = name;
    }
    getName() {
        return `Name of studentInfoReadonly is ${this.name}`;
    }
    setName() {
        //it will give error as it is readontly property, so one cannot change
        //its value
        // this.name = "asfasf";
    }
}
let studentInfoReadonlyOne = new studentInfoReadonly("Abhishek");
console.log(studentInfoReadonlyOne.getName());
//normal class
class emptyConstructor {
    constructor(name, otherName) {
        this.name = name;
        this.otherName = otherName;
    }
    ;
    getValue() {
        return `Name is ${this.name}, otherName is ${this.otherName}`;
    }
}
let emptyConstructorOne = new emptyConstructor("Danish", "Dani");
console.log(emptyConstructorOne.getValue());
console.log(`emptyConstructorOne: ${emptyConstructorOne}`);
console.log("emptyConstructorOne method 2: " + emptyConstructorOne);
console.log(emptyConstructorOne);
//assignmentConstructor
class assignmentConstructor {
    // name: string;
    // otherName: string;
    constructor(name, otherName) {
        this.name = name;
        this.otherName = otherName;
        this.name = name;
        this.otherName = otherName;
    }
    ;
    getValue() {
        return `Name is ${this.name}, otherName is ${this.otherName}`;
    }
}
let assignmentConstructorOne = new assignmentConstructor("Rishabh", "Rishee");
console.log(assignmentConstructorOne.getValue());
console.log(`assignmentConstructorOne: ${assignmentConstructorOne}`);
console.log("assignmentConstructorOne method 2: " + assignmentConstructorOne);
console.log(assignmentConstructorOne);
//# sourceMappingURL=07_classes.js.map
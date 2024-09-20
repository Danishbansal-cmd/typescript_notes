"use strict";
//generic type
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(`A pair ${createPair("asdf", 2435)}`);
//generics in class
class randomClass {
    constructor(name) {
        this.name = name;
    }
    ;
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name} | ${this._value}`;
    }
}
let wrappedValue = { value: 234 };
function apiResponse(someData) {
    console.log("someData: " + someData);
    // for (const [key, value] of Object.entries(someData)){
    //     console.log(`${key}: ${value}`)
    // }
    return someData;
}
apiResponse({});
//# sourceMappingURL=08_generic_type.js.map
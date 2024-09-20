//generic type
function createPair<S,T>(v1: S, v2: T) : [S, T]{
    return [v1, v2];
}
console.log(`A pair ${createPair("asdf",2435)}`)

//generics in class
class randomClass<T> {
    private _value: T | undefined

    constructor(private name: string){};

    public setValue(value: T): void{
        this._value = value;
    } 
    public getValue(): T | undefined{
        return this._value;
    }
    public toString(): string{
        return `${this.name} | ${this._value}`
    }
}

//type aliases generic
type Wrapped<T> = {value : T};
let wrappedValue : Wrapped<number> = {value: 234};

function apiResponse<data extends object = {name: string, dataLength: number}> (someData: data){
    console.log("someData: " + someData);
    // for (const [key, value] of Object.entries(someData)){
    //     console.log(`${key}: ${value}`)
    // }
    return someData;
}

apiResponse({});

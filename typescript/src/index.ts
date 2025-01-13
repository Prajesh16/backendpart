let sales:number =123_456_789;
let course: string = "Typescript";
let isPublished= true;
let level;

function render(document:any) {
    console.log(document);
}
let numbers:number[] =[123, 456, 789]

let user: [number, string]= [1, "prajesh"]

const enum Size { Small=1,Medium , Large};
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income:number, texYear:number):number {
    if(texYear < 50_000)
        return income * 0.2;
    return income * 0.3;
}

calculateTax(10_000, 2022);

let employee:{
    readonly id:number,
    name: string,
    retie: (date:Date) => void
}={
    id:1,
    name: "Prajesh",
    retie: (date:Date) =>{
        console.log(date);
    }
}
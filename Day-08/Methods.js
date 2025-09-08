//1. What is a Method in JavaScript?
//In JavaScript, a method is simply a function that is stored as a property of an object.

// let car ={
//     Brand: "BMW",
//     model: "XM",
//     Details:()=>{
//         console.log(`Car Details are here: Brand:${this.Brand}, Model:${this.model}`);
        
//     }
// }
// car.Details();


// Objects Methods 
// 1)Object.assign().   // 2)Object.seal(). --  We can only modify but we cannot add or delete 
// 3)Objeect.isSealed()

let CTeam = {
    Opening:"Rohith Sharma",
    NonStrike:"Shubhman Gill",
    OneDown:"Kohli",

}
Object.assign(CTeam, {TwoDown:"Shreya Iyer", ThirdDown:"SKY"})
console.log(CTeam);

//2) Object.seal()

Object.seal(CTeam);
CTeam.OneDown="SKY";
CTeam.ThirdDown="Kohli"
// Object.assign(CTeam, {WicketKeeper:"MSD"})
console.log(CTeam);

//3) Object.isSealed()
console.log(Object.isSealed(CTeam));       // true

//4) Object.freeze() -- We cannot add, delete or modify       //5) Object.isFrozen()

let Team={
    name:"Gowtham",
    age:22,
    city:"bangalore"
}

Object.freeze(Team);
console.log(Team);

console.log(Object.isFrozen(Team));

// 5) Object.keys()
let data=Object.keys(Team);
console.log(typeof data);

// 6) Object.values()
console.log(Object.values(Team));


// 8) Object.entries()

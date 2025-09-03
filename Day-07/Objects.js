// OBJECTS IN JS//
// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
// Objects are used to store keyed collections of various data and more complex entities.

let Person = {

}
console.log(typeof Person); // object
console.log(Person);  // Empty Object {}

let person = {
    name: "Gowtham",
    age: 21,
    gender: "male",
    skills: ["HTML", "CSS", "JS", "ReactJS"],
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.skills);
person.skills.map(x=>console.log(x)); // function to access skills array
person.skills.push("NodeJs");
person.skills.map(x=>console.log(x));
person.skills.pop("NodeJs");
person.skills.map(x=>console.log(x));


// Accessing data from objects 
// 1)Dot Notation (.)
console.log(person.gender);
// 2)Bracket Notation ([])
console.log(person["gender"]);

// Ways to create an object
// 1) Object Literal 2) OBject Constructor. 3) Functional Constructor 
let car = {
    name: "BMW",
    model: "X5",
    year: 2020,
}
console.log(car);

// 2) Object Constructor
let bike = new Object();
bike.name = "Ducati";
bike.model = "Panigale V4";
bike.year = 2021;
console.log(bike);
delete bike.year;


// 3)Functional Constructor
function Mobile(name, price, color){
    this.name = name;
    this.price = price;
    this.color = color;
}
let Mobile1 = new Mobile("Iphone", 1000000, "Red");
let Mobile2 = new Mobile("1+",200000,"Midnight Blue");
let Mobile3 = new Mobile("Vivo")
Mobile2.Ram = "12GB"; // Adding new property to object
console.log(Mobile1);
console.log(Mobile2);
console.log(Mobile3);



// 4) Spread Operator.  and rest 
// Rest operator means to collect multiple elements and condense them into a single element.
// Spread operator means to take a single element and spread it out into multiple elements.
// Spread operator is used to split up array elements or object properties.
// Rest operator is used to merge a list of function arguments into an array.
let movies = ["Arjun Reddy", "Animal", "Spirit"];
function a(x,y,z){
console.log(x);
console.log(y);
console.log(z);
}
a(...movies); // Spread Operator

let str1 = "Gowtham";
let str2 = [...str1];
console.log(str2);



let obj = {
    name: "Gowtham",
    gender: "male",
}
let obj3={
    address: "Bangalore",
    pincode: 560076,
}
let obj2 = {...obj,age:21,...obj3}; // Spread Operator
console.log(obj2);

// Factory Function
function Hero(name,age){
    return{
        name: name,
        age: age,
        greet(){
            console.log("Hello ${name} age ${age}");
            
        }
    }
}
let Hero1 = Hero("AA", 45);
let Hero2 = Hero("PB", 50);
console.log(Hero1);
console.log(Hero2);
Hero1.greet();
Hero2.greet();
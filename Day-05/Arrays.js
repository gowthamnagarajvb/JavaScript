// An array in JavaScript is a special type of object used to store multiple
// values in a single variable.
// In simple words we can say that, array is the collection of data which may be homogenous or
// heterogenous.
// Arrays allow us to group and organize data efficiently, making it easy to
// manipulate and access elements.

// Types 

// 1) Homogenous Array  (contains elements of the same type)


let num = [1,2,3,4,5];
let str = ["apple","orange","banana"];

console.log(num);
console.log(str);

// 2) Heterogenous Array (contains elements of different types)

let hetero = [1, "apple", 3, 4, "Banana", "Orange"];
console.log(hetero);

// Ways to create Array :- 1) By using Literal;     2) By using Array Constructor;

//1) By using Literal
let a1 = [1,"Gowtham",3.5,true,"false"];
console.log(typeof(a1));
// Accessing elements in array
console.log(a1[4]);
console.log(a1[0]);
console.log(a1[1]);
console.log(a1[2]);
console.log(a1[3]);
console.log(a1[5]); // undefined because there is no element at index 5



// By using Array Constructor

let a2 = new Array(4); // creates an array of size 4 with all elements as undefined
let a3 = new Array(1,2,3,4,5); // creates an array with given elements
console.log(a2); // [ <4 empty items> ]
console.log(a3); // [ 1, 2, 3, 4, 5 ]
console.log(typeof(a2)); // object
console.log(typeof(a3)); // object


// Methods in Array

// 1)Push() - adds an element at the end of the array
let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango");
console.log(fruits); // [ 'Apple', 'Banana', 'Orange', 'Mango' ]
fruits.push("Pineapple", "Grapes");
console.log(fruits); // [ 'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes' ]

// 2) POP() - removes the last element from the array
fruits.pop();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple' ]
fruits.pop();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange', 'Mango' ]
fruits.pop();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

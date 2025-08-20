function add (a, b) {
return a+b;
}
function Calculate (callback, a, b) {
return callback (a, b)
}
let res=Calculate(add,10,20)
console.log("Sum of 2 given numbers is: " + res)

// Area of Square

function areaOfSquare(d)
{
return d*d;
}
function mainFun (callback, d)
{
return callback(d)
}
let d=10;
let result = mainFun(areaOfSquare, d);
console.log("Area of square:", result);

// Neasted Function
let a=()=>{
    console.log("outer function");
    let b=()=>{
        console.log("inner function");
    }
    b();
    console.log("outer function");
}
a();
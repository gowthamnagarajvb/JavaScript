// 🔹 Questions
// Write a program to check whether a given number is positive, negative, or zero.

let given_num = prompt("Enter the number: ")
if(given_num >0){
    console.log("The Given Number is Positive ");   
} else if(given_num == 0){
    console.log("The Given Number is Zero ");
    
}else{
    console.log("The given Number is Negative ");
    
}

// Take a number n and print whether it is even or odd.
let n1 = prompt("Enter value of n: ")
if(n1%2==0){
    console.log("It is a Even Number");
    
}else{
    console.log("It is an Odd Number");
    
}

// Print the largest of three numbers entered by the user.
let num1 = 10;
let num2 = 20;
let num3 = 15;
if(num1>num2 && num1>num3){
    console.log(num1 + "is the largest of three");
    
}else if(num2>num1 && num2>num3){
    console.log(num2 + "is the largest of three");
    
}else{
    console.log(num3 + "is the largest of three");
    
}

// Write a program to print the multiplication table of any number (say 7).
let number = Number(prompt("enter the number for multiplication:"))
for(i=1; i<=10; i++){
    console.log(number + " * " + i +  " = " + number*i);
    
}

// Print all even numbers from 1 to 50.
for(i=1; i<=50; i++){
    if(i%2==0){
    console.log(i);
    
}
}

// Write a program to check whether a given year is a leap year.
let year = Number(prompt("Enter the year"))
if(year%400==0){
    console.log(year + " is the leap Year");
    
}else {
    console.log(year + " is not the leap Year");
    
}

// Use a switch statement to create a simple calculator (add, subtract, multiply, divide).
let nums1 = Number(prompt("Enter 1st Number: "))
let nums2 = Number(prompt("Enter 2nd Number: "))
let Operator = prompt("Enter operators like + _ * / :")
switch (Operator){
    case "+":
        console.log("Result is: " + (nums1 + numss2));
        break;
        case "+":
    case "-":
        console.log("Result is: " + (num1 - nums2));
        break;
    case "*":
        console.log("Result is: " + (nums1 * nums2));
        break;  
    case "/":
        if(num1%num2 !=0){
        console.log("Result is: " + (nums1 / nums2));
        }else{
            console.log("Error in Division");
            
        }
        break; 
    default:
        console.log("Invalid Operator");
        
}

// Print the sum of digits of a number (e.g., 123 → 1+2+3 = 6).
let num4 = Number(prompt("Enter the number"))
let sum = 0;
while (num4 > 0){
    let digit = num4 % 10
    sum += digit
    num3 = Math.floor(num4/10)
}
console.log("Sum of digits: " + sum);


// Print the factorial of a number using a loop.
let fN = Number(prompt("Enter the Number"))
let fact = 1
for (let i=1; i <= fN ; i++ ){
    fact *= i;
}
console.log("Factorial of " +fN + "is : " + fact);

// Print the Fibonacci series up to n terms.
let n  = Number(prompt("Enter the terms"))
let a = 0
let b = 1
for( let i=1; i<=n; i++){
    console.log(a);
    let next = a+b;
    a = b;
    b = next;
}
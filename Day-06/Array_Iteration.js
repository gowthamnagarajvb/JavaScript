//Array Destructuring
let [a,b,[c,[d],[e]],f] = [10,20,["this",["is"],["nested"]],"Array"];
console.log(a);
console.log(b);
console.log(c);
console.log(e,f);

// Array Iteration MEthods 
// 1) Map Method 2) Filter Method 3) Reduce Method 4) ForEach Method

// // 1) Map()
// let arr = [1,2,3,4,5];
// let newArr = arr.map((value)=>{
//     return value * 2;
// });
// console.log(newArr);


// // 2) Filter()
// let filterArr = arr.filter((value)=>{
//     return value > 2;
// });
// console.log(filterArr);

// // 3) Reduce()
// let sum = arr.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },0);       
// console.log(sum);

// // 4) ForEach()
// arr.forEach((value,index)=>{
//     console.log(`Index: ${index}, Value: ${value}`);
// });                             

// Example of Map Method
let arr = [1,2,3,4,5];
let res = arr.map((value)=>{
    return value * 3;
});
console.log(res);


// Indexing value 
let res2 = arr.map((value,index)=>{
    console.log(index);
    
    return value ;
})
console.log(res2);


// 2) Filter Method Example 

let filterArr = [1,2,3,4,5,6,7,8,9,10];
let res3 = filterArr.filter((filValue)=>{
    return filValue > 5;
})
console.log(res3);

let numArr = [5,6,7,8,9,10,15,16,17,18,19,,20,25,30,35,40,41,42,43,44,45,50];
let res4 = numArr.filter((multiplesOF5,index)=>{
    console.log(index);
    
    return multiplesOF5 % 5 === 0;
})
console.log(res4);


// 3) Reduce Method Example
let reduceArr = [1,2,3,4,5,6,7,8,9,10];
let res5 = reduceArr.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0)
console.log(res5);

let redArr = [10,20,30];
let res6 = redArr.reduce((acc,cValue)=> acc + cValue);
console.log(res6);

// Create a Array and find the max value using reduce method
let maxArr = [0,30,50,80,100,60,125];
let res7 = maxArr.reduce((maxValue,currentValue)=>{
    return currentValue > maxValue ? currentValue : maxValue;
})
//OR Use this 
//     if(currentValue > maxValue){
//         return currentValue;
//     }else{
//         return maxValue;
//     }
// })

console.log(res7);


// Take user input and find the max value using reduce method
// let userInput = prompt("Enter numbers seperated by comma");
// let userArr = userInput.split(",").map(Number);   
// console.log("User input array:" + userArr);

// let res8 = userArr.reduce((maxValue,currentValue)=>{
//     if(currentValue > maxValue){
//         return currentValue;
//     }else{
//         return maxValue;
//     }
// })
// console.log(res8);



// For Min Value
let minArr = [30,50,80,100,60,125];
let res9 = minArr.reduce((minValue,currentValue)=>{
    return currentValue < minValue ? currentValue : minValue;
},0)
console.log(res9);



// 4) ForEach Method Example 
let nums = [1,2,3,4,5,6,7,8,9,10];
let numsRes = nums.forEach((value,index)=>{
    console.log(`Index: ${index}, Value: ${value}`);
})


let arr1 = ["this","is","an","array","for","each","method"];
let arr1Res = arr1.forEach((value,index)=>{
    console.log(index + ":" + value);
    
})
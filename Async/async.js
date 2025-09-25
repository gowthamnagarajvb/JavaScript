// Async Js -- Non blocking in nature 

// 4 Main Functions -- 1) Timing 2) Promises 3)async & await 4) Fetch API

// 1) Timing -- 1) setTimeOut() 2) setInterval() 3) clearTimeout() 4) clearInterval

setTimeout(()=>{
    console.log("Hello");
    
}, 2000);

setInterval(()=>{
    console.log("Hi Bro!!");
    
}, 2000)

let count = 0;
let myInterval = setInterval(()=>{
    console.log(`count: ${++count}`);
    if (count === 5){
        clearInterval(myInterval)
    }
    
},1000)

let counter = 0;
let Interval = setInterval(()=>{
    console.log(`counter:${++counter}`);
},1000)

let clear = setTimeout(()=>{
    console.log("This will clear time out");
    
},3000)
clearTimeout(clear);

// Promises -- Pending |  Fulfilled  | Rejected


let myPromise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Promise is Fulfilled")
    }else{
        reject("Promise is rejected")
    }
})
console.log(myPromise);


// Promise Instance Methods -- then() Handles fullfilled state || catch()- Handles rejected state

let myPromise1 = new Promise((resolve, reject)=>{
    success = true;
    if(success){
        resolve("Promise is Fulfilled");
    }else{
        reject("Rejected");
    }
})
console.log(myPromise1);


myPromise1.then((value)=>{
    console.log(value);
    
});
myPromise1.catch((value)=>{
    console.log(value);
    
});

myPromise1.finally(()=>{
    console.log("Operation Completed");
    
})

let promiseChaining = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First Operation Done")
    },2000)
});

promiseChaining
    .then((result)=>{
        console.log(result);
        return 10;
    })
    .then((value)=>{
        console.log(value);
        return value+10
    })
    .then((sum)=>{
        console.log(sum);
        
    });
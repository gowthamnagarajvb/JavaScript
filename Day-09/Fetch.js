// let FetchData = fetch("https://jsonplaceholder.typicode.com/todos").then((value)=>{
// // let FetchData = fetch("Fetch.json").then((value)=>{
//     return value.json()
// }).then((value)=>{
//     // console.log(value);
//     value.map((x)=>{
//         console.log(x.userId);
//         console.log(x.title);
//     })
    
// }).catch((err)=>{
//     console.log(err);
// })
// console.log(FetchData);

let Fetching = async()=>{
    try{
        // let response = await fetch("https://jsonplaceholder.typicode.com/todos")
        let response = await fetch("Fetch.json")
        let data = await response.json()
        console.log(data);
        
    } catch(error) {
        console.log(error);
        
    }
}
Fetching()
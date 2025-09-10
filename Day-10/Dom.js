// let fetching = async()=>{
//     let fetched =await fetch("https://jsonplaceholder.typicode.com/todos")
// let data = await fetched.json()
// console.log(data);
// let target = document.getElementById("one")
// console.log(target);

// data.map((x)=>{
//     target.innerHTML +=`
//     <h2> ${x.title} </h2>`
// })
// }
// fetching()

let fetching = async () => {
    // let fetched = await fetch("https://jsonplaceholder.typicode.com/todos")
    let fetched = await fetch('data.json')
    let data = await fetched.json()
    console.log(data);
    let target = document.getElementById("one")
    console.log(target);

    data.map((x) => {
       target.innerHTML += `
            <div style="border:1px solid black; padding:10px; border-radius: 50%;">
                <h3>${x.username}</h3>
                <h4>Age: ${x.age}</h4>
                <h5>City: ${x.gender}</h5>
            </div>
        `;
    })
}

fetching()

// console.log(window.document);
// console.log(window);

// console.log(window.screen);
// console.log(window.history);
// console.log(document.title);
// let title = document.body
// console.log(title);

let changeText = () =>{
    let target = document.getElementById("one")
    console.log(target);
    console.log(target.textContent);
    target.textContent = "This is Javascript Content which is changed dynamically" 
    target.style.background = "skyblue"
    target.style.color = "red" 
    target.style.fontSize = "30px"  
    
}

function Change(){
    let target = document.getElementById("two")
    console.log(target);
    //target[0].textContent = `hi`
    //target[1].textContent = 'hey'
    for(let i = 0; i<target.length; i++){
        target[i].style.color="blue"
        target[i].style.fontSize="20px"
        target[i].style.backgroundColor="aqua"
        target[i].style.borderRadius="20px"
        target[i].style.padding="20px"

    }
    
}



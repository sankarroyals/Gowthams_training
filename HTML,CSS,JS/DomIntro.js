console.log(document);

console.log(document.body);

console.log(document.all);

console.log(document.all[0]);           // html


console.log(document.all[7])           // div


console.log(document.all[0].children[1]);  


// classList
console.log(document.all[6].classList);  

// //  adding class list to body



const changeBgToYellow = () =>{
    // document.body.classList.add('bodyClass3');
    document.body.style.background="green"
}

const changeBgToBlack = () =>{
    document.body.classList.remove('bodyClass3');
}


const changeBgToggle = () =>{
    document.body.classList.toggle('bodyClass3');
}











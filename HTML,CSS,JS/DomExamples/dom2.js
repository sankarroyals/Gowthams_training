console.log(document.getElementById("container"));

console.log(document.getElementsByClassName("Container")[0]);

document.getElementsByClassName("Container")[0].children[0].style.color = "red";

console.log(document.getElementsByTagName("body"));

console.log(document.querySelector(".Container"));
console.log(document.querySelectorAll(".Container")[0]);

const changeToYellow = (event) => {
  console.log(event.target);
  console.log((event.target.style.background = "yellow"));
  console.log((event.target.children[1].style.color = "green"));
};

// event deligation

const changetonormalcolor = (event) => {
  //  console.log(event.target);
   console.log(event.target.getAttribute("id"))

  if (event.target.getAttribute("id") !== "container1") {
    document.getElementById("container1").style.background = "blue";
  }

};


const submitdata = (event) =>{

  const inputValue = document.getElementById('15')
 

  console.log(event.target);
  console.log(document.getElementById('15'))
  console.log(document.getElementById('15').getAttribute('id'));
  console.log(inputValue.value)   // prints values inside input

  // step 1          creating <li></li>
  const liElement = document.createElement('li')
  // step 2         inserting input box values inside li element <li>Mukesh</li>
  liElement.textContent = inputValue.value
  console.log(liElement)

  // step3  appending into the ui
  document.getElementById('ulContainer').appendChild(liElement)




  inputValue.value  = ''          // empty the input value
}


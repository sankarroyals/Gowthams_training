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
   console.log(event.target);
   console.log(event.target.getAttribute("id"))

  if (event.target.getAttribute("id") !== "container1") {
    document.getElementById("container1").style.background = "blue";
  }
};

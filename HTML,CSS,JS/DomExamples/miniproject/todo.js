const titleHead = document.getElementsByClassName("titleinput")[0];
const listItemValue = document.getElementsByClassName("todoListItems")[0];

let listItem = [];

const addingList = (event) => {
  
  

  listItem.push(listItemValue.value);
  
//   Emptying the ul container before adding list due to avoid duplicates
  document.getElementsByClassName("ulContainer")[0].innerHTML = ""
  
  for(let i=0;i<listItem.length;i++){

    createlist(listItem[i],i);
  }
  
};

const createlist = (listItem,id) => {

  const liElement = document.createElement("li");
  liElement.textContent = listItem;
  liElement.setAttribute("id",id)
  


//    creating and appending deleteIcons into list
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fa-solid fa-trash")
  deleteIcon.setAttribute("onclick","deleteData(event)")
  liElement.appendChild(deleteIcon);



  document.getElementsByClassName("ulContainer")[0].appendChild(liElement);

  listItemValue.value = "";
};



const deleteData = (event) => {
  console.log(event.target.parentElement.getAttribute('id'))
  console.log(listItem[event.target.parentElement.getAttribute('id')])

  listItem.splice(event.target.parentElement.getAttribute('id'), 1)

  document.getElementsByClassName("ulContainer")[0].innerHTML = ""
  
  for(let i=0;i<listItem.length;i++){

    createlist(listItem[i],i);
  }


};

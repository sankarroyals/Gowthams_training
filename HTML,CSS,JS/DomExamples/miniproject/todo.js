let titleHead = document.getElementsByClassName("titleinput")[0];
let listItemValue = document.getElementsByClassName("todoListItems")[0];

const addToComplete = (event) =>{
console.log(event.target.parentElement)
const data = JSON.parse(localStorage.getItem('data'))

console.log(data[event.target.parentElement.getAttribute("name")])
console.log(data[event.target.parentElement.getAttribute("name")].pending[event.target.parentElement.getAttribute("id")])
data[event.target.parentElement.getAttribute("name")].completed.push(data[event.target.parentElement.getAttribute("name")].pending[event.target.parentElement.getAttribute("id")])
data[event.target.parentElement.getAttribute("name")].pending.splice(event.target.parentElement.getAttribute("id"),1)
localStorage.setItem("data",JSON.stringify(data))

localStorageTodos()
}

const addToPending = (event) =>{
  console.log(event.target.parentElement)
const data = JSON.parse(localStorage.getItem('data'))

console.log(data[event.target.parentElement.getAttribute("name")])
console.log(data[event.target.parentElement.getAttribute("name")].completed[event.target.parentElement.getAttribute("id")])
data[event.target.parentElement.getAttribute("name")].pending.push(data[event.target.parentElement.getAttribute("name")].completed[event.target.parentElement.getAttribute("id")])
data[event.target.parentElement.getAttribute("name")].completed.splice(event.target.parentElement.getAttribute("id"),1)
localStorage.setItem("data",JSON.stringify(data))

localStorageTodos()
}

const localStorageTodos = () =>{
  document.getElementsByClassName('listOfTodosCont')[0].innerHTML =""

  if(localStorage.getItem('data')){
   const data = JSON.parse(localStorage.getItem('data'))

   //mapping all data
   data.map((d,i)=>{

    // creating listoftodos
    const listOfTodos = document.createElement('div')
    listOfTodos.setAttribute('class','listOfTodos')
    listOfTodos.setAttribute('id',i)

     
    const titleDiv = document.createElement('div')
    titleDiv.setAttribute('class','title')
    titleDiv.textContent = d.title
    listOfTodos.appendChild(titleDiv)

    // creating pending div
    const pendingDiv = document.createElement('div')
    pendingDiv.setAttribute('class','pending')

    //  tasks in pending div
    d.pending.map((dp,j)=>{
      
      const tasksdiv = document.createElement('div')
      tasksdiv.setAttribute('class','tasks')
      tasksdiv.setAttribute('id',j)
      tasksdiv.setAttribute('name',i)

      
      const inputTag = document.createElement('input')
      inputTag.setAttribute('type','checkbox')
      inputTag.setAttribute('onclick','addToComplete(event)')
      tasksdiv.appendChild(inputTag)

      const contentDiv = document.createElement('div')
      contentDiv.textContent = dp
      tasksdiv.appendChild(contentDiv)
      
      pendingDiv.appendChild(tasksdiv)
    })
    listOfTodos.appendChild(pendingDiv)

    // text for completed box
    const completedDiv = document.createElement('div')
    completedDiv.setAttribute('class','completed')

    if(d.completed.length>0){
      const completedPara = document.createElement('p')
      completedDiv.textContent = "completed"

      completedDiv.appendChild(completedPara)
    }
    listOfTodos.appendChild(completedDiv)

    d.completed.map((dp,j)=>{
      
      const tasksdiv = document.createElement('div')
      tasksdiv.setAttribute('class','tasks')
      tasksdiv.setAttribute('id',j)
      tasksdiv.setAttribute('name',i)
      
      const inputTag = document.createElement('input')
      inputTag.setAttribute('type','checkbox')
      inputTag.setAttribute('checked','true')
      inputTag.setAttribute('onclick','addToPending(event)')
      tasksdiv.appendChild(inputTag)

      const contentDiv = document.createElement('div')
      contentDiv.textContent = dp
      tasksdiv.appendChild(contentDiv)
      
      completedDiv.appendChild(tasksdiv)
    })

   

    document.getElementsByClassName('listOfTodosCont')[0].appendChild(listOfTodos)

    
   })
  }
}
localStorageTodos()



let listItem = [];

const addingList = (event) => {
      //  it is used for id
  let newDate = new Date()
  
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



// new one

const addTodo = (event) =>{

  const data = {"title":titleHead.value,
                "pending":listItem,
                "completed":[],
               }

  if(!localStorage.getItem("data")){
    localStorage.setItem("data",JSON.stringify([data]))
  }
  else{
    const localData = JSON.parse(localStorage.getItem("data"))
    localData.push(data)
    localStorage.setItem("data",JSON.stringify(localData))
  }


  document.getElementsByClassName("ulContainer")[0].innerHTML = ""
  titleHead.value = ""
  listItem = []

  localStorageTodos()
}



const deleteData = (event) => {

    const presentId = event.target.parentElement.getAttribute('id')
    
    
    listItem.splice(presentId,1)

    document.getElementsByClassName("ulContainer")[0].innerHTML = ""
    for(let i=0;i<listItem.length;i++){
       createlist(listItem[i],i);
    }

    
    
    
 
 
};

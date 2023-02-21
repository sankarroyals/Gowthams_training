const titleHead = document.getElementsByClassName("titleinput")[0];
const listItemValue = document.getElementsByClassName("todoListItems")[0];


const addToCompleted = (event) =>{
  console.log("entire data position",event.target.name,"value inside pending",event.target.id)
  const data = JSON.parse(localStorage.getItem('data'))
  console.log(data[event.target.name]);    

  data[event.target.name].completed.push(data[event.target.name].pending[event.target.id])

  data[event.target.name].pending.splice(event.target.id,1)
  
  localStorage.setItem("data",JSON.stringify((data)))

  localStorageTodos()

}


const addToPending = (event) =>{
  console.log("entire data position",event.target.name,"value inside pending",event.target.id)
  const data = JSON.parse(localStorage.getItem('data'))

  data[event.target.name].pending.push(data[event.target.name].completed[event.target.id])
  data[event.target.name].completed.splice(event.target.id,1)

  localStorage.setItem("data",JSON.stringify((data)))


  localStorageTodos()


}


const localStorageTodos = () =>{
  document.getElementById("listOfTodosContainer").innerHTML = ""


  if(localStorage.getItem("data")){
    const data = JSON.parse(localStorage.getItem("data"))

    data.map((d,indexi)=>{
     
      const listOfTodos = document.createElement('div')
      listOfTodos.setAttribute("class","listOfTodos")

      const titles = document.createElement('div')
      titles.setAttribute("class","title")
      titles.textContent = d.title

      listOfTodos.appendChild(titles)


      // pending div creation
      const pendingDiv = document.createElement('div')
      pendingDiv.setAttribute('class','pending')

      d.pending.map((dp,indexj)=>{
        
        const tasks  =  document.createElement('div')
        tasks.setAttribute('class','tasks')
       

        const inputTag =  document.createElement('input')
        inputTag.setAttribute('type','checkbox')
        inputTag.setAttribute('name',indexi)
        inputTag.setAttribute('id', indexj)
        
        inputTag.setAttribute('onclick','addToCompleted(event)')


        const contentdiv =  document.createElement('div')
        contentdiv.textContent = dp

       
        tasks.appendChild(inputTag)
        tasks.appendChild(contentdiv)
        pendingDiv.appendChild(tasks)

      })
      listOfTodos.appendChild(pendingDiv)



      const completedDiv = document.createElement('div')
      completedDiv.setAttribute('class','completed')

      const completedTitle = document.createElement('div')
      completedTitle.textContent = "completed"

      if(d.completed.length>0){
        completedDiv.appendChild(completedTitle)
      }



      d.completed.map((dp,indexj)=>{
        
        const tasks  =  document.createElement('div')
        tasks.setAttribute('class','tasks')
       

        const inputTag =  document.createElement('input')
        inputTag.setAttribute('type','checkbox')
        inputTag.setAttribute('name',indexi)
        inputTag.setAttribute('id', indexj)
        inputTag.setAttribute('checked','true')
        
        inputTag.setAttribute('onclick','addToPending(event)')


        const contentdiv =  document.createElement('div')
        contentdiv.textContent = dp

       
        tasks.appendChild(inputTag)
        tasks.appendChild(contentdiv)
        completedDiv.appendChild(tasks)

      })

      
     
      listOfTodos.appendChild(completedDiv)



      
      
      
      // appending listoftodos
      document.getElementById("listOfTodosContainer").appendChild(listOfTodos)

    })

  }
}
localStorageTodos()




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




// adding todos in localstorage

const addTodo = (event) =>{
  

  const data = {"title": titleHead.value, "pending": listItem, "completed": [] }

  if(localStorage.getItem("data")){
    const localdata = JSON.parse(localStorage.getItem("data"))
    localdata.push(data)
    localStorage.setItem("data",JSON.stringify(localdata))
  }

  else{
    localStorage.setItem("data",JSON.stringify([data]))
  }

  
  // removing title, listitem, ulContainer from screen to add new data
  titleHead.value = ""
  listItem = []
  document.getElementsByClassName("ulContainer")[0].innerHTML = ""

  localStorageTodos()
}

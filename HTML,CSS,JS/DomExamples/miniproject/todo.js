const titleHead = document.getElementsByClassName('titleinput')[0]
const listItemValue  =  document.getElementsByClassName('todoListItems')[0]

const addingList = (event) =>{


const liElement =  document.createElement('li')

liElement.textContent =  listItemValue.value

const deleteIcon = document.createElement('i')
deleteIcon.setAttribute('class','fa-solid fa-trash')
liElement.appendChild(deleteIcon)

document.getElementsByClassName('ulContainer')[0].appendChild(liElement)

listItemValue.value = ""
}


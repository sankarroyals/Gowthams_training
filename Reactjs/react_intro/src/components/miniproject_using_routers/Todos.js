import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Todos.css";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [listValue, setListValue] = useState("");


  const [listItem, setListItem] = useState([]);


  const [data,setData] = useState([])

  const addingList = (e) => {
    setListItem([...listItem, listValue]);
    setListValue("");
  };

  useEffect(() => {
    console.log(listItem);
  }, [listItem]);



  useEffect(()=>{

    axios.get('http://localhost:3000/todos').then(res=>{
      setData(res.data)
    })

  },[])



  const deleteListItem = (id) =>{
    const newdata = listItem.filter((li,index)=>{return index !==id})
    console.log(newdata)
    setListItem([...newdata])
  }

  return (
    <div>
      <div className="container">
        <div className="todoAddingBox">
          <input
            type="text"
            class="titleinput"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

            <ul class="ulContainer">
                {listItem.map((l,index)=>(
                    <li>{l} <i class="fa-solid fa-trash" onClick={e=>deleteListItem(index)}></i></li>
                ))}
               
            </ul>

          <div
            style={{
              display: "flex",
              gap: "5px",
              borderBottom: "1px solid #f1f3f4",
              alignItems: "center",
            }}
          >
            <div>
              <input
                type="text"
                class="todoListItems"
                placeholder="List Item"
                value={listValue}
                onChange={(e) => setListValue(e.target.value)}
              />
            </div>
            <div
              style={{
                marginLeft: "10px",
                color: "#989b9c",
                cursor: "pointer",
              }}
            >
              <i class="fa-solid fa-plus" onClick={(e) => addingList(e)}></i>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              padding: "10px",
            }}
          >
            <button>Add</button>
            <button>Delete</button>
          </div>
        </div>
        
        <div id="listOfTodosContainer">

            {data.map((d,index)=>(
              <div class="listOfTodos">
                <div class="title">Food</div>
                <div class="pending">
                    <div class="tasks"  >
                        <input type="checkbox" onclick="addToCompleted(event)" name="0" id="0" />
                        <div>gowtham</div>
                    </div>
                    <div class="tasks">
                        <input type="checkbox" name="" id="" />
                        <div>sankar</div>
                    </div>

                </div>

                
                <div class="completed">
                    <div>Completed</div>
                    <div class="tasks"  >
                        <input type="checkbox" checked onclick="addToPending(event)" name="0" id="0" />
                        <div>gowtham</div>
                    </div>
                    <div class="tasks">
                        <input type="checkbox" checked name="" id="" />
                        <div>sankar</div>
                    </div>

                </div>

            </div>
            ))}
            
        </div>
      </div>
    </div>
  );
};

export default Todos;

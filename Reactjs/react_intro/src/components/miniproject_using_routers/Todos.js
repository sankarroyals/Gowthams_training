import React, { useEffect, useState } from "react";
import "./Todos.css";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [listValue, setListValue] = useState("");

  const [listItem, setListItem] = useState([]);

  const addingList = (e) => {
    setListItem([...listItem, listValue]);
    setListValue("");
  };

  useEffect(() => {
    console.log(listItem);
  }, [listItem]);

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
                    <li>{l} <i class="fa-solid fa-trash"></i></li>
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
      </div>
    </div>
  );
};

export default Todos;

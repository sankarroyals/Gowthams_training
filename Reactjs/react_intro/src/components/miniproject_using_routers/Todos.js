import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Todos.css";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [listValue, setListValue] = useState("");

  const inputref = useRef();

  const [listItem, setListItem] = useState([]);

  const [data, setData] = useState([]);

  const [trigger, setTrigger] = useState(false);

  const addingList = (e) => {
    setListItem([...listItem, listValue]);
    setListValue("");
  };

  useEffect(() => {
    console.log(listItem);
    inputref.current.focus();
  }, [listItem]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setData(res.data);
    });
  }, [trigger]);

  const deleteListItem = (id) => {
    const newdata = listItem.filter((li, index) => {
      return index !== id;
    });
    console.log(newdata);
    setListItem([...newdata]);
  };

  const addToCompleted = (e, data) => {
    // console.log(e.target.getAttribute("name"), e.target.getAttribute('id'), data)
    // console.log(data)

    data.completed.push(data.pending[e.target.getAttribute("id")]);

    const pendingFilter = data.pending.filter((d, i) => {
      return +i !== +e.target.getAttribute("id");
    });
    console.log(pendingFilter);

    const newdata = { ...data, pending: [...pendingFilter] };
    axios.put(`http://localhost:3000/todos/${data.id}`, newdata).then((res) => {
      // console.log(res.data);
      setTrigger(!trigger);
    });
  };

  const addingTodos = () => {
    const data = {
      title: title,
      pending: listItem,
      completed: [],
    };
    axios.post("http://localhost:3000/todos", data).then((res) => {
      console.log(res.data);
      setListItem([]);
      setTitle("");
      setListValue("");
      setTrigger(!trigger);
    });
  };

  const addToPending = (e) => {};



  const deleteTodoList = (id) =>{
    axios.delete(`http://localhost:3000/todos/${id}`).then(res=>{
      setTrigger(!trigger);
    })
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
            ref={inputref}
          />

          <ul class="ulContainer">
            {listItem.map((l, index) => (
              <li>
                {l}{" "}
                <i
                  class="fa-solid fa-trash"
                  onClick={(e) => deleteListItem(index)}
                ></i>
              </li>
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
            {title !== "" && listItem.length > 0 ? (
              <button onClick={addingTodos}>Add</button>
            ) : (
              <button
                style={{ cursor: "not-allowed" }}
                onClick={(e) => window.alert("Please fill Title & listitem")}
              >
                Add
              </button>
            )}
          </div>
        </div>

        <div id="listOfTodosContainer">
          {data.map((d, indexi) => (
            <div class="listOfTodos">
            <i class="fa-solid fa-trash listOfTodosDelete" onClick={e=>deleteTodoList(d.id)}></i>
              <div class="title">{d.title}</div>
              <div class="pending">
                {d.pending.map((p, indexj) => (
                  <div class="tasks">
                    <input
                      type="checkbox"
                      onClick={(e) => addToCompleted(e, d)}
                      name={indexi}
                      id={indexj}
                    />
                    <div>{p}</div>
                  </div>
                ))}
              </div>

              <div class="completed">
                {d.completed.length > 0 && <div>Completed</div>}
                {d.completed.map((c, indexj) => (
                  <div class="tasks">
                    <input
                      type="checkbox"
                      checked
                      onClick={(e) => addToPending(e)}
                      name="0"
                      id="0"
                    />
                    <div>{c}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;

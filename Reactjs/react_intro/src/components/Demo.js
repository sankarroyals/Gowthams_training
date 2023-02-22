import React, { useState } from "react";

const Demo = () => {
  // let a = "sankar";
  const [name, setName] = useState("sankar");
  const [liData, setLiData] = useState([]);

  const [data2, setData2] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (e) => {
    console.log(e.target);

    setName("mukesh");
  };

  const addToValue = (e) => {
    setLiData([...liData, document.getElementById("textValue").value]);

    // setLiData(prev => [...prev,document.getElementById('textValue').value])

    document.getElementById("textValue").value = "";
  };

  const emailandPassword = (e) => {
    console.log({ email: email, password: password });
  };

  return (
    <div>
      <div>{name}</div>
      <button onClick={(e) => changeName(e)}>Click me to change a</button>

      <div style={{ marginTop: "30px" }}>
        <div>
          <input type="text" id="textValue" />
        </div>
        <button onClick={(e) => addToValue(e)}>add value into array</button>
      </div>

      <ul>
        {liData.map((li, index) => (
          <li>{li}</li>
        ))}
      </ul>


      
      <div style={{ marginTop: "30px" }}>
        <div>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={(e) => emailandPassword(e)}>Submit</button>
      </div>
    </div>
  );
};

export default Demo;

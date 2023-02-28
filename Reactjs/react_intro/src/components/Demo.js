import React, { useState } from "react";

const Demo = () => {
  // let a = "sankar";
  const [name, setName] = useState("sankar");
  const [liData, setLiData] = useState([]);

  const [data2, setData2] = useState([]);

  

  const changeName = (e) => {
    console.log(e.target);

    setName("mukesh");
  };

  const addToValue = (e) => {
    setLiData([...liData, document.getElementById("textValue").value]);

    // setLiData(prev => [...prev,document.getElementById('textValue').value])

    document.getElementById("textValue").value = "";
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


      
    
    </div>
  );
};

export default Demo;

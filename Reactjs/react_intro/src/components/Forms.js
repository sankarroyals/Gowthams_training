import React, { useState } from "react";

const Forms = () => {
  const [file, setFile] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");

  const emailandPassword = () => {
    console.log({  file:file });
  };

  return (
    <div>
    <h1>Forms</h1>
    
      <div style={{ marginTop: "30px" }}>
      {file}
        <div>
          <input type="file" name="" id="" onChange={e=>setFile(e.target.value)} />
        </div>
        {file}
        <div>
          <input type="file" name="" id="" onChange={e=>setFile(e.target.value)} />
        </div>
        {file}
        <div>
          <input type="file" name="" id="" onChange={e=>setFile(e.target.value)} />
        </div>
        {file}
        <div>
          <input type="file" name="" id="" onChange={e=>setFile(e.target.value)} />
        </div>
        {file}
        <div>
          <input type="file" name="" id="" onChange={e=>setFile(e.target.value)} />
        </div>
        {file}
        <div>
          <input type="file" name="" id="" onChange={e=>setFile(e.target.value)} />
        </div>
        {file}
        <div>
          <input type="file" name="" id="" onChange={e=>setFile(e.target.value)} />
        </div>

        

    <button onClick={emailandPassword}>Click me</button>

      </div>
    </div>
  );
};

export default Forms;

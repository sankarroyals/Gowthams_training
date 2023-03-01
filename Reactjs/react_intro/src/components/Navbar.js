import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <div style={{ padding: "10px",
   height: "40px",
   background: "black",}}>
     <div
      style={{
       
        color: "white",
        display: "flex",
        gap: "10px",
      }}
    >
      <div ><Link to="/" style={{color:"white"}}>Demo</Link></div>
      <div><Link to="/form" style={{color:"white"}}>Forms</Link></div>
      <div><Link to="/useEffectExample" style={{color:"white"}}>UseEffectExample</Link></div>
      <div><Link to="/todos" style={{color:"white"}}>Todos</Link></div>
    </div>
   </div>
  );
};

export default Navbar;

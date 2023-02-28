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
      <div><Link to="/">Demo</Link></div>
      <div><Link to="/form">Forms</Link></div>
      <div><Link to="/useEffectExample">UseEffectExample</Link></div>
    </div>
   </div>
  );
};

export default Navbar;

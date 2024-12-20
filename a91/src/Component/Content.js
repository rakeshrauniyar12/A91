import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";


const Content = () => {
 
    return (
      <div style={{ width: "100%", margin: "auto",}}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  };
  
  export default Content;
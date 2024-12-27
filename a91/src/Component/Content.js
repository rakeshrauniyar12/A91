import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeDesign1 from "./HomeDesign1";
import HomeDesign from "./HomeDesign";
import HomeDesign2 from "./HomeDesign2";
import DetailPage from "./DetailsPage";
import Login from "./Login";
import HFirst from "./HFirst";


const Content = () => {
 
    return (
      <div style={{ width: "100%", margin: "auto",}}>
        <Routes>
          <Route path="/" element={<HFirst />} />
          <Route path="/homedesignfirst" element={<HomeDesign1 />} />
          <Route path="/homedesign" element={<HomeDesign />} />
          <Route path="/homedesignsecond" element={<HomeDesign2 />} />
          <Route path="/detailpage" element={<DetailPage />} />
        </Routes>
      </div>
    );
  };
  
  export default Content;
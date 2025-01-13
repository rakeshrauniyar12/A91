import React, { useState } from "react";
import h1 from "../Asset/Home/h1.png";
import ApartmentCard from "./ApartmentCard";
import PropertyTable from "./PropertyTable.js";
import { FaSearch, FaHome, FaList, FaHashtag, FaTh, FaBars } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

const ActiveProperty = () => {
  const [showTableView,setShowTableView] = useState(false);

  const handleShowTableView = ()=>{
    setShowTableView(!showTableView);
  }
  const products = [];
  for (let r = 0; r < 3; r++) {
    products.push({
      productImage: h1,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      isAvailable: true,
      leftBtn:"Edit",
      rightBtn:"Change Status"
    });
  }
  return (
    <div className="active-main-container">
      <div className="active-header-option">
      {/* Search Bar */}
        <div className="select-search-div-11">
             <input placeholder="Search by Agent Name" />
             <div className="select-search-image-11">
               <BiSearchAlt color="white" size={28} />
             </div>
           </div>

      {/* Icons */}
      <FaHome style={{ cursor: "pointer", fontSize: "24px" }} />
      <FaList style={{ cursor: "pointer", fontSize: "24px" }} />
      <FaHashtag style={{ cursor: "pointer", fontSize: "24px" }} />
      <FaTh style={{ cursor: "pointer", fontSize: "24px" }} />
      <FaBars style={{ cursor: "pointer", fontSize: "24px" }} onClick={handleShowTableView}/>
    </div>
     { !showTableView?<div className="product-append-111">
        {products.map((product) => (
          <ApartmentCard product={product} isActive={true}/>
        ))}
      </div>:
      <PropertyTable products={products}/>
      }
    </div>
  );
};

export default ActiveProperty;

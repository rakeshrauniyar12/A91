import React, { useState } from "react";
import h1 from "../Asset/Home/h1.png";
import ApartmentCard from "./ApartmentCard";
import PropertyTable from "./PropertyTable.js";
import {
  FaSearch,
  FaHome,
  FaList,
  FaHashtag,
  FaTh,
  FaBars,
} from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { CiHashtag } from "react-icons/ci";
import { PiSquaresFour } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";

const ActiveProperty = () => {
  const [showTableView, setShowTableView] = useState(false);

  const handleShowTableView = () => {
    setShowTableView(true);
  };
  const handleShowView = () => {
    setShowTableView(false);
  };
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
      leftBtn: "Edit",
      rightBtn: "Change Status",
    });
  }
  return (
    <div className="active-main-container">
      <div className="active-header-option">
        {/* Search Bar */}
        <div className="select-search-div-11">
          <input placeholder="Search by Agent Name" />
          <div className="elect-main-content-3">
            <BiSearchAlt size={21} color="white" />
          </div>
        </div>
     
        {/* Icons */}
        <IoHomeOutline
          style={{
            cursor: "pointer",
            fontSize: "36px",
            fontWeight: "500",
          }}
        />
        
        <IoIosList
          style={{
            cursor: "pointer",
            fontSize: "36px",
            fontWeight: "500",
          }}
        />
        <CiHashtag
          style={{
            cursor: "pointer",
            fontSize: "36px",
            fontWeight: "500",
           
          }}
        />
       
        <PiSquaresFour
          style={{
            cursor: "pointer",
            fontSize: "36px",
            fontWeight: "500",
            color:!showTableView?"var(--primary)":"black"
          }}
          onClick={handleShowView}
        />
        <div style={{width:"3px",height:"30px",backgroundColor:"black"}}></div>
        <RxHamburgerMenu
          style={{
            cursor: "pointer",
            fontSize: "36px",
            fontWeight: "500",
             color:showTableView?"var(--primary)":"black"
          }}
          onClick={handleShowTableView}
        />
      </div>
      {!showTableView ? (
        <div className="product-append-111">
          {products.map((product) => (
            <ApartmentCard product={product} isActive={true} />
          ))}
        </div>
      ) : (
        <PropertyTable products={products} />
      )}
    </div>
  );
};

export default ActiveProperty;

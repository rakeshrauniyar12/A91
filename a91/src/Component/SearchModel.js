import React from "react";
import { FaRupeeSign, FaExpand } from "react-icons/fa";
import "../Style/SearchModel.css";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";

const SearchModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginBottom: "20px" }}>Search</h2>
        <div className="search-form">
          <div className="row-first">
            <div className="row-1">
              <p>City</p>
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p>Locality</p>
            </div>
          </div>
          <div className="row-first">
            <div className="row-1">
              <p>Own/Rent</p>
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p>Purpose</p>
            </div>
          </div>
          <div className="row-second">
            <div className="budget-div-1">
              <div className="budget-rupee-icon">
              <MdCurrencyRupee size={24} style={{marginRight:"10px"}}/>
              </div>
              <div className="budget-div-2">
                <div className="div-min-max-1">
                  <div className="nav-min-1">Min</div>
                  <p style={{fontSize:"12px"}}>To</p>
                  <div className="nav-min-1">Max</div>
                </div>
                <div>
                  <p style={{fontSize:"13px"}}> Budget</p>
                </div>
              </div>
            </div>
            <div className="budget-div-1">
              <div className="budget-rupee-icon">
                <BsArrowsFullscreen size={20} style={{marginRight:"10px"}}/>
              </div>
              <div className="budget-div-2">
                <div className="div-min-max-1">
                  <div className="nav-min-1">Min</div>
                  <p style={{fontSize:"12px"}}>To</p>
                  <div className="nav-min-1">Max</div>
                </div>
                <div>
                  <p style={{fontSize:"13px"}}>Size</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-first">
            <div className="row-1">
              <p>No of Bedroom</p>
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p>No of Bathroom</p>
            </div>
          </div>
          <div className="search-pid-number">
            <label>Search by PID Number</label>
            <input type="text" placeholder="9999999"/>
          </div>
          <div className="search-pid-number">
            <label>Name the Search</label>
            <input type="text" placeholder="3BHK to Buy in Bengalore"/>
          </div>
          <div className="buttons">
            <button className="publish-btn">Publish Requirement</button>
            <button className="search-btn">Search</button>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default SearchModel;

import React, { useState } from "react";
import "../Style/SearchModel.css";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import { useFilterState } from "./FIlterStateProvider";

const SearchModel = ({ isOpen, onClose }) => {
  const {
    dropdownState,
    selectedValues,
    dropdownOptions,
    selectValue,
    toggleDropdown,
  } = useFilterState();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginBottom: "20px" }}>Search</h2>
        <div className="search-form">
          <div className="row-first">
            <div className="row-1">
              <p onClick={() => toggleDropdown("city")}>
                {selectedValues.city || "City"}
              </p>
              {dropdownState.city && (
                <div className="dropdown-options">
                  {dropdownOptions.city.map((city, index) => (
                    <p key={index} onClick={() => selectValue("city", city)}>
                      {city}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p onClick={() => toggleDropdown("locality")}>
                {selectedValues.locality || "Locality"}
              </p>
              {dropdownState.locality && (
                <div className="dropdown-options">
                  {dropdownOptions.locality.map((locality, index) => (
                    <p
                      key={index}
                      onClick={() => selectValue("locality", locality)}
                    >
                      {locality}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="row-first">
            <div className="row-1">
              <p onClick={() => toggleDropdown("ownRent")}>
                {selectedValues.ownRent || "Own/Rent"}
              </p>
              {dropdownState.ownRent && (
                <div className="dropdown-options">
                  {dropdownOptions.ownRent.map((ownRent, index) => (
                    <p
                      key={index}
                      onClick={() => selectValue("ownRent", ownRent)}
                    >
                      {ownRent}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p onClick={() => toggleDropdown("purpose")}>
                {selectedValues.purpose || "Purpose"}
              </p>
              {dropdownState.purpose && (
                <div className="dropdown-options">
                  {dropdownOptions.purpose.map((purpose, index) => (
                    <p
                      key={index}
                      onClick={() => selectValue("purpose", purpose)}
                    >
                      {purpose}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="row-second">
            <div className="budget-div-1">
              <div className="budget-rupee-icon">
                <MdCurrencyRupee size={24} style={{ marginRight: "10px" }} />
              </div>
              <div className="budget-div-2">
                <div className="div-min-max-1">
                  <input type="text" className="input-text" placeholder="Min" />
                  <p style={{ fontSize: "14px", margin: "0 10px" }}>To</p>
                  <input type="text" className="input-text" placeholder="Max" />
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>Budget</p>
                </div>
              </div>
            </div>
            <div className="budget-div-1">
              <div className="budget-rupee-icon">
                <BsArrowsFullscreen size={20} style={{ marginRight: "10px" }} />
              </div>
              <div className="budget-div-2">
                <div className="div-min-max-1">
                  <input type="text" className="input-text" placeholder="Min" />
                  <p style={{ fontSize: "14px", margin: "0 10px" }}>To</p>
                  <input type="text" className="input-text" placeholder="Max" />
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>Size</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-first">
            <div className="row-1">
              <p onClick={() => toggleDropdown("bedroom")}>
                {selectedValues.bedroom || "No of Bedroom"}
              </p>
              {dropdownState.bedroom && (
                <div className="dropdown-options">
                  {dropdownOptions.bedroom.map((bedroom, index) => (
                    <p
                      key={index}
                      onClick={() => selectValue("bedroom", bedroom)}
                    >
                      {bedroom}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p onClick={() => toggleDropdown("bathroom")}>
                {selectedValues.bathroom || "No of Bathroom"}
              </p>
              {dropdownState.bathroom && (
                <div className="dropdown-options">
                  {dropdownOptions.bathroom.map((bathroom, index) => (
                    <p
                      key={index}
                      onClick={() => selectValue("bathroom", bathroom)}
                    >
                      {bathroom}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="search-pid-number">
            <label>Search by PID Number</label>
            <input type="text" placeholder="9999999" />
          </div>
          <div className="search-pid-number">
            <label>Name the Search</label>
            <input type="text" placeholder="3BHK to Buy in Bangalore" />
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

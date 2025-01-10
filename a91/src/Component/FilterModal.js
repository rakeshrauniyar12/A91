import React, { useState } from "react";
import "../Style/FilterModal.css";
import { FaArrowRightLong, FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

const FilterModal = () => {
  const [propertyType, setPropertyType] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [priceArrowState, setPriceArrowState] = useState(0); // 0: no arrow, 1: up arrow, 2: down arrow
  const [sizeArrowState, setSizeArrowState] = useState(0);
  const [distanceArrowState, setDistanceArrowState] = useState(0);
  const [statusOptions, setStatusOptions] = useState({
    Vacant: false,
    "Under Construction": false,
    "Under Renovation": false,
    Occupied: false,
  });
  const [furnishingOptions, setFurnishingOptions] = useState({
    Unfurnished: false,
    "Semi-Furnished": false,
    "Partly Furnished": false,
    "Fully Furnished": false,
  });
  const [subOptions, setSubOptions] = useState({
    Residential: {
      Villa: false,
      "Independent Bungalow": false,
      Apartment: false,
      Penthouse: false,
    },
    Commercial: {
      Office: false,
      Shop: false,
    },
    Plot: {
      "Residential Plot": false,
      "Commercial Plot": false,
    },
  });

  const handleSubOptionChange = (type, subOption) => {
    setSubOptions((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [subOption]: !prev[type][subOption],
      },
    }));
  };

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown((prev) => {
      if (prev === dropdown) {
        setPropertyType(""); // Close sub-options when closing the dropdown
        return null;
      }
      return dropdown;
    });
  };

  const handleCheckboxChange = (optionType, option) => {
    if (optionType === "status") {
      setStatusOptions((prev) => ({
        ...prev,
        [option]: !prev[option],
      }));
    } else if (optionType === "furnishing") {
      setFurnishingOptions((prev) => ({
        ...prev,
        [option]: !prev[option],
      }));
    }
  };

  const toggleArrow = (setState) => {
    setState((prevState) => (prevState + 1) % 3); // Cycle through 0, 1, 2
  };

  return (
    <div className="filter-modal">
      <h2>Advance Filter</h2>
      <div className="filter-options">
        <div className="filter-group">
          <div className="sort-options">
            <span>Sort</span>
            <FaArrowRightLong />
            <span onClick={() => toggleArrow(setPriceArrowState)} className="clickable-heading">
              Price
              {priceArrowState === 1 && <FaArrowUpLong className="arrow-icon" style={{ marginLeft: 5 }} color="var(--primary)" />}
              {priceArrowState === 2 && <FaArrowDownLong className="arrow-icon" style={{ marginLeft: 5 }} color="red" />}
            </span>
            <div className="vertical-line-fresh"></div>
            <span onClick={() => toggleArrow(setSizeArrowState)} className="clickable-heading">
              Size
              {sizeArrowState === 1 && <FaArrowUpLong className="arrow-icon" style={{ marginLeft: 5 }} color="var(--primary)" />}
              {sizeArrowState === 2 && <FaArrowDownLong className="arrow-icon" style={{ marginLeft: 5 }} color="red" />}
            </span>
            <div className="vertical-line-fresh"></div>
            <span onClick={() => toggleArrow(setDistanceArrowState)} className="clickable-heading">
              Distance from Me
              {distanceArrowState === 1 && <FaArrowUpLong className="arrow-icon" style={{ marginLeft: 5 }} color="var(--primary)" />}
              {distanceArrowState === 2 && <FaArrowDownLong className="arrow-icon" style={{ marginLeft: 5 }} color="red" />}
            </span>
          </div>
          <label className="save-preference">
            <input type="checkbox" />
            Save Sort Preference
          </label>
        </div>

        <div className="typeOfProperty">
          <div className="typeOfPropertyDiv">
            <p onClick={() => handleDropdownClick("propertyType")} className="clickable-heading">
              Type of Property
            </p>
            {openDropdown === "propertyType" && (
              <div className="property-types">
                {["Residential", "Commercial", "Plot"].map((type) => (
                  <div key={type}>
                    <label>
                      <input
                        type="radio"
                        name="propertyType"
                        value={type}
                        checked={propertyType === type}
                        onChange={(e) => setPropertyType(e.target.value)}
                      />
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            )}
            {propertyType && subOptions[propertyType] && openDropdown === "propertyType" && (
              <div className="sub-options">
                {Object.keys(subOptions[propertyType]).map((subOption) => (
                  <div key={subOption}>
                    <label>
                      <input
                        type="checkbox"
                        checked={subOptions[propertyType][subOption]}
                        onChange={() => handleSubOptionChange(propertyType, subOption)}
                      />
                      {subOption}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="vertical-line-fresh"></div>

          <div className="typeOfPropertyDiv">
            <p onClick={() => handleDropdownClick("statusOfProperty")}>
              Status of Property
            </p>
            {openDropdown === "statusOfProperty" && (
              <div className="property-types" style={{ left: "33%" }}>
                {Object.keys(statusOptions).map((type) => (
                  <div key={type}>
                    <label>
                      <input
                        type="checkbox"
                        checked={statusOptions[type]}
                        onChange={() => handleCheckboxChange("status", type)}
                      />
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="vertical-line-fresh"></div>

          <div className="typeOfPropertyDiv">
            <p onClick={() => handleDropdownClick("typeOfFurnishing")}>
              Type of Furnishing
            </p>
            {openDropdown === "typeOfFurnishing" && (
              <div className="property-types" style={{ left: "66%" }}>
                {Object.keys(furnishingOptions).map((type) => (
                  <div key={type}>
                    <label>
                      <input
                        type="checkbox"
                        checked={furnishingOptions[type]}
                        onChange={() => handleCheckboxChange("furnishing", type)}
                      />
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="applyFilterBtnContainer">
        <button className="applyFilterBtn">Apply</button>
      </div>
    </div>
  );
};

export default FilterModal;

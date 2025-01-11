import React,{useState} from "react";
import "../Style/CompareApartments.css";
import h2 from "../Asset/Home/h1.png";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

const CompareApartments = () => {
   const [activeDropdown, setActiveDropdown] = useState(false);
   const [activeDropdownSecond, setActiveDropdownSecond] = useState(false);
  const properties = [
    {
      image: h2,
      name: "Mana Dale",
      rent: "Rs. 230,000/-",
      sale: "Not For Sale!",
      bedrooms: "3 BHK",
      size: "3700 Sqft",
      distance: "14.8 Kms away",
    },
    {
      image: h2,
      name: "Urbanest Elite 35",
      rent: "Rs. 230,000/-",
      sale: "Not For Sale!",
      bedrooms: "3 BHK",
      size: "3700 Sqft",
      distance: "14.8 Kms away",
    },
    {
      image: h2,
      name: "Sarang by Sumadhura",
      rent: "Rs. 230,000/-",
      sale: "Not For Sale!",
      bedrooms: "3 BHK",
      size: "3700 Sqft",
      distance: "14.8 Kms away",
    },
  ];
  const handleDropdownToggle = () => {
    setActiveDropdown(!activeDropdown);
  };
  const handleDropdownToggleSecond = () => {
    setActiveDropdownSecond(!activeDropdownSecond);
  };
  const options = [
    "Name of the society",
    "Rent",
    "Sale",
    "No of Bedrooms",
    "Buildup Size",
    "Distance from me",
    "Land Size",
    "No of Bathrooms",
    "Car Parks",
    "Pets Allowed",
    "Available From",
    "Deposit Amount",
    "Additional Rooms",
    "Helpers Room",
    "Type of Furnishing",
    "Type of Property Floor",
    "Current Status",
    "Facing",
    "Viewing Notice",
    "Age of Property",
    "Garden",
    "Balcony",
    "Appliances",
  ];

  return (
    <div className="compare-apartments-container">
      <h2 style={{ marginLeft: "280px", fontWeight: "660" }}>
        Comparison Of Selected Properties
      </h2>
      <div className="comparison-grid">
        <div className="options-list">
          {options.map((option, index) => (
            <p key={index} className="option-item">
              {option}:
            </p>
          ))}
        </div>

        {/* Property Cards (Right Side) */}
        <div className="property-comparison">
          {properties.map((property, index) => (
            <div key={index} className="property-card">
              <h2>Property {index + 1}</h2>
              <div className="property-image">
                <img src={property.image} alt={property.name} />
              </div>
              <div className="property-details">
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div className="first-div-right">
                    <div>
                      <BiSolidLike
                        size={24}
                        style={{ color: "var(--primary)", marginRight: "1rem" }}
                      />
                      <BiSolidDislike size={24} />
                    </div>
                  </div>
                </div>
                <div className="name-video-note-icon-div">
                  <div className="name-video-note-icon-div-p1">
                    <p style={{margin:0}}>{property.name}</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <IoVideocamOutline
                      size={24}
                      style={{ marginRight: "1rem" }}
                    />
                    <LuNotepadText size={24} />
                  </div>
                </div>

                <p>{property.rent}</p>
                <p>{property.sale}</p>
                <p>{property.bedrooms}</p>
                <p>{property.size}</p>
                <p>{property.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="society-dropdown-1">
        <p>Society Details:</p>

        <RiArrowDropDownLine
          style={{
            transform:
              activeDropdown  ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.5s ease",
            fontSize: "35px",
            fontWeight: "600",
            cursor: "pointer",
            marginLeft: "-4px",
          }}
          onClick={handleDropdownToggle}
        />
      </div>
      {activeDropdown && 
        <div className="society-dropdown-content">
          <div className="society-1">
            <p>Location</p>
            <p>Amenities</p>
            <p>Security</p>
            <p>Power Backup</p>
            <p>Lift</p>
            <p>Total Floors</p>
            <p>Total No. Of Units</p>
          </div>
          <div className="society-2"></div>
          <div className="society-2"></div>
          <div className="society-2"></div>
        </div>
      }
        <div className="society-dropdown-1" style={{marginTop:"40px"}}>
        <p>Description</p>

        <RiArrowDropDownLine
          style={{
            transform:
              activeDropdownSecond  ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.5s ease",
            fontSize: "35px",
            fontWeight: "600",
            cursor: "pointer",
            marginLeft: "-4px",
          }}
          onClick={handleDropdownToggleSecond}
        />
      </div>
      {activeDropdownSecond && 
        <div className="society-dropdown-content-second">
         
        </div>
      }
    </div>
  );
};

export default CompareApartments;

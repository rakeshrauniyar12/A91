import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../Style/NavSecond.css";
function NavSecond() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCity, setSelectedCity] = useState("City");
  const [selectedOwnRent, setSelectedOwnRent] = useState("Own/Rent");
  const [selectedPurpose, setSelectedPurpose] = useState("Purpose");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedCityBanner, setSelectedCityBanner] = useState(null);
  const [selectedOwnOrRent, setSelectedOwnOrRent] = useState(null);
  const [selectedPurposeBanner, setSelectedPurposeBanner] = useState(null);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [showOwnDropdown, setShowOwnDropdown] = useState(false);

  const [isPurRotate, setIsPurRotate] = useState(false);
  const [isPurRotateHeader, setIsPurRotateHeader] = useState(false);
  const [isOwnRotate, setIsOwnRotate] = useState(false);
  const [isOwnRotateHeader, setIsOwnRotateHeader] = useState(false);
  const [isCityRotate, setIsCityRotate] = useState(false);
  const [isCityRotateHeader, setIsCityRotateHeader] = useState(false);
  const isDefaultValue = (value, defaultValue) => value === defaultValue;

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };
  if (location.pathname === "/property") {
    return;
  }
  return (
    <div className="nav-sec-11" style={{ width: "45%" }}>
      <div className="nav-option-1">
        <div className="nav-option-11">
          {activeDropdown === "city" ? (
            <input
              className="font-incre"
              style={{
                color: isDefaultValue(selectedCity, "City")
                  ? "black"
                  : "var(--primary)",
                fontWeight: "bold",
                width: "80%",
                border: "1px solid lightgray",
                borderRadius: 15,
                fontSize: "15px",
                padding: "5px 10px",
              }}
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              autoFocus
            />
          ) : (
            <p
              className="font-incre"
              style={{
                color: isDefaultValue(selectedCity, "City")
                  ? "black"
                  : "var(--primary)",
                fontWeight: "bold",
              }}
            >
              {selectedCity}
            </p>
          )}

          <RiArrowDropDownLine
            style={{
              transform:
                activeDropdown === "city" ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease",
              fontSize: "35px",
              fontWeight: "600",
              cursor: "pointer",
              marginLeft: "-4px",
            }}
            onClick={() => handleDropdownToggle("city")}
          />
          {activeDropdown === "city" && (
            <div className="city-dropdown-12">
              <div>
                {[
                  "Mumbai",
                  "Delhi",
                  "Kolkata",
                  "Bengaluru",
                  "Chennai",
                  "Hyderabad",
                ].map((city) => (
                  <p
                    key={city}
                    onClick={() => {
                      setSelectedCity(city);
                      setShowCityDropdown(false);
                      setIsCityRotate(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {city}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="vertical-line"></div>

        <div className="nav-option-12">
          <p
            className="font-incre"
            style={{
              color: isDefaultValue(selectedOwnRent, "Own/Rent")
                ? "black"
                : "var(--primary)",
              fontWeight: "bold",
            }}
          >
            {selectedOwnRent}
          </p>
          <RiArrowDropDownLine
            style={{
              transform:
                activeDropdown === "ownRent"
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              transition: "transform 0.5s ease",
              fontSize: "35px",
              fontWeight: "600",
              cursor: "pointer",
              marginLeft: "-4px",
            }}
            onClick={() => handleDropdownToggle("ownRent")}
          />
          {activeDropdown === "ownRent" && (
            <div className="own-dropdown-12">
              <div>
                {["Own", "Rent"].map((option) => (
                  <p
                    key={option}
                    onClick={() => {
                      setSelectedOwnRent(option);
                      setShowOwnDropdown(false);
                      setIsOwnRotate(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="vertical-line"></div>

        <div className="nav-option-13">
          <p
            className="font-incre"
            style={{
              color: isDefaultValue(selectedPurpose, "Purpose")
                ? "black"
                : "var(--primary)",
              fontWeight: "bold",
            }}
          >
            {selectedPurpose}
          </p>
          <RiArrowDropDownLine
            style={{
              transform:
                activeDropdown === "purpose"
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              transition: "transform 0.5s ease",
              fontSize: "35px",
              fontWeight: "600",
              cursor: "pointer",
              marginLeft: "-4px",
            }}
            onClick={() => handleDropdownToggle("purpose")}
          />
          {activeDropdown === "purpose" && (
            <div className="purpose-dropdown-12">
              <div>
                <p
                  onClick={() => {
                    setSelectedPurpose("Residential");
                    setShowPurposeDropdown(false);
                    setIsPurRotate(false);
                    navigate("/homedesign");
                    setActiveDropdown(null);
                  }}
                >
                  Residential
                </p>
                <p
                  onClick={() => {
                    setSelectedPurpose("Commercial");
                    setShowPurposeDropdown(false);
                    setIsPurRotate(false);
                    navigate("/homedesignfirst");
                    setActiveDropdown(null);
                  }}
                >
                  Commercial
                </p>
                <p
                  onClick={() => {
                    setSelectedPurpose("Plot");
                    setShowPurposeDropdown(false);
                    setIsPurRotate(false);
                    navigate("/homedesignsecond");
                    setActiveDropdown(null);
                  }}
                >
                  Plot
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavSecond;

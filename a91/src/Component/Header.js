import React, { useState, useEffect } from "react";
import "../Style/Header.css";
import "../Style/Hfirst.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../Asset/Navbar//a91.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import SearchModel from "./SearchModel";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import Login from "./Login";
import Register from "./Register";
import { useFilterState } from "./FIlterStateProvider";
import { useAuth } from "./UserContext.js";

const Header = () => {
  const { currentUser, isLoggedIn, logout } = useAuth();
  const {
    setIsOwnRotate,
    setShowPurposeDropdown,
    setIsPurRotate,
    handleOptionClick,
    selectedValues,
    selectValue,
    showLogin,
    setShowLogin,
    showSignupComponent,
    setShowSignupComponent,
    isDefaultValue,
    setShowCityDropdown,
    setIsCityRotate,
    setShowOwnDropdown,
    setAccount,
    activeDropdown,
    setActiveDropdown,
    selectedCity,
    setSelectedCity,
    isModalOpen,
    setIsModalOpen,
    goToDashboard,
    goToDetailPage,
    goToPropertyPage,
  } = useFilterState();

  const navigate = useNavigate();
  const location = useLocation();
  const hiddenPaths = ["/", "/agentregister", "/property", "/dashboard"];
  const showOptionsInNavbars = !hiddenPaths.includes(location.pathname);

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setAccount(false);
  };

  const handleSignupForm = () => {
    setShowSignupComponent(true);
    setAccount(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (location.pathname === "/") {
    return;
  }
  return (
    <div className="header-main-container">
      <div className="header-main-container-content">
        <div className="h-logo-1" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </div>

        {/* city,purpose, own option at navbar */}
        {showOptionsInNavbars && (
          <div className="nav-sec-11" style={{ width: "45%" }}>
            <div className="nav-option-1">
              <div className="nav-option-11">
                {activeDropdown === "city" ? (
                  <input
                    className="font-incre"
                    style={{
                      color: isDefaultValue(selectedValues.city, "City")
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
                      color: isDefaultValue(selectedValues.city, "City")
                        ? "black"
                        : "var(--primary)",
                      fontWeight: "bold",
                    }}
                  >
                    {selectedValues.city || "City"}
                  </p>
                )}

                <RiArrowDropDownLine
                  style={{
                    transform:
                      activeDropdown === "city"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
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
                            selectValue("city", city);
                            setShowCityDropdown(false);
                            setIsCityRotate(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {city || "City"}
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
                    color: isDefaultValue(selectedValues.ownRent, "Own/Rent")
                      ? "black"
                      : "var(--primary)",
                    fontWeight: "bold",
                  }}
                >
                  {selectedValues.ownRent || "Own/Rent"}
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
                            selectValue("ownRent", option);
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
                    color: isDefaultValue(selectedValues.purpose, "Purpose")
                      ? "black"
                      : "var(--primary)",
                    fontWeight: "bold",
                  }}
                >
                  {selectedValues.purpose || "Purpose"}
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
                          selectValue("purpose", "Residential");
                          setShowPurposeDropdown(false);
                          setIsPurRotate(false);
                          navigate("/residential");
                          setActiveDropdown(null);
                        }}
                      >
                        Residential
                      </p>
                      <p
                        onClick={() => {
                          selectValue("purpose", "Commercial");
                          setShowPurposeDropdown(false);
                          setIsPurRotate(false);
                          navigate("/commercial");
                          setActiveDropdown(null);
                        }}
                      >
                        Commercial
                      </p>
                      <p
                        onClick={() => {
                          selectValue("purpose", "Plot");
                          setShowPurposeDropdown(false);
                          setIsPurRotate(false);
                          navigate("/plot");
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
        )}
        {/* search, home icon, account options at navbar */}
        <div className="h-second-nav">
          <div
            className="search-dropdown-main"
            onClick={() => handleDropdownToggle("search")}
          >
            <BiSearchAlt size={45} />
            {activeDropdown === "search" && (
              <div className="search-dropdown-1">
                <ul className="search-li-1">
                  <li
                    onClick={handleOpenModal}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    New Search
                    <FaChevronRight
                      style={{ marginLeft: "5px", fontWeight: "bold" }}
                      size={12}
                    />
                  </li>

                  <li>
                    Saved Search{" "}
                    <FaChevronRight
                      style={{ marginLeft: "5px", fontWeight: "bold" }}
                      size={12}
                    />
                  </li>
                </ul>
              </div>
            )}
            <SearchModel isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>

          <div>
            <FaCalculator size={35} style={{ cursor: "pointer" }} />
          </div>

          <div style={{ position: "relative", display: "inline-block" }}>
            <div
              style={{ cursor: "pointer" }}
              // onClick={toggleDropdown}
              onClick={() => handleDropdownToggle("home")}
            >
              <AiFillHome size={45} />
            </div>

            {activeDropdown === "home" && (
              // {homeDropdownOpen && (
              <div className="homeDropdownContainer">
                <div
                  className="homeDropdownContainerOption"
                  onClick={() => handleOptionClick("/addproperty")}
                >
                  Add New Property
                </div>
                <div
                  className="homeDropdownContainerOption"
                  onClick={goToPropertyPage}
                >
                  View All Properties
                </div>
              </div>
            )}
          </div>

          <div>
            <FaHandshake
              size={50}
              onClick={() => navigate("/agentregister")}
              style={{ cursor: "pointer" }}
            />
          </div>
          {!isLoggedIn ? (
                     <>
                       <div
                         style={{ cursor: "pointer" }}
                         // onClick={() => handleAccountOption()}
                         onClick={() => handleDropdownToggle("account")}
                       >
                         <FaUser size={40} />
                       </div>
       
                       {activeDropdown === "account" && (
                         // {isAccount && (
                         <div className="account-details1">
                           <p
                             className="account-option"
                             onClick={() => {
                               handleLoginClick();
                               setActiveDropdown(null);
                             }}
                           >
                             Login
                           </p>
       
                           <p
                             className="account-option"
                             onClick={() => {
                               handleSignupForm();
                               setActiveDropdown(null);
                             }}
                           >
                             Register as Individual
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDetailPage();
                               setActiveDropdown(null);
                             }}
                           >
                             Register as An Agent
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDashboard();
                               setActiveDropdown(null);
                             }}
                           >
                             Dashboard
                           </p>
                         </div>
                       )}
                     </>
                   ) : (
                     <>
                       <div
                         style={{ cursor: "pointer" }}
                         // onClick={() => handleAccountOption()}
                         onClick={() => handleDropdownToggle("account")}
                       >
                         <FaUser size={40} />
                       </div>
       
                       {activeDropdown === "account" && (
                         // {isAccount && (
                         <div className="account-details1">
                           <p
                             className="account-option"
                             onClick={() => {
                               handleLoginClick();
                               setActiveDropdown(null);
                             }}
                           >
                          My Profile
                           </p>
       
                           <p
                             className="account-option"
                             onClick={() => {
                               handleSignupForm();
                               setActiveDropdown(null);
                             }}
                           >
                          Add Family Member  
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDetailPage();
                               setActiveDropdown(null);
                             }}
                           >
                             My Preferences
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDashboard();
                               setActiveDropdown(null);
                             }}
                           >
                            My Properties
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDashboard();
                               setActiveDropdown(null);
                             }}
                           >
                            My Requirements
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDashboard();
                               setActiveDropdown(null);
                             }}
                           >
                           Calender
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDashboard();
                               setActiveDropdown(null);
                             }}
                           >
                           History
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDashboard();
                               setActiveDropdown(null);
                             }}
                           >
                           Find an Agent
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                               goToDashboard();
                               setActiveDropdown(null);
                             }}
                           >
                            Contact Us
                           </p>
                           <p
                             className="account-option"
                             onClick={() => {
                              logout();
                              handleDropdownToggle(null);
                             }}
                           >
                            Sign Out
                           </p>
                         </div>
                       )}
                     </>
                   )}
        </div>
      </div>
      {showLogin && (
        <Login
          setAccount={setAccount}
          setShowSignupComponent={setShowSignupComponent}
          setShowLogin={setShowLogin}
        />
      )}
      {showSignupComponent && (
        <Register
          setShowSignupComponent={setShowSignupComponent}
          setShowLogin={setShowLogin}
        />
      )}
    </div>
  );
};

export default Header;

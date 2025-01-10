import React, { useState } from "react";
import "../Style/Navbar.css";
import "../Style/Login.css";
import logo from "../Asset/Navbar/a91.png";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Login from "./Login";
import Register from "./Register";
import NavSecond from "./NavSecond";
import NavbarThird from "./NavbarThird";
const countryCodes = [
  { code: "+91", label: "India" },
  { code: "+1", label: "USA" },
  { code: "+2", label: "Canada" },
  { code: "+3", label: "Mexico" },
  { code: "+4", label: "Brazil" },
  { code: "+5", label: "Argentina" },
  { code: "+6", label: "Colombia" },
  { code: "+7", label: "Peru" },
  { code: "+8", label: "Venezuela" },
  { code: "+9", label: "Chile" },
  { code: "+10", label: "Ecuador" },
  { code: "+11", label: "Guatemala" },
  { code: "+12", label: "Cuba" },
  { code: "+13", label: "Haiti" },
  { code: "+14", label: "Dominican Republic" },
  { code: "+15", label: "Honduras" },
  { code: "+16", label: "Paraguay" },
  { code: "+17", label: "El Salvador" },
  { code: "+18", label: "Nicaragua" },
  { code: "+19", label: "Costa Rica" },
  { code: "+20", label: "Panama" },
  { code: "+21", label: "Jamaica" },
  { code: "+22", label: "Trinidad and Tobago" },
  { code: "+23", label: "Bahamas" },
  { code: "+24", label: "Barbados" },
  { code: "+25", label: "Saint Lucia" },
  { code: "+26", label: "Saint Vincent and the Grenadines" },
];

const Navbar = () => {
  const isMobile = window.innerWidth <= 768;
  const [isAccount, setAccount] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSignupComponent, setShowSignupComponent] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showOwnDropdown, setShowOwnDropdown] = useState(false);
  const [isPurRotate, setIsPurRotate] = useState(false);
  const [isOwnRotate, setIsOwnRotate] = useState(false);
  const [isCityRotate, setIsCityRotate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccountOption = () => {
    setAccount(!isAccount);
  };
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setAccount(false);
  };
  const closeSignupComponent = () => {
    setShowSignupComponent(false);
  };

  const closeLoginComponent = () => {
    setShowLogin(false);
  };
  const handleLoginForm = () => {
    console.log("handleLoginForm", showLogin);
    console.log("handleLoginForm", showSignupComponent);
    setShowSignupComponent(false);

    setShowLogin(true);
  };
  const handleSignupForm = () => {
    console.log("handleSignupForm", showLogin);
    console.log("handleSignupForm", showSignupComponent);
    setShowSignupComponent(true);
    setAccount(false);
  };
  const handlePurposeDropdown = () => {
    setShowPurposeDropdown(!showPurposeDropdown);
    setIsPurRotate(!isPurRotate);
  };

  const handleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown);
    setIsCityRotate(!isCityRotate);
  };
  const handleOwnDropdown = () => {
    setShowOwnDropdown(!showOwnDropdown);
    setIsOwnRotate(!isOwnRotate);
  };
  const goToDetailPage = () => {
    setAccount(false);
    navigate("/detailpage");
  };
  const goToPropertyPage = () => {
    setAccount(false);
    navigate("/property");
  };
  if (location.pathname === "/") {
    return;
  }
  return (
    <div className="navbar-main-container">
      <div
        className="navbar-content"
        style={{
          justifyContent:
            location.pathname === "/property" ? "space-between" : "",
        }}
      >
        {!isMobile ? (
          <div
            className="nav-logo"
            style={{
              paddingLeft:location.pathname==="/property"?"20px":""
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} />
          </div>
        ) : (
          ""
        )}
        {isMobile ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className="nav-logo"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo} />
            </div>
            <div className="h-second-nav">
              <div>
                <BiSearchAlt size={35} />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/addproperty")}
              >
                <AiFillHome size={35} />
              </div>
              <div>
                <FaHandshake size={40} />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleAccountOption()}
              >
                <FaUser size={30} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
       <NavSecond/>
        <div
          className="nav-end-option-2"
          style={{
            width: location.pathname === "/property" ? "28%" : "",
          }}
        >
          {!isMobile ? (
             <NavbarThird showLogin={showLogin} setShowLogin={setShowLogin} setAccount={setAccount}
             setShowSignupComponent={setShowSignupComponent} setHomeDropdownOpen={setHomeDropdownOpen}
          />
          ) : (
            ""
          )}

          {isAccount && (
            <div className="account-details">
              <p className="account-option" onClick={handleLoginClick}>
                Login
              </p>
              <p className="account-option" onClick={handleSignupForm}>
                Register as Individual
              </p>
              {/* <p className="account-option" onClick={goToDetailPage}>
                Register as Channel Partner
              </p> */}
              <p className="account-option" onClick={goToPropertyPage}>
                Property
              </p>
            </div>
          )}
          {showLogin && (
               <Login setAccount={setAccount} setShowSignupComponent={setShowSignupComponent} setShowLogin={setShowLogin}/>
          )}
          {showSignupComponent && (
                <Register setShowSignupComponent={setShowSignupComponent} setShowLogin={setShowLogin}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

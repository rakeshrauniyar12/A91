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

const Header = () => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(1);
  const [imageHeight, setImageHeight] = useState(200);
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [showSignupComponent, setShowSignupComponent] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAccount, setAccount] = useState(false);
  const [showOptionsInNavbar, setShowOptionsInNavbar] = useState(false);
  const [selectedCity, setSelectedCity] = useState("City");
  const [selectedOwnRent, setSelectedOwnRent] = useState("Own/Rent");
  const [selectedPurpose, setSelectedPurpose] = useState("Purpose");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [showOwnDropdown, setShowOwnDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPurRotate, setIsPurRotate] = useState(false);

  const [isOwnRotate, setIsOwnRotate] = useState(false);

  const [isCityRotate, setIsCityRotate] = useState(false);
  const isDefaultValue = (value, defaultValue) => value === defaultValue;

  const handleDropdownToggle = (dropdownName) => {
    setAccount(false);
    setShowLogin(false);
    setShowSignupComponent(false);
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };
  const handleOptionClick = (path) => {
    navigate(path);
    setHomeDropdownOpen(false);
    setActiveDropdown(null);
  };
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setAccount(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleSignupForm = () => {
    setShowSignupComponent(true);
    setAccount(false);
  };
  const goToPropertyPage = () => {
    setAccount(false);
    setActiveDropdown(null);
    navigate("/property");
  };
  const goToDetailPage = () => {
    setAccount(false);
    navigate("/channelpartner");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const handleScrolls = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200; // Total scroll range
      const offset = maxScroll * 0.9; // 90% of the scroll range

      let newOpacity = 1;
      let newHeight = 200; // Full height of the image

      if (scrollY > offset) {
        // Start reducing opacity and height after 90% of the scroll range
        newOpacity = Math.max(1 - (scrollY - offset) / (maxScroll - offset), 0);
        newHeight = Math.max(200 * newOpacity, 0); // Reduce height proportionally
      }

      setOpacity(newOpacity);
      setImageHeight(newHeight);
    };

    window.addEventListener("scroll", handleScrolls);

    return () => {
      window.removeEventListener("scroll", handleScrolls);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hfirstOption = document.querySelector(".header-main-container");
      const navbar = document.querySelector(".h-logo-1");

      if (hfirstOption && navbar) {
        const hfirstOffsetTop = hfirstOption.offsetTop;
        const navbarHeight = navbar.offsetHeight;
        console.log("Navbar Height:", navbarHeight);
        console.log("hfirstOffsetTop:", hfirstOffsetTop);
        if (scrollPosition + navbarHeight >= hfirstOffsetTop) {
          setShowOptionsInNavbar(true);
          console.log("Hello Scroll");
        } else {
          setShowOptionsInNavbar(false);
        }
      }
      console.log("Scroll Position:", scrollPosition);

      console.log("showOptionsInNavbar:", showOptionsInNavbar);
      setShowFirstComponent(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const hiddenPaths = ["/", "/agentregister", "/property"];

  const showOptionsInNavbars = !hiddenPaths.includes(location.pathname);
  return (
    <div className="header-main-container">
      <div className="header-main-container-content">
        <div className="h-logo-1" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </div>
        {(showOptionsInNavbar || showOptionsInNavbars) && 
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
                        navigate("/residential");
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
                        navigate("/commercial");
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
        }

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
            Register as Channel Partner
          </p>
        </div>
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

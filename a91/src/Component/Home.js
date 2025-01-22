import React, { useState, useEffect, useRef } from "react";
import "../Style/Hfirst.css";
import "../Style/Home.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import header from "../Asset/Home/header11.png";
import { useLocation, useNavigate } from "react-router-dom";
import h2 from "../Asset/Home/h1.png";
import logo from "../Asset/Navbar//a91.png";
import { FaChevronRight } from "react-icons/fa";
import SearchModel from "./SearchModel";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import Footer1 from "./Footer1";
import { BiSearchAlt } from "react-icons/bi";
import ApartmentCard from "./ApartmentCard";
import FilterModal from "./FilterModal";
import FilterMinMax from "./FilterMinMax";
import Login from "./Login";
import Register from "./Register";
import { useFilterState } from "./FIlterStateProvider"; // Ensure the casing matches

const Home = () => {
  const navigate = useNavigate();
  const {
    setIsOwnRotate,
    setShowPurposeDropdown,
    setIsPurRotate,
    handleOptionClick,
    selectedPurpose,
    setSelectedPurpose,
    showLogin,
    setShowLogin,
    selectedValues,
    selectValue,
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
    selectedOwnOrRent,
    setSelectedOwnOrRent,
    opacity,
    setOpacity,
    showOwnDropdownHeader,
    setShowOwnDropdownHeader,
    showPurposeDropdownHeader,
    setShowPurposeDropdownHeader,
    showCityDropdownHeader,
    setShowCityDropdownHeader,
    isPurRotateHeader,
    isOwnRotateHeader,
    isCityRotateHeader,
    imageHeight,
    setImageHeight,
    showOptionsInNavbar,
    setShowOptionsInNavbar,
    setIsPurRotateHeader,
    setIsOwnRotateHeader,
    setIsCityRotateHeader,
    isFilterModalOpen,
    setIsFilterModalOpen,
    setShowFirstComponent,
    selectedCityBanner,
    setSelectedCityBanner,
  } = useFilterState();
  
  const isMobile = window.innerWidth <= 768;
  const handleDropdownToggle = (dropdownName) => {
    setShowCityDropdownHeader(false);
    setShowOwnDropdownHeader(false);
    setShowPurposeDropdownHeader(false);
    setIsCityRotateHeader(false);
    setIsOwnRotateHeader(false);
    setIsPurRotateHeader(false);
    setAccount(false);
    setShowLogin(false);
    setShowSignupComponent(false);
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
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
  const navbarRef = useRef(null);
  const hFirstOptionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      const hFirstOffsetTop = hFirstOptionRef.current?.offsetTop || 0;
// hjbgs
      // Show tions in navbar when scrolled past a threshold
      setShowOptionsInNavbar(scrollPosition + navbarHeight >= hFirstOffsetTop);

      // Show first component only when at the very top
      setShowFirstComponent(scrollPosition === 0);
    };

    // Throttle the scroll handler to improve performance
    let throttleTimeout = null;
    const throttledHandleScroll = () => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        handleScroll();
        throttleTimeout = null;
      }, 100); // Adjust throttle delay as needed
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      clearTimeout(throttleTimeout);
    };
  }, []);

  const handleCityDropdownHeader = () => {
    setActiveDropdown(null);
    setShowCityDropdownHeader(!showCityDropdownHeader);
    setIsCityRotateHeader(!isCityRotateHeader);

    if (showOwnDropdownHeader) {
      setShowOwnDropdownHeader(false);
      setIsOwnRotateHeader(false);
    }
    if (showPurposeDropdownHeader) {
      setShowPurposeDropdownHeader(false);
      setIsPurRotateHeader(false);
    }
  };

  const handleCitySelection = (city) => {
    setSelectedCityBanner(city);
    setShowCityDropdownHeader(false);
    setIsCityRotateHeader(false);
  };

  const handleOwnDropdownHeader = () => {
    setActiveDropdown(null);
    setShowOwnDropdownHeader(!showOwnDropdownHeader);
    setIsOwnRotateHeader(!isOwnRotateHeader);

    if (showCityDropdownHeader) {
      setShowCityDropdownHeader(false);
      setIsCityRotateHeader(false);
    }
    if (showPurposeDropdownHeader) {
      setShowPurposeDropdownHeader(false);
      setIsPurRotateHeader(false);
    }
  };

  const handleOwnOrRentSelection = (option) => {
    setSelectedOwnOrRent(option);
    setShowOwnDropdownHeader(false);
    setIsOwnRotateHeader(false);
  };

  const handlePurposeDropdownHeader = () => {
    setActiveDropdown(null);
    setShowPurposeDropdownHeader(!showPurposeDropdownHeader);
    setIsPurRotateHeader(!isPurRotateHeader);

    if (showCityDropdownHeader) {
      setShowCityDropdownHeader(false);
      setIsCityRotateHeader(false);
    }
    if (showOwnDropdownHeader) {
      setShowOwnDropdownHeader(false);
      setIsOwnRotateHeader(false);
    }
  };

  const handlePurposeSelection = (purpose, route) => {
    setSelectedPurpose(purpose);
    setShowPurposeDropdownHeader(false); // Close the dropdown
    setIsPurRotateHeader(false); // Rotate the arrow back
    navigate(route);
  };

  const products = [];
  for (let r = 0; r < 6; r++) {
    products.push({
      productImage: h2,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      isAvailable: true,
    });
  }

  const [showText, setShowText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = ["Address", "Agents"];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, showText.length - 1)
        : currentWord.substring(0, showText.length + 1);

      setShowText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTypingSpeed(3000);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [showText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="hfirst-main-container" style={{ marginTop: 120 }}>
      <div className="header-main-container">
        <div className="header-main-container-content">
          <div ref={navbarRef} className="h-logo-1" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </div>

          {/* city,purpose, own option at navbar */}
          {showOptionsInNavbar && (
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
      {/* ======================================= Home page banner section ======================================= */}
      <div
        style={{
          width: "100%",
          height: "auto",
          opacity: opacity,
          transition: "opacity 0.2s ease-out",
        }}
      >
        <div className="h-main-content" ref={hFirstOptionRef}>
          <p
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "600",
              marginTop: "105px",
              marginBottom: "30px",
            }}
          >
            {showText} in<span style={{ color: "var(--primary)" }}>India</span>
          </p>
          <div
            className="h-main-img"
            style={{
              opacity: opacity,
              height: `${imageHeight}px`,
              transition: "opacity 0.3s, height 0.3s",
            }}
          >
            <img src={header} alt="Header" />
          </div>
        </div>
        <div className="hfirst-option">
          <div className="nav-option-15">
            {!isCityRotateHeader ? (
              <div
                className="nav-options-child-div"
                style={{ cursor: "pointer" }}
                onClick={handleCityDropdownHeader}
              >
                <p
                  style={{
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: "600",
                  }}
                >
                  {selectedCityBanner ? (
                    <span
                      style={{ color: "var(--primary)", fontWeight: "bold" }}
                    >
                      {selectedCityBanner}
                    </span>
                  ) : (
                    <>
                      Which <span className="text-color-1">City</span> do you
                      want to be in?
                    </>
                  )}
                </p>
                <RiArrowDropDownLine
                  style={{
                    transform: isCityRotateHeader
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                    fontSize: "35px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                />
              </div>
            ) : (
              <div className="nav-options-child-div">
                <input
                  className="city-input-1"
                  placeholder=" Which City do you want to be in?"
                />
                <RiArrowDropDownLine
                  style={{
                    transform: isCityRotateHeader
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                    fontSize: "35px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={handleCityDropdownHeader}
                />
              </div>
            )}

            {showCityDropdownHeader && (
              <div className="city-dropdown-13">
                <div>
                  {[
                    "Mumbai",
                    "Delhi",
                    "Kolkata",
                    "Bengaluru",
                    "Chennai",
                    "Hyderabad",
                  ].map((city) => (
                    <p key={city} onClick={() => handleCitySelection(city)}>
                      {city}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="vertical-line"></div>
          <div className="nav-option-16">
            <div
              className="nav-options-child-div"
              style={{ cursor: "pointer" }}
              onClick={handleOwnDropdownHeader}
            >
              <p style={{ fontSize: "18px", fontWeight: "600" }}>
                {selectedOwnOrRent ? (
                  <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
                    {selectedOwnOrRent}
                  </span>
                ) : (
                  <>
                    Do you want to <span className="text-color-1">Own</span> or{" "}
                    <span className="text-color-1">Rent</span>?
                  </>
                )}
              </p>
              <RiArrowDropDownLine
                style={{
                  transform: isOwnRotateHeader
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                  fontSize: "35px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              />
            </div>
            {showOwnDropdownHeader && (
              <div className="own-dropdown-13">
                <div>
                  <p onClick={() => handleOwnOrRentSelection("Own")}>Own</p>
                  <p onClick={() => handleOwnOrRentSelection("Rent")}>Rent</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ position: "absolute", width: "100%" }}>
          <div className="select-search-div-1" style={{ cursor: "pointer" }}>
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={handlePurposeDropdownHeader}
            >
              <p style={{ fontSize: "18px", fontWeight: "600" }}>
                {selectedPurpose !== "Purpose" ? (
                  <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
                    {selectedPurpose}
                  </span>
                ) : (
                  <>
                    What is the <span className="text-color-1">Purpose</span>?
                  </>
                )}
              </p>
              <RiArrowDropDownLine
                style={{
                  transform: isPurRotateHeader
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                  fontSize: "35px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="searchIconInPurpose">
              <BiSearchAlt size={30} color="#fff" />
            </div>
          </div>

          {showPurposeDropdownHeader && (
            <div className="purpose-dropdown-13" style={{ width: "300px" }}>
              <div>
                <p
                  onClick={() =>
                    handlePurposeSelection("Residential", "/residential")
                  }
                >
                  Residential
                </p>
                <p
                  onClick={() =>
                    handlePurposeSelection("Commercial", "/commercial")
                  }
                >
                  Commercial
                </p>
                <p onClick={() => handlePurposeSelection("Plot", "/plot")}>
                  Plot
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="show-pos" ></div>
      {/* ======================================= Home page sticky filter section ======================================= */}
      {showOptionsInNavbar && (
        <div className="home-container">
          <FilterMinMax toggleFilterModal={toggleFilterModal} width={"40%"} />
          <div className="product-append-111" style={{ marginTop: "30px" }}>
            {products.map((product) => (
              <ApartmentCard product={product} />
            ))}
          </div>
          <div className="show-bottom-button">
            <button>Show more</button>
          </div>
          <Footer1 />
        </div>
      )}
      {isFilterModalOpen && (
        <div className="modal-overlay" onClick={toggleFilterModal}>
          <div
            className="modal-container"
            style={{ padding: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FilterModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

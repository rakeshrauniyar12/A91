import React, { useState } from "react";
import "../Style/Navbar.css";
import "../Style/Login.css";
import logo from "../Asset/Navbar/logo.png";
import search from "../Asset/Navbar/search.png";
import h1 from "../Asset/Navbar/h1.png";
import h21 from "../Asset/Navbar/h21.png";
import h22 from "../Asset/Navbar/h22.png";
import h23 from "../Asset/Navbar/h23.png";
import h24 from "../Asset/Navbar/h24.png";
import h25 from "../Asset/Navbar/h25.png";
import p1 from "../Asset/Navbar/p1.png";
import p2 from "../Asset/Navbar/p2.png";
import { GiSettingsKnobs } from "react-icons/gi";
import partner from "../Asset/Navbar/partner.png";
import compare from "../Asset/Navbar/compare.png";
import dates from "../Asset/Navbar/dates.png";
import repor from "../Asset/Navbar/repor.png";
import dislike from "../Asset/Navbar/dislike.png";
import like from "../Asset/Navbar/like.png";
import filt from "../Asset/Navbar/filter.png";
import account from "../Asset/Navbar/account.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GrCompare } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { TbHomeFilled } from "react-icons/tb";
const Navbar = () => {
  const isMobile = window.innerWidth <= 768;
  const [isAccount, setAccount] = useState(false);
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
        <div
          className="nav-option-1"
          style={{ display: location.pathname === "/property" ? "none" : "" }}
        >
          <div className="nav-option-11">
            <p className="font-incre">City</p>
            <RiArrowDropDownLine
              style={{
                transform: isCityRotate ? "rotate(180deg)" : "rotate(0deg)",
                transition: isCityRotate
                  ? "transform 0.5s ease"
                  : "transform 0.5s ease",
                fontSize: "35px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={handleCityDropdown}
            />
          </div>
          <div className="nav-option-12">
            <p className="font-incre">Own/Rent</p>
            <RiArrowDropDownLine
              style={{
                transform: isOwnRotate ? "rotate(180deg)" : "rotate(0deg)",
                transition: isOwnRotate
                  ? "transform 0.5s ease"
                  : "transform 0.5s ease",
                fontSize: "35px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={handleOwnDropdown}
            />
          </div>
          <div className="nav-option-13">
            <p className="font-incre">Purpose</p>
            <RiArrowDropDownLine
              style={{
                transform: isPurRotate ? "rotate(180deg)" : "rotate(0deg)",
                transition: isPurRotate
                  ? "transform 0.5s ease"
                  : "transform 0.5s ease",
                fontSize: "35px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={handlePurposeDropdown}
            />
          </div>
          {showCityDropdown && (
            <div className="city-dropdown-11">
              <div>
                <p>Mumbai</p>
                <p>Delhi</p>
                <p>Kolkata</p>
                <p>Bengaluru</p>
                <p>Chennai</p>
                <p>Hyderabad</p>
              </div>
            </div>
          )}
          {showOwnDropdown && (
            <div className="own-dropdown-11">
              <div>
                <p>Own</p>
                <p>Rent</p>
              </div>
            </div>
          )}
          {showPurposeDropdown && (
            <div className="purpose-dropdown-11">
              <div>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesign");
                  }}
                >
                  Residential
                </p>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesignfirst");
                  }}
                >
                  Commercial
                </p>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesignsecond");
                  }}
                >
                  Plot
                </p>
              </div>
            </div>
          )}
        </div>
        <div
          className="nav-end-option-2"
          style={{
            marginRight: location.pathname === "/property" ? "20px" : "",
          }}
        >
          {!isMobile ? (
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
              <p className="account-option" onClick={goToDetailPage}>
                Register as Channel Partner
              </p>
              <p className="account-option" onClick={goToPropertyPage}>
                Property
              </p>
            </div>
          )}
          {showLogin && (
            <>
              <div className="overlay"></div>
              <div className="login-container">
                <div className="register-container">
                  <div className="regis-heading">
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                    <RiCloseLargeFill
                      style={{ fontSize: "25px", cursor: "pointer" }}
                      onClick={closeLoginComponent}
                    />
                  </div>

                  <form>
                    <div className="login-input" style={{ marginTop: "20px" }}>
                      <div className="login-second-div">
                        <input
                          placeholder="Enter Phone Number / Email ID"
                          style={{ border: "none" }}
                        />
                      </div>
                      <div className="login-third-div">
                        <button>Send Otp</button>
                      </div>
                    </div>
                    <div className="login-input">
                      <div className="login-second-div">
                        <input
                          placeholder="Enter Otp"
                          style={{ border: "none" }}
                        />
                      </div>
                      <div className="login-third-div">
                        <button>Verify Otp</button>
                      </div>
                    </div>

                    <div className="link-ff">
                      <Link className="link-forgot">Forgot Password..?</Link>
                    </div>
                    <div className="regis-input1">
                      <input type="checkbox" className="regi-inpu" />
                      <p>
                        By clicking you agree to{" "}
                        <Link className="p-link">Terms and Conditions</Link>
                      </p>
                    </div>
                    <button className="reg-btn1">Login</button>
                  </form>
                  <div className="las-footer33">
                    <div>
                      <p style={{ fontSize: "14px" }}>Don't have an account?</p>
                      <Link
                        className="las-btn-44"
                        onClick={() => {
                          handleSignupForm();
                        }}
                      >
                        Register
                      </Link>
                    </div>
                    <Link className="register-link">
                      <div>
                        <p style={{ fontSize: "14px" }}>Continue with google</p>
                        <div>
                          <FcGoogle
                            style={{
                              borderRadius: "100px",
                              border: "1px solid black",
                              padding: "2px",
                              fontSize: "20px",
                            }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>{" "}
                {/* Pass a callback to close after login */}
              </div>
            </>
          )}
          {showSignupComponent && (
            <>
              <div
                className="overlay1"
                onClick={() => setShowSignupComponent(false)}
              ></div>
              <div className="signup-component-container">
                <div className="register-container">
                  <div className="regis-heading">
                    <h1 style={{ textAlign: "center" }}>Register</h1>
                    <RiCloseLargeFill
                      style={{ fontSize: "25px", cursor: "pointer" }}
                      onClick={closeSignupComponent}
                    />
                  </div>

                  <form>
                    <div className="regis-form-11">
                      <div className="regis-input">
                        <input type="text" placeholder="First Name" />
                      </div>
                      <div className="regis-input">
                        <input type="text" placeholder="Last Name" />
                      </div>
                      <div className="regis-input">
                        <input type="email" placeholder="Email ID" />
                      </div>
                      <div className="regis-input">
                        <input type="number" placeholder="Enter Otp*" />
                      </div>
                      <div className="regis-input">
                        <input type="number" placeholder="Phone Number" />
                      </div>
                      <div className="regis-input">
                        <input type="number" placeholder="Enter Otp*" />
                      </div>
                    </div>
                    <div className="regis-input1">
                      <input type="checkbox" className="regi-inpu" />
                      <p>
                        By clicking you agree to{" "}
                        <Link className="p-link">Terms and Conditions</Link>
                      </p>
                    </div>
                    <Link to={"/accountindividualdashboard"}>
                      <button
                        className="reg-btn1"
                        onClick={closeSignupComponent}
                      >
                        Register
                      </button>
                    </Link>
                  </form>

                  <div className="las-footer33">
                    <div>
                      <p>I have an account?</p>
                      <Link
                        className="las-btn-44"
                        onClick={() => {
                          closeSignupComponent();
                          handleLoginForm();
                        }}
                      >
                        Login
                      </Link>
                    </div>
                    <Link className="register-link">
                      <div>
                        <p>Register with Google</p>
                        <div>
                          <FcGoogle
                            style={{
                              borderRadius: "100px",
                              border: "1px solid black",
                              padding: "2px",
                              fontSize: "20px",
                            }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <div className="navbar-divider"></div> */}
      {/* <div
        className="nav-down-part"
        
      >
        <div
          className="nav-down-part-content"
          // style={{ border: "1px solid red" }}
        >
         

          {location.pathname === "/homedesign" && (
            <>
             <div style={{ display: "flex" }}>
            <div>
              <div>
                <GiSettingsKnobs
                  size={!isMobile ? 35 : 24}
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <p>Filter</p>
            </div>
            <div className="divide-line-11"></div>
            <div className="budget-div">
              <div>
                <p>₹ Budget</p>
              </div>
              <div className="div-min-max">
                <div className="nav-min">Min</div>
                <p>To</p>
                <div className="nav-min">Max</div>
              </div>
            </div>
            <div className="divide-line-11"></div>
          </div>
          <div
              className="home-image-nav"
              style={{
                flexDirection:
                  location.pathname === "/homedesign" ? "row" : "column",
              }}
            >
              <div className="home-i-div-1">
                <img className="home-nav-im-1" src={h21} />
                <p>1BHK</p>
              </div>
              <div className="home-i-div-1">
                <img className="home-nav-im-2" src={h22} />
                <p>2BHK</p>
              </div>
              <div className="home-i-div-1">
                <img src={h23} className="home-nav-im-3" />
                <p>3BHK</p>
              </div>
              <div className="home-i-div-1">
                <img src={h24} className="home-nav-im-4" />
                <p>4BHK</p>
              </div>
              <div className="home-i-div-1">
                <img src={h25} className="home-nav-im-5" />
                <p>5BHK</p>
              </div>
            </div>
            </>
         
          )}
          {location.pathname === "/homedesignfirst" && (
            <div
              className="home-image-nav"
              style={{
                flexDirection:
                  location.pathname === "/homedesignfirst" ? "row" : "column",
              }}
            >
              <div className="home-i-div-1">
                <img className="home-nav-im-1" src={p1} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>1000`}</p>
              </div>
              <div className="home-i-div-1">
                <img className="home-nav-im-2" src={p1} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>2000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p1} className="home-nav-im-3" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>3000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p1} className="home-nav-im-4" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>4000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p1} className="home-nav-im-5" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`4000+`}</p>
              </div>
            </div>
          )}
          {location.pathname === "/homedesignsecond" && (
            <div
              className="home-image-nav"
              style={{
                flexDirection:
                  location.pathname === "/homedesignsecond" ? "row" : "column",
              }}
            >
              <div
                className="home-i-div-1"
                style={{
                  flexDirection:
                    location.pathname === "/homedesignsecond" ? "none" : "",
                }}
              >
                <img className="home-nav-im-1" src={p2} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>1000`}</p>
              </div>
              <div className="home-i-div-1">
                <img className="home-nav-im-2" src={p2} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>2000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p2} className="home-nav-im-3" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>3000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p2} className="home-nav-im-4" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>4000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p2} className="home-nav-im-5" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`4000+`}</p>
              </div>
            </div>
          )}

          {location.pathname === "/detailpage" && (
            
            <div style={{ display: "flex",alignItems:"center" }}>
            <div >
              <div>
                <GiSettingsKnobs
                  size={!isMobile ? 32 : 24}
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <p>Filter</p>
            </div>
            <div className="divide-line-11"></div>
            <div className="budget-div">
              <div>
                <p>₹ Budget</p>
              </div>
              <div className="div-min-max">
                <div className="nav-min">Min</div>
                <p>To</p>
                <div className="nav-min">Max</div>
              </div>
            </div>
            <div className="divide-line-11"></div>
            <div id="detail-image-11">
                <div>
                   <TbHomeFilled size={16}/>
                  <p>1BHK</p>
                </div>
                <div>
                <TbHomeFilled size={20}/>
                  <p>2BHK</p>
                </div>
                <div>
                <TbHomeFilled size={24}/>
                  <p>3BHK</p>
                </div>
                <div>
                <TbHomeFilled size={28}/>
                  <p>4BHK</p>
                </div>
                <div>
                <TbHomeFilled size={32}/>
                  <p>5BHK</p>
                </div>
              </div>
             
              <div className="divide-line-11"></div>
                <div id="like-dis-div">
                  <div>
                   <BiSolidLike size={24}/>
                    <p
                      style={{ fontSize: "8px", fontWeight: "600" }}
                    >{`1000`}</p>
                  </div>
                  <div>
                   <BiSolidDislike size={24}/>
                    <p
                      style={{ fontSize: "8px", fontWeight: "600" }}
                    >{`500`}</p>
                  </div>
                </div>
                <div className="divide-line-11"></div>
                <div>
                  <GrCompare size={30}/>
                </div>
                <div className="divide-line-11"></div>
                <div>
                  <MdOutlineDateRange size={30}/>
                </div>
             
          </div>
          
          )}
        </div>
        {location.pathname === "/detailpage" && (
          <div className="repor-agent">
            <div>
              <img src={repor} />
            </div>
            <p>Report an agent</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import "../Style/Hfirst.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import account from "../Asset/Navbar/account.png";
import logo from "../Asset/Navbar/logo.png";
import search from "../Asset/Navbar/search.png";
import h1 from "../Asset/Navbar/h1.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";
import filt from "../Asset/Navbar/filter.png";
import header from "../Asset/Home/header11.png";
import partner from "../Asset/Navbar/partner.png";
import "../Style/Home.css"
import { useNavigate } from "react-router-dom";
import h2 from "../Asset/Home/h1.png";
import locat from "../Asset/Home/Icon/location.png"
import bed from "../Asset/Home/Icon/bed.png"
import like from "../Asset/Home/Icon/dislike.png"
import dislike from "../Asset/Home/Icon/like.png"
import fit from "../Asset/Home/Icon/fit.png"
import note from "../Asset/Home/Icon/note.png"
import rect from "../Asset/Home/Icon/rect.png"
import shhare from "../Asset/Home/Icon/shhare.png"
import video from "../Asset/Home/Icon/video.png"
import Footer1 from "./Footer1";

const Home = () => {
  const navigate = useNavigate();
   const [isAccount,setAccount] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showSignupComponent, setShowSignupComponent] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showPurposeDropdown,setShowPurposeDropdown] = useState(false);
    const [showCityDropdown,setShowCityDropdown] = useState(false);
    const [showOwnDropdown,setShowOwnDropdown] = useState(false);
    const [isPurRotate,setIsPurRotate] = useState(false);
  const [isOwnRotate, setIsOwnRotate] = useState(false);
  const [isCityRotate, setIsCityRotate] = useState(false);
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showOptionsInNavbar, setShowOptionsInNavbar] = useState(false);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hfirstOption = document.querySelector(".h-main-img");
      const navbar = document.querySelector(".h-nav-content");

      if (hfirstOption && navbar) {
        const hfirstOffsetTop = hfirstOption.offsetTop;
        const navbarHeight = navbar.offsetHeight;

        if (scrollPosition + navbarHeight >= hfirstOffsetTop) {
          setShowOptionsInNavbar(true);
        } else {
          setShowOptionsInNavbar(false);
        }
      }

      setShowFirstComponent(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown)
    setIsCityRotate(!isCityRotate);
  };
  const handleAccountOption = ()=>{
    setAccount(!isAccount)
}
const handleLoginClick = () => {
 setShowLogin(!showLogin);
 setAccount(false)
};
const closeSignupComponent = ()=>{
 setShowSignupComponent(false);
}

const closeLoginComponent = ()=>{
 setShowLogin(false);
}
  const handleLoginForm= ()=>{
   console.log("handleLoginForm",showLogin)
   console.log("handleLoginForm",showSignupComponent)
   setShowSignupComponent(false)

   setShowLogin(true);
  }
  const handleSignupForm= ()=>{
   console.log("handleSignupForm",showLogin)
   console.log("handleSignupForm",showSignupComponent)
   setShowSignupComponent(true);
   setAccount(false);
  }
  const handlePurposeDropdown = ()=>{
     setShowPurposeDropdown(!showPurposeDropdown);
     setIsPurRotate(!isPurRotate)
  }
  

const handleOwnDropdown = ()=>{
 setShowOwnDropdown(!showOwnDropdown);
 setIsOwnRotate(!isOwnRotate)
}
const goToDetailPage = ()=>{
setAccount(false);
navigate("/detailpage");
}

 const products = [];
  for(let r=0;r<6;r++){
    products.push({
      productImage: h2,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
    },)
  }
  return (
    <>
      <div className="hfirst-main-container">
      <div className="h-nav-content"
        style={{flexDirection:isMobile?"column":""}}
      >
       { !isMobile?
       <>
       <div className="h-logo-1">
            <img src={logo} alt="Logo" />
          </div>
          {showOptionsInNavbar && (
               <div className="nav-option-1">
                        <div className="nav-option-11">
                          <p className="font-incre">City</p>
                          <RiArrowDropDownLine
                            style={{
                              transform: isCityRotate ? "rotate(180deg)" : "rotate(0deg)",
                              transition: isCityRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                              fontSize: "35px", fontWeight: "600", cursor:"pointer" }}
                            onClick={handleCityDropdown}
                          />
                        </div>
                        <div className="nav-option-12">
                          <p className="font-incre">Own/Rent</p>
                          <RiArrowDropDownLine
                            style={{ 
                              transform: isOwnRotate ? "rotate(180deg)" : "rotate(0deg)",
                              transition: isOwnRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                              fontSize: "35px", fontWeight: "600",cursor:"pointer" }}
                              onClick={handleOwnDropdown}
                          />
                        </div>
                        <div className="nav-option-13">
                          <p className="font-incre">Purpose</p>
                          <RiArrowDropDownLine
                            style={{ 
                              transform: isPurRotate ? "rotate(180deg)" : "rotate(0deg)",
                              transition: isPurRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                              fontSize: "35px", fontWeight: "600", cursor:"pointer" }}
                            onClick={handlePurposeDropdown}
                          />
                        </div>
                        </div>
          )}
          <div className="h-second-nav">
            <div>
              <img src={search} alt="Search" />
            </div>
            <div>
              <img src={h1} alt="H1" />
            </div>
            <div>
              <img src={partner} alt="Partner" />
            </div>
            <div style={{cursor:"pointer"}} onClick={()=>handleAccountOption()}>
              <img src={account} alt="Account" />
            </div>
          </div>
          
          </>
          :
          <>
          <div style={{display:"flex"}}>
          <div className="h-logo-1">
          <img src={logo} alt="Logo" />
        </div>
          <div className="h-second-nav">
          <div>
            <img src={search} alt="Search" />
          </div>
          <div>
            <img src={h1} alt="H1" />
          </div>
          <div>
            <img src={partner} alt="Partner" />
          </div>
          <div >
            <img src={account} alt="Account" />
          </div>
        </div>
          </div>
        
        {showOptionsInNavbar && (
             <div className="nav-option-1">
                      <div className="nav-option-11">
                        <p className="font-incre">City</p>
                        <RiArrowDropDownLine
                          style={{
                            transform: isCityRotate ? "rotate(180deg)" : "rotate(0deg)",
                            transition: isCityRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                            fontSize: "35px", fontWeight: "600", cursor:"pointer" }}
                          onClick={handleCityDropdown}
                        />
                      </div>
                      <div className="nav-option-12">
                        <p className="font-incre">Own/Rent</p>
                        <RiArrowDropDownLine
                          style={{ 
                            transform: isOwnRotate ? "rotate(180deg)" : "rotate(0deg)",
                            transition: isOwnRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                            fontSize: "35px", fontWeight: "600",cursor:"pointer" }}
                            onClick={handleOwnDropdown}
                        />
                      </div>
                      <div className="nav-option-13">
                        <p className="font-incre">Purpose</p>
                        <RiArrowDropDownLine
                          style={{ 
                            transform: isPurRotate ? "rotate(180deg)" : "rotate(0deg)",
                            transition: isPurRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                            fontSize: "35px", fontWeight: "600", cursor:"pointer" }}
                          onClick={handlePurposeDropdown}
                        />
                      </div>
                      </div>
        )}
       
        </>
        }
            
            {showCityDropdown && 
             <div className="city-dropdown-12">
               <div>
                   <p>Mumbai</p>
                   <p>Delhi</p>
                   <p>Kolkata</p>
                   <p>Bengaluru</p>
                   <p>Chennai</p>
                   <p>Hyderabad</p>
               </div>
             </div>
          }
          {showOwnDropdown && 
             <div className="own-dropdown-12">
               <div>
                   <p>Own</p>
                   <p>Rent</p>
               </div>
             </div>
          }
          {showPurposeDropdown && 
             <div className="purpose-dropdown-12">
               <div>
                   <p onClick={()=>{
                    setShowPurposeDropdown(false)
                    setIsPurRotate(!isPurRotate)
                    navigate("/homedesign")
                   }}>Residential</p>
                   <p
                   onClick={()=>{
                    setShowPurposeDropdown(false)
                    setIsPurRotate(!isPurRotate)
                    navigate("/homedesignfirst")
                   }}
                   >Commercial</p>
                   <p 
                   onClick={()=>{
                    setShowPurposeDropdown(false)
                    setIsPurRotate(!isPurRotate)
                    navigate("/homedesignsecond")
                   }}
                   >Plot</p>
               </div>
             </div>
          } 
         
        </div>
        {showOptionsInNavbar && (
            <div style={{display:"flex",width:"85%",margin:"auto"}}>
            <div>
              <div>
                <img src={filt} />
              </div>
              <p>Filter</p>
            </div>
            <div className="divide-line-11" style={{marginRight:"15px",marginLeft:"15px"}}></div>
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
            <div className="divide-line-11" style={{marginLeft:"15px"}}></div>
            </div>
        )}
      {
            isAccount && 
            <div className="account-details1">
               <p className="account-option" onClick={handleLoginClick}>Login</p>
               <p className="account-option" onClick={handleSignupForm}>Register as Individual</p>
               <p className="account-option" onClick={goToDetailPage}>Register as Channel Partner</p>
            </div>
          
          }
         {showLogin && (
        <>
          <div
            className="overlay"
          
          ></div>
          <div className="login-container" >
          <div className="register-container">
            <div className="regis-heading">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <RiCloseLargeFill style={{fontSize:"25px",cursor:"pointer"}} onClick={closeLoginComponent}/>
            </div>
       

        <form>
           <div className="login-input">
             {/* <div className="login-first-div">
                <label style={{fontSize:"12px",color:"#008f3d"}}>Phone Number</label>
                <select style={{border:"none",backgroundColor:"#d9d9d9"}}>
                    <option>+91</option>
                </select>
               
             </div> */}
             <div className="login-second-div">
                <input placeholder="Enter Your Phone Number / Email ID" style={{border:"none",backgroundColor:"#d9d9d9"}}/>
             </div>
             <div className="login-third-div">
                <button>Send OTP</button>
             </div>
            </div>
               {/* {isMobile? <div className="login-third-div">
                <button>Send OTP</button>
             </div>:""} */}
            <div className="login-input">
             <div className="login-second-div11">
            
                <input placeholder="Enter Otp*" className="input-enter-otp" style={{border:"none",backgroundColor:"#d9d9d9"}} required/>
             </div>
             <div className="login-third-div">
                <button>Verify OTP</button>
             </div>
            </div>
           

           

            
            <div className="link-ff">
            <Link className="link-forgot">Forgot Password..?</Link>
                </div>
                <div className="regis-input1">
                  <input type="checkbox" className="regi-inpu"/>
                  <p>By clicking you agree to <Link className="p-link">Terms and Conditions</Link></p>
                </div>
                <button className="reg-btn1">Login</button>
            </form>
            <div className="las-footer33">
                <div>
                <p style={{fontSize:"14px"}}>Don't have an account?</p>
                <Link className="las-btn-44" onClick={()=>{handleSignupForm()}}>Register</Link>
                </div>
                <Link className="register-link">
                <div>
                <p style={{fontSize:"14px"}}>Continue with google</p>
                <div ><FcGoogle style={{borderRadius:"100px",border:"1px solid black",padding:"2px",fontSize:"20px"}}/></div>
                </div>
                </Link>
                
            </div>
            </div> {/* Pass a callback to close after login */}
          </div>
        </>
      )}
      {showSignupComponent && (
  <>
    <div className="overlay1" onClick={() => setShowSignupComponent(false)}></div>
    <div className="signup-component-container">
      <div className="register-container">
        <div className="regis-heading">
        <h1 style={{textAlign:"center"}}>Register</h1>
        <RiCloseLargeFill style={{fontSize:"25px",cursor:"pointer"}} onClick={closeSignupComponent}/>
        </div>
       

        <form >
          <div className="regis-form-11">

         
          <div className="regis-input">
            <input type="text" placeholder="First Name"/>
          </div>
          <div className="regis-input">
            <input type="text" placeholder="Last Name"/>
          </div>
          <div className="regis-input">
            <input type="email" placeholder="Email ID"/>
          </div>
          <div className="regis-input">
            <input type="number" placeholder="Enter Otp*"/>
          </div>
          <div className="regis-input">
            <input type="number" placeholder="Phone Number"/>
          </div>
          <div className="regis-input">
            <input type="number" placeholder="Enter Otp*"/>
          </div>
          </div>
          <div className="regis-input1">
            <input type="checkbox" className="regi-inpu"/>
            <p>By clicking you agree to <Link className="p-link">Terms and Conditions</Link></p>
          </div>
          <Link to={"/accountindividualdashboard"}><button className="reg-btn1" onClick={closeSignupComponent}>Register</button></Link>
        </form>

        <div className="las-footer33">
          <div>
            <p>I have an account?</p>
            <Link className="las-btn-44" onClick={()=>{
              closeSignupComponent()
              handleLoginForm()
              }}>Login</Link>
          </div>
          <Link className="register-link">
            <div>
              <p>Register with Google</p>
              <div><FcGoogle style={{borderRadius:"100px",border:"1px solid black",padding:"2px",fontSize:"20px"}}/></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </>
)}
        <div className="h-main-content">
          <p
            style={{
              fontSize: "22px",
              textAlign: "center",
              fontWeight: "600",
              marginTop: "105px",
              marginBottom: "20px",
            }}
          >
            Address In <span style={{ color: "#429b6a" }}>India</span>
          </p>
          <div className="h-main-img">
            <img src={header} alt="Header" />
          </div>
        </div>
        <div className="hfirst-option">
          <div className="nav-option-15">
            <p
              style={{
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "600",
              }}
            >
              Which City do you want to be in?
            </p>
            <RiArrowDropDownLine
              style={{
                transform: isCityRotate ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.5s ease",
                fontSize: "35px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={handleCityDropdown}
            />
          </div>
          <div className="nav-option-16">
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              Do you want to own / rent?
            </p>
            <RiArrowDropDownLine
              style={{
                transform: isOwnRotate ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.5s ease",
                fontSize: "35px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={handleOwnDropdown}
            />
          </div>
        </div>
        <div className="select-search-div-1">
          <input placeholder="What is the purpose ?" />
          <div className="select-search-image-1">
            <IoSearch style={{ color: "#ffff", fontSize: "30px" }} />
          </div>
        </div>

        {showOptionsInNavbar && (
            <div className="home-container">
              <div style={{display:"flex",width:"85%",margin:"auto"}}>
                        <div>
                          <div>
                            <img src={filt} />
                          </div>
                          <p>Filter</p>
                        </div>
                        <div className="divide-line-11" style={{marginRight:"15px",marginLeft:"15px"}}></div>
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
                        <div className="divide-line-11" style={{marginLeft:"15px"}}></div>
                        </div>
            <div className="product-append-111">
              {products.map((product) => (
                <div className="product-details-div">
                   <div className="main-product-ima"><img src={product.productImage}/></div>
                   <div className="product-details-content-ss">
                   <p style={{color:"#429b6a",fontSize:"20px",fontWeight:"600"}}>{product.productName}</p>
                   <div><img src={rect}/></div>
                   </div>
                   <p>{product.productAreaName}</p>
                   <div className="product-details-content-ss">
                    <p style={{marginTop:"15px",color:"#429b6a",fontWeight:"600"}}>{`Rent: Rs. ${product.productRent}`}</p>
                    <div className="product-details-content-ss1">
                      <div><img src={like}/></div>
                      <div><img src={dislike}/></div>
                      </div>
                   </div>
                   <div className="product-details-content-ss">
                    <p>{`Sale: ${product.productSaleType}`}</p>
                    <div className="product-details-content-ss1">
                      <div><img src={video}/></div>
                      <div><img src={note}/></div>
                      </div>
                   </div>
                   <div className="product-details-content-ss11">
                    <div><img src={bed}/></div>
                    <p>{product.productBedType}</p>
                   </div>
                   <div className="product-details-content-ss11" style={{marginTop:"10px",marginBottom:"10px"}}>
                    <div><img src={fit}/></div>
                    <p>{product.productArea}</p>
                   </div>
                   <div className="product-details-content-ss">
                    <div className="product-details-content-ss11">
                    <div><img src={locat}/></div>
                    <p>{product.productDistance}</p>
                    </div>
                    <div>
                      <img src={shhare}/>
                    </div>
                   </div>
                </div>
              ))}
            </div>
            <div className="show-bottom-button"><button>Show more</button></div>
            <Footer1/>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;


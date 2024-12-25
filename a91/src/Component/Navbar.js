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
import partner from "../Asset/Navbar/partner.png";
import compare from "../Asset/Navbar/compare.png";
import dates from "../Asset/Navbar/dates.png";
import repor from "../Asset/Navbar/repor.png";
import Login from "./Login";
import dislike from "../Asset/Navbar/dislike.png";
import like from "../Asset/Navbar/like.png";
import filt from "../Asset/Navbar/filter.png";
import account from "../Asset/Navbar/account.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const isMobile = window.innerWidth<=768;
  const [isAccount,setAccount] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSignupComponent, setShowSignupComponent] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
  return (
    <div className="navbar-main-container">
      <div className="navbar-content">
      { !isMobile ? <div className="nav-logo">
          <img src={logo} />
        </div>:""}
        {  isMobile? 
       <div style={{display:"flex",justifyContent:"space-between"}}>
       <div className="nav-logo">
          <img src={logo} />
        </div>
      
          <div className="nav-end-img">
            <img src={h1} />
          </div>
          <div className="nav-end-img">
            <img src={partner} />
          </div>
          <div className="nav-end-img" style={{cursor:"pointer"}} onClick={()=>handleAccountOption()}>
            <img src={account} />
          </div>
          </div>
          :""}
        <div className="nav-option-1">
          <div className="nav-option-11">
            <p className="font-incre">City</p>
            <RiArrowDropDownLine
              style={{ fontSize: "35px", fontWeight: "600" }}
            />
          </div>
          <div className="nav-option-12">
            <p className="font-incre">Own/Rent</p>
            <RiArrowDropDownLine
              style={{ fontSize: "35px", fontWeight: "600" }}
            />
          </div>
          <div className="nav-option-13">
            <p className="font-incre">Purpose</p>
            <RiArrowDropDownLine
              style={{ fontSize: "35px", fontWeight: "600" }}
            />
          </div>
        </div>
        <div className="nav-end-option-2">
       {  !isMobile? 
       <>
       <div className="nav-end-img">
            <img src={search} />
          </div>
          <div className="nav-end-img">
            <img src={h1} />
          </div>
          <div className="nav-end-img">
            <img src={partner} />
          </div>
          <div className="nav-end-img" style={{cursor:"pointer"}} onClick={()=>handleAccountOption()}>
            <img src={account} />
          </div>
          </>
          :""}
          
          {
            isAccount && 
            <div className="account-details">
               <p className="account-option" onClick={handleLoginClick}>Login</p>
               <p className="account-option" onClick={handleSignupForm}>Register as Individual</p>
               <p className="account-option">Register as Channel Partner</p>
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
        </div>
      </div>
      <div className="navbar-divider"></div>
      <div className="nav-down-part">
        <div className="nav-down-part-content">
          <div>
            <div>
              <img src={filt} />
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
          { !isMobile && location.pathname === "/" && (
            <div className="home-image-nav">
              <div>
                <img className="home-nav-im-1" src={h21} />
                <p>1BHK</p>
              </div>
              <div>
                <img className="home-nav-im-2" src={h22} />
                <p>2BHK</p>
              </div>
              <div>
                <img src={h23} className="home-nav-im-3" />
                <p>3BHK</p>
              </div>
              <div>
                <img src={h24} className="home-nav-im-4" />
                <p>4BHK</p>
              </div>
              <div>
                <img src={h25} className="home-nav-im-5" />
                <p>5BHK</p>
              </div>
            </div>
          )}
          {location.pathname === "/homedesignfirst" && (
            <div className="home-image-nav">
              <div>
                <img className="home-nav-im-1" src={p1} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>1000`}</p>
              </div>
              <div>
                <img className="home-nav-im-2" src={p1} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>2000`}</p>
              </div>
              <div>
                <img src={p1} className="home-nav-im-3" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>3000`}</p>
              </div>
              <div>
                <img src={p1} className="home-nav-im-4" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>4000`}</p>
              </div>
              <div>
                <img src={p1} className="home-nav-im-5" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`4000+`}</p>
              </div>
            </div>
          )}
          {location.pathname === "/homedesignsecond" && (
            <div className="home-image-nav">
              <div>
                <img className="home-nav-im-1" src={p2} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>1000`}</p>
              </div>
              <div>
                <img className="home-nav-im-2" src={p2} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>2000`}</p>
              </div>
              <div>
                <img src={p2} className="home-nav-im-3" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>3000`}</p>
              </div>
              <div>
                <img src={p2} className="home-nav-im-4" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>4000`}</p>
              </div>
              <div>
                <img src={p2} className="home-nav-im-5" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`4000+`}</p>
              </div>
            </div>
          )}

          {location.pathname === "/detailpage" && (
              <div className="home-image-nav"
              style={location.pathname === "/detailpage" ? { alignItems: "center" } : {}}
              >
                <div id="detail-image-11">
                <div>
                <img className="home-nav-im-1" src={h21} />
                <p>1BHK</p>
              </div>
              <div>
                <img className="home-nav-im-2" src={h22} />
                <p>2BHK</p>
              </div>
              <div>
                <img src={h23} className="home-nav-im-3" />
                <p>3BHK</p>
              </div>
              <div>
                <img src={h24} className="home-nav-im-4" />
                <p>4BHK</p>
              </div>
              <div>
                <img src={h25} className="home-nav-im-5" />
                <p>5BHK</p>
              </div>
              </div>
              <div className="divide-line-12"></div>
                <div id="like-dis-div">
               <div>
                <img className="home-nav-im-1" src={dislike} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`1000`}</p>
              </div>
              <div>
                <img className="home-nav-im-1" src={like} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`500`}</p>
              </div>
              </div>
                <div className="divide-line-12"></div>
                <div
                >
                  <img src={compare} />
                </div>
                <div className="divide-line-12"></div>
                <div
                >
                  <img src={dates} />
                </div>
              </div>
          )}
        </div>
       {location.pathname==="/detailpage" && <div className="repor-agent">
            <div><img src={repor}/></div>
            <p>Report an agent</p>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;

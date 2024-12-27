import React,{useState,useEffect} from "react";
import "../Style/Hfirst.css"
import { useNavigate } from "react-router-dom";
import account from "../Asset/Navbar/account.png";
import logo from "../Asset/Navbar/logo.png";
import search from "../Asset/Navbar/search.png";
import h1 from "../Asset/Navbar/h1.png";
import header from "../Asset/Home/header11.png"
import partner from "../Asset/Navbar/partner.png";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Home from "./Home";

const HFirst = ()=>{
       const [isOwnRotate,setIsOwnRotate] = useState(false);
       const [isCityRotate,setIsCityRotate] = useState(false);
       const [showFirstComponent, setShowFirstComponent] = useState(true);
        const isMobile = window.innerWidth<=768;
       const handleScroll = () => {
         const scrollPosition = window.scrollY; // Get vertical scroll position
         setShowFirstComponent(scrollPosition === 0);
       };
     
       useEffect(() => {
         window.addEventListener("scroll", handleScroll);
     
         // Cleanup event listener on component unmount
         return () => {
           window.removeEventListener("scroll", handleScroll);
         };
       }, []);
     
       const handleCityDropdown = ()=>{
        // setShowCityDropdown(!showCityDropdown);
        setIsCityRotate(!isCityRotate)
     }
     const handleOwnDropdown = ()=>{
      // setShowOwnDropdown(!showOwnDropdown);
      setIsOwnRotate(!isOwnRotate)
   }
    return(
      <>
      {showFirstComponent ? <div className="hfirst-main-container">
            <div className="h-nav-content">
              <div className="h-logo-1"><img src={logo}/></div>
              <div className="h-second-nav">
                <div><img src={search}/></div>
                <div><img src={h1}/></div>
                <div><img src={partner}/></div>
                <div><img src={account}/></div>
              </div>
            </div>
            <div className="navbar-divider"></div>
            <div className="h-main-content">
               <p style={{fontSize:"22px",textAlign:"center",fontWeight:"600",marginTop:"20px",marginBottom:"20px"}}>Address In <span style={{color:"#429b6a"}}>India</span></p>
               <div className="h-main-img"><img src={header}/></div>
            </div>
              <div className="hfirst-option">
                  <div className="nav-option-15">
                            <p style={{
                              fontSize:!isMobile?"18px":"16px",
                              fontWeight:"600"}}>Which City do you want to be in ?</p>
                            <RiArrowDropDownLine
                              style={{
                                transform: isCityRotate ? "rotate(180deg)" : "rotate(0deg)",
                                transition: isCityRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                                fontSize: "35px", fontWeight: "600", cursor:"pointer" }}
                              onClick={handleCityDropdown}
                            />
                          </div>
                          <div className="nav-option-16">
                            <p style={{fontSize:"18px",fontWeight:"600"}}>Do you want to own / rent ?</p>
                            <RiArrowDropDownLine
                              style={{ 
                                transform: isOwnRotate ? "rotate(180deg)" : "rotate(0deg)",
                                transition: isOwnRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                                fontSize: "35px", fontWeight: "600",cursor:"pointer" }}
                                onClick={handleOwnDropdown}
                            />
                          </div>
              </div>
              <div className="select-search-div-1">
                                <input placeholder="What is the purpose ?"/>
                                <div className="select-search-image-1">
                              <IoSearch style={{color:"#ffff",fontSize:"30px"}}/>
                                </div>
                            </div>
        </div>:
          <Home/>
        }
        </>
    )
}

export default HFirst;
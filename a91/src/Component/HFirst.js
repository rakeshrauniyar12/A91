import React, { useState, useEffect } from "react";
import "../Style/Hfirst.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import account from "../Asset/Navbar/account.png";
import logo from "../Asset/Navbar/logo.png";
import search from "../Asset/Navbar/search.png";
import h1 from "../Asset/Navbar/h1.png";
import filt from "../Asset/Navbar/filter.png";
import header from "../Asset/Home/header11.png";
import partner from "../Asset/Navbar/partner.png";
import "../Style/Home.css"
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
import Navbar1 from "./Navbar1";
import Footer1 from "./Footer1";

const HFirst = () => {
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
    setIsCityRotate(!isCityRotate);
  };

  const handleOwnDropdown = () => {
    setIsOwnRotate(!isOwnRotate);
  };
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
                              // transform: isPurRotate ? "rotate(180deg)" : "rotate(0deg)",
                              // transition: isPurRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                              fontSize: "35px", fontWeight: "600", cursor:"pointer" }}
                            // onClick={handlePurposeDropdown}
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
            <div>
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
          <div>
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
                            // transform: isPurRotate ? "rotate(180deg)" : "rotate(0deg)",
                            // transition: isPurRotate ? "transform 0.5s ease" : "transform 0.5s ease",
                            fontSize: "35px", fontWeight: "600", cursor:"pointer" }}
                          // onClick={handlePurposeDropdown}
                        />
                      </div>
                      </div>
        )}
       
        </>
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

export default HFirst;

// import React,{useState,useEffect} from "react";
// import "../Style/Hfirst.css"
// import { useNavigate } from "react-router-dom";
// import account from "../Asset/Navbar/account.png";
// import logo from "../Asset/Navbar/logo.png";
// import search from "../Asset/Navbar/search.png";
// import h1 from "../Asset/Navbar/h1.png";
// import header from "../Asset/Home/header11.png"
// import partner from "../Asset/Navbar/partner.png";
// import { IoSearch } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Home from "./Home";

// const HFirst = ()=>{
//        const [isOwnRotate,setIsOwnRotate] = useState(false);
//        const [isCityRotate,setIsCityRotate] = useState(false);
//        const [showFirstComponent, setShowFirstComponent] = useState(true);
//         const isMobile = window.innerWidth<=768;
//        const handleScroll = () => {
//          const scrollPosition = window.scrollY; // Get vertical scroll position
//          setShowFirstComponent(scrollPosition === 0);
//        };

//        useEffect(() => {
//          window.addEventListener("scroll", handleScroll);

//          // Cleanup event listener on component unmount
//          return () => {
//            window.removeEventListener("scroll", handleScroll);
//          };
//        }, []);

//        const handleCityDropdown = ()=>{
//         // setShowCityDropdown(!showCityDropdown);
//         setIsCityRotate(!isCityRotate)
//      }
//      const handleOwnDropdown = ()=>{
//       // setShowOwnDropdown(!showOwnDropdown);
//       setIsOwnRotate(!isOwnRotate)
//    }
//     return(
//       <>
//       <div className="hfirst-main-container">
//               <div className="h-nav-content">
//               <div className="h-logo-1"><img src={logo}/></div>
//               <div className="h-second-nav">
//                 <div><img src={search}/></div>
//                 <div><img src={h1}/></div>
//                 <div><img src={partner}/></div>
//                 <div><img src={account}/></div>
//               </div>
//             </div>
//             <div className="h-main-content">
//                <p style={{fontSize:"22px",textAlign:"center",fontWeight:"600",marginTop:"105px",marginBottom:"20px"}}>Address In <span style={{color:"#429b6a"}}>India</span></p>
//                <div className="h-main-img"><img src={header}/></div>
//             </div>
//               <div className="hfirst-option">
//                   <div className="nav-option-15">
//                             <p style={{
//                               fontSize:!isMobile?"18px":"16px",
//                               fontWeight:"600"}}>Which City do you want to be in ?</p>
//                             <RiArrowDropDownLine
//                               style={{
//                                 transform: isCityRotate ? "rotate(180deg)" : "rotate(0deg)",
//                                 transition: isCityRotate ? "transform 0.5s ease" : "transform 0.5s ease",
//                                 fontSize: "35px", fontWeight: "600", cursor:"pointer" }}
//                               onClick={handleCityDropdown}
//                             />
//                           </div>
//                           <div className="nav-option-16">
//                             <p style={{fontSize:"18px",fontWeight:"600"}}>Do you want to own / rent ?</p>
//                             <RiArrowDropDownLine
//                               style={{
//                                 transform: isOwnRotate ? "rotate(180deg)" : "rotate(0deg)",
//                                 transition: isOwnRotate ? "transform 0.5s ease" : "transform 0.5s ease",
//                                 fontSize: "35px", fontWeight: "600",cursor:"pointer" }}
//                                 onClick={handleOwnDropdown}
//                             />
//                           </div>
//               </div>
//               <div className="select-search-div-1">
//                                 <input placeholder="What is the purpose ?"/>
//                                 <div className="select-search-image-1">
//                               <IoSearch style={{color:"#ffff",fontSize:"30px"}}/>
//                                 </div>
//                             </div>
//         </div>
//         </>
//     )
// }

// export default HFirst;

import React from "react";
import "../Style/Navbar.css"
import logo from "../Asset/Navbar/logo.png"
import search from "../Asset/Navbar/search.png"
import h1 from "../Asset/Navbar/h1.png"
import h21 from "../Asset/Navbar/h21.png"
import h22 from "../Asset/Navbar/h22.png"
import h23 from "../Asset/Navbar/h23.png"
import h24 from "../Asset/Navbar/h24.png"
import h25 from "../Asset/Navbar/h25.png"
import partner from "../Asset/Navbar/partner.png"
import filt from "../Asset/Navbar/filter.png"
import account from "../Asset/Navbar/account.png"
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ()=>{
    return(
        <div className="navbar-main-container">
             <div className="navbar-content">
                <div className="nav-logo"><img src={logo}/></div>
                <div className="nav-option-1">
                   <div className="nav-option-11">
                    <p className="font-incre">City</p>
                    <RiArrowDropDownLine style={{fontSize:"35px",fontWeight:"600"}}/>
                   </div>
                   <div className="nav-option-12">
                    <p className="font-incre">Own/Rent</p>
                    <RiArrowDropDownLine style={{fontSize:"35px",fontWeight:"600"}}/>
                   </div>
                   <div className="nav-option-13">
                    <p className="font-incre">Purpose</p>
                    <RiArrowDropDownLine style={{fontSize:"35px",fontWeight:"600"}}/>
                   </div>
                </div>
                <div className="nav-end-option-2">
                    <div className="nav-end-img"><img src={search}/></div>
                    <div className="nav-end-img"><img src={h1}/></div>
                    <div className="nav-end-img"><img src={partner}/></div>
                    <div className="nav-end-img"><img src={account}/></div>
                </div>
             </div>
             <div className="navbar-divider"></div>
             <div className="nav-down-part">
             <div className="nav-down-part-content">
                  <div>
                    <div><img src={filt}/></div>
                    <p>Filter</p>
                  </div>
                  <div className="divide-line-11"></div>
                  <div className="budget-div">
                    <div><p>₹ Budget</p></div>
                    <div className="div-min-max">
                        <div className="nav-min">Min</div>
                        <p>To</p>
                        <div className="nav-min">Max</div>
                    </div>
                  </div>
                  <div className="divide-line-11"></div>
                  <div className="home-image-nav">
                    <div>
                        <img className="home-nav-im-1" src={h21}/>
                        <p>1BHK</p>
                    </div>
                    <div>
                    <img className="home-nav-im-2" src={h22}/>
                        <p>2BHK</p>
                    </div>
                    <div>
                    <img src={h23} className="home-nav-im-3"/>
                        <p>3BHK</p>
                    </div>
                    <div>
                    <img src={h24} className="home-nav-im-4"/>
                        <p>4BHK</p>
                    </div>
                    <div>
                    <img src={h25} className="home-nav-im-5"/>
                        <p>5BHK</p>
                    </div>
                  
                  </div>
             </div>
             </div>
        </div>
    )
}

export default Navbar;
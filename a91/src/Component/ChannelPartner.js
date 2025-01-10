import React from "react";
import "../Style/ChannelPartner.css"
import { RiArrowRightSLine } from "react-icons/ri";
import sec1 from "../Asset/Content/sec1.png"
import sec2 from "../Asset/Content/sec2.png"
import sec3 from "../Asset/Content/sec3.png"
import sec4 from "../Asset/Content/sec4.png"
import sec5 from "../Asset/Content/sec5.png"
import sec6 from "../Asset/Content/sec6.png"
import sec7 from "../Asset/Content/sec7.png"
import img1 from "../Asset/Content/imfooter.png"
import sec8 from "../Asset/Content/sec8.png"
import { Link } from "react-router-dom";
const ChannelPartner = ()=>{
    const isMobile = window.innerWidth <= 768;
    return(
        <div className="partner-cont">
            <div className="part-first-container">
            <h1 className="part-heading">A <span style={{color:"#008f3d"}}>91</span>: Your Trusted Partner in Real Estate</h1>
            <h2 style={{color:"#008f3d",fontSize:"24px"}}>Connect. Collaborate. Close.</h2>
            <h2 style={{fontSize:"15px",lineHeight:"25.06px"}}>A91 is the platform where real estate professionals and property owners come together to make property transactions seamless and successful. We empower real estate channel partners to access high-quality leads, showcase their listings, and close deals faster. At A91, we believe that collaboration drives success, and we are committed to providing an easy-to-use platform that helps you grow your real estate business.</h2>
            </div>
           <div className="part-join-us">
              <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}>Why Join A91 as a Channel Partner?</h1>
              <p style={{fontSize:"10px",color:"#919191",lineHeight:"14.74px"}}>
              Becoming a channel partner with A91 opens up numerous opportunities for growth and success in the competitive real estate market. Here are some key benefits:
              </p>
           </div>

           <div className="part-main-content-sec">
            <div className="part-main-content-sec-first">
                <div className="part-main-content-section">
                    <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}><span style={{color:"#008f3d"}}>1</span>. Access High-Quality Leads</h1>
                 <div className="sec-first-p-tag-size">
                    <p style={{marginBottom:"20px"}}>Connect with property seekers and property sellers in your area.</p>
                  <p>
                  Our platform curates high-intent leads that match your location and expertise, allowing you to connect with serious buyers and sellers.</p>
                </div>
                 </div>
                <div className="part-main-image-section">
                    <img src={sec1}/>
                </div>
            </div>

            <div className="part-main-content-sec-first">
            {!isMobile?<div className="part-main-image-section">
                    <img src={sec2}/>
                </div>:""}
                <div className="part-main-content-section">
                    <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}><span style={{color:"#008f3d"}}>2</span>. List and Promote Your Projects</h1>
                 <div className="sec-first-p-tag-size">
                    <p style={{marginBottom:"20px"}}>Showcase your projects to a wide audience looking to buy or invest.</p>
                  <p>
                 Whether you’re managing new developments or resale properties, our listing tools are designed to maximize visibility and engagement.</p>
                </div>
                 </div>
                 {isMobile?<div className="part-main-image-section">
                    <img src={sec2}/>
                </div>:""}
            </div>

            <div className="part-main-content-sec-first">
                <div className="part-main-content-section">
                    <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}><span style={{color:"#008f3d"}}>3</span>. Enhanced Brand Visibility</h1>
                 <div className="sec-first-p-tag-size">
                    <p style={{marginBottom:"20px"}}>Stand out with a dedicated profile that highlights your experience and projects.</p>
                  <p>
                 Build credibility by showcasing past deals, client testimonials, and expertise in your locality.</p>
                </div>
                 </div>
                <div className="part-main-image-section">
                    <img src={sec3}/>
                </div>
            </div>


            <div className="part-main-content-sec-first">
           {!isMobile? <div className="part-main-image-section">
                    <img src={sec4}/>
                </div>:""}
                <div className="part-main-content-section">
                    <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}><span style={{color:"#008f3d"}}>4</span>. Easy-to-Use Interface</h1>
                 <div className="sec-first-p-tag-size">
                    <p style={{marginBottom:"20px"}}>Our platform is designed with simplicity in mind, making it easy to list properties, connect with leads, and manage interactions all in one place.
                    </p>
                  <p>
                  Keep track of your leads and projects through a personalized dashboard.</p>
                </div>
                 </div>
                 {isMobile? <div className="part-main-image-section">
                    <img src={sec4}/>
                </div>:""}
            </div>


            <div className="part-main-content-sec-first">
                <div className="part-main-content-section">
                    <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}><span style={{color:"#008f3d"}}>5</span>.Choose Localized Opportunities</h1>
                 <div className="sec-first-p-tag-size">
                    <p style={{marginBottom:"20px"}}>Filter and find listings within your service area, allowing you to focus on properties that align with your strengths and expertise.</p>
                  <p>
                  A91’s intuitive search and mapping tools make it easy to locate and connect with potential clients near you.
                  </p>
                </div>
                 </div>
                <div className="part-main-image-section">
                    <img src={sec5}/>
                </div>
            </div>


            <div className="part-main-content-sec-first">
            {!isMobile?<div className="part-main-image-section">
                    <img src={sec6}/>
                </div>:""}
                <div className="part-main-content-section">
                    <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}><span style={{color:"#008f3d"}}>6</span>. Flexibility and Control</h1>
                 <div className="sec-first-p-tag-size">
                    <p style={{marginBottom:"20px"}}>Take charge of your listings and choose when and where you want to showcase your properties.</p>
                  <p>
                  You decide how to approach each transaction—directly with property owners or in collaboration with other channel partners.</p>
                </div>
                 </div>
                 {isMobile?<div className="part-main-image-section">
                    <img src={sec6}/>
                </div>:""}
            </div>


            <div className="part-main-content-sec-first">
                <div className="part-main-content-section">
                    <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}><span style={{color:"#008f3d"}}>7</span>.Support and Resources</h1>
                 <div className="sec-first-p-tag-size">
                    <p style={{marginBottom:"20px"}}>A91 provides channel partners with tools, resources, and insights to enhance their sales strategies and improve client experiences.</p>
                  <p>
                  Access our support team for any assistance you may need to make the most of our platform.</p>
                </div>
                 </div>
                <div className="part-main-image-section">
                    <img src={sec7}/>
                </div>
            </div>

            <div className="part-main-content-sec-first">
            { !isMobile?<div className="part-main-image-section">
                    <img src={sec8}/>
                </div>:""}
                <div className="part-main-content-section">
                    <h1 style={{fontSize:"20px",lineHeight:"29.48px"}}><span style={{color:"#008f3d"}}>8</span>. Competitive Advantage</h1>
                 <div className="sec-first-p-tag-size">
                    <p style={{marginBottom:"20px"}}>Stand out in your local market by being part of a trusted platform that connects motivated buyers and sellers directly to you.</p>
                  <p>
                  By joining A91, you gain a competitive edge in the real estate industry with consistent and qualified leads.</p>
                </div>
                 </div>
                 { isMobile?<div className="part-main-image-section">
                    <img src={sec8}/>
                </div>:""}
            </div>
           </div>
           <h1 style={{fontSize:"20px",margin:"40px 10px",textAlign:"center"}}>How to Become a Channel Partner with A91 <span style={{color:"#008f3d"}}>91</span>?</h1>

           {isMobile?<div className="page-image-section">
              {/* <img src={imfooter1}/>
              <img src={imfooter2}/>
              <img src={imfooter3}/>
              <img src={imfooter4}/> */}
            </div>
            : <div className="page-image-section">
                <img src={img1}/>
            </div>}

           <div className="last-sec-butto">
            <Link to={"/account/partnerdashboard"}><p>Get Started as a Channel Partner</p></Link>
            <RiArrowRightSLine style={{fontSize:"30px"}}/>
           </div>
        </div>
    )
}

export default ChannelPartner;
import React from "react";
import "../Style/YetToVisit.css";
import "../Style/Appointment.css";
import rect from "../Asset/Home/Icon/rect.png";
import h1 from "../Asset/Home/h1.png";
import locat from "../Asset/Home/Icon/location.png";
import bed from "../Asset/Home/Icon/bed.png";
import like from "../Asset/Home/Icon/dislike.png";
import dislike from "../Asset/Home/Icon/like.png";
import fit from "../Asset/Home/Icon/fit.png";
import note from "../Asset/Home/Icon/note.png";
import shhare from "../Asset/Home/Icon/shhare.png";
import video from "../Asset/Home/Icon/video.png";
import dateicon from "../Asset/Home/Icon/date-icon.png";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";

const Visited = () => {
  return (
    <div className="yet-main-container">
    <div className="yet-first-sec"><input type="checkbox" className="bookmark-checkbox-2" /><p>Select All</p></div>
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <p style={{ fontSize: "17px", fontWeight: "600" }}>
          Clock and calender
        </p>
      </div>
      <div className="product-append-111" style={{ width: "100%",marginTop:"30px" }}>
        <div className="product-details-div">
          <div className="main-product-ima">
            <img src={h1} />
          </div>
          <div className="product-details-content-ss">
            <div>
              <p
                style={{
                  color: "#429b6a",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Mana Dale
              </p>
              <p style={{ fontSize: "10px" }}>
                3,4 BHK Apartment in Sarjapur Road, Bengalore.
              </p>
            </div>
            <div>
              <img src={rect} />
            </div>
          </div>
          <p></p>
          <div className="product-details-content-ss">
            <p
              style={{ marginTop: "15px", color: "#429b6a", fontWeight: "600" }}
            >
              Rent: Rs. 20000
            </p>
            <div className="product-details-content-ss1">
              <div>
                <img src={like} />
              </div>
              <div>
                <img src={dislike} />
              </div>
            </div>
          </div>
          <div className="product-details-content-ss">
            <p>Sale: Not for sale</p>
            <div className="product-details-content-ss1">
              <div>
                <img src={video} />
              </div>
              <div>
                <img src={note} />
              </div>
            </div>
          </div>
          <div className="product-details-content-ss11">
            <div>
              <img src={bed} />
            </div>
            <p>3BHK</p>
          </div>
          <div
            className="product-details-content-ss11"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <div>
              <img src={fit} />
            </div>
            <p>1600 sqft.</p>
            <FaWhatsapp />
            <IoMdCall />
            <MdOutlineMail />
          </div>
          <div className="product-details-content-ss">
            <div className="product-details-content-ss11">
              <div>
                <img src={locat} />
              </div>
              <p>9 Km away</p>
            </div>
            <div>
              <img src={shhare} />
            </div>
          </div>
          <div className="date-icon-div">
            <div>
              <img src={dateicon} />
            </div>
            <p>12-sep-2024</p>
            <p>22:15</p>
          </div>
          <div className="date-icon-div">
            <MdAccountBox style={{ fontSize: "22px" }} />
            <p>Agent: Ramu</p>
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            Visited on 12-Sep-2024
          </p>
          <div className="two-btn-div1">
            <button>Not Visited</button>
            <button style={{ marginLeft: "14px" }}>Report</button>
          </div>
        </div>
        <div className="product-details-div">
          <div className="main-product-ima">
            <img src={h1} />
          </div>
          <div className="product-details-content-ss">
            <div>
              <p
                style={{
                  color: "#429b6a",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Mana Dale
              </p>
              <p style={{ fontSize: "10px" }}>
                3,4 BHK Apartment in Sarjapur Road, Bengalore.
              </p>
            </div>
            <div>
              <img src={rect} />
            </div>
          </div>
          <p></p>
          <div className="product-details-content-ss">
            <p
              style={{ marginTop: "15px", color: "#429b6a", fontWeight: "600" }}
            >
              Rent: Rs. 20000
            </p>
            <div className="product-details-content-ss1">
              <div>
                <img src={like} />
              </div>
              <div>
                <img src={dislike} />
              </div>
            </div>
          </div>
          <div className="product-details-content-ss">
            <p>Sale: Not for sale</p>
            <div className="product-details-content-ss1">
              <div>
                <img src={video} />
              </div>
              <div>
                <img src={note} />
              </div>
            </div>
          </div>
          <div className="product-details-content-ss11">
            <div>
              <img src={bed} />
            </div>
            <p>3BHK</p>
          </div>
          <div
            className="product-details-content-ss11"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <div>
              <img src={fit} />
            </div>
            <p>1600 sqft.</p>
            <FaWhatsapp />
            <IoMdCall />
            <MdOutlineMail />
          </div>
          <div className="product-details-content-ss">
            <div className="product-details-content-ss11">
              <div>
                <img src={locat} />
              </div>
              <p>9 Km away</p>
            </div>
            <div>
              <img src={shhare} />
            </div>
          </div>
          <div className="date-icon-div">
            <div>
              <img src={dateicon} />
            </div>
            <p>12-sep-2024</p>
            <p>22:15</p>
          </div>
          <div className="date-icon-div">
            <MdAccountBox style={{ fontSize: "22px" }} />
            <p>Agent: Ramu</p>
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            Visited on 12-Sep-2024
          </p>
          <div className="two-btn-div1">
            <button>Not Visited</button>
            <button style={{ marginLeft: "14px" }}>Report</button>
          </div>
        </div>
        <div className="product-details-div" style={{position:"relative"}}>
          <div className="blur-overlay">
            <p className="overlay-text">Property No Longer Available</p>
          </div>
          <div className="main-product-ima">
            <img src={h1} />
          </div>
          <div className="product-details-content-ss">
            <div>
              <p
                style={{
                  color: "#429b6a",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Mana Dale
              </p>
              <p style={{ fontSize: "10px" }}>
                3,4 BHK Apartment in Sarjapur Road, Bengalore.
              </p>
            </div>
            <div>
              <img src={rect} />
            </div>
          </div>
          <p></p>
          <div className="product-details-content-ss">
            <p
              style={{ marginTop: "15px", color: "#429b6a", fontWeight: "600" }}
            >
              Rent: Rs. 20000
            </p>
            <div className="product-details-content-ss1">
              <div>
                <img src={like} />
              </div>
              <div>
                <img src={dislike} />
              </div>
            </div>
          </div>
          <div className="product-details-content-ss">
            <p>Sale: Not for sale</p>
            <div className="product-details-content-ss1">
              <div>
                <img src={video} />
              </div>
              <div>
                <img src={note} />
              </div>
            </div>
          </div>
          <div className="product-details-content-ss11">
            <div>
              <img src={bed} />
            </div>
            <p>3BHK</p>
          </div>
          <div
            className="product-details-content-ss11"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <div>
              <img src={fit} />
            </div>
            <p>1600 sqft.</p>
            <FaWhatsapp />
            <IoMdCall />
            <MdOutlineMail />
          </div>
          <div className="product-details-content-ss">
            <div className="product-details-content-ss11">
              <div>
                <img src={locat} />
              </div>
              <p>9 Km away</p>
            </div>
            <div>
              <img src={shhare} />
            </div>
          </div>
          <div className="date-icon-div">
            <div>
              <img src={dateicon} />
            </div>
            <p>12-sep-2024</p>
            <p>22:15</p>
          </div>
          <div className="date-icon-div">
            <MdAccountBox style={{ fontSize: "22px" }} />
            <p>Agent: Ramu</p>
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            Visited on 12-Sep-2024
          </p>
          <div className="two-btn-div1">
            <button>Not Visited</button>
            <button style={{ marginLeft: "14px" }}>Report</button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "70px" }}>
        <div className="agent-show-bottom-button">
          <button style={{ marginTop: "20px", fontSize: "14px" }}>
            Revisit Selected Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Visited;

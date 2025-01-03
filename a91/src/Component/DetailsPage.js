import React, { useState } from "react";
import "../Style/Detailpage.css";
import SelectAgent from "./SelectAgent";
import YetToVisit from "./YetToVisit";
import ScheduleAppointment from "./ScheduleAppoinment";
import Appointment from "./Appointment";
import Visited from "./Visited";
import { GrCompare } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { TbHomeFilled } from "react-icons/tb";
import { GiSettingsKnobs } from "react-icons/gi";
import repor from "../Asset/Navbar/repor.png";

const DetailPage = () => {
  const isMobile = window.innerWidth <= 768;
  // State to track the active option and components to display
  const [activeOption, setActiveOption] = useState("Select an agent");

  // Component rendering based on the active option
  const renderContent = () => {
    switch (activeOption) {
      case "Select an agent":
        return <SelectAgent />;
      case "Yet to visit":
        return <YetToVisit />;
      case "Schedule an Appointment":
        return <ScheduleAppointment />;
      case "Appointment Status":
        return <Appointment />;
      case "Visited":
        return <Visited />;
      default:
        return null;
    }
  };

  return (
    <div className="detail-page-main-container">
      <div className="nav-down-part">
        <div
          className="nav-down-part-content"
          // style={{ border: "1px solid red" }}
        >
          {" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
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
                  <TbHomeFilled size={16} />
                  <p>1BHK</p>
                </div>
                <div>
                  <TbHomeFilled size={20} />
                  <p>2BHK</p>
                </div>
                <div>
                  <TbHomeFilled size={24} />
                  <p>3BHK</p>
                </div>
                <div>
                  <TbHomeFilled size={28} />
                  <p>4BHK</p>
                </div>
                <div>
                  <TbHomeFilled size={32} />
                  <p>5BHK</p>
                </div>
              </div>

              <div className="divide-line-11"></div>
              <div id="like-dis-div">
                <div>
                  <BiSolidLike size={24} />
                  <p style={{ fontSize: "8px", fontWeight: "600" }}>{`1000`}</p>
                </div>
                <div>
                  <BiSolidDislike size={24} />
                  <p style={{ fontSize: "8px", fontWeight: "600" }}>{`500`}</p>
                </div>
              </div>
              <div className="divide-line-11"></div>
              <div>
                <GrCompare size={30} />
              </div>
              <div className="divide-line-11"></div>
              <div>
                <MdOutlineDateRange size={30} />
              </div>
            </div>
         
        </div>
      
          <div className="repor-agent">
            <div>
              <img src={repor} />
            </div>
            <p>Report an agent</p>
          </div>
       
      </div>
      <div className="all-option-div">
        <div className="options-container-2">
          <div
            key={"Electricity Bill"}
            className={`option ${
              activeOption === "Select an agent" ? "active" : ""
            }`}
            onClick={() => setActiveOption("Select an agent")}
          >
            <p>Select an agent</p>
          </div>
          <div className="vertical-line"></div>
          <div
            key={"Property Details"}
            className={`option ${
              activeOption === "Yet to visit" ? "active" : ""
            }`}
            onClick={() => setActiveOption("Yet to visit")}
          >
            <p>Yet to visit</p>
          </div>
          <div className="vertical-line"></div>
          <div
            key={"Photographs"}
            className={`option ${
              activeOption === "Schedule an Appointment" ? "active" : ""
            }`}
            onClick={() => setActiveOption("Schedule an Appointment")}
          >
            <p>Schedule an Appointment</p>
          </div>
          <div className="vertical-line"></div>
          <div
            key={"Select Agent"}
            className={`option ${
              activeOption === "Appointment Status" ? "active" : ""
            }`}
            onClick={() => setActiveOption("Appointment Status")}
          >
            <p>Appointment Status</p>
          </div>
          <div className="vertical-line"></div>
          <div
            key={"Select Agent"}
            className={`option ${activeOption === "Visited" ? "active" : ""}`}
            onClick={() => setActiveOption("Visited")}
            style={{
              borderTopRightRadius: "40px",
              borderBottomRightRadius: "40px",
            }}
          >
            <p> Visited</p>
          </div>
        </div>
      </div>
      <div className="content-container">{renderContent()}</div>
    </div>
  );
};

export default DetailPage;

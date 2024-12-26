import React, { useState } from "react";
import "../Style/Detailpage.css";
import SelectAgent from "./SelectAgent";
import YetToVisit from "./YetToVisit";
import ScheduleAppointment from "./ScheduleAppoinment"
import Appointment from "./Appointment";
import Visited from "./Visited";
const DetailPage = () => {
  // State to track the active option and components to display
  const [activeOption, setActiveOption] = useState("Select an agent");

  // Component rendering based on the active option
  const renderContent = () => {
    switch (activeOption) {
      case "Select an agent":
        return <SelectAgent/>
      case "Yet to visit":
        return <YetToVisit/>
      case "Schedule an Appointment":
        return <ScheduleAppointment/>
      case "Appointment Status":
        return <Appointment/>;
      case "Visited":
        return <Visited/>;
      default:
        return null;
    }
  };

  return (
    <div className="detail-page-main-container">
      <div className="all-option-div">
        {[
          {option:"Select an agent",width:15},
          {option:"Yet to visit",width:13},
          {option:"Schedule an Appointment",width:23},
          {option:"Appointment Status",width:20},
          {option:"Visited",width:13},
        ].map((option, index) => (
          <div
            key={index}
            style={{ width: `${option.width}%` }} // Dynamic width adjustment
            className={
              activeOption === option.option
                ? "option-div-active-option"
                : "option-div"
            }
            onClick={() => setActiveOption(option.option)}
          >
            <p>{option.option}</p>
          </div>
        ))}
      </div>
      <div className="content-container">{renderContent()}</div>
    </div>
  );
};

export default DetailPage;
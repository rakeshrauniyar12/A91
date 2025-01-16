import React,{useState} from "react";
import MyDashboard from "./MyDashboard";
import Property from "./Property";
import MySeekers from "./MySeekers";
import MyCalender from "./MyCalender";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("My Dashboard");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  // Data for All Properties
  

  return (
    <div>
      <div
        className="options-container-1"
        style={{ top: "11.4%", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        <div
          key={"Electricity Bill"}
          className={`option ${
            selectedOption === "My Dashboard" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("My Dashboard")}
          style={{
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
          }}
        >
          My Dashboard
        </div>
        <div
          key={"Property Details"}
          className={`option ${
            selectedOption === "My Properties" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("My Properties")}
          style={{
            borderRight: "2px solid black",
            borderLeft: "2px solid black",
          }}
        >
          My Properties
        </div>
        <div
          key={"Photographs"}
          className={`option ${
            selectedOption === "My Seekers" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("My Seekers")}
          style={{ borderRight: "2px solid black" }}
        >
          My Seekers
        </div>
        <div
          key={"Photographs"}
          className={`option ${
            selectedOption === "My Calender" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("My Calender")}
          style={{ borderRadius: "40px" }}
        >
          My Calender
        </div>
      </div>
      <div className="content-container">
        {selectedOption === "My Dashboard" && <MyDashboard />}
        {selectedOption === "My Properties" && <Property/>}
        {/* {selectedOption === "My Seekers" && <MySeekers/>}
        {selectedOption === "My Calender" && <MyCalender/>} */}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import "../Style/Detailpage.css";
import "../Style/Navbar.css";
import SelectAgent from "./SelectAgent";
import YetToVisit from "./YetToVisit";
import ScheduleAppointment from "./ScheduleAppoinment";
import Appointment from "./Appointment";
import Visited from "./Visited";
import CompareApartments from "./CompareApartments";
import FilterMinMax from "./FilterMinMax";
import FilterModal from "./FilterModal";
import FilterOption from "./FilterOption";

const DetailPage = () => {
  const isMobile = window.innerWidth <= 768;
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };
  // State to track the active option and components to display
  const [activeOption, setActiveOption] = useState("Select an agent");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      case "Compare":
        return <CompareApartments />;
      default:
        return null;
    }
  };

  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };
  const isLogin = true;
  return (
    <div className="detail-page-main-container">
      <FilterMinMax
        toggleFilterModal={toggleFilterModal}
        isLogin={isLogin}
        width={"25%"}
      />
      {active !== 5 && (
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
      )}

      <div className="content-container">{renderContent()}</div>
      {isFilterModalOpen && (
        <div className="modal-overlay" onClick={toggleFilterModal}>
          <div
            className="modal-container"
            style={{ padding: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FilterModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

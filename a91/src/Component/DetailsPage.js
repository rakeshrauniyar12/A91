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
import { useFilterState } from "./FIlterStateProvider";
const DetailPage = ({ setCompareComponent }) => {
  const { filterState, setFilterState } = useFilterState();
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
    switch (filterState) {
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
                filterState === "Select an agent" ? "active" : ""
              }`}
              onClick={() => setFilterState("Select an agent")}
            >
              <p>Select an agent</p>
            </div>
            <div className="vertical-line"></div>
            <div
              key={"Property Details"}
              className={`option ${
                filterState === "Yet to visit" ? "active" : ""
              }`}
              onClick={() => setFilterState("Yet to visit")}
            >
              <p>Yet to visit</p>
            </div>
            <div className="vertical-line"></div>
            <div
              key={"Photographs"}
              className={`option ${
                filterState === "Schedule an Appointment" ? "active" : ""
              }`}
              onClick={() => setFilterState("Schedule an Appointment")}
            >
              <p>Schedule an Appointment</p>
            </div>
            <div className="vertical-line"></div>
            <div
              key={"Select Agent"}
              className={`option ${
                filterState === "Appointment Status" ? "active" : ""
              }`}
              onClick={() => setFilterState("Appointment Status")}
            >
              <p>Appointment Status</p>
            </div>
            <div className="vertical-line"></div>
            <div
              key={"Select Agent"}
              className={`option ${filterState === "Visited" ? "active" : ""}`}
              onClick={() => setFilterState("Visited")}
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

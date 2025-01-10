import React, { useState, useEffect } from "react";
import { GrCompare } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { TbHomeFilled } from "react-icons/tb";
import { GiSettingsKnobs } from "react-icons/gi";
import repor from "../Asset/Navbar/repor.png";
import { MdCurrencyRupee } from "react-icons/md";
import FilterMinMax from "./FilterMinMax";

const FilterOption = ({ toggleFilterModal, isLogin }) => {
  const isMobile = window.innerWidth <= 768;
  //   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  //   const toggleFilterModal = () => {
  //     setIsFilterModalOpen(!isFilterModalOpen);
  //   };
  // State to track the active option and components to display
  const [activeOption, setActiveOption] = useState("Select an agent");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div
      className="nav-down-part"
      style={{
        display: "flex",
        alignItems: "flex-end",
        border: "1px solid black",
      }}
    >
      <div className="nav-down-part-content">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {/* <FilterMinMax/> */}
          <div onClick={toggleFilterModal} style={{ cursor: "pointer" }}>
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
          <div
            className="budget-div-1"
            style={{ width: "25%", paddingTop: 10 }}
          >
            <div className="budget-rupee-icon">
              <MdCurrencyRupee size={24} style={{ marginRight: "10px" }} />
            </div>
            <div className="budget-div-2">
              <div className="div-min-max-1">
                <input type="text" className="input-text" placeholder="Min" />
                <p style={{ fontSize: "14px", margin: "0 10px" }}>To</p>
                <input type="text" className="input-text" placeholder="Max" />
              </div>
              <div>
                <p style={{ fontSize: "13px" }}>Budget</p>
              </div>
            </div>
          </div>

         { isLogin?
         <>
         <div className="divide-line-11"></div>
          <div id="detail-image-11">
            <div onClick={() => handleClick(0)}>
              <TbHomeFilled
                size={16}
                style={{
                  color: active === 0 ? "var(--primary)" : "black",
                }}
              />
              <p
                style={{
                  color: active === 0 ? "var(--primary)" : "black",
                  fontWeight: active === 0 ? "bold" : "",
                }}
              >
                1BHK
              </p>
            </div>
            <div onClick={() => handleClick(1)}>
              <TbHomeFilled
                size={20}
                style={{
                  color: active === 1 ? "var(--primary)" : "black",
                }}
              />
              <p
                style={{
                  color: active === 1 ? "var(--primary)" : "black",
                  fontWeight: active === 1 ? "bold" : "",
                }}
              >
                2BHK
              </p>
            </div>
            <div onClick={() => handleClick(2)}>
              <TbHomeFilled
                size={24}
                style={{
                  color: active === 2 ? "var(--primary)" : "black",
                }}
              />
              <p
                style={{
                  color: active === 2 ? "var(--primary)" : "black",
                  fontWeight: active === 2 ? "bold" : "",
                }}
              >
                3BHK
              </p>
            </div>
            <div onClick={() => handleClick(3)}>
              <TbHomeFilled
                size={28}
                style={{
                  color: active === 3 ? "var(--primary)" : "black",
                }}
              />
              <p
                style={{
                  color: active === 3 ? "var(--primary)" : "black",
                  fontWeight: active === 3 ? "bold" : "",
                }}
              >
                4BHK
              </p>
            </div>
            <div onClick={() => handleClick(4)}>
              <TbHomeFilled
                size={32}
                style={{
                  color: active === 4 ? "var(--primary)" : "black",
                }}
              />
              <p
                style={{
                  color: active === 4 ? "var(--primary)" : "black",
                  fontWeight: active === 4 ? "bold" : "",
                }}
              >
                5BHK
              </p>
            </div>
          </div>

          <div className="divide-line-11"></div>
          <div id="like-dis-div">
            <div>
              <BiSolidLike size={26} />
              <p style={{ fontSize: "8px", fontWeight: "600" }}>{`1000`}</p>
            </div>
            <div>
              <BiSolidDislike size={26} />
              <p style={{ fontSize: "8px", fontWeight: "600" }}>{`500`}</p>
            </div>
          </div>
          <div className="divide-line-11"></div>
          <div
            onClick={() => {
              handleClick(5);
              setActiveOption(
                activeOption === "Select an agent"
                  ? "Compare"
                  : "Select an agent"
              );
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <GrCompare
              size={30}
              style={{
                color:
                  active === 5 && activeOption == "Compare"
                    ? "var(--primary)"
                    : "black",
              }}
            />
            <p
              style={{
                color:
                  active === 5 && activeOption == "Compare"
                    ? "var(--primary)"
                    : "black",
                fontWeight:
                  active === 5 && activeOption == "Compare" ? "bold" : "",
                fontSize: "10px",
                marginTop: 2,
              }}
            >
              Compare
            </p>
          </div>
          <div className="divide-line-11"></div>
          <div
            onClick={() => handleClick(6)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MdOutlineDateRange
              size={30}
              style={{
                color: active === 6 ? "var(--primary)" : "black",
              }}
            />
            <p
              style={{
                color: active === 6 ? "var(--primary)" : "black",
                fontWeight: active === 6 ? "bold" : "",
                fontSize: "10px",
                marginTop: 4,
              }}
            >
              Schedule a Visit
            </p>
          </div>
          </>:""}
        </div>
      </div>

      {isLogin ? (
        <div className="repor-agent">
          <div>
            <img src={repor} />
          </div>
          <p>Report an agent</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterOption;

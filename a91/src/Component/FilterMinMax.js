import React, { useState, useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { GrCompare } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidLike, BiSolidDislike, BiShapeSquare } from "react-icons/bi";
import { IoWarning } from "react-icons/io5";
import repor from "../Asset/Navbar/repor.png";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/FilterMinMax.css";
import { TbHomeFilled } from "react-icons/tb";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { useFilterState } from "./FIlterStateProvider";
import { useAuth } from "./UserContext.js";

function FilterMinMax({ toggleFilterModal, isLogin, width }) {
  const { currentUser, isLoggedIn, logout } = useAuth();
  const {
    filterState,
    setFilterState,
    isFilterModalOpen,
    setIsFilterModalOpen,
  } = useFilterState();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const [activeOption, setActiveOption] = useState("Select an agent");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setFilterState("Compare");
    setActive(index);
  };
  return (
    <div className="sticky-filter-1">
      <div
        style={{
          display: "flex",
          // margin: "auto",
        }}
        className="sticky-filter-2"
      >
        <div onClick={toggleFilterModal} style={{ cursor: "pointer" }}>
          <div>
            <GiSettingsKnobs
              size={!isMobile ? 35 : 24}
              style={{
                transform: "rotate(90deg)",
              }}
            />
          </div>
          <p>Filter</p>
        </div>
        <div className="temp_vr"></div>

        <div className="budget-div-1" style={{ width: width }}>
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
              <p>Budget</p>
            </div>
          </div>
        </div>

        {location.pathname === "/commercial" && (
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "flex-end",
            }}
          >
            <div className="temp_vr"></div>
            <div id="detail-image-11">
              <div onClick={() => handleClick(0)}>
                <PiBuildingApartmentFill
                  size={18}
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
                  {`>1000`}
                </p>
              </div>
              <div onClick={() => handleClick(1)}>
                <PiBuildingApartmentFill
                  size={23}
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
                  {`>2000`}
                </p>
              </div>
              <div onClick={() => handleClick(2)}>
                <PiBuildingApartmentFill
                  size={28}
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
                  {`>3000`}
                </p>
              </div>
              <div onClick={() => handleClick(3)}>
                <PiBuildingApartmentFill
                  size={33}
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
                  {`>4000`}
                </p>
              </div>
              <div onClick={() => handleClick(4)}>
                <PiBuildingApartmentFill
                  size={38}
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
                  {`4000+`}
                </p>
              </div>
            </div>
          </div>
        )}
        {location.pathname === "/plot" && (
          <div
            style={{ display: "flex", height: "100%", alignItems: "flex-end" }}
          >
            <div className="temp_vr"></div>
            <div id="detail-image-11">
              <div onClick={() => handleClick(0)}>
                <BiShapeSquare
                  size={18}
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
                  {`>1000`}
                </p>
              </div>
              <div onClick={() => handleClick(1)}>
                <BiShapeSquare
                  size={23}
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
                  {`>2000`}
                </p>
              </div>
              <div onClick={() => handleClick(2)}>
                <BiShapeSquare
                  size={28}
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
                  {`>3000`}
                </p>
              </div>
              <div onClick={() => handleClick(3)}>
                <BiShapeSquare
                  size={33}
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
                  {`>4000`}
                </p>
              </div>
              <div onClick={() => handleClick(4)}>
                <BiShapeSquare
                  size={38}
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
                  4000+
                </p>
              </div>
            </div>
          </div>
        )}
        {(location.pathname === "/residential" ||
          location.pathname === "/propertydetail") && (
          <div
            style={{ display: "flex", height: "100%", alignItems: "flex-end" }}
          >
            <div className="temp_vr"></div>
            <div id="detail-image-11">
              <div onClick={() => handleClick(0)}>
                <TbHomeFilled
                  size={18}
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
                  size={23}
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
                  size={28}
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
                  size={33}
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
                  size={38}
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
        
          </div>
        )}
        {isLoggedIn ? (
          <div className="schedule-like-vetical">
          { location.pathname==="/detailpage" &&
          <>
          <div className="temp_vr"></div>
            <div id="detail-image-11">
              <div onClick={() => handleClick(0)}>
                <TbHomeFilled
                  size={18}
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
                  size={23}
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
                  size={28}
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
                  size={33}
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
                  size={38}
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
            </>
            }

            <div className="temp_vr"></div>
            <div id="like-dis-div">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <BiSolidLike size={30} />
                <p style={{ fontWeight: "600" }}>{`1000`}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <BiSolidDislike size={30} />
                <p style={{ fontWeight: "600" }}>{`500`}</p>
              </div>
            </div>

            <div className="temp_vr"></div>
            <div
              onClick={() => {
                handleClick(5);
                setActiveOption(
                  activeOption === "Select an agent"
                    ? "Compare"
                    : "Select an agent"
                );
                location.pathname === "/residential" && navigate("/detailpage", { state: "Compare" }) ||
                location.pathname==="/commercial" &&  navigate("/detailpage",{state:"Compare"}) ||
                location.pathname==="/plot" &&  navigate("/detailpage",{state:"Compare"}) 
                  
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
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
                  marginTop: 2,
                }}
              >
                Compare
              </p>
            </div>

            <div className="temp_vr"></div>
            <div
              onClick={() => {
                handleClick(6);
                setFilterState("Select an agent");
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
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
                  marginTop: 4,
                }}
              >
                Schedule a Visit
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {isLogin ? (
        <div className="repor-agent">
          <div className="reportAgentDiv">
            <IoWarning color="red" size={26} style={{ marginRight: 7 }} />
            <p style={{ fontSize: "16px" }}>Report an agent</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FilterMinMax;

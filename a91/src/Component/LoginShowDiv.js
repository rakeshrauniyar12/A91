import React from "react";

const LoginShowDiv = () => {
  return (
    <div className="login-show-main-container">
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
            activeOption === "Select an agent" ? "Compare" : "Select an agent"
          );
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
            fontWeight: active === 5 && activeOption == "Compare" ? "bold" : "",
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
  );
};

export default LoginShowDiv;

import React from "react";
import "../Style/AgentRegister.css";
import logo from "../Asset/Navbar/a91.png";
import agentpage from "../Asset/agentpage.png";
import { useNavigate } from "react-router-dom";

const AgentRegister = () => {
  const navigate = useNavigate();
  return (
    <div className="agentRegisterContainerMainPage">
      <div className="agentRegisterTop">
        <img src={logo} alt="a91-logo" />
        <span>:</span>
        <p>
          Agents in
          <span
            style={{
              fontWeight: "bold",
              color: "var(--primary)",
            }}
          >
            India
          </span>
        </p>
      </div>
      <div className="agentDescriptionDiv">
        <p>
          Welcome to A<b style={{ color: "var(--primary)" }}>91</b> , a platform
          made by agents, for agents, right here in India. We get that
          collaboration is key in our business, and we know that agents are the
          backbone of the global real estate market.
        </p>
        <p>
          At A<b style={{ color: "var(--primary)" }}>91</b> , we help property
          owners and seekers find the right agent, so the agent can do what they
          do best, and get great results for everyone involved. We're creating a
          team of professionals, who are ready to connect and grow our network
          with exciting new opportunities.
        </p>
      </div>
      <div className="connectCollabConvertTextDiv">
        <p>Connect. Collaborate. Convert.</p>
      </div>
      <div className="whyA91Div">
        <h1>
          <u>
            Why A<b style={{ color: "var(--primary)" }}>91</b>
          </u>
        </h1>
        <img src={agentpage} alt="image" />
      </div>
      <div className="stepsToRegisterAgentDiv">
        <h1 className="stepsToRegisterAgentHeading">
          <u>How to become an Agent</u>
        </h1>
        <div className="stepsToRegisterNumberContainer">
          <div className="stepsToRegisterNumber_1">
            <div>
              <h1>1</h1>
            </div>
            <div className="stepsDesc_1">
              <h2>Sign Up</h2>
              <p>Register with us by providing basic details</p>
            </div>
          </div>
          <div className="stepsToRegisterNumber_2">
            <div>
              <h1>2</h1>
            </div>
            <div className="stepsDesc_1">
              <h2>Get Onboarded</h2>
              <p>
                Our team will get in touch with you to walk you through our
                platforms do's, dont's, our features , and answer your questions
              </p>
            </div>
          </div>
          <div className="stepsToRegisterNumber_3">
            <div>
              <h1>3</h1>
            </div>
            <div className="stepsDesc_2">
              <h2>Create your Profile</h2>
              <p>
                Our team will walk you through creating a profile to highlight
                your terms, and will help you customize your profile to have
                maximum reach
              </p>
            </div>
          </div>
          <div className="stepsToRegisterNumber_4">
            <div>
              <h1>4</h1>
            </div>
            <div className="stepsDesc_2">
              <h2>Unlock the A91 Network</h2>
              <p>
                Add your properties, your requirements, connect with other
                agents, you do you, at your pace, on your terms!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="registerStartButtonDiv">
        <button onClick={() => navigate("/agentonboardprocess")}>
          Click here to Sign-up
        </button>
      </div>
    </div>
  );
};

export default AgentRegister;

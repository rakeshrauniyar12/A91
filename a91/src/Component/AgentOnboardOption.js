import React, { useState, useEffect } from "react";
import "../Style/AgentOnboardOption.css";
import logo from "../Asset/Navbar/a91.png";

import {
  IoIosCall,
  IoMdMail,
  IoIosGlobe,
  IoLogoFacebook,
} from "react-icons/io";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const AgentOnboardOption = () => {
  const [activeOption, setActiveOption] = useState("Sign up");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countryCodes = [
    { code: "+91", label: "India" },
    { code: "+1", label: "USA" },
    { code: "+2", label: "Canada" },
    { code: "+3", label: "Mexico" },
    { code: "+4", label: "Brazil" },
    { code: "+5", label: "Argentina" },
    { code: "+6", label: "Colombia" },
    { code: "+7", label: "Peru" },
    { code: "+8", label: "Venezuela" },
    { code: "+9", label: "Chile" },
    { code: "+10", label: "Ecuador" },
    { code: "+11", label: "Guatemala" },
    { code: "+12", label: "Cuba" },
    { code: "+13", label: "Haiti" },
    { code: "+14", label: "Dominican Republic" },
    { code: "+15", label: "Honduras" },
    { code: "+16", label: "Paraguay" },
    { code: "+17", label: "El Salvador" },
    { code: "+18", label: "Nicaragua" },
    { code: "+19", label: "Costa Rica" },
    { code: "+20", label: "Panama" },
    { code: "+21", label: "Jamaica" },
    { code: "+22", label: "Trinidad and Tobago" },
    { code: "+23", label: "Bahamas" },
    { code: "+24", label: "Barbados" },
    { code: "+25", label: "Saint Lucia" },
    { code: "+26", label: "Saint Vincent and the Grenadines" },
  ];

  const renderSignUp = () => (
    <div className="agentRegisterContainer">
      <h2 style={{ textAlign: "center" }}>Registration - Agent</h2>
      <form>
        <div className="agentRegis-form-11">
          <div className="regis-input">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="regis-input">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="regis-input">
            <input type="email" placeholder="Email ID" />
          </div>
          <div className="regis-input">
            <input type="number" placeholder="Email OTP" />
          </div>
          <div className="regis-input">
            <div
              className="phone-input-container"
              style={{
                display: "flex",
                border: "1px solid gray",
                borderRadius: "50px",
                paddingLeft: "20px",
              }}
            >
              <select
                className="country-code-dropdown"
                style={{ border: "none", outline: "none" }}
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="phone-number-input"
                style={{ border: "none", paddingLeft: 5 }}
              />
            </div>
          </div>
          <div className="regis-input">
            <input type="number" placeholder="City Of Operations" />
          </div>
          <div className="regis-input">
            <input type="email" placeholder="Company Name" />
          </div>
          <div className="regis-input">
            <input type="number" placeholder="Preferred Time To Connect" />
          </div>
        </div>
        <div className="agentRegisterBtnDiv">
          <button className="agentRegisterBtn">Register</button>
        </div>
      </form>
    </div>
  );

  const renderGetOnboarded = () => (
    <div className="renderGetOnboardedContainer">
      <h2 style={{ textAlign: "center" }}>Additional Information</h2>
      <div className="renderGetOnboardedInputDiv">
        <input type="text" placeholder="Pincode*" />
        <input type="text" placeholder="Locality*" />
        <input type="text" placeholder="City*" />
        <input type="text" placeholder="Company Address*" />
        <input type="text" placeholder="City of Operations*" />
        <input type="text" placeholder="Area of Operations*" />
        <input type="text" placeholder="Operating Since*" />
        <input type="text" placeholder="Specialization*" />
        <input type="text" placeholder="Team Size*" />
        <input type="text" placeholder="Website (if any)" />
        <input type="text" placeholder="Social Media (if any)" />
        <input type="text" placeholder="URL" />
        <input type="text" placeholder="Upload GST Certificate" />
        <input type="text" placeholder="Upload PAN Card*" />
        <input type="text" placeholder="Upload RERA Certificate" />
      </div>

      <div className="aboutAgentContainer">
        <textarea type="text" placeholder="About Us" />
      </div>
      <div className="agentGetOnboardBtnContainer">
        <button>Submit</button>
      </div>
    </div>
  );

  const renderCreateProfile = () => (
    <div>
      <div className="renderCreateProfileContainer">
        <div className="createProfileLeftContainer">
          <div className="upload-container">
            <div className="circle">
              <div className="inner-circle">
                <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                  Upload <br /> Logo / Photo
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none", border: "1px solid black" }}
                />
              </div>
            </div>
          </div>
          <div className="socialMediaIconsDiv">
            <IoIosCall
              size={35}
              style={{ cursor: "pointer", margin: "auto" }}
            />
            <IoMdMail size={35} style={{ cursor: "pointer", margin: "auto" }} />
            <IoIosGlobe
              size={35}
              style={{ cursor: "pointer", margin: "auto" }}
            />
            <IoLogoWhatsapp
              size={35}
              style={{ cursor: "pointer", margin: "auto" }}
            />
            <IoLogoFacebook
              size={35}
              style={{ cursor: "pointer", margin: "auto" }}
            />
            <IoLogoInstagram
              size={35}
              style={{ cursor: "pointer", margin: "auto" }}
            />
            <FaXTwitter
              size={35}
              style={{ cursor: "pointer", margin: "auto" }}
            />
            <FaLinkedin
              size={35}
              style={{ cursor: "pointer", margin: "auto" }}
            />
            <FaYoutube
              size={35}
              style={{ cursor: "pointer", margin: "auto" }}
            />
          </div>
        </div>

        <div className="createProfileRightContainer">
          <input type="text" placeholder="Company Name / Individual Name" />
          <div className="agentAddressDiv">
            <input type="text" placeholder="Locality*" />
            <input type="text" placeholder="City*" />
            <input type="text" placeholder="Pincode*" />
          </div>
          <div className="aboutAgentContainer_cyp">
            <textarea type="text" placeholder="About Us" />
          </div>
          <div className="agentAddressDiv">
            <input type="text" placeholder="Operating Since*" />
            <input type="text" placeholder="Cities of Operation" />
            <input type="text" placeholder="Areas of Operation" />
          </div>
          <input type="text" placeholder="Specialise in" />
          <div className="commissionStructureContainer">
            <h4>Commission Structure</h4>
            <div className="commissionStructureMain">
              <div className="hr_line"></div>
              <div>
                <div className="commissionStructureDiv">
                  <div>
                    <div className="commission_key">
                      <p>Residential:</p>
                    </div>
                    <div className="commission_value">
                      <p>For Property Owner</p>
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Rental:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="One Month Rent " />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="2% of Sale Value" />
                    </div>
                  </div>
                </div>
                <div className="commissionStructureDiv">
                  <div>
                    <div className="commission_key">
                      <p>Residential:</p>
                    </div>
                    <div className="commission_value">
                      <p>For Property Owner</p>
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Rental:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="One Month Rent " />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="2% of Sale Value" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="vr_line_1"></div>
              <div>
                <div className="commissionStructureDiv padd_left">
                  <div>
                    <div className="commission_key">
                      <p>Commercial:</p>
                    </div>
                    <div className="commission_value">
                      <p>For Property Owner</p>
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Rental:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="One Month Rent " />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="2% of Sale Value" />
                    </div>
                  </div>
                </div>
                <div className="commissionStructureDiv padd_left">
                  <div>
                    <div className="commission_key">
                      <p>Commercial:</p>
                    </div>
                    <div className="commission_value">
                      <p>For Property Owner</p>
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Rental:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="One Month Rent " />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="2% of Sale Value" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="vr_line_2"></div>
              <div>
                <div className="commissionStructureDiv padd_left">
                  <div>
                    <div className="commission_key">
                      <p>Plot:</p>
                    </div>
                    <div className="commission_value">
                      <p>For Property Owner</p>
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Rental:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="One Month Rent " />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="2% of Sale Value" />
                    </div>
                  </div>
                </div>
                <div className="commissionStructureDiv padd_left">
                  <div>
                    <div className="commission_key">
                      <p>Plot:</p>
                    </div>
                    <div className="commission_value">
                      <p>For Property Owner</p>
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Rental:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="One Month Rent " />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input type="text" placeholder="2% of Sale Value" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="createProfileBtnDiv">
        <button>Update</button>
      </div>
    </div>
  );

  const renderUnlockA91 = () => (
    <div className="renderUnlockA91Container">
      <h2>Welcome to </h2>
      <img src={logo} alt="logo" />
    </div>
  );

  return (
    <div className="agentOnboardOptionContainer">
      <div className="agentOptionMain">
        <div className="agentOptionDiv">
          <div
            key={"Sign up"}
            onClick={() => setActiveOption("Sign up")}
            className={activeOption === "Sign up" ? "active" : ""}
          >
            <p>Sign up</p>
          </div>
          <div className="vertical-line"></div>
          <div
            key={"Get Onboarded"}
            onClick={() => setActiveOption("Get Onboarded")}
            className={activeOption === "Get Onboarded" ? "active" : ""}
          >
            <p>Get Onboarded</p>
          </div>
          <div className="vertical-line"></div>
          <div
            key={"Create your Profile"}
            onClick={() => setActiveOption("Create your Profile")}
            className={activeOption === "Create your Profile" ? "active" : ""}
          >
            <p>Create your Profile</p>
          </div>
          <div className="vertical-line"></div>
          <div
            key={"Unlock A91"}
            onClick={() => setActiveOption("Unlock A91")}
            className={activeOption === "Unlock A91" ? "active" : ""}
          >
            <p>Unlock A91</p>
          </div>
        </div>
      </div>

      {activeOption === "Sign up" && renderSignUp()}
      {activeOption === "Get Onboarded" && renderGetOnboarded()}
      {activeOption === "Create your Profile" && renderCreateProfile()}
      {activeOption === "Unlock A91" && renderUnlockA91()}
    </div>
  );
};

export default AgentOnboardOption;

import React, { useState, useEffect } from "react";
import "../Style/AgentOnboardOption.css";
import logo from "../Asset/Navbar/a91.png";
import axios from "axios";

import {
  IoIosCall,
  IoMdMail,
  IoIosGlobe,
  IoLogoFacebook,
} from "react-icons/io";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  addAgent,
  sendOtp,
  validateOtp,
  updateAgent,
  getAgentById,
} from "../backend";

const AgentOnboardOption = () => {
  const [activeOption, setActiveOption] = useState("Sign up");
  const agentId = localStorage.getItem("id");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {activeOption === "Sign up" && (
        <RenderSignUp setActiveOption={setActiveOption} />
      )}
      {activeOption === "Get Onboarded" && (
        <GetOnboarded setActiveOption={setActiveOption} agentId={agentId} />
      )}
      {activeOption === "Create your Profile" && (
        <CreateProfile setActiveOption={setActiveOption} agentId={agentId} />
      )}
      {activeOption === "Unlock A91" && <UnlockA91 />}
    </div>
  );
};

const UnlockA91 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="renderUnlockA91Container">
      <h2>Welcome to </h2>
      <img src={logo} alt="logo" />
    </div>
  );
};

const CreateProfile = ({ setActiveOption, agentId }) => {
  const [companyName, setCompanyName] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [operatingSince, setOperatingSince] = useState("");
  const [citiesOfOperation, setCitiesOfOperation] = useState("");
  const [areasOfOperation, setAreasOfOperation] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [residentialRental, setResidentialRental] = useState("");
  const [residentialSale, setResidentialSale] = useState("");
  const [commercialRental, setCommercialRental] = useState("");
  const [commercialSale, setCommercialSale] = useState("");
  const [plotRental, setPlotRental] = useState("");
  const [plotSale, setPlotSale] = useState("");
  const [preview, setPreview] = useState(null);
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // Show preview
      // await uploadImage(file); // Automatically upload
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAgentData();
  }, []);

  const fetchAgentData = async () => {
    try {
      const agentRes = await getAgentById(agentId);
      setCompanyName(agentRes.agentCompanyName || "");
      setLocality(agentRes.agentLocality || "");
      setCity(agentRes.agentCity || "");
      setPincode(agentRes.agentPinCode || "");
      setAboutUs(agentRes.agentMoreDetails || "");
      setOperatingSince(agentRes.agentOperatingSince || "");
      setCitiesOfOperation(agentRes.agentCityOperation || "");
      setAreasOfOperation(agentRes.agentAreaOperation || "");
      setSpecialisation(agentRes.agentSpecialisation || "");
        setResidentialRental(
          agentRes.agentConsultationResidentialRentComission || "")
        setResidentialSale(
          agentRes.agentConsultationResidentialSaleComission || "")
        setCommercialRental(
          agentRes.agentConsultationCommercialRentComission || "")
        setCommercialSale(agentRes.agentConsultationCommercialSaleComission || "")
        setPlotRental(agentRes.agentConsultationPlotRentComission || "")
        setPlotSale(agentRes.agentConsultationPlotSaleComission || "")
    } catch (error) {
      console.error("Error fetching agent data:", error);
    }
  };

  const handleUpdate = async () => {
    console.log("In fornt",residentialRental)
    console.log("In fornt",commercialRental)
    console.log("In fornt",plotRental)
    const data= {
      agentCompanyName: companyName,
      agentLocality: locality,
      agentCity: city,
      agentPinCode: pincode,
      agentMoreDetails: aboutUs,
      agentOperatingSince: operatingSince,
      agentCityOperation: citiesOfOperation,
      agentAreaOperation: areasOfOperation,
      agentSpecialisation: specialisation,
      agentConsultationResidentialRentComission: residentialRental,
      agentConsultationResidentialSaleComission: residentialSale,
      agentConsultationCommercialRentComission: commercialRental,
      agentConsultationCommercialSaleComission: commercialSale,
      agentConsultationPlotRentComission: plotRental,
      agentConsultationPlotSaleComission: plotSale,
    }
    try {
      await updateAgent(agentId,data );
      alert("Profile updated successfully!");
      setActiveOption("Unlock A91");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <div className="renderCreateProfileContainer">
        <div className="createProfileLeftContainer">
          <div className="upload-container">
            {!preview ? (
              <div className="circle">
                <div className="inner-circle">
                  <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    "Upload Logo / Photo"
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            ) : (
              <img
                src={preview}
                alt="Preview"
                style={{ width: 140, height: 150, borderRadius: "50%" }}
              />
            )}
          </div>
          <div className="socialMediaIconsDiv">
            <IoIosCall size={35} />
            <IoMdMail size={35} />
            <IoIosGlobe size={35} />
            <IoLogoWhatsapp size={35} />
            <IoLogoFacebook size={35} />
            <IoLogoInstagram size={35} />
            <FaXTwitter size={35} />
            <FaLinkedin size={35} />
            <FaYoutube size={35} />
          </div>
        </div>

        <div className="createProfileRightContainer">
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name / Individual Name"
          />
          <div className="agentAddressDiv">
            <input
              type="text"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              placeholder="Locality*"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City*"
            />
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Pincode*"
            />
          </div>
          <div className="aboutAgentContainer_cyp">
            <textarea
              value={aboutUs}
              onChange={(e) => setAboutUs(e.target.value)}
              placeholder="About Us"
            />
          </div>
          <div className="agentAddressDiv">
            <input
              type="text"
              value={operatingSince}
              onChange={(e) => setOperatingSince(e.target.value)}
              placeholder="Operating Since*"
            />
            <input
              type="text"
              value={citiesOfOperation}
              onChange={(e) => setCitiesOfOperation(e.target.value)}
              placeholder="Cities of Operation"
            />
            <input
              type="text"
              value={areasOfOperation}
              onChange={(e) => setAreasOfOperation(e.target.value)}
              placeholder="Areas of Operation"
            />
          </div>
          <input
            type="text"
            value={specialisation}
            onChange={(e) => setSpecialisation(e.target.value)}
            placeholder="Specialise in"
          />

          <div className="commissionStructureContainer">
            <h4>Commission Structure</h4>
            <div className="commissionStructureMain">
              {/* Residential Section */}
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
                      <input
                        type="text"
                        placeholder="One Month Rent"
                        value={residentialRental}
                        onChange={(e) =>
                          setResidentialRental(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input
                        type="text"
                        placeholder="2% of Sale Value"
                        value={residentialSale}
                        onChange={(e) =>
                          setResidentialSale(e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="vr_line_1"></div>

              {/* Commercial Section */}
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
                      <input
                        type="text"
                        placeholder="One Month Rent"
                        value={commercialRental}
                        onChange={(e) =>
                          setCommercialRental(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input
                        type="text"
                        placeholder="2% of Sale Value"
                        value={commercialSale}
                        onChange={(e) =>
                          setCommercialSale(e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="vr_line_2"></div>

              {/* Plot Section */}
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
                      <input
                        type="text"
                        placeholder="One Month Rent"
                        value={plotRental}
                        onChange={(e) =>
                          setPlotRental(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="commission_key">
                      <p>For Sale:</p>
                    </div>
                    <div className="commission_value">
                      <input
                        type="text"
                        placeholder="2% of Sale Value"
                        value={plotSale}
                        onChange={(e) => setPlotSale(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="createProfileBtnDiv" onClick={handleUpdate}>
        <button>Update</button>
      </div>
    </div>
  );
};

const GetOnboarded = ({ setActiveOption, agentId }) => {
  const [agentPinCode, setAgentPinCode] = useState("");
  const [agentLocality, setAgentLocality] = useState("");
  const [agentCity, setAgentCity] = useState("");
  const [agentCompanyAddress, setAgentCompanyAddress] = useState("");
  const [agentCityOperation, setAgentCityOperation] = useState("");
  const [agentAreaOperation, setAgentAreaOperation] = useState("");
  const [agentOperatingSince, setAgentOperatingSince] = useState("");
  const [agentSpecialisation, setAgentSpecialisation] = useState("");
  const [agentTeamSize, setAgentTeamSize] = useState("");
  const [agentWebsite, setAgentWebsite] = useState("");
  const [agentSocialMediaUrl, setAgentSocialMediaUrl] = useState("");
  const [agentUrl, setAgentUrl] = useState("");
  const [agentMoreDetails, setAgentMoreDetails] = useState("");
  const [gstImage, setGstImage] = useState(null);
  const [panImage, setPanImage] = useState(null);
  const [reraImage, setReraImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = (e, setter) => {
    console.log("Hello", setter);
    const file = e.target.files[0];

    if (!file) return;

    // Validate file type (Allow only images)
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    // Validate file size (Limit to 5MB, you can change)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert("File size should be less than 5MB.");
      return;
    }

    // Convert file to a short URL
    const shortUrl = URL.createObjectURL(file);
    console.log(shortUrl);
    setter(shortUrl);
  };

  const handleSubmit = async () => {
    try {
      const formData = {
        agentPinCode,
        agentLocality,
        agentCity,
        agentCompanyAddress,
        agentCityOperation,
        agentAreaOperation,
        agentOperatingSince,
        agentSpecialisation,
        agentTeamSize,
        agentWebsite,
        agentSocialMediaUrl,
        agentGSTCertificate: gstImage,
        agentPanCard: panImage,
        agentRERACertificate: reraImage,
        agentMoreDetails,
      };
      console.log("Line 361 Form Data", formData);
      const response = await updateAgent(formData, agentId);
      console.log("Agent updated successfully", response);
      if (response) {
        alert("Agent Details Updated Successfully.");
        setActiveOption("Create your Profile");
      }
    } catch (error) {
      console.error("Error updating agent", error);
    }
  };

  return (
    <div className="renderGetOnboardedContainer">
      <h2 style={{ textAlign: "center" }}>Additional Information</h2>
      <div className="renderGetOnboardedInputDiv">
        <input
          type="text"
          placeholder="Pincode*"
          value={agentPinCode}
          onChange={(e) => setAgentPinCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Locality*"
          value={agentLocality}
          onChange={(e) => setAgentLocality(e.target.value)}
        />
        <input
          type="text"
          placeholder="City*"
          value={agentCity}
          onChange={(e) => setAgentCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Address*"
          value={agentCompanyAddress}
          onChange={(e) => setAgentCompanyAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City of Operations*"
          value={agentCityOperation}
          onChange={(e) => setAgentCityOperation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Area of Operations*"
          value={agentAreaOperation}
          onChange={(e) => setAgentAreaOperation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Operating Since*"
          value={agentOperatingSince}
          onChange={(e) => setAgentOperatingSince(e.target.value)}
        />
        <input
          type="text"
          placeholder="Specialization*"
          value={agentSpecialisation}
          onChange={(e) => setAgentSpecialisation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team Size*"
          value={agentTeamSize}
          onChange={(e) => setAgentTeamSize(e.target.value)}
        />
        <input
          type="text"
          placeholder="Website (if any)"
          value={agentWebsite}
          onChange={(e) => setAgentWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Social Media (if any)"
          value={agentSocialMediaUrl}
          onChange={(e) => setAgentSocialMediaUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Url"
          value={agentUrl}
          onChange={(e) => setAgentUrl(e.target.value)}
        />
        <label
          htmlFor="gstUpload"
          style={{ cursor: "pointer" }}
          className="upload-label"
        >
          Upload GST Certificate
        </label>
        <input
          id="gstUpload"
          type="file"
          style={{ display: "none", border: "1px solid black" }}
          onChange={(e) => handleFileChange(e, setGstImage)}
        />
        {gstImage && <img src={gstImage} alt="GST Certificate" width={100} />}

        <label
          htmlFor="panUpload"
          style={{ cursor: "pointer" }}
          className="upload-label"
        >
          Upload PAN Card
        </label>
        <input
          id="panUpload"
          type="file"
          style={{ display: "none", border: "1px solid black" }}
          onChange={(e) => handleFileChange(e, setPanImage)}
        />
        {panImage && <img src={panImage} alt="PAN Card" width={100} />}
        <label
          htmlFor="reraUpload"
          style={{ cursor: "pointer" }}
          className="upload-label"
        >
          Upload RERA Certificate
        </label>
        <input
          id="reraUpload"
          type="file"
          style={{ display: "none", border: "1px solid black" }}
          onChange={(e) => handleFileChange(e, setReraImage)}
        />
        {reraImage && <img src={reraImage} alt="PAN Card" width={100} />}
      </div>

      <div className="aboutAgentContainer">
        <textarea
          placeholder="About Us"
          value={agentMoreDetails}
          onChange={(e) => setAgentMoreDetails(e.target.value)}
        />
      </div>
      <div className="agentGetOnboardBtnContainer" onClick={handleSubmit}>
        <button>Submit</button>
      </div>
    </div>
  );
};

const RenderSignUp = ({ setActiveOption }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [cityOfOperations, setCityOfOperations] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [isEmailOtpValid, setIsEmailOtpValid] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addAgent({
        agentFirstName: firstName,
        agentLastName: lastName,
        agentEmail: email,
        agentPhoneNumber: phoneNumber,
        agentCityOperation: cityOfOperations,
        agentCompanyName: companyName,
        agentPreferredTime: preferredTime,
      });
      if (response) {
        console.log("Agent registered successfully", response);
        localStorage.setItem("id", response.agent._id);
        alert("Agent registered successfully.");
        setActiveOption("Get Onboarded");
      }
    } catch (error) {
      console.error("Error registering agent", error);
    }
  };

  const countryCodes = [
    { code: "+91", label: "India" },
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" },
    { code: "+61", label: "Australia" },
  ];

  const sendEmailOtp = async () => {
    if (!email) {
      alert("Please enter email!");
      return;
    }
    try {
      const response = await sendOtp(email);
      if (response) {
        setEmailOtpSent(true);
        alert("OTP sent to your email.");
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email OTP", error);
      alert("An error occurred while sending the OTP.");
    }
  };

  const validateEmailOtp = async () => {
    try {
      const response = await validateOtp(email, emailOtp);
      if (response) {
        setIsEmailOtpValid(true);
        alert("Email OTP validated successfully.");
      } else {
        alert("Invalid email OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error validating email OTP", error);
      alert("An error occurred while validating the OTP.");
    }
  };

  return (
    <div className="agentRegisterContainer">
      <h2 style={{ textAlign: "center" }}>Registration - Agent</h2>
      <form onSubmit={handleSubmit}>
        <div className="agentRegis-form-11">
          <div className="regis-input">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="regis-input">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="regis-input">
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="regis-input">
            {!emailOtpSent && !isEmailOtpValid && (
              <button
                type="button"
                onClick={sendEmailOtp}
                className="verifi-btn"
                style={{
                  padding: "14px 5px",
                  backgroundColor: "#fff",
                  width: "90%",
                  margin: "auto",
                }}
              >
                Send Email OTP
              </button>
            )}
            {emailOtpSent && !isEmailOtpValid && (
              <div style={{ display: "flex", width: "90%", margin: "auto" }}>
                <input
                  type="text"
                  placeholder="OTP*"
                  value={emailOtp}
                  onChange={(e) =>
                    setEmailOtp(e.target.value.replace(/\D/g, ""))
                  }
                  maxLength={6}
                />
                <button
                  type="button"
                  onClick={validateEmailOtp}
                  className="verifi-btn"
                  style={{ padding: "6px", backgroundColor: "#fff" }}
                >
                  Validate Email OTP
                </button>
              </div>
            )}
            {isEmailOtpValid && (
              <input
                type="text"
                placeholder="Email OTP"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, ""))}
                maxLength={6}
              />
            )}
          </div>

          <div className="regis-input">
            <div
              className="phone-input-container"
              style={{
                display: "flex",
                border: "1px solid gray",
                paddingLeft: "20px",
                width: "90%",
                margin: "auto",
                borderRadius: "15px",
              }}
            >
              <select
                className="country-code-dropdown"
                style={{ border: "none", outline: "none" }}
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
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
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>
          </div>
          <div className="regis-input">
            <input
              type="text"
              placeholder="City Of Operations"
              value={cityOfOperations}
              onChange={(e) => setCityOfOperations(e.target.value)}
            />
          </div>
          <div className="regis-input">
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="regis-input">
            <input
              type="text"
              placeholder="Preferred Time To Connect"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
            />
          </div>
        </div>
        <div className="agentRegisterBtnDiv">
          <button type="submit" className="agentRegisterBtn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgentOnboardOption;

import React, { useState } from "react";
import "../Style/Login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";
import { registerUser, sendOtp, validateOtp } from "../backend";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.js";

function Register({ setShowSignupComponent, setAccount, setShowLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [phone, setPhone] = useState(""); // For future use
  const [phoneOtp, setPhoneOtp] = useState(""); // For future use
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [isEmailOtpValid, setIsEmailOtpValid] = useState(false);

  const closeSignupComponent = () => {
    setShowSignupComponent(false);
  };

  const handleLoginForm = () => {
    setShowSignupComponent(false);
    setShowLogin(true);
  };
  const googleLogin = async () => {
    signInWithPopup(auth, provider).then(async (result) => {
      setEmail(result.user.email);
    });
  };
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
  // Function to handle sending OTP to the email
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

  // Function to validate the email OTP
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

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailOtpValid) {
      alert("Please validate your email OTP before registering.");
      return;
    }

    const userData = {
      userFirstName: firstName,
      userLastName: lastName,
      userEmail: email,
      userPhoneNumber: phone, // This will be used for future implementation
    };

    try {
      const response = await registerUser(userData);
      if (response) {
        alert("Registration successful!");
        setShowSignupComponent(false);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering user", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="register-main-container">
      <div
        className="overlay1"
        onClick={() => setShowSignupComponent(false)}
      ></div>
      <div className="signup-component-container">
        <div className="register-container">
          <div className="regis-heading">
            <h1 style={{ textAlign: "center" }}>Register</h1>
            <RiCloseLargeFill
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={closeSignupComponent}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="regis-form-11">
              <div className="regis-input">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="regis-input">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="regis-input">
                <input
                  type="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div
                className="regis-input"
                style={{
                  flexDirection: "row",
                  width: emailOtpSent && !isEmailOtpValid ? "90%" : "",
                  margin: emailOtpSent && !isEmailOtpValid ? "auto" : "",
                }}
              >
                {!emailOtpSent && !isEmailOtpValid && (
                  <button
                    type="button"
                    onClick={sendEmailOtp}
                    className="verifi-btn"
                    style={{
                      padding: "14px 5px",
                      width: "90%",
                      margin: "auto",
                    }}
                  >
                    Send Email OTP
                  </button>
                )}
                {emailOtpSent && !isEmailOtpValid && (
                  <div style={{ display: "flex" }}>
                    <input
                      type="number"
                      placeholder="OTP*"
                      value={emailOtp}
                      onChange={(e) => setEmailOtp(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={validateEmailOtp}
                      className="verifi-btn"
                      style={{ padding: "6px" }}
                    >
                      Validate Email Otp
                    </button>
                  </div>
                )}
                {isEmailOtpValid && (
                  <div style={{ display: "flex", width: "100%" }}>
                    <input
                      type="number"
                      placeholder="OTP*"
                      value={emailOtp}
                      onChange={(e) => setEmailOtp(e.target.value)}
                      required
                    />
                  </div>
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
                    onChange={(e) =>
                      setPhone(
                        (prev) => `${e.target.value}${prev.split(" ")[1] || ""}`
                      )
                    } // Update country code
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
                    onChange={(e) =>
                      setPhone(
                        (prev) => `${prev.split(" ")[0]} ${e.target.value}`
                      )
                    } // Update phone number
                  />
                </div>
              </div>
              <div className="regis-input">
                <input
                  type="number"
                  placeholder="OTP*"
                  value={phoneOtp}
                  onChange={(e) => setPhoneOtp(e.target.value)}
                  required
                  // disabled={!isEmailOtpValid}
                />
                {/* {phoneOtpSent && !isPhoneOtpValid && (
                  <button type="button" onClick={validatePhoneOtp}>
                    Validate Phone OTP
                  </button>
                )} */}
              </div>
              {/* </div> */}
            </div>
            <div className="regis-input1">
              <input type="checkbox" className="regi-inpu" required />
              <p>
                By clicking you agree to{" "}
                <Link className="p-link">Terms and Conditions</Link>
              </p>
            </div>
            <button className="reg-btn1" type="submit">
              Register
            </button>
          </form>

          <div className="las-footer33">
            <div>
              <p>I have an account?</p>
              <Link
                className="las-btn-44"
                onClick={() => {
                  closeSignupComponent();
                  handleLoginForm();
                }}
              >
                Login
              </Link>
            </div>
            <Link className="register-link" onClick={googleLogin}>
              <div>
                <p>Register with Google</p>
                <div>
                  <FcGoogle
                    style={{
                      borderRadius: "100px",
                      border: "1px solid black",
                      padding: "2px",
                      fontSize: "20px",
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

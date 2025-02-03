import React, { useState } from "react";
import "../Style/Login.css";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { loginUser, sendOtp, validateOtp } from "../backend";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.js";
import { useAuth } from "./UserContext.js";
function Login({ setShowSignupComponent, setAccount, setShowLogin }) {
  const { currentUser, isLoggedIn, login, setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [isEmailOtpValid, setIsEmailOtpValid] = useState(false);

  const handleSignupForm = () => {
    setShowSignupComponent(true);
    setAccount(false);
    setShowLogin(false);
  };

  const closeLoginComponent = () => {
    setShowLogin(false);
  };

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
    if (!emailOtp) {
      alert("Please enter the OTP!");
      return;
    }
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
  const googleLogin = async () => {
    const e = null;
    signInWithPopup(auth, provider).then(async (result) => {
      handleLogin(e, result.user.email);
    });
  };
  const handleLogin = async (e = null, email) => {
    console.log("Line 71")
    if (e) e.preventDefault();
    if (e!==null && !isEmailOtpValid) {
      alert("Please validate your OTP before logging in.");
      return;
    }
    console.log("Line 77")
    try {
      console.log("Line 79",email)
      const response = await loginUser(email);
      console.log("Line 80")
      if (response) {
        login(response.token);
        setShowLogin(false);
        alert("Login successful!");
        console.log("Line 82")
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="login-main-container">
      <div className="overlay"></div>
      <div className="login-container">
        <div className="register-container">
          <div className="regis-heading">
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <RiCloseLargeFill
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={closeLoginComponent}
            />
          </div>

          <form onSubmit={(e)=>{handleLogin(e, email)}}>
            <div className="login-input">
              <div className="login-second-div">
                <input
                  type="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: "none" }}
                  required
                />
              </div>
            </div>

            <div className="login-input">
              {!emailOtpSent && !isEmailOtpValid && (
                <button
                  type="button"
                  onClick={sendEmailOtp}
                  className="verifi-btn"
                  style={{
                    padding: "14px 5px",
                    width: "90%",
                    margin: "auto",
                    backgroundColor: "white",
                    border: "1px solid transparent",
                  }}
                >
                  Send Email OTP
                </button>
              )}

              {emailOtpSent && !isEmailOtpValid && (
                <>
                  <div className="login-second-div">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={emailOtp}
                      onChange={(e) => setEmailOtp(e.target.value)}
                      style={{ border: "none" }}
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={validateEmailOtp}
                    className="verifi-btn"
                    style={{
                      padding: "14px 5px",
                      width: "55%",
                      margin: "auto",
                      margin: "-4px -13px",
                    }}
                  >
                    Validate OTP
                  </button>
                </>
              )}

              {isEmailOtpValid && (
                <div className="login-second-div">
                  <input
                    type="text"
                    placeholder="OTP Validated"
                    value={emailOtp}
                    disabled
                    style={{ border: "none", color: "green" }}
                  />
                </div>
              )}
            </div>

            <div className="link-ff">
              <Link className="link-forgot">Forgot Password..?</Link>
            </div>
            <div className="regis-input1">
              <input type="checkbox" className="regi-inpu" required />
              <p>
                By clicking you agree to{" "}
                <Link className="p-link">Terms and Conditions</Link>
              </p>
            </div>
            <button
              type="submit"
              className="reg-btn1"
              // disabled={!isEmailOtpValid}
            >
              Login
            </button>
          </form>

          <div className="las-footer33">
            <div>
              <p style={{ fontSize: "14px" }}>Don't have an account?</p>
              <Link
                className="las-btn-44"
                onClick={() => {
                  handleSignupForm();
                }}
              >
                Register
              </Link>
            </div>
            <Link className="register-link">
              <div onClick={googleLogin}>
                <p style={{ fontSize: "14px" }}>Continue with Google</p>
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

export default Login;

import React from "react";
import "../Style/Login.css";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Login({ setShowSignupComponent, setAccount, setShowLogin }) {
  const handleSignupForm = () => {
    setShowSignupComponent(true);
    setAccount(false);
    setShowLogin(false);
  };

  const closeLoginComponent = () => {
    setShowLogin(false);
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

          <form>
            <div className="login-input">
              <div className="login-second-div">
                <input
                  placeholder="Phone Number / Email ID"
                  style={{ border: "none" }}
                />
              </div>
              {/* <div className="login-third-div">
                    <button>Send OTP</button>
                  </div> */}
            </div>
            <div className="login-input">
              <div className="login-second-div">
                <input placeholder="OTP" style={{ border: "none" }} />
              </div>
              {/* <div className="login-third-div">
                    <button>Verify OTP</button>
                  </div> */}
            </div>

            <div className="link-ff">
              <Link className="link-forgot">Forgot Password..?</Link>
            </div>
            <div className="regis-input1">
              <input type="checkbox" className="regi-inpu" />
              <p>
                By clicking you agree to{" "}
                <Link className="p-link">Terms and Conditions</Link>
              </p>
            </div>
            <button className="reg-btn1">Login</button>
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
              <div>
                <p style={{ fontSize: "14px" }}>Continue with google</p>
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
        </div>{" "}
        {/* Pass a callback to close after login */}
      </div>
    </div>
  );
}

export default Login;

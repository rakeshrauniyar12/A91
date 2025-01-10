import React from "react";
import "../Style/Login.css"
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";

function Register({ setShowSignupComponent, setAccount, setShowLogin }) {
  const closeSignupComponent = () => {
    setShowSignupComponent(false);
  };

  const handleLoginForm = () => {
    setShowSignupComponent(false);
    setShowLogin(true);
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

          <form>
            <div className="regis-form-11">
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
                <input type="number" placeholder="OTP*" />
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
                <input type="number" placeholder="OTP*" />
              </div>
            </div>
            <div className="regis-input1">
              <input type="checkbox" className="regi-inpu" />
              <p>
                By clicking you agree to{" "}
                <Link className="p-link">Terms and Conditions</Link>
              </p>
            </div>
            <Link to={"/accountindividualdashboard"}>
              <button className="reg-btn1" onClick={closeSignupComponent}>
                Register
              </button>
            </Link>
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
            <Link className="register-link">
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

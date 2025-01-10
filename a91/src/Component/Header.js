import React, { useState, useEffect } from "react";
import "../Style/Header.css";
import "../Style/Hfirst.css";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../Asset/Navbar//a91.png";
import NavSecond from "./NavSecond";
import NavbarThird from "./NavbarThird";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(1);
  const [imageHeight, setImageHeight] = useState(200);
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [showSignupComponent, setShowSignupComponent] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAccount, setAccount] = useState(false);
  const [showOptionsInNavbar, setShowOptionsInNavbar] = useState(false);

  useEffect(() => {
    const handleScrolls = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200; // Total scroll range
      const offset = maxScroll * 0.9; // 90% of the scroll range

      let newOpacity = 1;
      let newHeight = 200; // Full height of the image

      if (scrollY > offset) {
        // Start reducing opacity and height after 90% of the scroll range
        newOpacity = Math.max(1 - (scrollY - offset) / (maxScroll - offset), 0);
        newHeight = Math.max(200 * newOpacity, 0); // Reduce height proportionally
      }

      setOpacity(newOpacity);
      setImageHeight(newHeight);
    };

    window.addEventListener("scroll", handleScrolls);

    return () => {
      window.removeEventListener("scroll", handleScrolls);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hfirstOption = document.querySelector(".header-main-container");
      const navbar = document.querySelector(".h-logo-1");

      if (hfirstOption && navbar) {
        const hfirstOffsetTop = hfirstOption.offsetTop;
        const navbarHeight = navbar.offsetHeight;
        console.log("Navbar Height:", navbarHeight);
        console.log("hfirstOffsetTop:", hfirstOffsetTop);
        if (scrollPosition + navbarHeight >= hfirstOffsetTop) {
          setShowOptionsInNavbar(true);
          console.log("Hello Scroll");
        } else {
          setShowOptionsInNavbar(false);
        }
      }
      console.log("Scroll Position:", scrollPosition);

      console.log("showOptionsInNavbar:", showOptionsInNavbar);
      setShowFirstComponent(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const hiddenPaths = ["/", "/agentregister", "/property"];

  const showOptionsInNavbars = !hiddenPaths.includes(location.pathname);
  return (
    <div className="header-main-container">
      <div className="header-main-container-content">
        <div className="h-logo-1" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </div>
        {(showOptionsInNavbar || showOptionsInNavbars) && <NavSecond />}

        <NavbarThird
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setAccount={setAccount}
          setShowSignupComponent={setShowSignupComponent}
          setHomeDropdownOpen={setHomeDropdownOpen}
        />
      </div>
      {showLogin && (
        <Login
          setAccount={setAccount}
          setShowSignupComponent={setShowSignupComponent}
          setShowLogin={setShowLogin}
        />
      )}
      {showSignupComponent && (
        <Register
          setShowSignupComponent={setShowSignupComponent}
          setShowLogin={setShowLogin}
        />
      )}
    </div>
  );
};

export default Header;

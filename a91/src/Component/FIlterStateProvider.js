import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create Context
const FilterStateContext = createContext();

// Create a custom hook for easier access
export const useFilterState = () => useContext(FilterStateContext);

 const FilterStateProvider = ({ children }) => {
  const navigate = useNavigate();
  const [filterState, setFilterState] = useState("Select an agent");
  const [selectedPurpose, setSelectedPurpose] = useState("Purpose");
  const [selectedPurposeBanner, setSelectedPurposeBanner] = useState("Purpose");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignupComponent, setShowSignupComponent] = useState(false);
  const [isAccount, setAccount] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // For managing dropdown state
  const [selectedCity, setSelectedCity] = useState("City");
  const [selectedOwnRent, setSelectedOwnRent] = useState("Own/Rent");
  const [isModalOpen, setIsModalOpen] = useState(false); // For search modal
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [isCityRotate, setIsCityRotate] = useState(false);
  const [showOwnDropdown, setShowOwnDropdown] = useState(false);
  const [isOwnRotate, setIsOwnRotate] = useState(false);
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [isPurRotate, setIsPurRotate] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [selectedCityBanner, setSelectedCityBanner] = useState(null);
  const [selectedOwnOrRent, setSelectedOwnOrRent] = useState(null);
  const [isPurRotateHeader, setIsPurRotateHeader] = useState(false);
  const [isOwnRotateHeader, setIsOwnRotateHeader] = useState(false);
  const [isCityRotateHeader, setIsCityRotateHeader] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [showOwnDropdownHeader, setShowOwnDropdownHeader] = useState(false);
  const [showPurposeDropdownHeader, setShowPurposeDropdownHeader] =
    useState(false);
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showCityDropdownHeader, setShowCityDropdownHeader] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [imageHeight, setImageHeight] = useState(200);
  const [showOptionsInNavbar, setShowOptionsInNavbar] = useState(false);
  const isDefaultValue = (value, defaultValue) => value === defaultValue;
  const [dropdownState, setDropdownState] = useState({
    city: false,
    locality: false,
    ownRent: false,
    purpose: false,
    bedroom: false,
    bathroom: false,
  });

  const [selectedValues, setSelectedValues] = useState({
    city: "City",
    locality: "Locality",
    ownRent: "Own/Rent",
    purpose: "Purpose",
    bedroom: "Bedroom",
    bathroom: "Bathroom",
  });

  const dropdownOptions = {
    city: ["Mumbai", "Delhi", "Kolkata", "Bengaluru"],
    locality: ["Locality 1", "Locality 2", "Locality 3"],
    ownRent: ["Own", "Rent"],
    purpose: ["Residential", "Commercial", "Plot"],
    bedroom: ["1", "2", "3", "4+"],
    bathroom: ["1", "2", "3", "4+"],
  };

  const toggleDropdown = (key) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const selectValue = (key, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };
  const goToPropertyPage = () => {
    setAccount(false);
    setActiveDropdown(null);
    navigate("/property");
  };
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };
  const goToDetailPage = () => {
    setAccount(false);
    setActiveDropdown(null);
    navigate("/channelpartner");
  };
  const handleOptionClick = (path) => {
    navigate(path);
    setHomeDropdownOpen(false);
    setActiveDropdown(null);
  };
  const goToDashboard = () => {
    setAccount(false);
    setActiveDropdown(null);
    navigate("/dashboard");
  };
  return (
    <FilterStateContext.Provider
      value={{
        dropdownState,
        selectedValues,
        dropdownOptions,
        selectValue,
        toggleDropdown,
        setSelectedValues,
        imageHeight,
        selectedCityBanner,
        setSelectedCityBanner,
        isFilterModalOpen,
        setIsFilterModalOpen,
        setImageHeight,
        setIsPurRotateHeader,
        setIsOwnRotateHeader,
        setIsCityRotateHeader,
        showOptionsInNavbar,
        setShowOptionsInNavbar,
        isPurRotateHeader,
        showFirstComponent,
        setShowFirstComponent,
        isOwnRotateHeader,
        isCityRotateHeader,
        selectedOwnOrRent,
        setSelectedOwnOrRent,
        showOwnDropdownHeader,
        setShowOwnDropdownHeader,
        showPurposeDropdownHeader,
        setShowPurposeDropdownHeader,
        showCityDropdownHeader,
        setShowCityDropdownHeader,
        opacity,
        setOpacity,
        selectedCityBanner,
        setSelectedCityBanner,
        isPurRotate,
        setIsPurRotate,
        showPurposeDropdown,
        setShowPurposeDropdown,
        toggleFilterModal,
        handleOptionClick,
        isOwnRotate,
        setIsOwnRotate,
        filterState,
        setFilterState,
        showCityDropdown,
        showOwnDropdown,
        setShowOwnDropdown,
        isCityRotate,
        setIsCityRotate,
        showCityDropdown,
        setShowCityDropdown,
        isDefaultValue,
        goToDashboard,
        goToDetailPage,
        goToPropertyPage,
        selectedPurpose,
        setSelectedPurpose,
        selectedPurposeBanner,
        setSelectedPurposeBanner,
        showLogin,
        setShowLogin,
        showSignupComponent,
        setShowSignupComponent,
        isAccount,
        setAccount,
        activeDropdown,
        setActiveDropdown,
        selectedCity,
        setSelectedCity,
        selectedOwnRent,
        setSelectedOwnRent,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </FilterStateContext.Provider>
  );
};


export default FilterStateProvider;
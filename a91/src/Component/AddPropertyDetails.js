import React, { useState } from "react";
import "../Style/AddPropertyDetails.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { addProperty } from "../backend";

const AddPropertyDetails = ({ setSelectedOption }) => {
  const [propertyName, setPropertyName] = useState("");
  const [propertyBedType, setPropertyBedType] = useState("");
  const [propertyLandSize, setPropertyLandSize] = useState("");
  const [propertyDistance, setPropertyDistance] = useState("");
  const [propertyStatus, setPropertyStatus] = useState("");
  const [propertyCity, setPropertyCity] = useState("");
  const [propertyDeveloper, setPropertyDeveloper] = useState("");
  const [propertyPinCode, setPropertyPinCode] = useState("");
  const [propertyLocality, setPropertyLocality] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyTowerPhaseBuilding, setPropertyTowerPhaseBuilding] =
    useState("");
  const [propertyFloorNumber, setPropertyFloorNumber] = useState("");
  const [propertyUnitNumber, setPropertyUnitNumber] = useState("");
  const [propertyNickName, setPropertyNickName] = useState("");
  const [propertyBuitSizeCarpetSize, setPropertyBuitSizeCarpetSize] =
    useState("");
  const [propertyNumberOfBedrooms, setPropertyNumberOfBedrooms] = useState("");
  const [propertyNumberOfBathrooms, setPropertyNumberOfBathrooms] =
    useState("");
  const [propertyNumberOfCarParks, setPropertyNumberOfCarParks] = useState("");
  const [propertyTypeOfFurnishing, setPropertyTypeOfFurnishing] = useState("");
  const [propertyIsAvailableRentSale, setPropertyIsAvailableRentSale] =
    useState("");
  const [propertyExpectedSalePrice, setPropertyExpectedSalePrice] =
    useState("");
  const [propertyExpectedRent, setPropertyExpectedRent] = useState("");
  const [propertyRentalDeposit, setPropertyRentalDeposit] = useState("");
  const [propertyMaintenanceIncExcl, setPropertyMaintenanceIncExcl] =
    useState("");
  const [propertyAvailableFrom, setPropertyAvailableFrom] = useState("");
  const [propertyCurrentStatus, setPropertyCurrentStatus] = useState("");
  const [propertyViewingFrom, setPropertyViewingFrom] = useState("");
  const [propertyViewingNotice, setPropertyViewingNotice] = useState("");
  const [propertyViewingSlot, setPropertyViewingSlot] = useState("");
  const [propertyHelpersRoom, setPropertyHelpersRoom] = useState("");
  const [isBalcony, setIsBalcony] = useState("");
  const [additionalAreas, setAdditionalAreas] = useState("");
  const [appliances, setAppliances] = useState("");
  const [isGarden, setIsGarden] = useState("");
  const [isPetsAllowed, setIsPetsAllowed] = useState("");
  const [isRenovated, setIsRenovated] = useState("");
  const [isMainDoorFacin, setIsMainDoorFacin] = useState("");
  const [ageOfProperty, setAgeOfProperty] = useState("");
  const [geoLocation, setGeoLocation] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");

  const handleSubmit = async (value) => {
    if (value === "add") {
      const formData = {
        userId: "67b1fe33257088da9f4069a1",
        propertyName,
        propertyBedType,
        propertyLandSize,
        propertyDistance,
        propertyStatus,
        propertyCity,
        propertyDeveloper,
        propertyPinCode,
        propertyLocality,
        propertyAddress,
        propertyType,
        propertyTowerPhaseBuilding,
        propertyFloorNumber,
        propertyUnitNumber,
        propertyNickName,
        propertyBuitSizeCarpetSize,
        propertyNumberOfBedrooms,
        propertyNumberOfBathrooms,
        propertyNumberOfCarParks,
        propertyTypeOfFurnishing,
        propertyIsAvailableRentSale,
        propertyExpectedSalePrice,
        propertyExpectedRent,
        propertyRentalDeposit,
        propertyMaintenanceIncExcl,
        propertyAvailableFrom,
        propertyCurrentStatus,
        propertyViewingFrom,
        propertyViewingNotice,
        propertyViewingSlot,
        propertyHelpersRoom,
        isBalcony,
        additionalAreas,
        appliances,
        isGarden,
        isPetsAllowed,
        isRenovated,
        isMainDoorFacin,
        ageOfProperty,
        geoLocation,
        propertyDescription,
      };
      console.log("Line 100", formData);
      try {
        const response = await addProperty(formData);

        if (response.ok) {
          alert("Property saved successfully!");
          setSelectedOption("Photographs");
        } else {
          alert("Error saving property.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to save property.");
      }
    } else {
      const formData = {
        propertyName,
        propertyBedType,
        propertyLandSize,
        propertyDistance,
        propertyStatus,
        propertyCity,
        propertyDeveloper,
        propertyPinCode,
        propertyLocality,
        propertyAddress,
        propertyType,
        propertyTowerPhaseBuilding,
        propertyFloorNumber,
        propertyUnitNumber,
        propertyNickName,
        propertyBuitSizeCarpetSize,
        propertyNumberOfBedrooms,
        propertyNumberOfBathrooms,
        propertyNumberOfCarParks,
        propertyTypeOfFurnishing,
        propertyIsAvailableRentSale,
        propertyExpectedSalePrice,
        propertyExpectedRent,
        propertyRentalDeposit,
        propertyMaintenanceIncExcl,
        propertyAvailableFrom,
        propertyCurrentStatus,
        propertyViewingFrom,
        propertyViewingNotice,
        propertyViewingSlot,
        propertyHelpersRoom,
        isBalcony,
        additionalAreas,
        appliances,
        isGarden,
        isPetsAllowed,
        isRenovated,
        isMainDoorFacin,
        ageOfProperty,
        geoLocation,
        propertyDescription,
      };

      try {
        const response = await addProperty(formData);
       
        if (response.ok) {
          alert("Property saved successfully!");
        } else {
          alert("Error saving property.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to save property.");
      }
    }
  };

  return (
    <div className="property-main-container">
      <div className="property-all-options">
        <div className="pro-1">
          <input
            placeholder="PID Number (system generated)"
            className="pro-input"
          />
        </div>
        <div className="pro-2">
          <input
            placeholder="City*"
            value={propertyCity}
            onChange={(e) => setPropertyCity(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Developer*"
            value={propertyDeveloper}
            onChange={(e) => setPropertyDeveloper(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Project Name*"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-1">
          <input
            placeholder="Pincode*"
            value={propertyPinCode}
            onChange={(e) => setPropertyPinCode(e.target.value)}
            className="pro-input"
          />
        </div>
        <div className="pro-2">
          <input
            placeholder="Locality"
            value={propertyLocality}
            onChange={(e) => setPropertyLocality(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-1">
          <input
            placeholder="Address* (from records)"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
            className="pro-input"
          />
        </div>
        <div className="pro-2">
          <input
            placeholder="Type of Property*"
            required
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Select Tower/Phase/Building*"
            required
            value={propertyTowerPhaseBuilding}
            onChange={(e) => setPropertyTowerPhaseBuilding(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-1">
          <input
            placeholder="Floor Number*"
            value={propertyFloorNumber}
            onChange={(e) => setPropertyFloorNumber(e.target.value)}
            className="pro-input"
          />
        </div>
        <div className="pro-1">
          <input
            placeholder="Unit Number*"
            value={propertyUnitNumber}
            onChange={(e) => setPropertyUnitNumber(e.target.value)}
            className="pro-input"
          />
        </div>
        <div className="pro-1">
          <input
            placeholder="Nick Name*"
            value={propertyNickName}
            onChange={(e) => setPropertyNickName(e.target.value)}
            className="pro-input"
          />
        </div>
        <div className="pro-3">
          <div className="pro-1" style={{ flex: 1 }}>
            <input
              placeholder="Land Size"
              value={propertyLandSize}
              onChange={(e) => setPropertyLandSize(e.target.value)}
              className="pro-input"
            />
          </div>
          <div className="pro-2" style={{ width: "20%" }}>
            <input placeholder="sqft" required className="pro-input" />
            <RiArrowDropDownLine style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="pro-3">
          <div className="pro-1" style={{ flex: 1 }}>
            <input
              placeholder="Builtup Size/Carpet Area*"
              value={propertyBuitSizeCarpetSize}
              onChange={(e) => setPropertyBuitSizeCarpetSize(e.target.value)}
              className="pro-input"
            />
          </div>
          <div className="pro-2" style={{ width: "20%" }}>
            <input placeholder="sqft" required className="pro-input" />
            <RiArrowDropDownLine style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="pro-2">
          <input
            placeholder="No of Bedrooms*"
            value={propertyNumberOfBedrooms}
            onChange={(e) => setPropertyNumberOfBedrooms(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="No of Bathrooms*"
            required
            value={propertyNumberOfBathrooms}
            onChange={(e) => setPropertyNumberOfBathrooms(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="No. of Car Parks*"
            required
            value={propertyNumberOfCarParks}
            onChange={(e) => setPropertyNumberOfCarParks(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Type of Furnishing*"
            required
            value={propertyTypeOfFurnishing}
            onChange={(e) => setPropertyTypeOfFurnishing(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Available for Rent/Sale*"
            required
            value={propertyAvailableFrom}
            onChange={(e) => setPropertyAvailableFrom(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Expected Sale Price*"
            required
            value={propertyExpectedSalePrice}
            onChange={(e) => setPropertyExpectedSalePrice(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Expected Rent*"
            value={propertyExpectedRent}
            onChange={(e) => setPropertyExpectedRent(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Rental Deposit*"
            value={propertyRentalDeposit}
            onChange={(e) => setPropertyRentalDeposit(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Maintenance - (incl. / excl.)*"
            required
            value={propertyMaintenanceIncExcl}
            onChange={(e) => setPropertyMaintenanceIncExcl(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Available from*"
            value={propertyAvailableFrom}
            onChange={(e) => setPropertyAvailableFrom(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Current Status*"
            value={propertyCurrentStatus}
            onChange={(e) => setPropertyCurrentStatus(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Viewing from*"
            value={propertyViewingFrom}
            onChange={(e) => setPropertyViewingFrom(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Viewing Notice*"
            value={propertyViewingNotice}
            onChange={(e) => setPropertyViewingNotice(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Viewing Slots*"
            value={propertyViewingSlot}
            onChange={(e) => setPropertyViewingSlot(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Helpers Room (Yes/No)*"
            required
            value={propertyHelpersRoom}
            onChange={(e) => setPropertyHelpersRoom(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Balcony (Yes/No)*"
            required
            value={isBalcony}
            onChange={(e) => setIsBalcony(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Additional Areas (Multi-Select)*"
            required
            value={additionalAreas}
            onChange={(e) => setAdditionalAreas(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Appliances (Multi-Select)*"
            required
            value={appliances}
            onChange={(e) => setAppliances(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Garden (Yes/No)*"
            required
            value={isGarden}
            onChange={(e) => setIsGarden(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Pets Allowed (Yes/No)*"
            required
            value={isPetsAllowed}
            onChange={(e) => setIsPetsAllowed(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Renovated (Yes/No)*"
            required
            value={isRenovated}
            onChange={(e) => setIsRenovated(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Main Door Facing*"
            required
            value={isMainDoorFacin}
            onChange={(e) => setIsMainDoorFacin(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Age of Property*"
            required
            value={ageOfProperty}
            onChange={(e) => setAgeOfProperty(e.target.value)}
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Geo Location*"
            value={geoLocation}
            onChange={(e) => setGeoLocation(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Active (Y/N)*"
            value={propertyCurrentStatus}
            onChange={(e) => setPropertyCurrentStatus(e.target.value)}
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
      </div>
      <textarea
        placeholder="Add Description"
        className="property-text-area-1"
        value={propertyDescription}
        onChange={(e) => setPropertyDescription(e.target.value)}
      ></textarea>
      <div className="bottom-btn-21">
        <div
          className="bottom-btn-21-1"
          onClick={() => {
            handleSubmit("save");
          }}
        >
          Save as Draft
        </div>
        <div
          className="bottom-btn-21-2"
          onClick={() => {
            handleSubmit("add");
          }}
        >
          Add Property Photos and Videos
        </div>
      </div>
    </div>
  );
};

export default AddPropertyDetails;

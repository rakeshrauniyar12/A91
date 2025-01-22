import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Style/PropertyDetails.css";
import ApartmentCard from "./ApartmentCard";
import { FaAngleDown } from "react-icons/fa6";
import FilterMinMax from "./FilterMinMax";
import FilterModal from "./FilterModal";

const PropertyDetails = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isAmenitiesOpen, setAmenitiesOpen] = useState(false);

  const toggleDescriptionDropdown = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  const toggleAmenitiesDropdown = () => {
    setAmenitiesOpen(!isAmenitiesOpen);
  };

  return (
    <div className="propertyDetailsContainer">
      <FilterMinMax width={"30%"} toggleFilterModal={toggleFilterModal} />
      <div className="propertyDetailTopContainer">
        <ApartmentCard product={product} hideCheckbox={false} />
        <div className="propertyExtraImages">
          <img
            src="https://s3-alpha-sig.figma.com/img/4cc8/eb8e/78fe5015d920b5ae46d3fc98a8454148?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAHh9bCssLcAiuNNb~gISZW3MLarGbp9J~phdcc8f4wyUIEUxrvdNG9N0PjhOQ5YkQo4cbLNe3DKRoA1l5EO1SWYKmRHXbbA8ryRDFDScllgDnHl2Vj2HlCQtSvvnMZ8YUS7vIx~HKA2O2w5rhxQZsbE7znsssYdscmqvqB-W-QUhPQ~hg33lse7G4SrUU9WhPzRgC7W~dC7PMY7t32evoHnr5CZZ28Ieqd8lntW1icP0xfNF1U8XO4qaLbm0Z8vGvozMV1np2YhYlxX9IiTGr-bJShHcY2AQbL~EyQd1evG5UQOv1SqHPG1F2VhGpek8REyhdCI1Us~yVEkpxIOKA__"
            alt="property-image-1"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/ffac/d0f9/3662473dd0dce79c621b342fcfce9313?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VooBV2A-mQqMusyMaPvacEWJ15UIxklVHbXNR~xlEWC3~ILgyEHWX4HFkTDp3dbNOtQEm7mzf7okrWfnCs0gNF2aA8dMz5R9qaoUC3-w0FvVEoeaeNnybqWxHry82TfIVcwotAG234ARNw2fyLTVAkUfq3nZK908g2-wJ6tAiggPGEg2N7mT3FfZP0cJSWfBDrVQFT9Upvqljt4NC6DUWYhQ8riq28D1JhmAQQYXDmXlHizOtHfFWJy7Yzi9ZtWhz8Pmyk~BajA4nLn6JHL19GclR9wyYrI7OfT4oRDvJKGIsb-N8AV1CNHIUpChTjxWgMCfnM8xMwI-rW31gcrpcA__"
            alt="property-image-2"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/f72c/cdbc/0c82cc1a8d0c73a0b83c36b4427caf6d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8l1-9xMzZ3MuxurSBvtFKWd87fotGxWfMMJWfmIJkbkTR0JK3DDRl3g3rGIQJlscKce2TGkmXDw3hxPs6S5ftCSBamyBpOECNlJcWKBdLv98TOg5lr4hJmm8iKBi5rvS-y6BXSTfg96xbkSvu7Zt35lvDnMnK2r08QDp2hiJFp~rMPw9u4IhoXbQHcg2xBKYBGyNYMWb8DPMQYBVI9S79EnsEaw9GtukUA7k9kak0jWVW9W9EYMULaM4poNRtHNKDhq2qiu2jl8FwDZFQeEmGBgKs-duUoPcRNc1kj0EUGYLEBE4XDC2f-U2vUsl9iMOWOz0L6-R~75rLFmhZVjlw__"
            alt="property-image-3"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/41f9/3d47/bc6d8eb960d42a31c9920389f4bc0c46?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vojva~rL3gmcrwDzBtn5SISaCDnbDSuTzkLOmkYzR~q8iUy9QnPYK~CnNdMXhyL4sTgW63DEsmbUItCA5N53BsLVrofpT1tBtMHglwJDDMI1WEeVibZbHKCylQ0FuOdh4w~AeG~qWJoTmjca4GfnE9RszYu0OFsWm378yibPwY3KFCfIGGz~1Yrn6nYQUBPZErsKvMpW6eDrE3Ty7DQHeGCrDpPiIrrV1vZfHwyLINLtp3vLryWBwiujbfymixW5rkZ~5NZPReeYneFk6soZ~aR-uyY038RJDjQOUC5Fr9AC8Xiwe6-GgyIYwfwp~N5CLY-DayIGkbtRUFzgicMz2A__"
            alt="property-image-4"
          />
        </div>
      </div>
      <div className="propertySocietyDeatilsContainer">
        <div className="propertySocietyDeatilsMain">
          <div className="propertySocietyDeatilsMainLeftDiv">
            <h3>Society Overview:</h3>
            <ul>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Developer Address:</strong>
                </div>
                <div className="detailsValue">
                  Total Environment First Floor, Shop No. 4, Adarsh Palm
                  Meadows, Amenities Block, Sy.No.9, R Narayanapura Village, KR
                  Puram Hobli, Bengaluru, Bengaluru Urban, Karnataka, 560066
                </div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Location:</strong>
                </div>
                <div className="detailsValue">North, East</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Type of Development:</strong>
                </div>
                <div className="detailsValue">[Enter type]</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Total No. of Towers:</strong>
                </div>
                <div className="detailsValue">999</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Total Floors:</strong>
                </div>
                <div className="detailsValue">999</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Total No. of Units:</strong>
                </div>
                <div className="detailsValue">999999</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Amenities:</strong>
                </div>
                <div className="detailsValue">999999</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Security:</strong>
                </div>
                <div className="detailsValue">Yes</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Power Backup:</strong>
                </div>
                <div className="detailsValue">Yes</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Lift:</strong>
                </div>
                <div className="detailsValue">Yes</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Piped Gas:</strong>
                </div>
                <div className="detailsValue">Yes</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Water Supplier:</strong>
                </div>
                <div className="detailsValue">Yes</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Power Supplier:</strong>
                </div>
                <div className="detailsValue">Yes</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Completion Date:</strong>
                </div>
                <div className="detailsValue">[Enter date]</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>RERA ID:</strong>
                </div>
                <div className="detailsValue">[Enter ID]</div>
              </li>
            </ul>
          </div>
          <div class="propertySocietyDeatilsMainBottomDiv">
            <h3>Society Changes:</h3>
            <ul>
              <li>Move-in</li>
              <li>Move-out</li>
              <li>Common Area Maintenance</li>
              <li>Club House</li>
              <li>Refundable Deposits</li>
              <li>Temporary Association Membership</li>
              <li>Share Transfer Charges</li>
            </ul>
          </div>
          <div className="propertySocietyDeatilsMainRightDiv">
            <h3>Key Distances:</h3>
            <ul>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Travel:</strong>
                </div>
                <div className="detailsValue">
                  <ul>
                    <li>
                      Airport - Indira Gandhi International Airport - 39.5 kms
                    </li>
                    <li>Metro - Huda City Centre - 2.5 kms</li>
                    <li>Railway - New Delhi Railway Station - 15.7 kms</li>
                  </ul>
                </div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Floor:</strong>
                </div>
                <div className="detailsValue">5th Floor (Out of 10 floors)</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Facing:</strong>
                </div>
                <div className="detailsValue">East</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>No. of Bathrooms:</strong>
                </div>
                <div className="detailsValue">3</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>No. of Car Parks:</strong>
                </div>
                <div className="detailsValue">2</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Garden:</strong>
                </div>
                <div className="detailsValue">Yes</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Balcony:</strong>
                </div>
                <div className="detailsValue">Yes (2 Balconies)</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Helper Rooms:</strong>
                </div>
                <div className="detailsValue">Yes</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Additional Areas:</strong>
                </div>
                <div className="detailsValue">
                  Private Terrace, Servant Quarter
                </div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Age of Property:</strong>
                </div>
                <div className="detailsValue">5 years</div>
              </li>
              <li className="detailsRow">
                <div className="detailsKey">
                  <strong>Renovated:</strong>
                </div>
                <div className="detailsValue">Yes (Renovated in 2022)</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="propertyBottomDropdownContainers">
        <div
          className="propertyDescriptionDropodwnContainer"
          onClick={toggleDescriptionDropdown}
        >
          <div className="dropdownHeader">
            <p>Description:</p>
            <FaAngleDown
              className={`dropdownIcon ${isDescriptionOpen ? "open" : ""}`}
            />
          </div>
          {isDescriptionOpen && (
            <div className="dropdownContent">
              <p
                style={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                • Located in Whitefield, Windmills of your Minds is a gated
                community, of luxury Villas, Duplex Homes & Triplex Homes
              </p>
            </div>
          )}
        </div>
        <div
          className="propertySocietyAmenitiesDropodwnContainer"
          onClick={toggleAmenitiesDropdown}
        >
          <div className="dropdownHeader">
            <p>Society Amenities:</p>
            <FaAngleDown
              className={`dropdownIcon ${isAmenitiesOpen ? "open" : ""}`}
            />
          </div>
          {isAmenitiesOpen && (
            <div className="dropdownContentBottom">
              <div>
                <ul>
                  <li>Swimming Pool</li>
                  <li>Heated Pool</li>
                  <li>Gymnasium</li>
                  <li>Billiards / Snooker</li>
                  <li>Table Tennis</li>
                  <li>Board Games</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Multi-Purpose Hall</li>
                  <li>Cafeteria, Theatre</li>
                  <li>Guest Suites</li>
                  <li>Squash Courts</li>
                  <li>Badminton Courts</li>
                  <li>Tennis Courts</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Basketball Court</li>
                  <li>Children's Play Area</li>
                  <li>Central Greens</li>
                  <li>Golf Simulator</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {isFilterModalOpen && (
        <div className="modal-overlay" onClick={toggleFilterModal}>
          <div
            className="modal-container"
            style={{ padding: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FilterModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;

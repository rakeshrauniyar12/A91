import React, { useState } from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Style/Appointment.css";

const ApartmentCard = ({
  product,
  isAppointmentStatus,
  isVisitedTab,
  isSelected,
  onSelect,
  onReportClick,
}) => {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();

  const handleCalendarClick = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleCalendarClick();
  };

  return (
    <div
      className="product-details-div"
      style={{ backgroundColor: product?.bgColor }}
    >
      {!product?.isAvailable && (
        <div className="noLongerAvailable">
          <p>Property no longer available</p>
        </div>
      )}
      <div className="main-product-ima">
        <img src={product?.productImage} />
        {product?.isAvailable && (
          <div className="bookmark-checkbox-1">
            <input type="checkbox" checked={isSelected} onChange={onSelect} />
          </div>
        )}
      </div>
      <div className="first-div">
        <div className="first-div-left" style={{ flex: 1 }}>
          <p
            style={{
              color: "var(--primary)",
              fontSize: "20px",
              fontWeight: "600",
              marginTop: -1,
            }}
          >
            {product?.productName}
          </p>
          <p>{product?.productAreaName}</p>
          <div className="productDetailsDiv_">
            <div className="productKey_">
              <p>Rent:</p>
            </div>
            <div className="productValue_">
              <p>₹{product?.productRent}</p>
            </div>
          </div>
          <div className="productDetailsDiv_">
            <div className="productKey_">
              <p>Sale:</p>
            </div>
            <div className="productValue_">
              <p>{product?.productSaleType}</p>
            </div>
          </div>
          <div className="productDetailsDiv_">
            <div className="productKey_">
              <FaBed size={26} />
            </div>
            <div className="productValue_">
              <p>{product?.productBedType}</p>
            </div>
          </div>
          <div className="productDetailsDiv_">
            <div className="productKey_">
              <RxDimensions size={26} />
            </div>
            <div className="productValue_">
              <p>{product?.productArea}</p>
            </div>
          </div>
        </div>
        <div className="first-div-right">
          <div>
            <BiSolidLike size={24} style={{ marginRight: "1rem" }} />
            <BiSolidDislike size={24} />
          </div>
          <div style={{ marginTop: "15px" }}>
            <IoVideocamOutline size={24} style={{ marginRight: "1rem" }} />
            <LuNotepadText size={24} />
          </div>
        </div>
      </div>
      <div
        className="product-details-content-ss11"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="productDetailsDiv_">
          <div className="productKey_">
            <IoLocationSharp size={26} />
          </div>
          <div className="productValue_">
            <p>{product?.productDistance}</p>
          </div>
        </div>

        {!isAppointmentStatus && (
          <div>
            <IoShareSocialSharp size={26} />
          </div>
        )}
      </div>
      {isAppointmentStatus && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
            marginBottom: !isVisitedTab ? 15 : 0,
          }}
        >
          <div className="productDetailsDiv_">
            <div className="productKey_">
              <SlCalender size={26} onClick={handleCalendarClick} />
            </div>
            <div className="productValue_">
              {/* <p>{product?.date}</p> */}
              <p>
                {selectedDate
                  ? selectedDate.toLocaleDateString()
                  : "Select Date"}
              </p>
            </div>
          </div>
          <div>
            <IoShareSocialSharp size={26} />
          </div>
        </div>
      )}
      {isVisitedTab && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 5,
          }}
        >
          <div className="productDetailsDiv_">
            <div className="productKey_">
              <CiUser size={26} />
            </div>
            <div
              className="productValue_"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p style={{ marginRight: 10 }}>Agent: Rammu</p>
              <FaWhatsapp size={20} />
              <MdOutlineMail
                size={20}
                style={{ marginRight: 7, marginLeft: 7 }}
              />
              <IoCallOutline size={20} />
            </div>
          </div>
        </div>
      )}
      {isAppointmentStatus && (
        <div className="appointmentVisitedContainer">
          <p style={{ fontSize: "16px", fontWeight: "600" }}>
            {product.appointmentStatus}
          </p>
          {product?.isAgentView && (
            <div>
              <button>{product?.leftBtn}</button>
              <button>{product?.rightBtn}</button>
            </div>
          )}
          {isVisitedTab && (
            <div>
              <button>{product?.leftBtn}</button>
              <button onClick={onReportClick}>{product.rightBtn}</button>
            </div>
          )}
        </div>
      )}

      {calendarVisible && (
        <div className="calender_date_picker_div">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            minDate={today}
          />
        </div>
      )}
    </div>
  );
};

export default ApartmentCard;

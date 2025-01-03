import React from "react";
import locat from "../Asset/Home/Icon/location.png";
import bed from "../Asset/Home/Icon/bed.png";
import like from "../Asset/Home/Icon/dislike.png";
import dislike from "../Asset/Home/Icon/like.png";
import fit from "../Asset/Home/Icon/fit.png";
import note from "../Asset/Home/Icon/note.png";
import rect from "../Asset/Home/Icon/rect.png";
import shhare from "../Asset/Home/Icon/shhare.png";
import video from "../Asset/Home/Icon/video.png";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";

const ApartmentCard = ({ product }) => {
  return (
    <div className="product-details-div">
      <div className="main-product-ima">
        <img src={product.productImage} />
        <div className="bookmark-checkbox-1">
          <input type="checkbox" />
        </div>
      </div>
      <div className="first-div">
        <div className="first-div-left">
          <p
            style={{
              color: "#00913A",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {product.productName}
          </p>
          <p>{product.productAreaName}</p>
          <p
            style={{
              marginTop: "8px",
              color: "#00913A",
              fontWeight: "600",
            }}
          >{`Rent: Rs. ${product.productRent}`}</p>
          <p style={{margin:"7px 0px"}}>{`Sale: ${product.productSaleType}`}</p>
          <div className="product-details-content-ss11">
            <div>
             <FaBed size={24}/>
            </div>
            <p>{product.productBedType}</p>
          </div>
          <div
            className="product-details-content-ss11"
            style={{ margin: "7px 0px" }}
          >
            <div>
             <RxDimensions size={24}/>
            </div>
            <p>{product.productArea}</p>
          </div>
          <div className="product-details-content-ss11">
            <div>
            <IoLocationSharp size={24}/>
            </div>
            <p>{product.productDistance}</p>
          </div>
        </div>
        <div className="first-div-right">
          <div>
            <BiSolidLike  size={24} style={{marginRight:"1rem"}}/>
            <BiSolidDislike  size={24}/>
          </div>
          <div style={{marginTop:"15px"}}>
            <IoVideocamOutline size={24} style={{marginRight:"1rem"}}/>
            <LuNotepadText  size={24}/>
          </div>
          <div>
            <IoShareSocialSharp size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;

import React from "react";
import h1 from "../Asset/Home/h1.png";
import locat from "../Asset/Home/Icon/location.png";
import bed from "../Asset/Home/Icon/bed.png";
import like from "../Asset/Home/Icon/dislike.png";
import dislike from "../Asset/Home/Icon/like.png";
import fit from "../Asset/Home/Icon/fit.png";
import note from "../Asset/Home/Icon/note.png";
import rect from "../Asset/Home/Icon/rect.png";
import shhare from "../Asset/Home/Icon/shhare.png";
import video from "../Asset/Home/Icon/video.png";
import ApartmentCard from "./ApartmentCard";
const InactiveProperty = () => {
  const products = [];
  for (let r = 0; r < 3; r++) {
    products.push({
      productImage: h1,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      isAvailable: true,
    });
  }
  return (
    <div className="active-main-container">
      <div className="product-append-111">
        {products.map((product) => (
    <ApartmentCard product={product}/>
        ))}
      </div>
    </div>
  );
};

export default InactiveProperty;

import React from "react";
import h1 from "../Asset/Home/h1.png";
import ApartmentCard from "./ApartmentCard";
const UnderNegotiation = () => {
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

export default UnderNegotiation;

import React from "react";
import "../Style/Home.css"
import h1 from "../Asset/Home/h1.png";
import locat from "../Asset/Home/Icon/location.png"
import bed from "../Asset/Home/Icon/bed.png"
import like from "../Asset/Home/Icon/dislike.png"
import dislike from "../Asset/Home/Icon/like.png"
import fit from "../Asset/Home/Icon/fit.png"
import note from "../Asset/Home/Icon/note.png"
import rect from "../Asset/Home/Icon/rect.png"
import shhare from "../Asset/Home/Icon/shhare.png"
import video from "../Asset/Home/Icon/video.png"
const HomeDesign1 = () => {
  const products = [];
  for(let r=0;r<6;r++){
    products.push({
      productImage: h1,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
    },)
  }
  return (
    <div className="home-container">
      <div className="product-append-111">
        {products.map((product) => (
          <div className="product-details-div">
             <div className="main-product-ima"><img src={product.productImage}/></div>
             <div className="product-details-content-ss">
             <p style={{color:"#429b6a",fontSize:"20px",fontWeight:"600"}}>{product.productName}</p>
             <div><img src={rect}/></div>
             </div>
             <p>{product.productAreaName}</p>
             <div className="product-details-content-ss">
              <p style={{marginTop:"15px",color:"#429b6a",fontWeight:"600"}}>{`Rent: Rs. ${product.productRent}`}</p>
              <div className="product-details-content-ss1">
                <div><img src={like}/></div>
                <div><img src={dislike}/></div>
                </div>
             </div>
             <div className="product-details-content-ss">
              <p>{`Sale: ${product.productSaleType}`}</p>
              <div className="product-details-content-ss1">
                <div><img src={video}/></div>
                <div><img src={note}/></div>
                </div>
             </div>
             <div className="product-details-content-ss11">
              <div><img src={bed}/></div>
              <p>{product.productBedType}</p>
             </div>
             <div className="product-details-content-ss11" style={{marginTop:"10px",marginBottom:"10px"}}>
              <div><img src={fit}/></div>
              <p>{product.productArea}</p>
             </div>
             <div className="product-details-content-ss">
              <div className="product-details-content-ss11">
              <div><img src={locat}/></div>
              <p>{product.productDistance}</p>
              </div>
              <div>
                <img src={shhare}/>
              </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDesign1;
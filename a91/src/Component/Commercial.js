import React,{useState} from "react";
import "../Style/Home.css"
import h1 from "../Asset/Home/h1.png";
import ApartmentCard from "./ApartmentCard";
import FilterMinMax from "./FilterMinMax";
import FilterModal from "./FilterModal";
const Commercial = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };
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
      isAvailable: true,
    },)
  }
  return (
    <div className="home-container">
      <FilterMinMax toggleFilterModal={toggleFilterModal} width={"30%"}/>
      <div className="product-append-111">
        {products.map((product) => (
          <ApartmentCard product={product}/>
        ))}
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

export default Commercial;

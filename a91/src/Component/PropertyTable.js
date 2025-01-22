import React, { useState } from "react";
import "../Style/PropertyTable.css"
import { FaSearch, FaEdit, FaShareAlt, FaVideo, FaFile } from "react-icons/fa";

const PropertyTable = ({ products }) => {
  const [data, setData] = useState(products);

  const handleAddRow = () => {
    setData([
      ...data,
      {
        nickName: "",
        pid: "",
        typeOfProperty: "",
        city: "",
        locality: "",
        projectName: "",
        rentalValue: "",
        saleValue: "",
        landSize: "",
        builtUpSize: "",
        noOfBedrooms: "",
        typeOfFurnishing: "",
        availableFrom: "",
        noOfVisits: "",
      },
    ]);
  };
console.log(products);
  const handleEdit = (index) => {
    console.log(`Edit row ${index}`);
  };

  return (
    <div style={{ padding: "20px"}}>
      <table border="1" style={{ width: "95%", borderCollapse: "collapse", margin: "auto" }}>
        <thead>
          <tr className="table-header">
          <th></th>
            <th>Nick Name</th>
            <th>PID</th>
            <th>Type of Property</th>
            <th>City</th>
            <th>Locality</th>
            <th>Project Name</th>
            <th>Rental Value</th>
            <th>Sale Value</th>
            <th>Land Size</th>
            <th>Built-up Size</th>
            <th>No of Bedrooms</th>
            <th>Type of Furnishing</th>
            <th>Available From</th>
            <th>No of Visits</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{padding:"10px"}}><input type="checkbox" style={{marginLeft:"30px"}}/></td>
              <td style={{padding:"10px"}}>{row?.nickName}</td>
              <td style={{padding:"10px"}}>{row.pid}</td>
              <td style={{padding:"10px"}}>{row?.typeOfProperty}</td>
              <td style={{padding:"10px"}}>{row?.city}</td>
              <td style={{padding:"10px"}}>{row?.locality}</td>
              <td style={{padding:"10px"}}>{row?.productName}</td>
              <td style={{padding:"10px"}}>{row?.productRent}</td>
              <td style={{padding:"10px"}}>{row?.saleValue}</td>
              <td style={{padding:"10px"}}>{row?.productArea}</td>
              <td style={{padding:"10px"}}>{row?.builtUpSize}</td>
              <td style={{padding:"10px"}}>{row?.noOfBedrooms}</td>
              <td style={{padding:"10px"}}>{row?.typeOfFurnishing}</td>
              <td style={{padding:"10px"}}>{row?.availableFrom}</td>
              <td style={{padding:"10px"}}>{row?.noOfVisits}</td>
              <td style={{padding:"10px"}}>
                <FaVideo style={{ cursor: "pointer", marginRight: "5px" }} />
                <FaShareAlt style={{ cursor: "pointer", marginRight: "5px" }} />
                <FaEdit
                  style={{ cursor: "pointer", marginRight: "5px" }}
                  onClick={() => handleEdit(index)}
                />
                <FaFile style={{ cursor: "pointer" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};

export default PropertyTable;

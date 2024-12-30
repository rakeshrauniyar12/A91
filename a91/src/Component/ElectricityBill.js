import React,{useState} from "react";


const ElectricityBill = ()=>{
    const [bill,setBill] = useState("[]");

      
    return(
        <div className="electricity-main-container">
             <p>Enter electricity bill details</p>
        </div>
    )
}

export default ElectricityBill;
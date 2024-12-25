import React from "react";
import "../Style/SelectAgent.css"
import search from "../Asset/Home/search.png"
import building from "../Asset/Home/building.png"
import primg from "../Asset/Home/primg.png"

const SelectAgent = ()=>{

    const agents= [
        {imageUrl:primg,name:"Shrestha Agarwal",consultationRent:"One month rent",
            consultationSale:"1% of sale value",operatingSince:"2019",noOfProperties:"999",
        },
        {imageUrl:primg,name:"Shrestha Agarwal",consultationRent:"One month rent",
            consultationSale:"1% of sale value",operatingSince:"2019",noOfProperties:"999",
        },
        {imageUrl:primg,name:"Shrestha Agarwal",consultationRent:"One month rent",
            consultationSale:"1% of sale value",operatingSince:"2019",noOfProperties:"999",
        },
        {imageUrl:primg,name:"Shrestha Agarwal",consultationRent:"One month rent",
            consultationSale:"1% of sale value",operatingSince:"2019",noOfProperties:"999",
        }
    ]
    return(
        <div className="select-main-container">
                <div className="select-search-div">
                    <input placeholder="Search by Agent Name"/>
                    <div className="select-search-image">
                    <img src={search}/>
                    </div>
                </div>
            <div className="select-agent-content">
               { agents.map((agent)=>(<div className="select-agent-content-div">
                    <div><img src={agent.imageUrl}/></div>
                    <div>
                        <p  className="agent-p11" style={{color:"#429b6a"}}>{agent.name}</p>
                        <div>
                            <p className="agent-p11">Consultation(Rent) &nbsp; {`:${agent.consultationRent}`}</p>
                            <p className="agent-p11">Consultation(Sale) &nbsp;&nbsp; {`:${agent.consultationSale}`}</p>
                            <p className="agent-p11">Operating Since &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{`:${agent.operatingSince}`}</p>
                            <p className="agent-p11">No. Of Properties &nbsp;&nbsp;&nbsp;&nbsp;{`:${agent.noOfProperties}`}</p>
                        </div>
                    </div>
                    <div>
                    <input type="checkbox" class="circle-checkbox" />
                    </div>
                </div>))}
            </div>
            <div style={{marginTop:"70px"}}>
            <div className="agent-show-bottom-button"><button>Show more</button></div>
            <div className="agent-show-bottom-button"><button>Select Executive Agent</button></div>
            </div>
           
        </div>
    )
}

export default SelectAgent;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Residential from "./Residential";
import Commercial from "./Commercial";
import Plot from "./Plot";
import DetailPage from "./DetailsPage";
import Home from "./Home";
import AddProperty from "./AddProperty";
import Property from "./Property";
import AgentRegister from "./AgentRegister";
import AgentOnboardOption from "./AgentOnboardOption";
import ChannelPartner from "./ChannelPartner";
import CompareApartments from "./CompareApartments";
import PropertyDetails from "./PropertyDetails";
import Dashboard from "./Dashboard";
import ActiveProperty from "./ActiveProperty";

const Content = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/plot" element={<Plot />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/channelpartner" element={<ChannelPartner />} />
        <Route path="/propertydetail" element={<PropertyDetails />} />
        <Route path="/compareapartment" element={<CompareApartments />} />
        <Route path="/activeproperty" element={<ActiveProperty />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/property" element={<Property />} />
        <Route path="/agentregister" element={<AgentRegister />} />
        <Route path="/agentonboardprocess" element={<AgentOnboardOption />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Content;

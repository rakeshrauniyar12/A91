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

const Content = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homedesignfirst" element={<Commercial />} />
        <Route path="/homedesign" element={<Residential />} />
        <Route path="/homedesignsecond" element={<Plot />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/channelpartner" element={<ChannelPartner />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/property" element={<Property />} />
        <Route path="/agentregister" element={<AgentRegister />} />
        <Route path="/agentonboardprocess" element={<AgentOnboardOption />} />
      </Routes>
    </div>
  );
};

export default Content;

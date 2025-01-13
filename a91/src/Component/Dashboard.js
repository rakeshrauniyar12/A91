import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ConcentricDonutChart = ({ title, data, colors, innerText }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Clear previous chart
    d3.select(chartRef.current).select("svg").remove();

    // Chart dimensions
    const width = 450;
    const height = 450;
    const radius = Math.min(width, height) / 2;

    // Create SVG container
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create two arcs for concentric donuts
    const outerArc = d3.arc().innerRadius(radius * 0.7).outerRadius(radius);
    const innerArc = d3.arc().innerRadius(radius * 0.4).outerRadius(radius * 0.7);

    // Pie generators for data
    const pie = d3.pie().value((d) => d.value).sort(null);

    // Draw outer arcs
    svg
      .selectAll(".outerArc")
      .data(pie(data.outer))
      .enter()
      .append("path")
      .attr("d", outerArc)
      .attr("fill", (d, i) => colors.outer[i]);

    // Draw inner arcs
    svg
      .selectAll(".innerArc")
      .data(pie(data.inner))
      .enter()
      .append("path")
      .attr("d", innerArc)
      .attr("fill", (d, i) => colors.inner[i]);

    // Add labels for outer arcs
    svg
      .selectAll(".outerLabel")
      .data(pie(data.outer))
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${outerArc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("font-size", "16px")
      .attr("text-anchor", "middle")
      .text(innerText)
      .text((d) => `${d.data.label}, ${d.data.value}`);

    // Add labels for inner arcs
    svg
      .selectAll(".innerLabel")
      .data(pie(data.inner))
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${innerArc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("font-size", "16px")
      .attr("text-anchor", "middle")
      .text((d) => `${d.data.label}, ${d.data.value}`);

    // Add inner text
    svg
    .append("text")
    .attr("text-anchor", "middle")
    .style("font-size", "215px") // Increased size
    .style("font-weight", "bold")
    .attr("y", 70)
    .text(innerText);

  }, [data, colors, innerText]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{title}</h3>
      <div ref={chartRef}></div>
    </div>
  );
};

const Dashboard = () => {
  // Data for All Properties
  const propertiesData = {
    inner: [
      { label: "Inactive", value: 20 },
      { label: "Draft", value: 4 },
      { label: "Active", value: 10 },
    ],
    outer: [
      { label: "Sale", value: 7 },
      { label: "Rent and Sale", value: 6 },
      { label: "Rent", value: 6 },
    ],
  };

  // Data for All Seekers
  const seekersData = {
    inner: [
      { label: "Inactive", value: 20 },
      { label: "Draft", value: 4 },
      { label: "Leads", value: 10 },
    ],
    outer: [
      { label: "B2B Seekers", value: 6 },
      { label: "Rent", value: 8 },
      { label: "Purchase", value: 5 },
    ],
  };

  // Define color schemes
  const propertiesColors = {
    inner: ["#a8d5ba", "#81c292", "#6bb67b"],
    outer: ["#5da96d", "#4c985d", "#3e8b4f"],
  };

  const seekersColors = {
    inner: ["#a8d5ba", "#81c292", "#6bb67b"],
    outer: ["#5da96d", "#4c985d", "#3e8b4f"],
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around",marginTop:"120px" }}>
      <div>
        <p style={{textAlign:"center",fontSize:"18px",fontWeight:"600",marginBottom:"30px"}}>All Properties</p>
      <ConcentricDonutChart
        data={propertiesData}
        colors={propertiesColors}
        innerText="+"
      />
      <div style={{textAlign:"center",margin:"20px"}}>
      <p  style={{fontSize:"18px",fontWeight:"600"}}>Total No. of Properties : XXX</p>
      <p style={{fontSize:"18px",fontWeight:"600"}}>Total Projected Revenue : INRXXX</p>
      </div>
        </div>
        <div>
        <p style={{textAlign:"center",fontSize:"18px",fontWeight:"600",marginBottom:"30px"}}>All Seekers</p>
      <ConcentricDonutChart
        data={seekersData}
        colors={seekersColors}
        innerText="+"
      />
      <div style={{textAlign:"center",margin:"20px"}}>
       <p style={{fontSize:"18px",fontWeight:"600"}}>Total No. of Seekers : XXX</p>
      <p style={{fontSize:"18px",fontWeight:"600"}}>Total Projected Revenue : INRXXX</p>
      </div>
        </div>
    </div>
  );
};

export default Dashboard;




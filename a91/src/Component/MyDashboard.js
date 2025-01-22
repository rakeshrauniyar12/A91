import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ConcentricDonutChart = ({ title, data, colors, innerText }) => {
  const chartRef = useRef();
  const navigate = useNavigate(); // React Router navigate function

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

    // Create arcs
    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.7)
      .outerRadius(radius);
    const innerArc = d3
      .arc()
      .innerRadius(radius * 0.4)
      .outerRadius(radius * 0.7);

    // Pie generator
    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    // Draw outer arcs
    const outerGroups = svg
      .selectAll(".outerArc")
      .data(pie(data.outer))
      .enter()
      .append("g");

    outerGroups
      .append("path")
      .attr("d", outerArc)
      .attr("fill", (d, i) => colors.outer[i])
      .attr("id", (d, i) => `outerArcPath${i}`); // Unique ID for textPath

    outerGroups
      .append("text")
      .attr("transform", (d) => {
        const centroid = outerArc.centroid(d); // Get center of the arc path
        return `translate(${centroid})`; // Position text at the center of the arc
      })
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("fill", "#333")
      .style("cursor", "pointer")
      .text((d) => d.data.label);

    // Draw inner arcs
    const innerGroups = svg
      .selectAll(".innerArc")
      .data(pie(data.inner))
      .enter()
      .append("g");

    innerGroups
      .append("path")
      .attr("d", innerArc)
      .attr("fill", (d, i) => colors.inner[i])
      .attr("id", (d, i) => `innerArcPath${i}`); // Unique ID for textPath

    innerGroups
      .append("text")
      .attr("transform", (d) => {
        const centroid = innerArc.centroid(d); // Get center of the arc path
        return `translate(${centroid})`; // Position text at the center of the arc
      })
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("fill", "#333")
      .style("cursor", "pointer")
      .text((d) => d.data.label)
      .on("click", (event, d) => {
        switch (d.data.label) {
          case "Active":
            navigate("/activeproperty");
            break;
          case "Inactive":
            navigate("/inactiveproperty");
            break;
          case "Under Negotiation":
            navigate("/undernegotiationproperty");
            break;
          default:
            break;
        }
      });

    // Add inner text with click event
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .style("font-size", "215px") // Increased size
      .style("font-weight", "bold")
      .attr("y", 70)
      .style("cursor", "pointer")
      .text(innerText)
      .on("click", () => {
        navigate("/addproperty");
      });
  }, [data, colors, innerText, navigate]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{title}</h3>
      <div ref={chartRef}></div>
    </div>
  );
};

const MyDashboard = () => {
  const propertiesData = {
    inner: [
      { label: "Inactive", value: 20 },
      { label: "Under Negotiation", value: 4 },
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
      { label: "Under Negotiation", value: 4 },
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
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "120px",
        }}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "30px",
            }}
          >
            All Properties
          </p>
          <ConcentricDonutChart
            data={propertiesData}
            colors={propertiesColors}
            innerText="+"
          />
          <div style={{ textAlign: "center", margin: "20px" }}>
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              Total No. of Properties : XXX
            </p>
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              Total Projected Revenue : INRXXX
            </p>
          </div>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "30px",
            }}
          >
            All Seekers
          </p>
          <ConcentricDonutChart
            data={seekersData}
            colors={seekersColors}
            innerText="+"
          />
          <div style={{ textAlign: "center", margin: "20px" }}>
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              Total No. of Seekers : XXX
            </p>
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              Total Projected Revenue : INRXXX
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <textarea
          placeholder="New Notification"
          className="property-text-area-1"
        ></textarea>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <textarea
          placeholder="Tasks"
          className="property-text-area-1"
        ></textarea>
      </div>
    </div>
  );
};

export default MyDashboard;

import React, { useState } from "react";
// import { LineChart } from "@mui/x-charts/LineChart";
import { Button } from "@mui/material";
import ShadowCard from "../../shadowCard/ShadowCard";
import CustomButton from "../../button/CustomButton";

const CustomStrengthGraph = ({ weeklyData = [], monthlyData = [] }) => {
  const [view, setView] = useState("week");

  const xAxisLabels = view === "week" 
    ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const xAxisNumbers = xAxisLabels.map((_, index) => index);


  let data = view === "week" ? weeklyData : monthlyData;

  if (data.length !== xAxisLabels.length) {
    data = data.slice(0, xAxisLabels.length);
  }


  const sanitizedData = data.map((val) => (typeof val === "number" && !isNaN(val) ? val : 0));

  return (
    <ShadowCard className="StrengthChart" sx1={{
        width: "700px",
    }}>
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
                <Button variant={view === "week" ? "contained" : "outlined"} onClick={() => setView("week")}>
                Weekly
                </Button>
                <Button variant={view === "month" ? "contained" : "outlined"} onClick={() => setView("month")} style={{ marginLeft: "10px" }}>
                Monthly
                </Button>
            </div>

            <LineChart
                xAxis={[
                { 
                    data: xAxisNumbers,
                    scaleType: "band",
                    label: view === "week" ? "Days of the Week" : "Months",
                    valueFormatter: (value) => xAxisLabels[value]
                }
                ]}
                series={[{ data: sanitizedData, label: "Max Weight", color: "#034870" }]}
                width={600}
                height={400}
                tooltip
                legend
            />
        </div>
    </ShadowCard>
  );
};

export default CustomStrengthGraph;

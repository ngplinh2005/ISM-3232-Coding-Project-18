import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

// Main App components
const App = () => {
  const [chartData, setChartData] = useState(null);

// Fetch data from a financial data JSON file using the fetch API inside a useEffect
  useEffect(() => {
    fetch("/financial_data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  // Display a loading message while data is being fetched
  if (!chartData) {
    return <div>Loading or failed to load data. Check console for errors.</div>;
  }

  // Import and render the chart components with fetched data
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Financial Dashboard</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App;
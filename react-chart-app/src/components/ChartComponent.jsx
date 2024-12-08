import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Implement a reusable chart component
const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

// Use useEffect to manage chart lifecycle (initialization, updates, and cleanup)
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(chartRef.current, {
      type,
      data,
      options,
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [type, data, options]);

  // Render a Chart Component
  return <canvas ref={chartRef} />;
};

export default ChartComponent;
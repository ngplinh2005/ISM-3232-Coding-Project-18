import React from "react";
import ChartComponent from "./ChartComponent";

// Functional component to render a line chart.
const LineChart = ({ data }) => {
  const lineChartData = {
    labels: data.months,
    datasets: [
      {
        label: "Monthly Profits",
        data: data.profits,
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1,
      },
    ],
  };

// Configure Line Chart options
  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Profits",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

// Render the Line Chart using ChartComponent
  return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;
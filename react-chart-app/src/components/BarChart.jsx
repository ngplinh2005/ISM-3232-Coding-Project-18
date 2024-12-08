import React from "react";
import ChartComponent from "./ChartComponent";

// Functional component to render a bar chart.
const BarChart = ({ data }) => {
  const barChartData = {
    labels: data.months,
    datasets: [
      {
        label: "Monthly Sales",
        data: data.sales,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  
// Configure Bar Chart options
  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales",
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
  
// Render the Bar Chart using ChartComponent
  return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;
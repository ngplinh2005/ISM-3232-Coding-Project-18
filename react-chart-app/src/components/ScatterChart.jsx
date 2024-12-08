import React from "react";
import ChartComponent from "./ChartComponent";

// Functional component to render a Scatter chart.
const ScatterChart = ({ data }) => {
  const scatterChartData = {
    datasets: [
      {
        label: "Expenses vs Profits",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

// Configure Scatter Chart options
  const scatterChartOptions = {
    // Add tooltips to display interactive data
    plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem) =>
              `Expense: ${tooltipItem.raw.x}, Profit: ${tooltipItem.raw.y}`,
          },
        },
      },
    scales: {
      x: {
        title: {
          display: true,
          text: "Expenses",
        },
      },
      y: {
        title: {
          display: true,
          text: "Profits",
        },
      },
    },
  };

// Render the Scatter Chart using ChartComponent
  return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;
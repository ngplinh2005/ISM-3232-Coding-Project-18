import React from "react";
import ChartComponent from "./ChartComponent";

// Functional component to render a bubble chart.
const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: [
      {
        label: "Sales, Profits, and Expenses",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 10, 
        })),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

// Configure Bubble Chart options
  const bubbleChartOptions = {
    // Add tooltips to display interactive data
    plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem) =>
              `Expense: ${tooltipItem.raw.x}, Profit: ${tooltipItem.raw.y}, Sales: ${tooltipItem.raw.r * 10}`,
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

// Render the Bubble Chart using ChartComponent
  return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions}/>;
};

export default BubbleChart;
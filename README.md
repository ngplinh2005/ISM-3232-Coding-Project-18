# ISM-3232-Coding-Project-18

Coding Challenge: Interactive Charts with React and Chart.js

Introduction
In this challenge, you will create a Dynamic Chart Dashboard using React, Vite, and Chart.js. This dashboard will display various interactive charts (Bar, Line, Scatter, Bubble) based on data fetched from an external file. You will implement reusable chart components, understand Chart.js configuration, and integrate multiple charts into a single application.

Business Case
Scenario:
A data analytics company needs a dashboard to visualize financial data dynamically. The dashboard must include various charts for sales, profits, expenses, and trends, offering an interactive experience for stakeholders.

The Data
Download the data: financial_data.json

The dataset provided includes the following fields:

months:

Timeline data spanning several years.
X-axis for the Bar Chart and Line Chart.

sales:

Monthly sales figures.
Y-axis for the Bar Chart.
Scaled to determine bubble size in the Bubble Chart.

profits:

Monthly profits.
Y-axis for the Line Chart.
Y-axis for the Scatter Chart (plotted against expenses).
Y-axis for the Bubble Chart.

expenses:

Monthly expenses.
X-axis for the Scatter Chart (plotted against profits).
X-axis for the Bubble Chart.

How It Maps to Charts

Bar Chart:

Purpose: Visualize sales trends over time.
X-axis: months.
Y-axis: sales.

Line Chart:

Purpose: Show profit trends over time.
X-axis: months.
Y-axis: profits.

Scatter Chart:

Purpose: Explore the relationship between expenses and profits.
X-axis: expenses.
Y-axis: profits.

Bubble Chart:

Purpose: Combine and analyze sales, expenses, and profits together.
X-axis: expenses.
Y-axis: profits.
Bubble size: Scaled value of sales.

Requirements
The dashboard should include:

1. Reusable Chart Component: A base component for rendering different chart types.
2. Specific Chart Types: Components for Bar, Line, Scatter, and Bubble charts, each tailored to visualize specific data.
3. Data Fetching: Fetch data from a JSON file to populate the charts.
4. Interactive Dashboard: Combine all charts in a single app, dynamically updating based on fetched data.

Tasks
1. Set Up the React Environment with Vite

Initialize a React project using Vite.
Install dependencies for React and Chart.js.
Start the development server.

Commands:
npm create vite@latest react-chart-app --template react
cd react-chart-app
npm install
npm install chart.js
npm run dev

Commit: Initialize React environment with Chart.js

2. Create the Reusable ChartComponent
File: src/components/ChartComponent.jsx

Implement a reusable chart component that accepts type, data, and options as props.

Use useEffect and useRef to manage chart lifecycle (initialization, updates, and cleanup).

Commit: Add reusable ChartComponent

3. Implement Specific Chart Components

Create the following components, each using the reusable ChartComponent:

BarChart: Displays monthly sales.
LineChart: Displays monthly profits.
ScatterChart: Displays expenses vs. profits.
BubbleChart: Displays sales, profits, and expenses.
Use appropriate data and options configurations for each chart.

Files to Create:

src/components/BarChart.jsx

src/components/LineChart.jsx

src/components/ScatterChart.jsx

src/components/BubbleChart.jsx

Commit: Add BarChart, LineChart, ScatterChart, and BubbleChart components

4. Fetch Data for Charts
File: src/App.jsx

Fetch data from a JSON file (e.g., public/data.json) using the fetch API inside a useEffect.

Store the data in a state variable (e.g., chartData) and pass it as props to the chart components.

Commit: Fetch chart data from JSON file

5. Render Charts in the App

File: src/App.jsx
Import and render the chart components with fetched data.
Display a loading message while data is being fetched.
Example Layout:

Bar Chart for monthly sales.

Line Chart for monthly profits.

Scatter Chart for expenses vs. profits.

Bubble Chart for combined metrics.

Commit: Render all charts in the App component

Submission Guidelines
GitHub Repository:

Include all source files (ChartComponent.jsx, BarChart.jsx, LineChart.jsx, ScatterChart.jsx, BubbleChart.jsx, App.jsx, etc.).
Organize the project structure for clarity and readability.
Repository Link:

Make your repository public or accessible. Share the direct URL for evaluation.
Expected Outcomes
After completing this challenge, you will:

Understand how to integrate Chart.js with React.
Build reusable chart components for dynamic visualization.
Configure various chart types with data and options.
Fetch and utilize external data sources in React.
This coding challenge equips you with the ability to create modern, data-driven dashboards, combining strong visualization techniques with React-based web development skills.
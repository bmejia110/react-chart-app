import React, {useState, useEffect } from "react";
import BarChart from "./components/BarChart.jsx";
import LineChart from "./components/LineChart.jsx";
import ScatterChart from "./components/ScatterChart.jsx";
import BubbleChart from "./components/BubbleChart.jsx";

const App = () => {
  const[chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/financial_data.json");
        if (!response.ok) {
          throw new Error("failed to fetch the fata");
        }
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
}
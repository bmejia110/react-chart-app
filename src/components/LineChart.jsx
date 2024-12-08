import React from "react";
import ChartComponent from "./ChartComponent.jsx"

const LineChart = ({ data }) => {
    const lineChartData = {
        labels: data.months,
        datasets: [
            {
                label: "Monthly Porfits",
                data: data.profits,
                borderColor: "purple",
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const lineChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <ChartComponent type ="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;
